"use client";

import { Lock, FileKey2, ShieldAlert, Fingerprint } from "lucide-react";

export function SecurityBanner() {
  return (
    <section id="security" className="py-24 md:py-28 border-t border-[rgba(0,102,204,0.1)] bg-[#0B1D3A]">
      <div className="container mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-md border border-amber-500/20 bg-amber-500/5 px-3 py-1 text-xs font-medium text-amber-400 mb-6">
              <ShieldAlert className="h-3.5 w-3.5" />
              <span>Zero-Trust Protocol Active</span>
            </div>
            
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl">
              Military-Grade Cryptography & Threat Isolation
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              AES-256 & TLS 1.3 End-to-End Encryption
            </p>
            
            <p className="mt-6 text-base text-slate-400 leading-relaxed font-light">
              We operate under a strict <strong className="text-[#0066CC] font-medium">Never Trust, Always Verify</strong> architecture. Every single request, API handshake, and data layer interaction is cryptographically verified. Private keys are generated on-the-fly and managed inside hardware-isolated security modules (HSM) with zero persistent exposure vectors.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[rgba(0,102,204,0.3)] bg-[#0066CC]/5 text-[#0066CC]">
                  <FileKey2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">Ephemeral Key Rotation</h4>
                  <p className="mt-1 text-xs text-slate-400">Keys are rotated every 15 minutes, neutralizing long-term session exploitation attempts.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[rgba(0,102,204,0.3)] bg-[#0066CC]/5 text-[#0066CC]">
                  <Fingerprint className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">MFA & Biometric Identity</h4>
                  <p className="mt-1 text-xs text-slate-400">Hardware-bound WebAuthn tokens required for all privileged console workspace transitions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Simulated Cryptographic State Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-[rgba(0,102,204,0.15)] bg-[#0F2242]/30 p-8 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-[#0066CC]/5 blur-3xl" />
              
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[rgba(0,102,204,0.1)]">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Live Encryption Module
                  </span>
                </div>
                <Lock className="h-4 w-4 text-[#0066CC]" />
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1.5 font-mono">
                    <span>CYPHER MODE</span>
                    <span className="text-[#0066CC] font-bold">ACTIVE</span>
                  </div>
                  <div className="bg-[#0b1d3a]/60 border border-[rgba(0,102,204,0.15)] rounded px-3 py-2 font-mono text-xs text-slate-300">
                    AES_256_GCM / ECDHE_RSA_WITH_AES_256_GCM_SHA384
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1.5 font-mono">
                    <span>ACTIVE HANDSHAKE</span>
                    <span className="text-[#0066CC] font-bold font-sans">TLS 1.3</span>
                  </div>
                  <div className="bg-[#0b1d3a]/60 border border-[rgba(0,102,204,0.15)] rounded px-3 py-2 font-mono text-xs text-slate-300 flex items-center justify-between">
                    <span>curve25519-sha256</span>
                    <span className="text-emerald-400">Verified</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1.5 font-mono">
                    <span>KEY ROTATION ENVELOPE</span>
                    <span className="text-amber-400">RE-KEY PENDING</span>
                  </div>
                  <div className="w-full bg-[#0b1d3a]/60 rounded-full h-1.5 overflow-hidden border border-[rgba(0,102,204,0.1)]">
                    <div className="bg-[#0066CC] h-full rounded-full w-[78%] animate-pulse" />
                  </div>
                  <div className="mt-1 flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>ROTATION INTERVAL: 900s</span>
                    <span>T-MINUS: 184s</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[rgba(0,102,204,0.1)] text-center">
                <span className="text-xs font-semibold text-slate-400">
                  Secured by Kalpanaaaa Defense Grid v3
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
