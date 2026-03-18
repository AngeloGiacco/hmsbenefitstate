export interface Ship {
  name: string;
  slug: string;
  class: string;
  displacement: string;
  displacementValue: number; // raw number for calculations
  crew: string;
  speed: string;
  armament: string;
  commissioned: string;
  status: string;
  note?: string;
  assessment?: string;
  category: "welfare" | "navy";
}

export const flagshipData: Ship = {
  name: "HMS BENEFIT STATE",
  slug: "benefit-state",
  class: "Welfare-class dreadnought",
  displacement: "£334,000,000,000 (2025/26)",
  displacementValue: 334_000_000_000,
  crew: "5.5 million working-age claimants + 12.7m pensioners",
  speed: "+£117bn/year and accelerating",
  armament: "None",
  commissioned: "1948",
  status: "Permanently alongside. Has never put to sea.",
  category: "welfare",
};

export const welfareFleet: Ship[] = [
  {
    name: "HMS TRIPLE LOCK",
    slug: "triple-lock",
    class: "Pension-class battleship",
    displacement: "£146,100,000,000",
    displacementValue: 146_100_000_000,
    crew: "12.7 million pensioners",
    speed: "Whichever is highest: inflation, earnings, or 2.5%. Always upward.",
    armament: "Electoral invincibility",
    commissioned: "2011",
    status: "Unsinkable. No government has survived attempting to scuttle her.",
    note: "HMS Triple Lock alone displaces more than twice the entire defence budget.",
    category: "welfare",
  },
  {
    name: "HMS UNIVERSAL CREDIT",
    slug: "universal-credit",
    class: "Means-tested cruiser",
    displacement: "£80,900,000,000",
    displacementValue: 80_900_000_000,
    crew: "6.2 million households",
    speed: "Was meant to reach full speed by 2017. Currently estimated: 2025. Eight years behind schedule.",
    armament: "Sanctions",
    commissioned: "2013",
    status: "Still rolling out.",
    note: "Her displacement alone could fund the entire Royal Navy equipment plan twice over every decade.",
    category: "welfare",
  },
  {
    name: "HMS PIP",
    slug: "pip",
    class: "Disability-class frigate",
    displacement: "£22,000,000,000",
    displacementValue: 22_000_000_000,
    crew: "3.4 million claimants",
    speed: "Doubled since commissioning. Fastest-growing vessel in the fleet.",
    armament: "None",
    assessment: "6+ months average wait time",
    commissioned: "2013",
    status: "Under review. Government has announced plans to reduce her displacement. Previous attempts have failed.",
    category: "welfare",
  },
  {
    name: "HMS HOUSING BENEFIT",
    slug: "housing-benefit",
    class: "Rental-class support vessel",
    displacement: "£37,800,000,000",
    displacementValue: 37_800_000_000,
    crew: "Varies. Grows when landlords raise rents. Which is always.",
    speed: "Proportional to house prices. So: fast.",
    armament: "Enriches landlords",
    commissioned: "1972",
    status: "Being gradually absorbed into HMS Universal Credit.",
    note: "Her annual displacement could purchase 45 Type 26 frigates.",
    category: "welfare",
  },
];

export const realNavyShips: Ship[] = [
  {
    name: "HMS QUEEN ELIZABETH (R08)",
    slug: "queen-elizabeth",
    class: "Queen Elizabeth-class carrier",
    displacement: "65,000 tonnes (not pounds)",
    displacementValue: 3_500_000_000,
    crew: "1,600 (when she can find them)",
    speed: "25+ knots (when operational)",
    armament: "F-35B Lightning II (fewer than planned)",
    commissioned: "2017",
    status: "In dry dock at Rosyth. Months behind schedule. Propeller shaft issues. Again.",
    category: "navy",
  },
  {
    name: "HMS PRINCE OF WALES (R09)",
    slug: "prince-of-wales",
    class: "Queen Elizabeth-class carrier",
    displacement: "65,000 tonnes",
    displacementValue: 3_500_000_000,
    crew: "1,600",
    speed: "25+ knots",
    armament: "F-35B Lightning II",
    commissioned: "2019",
    status: "In post-deployment maintenance after 8 months in the Indo-Pacific. The only carrier deployment Britain managed in 2025.",
    note: "Has spent 78.7% of her commissioned life NOT at sea.",
    category: "navy",
  },
];

export interface FleetReadiness {
  type: string;
  operational: number;
  total: number;
  note?: string;
  decommissioned?: boolean;
  underConstruction?: boolean;
}

export const fleetReadiness: FleetReadiness[] = [
  { type: "Type 45 Destroyers", operational: 3, total: 6 },
  { type: "Type 23 Frigates", operational: 6, total: 7, note: "oldest: 30 years old" },
  { type: "Astute-class SSNs", operational: 1, total: 5 },
  { type: "QE-class Carriers", operational: 0, total: 2 },
  { type: "Amphibious Ships", operational: 0, total: 0, decommissioned: true, note: "March 2025. No replacement." },
  { type: "Type 26 Frigates", operational: 0, total: 0, underConstruction: true, note: "None delivered. First: \"late 2020s\"." },
  { type: "Type 31 Frigates", operational: 0, total: 0, underConstruction: true, note: "None delivered. First: ~2027." },
];

