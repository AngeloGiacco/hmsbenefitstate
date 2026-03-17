"use client";

import { motion } from "framer-motion";

export default function TheScale() {
  return (
    <section className="full-section relative px-4">
      <div className="w-full max-w-5xl mx-auto text-center">
        {/* The massive number */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-offwhite/30 text-sm sm:text-base tracking-[0.2em] uppercase mb-4 font-mono">
            The UK spends
          </p>
          <h2 className="text-coral font-black text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] leading-none tracking-tighter font-sans">
            £334bn
          </h2>
          <p className="text-offwhite/50 text-lg sm:text-2xl mt-4 sm:mt-6 font-light">
            per year on welfare
          </p>
        </motion.div>

        {/* The comparison */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-20"
        >
          <div className="gradient-line mb-8" />

          <p className="text-offwhite/30 text-sm sm:text-base tracking-[0.2em] uppercase mb-4 font-mono">
            The Royal Navy gets
          </p>
          <p className="text-cyan-400 font-black text-4xl sm:text-6xl md:text-7xl tracking-tighter font-sans">
            £15.5bn
          </p>
          <p className="text-offwhite/30 text-sm sm:text-base mt-4 font-light">
            Both aircraft carriers are currently in dock.
          </p>
        </motion.div>

        {/* Visual bar comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 sm:mt-16 max-w-2xl mx-auto"
        >
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-coral/70 text-xs font-mono tracking-wider">WELFARE — £334bn</span>
              </div>
              <div className="h-10 sm:h-14 bg-offwhite/5 rounded overflow-hidden">
                <motion.div
                  className="h-full bg-coral/80 rounded"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-cyan-400/70 text-xs font-mono tracking-wider">ROYAL NAVY — £15.5bn</span>
              </div>
              <div className="h-10 sm:h-14 bg-offwhite/5 rounded overflow-hidden">
                <motion.div
                  className="h-full bg-cyan-400/80 rounded"
                  initial={{ width: 0 }}
                  whileInView={{ width: "4.6%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
