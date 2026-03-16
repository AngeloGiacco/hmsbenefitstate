"use client";

import { motion } from "framer-motion";
import type { Ship } from "@/data/fleet";

interface NavalCardProps {
  ship: Ship;
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
      <span style={{ color: "#22d3ee" }} className="shrink-0 uppercase">
        {label}:
      </span>
      <span style={{ color: "#e8e6e3" }}>{value}</span>
    </div>
  );
}

export default function NavalCard({ ship }: NavalCardProps) {
  const topBorder = `╔${"═".repeat(60)}╗`;
  const bottomBorder = `╚${"═".repeat(60)}╝`;

  return (
    <motion.div
      className="naval-card blueprint-grid relative overflow-hidden rounded-sm p-5 font-mono text-xs sm:text-sm"
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      {/* Glow border overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-sm"
        style={{
          boxShadow: "inset 0 0 0 1px rgba(34, 211, 238, 0.3)",
        }}
        variants={{
          rest: {
            boxShadow:
              "inset 0 0 0 1px rgba(34, 211, 238, 0.3), 0 0 0px rgba(34, 211, 238, 0)",
          },
          hover: {
            boxShadow:
              "inset 0 0 0 1px rgba(34, 211, 238, 0.6), 0 0 20px rgba(34, 211, 238, 0.15)",
          },
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Box-drawing header */}
      <pre
        className="mb-3 overflow-hidden text-[10px] leading-tight sm:text-xs"
        style={{ color: "#22d3ee" }}
      >
        {topBorder}
        {"\n"}║{"  " + ship.name.padEnd(58)}║{"\n"}
        {bottomBorder}
      </pre>

      {/* Fields */}
      <div className="flex flex-col gap-1.5">
        <Field label="Class" value={ship.class} />
        <Field label="Displacement" value={ship.displacement} />
        <Field label="Crew" value={ship.crew} />
        <Field label="Speed" value={ship.speed} />
        <Field label="Armament" value={ship.armament} />
        <Field label="Commissioned" value={ship.commissioned} />
        <Field label="Status" value={ship.status} />
        {ship.note && <Field label="Note" value={ship.note} />}
        {ship.assessment && (
          <Field label="Assessment" value={ship.assessment} />
        )}
      </div>
    </motion.div>
  );
}
