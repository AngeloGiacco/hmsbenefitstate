export interface ConstituencyData {
  slug: string;
  name: string;
  totalBenefitsAnnual: number;
  ucClaimants: number;
  pipClaimants: number;
  workingAgeClaimants: number;
  population: number;
  mpName?: string;
  mpEmail?: string;
}

// Sample data — full dataset to be generated from DWP Stat-Xplore export
export const sampleConstituencies: ConstituencyData[] = [
  {
    slug: "hackney-south-and-shoreditch",
    name: "Hackney South and Shoreditch",
    totalBenefitsAnnual: 347_000_000,
    ucClaimants: 8_200,
    pipClaimants: 3_100,
    workingAgeClaimants: 12_400,
    population: 88_000,
  },
  {
    slug: "birmingham-ladywood",
    name: "Birmingham Ladywood",
    totalBenefitsAnnual: 412_000_000,
    ucClaimants: 14_500,
    pipClaimants: 5_200,
    workingAgeClaimants: 18_300,
    population: 95_000,
  },
  {
    slug: "richmond-and-northallerton",
    name: "Richmond and Northallerton",
    totalBenefitsAnnual: 89_000_000,
    ucClaimants: 2_100,
    pipClaimants: 1_800,
    workingAgeClaimants: 3_400,
    population: 82_000,
  },
  {
    slug: "portsmouth-south",
    name: "Portsmouth South",
    totalBenefitsAnnual: 198_000_000,
    ucClaimants: 5_800,
    pipClaimants: 2_400,
    workingAgeClaimants: 8_100,
    population: 78_000,
  },
  {
    slug: "westminster-and-city-of-london",
    name: "Westminster and City of London",
    totalBenefitsAnnual: 156_000_000,
    ucClaimants: 4_200,
    pipClaimants: 1_900,
    workingAgeClaimants: 5_800,
    population: 91_000,
  },
];

// Helper to get naval comparison text
export function getNavalComparison(amount: number): string {
  const type26Cost = 840_000_000; // ~£840m per Type 26
  const yearsPerFrigate = type26Cost / amount;

  if (yearsPerFrigate <= 1) {
    return `${Math.floor(amount / type26Cost)}× Type 26 Frigates per year`;
  } else if (yearsPerFrigate <= 10) {
    return `1× Type 26 Frigate every ${yearsPerFrigate.toFixed(1)} years`;
  } else {
    return "couldn't even buy a torpedo annually";
  }
}

export function getConstituencyQuip(data: ConstituencyData): string {
  const type26Cost = 840_000_000;
  const yearsPerFrigate = type26Cost / data.totalBenefitsAnnual;

  if (data.slug.includes("portsmouth")) {
    return `HMS ${data.name} spends £${Math.round(data.totalBenefitsAnnual / 1_000_000)}m on benefits. The naval base next door is begging for crew.`;
  }
  if (yearsPerFrigate <= 3) {
    return `HMS ${data.name} could single-handedly fund a frigate every ${yearsPerFrigate.toFixed(1)} years. Instead she funds Universal Credit.`;
  }
  return `HMS ${data.name} is a modest patrol vessel. She ${yearsPerFrigate > 10 ? "couldn't even buy a torpedo annually" : `could build one warship every ${yearsPerFrigate.toFixed(0)} years`}.`;
}

export function lookupConstituency(slug: string): ConstituencyData | undefined {
  return sampleConstituencies.find((c) => c.slug === slug);
}
