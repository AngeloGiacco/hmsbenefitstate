import { NextRequest } from "next/server";

// National statistics (2023/24 DWP published data)
// Used to estimate constituency-level benefit expenditure from claimant counts
const NATIONAL = {
  // Total working-age benefit expenditure (UC, PIP, DLA, ESA, HB, etc.)
  totalWorkingAgeBenefitSpend: 133_000_000_000,
  // Total UC households nationally
  totalUCHouseholds: 6_300_000,
  // Total working-age claimants (all benefits)
  totalWorkingAgeClaimants: 5_500_000,
  // Number of constituencies
  constituencies: 650,
  // Average UC spend per household per year
  avgUCPerHousehold: 13_500,
  // Type 26 frigate cost
  type26Cost: 840_000_000,
};

interface PostcodesIOResult {
  status: number;
  result: {
    parliamentary_constituency_2024: string | null;
    parliamentary_constituency: string | null;
    codes: {
      parliamentary_constituency_2024: string;
      parliamentary_constituency: string;
    };
  };
}

interface NomisResponse {
  obs: Array<{
    obs_value: {
      value: number;
    };
  }>;
}

interface ConstituencyResponse {
  name: string;
  totalBenefitsAnnual: number;
  ucHouseholds: number;
  workingAgeClaimants: number;
  navalComparison: string;
  quip: string;
  dataSource: string;
}

function getNavalComparison(amount: number): string {
  const yearsPerFrigate = NATIONAL.type26Cost / amount;

  if (amount >= NATIONAL.type26Cost) {
    const frigatesPerYear = (amount / NATIONAL.type26Cost).toFixed(1);
    return `${frigatesPerYear} Type 26 Frigates per year`;
  } else if (yearsPerFrigate <= 2) {
    return `${yearsPerFrigate.toFixed(2)} Type 26 Frigates per year`;
  } else if (yearsPerFrigate <= 10) {
    return `1 Type 26 Frigate every ${yearsPerFrigate.toFixed(1)} years`;
  } else {
    return "couldn't even buy a torpedo annually";
  }
}

function getQuip(name: string, totalBenefitsAnnual: number): string {
  const yearsPerFrigate = NATIONAL.type26Cost / totalBenefitsAnnual;
  const spendMil = Math.round(totalBenefitsAnnual / 1_000_000);

  if (name.toLowerCase().includes("portsmouth")) {
    return `HMS ${name} spends £${spendMil}m on benefits. The naval base next door is begging for crew.`;
  }
  if (name.toLowerCase().includes("plymouth")) {
    return `HMS ${name} spends £${spendMil}m on benefits within sight of Devonport dockyard. The irony is not lost on the last remaining dockworkers.`;
  }
  if (name.toLowerCase().includes("barrow")) {
    return `HMS ${name}: where the submarines are built, but the welfare bill sails on regardless.`;
  }
  if (yearsPerFrigate <= 2) {
    return `HMS ${name} could fund a frigate every ${yearsPerFrigate.toFixed(1)} years. Instead she funds Universal Credit.`;
  }
  if (yearsPerFrigate <= 5) {
    return `HMS ${name} is a serious vessel. £${spendMil}m per year — enough to make the Admiralty jealous.`;
  }
  if (spendMil < 100) {
    return `HMS ${name} is barely a dinghy at £${spendMil}m. The residents are clearly pulling their weight.`;
  }
  return `HMS ${name} displaces £${spendMil}m in benefits annually. That's a lot of Universal Credit.`;
}

