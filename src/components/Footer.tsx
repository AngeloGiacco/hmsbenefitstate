"use client";

import Link from "next/link";

const sources = [
  {
    category: "WELFARE SPENDING",
    items: [
      "HM Treasury — PESA 2025",
      "DWP — Benefit Expenditure Tables 2025",
      "OBR — Economic and Fiscal Outlook, March 2025",
    ],
  },
  {
    category: "NAVAL DATA",
    items: [
      "MoD — Annual Report 2024/25",
      "House of Commons Library — UK Defence Expenditure",
      "NAO — Equipment Plan 2024–2034",
      "IISS — The Military Balance 2025",
    ],
  },
  {
    category: "SHIPBUILDING",
    items: [
      "NAO — Type 26 and Type 31 cost estimates",
      "BAE Systems — Annual Report 2024",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-offwhite/5 py-12 sm:py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Sources */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          {sources.map((group) => (
            <div key={group.category}>
              <h3 className="text-offwhite/30 text-xs tracking-[0.2em] mb-3 font-mono">
                {group.category}
              </h3>
              <div className="space-y-1">
                {group.items.map((item, i) => (
                  <p key={i} className="text-offwhite/20 text-xs leading-relaxed">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-offwhite/5 pt-8 space-y-4">
          <p className="text-offwhite/20 text-xs leading-relaxed">
            HMS Benefit State is an independent data visualisation project. Not
            affiliated with the MoD, HM Treasury, or any political party. All data
            from publicly available government sources. No cookies. No tracking.
          </p>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <Link
              href="/methodology"
              className="text-cyan-400/40 text-xs tracking-wider hover:text-cyan-400/70 transition-colors"
            >
              Full methodology &rarr;
            </Link>

            <p className="text-offwhite/15 text-xs">
              &copy; {new Date().getFullYear()} HMS Benefit State
              {" · "}
              <a
                href="https://x.com/giaccoangelo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-offwhite/30 transition-colors"
              >
                @giaccoangelo
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
