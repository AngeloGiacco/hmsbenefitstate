"use client";

import Link from "next/link";

const sources = [
  {
    category: "WELFARE SPENDING",
    items: [
      "HM Treasury — Public Expenditure Statistical Analyses (PESA) 2025",
      "DWP — Benefit Expenditure and Caseload Tables 2025",
      "OBR — Economic and Fiscal Outlook, March 2025",
      "OBR — Welfare Trends Report 2025",
    ],
  },
  {
    category: "NAVAL DATA",
    items: [
      "Ministry of Defence — Annual Report and Accounts 2024/25",
      "House of Commons Library — UK Defence Expenditure (CDP-2025-0042)",
      "NAO — Equipment Plan 2024–2034",
      "IISS — The Military Balance 2025",
      "Royal Navy — Fleet Status (public records)",
    ],
  },
  {
    category: "CONSTITUENCY DATA",
    items: [
      "DWP Stat-Xplore — UC and legacy benefit caseloads by constituency",
      "ONS — Parliamentary constituency population estimates",
      "House of Commons Library — constituency profiles",
    ],
  },
  {
    category: "SHIPBUILDING COSTS",
    items: [
      "NAO — Type 26 and Type 31 cost estimates",
      "BAE Systems — Annual Report 2024",
      "RAND Corporation — shipbuilding cost analysis (public reports)",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="py-16 px-4 border-t border-navy-600">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl font-bold text-cyan-400 tracking-widest mb-8">
          SHIP&apos;S LOG — DATA SOURCES
        </h2>

        <div className="space-y-8 mb-12">
          {sources.map((group) => (
            <div key={group.category}>
              <h3 className="text-offwhite/50 text-xs tracking-widest mb-3">
                {group.category}
              </h3>
              <div className="pl-4 border-l border-navy-600 space-y-1">
                {group.items.map((item, i) => (
                  <p
                    key={i}
                    className="text-offwhite/40 text-xs font-mono leading-relaxed"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-navy-600 pt-8 space-y-4">
          <p className="text-offwhite/30 text-xs font-mono">
            DATA VINTAGE: Figures reflect 2025/26 financial year estimates
            unless otherwise noted. Updated annually.
          </p>

          <p className="text-offwhite/30 text-xs font-mono leading-relaxed">
            HMS Benefit State is an independent data visualisation project. It
            is not affiliated with the Ministry of Defence, HM Treasury, or
            any political party. All data is drawn from publicly available
            government sources. This site does not store personal data,
            set cookies, or track users.
          </p>

          <div className="pt-4">
            <Link
              href="/methodology"
              className="text-cyan-400/60 text-xs tracking-wider underline underline-offset-4 hover:text-cyan-400 transition-colors"
            >
              FULL METHODOLOGY &rarr;
            </Link>
          </div>

          <p className="text-offwhite/20 text-xs font-mono pt-4">
            &copy; {new Date().getFullYear()} HMS Benefit State. All rights
            reserved. Built with Next.js. Powered by public data and mild
            exasperation.
          </p>

          <p className="text-offwhite/20 text-[10px] font-mono pt-6 text-center">
            Built by{" "}
            <a
              href="https://x.com/giaccoangelo"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-offwhite/40 transition-colors"
            >
              @giaccoangelo
            </a>
            {" · "}This project is not affiliated with any political entity.
          </p>
        </div>
      </div>
    </footer>
  );
}
