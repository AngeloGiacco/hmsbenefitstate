"use client";

import { Ship } from "@/data/fleet";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  ship: Ship;
}

export default function FleetShipPage({ ship }: Props) {
  return (
    <div className="min-h-screen bg-navy-900 blueprint-grid">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-cyan-400 hover:underline"
        >
          ← RETURN TO FLEET REGISTER
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="naval-card p-6 font-mono"
        >
          <div className="mb-4 border-b border-cyan-400/30 pb-4">
            <h1 className="text-2xl font-bold text-offwhite">{ship.name}</h1>
            <p className="text-sm text-cyan-400">
              Pennant Number: DWP-{ship.slug.toUpperCase().slice(0, 3)}
            </p>
          </div>

          <div className="space-y-2 text-sm">
            <Row label="Class" value={ship.class} />
            <Row label="Displacement" value={ship.displacement} highlight />
            <Row label="Crew" value={ship.crew} />
            <Row label="Speed" value={ship.speed} />
            <Row label="Armament" value={ship.armament} />
            {ship.assessment && (
              <Row label="Assessment" value={ship.assessment} />
            )}
            <Row label="Commissioned" value={ship.commissioned} />
            <Row label="Status" value={ship.status} />
          </div>

          {ship.note && (
            <p className="mt-6 border-t border-cyan-400/20 pt-4 text-sm italic text-offwhite/70">
              Note: {ship.note}
            </p>
          )}
        </motion.div>

        <p className="mt-8 text-center text-xs text-offwhite/40">
          hmsbenefitstate.co.uk/fleet/{ship.slug}
        </p>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex gap-4">
      <span className="w-32 shrink-0 text-offwhite/50">{label}:</span>
      <span className={highlight ? "text-cyan-400" : "text-offwhite"}>
        {value}
      </span>
    </div>
  );
}
