"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { welfareFleet } from "@/data/fleet";
import type { Ship } from "@/data/fleet";

function SmallShipCard({ ship }: { ship: Ship }) {
  const fields = [
    ["CLASS", ship.class],
    ["DISPLACEMENT", ship.displacement],
    ["CREW", ship.crew],
    ["SPEED", ship.speed],
    ["ARMAMENT", ship.armament],
    ["COMMISSIONED", ship.commissioned],
    ["STATUS", ship.status],
  ];

  if (ship.assessment) {
    fields.push(["ASSESSMENT", ship.assessment]);
  }

  const title = ship.name;
  const innerWidth = 48;
  const padTitle = Math.max(0, innerWidth - title.length);
  const leftPad = Math.floor(padTitle / 2);
  const rightPad = padTitle - leftPad;

  return (
    <div>
      <pre className="text-cyan-400 text-[10px] md:text-xs leading-snug overflow-x-auto">
        {`╔${"═".repeat(innerWidth + 2)}╗\n`}
        {`║ ${" ".repeat(leftPad)}${title}${" ".repeat(rightPad)} ║\n`}
        {`╠${"═".repeat(innerWidth + 2)}╣\n`}
        {fields.map(([label, value], i) => {
          const line = `${label}: ${value}`;
          const trimmed =
            line.length > innerWidth
              ? line.slice(0, innerWidth - 1) + "\u2026"
              : line;
          const pad = Math.max(0, innerWidth - trimmed.length);
          return (
            <span key={i}>
              {`║ ${trimmed}${" ".repeat(pad)} ║\n`}
            </span>
          );
        })}
        {`╚${"═".repeat(innerWidth + 2)}╝`}
      </pre>
      {ship.note && (
        <p className="text-offwhite/50 text-xs mt-2 italic leading-relaxed">
          {ship.note}
        </p>
      )}
    </div>
  );
}

function AnimatedCard({ ship, index }: { ship: Ship; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      className="naval-card rounded p-4 md:p-6"
    >
      <SmallShipCard ship={ship} />
    </motion.div>
  );
}

export default function FleetRegister() {
  return (
    <section className="bg-navy-900 py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <h2 className="text-cyan-400 text-lg md:text-xl font-bold tracking-wider uppercase text-center mb-2">
          The Fleet Register
        </h2>
        <p className="text-offwhite/50 text-sm md:text-base text-center mb-12 tracking-wide">
          HMS BENEFIT STATE&apos;s Sister Ships
        </p>

        {/* Fleet cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {welfareFleet.map((ship, index) => (
            <AnimatedCard key={ship.slug} ship={ship} index={index} />
          ))}
        </div>

        {/* Comparison paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-offwhite/60 text-sm md:text-base leading-relaxed text-center max-w-2xl mx-auto border-t border-cyan-400/10 pt-8"
        >
          Combined displacement:{" "}
          <span className="text-coral font-bold">£334,000,000,000</span> per
          year. That is more than the entire defence budgets of France, Germany,
          Italy, Spain, Poland, the Netherlands, and Norway{" "}
          <span className="italic">combined</span>. The Royal Navy&apos;s share
          of actual defence spending would not cover the fuel costs of this
          fleet&apos;s administrative offices.
        </motion.p>
      </div>
    </section>
  );
}
