"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { shipyardComparisons } from "@/data/fleet";

function ShipGrid({ comparison, index }: { comparison: typeof shipyardComparisons[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="text-center"
    >
      {/* Count */}
      <p className="text-cyan-400 font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter font-sans">
        {comparison.count}
      </p>
      <p className="text-offwhite text-lg sm:text-xl font-semibold mt-2">
        {comparison.shipType}
      </p>

      {/* Ship grid visualization */}
      <div className="flex flex-wrap justify-center gap-1 mt-6 max-w-md mx-auto">
        {Array.from({ length: Math.min(comparison.count, 60) }, (_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 0.6, scale: 1 } : {}}
            transition={{ duration: 0.2, delay: i * 0.015 }}
            className="text-cyan-400 text-xs"
          >
            ▲
          </motion.span>
        ))}
        {comparison.count > 60 && (
          <span className="text-cyan-400/40 text-xs ml-1">
            +{comparison.count - 60} more
          </span>
        )}
      </div>

      {/* Reality check */}
      <p className="text-offwhite/30 text-sm font-mono mt-4">
        {comparison.navyNote}
      </p>

      {/* Ship description card */}
      {comparison.description && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 border border-cyan-400/10 rounded-lg p-5 sm:p-6 max-w-lg mx-auto text-left bg-navy-800/50"
        >
          <p className="text-cyan-400/50 text-xs tracking-[0.2em] uppercase mb-2 font-mono">
            What is a {comparison.shipType.replace(/s$/, "")}?
          </p>
          <p className="text-offwhite/50 text-sm leading-relaxed mb-4">
            {comparison.description}
          </p>
          {comparison.specs && (
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-offwhite/25">Length</span>
                <span className="text-cyan-400/60">{comparison.specs.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-offwhite/25">Crew</span>
                <span className="text-cyan-400/60">{comparison.specs.crew}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-offwhite/25">Cost</span>
                <span className="text-coral/60">{comparison.specs.cost}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-offwhite/25">Role</span>
                <span className="text-cyan-400/60">{comparison.specs.role}</span>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Shipyard() {
  return (
    <section className="py-20 sm:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-24"
        >
          <p className="text-offwhite/30 text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 font-mono">
            Welfare spending increases by
          </p>
          <h2 className="text-coral font-black text-5xl sm:text-7xl md:text-8xl tracking-tighter font-sans">
            £117bn
          </h2>
          <p className="text-offwhite/30 text-xs sm:text-sm tracking-[0.3em] uppercase mt-4 font-mono">
            every single year. That could build:
          </p>
        </motion.div>

        {/* Ship comparisons */}
        <div className="space-y-20 sm:space-y-28">
          {shipyardComparisons.map((comparison, i) => (
            <div key={comparison.shipType}>
              <ShipGrid comparison={comparison} index={i} />
              {i < shipyardComparisons.length - 1 && (
                <div className="flex items-center gap-4 mt-12 sm:mt-16">
                  <div className="flex-1 gradient-line" />
                  <span className="text-offwhite/20 text-sm font-mono tracking-[0.3em]">
                    OR
                  </span>
                  <div className="flex-1 gradient-line" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16 sm:mt-24 text-offwhite/30 text-sm sm:text-base"
        >
          That&apos;s just the annual <em>increase</em>. Not the total. The increase.
        </motion.p>
      </div>
    </section>
  );
}
