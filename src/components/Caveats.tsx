"use client";

import { motion } from "framer-motion";

const caveats = [
  {
    title: "Pensions are the hull",
    text: "State pensions (£146bn) are not waste — they're a social contract. We include them because the numbers are meaningless without them.",
  },
  {
    title: "Nominal figures",
    text: "All figures are nominal (not inflation-adjusted). We use them because they're what appear in budgets and headlines.",
  },
  {
    title: "You can't just throw money at shipyards",
    text: "The UK's shipbuilding capacity is severely constrained. One frigate at a time. Not enough welders. Not enough dry docks. The comparison is about priorities, not logistics.",
  },
  {
    title: "Crew is harder than steel",
    text: "The Navy's biggest shortage is people. Recruitment is below target. You can build a frigate in five years; training a warfare officer takes ten.",
  },
  {
    title: "The comparison is illustrative",
    text: "We are not proposing welfare be redirected to the Navy. We're illustrating scale. The point is: do you understand how much money this is?",
  },
];

export default function Caveats() {
  return (
    <section className="py-20 sm:py-32 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-offwhite font-bold text-xl sm:text-2xl tracking-tight">
            The honest part
          </h2>
          <p className="text-offwhite/30 text-xs sm:text-sm mt-2 font-mono">
            Because a ship that can&apos;t admit her defects will eventually sink
          </p>
        </motion.div>

        <div className="space-y-6">
          {caveats.map((caveat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border-l-2 border-offwhite/10 pl-4 sm:pl-6"
            >
              <h4 className="text-offwhite/70 text-sm font-semibold mb-1">
                {caveat.title}
              </h4>
              <p className="text-offwhite/35 text-sm leading-relaxed">
                {caveat.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
