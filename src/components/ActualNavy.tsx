"use client";

import { motion } from "framer-motion";
import { fleetReadiness } from "@/data/fleet";

export default function ActualNavy() {
  return (
    <section className="py-20 sm:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        {/* The big stat */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-24"
        >
          <p className="text-offwhite/30 text-xs sm:text-sm tracking-[0.3em] uppercase mb-6 font-mono">
            Aircraft carriers at sea right now
          </p>
          <h2 className="text-cyan-400 font-black text-[10rem] sm:text-[14rem] md:text-[18rem] leading-none tracking-tighter font-sans">
            0
          </h2>
          <p className="text-offwhite/30 text-base sm:text-lg mt-4 font-light">
            out of 2
          </p>
        </motion.div>

        {/* Carrier cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-cyan-400/20 rounded-lg p-6 sm:p-8"
          >
            <h3 className="text-cyan-400 font-bold text-lg sm:text-xl mb-4">
              HMS Queen Elizabeth
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-offwhite/40">Commissioned</span>
                <span className="text-offwhite">2017</span>
              </div>
              <div className="flex justify-between">
                <span className="text-offwhite/40">Cost</span>
                <span className="text-offwhite">£3.5bn</span>
              </div>
              <div className="flex justify-between">
                <span className="text-offwhite/40">Displacement</span>
                <span className="text-offwhite">65,000 tonnes</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-offwhite/10">
              <p className="text-gold text-sm font-medium">
                In dry dock at Rosyth. Propeller shaft issues. Again.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-cyan-400/20 rounded-lg p-6 sm:p-8"
          >
            <h3 className="text-cyan-400 font-bold text-lg sm:text-xl mb-4">
              HMS Prince of Wales
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-offwhite/40">Commissioned</span>
                <span className="text-offwhite">2019</span>
              </div>
              <div className="flex justify-between">
                <span className="text-offwhite/40">Cost</span>
                <span className="text-offwhite">£3.5bn</span>
              </div>
              <div className="flex justify-between">
                <span className="text-offwhite/40">Displacement</span>
                <span className="text-offwhite">65,000 tonnes</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-offwhite/10">
              <p className="text-gold text-sm font-medium">
                Post-deployment maintenance. Has spent 78.7% of her life not at sea.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Fleet readiness */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-offwhite/40 text-xs tracking-[0.3em] uppercase mb-8 font-mono text-center">
            Fleet Readiness — 2025
          </h3>

          <div className="space-y-4 max-w-2xl mx-auto">
            {fleetReadiness.map((item, index) => (
              <motion.div
                key={item.type}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-offwhite text-sm font-medium">{item.type}</span>
                  {item.decommissioned ? (
                    <span className="text-coral text-xs font-mono font-bold tracking-wider">DECOMMISSIONED</span>
                  ) : item.underConstruction ? (
                    <span className="text-gold text-xs font-mono font-bold tracking-wider">UNDER CONSTRUCTION</span>
                  ) : (
                    <span className="text-cyan-400 text-sm font-mono font-bold">
                      {item.operational}/{item.total}
                    </span>
                  )}
                </div>
                <div className="h-2 bg-offwhite/5 rounded-full overflow-hidden">
                  {item.decommissioned ? (
                    <div className="h-full bg-coral/30 rounded-full w-full" />
                  ) : item.underConstruction ? (
                    <div className="h-full bg-gold/20 rounded-full w-full"
                      style={{
                        backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(251,191,36,0.3) 4px, rgba(251,191,36,0.3) 8px)",
                      }}
                    />
                  ) : (
                    <motion.div
                      className="h-full bg-cyan-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(item.operational / item.total) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.05 }}
                    />
                  )}
                </div>
                {item.note && (
                  <p className="text-offwhite/30 text-xs mt-1 font-mono">{item.note}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Punchline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 sm:mt-16 text-offwhite/30 text-sm font-mono"
        >
          HMS Benefit State is 100% operational at all times.
          <br />
          She has never experienced a propeller shaft failure.
        </motion.p>
      </div>
    </section>
  );
}
