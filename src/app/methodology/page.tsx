import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methodology — HMS Benefit State",
  description:
    "Data sources, methodology, and downloadable datasets used in HMS Benefit State.",
};

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-navy-900 blueprint-grid">
      <div className="mx-auto max-w-3xl px-4 py-16 font-mono">
        <h1 className="mb-2 text-2xl font-bold text-offwhite">
          METHODOLOGY & DATA SOURCES
        </h1>
        <p className="mb-8 text-sm text-cyan-400">
          ADMIRALTY TECHNICAL DOCUMENTATION — UNCLASSIFIED
        </p>

        <section className="space-y-8 text-sm text-offwhite/80">
          <div>
            <h2 className="mb-2 text-lg text-cyan-400">
              Welfare Expenditure Data
            </h2>
            <ul className="list-inside list-disc space-y-1">
              <li>
                GOV.UK Benefit Expenditure &amp; Caseload Tables (Dec 2024)
              </li>
              <li>DWP Stat-Xplore (constituency-level data)</li>
              <li>OBR Economic &amp; Fiscal Outlook (March 2025)</li>
              <li>HM Treasury PESA 2025</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-lg text-cyan-400">
              Defence Expenditure Data
            </h2>
            <ul className="list-inside list-disc space-y-1">
              <li>House of Commons Library CBP-8175 (Oct 2025)</li>
              <li>MOD Defence Departmental Resources 2024</li>
              <li>NAO Equipment Plan Reports 2023-2024</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-lg text-cyan-400">Fleet Status</h2>
            <ul className="list-inside list-disc space-y-1">
              <li>MOD Parliamentary Answers (Jan 2026)</li>
              <li>Navy Lookout</li>
              <li>19FortyFive fleet analysis (Feb 2026)</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-lg text-cyan-400">Ship Costs</h2>
            <ul className="list-inside list-disc space-y-1">
              <li>BAE Systems Type 26 contract (Nov 2022: £4.2bn/5 ships)</li>
              <li>
                BAE Systems Type 26 batch 1 (Jul 2017: £3.7bn/3 ships)
              </li>
              <li>Type 31 programme (£1.25bn/5 ships)</li>
              <li>NAO Equipment Plan 2023-2033 (Astute, Dreadnought)</li>
              <li>QE-class outturn (~£7bn for 2 ships)</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-lg text-cyan-400">
              Constituency Data
            </h2>
            <ul className="list-inside list-disc space-y-1">
              <li>
                DWP Stat-Xplore (quarterly, by parliamentary constituency)
              </li>
              <li>NOMIS labour market statistics</li>
              <li>ONS mid-year population estimates</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-lg text-cyan-400">
              MP Contact Details
            </h2>
            <ul className="list-inside list-disc space-y-1">
              <li>TheyWorkForYou API (members.parliament.uk fallback)</li>
            </ul>
          </div>

          <div className="border-t border-cyan-400/20 pt-6">
            <h2 className="mb-2 text-lg text-cyan-400">Notes</h2>
            <ul className="list-inside list-disc space-y-1">
              <li>
                All welfare figures are nominal (not inflation-adjusted).
              </li>
              <li>
                Ship costs are approximate and based on most recent contract
                values.
              </li>
              <li>
                This site is not affiliated with the Ministry of Defence, DWP,
                or any political party.
              </li>
            </ul>
          </div>

          <div className="border-t border-cyan-400/20 pt-6 text-xs text-offwhite/40">
            <p>Data vintage: PESA 2025 / DWP Q4 2024</p>
            <p className="mt-1">
              All constituency calculations are reproducible from raw DWP
              exports. Downloadable CSV coming soon.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
