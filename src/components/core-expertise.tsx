"use client";

import { Cpu, Zap, Database, Boxes, Sparkles, Code, HardDrive, GitBranch } from "lucide-react";
import { DashboardPreviews } from "@/components/dashboard-previews";

export function CoreExpertise() {
  const techs = [
    {
      name: "Next.js",
      desc: "React Framework for Web Production",
      icon: Cpu,
    },
    {
      name: "Python FastAPI",
      desc: "High-Performance Modern APIs",
      icon: Zap,
    },
    {
      name: "PostgreSQL",
      desc: "Relational Database Infrastructure",
      icon: Database,
    },
    {
      name: "AWS & Docker",
      desc: "Scalable Container Deployments",
      icon: Boxes,
    },
    {
      name: "Tailwind CSS",
      desc: "Modern Utility-First Styling Engine",
      icon: Sparkles,
    },
    {
      name: "TypeScript",
      desc: "Strongly-Typed Client & Server Code",
      icon: Code,
    },
    {
      name: "Redis Caching",
      desc: "Ultra-Low Latency In-Memory Caching",
      icon: HardDrive,
    },
    {
      name: "CI/CD Actions",
      desc: "Continuous Integration & Automated Pipelines",
      icon: GitBranch,
    },
  ];

  return (
    <section id="tech-stack" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="text-sm font-semibold tracking-widest text-[#0066CC] uppercase mb-4">
            Core Expertise
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Production-Grade Technology Stacks
          </h2>
          <p className="mt-4 text-base text-muted-foreground font-light">
            We build exclusively with industry-leading, highly performant toolsets to ensure stability, scale, and long-term maintainability.
          </p>
        </div>

        {/* Tech Stacks Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techs.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-5 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-[#0066CC]/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0066CC]/5 cursor-default"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[rgba(0,102,204,0.3)] bg-[#0066CC]/10 text-[#0066CC]">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">{tech.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1 font-light leading-normal">{tech.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Dashboard / Code Editor Previews */}
        <DashboardPreviews />
      </div>
    </section>
  );
}
