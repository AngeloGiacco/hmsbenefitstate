"use client";

import { ConstituencyData } from "@/data/constituencies-sample";
import { formatNumber, formatMillions } from "@/lib/format";
import { motion } from "framer-motion";
import Link from "next/link";
import SendToMP from "./SendToMP";

interface Props {
  data: ConstituencyData;
  navalComparison: string;
  quip: string;
}

export default function ConstituencyPage({ data, navalComparison, quip }: Props) {
  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/${data.slug}`
      : `https://hmsbenefitstate.co.uk/${data.slug}`;

  const shareText = `My constituency is HMS ${data.name}. Annual displacement: ${formatMillions(data.totalBenefitsAnnual)}. ${navalComparison}. What's yours?`;

  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({ title: `HMS ${data.name}`, text: shareText, url: shareUrl });
      } catch {
        // user cancelled
      }
    } else {
      await navigator.clipboard.writeText(shareUrl);
    }
  }

  return (
    <div className="min-h-screen bg-navy-900 blueprint-grid">
      <div className="mx-auto max-w-3xl px-4 py-16 font-mono">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-cyan-400 hover:underline"
        >
          ← RETURN TO FLEET REGISTER
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="naval-card p-6"
        >
          <h1 className="mb-1 text-2xl font-bold text-offwhite">
            HMS {data.name.toUpperCase()}
          </h1>
          <div className="mb-4 border-b border-cyan-400/30 pb-4 text-sm text-cyan-400">
            VESSEL ASSESSMENT
          </div>

          <div className="space-y-2 text-sm">
            <Row label="Annual Displacement" value={formatMillions(data.totalBenefitsAnnual)} highlight />
            <Row label="Crew" value={`${formatNumber(data.workingAgeClaimants)} working-age benefit claimants`} />
            <Row label="UC Claimants" value={formatNumber(data.ucClaimants)} />
            <Row label="PIP Claimants" value={formatNumber(data.pipClaimants)} />
            <Row label="Could Build" value={navalComparison} />
            <Row label="Actually Builds" value="0 warships" />
          </div>

          <p className="mt-6 border-t border-cyan-400/20 pt-4 text-sm italic text-offwhite/70">
            &ldquo;{quip}&rdquo;
          </p>
        </motion.div>

        {/* Share */}
        <div className="mt-8 text-center">
          <p className="mb-4 text-sm italic text-offwhite/60">
            Your vessel has been commissioned. Share your HMS with your crew.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="naval-card px-4 py-2 text-sm text-cyan-400 transition-colors hover:bg-cyan-400/10"
            >
              Share on X
            </a>
            <button
              onClick={handleShare}
              className="naval-card px-4 py-2 text-sm text-cyan-400 transition-colors hover:bg-cyan-400/10"
            >
              Copy Link
            </button>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="naval-card px-4 py-2 text-sm text-cyan-400 transition-colors hover:bg-cyan-400/10"
            >
              Share on WhatsApp
            </a>
          </div>
        </div>

        {/* Send to MP */}
        <div className="mt-12">
          <SendToMP
            constituencyName={data.name}
            constituencySlug={data.slug}
            benefitAmount={data.totalBenefitsAnnual}
          />
        </div>

        <p className="mt-8 text-center text-xs text-offwhite/40">
          hmsbenefitstate.co.uk/{data.slug}
        </p>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex gap-4">
      <span className="w-40 shrink-0 text-offwhite/50">{label}:</span>
      <span className={highlight ? "text-cyan-400" : "text-offwhite"}>
        {value}
      </span>
    </div>
  );
}
