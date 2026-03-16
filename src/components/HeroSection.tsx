"use client";

import { flagshipData } from "@/data/fleet";
import type { Ship } from "@/data/fleet";
import LiveTicker from "./LiveTicker";

function ShipCard({ ship, pennant }: { ship: Ship; pennant?: string }) {
  const fields = [
    ["CLASS", ship.class],
    ["DISPLACEMENT", ship.displacement],
    ["CREW", ship.crew],
    ["SPEED", ship.speed],
    ["ARMAMENT", ship.armament],
    ["COMMISSIONED", ship.commissioned],
    ["STATUS", ship.status],
  ];

  if (pennant) {
    fields.unshift(["PENNANT NO.", pennant]);
  }

  const title = ship.name;
  // Box width: determine based on longest content line or title
  const innerWidth = 56;
  const padTitle = Math.max(0, innerWidth - title.length);
  const leftPad = Math.floor(padTitle / 2);
  const rightPad = padTitle - leftPad;

  return (
    <pre className="text-cyan-400 text-xs md:text-sm leading-snug overflow-x-auto">
      {`╔${"═".repeat(innerWidth + 2)}╗\n`}
      {`║ ${" ".repeat(leftPad)}${title}${" ".repeat(rightPad)} ║\n`}
      {`╠${"═".repeat(innerWidth + 2)}╣\n`}
      {fields.map(([label, value], i) => {
        const line = `${label}: ${value}`;
        const pad = Math.max(0, innerWidth - line.length);
        return (
          <span key={i}>
            {`║ ${line}${" ".repeat(pad)} ║\n`}
          </span>
        );
      })}
      {`╚${"═".repeat(innerWidth + 2)}╝`}
    </pre>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-navy-900 blueprint-grid">
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 md:py-24">
        {/* Flagship card */}
        <div className="flex justify-center mb-8">
          <ShipCard ship={flagshipData} pennant="DWP-001" />
        </div>

        {/* Description */}
        <p className="text-offwhite/70 text-sm md:text-base italic leading-relaxed max-w-2xl mx-auto text-center mb-12">
          Her displacement exceeds the combined defence budgets of France,
          Germany, and Italy. She carries no weapons, has never put to sea, and
          grows heavier every year. She is the most expensive vessel ever
          commissioned by any nation in history, and she is{" "}
          <span className="text-cyan-400 font-bold not-italic">
            entirely landlocked
          </span>
          .
        </p>

        {/* Live Ticker */}
        <LiveTicker />
      </div>
    </section>
  );
}