export interface ShipyardComparison {
  shipType: string;
  count: number;
  navyOrdered: string;
  navyNote: string;
  description?: string;
  specs?: { length: string; crew: string; cost: string; role: string };
}

export const shipyardComparisons: ShipyardComparison[] = [
  {
    shipType: "Type 26 Frigates",
    count: 139,
    navyOrdered: "8",
    navyNote: "The Royal Navy has ordered 8. Total. Ever.",
    description: "A 149-metre anti-submarine warfare frigate. Carries a helicopter, torpedoes, cruise missiles, and a 5-inch gun. Hunts submarines so aircraft carriers don't get sunk.",
    specs: { length: "149.9m", crew: "157", cost: "£840m each", role: "Anti-submarine warfare" },
  },
  {
    shipType: "Astute-class Submarines",
    count: 73,
    navyOrdered: "7",
    navyNote: "The Royal Navy has 7. One works.",
    description: "A nuclear-powered attack submarine. Can stay submerged indefinitely, fire Tomahawk cruise missiles at targets 1,000 miles away, and listen to shipping across entire oceans.",
    specs: { length: "97m", crew: "98", cost: "£1.6bn each", role: "Nuclear attack submarine" },
  },
  {
    shipType: "Queen Elizabeth-class Carriers",
    count: 33,
    navyOrdered: "2",
    navyNote: "The Royal Navy has 2. Both are in dock.",
    description: "The largest warship ever built for the Royal Navy. 65,000 tonnes, 280 metres long. Carries up to 40 F-35 stealth fighters. Projects power anywhere on Earth — when it works.",
    specs: { length: "280m", crew: "1,600", cost: "£3.5bn each", role: "Aircraft carrier" },
  },
];

export interface TimelineEntry {
  year: number;
  vessels: number;
  event: string;
}

export const timelineData: TimelineEntry[] = [
  { year: 1990, vessels: 150, event: '"Options for Change" review begins post-Cold War cuts' },
  { year: 1997, vessels: 100, event: "Strategic Defence Review" },
  { year: 2005, vessels: 85, event: '"Delivering Security in a Changing World" cuts' },
  { year: 2010, vessels: 70, event: "SDSR 2010: carriers cancelled then un-cancelled, Harriers scrapped, Ark Royal decommissioned" },
  { year: 2015, vessels: 63, event: "SDSR 2015: Type 26 cut from 13 to 8" },
  { year: 2020, vessels: 60, event: '"Global Britain" announced. Fleet continues shrinking.' },
  { year: 2025, vessels: 55, event: "Albion-class retired. No amphibious capability. Both carriers in dock simultaneously." },
  { year: 2026, vessels: 30, event: '"The Royal Navy has more admirals than ships."' },
];

export interface SliderStop {
  percentage: number;
  amount: string;
  amountValue: number;
  fleetGains: string;
  welfareRemaining: string;
  welfareIncrease: string;
  welfarePercentIncrease: string;
  quip: string;
}

export const sliderStops: SliderStop[] = [
  {
    percentage: 1,
    amount: "£1.17bn/yr",
    amountValue: 1_170_000_000,
    fleetGains: "+1 frigate per year. RFA replenishment ships funded. Crew shortage addressed.",
    welfareRemaining: "£332.8bn",
    welfareIncrease: "+£115.8bn since 2015",
    welfarePercentIncrease: "+53%",
    quip: "A modest start. The French are not yet worried.",
  },
  {
    percentage: 2,
    amount: "£2.34bn/yr",
    amountValue: 2_340_000_000,
    fleetGains: "Frigate and submarine build accelerated. Third carrier feasible within 15 years.",
    welfareRemaining: "£331.7bn",
    welfareIncrease: "+£114.7bn since 2015",
    welfarePercentIncrease: "+53%",
    quip: "NATO notices.",
  },
  {
    percentage: 3,
    amount: "£3.5bn/yr",
    amountValue: 3_500_000_000,
    fleetGains: "Full dream fleet in 15 years. 4 carriers, 12 SSNs, 24 escorts.",
    welfareRemaining: "£330.5bn",
    welfareIncrease: "+£113.5bn since 2015",
    welfarePercentIncrease: "+52%",
    quip: "Britain has a navy again.",
  },
  {
    percentage: 5,
    amount: "£5.85bn/yr",
    amountValue: 5_850_000_000,
    fleetGains: "Dream fleet in 10 years plus significant autonomous systems and R&D.",
    welfareRemaining: "£328.2bn",
    welfareIncrease: "+£111.2bn since 2015",
    welfarePercentIncrease: "+51%",
    quip: "Britannia is checking Google Maps for the waves she used to rule.",
  },
  {
    percentage: 10,
    amount: "£11.7bn/yr",
    amountValue: 11_700_000_000,
    fleetGains: "Largest naval expansion since WWII. Entirely new shipyard infrastructure. Export programme.",
    welfareRemaining: "£322.3bn",
    welfareIncrease: "+£105.3bn since 2015",
    welfarePercentIncrease: "+49%",
    quip: "The Admiralty is weeping with joy. The Treasury is just weeping.",
  },
];

// Spending rates for live ticker
export const WELFARE_PER_SECOND = 10_594; // £10,594/sec
export const NAVY_PER_SECOND = 491; // £491/sec
