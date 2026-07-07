"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Send, Shield, Lock, AlertOctagon, Phone, ShieldAlert, CheckCircle2, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "web",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Executive escalation modal state
  const [escalationOpen, setEscalationOpen] = useState(false);
  const [triggerState, setTriggerState] = useState<"idle" | "triggered">("idle");

  const handleTrigger = () => {
    setTriggerState("triggered");
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to submit project brief.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      console.error(err);
      const errorMessage = err instanceof Error ? err.message : "An error occurred. Please try again.";
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1D3A] text-slate-100 flex flex-col font-sans select-none antialiased">
      {/* Top Navbar */}
      <Navbar onSelectShowcase={() => { }} />

      <main className="flex-1 flex flex-col justify-center py-20 px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-12 items-start">

            {/* Left Column: Corporate Info & Trust (focuslab.agency style) */}
            <div className="lg:col-span-5 space-y-10 flex flex-col justify-between h-full animate-fade-in-left">

              <div className="space-y-6">
                {/* Accent Tag */}
                <div className="flex max-w-fit items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0066CC] animate-pulse" />
                  <span className="text-[10px] font-bold tracking-widest text-[#0066CC] uppercase">
                    Connect With Us
                  </span>
                </div>

                {/* Bold Silver Header */}
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
                  Let&apos;s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">High-Performance.</span>
                </h1>

                {/* Corporate Details */}
                <div className="space-y-4 pt-4 text-slate-350 text-sm font-light leading-relaxed">
                  <h3 className="font-bold text-slate-200 text-base">KALPANAAA Software Solutions Pvt Ltd</h3>
                  <p>
                    Corporate Head Office:<br />
                    Sector 62, Electronic City, Noida,<br />
                    Uttar Pradesh, India - 201301
                  </p>
                  <p className="pt-2">
                    Inquiries: <a href="mailto:hello@kalpanaaa.com" className="text-[#0066CC] hover:underline font-medium">hello@kalpanaaa.com</a>
                  </p>
                </div>
              </div>

              {/* Emergency Escalation Box */}
              <div
                onClick={() => setEscalationOpen(true)}
                className="relative rounded-xl border border-amber-500/30 bg-amber-500/5 hover:bg-amber-500/10 p-6 shadow-md transition-all duration-300 group cursor-pointer"
              >
                {/* Pulsing indicator */}
                <div className="absolute top-4 right-4 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                </div>

                <div className="flex gap-4 items-start">
                  <Shield className="h-6 w-6 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-1.5">Emergency Routing Ready</h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      Existing Client with a blocker? Click here to trigger direct Executive Escalation to Gaurav Kr Tripathi (CTO), Akshit Ujjain (CEO), or Rahul Kr Pathak (COO).
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Footnote */}
              <div className="flex items-center gap-2.5 text-xs text-slate-500 font-mono pt-4">
                <Lock className="h-3.5 w-3.5 text-[#0066CC]" />
                <span>All transmissions are locked behind TLS 1.3 network tunnels.</span>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 animate-fade-in-right">
              <div className="rounded-2xl border border-slate-800 bg-[#0F2242]/20 p-8 md:p-10 shadow-2xl backdrop-blur-sm">

                {submitted ? (
                  <div className="text-center py-12 space-y-6">
                    <CheckCircle2 className="mx-auto h-16 w-16 text-emerald-500 mb-4 animate-pulse" />
                    <h3 className="text-2xl font-bold text-slate-100">Project Brief Initiated</h3>
                    <p className="text-sm text-slate-300 font-light max-w-md mx-auto leading-relaxed">
                      Thank you for contacting KALPANAAA. Your details have been successfully locked and stored. A senior solutions architect will contact you within the next 24 business hours.
                    </p>
                    <div className="pt-6">
                      <Link
                        href="/"
                        className="inline-flex items-center justify-center bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200 px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-md transition-colors"
                      >
                        Return Home
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">

                    {error && (
                      <div className="p-4 text-xs font-semibold rounded-lg bg-red-500/10 text-red-400 border border-red-500/20">
                        {error}
                      </div>
                    )}

                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase text-slate-400 tracking-wider mb-2.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Gaurav Tripathi"
                        className="w-full bg-[#0b1d3a]/60 border border-slate-700 hover:border-slate-600 rounded-lg px-4 py-3.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] transition-all duration-200 font-light"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase text-slate-400 tracking-wider mb-2.5">
                        Business Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. gaurav@example.com"
                        className="w-full bg-[#0b1d3a]/60 border border-slate-700 hover:border-slate-600 rounded-lg px-4 py-3.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] transition-all duration-200 font-light"
                      />
                    </div>

                    {/* Service Track Selector */}
                    <div>
                      <label htmlFor="project-type" className="block text-xs font-bold uppercase text-slate-400 tracking-wider mb-2.5">
                        Select Service Track
                      </label>
                      <select
                        id="project-type"
                        value={formState.projectType}
                        onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                        className="w-full bg-[#0b1d3a]/60 border border-slate-700 hover:border-slate-600 rounded-lg px-4 py-3.5 text-sm text-slate-200 focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] transition-all duration-200 cursor-pointer font-light"
                      >
                        <option value="web" className="bg-[#0b1d3a] text-slate-100">Web Engineering</option>
                        <option value="mobile" className="bg-[#0b1d3a] text-slate-100">Mobile Apps</option>
                        <option value="devops" className="bg-[#0b1d3a] text-slate-100">Cloud DevOps</option>
                        <option value="qa" className="bg-[#0b1d3a] text-slate-100">QA Testing</option>
                      </select>
                    </div>

                    {/* Description */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-bold uppercase text-slate-400 tracking-wider mb-2.5">
                        Project Description
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={6}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Describe your goals, tech stack preferences, and implementation timelines..."
                        className="w-full bg-[#0b1d3a]/60 border border-slate-700 hover:border-slate-600 rounded-lg px-4 py-3.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] transition-all duration-200 resize-y font-light leading-relaxed"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#0066CC] hover:bg-[#0052a3] text-white font-bold text-xs uppercase tracking-widest rounded-md py-6 shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            Securing Lead Pipeline...
                            <Loader2 className="h-4 w-4 animate-spin" />
                          </>
                        ) : (
                          <>
                            Initiate Project Brief
                            <Send className="h-3.5 w-3.5" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </main>

      {/* Footer component */}
      <Footer onSelectShowcase={() => { }} />

      {/* Executive Escalation Overlay Modal */}
      {escalationOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-4xl bg-[#0B1D3A] rounded-2xl border border-slate-800 shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">

            {/* Close Button */}
            <button
              onClick={() => {
                setEscalationOpen(false);
                setTriggerState("idle");
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Header */}
            <div className="mb-8 pr-10">
              <div className="text-xs font-semibold tracking-widest text-[#0066CC] uppercase mb-2">
                Operational Integrity
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-100">
                Direct Leadership Intervention
              </h2>
              <p className="mt-2 text-sm text-slate-400 font-light">
                Existing SLA partners can trigger paging alerts directly to the executive line.
              </p>
            </div>

            {/* Grid Layout inside Modal */}
            <div className="grid gap-6 lg:grid-cols-12">

              {/* Left Column: Command Console */}
              <div className="lg:col-span-4 flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0F2242]/20 p-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">
                    <AlertOctagon className="h-4 w-4 text-[#0066CC]" />
                    <span>Command Console</span>
                  </div>

                  <p className="text-xs text-slate-450 leading-relaxed font-light mb-6">
                    Incident severity classification check: If critical blocker SLA is breached, initiate pager signal.
                  </p>

                  <div className={`rounded-lg border p-4 transition-all duration-300 ${triggerState === "triggered"
                      ? "border-amber-500 bg-amber-500/10 text-amber-200"
                      : "border-slate-800 bg-[#0b1d3a]/60 text-slate-500"
                    }`}>
                    <div className="flex gap-2.5">
                      <ShieldAlert className={`h-4.5 w-4.5 shrink-0 ${triggerState === "triggered" ? "text-amber-400" : "text-slate-700"}`} />
                      <div>
                        <h5 className={`text-[10px] font-bold uppercase tracking-wider ${triggerState === "triggered" ? "text-amber-400" : "text-slate-450"}`}>
                          {triggerState === "triggered" ? "Status: Alert Routing" : "Status: Nominal"}
                        </h5>
                        <p className="mt-0.5 text-[10px] leading-relaxed font-mono">
                          {triggerState === "triggered"
                            ? "Pager active. CTO / CEO / COO notified."
                            : "SLA threshold: Active"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800">
                  <Button
                    onClick={handleTrigger}
                    disabled={triggerState === "triggered"}
                    className={`w-full font-semibold text-xs py-5 transition-all duration-300 cursor-pointer ${triggerState === "triggered"
                        ? "bg-amber-600 hover:bg-amber-600 text-white cursor-not-allowed border-amber-600 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                        : "bg-[#0066CC] hover:bg-[#0052a3] text-white shadow-[0_0_15px_rgba(0,102,204,0.25)]"
                      }`}
                  >
                    {triggerState === "triggered" ? "Escalation Triggered" : "Trigger Pager"}
                  </Button>
                </div>
              </div>

              {/* Right Column: Executives list */}
              <div className="lg:col-span-8 space-y-3">
                {executives.map((exec, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border p-5 transition-all duration-300 bg-[#0F2242]/20 ${triggerState === "triggered" && exec.status === "Active"
                        ? "border-amber-500/40 shadow-sm"
                        : "border-slate-800 hover:border-slate-700"
                      }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#0066CC]/20 bg-[#0066CC]/10 text-slate-100 font-bold font-mono text-sm">
                        {exec.avatar}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-slate-200">{exec.name}</h4>
                          <span className="text-[9px] font-mono text-slate-500">
                            {exec.pagerId}
                          </span>
                        </div>
                        <p className="text-[10px] font-semibold text-[#0066CC] mt-0.5">{exec.role}</p>
                        <p className="mt-1 text-xs text-slate-400 font-light">
                          {exec.bio}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-800">
                      <div className="flex items-center gap-1.5">
                        <span className={`h-1.5 w-1.5 rounded-full ${triggerState === "triggered" && exec.status === "Active"
                            ? "bg-amber-500 animate-ping"
                            : exec.status === "Active"
                              ? "bg-emerald-500"
                              : "bg-slate-600"
                          }`} />
                        <span className="text-[9px] font-mono text-slate-400">
                          {triggerState === "triggered" && exec.status === "Active" ? "ROUTING" : exec.status}
                        </span>
                      </div>

                      <Button
                        variant="outline"
                        className="border-slate-700 bg-slate-900/60 text-slate-350 hover:bg-slate-800 hover:text-slate-100 h-8 px-3 rounded-md text-[10px] transition-colors cursor-pointer"
                      >
                        <Phone className="mr-1 h-3 w-3" />
                        Page
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
