"use client";

import { motion } from "framer-motion";
import { realNavyShips, fleetReadiness } from "@/data/fleet";
import type { Ship, FleetReadiness } from "@/data/fleet";

function ShipCard({ ship, index }: { ship: Ship; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="font-mono text-sm"
    >
      <div className="text-[#e8e6e3]/40">
        ╭────────────────────────────────────────────────╮
      </div>
      <div className="flex">
        <span className="text-[#e8e6e3]/40">│</span>
        <span className="flex-1 px-2 text-[#22d3ee] font-bold truncate">
          {ship.name}
        </span>
        <span className="text-[#e8e6e3]/40">│</span>
      </div>
      <div className="text-[#e8e6e3]/40">
        ├────────────────────────────────────────────────┤
      </div>
      {[
        ["Class", ship.class],
        ["Displacement", ship.displacement],
        ["Crew", ship.crew],
        ["Speed", ship.speed],
        ["Armament", ship.armament],
        ["Commissioned", ship.commissioned],
      ].map(([label, value]) => (
        <div key={label} className="flex">
          <span className="text-[#e8e6e3]/40">│</span>
          <span className="px-2 flex-1">
            <span className="text-[#e8e6e3]/60">{label}:</span>{" "}
            <span className="text-[#e8e6e3]">{value}</span>
          </span>
          <span className="text-[#e8e6e3]/40">│</span>
        </div>
      ))}
      <div className="text-[#e8e6e3]/40">
        ├────────────────────────────────────────────────┤
      </div>
      <div className="flex">
        <span className="text-[#e8e6e3]/40">│</span>
        <span className="px-2 flex-1">
          <span className="text-[#e8e6e3]/60">Status:</span>{" "}
          <span className="text-amber-400">{ship.status}</span>
        </span>
        <span className="text-[#e8e6e3]/40">│</span>
      </div>
      {ship.note && (
        <div className="flex">
          <span className="text-[#e8e6e3]/40">│</span>
          <span className="px-2 flex-1 text-[#e8e6e3]/50 italic">
            {ship.note}
          </span>
          <span className="text-[#e8e6e3]/40">│</span>
        </div>
      )}
      <div className="text-[#e8e6e3]/40">
        ╰────────────────────────────────────────────────╯
      </div>
    </motion.div>
  );
}

function ProgressBar({ item }: { item: FleetReadiness }) {
  const maxBlocks = 12;

  if (item.decommissioned) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="font-mono text-sm mb-4"
      >
        <div className="flex items-baseline justify-between mb-1">
          <span className="text-[#e8e6e3]">{item.type}</span>
          <span className="text-red-500 font-bold text-xs">
            [DECOMMISSIONED]
          </span>
        </div>
        <div className="text-red-500/60">{"░".repeat(maxBlocks)}</div>
        {item.note && (
          <div className="text-[#e8e6e3]/40 text-xs mt-1">{item.note}</div>
        )}
      </motion.div>
    );
  }

  if (item.underConstruction) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="font-mono text-sm mb-4"
      >
        <div className="flex items-baseline justify-between mb-1">
          <span className="text-[#e8e6e3]">{item.type}</span>
          <span className="text-amber-400 font-bold text-xs">
            [UNDER CONSTRUCTION]
          </span>
        </div>
        <div className="text-amber-400/40">{"░".repeat(maxBlocks)}</div>
        {item.note && (
          <div className="text-[#e8e6e3]/40 text-xs mt-1">{item.note}</div>
        )}
      </motion.div>
    );
  }

  const filled = Math.round((item.operational / item.total) * maxBlocks);
  const empty = maxBlocks - filled;

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="font-mono text-sm mb-4"
    >
      <div className="flex items-baseline justify-between mb-1">
        <span className="text-[#e8e6e3]">{item.type}</span>
        <span className="text-[#22d3ee] text-xs">
          {item.operational}/{item.total} operational
        </span>
      </div>
      <div>
        <span className="text-[#22d3ee]">{"█".repeat(filled)}</span>
        <span className="text-[#e8e6e3]/20">{"░".repeat(empty)}</span>
      </div>
      {item.note && (
        <div className="text-[#e8e6e3]/40 text-xs mt-1">{item.note}</div>
      )}
    </motion.div>
  );
}

export default function ActualNavy() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16 font-[var(--font-mono)]">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[#22d3ee] text-xl md:text-2xl font-bold tracking-wider mb-2 text-center"
      >
        MEANWHILE, IN THE ACTUAL NAVY
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="h-px bg-[#22d3ee]/30 mb-12 origin-center"
      />

      {/* Real Navy Ship Cards */}
      <div className="space-y-8 mb-16">
        {realNavyShips.map((ship, i) => (
          <ShipCard key={ship.slug} ship={ship} index={i} />
        ))}
      </div>

      {/* Fleet Readiness Assessment */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border border-[#e8e6e3]/10 p-6 md:p-8"
      >
        <h3 className="text-[#22d3ee] text-lg font-bold tracking-wider mb-1">
          FLEET READINESS ASSESSMENT
        </h3>
        <p className="text-[#e8e6e3]/40 text-xs mb-8 font-mono">
          Royal Navy surface fleet &amp; submarine force, as of 2025
        </p>

        <div className="space-y-2">
          {fleetReadiness.map((item) => (
            <ProgressBar key={item.type} item={item} />
          ))}
        </div>
      </motion.div>

      {/* Final Note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-[#e8e6e3]/50 text-sm font-mono text-center mt-12 max-w-xl mx-auto italic"
      >
        HMS Benefit State is 100% operational at all times. She has never
        experienced a propeller shaft failure.
      </motion.p>
    </section>
  );
}
