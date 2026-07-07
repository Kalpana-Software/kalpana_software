"use client";

import Link from "next/link";

interface FooterProps {
  onSelectShowcase: (category: string, item: string) => void;
}

export function Footer({ onSelectShowcase }: FooterProps) {
  const handleItemClick = (category: string, item: string) => {
    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      window.location.href = `/?category=${category}&item=${item}#showcase`;
    } else {
      onSelectShowcase(category, item);
      setTimeout(() => {
        document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <footer className="bg-background text-foreground border-t border-border font-sans">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Column 1: Brand Identity & Corporate Statement */}
        <div className="space-y-4">
          <div className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo_full.png"
              alt="KALPANAAA Logo"
              className="h-28 w-auto object-contain dark:invert"
            />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Providing enterprise-grade, full-lifecycle IT automation and software engineering solutions for complex digital challenges.
          </p>
          <div className="pt-2 text-xs text-muted-foreground">
            Performance Index: <span className="text-[#0066CC] font-mono">latency &le; 200ms</span>
          </div>
        </div>

        {/* Column 2: Service Domains (Now linked to Interactive Showcase) */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Our Services</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <button onClick={() => handleItemClick("services", "web")} className="hover:text-[#0066CC] transition-colors duration-200 text-left">
                Web Engineering
              </button>
            </li>
            <li>
              <button onClick={() => handleItemClick("services", "mobile")} className="hover:text-[#0066CC] transition-colors duration-200 text-left">
                Omnichannel Mobile Apps
              </button>
            </li>
            <li>
              <button onClick={() => handleItemClick("services", "devops")} className="hover:text-[#0066CC] transition-colors duration-200 text-left">
                Cloud & DevOps Automation
              </button>
            </li>
            <li>
              <button onClick={() => handleItemClick("services", "qa")} className="hover:text-[#0066CC] transition-colors duration-200 text-left">
                Enterprise Quality Assurance
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Corporate Governance (Executive Directory) */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Executive Directors</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <span className="block text-foreground font-medium">Gaurav Kr Tripathi</span>
              <span className="text-xs text-muted-foreground">Founder, MD & CTO</span>
            </li>
            <li>
              <span className="block text-foreground font-medium">Akshit Ujjain</span>
              <span className="text-xs text-muted-foreground">Co-Founder & CEO</span>
            </li>
            <li>
              <span className="block text-foreground font-medium">Rahul Kr Pathak</span>
              <span className="text-xs text-muted-foreground">Chief Operating Officer</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Infrastructure Operations & Security */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Operations Base</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Kalpanaaaa Software Solutions Pvt. Ltd.<br />
            <span className="text-xs text-muted-foreground">Corporate Infrastructure Suite v1.0</span>
          </p>
          <div className="pt-2 space-y-1">
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span>TLS 1.3 Security Tunnels Active</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span>AES-256 Vault Protection</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-border bg-slate-100 dark:bg-[#071326]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <div>
            &copy; {new Date().getFullYear()} Kalpanaaaa Software Solutions Pvt Ltd. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="#privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="#compliance" className="hover:text-foreground transition-colors">System Audit Logs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
