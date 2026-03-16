"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import HeroSection from "@/components/HeroSection";
import FleetRegister from "@/components/FleetRegister";
import ActualNavy from "@/components/ActualNavy";
import Shipyard from "@/components/Shipyard";
import RefitPlanner from "@/components/RefitPlanner";
import PostcodeLookup from "@/components/PostcodeLookup";
import VanishingFleet from "@/components/VanishingFleet";
import Caveats from "@/components/Caveats";
import JoinCrew from "@/components/JoinCrew";
import Footer from "@/components/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      {loaded && (
        <main className="min-h-screen bg-navy-900 font-mono">
          {/* Section 1: Hero — Ship Registry Card */}
          <HeroSection />

          {/* Section 2: Fleet Register — Sister Ships */}
          <FleetRegister />

          {/* Section 3: Meanwhile, in the Actual Navy */}
          <ActualNavy />

          {/* Section 9: The Vanishing Fleet (Timeline) */}
          <VanishingFleet />

          {/* Section 4: The Shipyard — What £117bn Buys */}
          <Shipyard />

          {/* Section 5: Refit Planner (Slider Tool) */}
          <RefitPlanner />

          {/* Section 6: What's Your HMS? (Postcode Lookup) */}
          <PostcodeLookup />

          {/* Section 7: The Caveats (Dry Dock) */}
          <Caveats />

          {/* Section 11: Join the Crew */}
          <JoinCrew />

          {/* Section 8: Footer — Sources & Ship's Log */}
          <Footer />
        </main>
      )}
    </>
  );
}
