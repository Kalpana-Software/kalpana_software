"use client";

import { useState } from "react";
import Link from "next/link";
import { SendHorizontal, Terminal, Shield, CheckCircle } from "lucide-react";

interface ServiceTab {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  metric: string;
  features: string[];
}

const tabs: ServiceTab[] = [
  {
    id: "government",
    name: "Government",
    title: "Government Automation Portals",
    description: "Modern digital portals, licensing workflows, and municipal automation solutions designed for regulatory transparency and high-volume citizen access.",
    image: "https://avocette.com/wp-content/uploads/2021/06/NicePng_working-people-png_4294106-1.png",
    metric: "99.9% Citizen SLA Index",
    features: ["Compliant with G2C Standards", "Automated Permit Workflows", "Federal Data Sovereignty"],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    title: "Healthcare Information Hubs",
    description: "HIPAA-compliant secure software, scheduling integrations, and patient health record platforms constructed with robust end-to-end data encryption.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80",
    metric: "Zero Security Defect Log",
    features: ["HIPAA Certified Architecture", "HL7 / FHIR Ingestion", "Sub-200ms Record Lookups"],
  },
  {
    id: "finance",
    name: "Finance",
    title: "Financial Transaction Pipelines",
    description: "Secure transaction pipelines, banking integrations, and fraud-detection telemetry nodes executing high-throughput ledger operations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    metric: "P99 Latency < 15ms",
    features: ["PCI-DSS Level 1 Isolation", "Double-Entry Ledgers", "Async Fraud Analysis Streams"],
  },
  {
    id: "education",
    name: "Education",
    title: "Educational Portal Frameworks",
    description: "Student management systems, virtual classroom portals, and learning analytics platforms built for high concurrency and media delivery.",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80",
    metric: "20k+ Concurrent Sessions",
    features: ["LTI Standard Support", "Real-Time Exam Telemetry", "Scalable CDN Video Caching"],
  },
];

export function Hero() {
  const [activeTab, setActiveTab] = useState<ServiceTab>(tabs[0]);

  return (
    <section className="relative w-full pt-16 pb-12 md:pt-24 md:pb-16 bg-background font-sans overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* Left Column: Interactive Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left animate-fade-in-left">
            {/* Tag */}
            <div className="mb-6 flex max-w-fit items-center gap-2 rounded-full border border-border bg-[#0066CC]/5 px-4 py-1.5">
              <Terminal className="h-4 w-4 text-[#0066CC]" />
              <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                Bespoke Engineering Partner
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
              Architecting Digital
              <span className="block mt-1 text-[#0066CC]">Transformation.</span>
            </h1>

            {/* Interactive Industry Tabs */}
            <div className="mt-8 flex flex-wrap gap-2 border-b border-border pb-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all duration-200 cursor-pointer ${
                    activeTab.id === tab.id
                      ? "bg-[#0066CC]/10 text-[#0066CC] border border-[#0066CC]/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Dynamic Tab Description */}
            <div className="mt-6 min-h-[160px] space-y-4">
              <h3 className="text-xl font-bold text-foreground">{activeTab.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed max-w-2xl">
                {activeTab.description}
              </p>
              
              {/* Dynamic Tab Features List */}
              <ul className="grid gap-2 sm:grid-cols-2 pt-2">
                {activeTab.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                    <CheckCircle className="h-4 w-4 text-[#0066CC] shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 bg-[#0066CC] hover:bg-[#0052a3] text-white font-bold text-sm uppercase tracking-wider rounded-full px-8 py-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer animate-button-pulse"
              >
                <SendHorizontal className="h-4 w-4" />
                Contact Us
              </Link>
              
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0066CC]">
                <Shield className="h-4 w-4" />
                <span>{activeTab.metric}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic High-Quality Picture */}
          <div className="lg:col-span-5 relative w-full flex justify-center animate-fade-in-right">
            {/* Decorative bg shapes */}
            <div className="absolute inset-0 bg-[#0066CC]/5 rounded-2xl -rotate-3 scale-105 pointer-events-none" />
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#0066CC]/30 rounded-tl-xl pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#0066CC]/30 rounded-br-xl pointer-events-none" />
            
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeTab.image}
              alt={activeTab.title}
              className={`relative w-full h-[350px] sm:h-[420px] rounded-2xl border border-border shadow-2xl transition-all duration-500 hover:scale-[1.02] ${
                activeTab.image.includes("NicePng")
                  ? "object-contain bg-slate-50 dark:bg-zinc-800 p-6"
                  : "object-cover"
              }`}
              loading="lazy"
            />
          </div>

        </div>

        {/* Stats Ribbon to fill the vertical gap beautifully */}
        <div className="mt-20 md:mt-24 border-t border-border pt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-foreground font-mono">100+</div>
            <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1.5">Projects Delivered</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-[#0066CC] font-mono">&lt; 200ms</div>
            <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1.5">API Latency SLA</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-foreground font-mono">24/7</div>
            <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1.5">Operations Support</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-[#0066CC] font-mono">100%</div>
            <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1.5">Operational Security</div>
          </div>
        </div>
      </div>
    </section>
  );
}
