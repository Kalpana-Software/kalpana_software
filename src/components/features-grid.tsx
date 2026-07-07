"use client";

import { Card } from "@/components/ui/card";
import { LayoutTemplate, Smartphone, Cloud, ShieldCheck } from "lucide-react";

interface ServiceItem {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  colSpan: string;
}

const services: ServiceItem[] = [
  {
    title: "Full-Stack Web Engineering",
    subtitle: "High-Performance Modern Web",
    description: "We build scalable, secure, and highly performant web applications using Next.js, React, Node.js, and modern GraphQL/REST APIs. Engineered for enterprise latency thresholds and optimized for user conversion.",
    icon: LayoutTemplate,
    tag: "WEB-ENG",
    colSpan: "md:col-span-2",
  },
  {
    title: "Omnichannel Mobile Apps",
    subtitle: "Native & Cross-Platform",
    description: "Bespoke iOS and Android mobile solutions engineered to deliver seamless performance, offline-first capabilities, and responsive, fluid interfaces.",
    icon: Smartphone,
    tag: "MOBILE",
    colSpan: "md:col-span-1",
  },
  {
    title: "Cloud DevOps & Infrastructure",
    subtitle: "Resilient & Scalable Systems",
    description: "CI/CD pipelines, containerization, and infrastructure as code. Architecting resilient cloud structures on AWS and GCP with automated failover and zero-downtime deployments.",
    icon: Cloud,
    tag: "DEVOPS",
    colSpan: "md:col-span-1",
  },
  {
    title: "Enterprise Quality Assurance",
    subtitle: "Zero-defect Delivery Standards",
    description: "Automated regression pipelines, unit/integration testing suites, and performance load tests. We implement robust verification standards to guarantee zero-defect production rollouts.",
    icon: ShieldCheck,
    tag: "QA-VERIFY",
    colSpan: "md:col-span-2",
  },
];

export function FeaturesGrid() {
  return (
    <section id="services" className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <div className="text-sm font-semibold tracking-widest text-[#0066CC] uppercase mb-4">
            Our Services
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Bespoke Engineering Capabilities
          </h2>
          <p className="mt-4 text-base text-muted-foreground font-light leading-relaxed">
            We deliver state-of-the-art software solutions tailored to solve complex business operations. No templates. No shortcuts. Just pure, clean engineering.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={`group relative flex flex-col justify-between overflow-hidden border border-border bg-card p-8 md:p-10 transition-all duration-300 hover:border-[#0066CC]/40 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,102,204,0.08)] ${service.colSpan} rounded-xl`}
              >
                {/* Minimal Top-Right Accent Line */}
                <div className="absolute top-0 right-0 h-[2px] w-0 bg-[#0066CC] transition-all duration-300 group-hover:w-full" />
                
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] font-mono text-[#0066CC] bg-[#0066CC]/10 px-2.5 py-1 rounded border border-[#0066CC]/20 tracking-wider">
                      {service.tag}
                    </span>
                    <div className="text-muted-foreground group-hover:text-[#0066CC] transition-colors duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Card Body */}
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <div className="text-xs font-semibold text-muted-foreground mb-4 tracking-wide uppercase">
                    {service.subtitle}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                {/* Bottom link/CTA indicator */}
                <div className="mt-10 pt-4 border-t border-[rgba(0,102,204,0.05)] flex items-center justify-start text-xs font-semibold text-[#0066CC] hover:text-[#0052a3] transition-colors duration-200 cursor-pointer">
                  <span>Learn more</span>
                  <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">→</span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
