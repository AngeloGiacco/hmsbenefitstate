"use client";

import { motion } from "framer-motion";

const comparisons = [
  {
    label: "State Pension (Triple Lock)",
    amount: "£146.1bn",
    color: "coral",
    note: "More than twice the entire defence budget",
  },
  {
    label: "Universal Credit",
    amount: "£80.9bn",
    color: "coral",
    note: "Could fund the Navy five times over",
  },
  {
    label: "Housing Benefit",
    amount: "£37.8bn",
    color: "coral",
    note: "Could buy 45 frigates per year",
  },
  {
    label: "PIP (Disability)",
    amount: "£22bn",
    color: "coral",
    note: "Doubled since 2013. Fastest growing.",
  },
];

export default function TheRatio() {
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
            For every £1 spent on the Royal Navy
          </p>
          <h2 className="text-offwhite font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter font-sans">
            £21.50
          </h2>
          <p className="text-offwhite/30 text-lg sm:text-xl mt-4 font-light">
            goes to welfare
          </p>
        </motion.div>

        {/* The fleet */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h3 className="text-offwhite/40 text-xs tracking-[0.3em] uppercase mb-8 font-mono text-center">
            Where it goes
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {comparisons.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-offwhite/10 bg-offwhite/[0.02] rounded-lg p-6 sm:p-8 hover:border-coral/30 transition-colors"
            >
              <p className="text-coral font-black text-3xl sm:text-4xl tracking-tight font-sans mb-2">
                {item.amount}
              </p>
              <p className="text-offwhite text-sm sm:text-base font-semibold mb-3">
                {item.label}
              </p>
              <p className="text-offwhite/40 text-xs sm:text-sm font-mono">
                {item.note}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Combined total */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="gradient-line mb-8" />
          <p className="text-offwhite/40 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Combined: <span className="text-coral font-bold">£334 billion</span> per year.
            More than the defence budgets of France, Germany, Italy, Spain, Poland,
            the Netherlands, and Norway <em>combined</em>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
