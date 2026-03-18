"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ConstituencyResult {
  name: string;
  annualDisplacement: string;
  crew: string;
  ucHouseholds: string;
  couldBuild: string;
  quip: string;
  dataSource: string;
}

export default function PostcodeLookup() {
  const [postcode, setPostcode] = useState("");
  const [result, setResult] = useState<ConstituencyResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!postcode.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/constituency", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postcode: postcode.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setResult({
        name: data.name.toUpperCase(),
        annualDisplacement: `£${Math.round(data.totalBenefitsAnnual / 1_000_000).toLocaleString("en-GB")},000,000`,
        crew: `${data.workingAgeClaimants.toLocaleString("en-GB")} working-age claimants`,
        ucHouseholds: `${data.ucHouseholds.toLocaleString("en-GB")} households`,
        couldBuild: data.navalComparison,
        quip: data.quip,
        dataSource: data.dataSource,
      });
    } catch {
      setError("Could not connect. Please check your internet and try again.");
    } finally {
      setLoading(false);
    }
  };

  const shareText = result
    ? `My constituency (${result.name}) spends ${result.annualDisplacement}/yr on welfare — enough to build ${result.couldBuild}. See yours: https://hmsbenefitstate.co.uk`
    : "";

  const handleShareX = () => {
    window.open(
      `https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}`,
      "_blank"
    );
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
    } catch {
      // fallback
    }
  };

  const handleShareWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(shareText)}`,
      "_blank"
    );
  };

  return (
    <section className="py-20 sm:py-32 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <p className="text-offwhite/30 text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 font-mono">
            Look up your area
          </p>
          <h2 className="text-offwhite font-black text-3xl sm:text-5xl tracking-tight font-sans">
            What does your constituency spend?
          </h2>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex gap-3">
            <input
              type="text"
              inputMode="text"
              autoComplete="postal-code"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value.toUpperCase())}
              placeholder="Enter your postcode"
              className="flex-1 bg-offwhite/5 border border-offwhite/10 text-offwhite px-4 py-3.5 rounded-lg text-sm tracking-wider uppercase focus:outline-none focus:border-cyan-400/50 transition-colors placeholder:text-offwhite/20"
            />
            <button
              type="submit"
              disabled={loading || !postcode.trim()}
              className="bg-cyan-400 text-navy-900 px-6 sm:px-8 py-3.5 rounded-lg font-bold text-sm tracking-wider hover:bg-cyan-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
            >
              {loading ? "..." : "GO"}
            </button>
          </div>
        </form>

        {/* Error */}
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-red-400 text-sm text-center mb-6"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Result */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="border border-cyan-400/20 rounded-lg p-6 sm:p-8 mb-6">
                <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase mb-3 font-mono">
                  {result.name}
                </p>

                <p className="text-coral font-black text-4xl sm:text-5xl tracking-tight font-sans mb-6">
                  {result.annualDisplacement}
                </p>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-baseline">
                    <span className="text-offwhite/40">Claimants</span>
                    <span className="text-offwhite">{result.crew}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-offwhite/40">UC Households</span>
                    <span className="text-offwhite">{result.ucHouseholds}</span>
                  </div>
                  <div className="flex justify-between items-baseline border-t border-offwhite/10 pt-3 mt-3">
                    <span className="text-offwhite/40">Could build</span>
                    <span className="text-cyan-400 font-semibold">{result.couldBuild}</span>
                  </div>
                </div>

                <p className="text-offwhite/30 text-xs italic mt-4 font-mono">
                  &ldquo;{result.quip}&rdquo;
                </p>

                <p className="text-offwhite/15 text-[10px] mt-3 font-mono">
                  Source: {result.dataSource}
                </p>
              </div>

              {/* Share buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleShareX}
                  className="share-btn flex-1 min-w-[100px] border border-offwhite/15 text-offwhite/70 px-4 py-3 rounded-lg text-xs sm:text-sm tracking-wider hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
                >
                  Share on X
                </button>
                <button
                  onClick={handleShareWhatsApp}
                  className="share-btn flex-1 min-w-[100px] border border-offwhite/15 text-offwhite/70 px-4 py-3 rounded-lg text-xs sm:text-sm tracking-wider hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
                >
                  WhatsApp
                </button>
                <button
                  onClick={handleCopyLink}
                  className="share-btn flex-1 min-w-[100px] border border-offwhite/15 text-offwhite/70 px-4 py-3 rounded-lg text-xs sm:text-sm tracking-wider hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
                >
                  Copy
                </button>
              </div>

              <button
                onClick={() => { setResult(null); setPostcode(""); setError(null); }}
                className="mt-4 text-offwhite/30 text-xs tracking-wider hover:text-offwhite/60 transition-colors w-full text-center"
              >
                Try another postcode
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
