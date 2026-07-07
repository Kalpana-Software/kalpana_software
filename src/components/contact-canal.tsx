"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

export function ContactCanal() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "web",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
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
        throw new Error(data.error || "Failed to submit proposal request.");
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
    <section id="contact" className="py-24 md:py-32 border-t border-border bg-background">
      <div className="container mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Column: Copy */}
          <div className="lg:col-span-5">
            <div className="text-sm font-semibold tracking-widest text-[#0066CC] uppercase mb-4">
              Get In Touch
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s build something great.
            </h2>
            <p className="mt-4 text-base text-muted-foreground font-light leading-relaxed">
              Ready to start your digital transformation? Share your project details with our engineering team, and we will prepare a bespoke technical proposal tailored to your enterprise goals.
            </p>
            
            <div className="mt-8 space-y-3 text-sm text-muted-foreground font-light">
              <p>Inquiries: <a href="mailto:hello@kalpanaaa.com" className="text-[#0066CC] hover:underline">hello@kalpanaaa.com</a></p>
              <p>Response SLA: Under 24 Business Hours</p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center md:p-10">
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500 mb-4 animate-pulse" />
                <h4 className="text-xl font-bold text-foreground">Proposal Request Received</h4>
                <p className="mt-2 text-sm text-muted-foreground font-light max-w-md mx-auto">
                  Thank you for reaching out. A senior solutions architect will review your project details and get in touch at your email within the next 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 text-xs font-semibold rounded-lg bg-red-500/10 text-red-500 border border-red-500/20">
                    {error}
                  </div>
                )}
                
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase text-muted-foreground tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Gaurav Tripathi"
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder-slate-400 focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase text-muted-foreground tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. gaurav@example.com"
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder-slate-400 focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="project-type" className="block text-xs font-semibold uppercase text-muted-foreground tracking-wider mb-2">
                    Project Type
                  </label>
                  <select
                    id="project-type"
                    value={formState.projectType}
                    onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                    className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] transition-all duration-200 cursor-pointer"
                  >
                    <option value="web" className="bg-card">Full-Stack Web Engineering</option>
                    <option value="mobile" className="bg-card">Omnichannel Mobile Apps</option>
                    <option value="devops" className="bg-card">Cloud DevOps & Automation</option>
                    <option value="qa" className="bg-card">Enterprise Quality Assurance</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase text-muted-foreground tracking-wider mb-2">
                    Message / Project Details
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your goals, requirements, timeline, and any specific constraints..."
                    className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder-slate-400 focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] transition-all duration-200 resize-y"
                  />
                </div>

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#0066CC] hover:bg-[#0052a3] text-white font-semibold rounded-md px-8 py-5 transition-all duration-300 shadow-[0_0_15px_rgba(0,102,204,0.2)] hover:shadow-[0_0_25px_rgba(0,102,204,0.4)] flex items-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        Submitting Lead...
                        <Loader2 className="h-4 w-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Submit Proposal Request
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
