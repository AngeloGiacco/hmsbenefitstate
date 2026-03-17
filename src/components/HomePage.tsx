"use client";

import HeroCounter from "@/components/HeroCounter";
import TheScale from "@/components/TheScale";
import TheRatio from "@/components/TheRatio";
import ActualNavy from "@/components/ActualNavy";
import VanishingFleet from "@/components/VanishingFleet";
import Shipyard from "@/components/Shipyard";
import RefitPlanner from "@/components/RefitPlanner";
import PostcodeLookup from "@/components/PostcodeLookup";
import Caveats from "@/components/Caveats";
import ShareSection from "@/components/ShareSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-navy-900">
      {/* Section 1: Live counter — THE viral hook */}
      <HeroCounter />

      {/* Section 2: The massive number */}
      <TheScale />

      {/* Section 3: The 21:1 ratio */}
      <TheRatio />

      {/* Section 4: The actual navy — 0/2 carriers */}
      <ActualNavy />

      {/* Section 5: The vanishing fleet */}
      <VanishingFleet />

      {/* Section 6: What £117bn buys */}
      <Shipyard />

      {/* Section 7: The refit planner */}
      <RefitPlanner />

      {/* Section 8: Your constituency */}
      <PostcodeLookup />

      {/* Section 9: The fine print */}
      <Caveats />

      {/* Section 10: Share + signup */}
      <ShareSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
