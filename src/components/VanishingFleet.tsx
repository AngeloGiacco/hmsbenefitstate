"use client";

import { motion } from "framer-motion";
import { timelineData } from "@/data/fleet";

export default function VanishingFleet() {
  const maxVessels = timelineData[0].vessels;

  return (
    <section className="py-20 sm:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-offwhite/30 text-xs sm:text-sm tracking-[0.3em] uppercase mb-6 font-mono">
            Royal Navy vessels
          </p>
          <div className="flex items-baseline justify-center gap-4 sm:gap-8">
            <div>
              <p className="text-offwhite font-black text-5xl sm:text-7xl md:text-8xl tracking-tighter font-sans">
                150
              </p>
              <p className="text-offwhite/40 text-sm mt-1 font-mono">1990</p>
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-12 sm:w-24 h-px bg-coral origin-left"
            />
            <div>
              <p className="text-coral font-black text-5xl sm:text-7xl md:text-8xl tracking-tighter font-sans">
                30
              </p>
              <p className="text-offwhite/40 text-sm mt-1 font-mono">2026</p>
            </div>
          </div>
          <p className="text-offwhite/30 text-sm sm:text-base mt-6 font-light max-w-md mx-auto">
            The fleet didn&apos;t vanish overnight. It was traded, review by review,
            for things that win elections.
          </p>
        </motion.div>

        {/* Timeline bars */}
        <div className="space-y-3 sm:space-y-4">
          {timelineData.map((entry, index) => {
            const barWidth = (entry.vessels / maxVessels) * 100;
            const prevVessels = index > 0 ? timelineData[index - 1].vessels : entry.vessels;
            const lost = prevVessels - entry.vessels;

            return (
              <motion.div
                key={entry.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Year */}
                  <span className="text-offwhite/60 text-sm sm:text-base font-mono font-bold w-12 sm:w-14 shrink-0">
                    {entry.year}
                  </span>

                  {/* Bar */}
                  <div className="flex-1 h-8 sm:h-10 bg-offwhite/5 rounded overflow-hidden relative">
                    <motion.div
                      className="h-full bg-cyan-400/70 rounded"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${barWidth}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.08, ease: "easeOut" }}
                    />
                    <div className="absolute inset-y-0 right-3 flex items-center">
                      <span className="text-offwhite/60 text-xs sm:text-sm font-mono font-bold">
                        {entry.vessels}
                      </span>
                    </div>
                  </div>

                  {/* Loss */}
                  <span className="text-coral/60 text-xs font-mono w-10 sm:w-12 text-right shrink-0">
                    {lost > 0 ? `−${lost}` : ""}
                  </span>
                </div>

                {/* Event */}
                <p className="text-offwhite/25 text-xs ml-16 sm:ml-18 mt-1 leading-relaxed">
                  {entry.event}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* More admirals than ships */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 sm:mt-16 border-t border-offwhite/10 pt-8"
        >
          <p className="text-offwhite/40 text-sm sm:text-base italic">
            &ldquo;The Royal Navy has more admirals than ships.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
