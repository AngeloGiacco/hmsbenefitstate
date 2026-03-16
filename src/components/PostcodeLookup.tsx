"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ConstituencyResult {
  name: string;
  annualDisplacement: string;
  crew: string;
  ucClaimants: string;
  couldBuild: string;
  quip: string;
}

const MOCK_RESULT: ConstituencyResult = {
  name: "PORTSMOUTH SOUTH",
  annualDisplacement: "£482,000,000",
  crew: "38,400 working-age claimants",
  ucClaimants: "22,100 households",
  couldBuild: "0.58 Type 26 Frigates per year",
  quip: "Enough to keep a frigate in dry dock. Which is where they all are anyway.",
};

export default function PostcodeLookup() {
  const [postcode, setPostcode] = useState("");
  const [result, setResult] = useState<ConstituencyResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!postcode.trim()) return;
    setLoading(true);
    // Mock lookup — data pipeline not built yet
    setTimeout(() => {
      setResult(MOCK_RESULT);
      setLoading(false);
    }, 800);
  };

  const shareText = result
    ? `My constituency (${result.name}) spends ${result.annualDisplacement}/yr on welfare — enough to build ${result.couldBuild}. See yours: https://hmsbenefitstate.uk`
    : "";

  const handleShareX = () => {
    window.open(
      `https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}`,
      "_blank"
    );
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(
        `https://hmsbenefitstate.uk/?postcode=${encodeURIComponent(postcode)}`
      );
      alert("Link copied to clipboard.");
    } catch {
      // fallback
    }
  };

  const handleShareWhatsApp = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({
        title: "HMS Benefit State",
        text: shareText,
        url: "https://hmsbenefitstate.uk",
      });
    } else {
      window.open(
        `https://wa.me/?text=${encodeURIComponent(shareText)}`,
        "_blank"
      );
    }
  };

  const handleCompare = () => {
    setResult(null);
    setPostcode("");
  };

  return (
    <section className="py-16 px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 tracking-widest mb-2">
        COMMISSIONING CEREMONY
      </h2>
      <p className="text-offwhite/70 text-sm mb-8">
        Enter your postcode to discover your constituency&apos;s welfare
        displacement — and what it could build instead.
      </p>

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="border border-navy-600 bg-navy-800 p-6 font-mono text-sm space-y-3">
          <div className="text-offwhite/50">
            FROM:{" "}
            <span className="text-cyan-400">ADMIRALTY</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-offwhite/50">TO:</span>
            <input
              type="text"
              inputMode="text"
              autoComplete="postal-code"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value.toUpperCase())}
              placeholder="YOUR POSTCODE"
              className="bg-navy-900 border border-navy-600 text-offwhite px-3 py-2 font-mono text-sm tracking-widest uppercase w-48 focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-offwhite/30"
            />
          </div>
          <div className="text-offwhite/50">
            SUBJECT:{" "}
            <span className="text-offwhite/70">
              YOUR LOCAL VESSEL ASSESSMENT
            </span>
          </div>
          <button
            type="submit"
            disabled={loading || !postcode.trim()}
            className="mt-4 bg-cyan-400 text-navy-900 px-6 py-2 font-mono font-bold text-sm tracking-widest hover:bg-cyan-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? "DECODING SIGNAL..." : "TRANSMIT"}
          </button>
        </div>
      </form>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="border border-cyan-400/30 bg-navy-800 p-6 font-mono text-sm">
              <pre className="text-offwhite/60 leading-relaxed whitespace-pre-wrap">
{`┌─────────────────────────────────────────┐
│  CONSTITUENCY VESSEL ASSESSMENT         │
├─────────────────────────────────────────┤
│                                         │
│  Name:       ${result.name.padEnd(27)}│
│  Annual                                 │
│  Displacement: ${result.annualDisplacement.padEnd(25)}│
│  Crew:       ${result.crew.padEnd(27)}│
│  UC Claimants: ${result.ucClaimants.padEnd(25)}│
│                                         │
│  Could Build: ${result.couldBuild.padEnd(26)}│
│                                         │
└─────────────────────────────────────────┘`}
              </pre>
              <p className="text-offwhite/50 italic mt-4 text-xs">
                &quot;{result.quip}&quot;
              </p>

              {/* Share buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                <button
                  onClick={handleShareX}
                  className="border border-offwhite/20 text-offwhite/70 px-4 py-2 text-xs tracking-wider hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                >
                  SHARE ON X
                </button>
                <button
                  onClick={handleCopyLink}
                  className="border border-offwhite/20 text-offwhite/70 px-4 py-2 text-xs tracking-wider hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                >
                  COPY LINK
                </button>
                <button
                  onClick={handleShareWhatsApp}
                  className="border border-offwhite/20 text-offwhite/70 px-4 py-2 text-xs tracking-wider hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                >
                  SHARE ON WHATSAPP
                </button>
              </div>

              <button
                onClick={handleCompare}
                className="mt-4 text-cyan-400/70 text-xs tracking-wider hover:text-cyan-400 transition-colors underline underline-offset-4"
              >
                COMPARE WITH ANOTHER CONSTITUENCY
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
