"use client";

import {
  Hexagon,
  Triangle,
  CircleDot,
  Orbit,
  Cpu,
  Database,
  Wind,
  Globe,
  Shield,
  Eye,
  Zap,
  Plane,
  Settings,
  ShoppingBag,
  GlassWater,
  Key,
  ShieldCheck,
  Tv,
  Award,
  Wrench,
  Smile,
  SquareTerminal,
  Hammer,
  Sparkles,
  Flame
} from "lucide-react";

export function PartnerLogos() {
  const partners = [
    { name: "Acme Corp", icon: Hexagon },
    { name: "Globex Dynamics", icon: Triangle },
    { name: "Initech Systems", icon: CircleDot },
    { name: "Umbrella Solutions", icon: Orbit },
    { name: "Stark Industries", icon: Cpu },
    { name: "Cyberdyne Systems", icon: Database },
    { name: "Hooli Inc", icon: Wind },
    { name: "Vehement Capital", icon: Globe },
    { name: "Weyland-Yutani", icon: Shield },
    { name: "Tyrell Corp", icon: Eye },
    { name: "Massive Dynamic", icon: Zap },
    { name: "Oceanic Airlines", icon: Plane },
    { name: "Omni Consumer", icon: Settings },
    { name: "Buy More", icon: ShoppingBag },
    { name: "Duff Beer", icon: GlassWater },
    { name: "Gringotts Bank", icon: Key },
    { name: "Wayne Enterprises", icon: ShieldCheck },
    { name: "Virtucon Industries", icon: Tv },
    { name: "Sterling Cooper", icon: Award },
    { name: "Gizmonics Lab", icon: Wrench },
    { name: "Aperture Science", icon: Smile },
    { name: "Black Mesa", icon: SquareTerminal },
    { name: "Sledgehammer", icon: Hammer },
    { name: "Veridian Dynamics", icon: Sparkles },
    { name: "Kessel Logistics", icon: Flame }
  ];

  return (
    <section className="py-16 md:py-20 border-t border-border bg-background overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
          position: relative;
        }
        .marquee-inner {
          display: flex;
          width: max-content;
          animation: marquee 50s linear infinite;
        }
        .marquee-inner:hover {
          animation-play-state: paused;
        }
      `}} />
      <div className="container mx-auto max-w-7xl px-6 md:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-500 mb-10">
          Trusted by Industry Leaders
        </p>
        
        {/* Marquee Wrapper */}
        <div className="marquee-container relative">
          {/* Left and Right Fade overlays for premium depth */}
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="marquee-inner gap-16">
             {/* First Set of 25 Logos */}
            {partners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <div key={`set1-${index}`} className="flex items-center gap-3 select-none opacity-75 hover:opacity-100 transition-opacity duration-300">
                  <Icon className="h-6 w-6 text-slate-700 dark:text-slate-400" />
                  <span className="font-sans text-base md:text-lg font-bold tracking-wide text-slate-850 dark:text-slate-200">{partner.name}</span>
                </div>
              );
            })}

            {/* Second Set of 25 Logos (for seamless looping) */}
            {partners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <div key={`set2-${index}`} className="flex items-center gap-3 select-none opacity-75 hover:opacity-100 transition-opacity duration-300">
                  <Icon className="h-6 w-6 text-slate-700 dark:text-slate-400" />
                  <span className="font-sans text-base md:text-lg font-bold tracking-wide text-slate-850 dark:text-slate-200">{partner.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
