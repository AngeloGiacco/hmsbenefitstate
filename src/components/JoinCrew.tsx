"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function JoinCrew() {
  const [email, setEmail] = useState("");
  const [enlisted, setEnlisted] = useState(false);
  const [crewStrength, setCrewStrength] = useState(0);

  const handleEnlist = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // For now, just local state
    setEnlisted(true);
    setCrewStrength((prev) => prev + 1);
  };

  return (
    <section className="py-16 px-4 max-w-3xl mx-auto">
      <div className="border border-cyan-400/30 bg-navy-800 p-6 font-mono text-sm">
        <pre className="text-offwhite/60 leading-relaxed whitespace-pre-wrap mb-6">
{`┌─────────────────────────────────────────┐
│                                         │
│     NAVAL RECRUITMENT NOTICE            │
│     ─────────────────────────           │
│     JOIN THE CREW                       │
│                                         │
└─────────────────────────────────────────┘`}
        </pre>

        <p className="text-offwhite/60 text-sm leading-relaxed mb-6">
          HMS Benefit State dispatches one annual communiqu&eacute; — a
          data-updated briefing on the state of welfare spending and the
          fleet it could fund. One email per year. This is not a political
          campaign, not a newsletter, and not a sales funnel. It is a
          signal lamp in the dark.
        </p>

        <AnimatePresence mode="wait">
          {!enlisted ? (
            <motion.form
              key="form"
              onSubmit={handleEnlist}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR EMAIL ADDRESS"
                required
                className="flex-1 bg-navy-900 border border-navy-600 text-offwhite px-4 py-3 font-mono text-sm tracking-wider focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-offwhite/30"
              />
              <button
                type="submit"
                className="bg-cyan-400 text-navy-900 px-8 py-3 font-mono font-bold text-sm tracking-widest hover:bg-cyan-300 transition-colors"
              >
                ENLIST
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="border border-cyan-400/20 bg-navy-900 p-4"
            >
              <p className="text-cyan-400 text-sm leading-relaxed">
                You have been commissioned into the crew of HMS Benefit
                State. Your first dispatch will arrive within the year.
                Stand by.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-6 text-offwhite/30 text-xs tracking-wider">
          CURRENT CREW STRENGTH:{" "}
          <span className="text-cyan-400/60">{crewStrength}</span>
        </div>
      </div>
    </section>
  );
}
