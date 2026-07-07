"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { FeaturesGrid } from "@/components/features-grid";
import { CoreExpertise } from "@/components/core-expertise";
import { DynamicShowcase } from "@/components/dynamic-showcase";
import { PartnerLogos } from "@/components/partner-logos";
import { ContactCanal } from "@/components/contact-canal";
import { Footer } from "@/components/footer";

export default function Home() {
  const [selectedShowcase, setSelectedShowcase] = useState<{
    category: string;
    item: string;
  } | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const item = params.get("item");
    if (category && item) {
      setTimeout(() => {
        setSelectedShowcase({ category, item });
        setTimeout(() => {
          document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }, 0);
    }
  }, []);

  const handleSelectShowcase = (category: string, item: string) => {
    setSelectedShowcase({ category, item });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans select-none antialiased">
      {/* Premium Navbar with callback */}
      <Navbar onSelectShowcase={handleSelectShowcase} />

      <main className="flex-1 flex flex-col gap-12">
        {/* Hero Section */}
        <Hero />

        {/* Services Bento Grid */}
        <FeaturesGrid />

        {/* Core Expertise Section */}
        <CoreExpertise />

        {/* Dynamic Showcase Section */}
        <DynamicShowcase selected={selectedShowcase} />

        {/* Trusted Partners Section */}
        <PartnerLogos />

        {/* Contact Canal Section */}
        <ContactCanal />
      </main>

      {/* Corporate Governance Footer with callback */}
      <Footer onSelectShowcase={handleSelectShowcase} />
    </div>
  );
}