export async function POST(request: NextRequest) {
  try {
    const { postcode } = await request.json();

    if (!postcode || typeof postcode !== "string") {
      return Response.json(
        { error: "Please enter a valid postcode" },
        { status: 400 }
      );
    }

    // Clean postcode: remove spaces, uppercase
    const cleanPostcode = postcode.replace(/\s+/g, "").toUpperCase();

    // 1. Look up constituency from postcodes.io
    const pcRes = await fetch(
      `https://api.postcodes.io/postcodes/${encodeURIComponent(cleanPostcode)}`,
      { next: { revalidate: 86400 } } // Cache for 24 hours
    );

    if (!pcRes.ok) {
      return Response.json(
        { error: "Invalid postcode. Please check and try again." },
        { status: 400 }
      );
    }

    const pcData: PostcodesIOResult = await pcRes.json();

    if (pcData.status !== 200 || !pcData.result) {
      return Response.json(
        { error: "Could not find that postcode. Please check and try again." },
        { status: 400 }
      );
    }

    const constituencyName =
      pcData.result.parliamentary_constituency_2024 ||
      pcData.result.parliamentary_constituency;
    const constituencyCode =
      pcData.result.codes.parliamentary_constituency_2024 ||
      pcData.result.codes.parliamentary_constituency;

    if (!constituencyName) {
      return Response.json(
        { error: "Could not determine constituency for this postcode." },
        { status: 400 }
      );
    }

    // 2. Try to get real claimant count data from NOMIS (ONS)
    // The Claimant Count dataset (NM_162_1) provides UC/JSA claimants by constituency
    let ucHouseholds: number | null = null;
    let dataSource = "estimated from national DWP statistics";

    try {
      const nomisUrl = new URL(
        "https://www.nomisweb.co.uk/api/v01/dataset/NM_162_1.data.json"
      );
      nomisUrl.searchParams.set("geography", constituencyCode);
      nomisUrl.searchParams.set("sex", "7"); // Total
      nomisUrl.searchParams.set("age", "0"); // All ages
      nomisUrl.searchParams.set("measure", "1"); // Claimants
      nomisUrl.searchParams.set("measures", "20100"); // Value
      nomisUrl.searchParams.set("time", "latest");

      const nomisRes = await fetch(nomisUrl.toString(), {
        signal: AbortSignal.timeout(5000),
        next: { revalidate: 86400 },
      });

      if (nomisRes.ok) {
        const nomisData: NomisResponse = await nomisRes.json();
        if (nomisData.obs?.[0]?.obs_value?.value) {
          // Claimant count ≈ UC job seekers. Total UC households are typically 3-4x this.
          const claimantCount = nomisData.obs[0].obs_value.value;
          ucHouseholds = Math.round(claimantCount * 3.5);
          dataSource = "ONS claimant count data (NOMIS), DWP expenditure ratios";
        }
      }
    } catch {
      // NOMIS unavailable — fall back to national averages
    }

    // 3. If NOMIS didn't work, try the DWP Stat-Xplore open data API
    if (!ucHouseholds) {
      try {
        // Stat-Xplore open table API for UC households by constituency
        const statXploreUrl = `https://stat-xplore.dwp.gov.uk/webapi/rest/v1/table?database=str:database:UC_Households&measures=str:count:UC_Households:V_F_UC_HOUSEHOLDS&dimensions=[str:field:UC_Households:V_F_UC_HOUSEHOLDS:PCON24].[str:valueof:UC_Households:V_F_UC_HOUSEHOLDS:PCON24:V_C_PCON24:${constituencyCode}]&recodes=&totals=`;

        const sxRes = await fetch(statXploreUrl, {
          signal: AbortSignal.timeout(5000),
          next: { revalidate: 86400 },
        });

        if (sxRes.ok) {
          const sxData = await sxRes.json();
          if (sxData?.cubes?.values?.[0]?.[0]) {
            ucHouseholds = sxData.cubes.values[0][0];
            dataSource = "DWP Stat-Xplore UC Households data";
          }
        }
      } catch {
        // Stat-Xplore unavailable — continue with estimate
      }
    }

    // 4. Calculate benefit expenditure
    // If we have UC households, use them as a basis for estimation
    // If not, use the national average
    if (!ucHouseholds) {
      ucHouseholds = Math.round(
        NATIONAL.totalUCHouseholds / NATIONAL.constituencies
      );
      dataSource = "estimated from national DWP averages (live data unavailable)";
    }

    // Estimate total benefit expenditure from UC households
    // UC households correlate strongly with overall benefit spending
    // Ratio: national total working-age spend / national UC households
    const spendPerUCHousehold =
      NATIONAL.totalWorkingAgeBenefitSpend / NATIONAL.totalUCHouseholds;
    const totalBenefitsAnnual = Math.round(
      ucHouseholds * spendPerUCHousehold
    );

    // Estimate working-age claimants (broader than UC — includes PIP, DLA, etc.)
    const workingAgeClaimants = Math.round(
      ucHouseholds *
        (NATIONAL.totalWorkingAgeClaimants / NATIONAL.totalUCHouseholds)
    );

    const result: ConstituencyResponse = {
      name: constituencyName,
      totalBenefitsAnnual,
      ucHouseholds,
      workingAgeClaimants,
      navalComparison: getNavalComparison(totalBenefitsAnnual),
      quip: getQuip(constituencyName, totalBenefitsAnnual),
      dataSource,
    };

    return Response.json(result);
  } catch (err) {
    console.error("Constituency lookup error:", err);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
