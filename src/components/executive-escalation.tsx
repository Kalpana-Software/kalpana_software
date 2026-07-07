"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlertOctagon, Phone, ShieldAlert } from "lucide-react";

interface Executive {
  name: string;
  role: string;
  avatar: string;
  status: "Active" | "Standby" | "Routing";
  pagerId: string;
  bio: string;
}

const executives: Executive[] = [
  {
    name: "Akshit Ujjain",
    role: "Chief Executive Officer (CEO)",
    avatar: "AU",
    status: "Active",
    pagerId: "PAGER-001-CEO",
    bio: "Executive authority on corporate alignment and enterprise service level agreements.",
  },
  {
    name: "Gaurav Kr Tripathi",
    role: "Chief Technology Officer (CTO)",
    avatar: "GT",
    status: "Active",
    pagerId: "PAGER-777-CTO",
    bio: "Core system architect. Direct operational escalation for distributed infrastructure and failover protocols.",
  },
  {
    name: "Rahul Kr Pathak",
    role: "Chief Operating Officer (COO)",
    avatar: "RP",
    status: "Standby",
    pagerId: "PAGER-303-COO",
    bio: "Operations director. Resolves global supply chain pipelines, personnel, and compliance lanes.",
  },
];

export function ExecutiveEscalation() {
  const [triggerState, setTriggerState] = useState<"idle" | "triggered">("idle");

  const handleTrigger = () => {
    setTriggerState("triggered");
  };

  return (
    <section id="workspace" className="py-24 md:py-28 border-t border-[rgba(0,102,204,0.1)] bg-[#0B1D3A]">
      <div className="container mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Header Section */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="text-sm font-semibold tracking-widest text-[#0066CC] uppercase mb-3">
            Operational Integrity
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            Direct Executive Escalation Array
          </h2>
          <p className="mt-4 text-base text-slate-400">
            For critical, zero-hour situations. Enterprise SLAs include direct, cryptographically-secure communication channels to the executive team.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid gap-8 lg:grid-cols-12">
          
          {/* Left Side: simulated status / trigger action */}
          <div className="lg:col-span-4 flex flex-col justify-between rounded-xl border border-[rgba(0,102,204,0.15)] bg-[#0F2242]/30 p-8 backdrop-blur-sm">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-200 uppercase tracking-wider mb-6">
                <AlertOctagon className="h-4 w-4 text-[#0066CC]" />
                <span>Command Control console</span>
              </div>
              
              <p className="text-sm text-slate-400 leading-relaxed font-light mb-8">
                In the rare event that standard support queues exceed 15-minute response thresholds for Critical Severity incidents, the physical hardware line redirects here.
              </p>

              {/* Simulated High-Contrast Amber Border Alert Box */}
              <div className={`rounded-lg border p-5 transition-all duration-500 ${
                triggerState === "triggered" 
                  ? "border-amber-500 bg-amber-500/10 text-amber-200 shadow-[0_0_15px_rgba(245,158,11,0.2)]" 
                  : "border-slate-800 bg-[#0b1d3a]/40 text-slate-400"
              }`}>
                <div className="flex gap-3">
                  <ShieldAlert className={`h-5 w-5 shrink-0 ${triggerState === "triggered" ? "text-amber-400" : "text-slate-600"}`} />
                  <div>
                    <h5 className={`text-xs font-bold uppercase tracking-wider ${triggerState === "triggered" ? "text-amber-400" : "text-slate-400"}`}>
                      {triggerState === "triggered" ? "Trigger State: Emergency" : "Trigger State: Nominal"}
                    </h5>
                    <p className="mt-1 text-xs leading-relaxed font-mono">
                      {triggerState === "triggered" 
                        ? "ALERT: Pager signal broadcasting on direct frequency. Executive routing active." 
                        : "SLA threshold checks: Passed. Trigger standby ready."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[rgba(0,102,204,0.05)]">
              <Button
                onClick={handleTrigger}
                disabled={triggerState === "triggered"}
                className={`w-full font-semibold rounded-md py-6 transition-all duration-300 cursor-pointer ${
                  triggerState === "triggered"
                    ? "bg-amber-600 hover:bg-amber-600 text-white cursor-not-allowed border-amber-600 shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                    : "bg-[#0066CC] hover:bg-[#0052a3] text-white shadow-[0_0_15px_rgba(0,102,204,0.25)]"
                }`}
              >
                {triggerState === "triggered" ? "Escalation Active" : "Initiate Emergency Escalation"}
              </Button>
            </div>
          </div>

          {/* Right Side: The Executive Array */}
          <div className="lg:col-span-8 space-y-4">
            {executives.map((exec, idx) => (
              <div 
                key={idx}
                className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-xl border p-6 md:p-8 transition-all duration-300 bg-[#0F2242]/30 ${
                  triggerState === "triggered" && exec.status === "Active"
                    ? "border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.1)]"
                    : "border-[rgba(0,102,204,0.15)] hover:border-[#0066CC]/40 hover:bg-[#0F2242]/45"
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Custom Minimalist Avatar */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[rgba(0,102,204,0.3)] bg-[#0066CC]/15 text-slate-100 font-bold font-mono tracking-wider">
                    {exec.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h4 className="text-lg font-bold text-slate-200">{exec.name}</h4>
                      <span className="text-[10px] font-mono font-medium text-slate-500 uppercase tracking-widest">
                        {exec.pagerId}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-slate-400 mt-0.5">{exec.role}</p>
                    <p className="mt-2 text-sm text-slate-400 leading-relaxed font-light max-w-xl">
                      {exec.bio}
                    </p>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 pt-4 md:pt-0 border-[rgba(0,102,204,0.05)]">
                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${
                      triggerState === "triggered" && exec.status === "Active"
                        ? "bg-amber-500 animate-ping"
                        : exec.status === "Active"
                          ? "bg-emerald-500"
                          : "bg-slate-600"
                    }`} />
                    <span className="text-xs font-mono text-slate-400">
                      {triggerState === "triggered" && exec.status === "Active" ? "ROUTING" : exec.status}
                    </span>
                  </div>
                  
                  <Button
                    variant="outline"
                    className="border-slate-800 bg-[#0B1D3A]/60 text-slate-300 hover:bg-slate-800 hover:text-slate-100 h-9 px-4 rounded-md font-medium text-xs transition-colors cursor-pointer"
                  >
                    <Phone className="mr-1.5 h-3.5 w-3.5" />
                    Direct Dial
                  </Button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
