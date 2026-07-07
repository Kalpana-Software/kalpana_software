"use client";

import { Cpu, Layers, ArrowRight, ShieldCheck } from "lucide-react";

interface ShowcaseData {
  title: string;
  description: string;
  specs: string[];
  metric: string;
}

const showcaseContent: Record<string, Record<string, ShowcaseData>> = {
  industries: {
    government: {
      title: "Government Automation Portals",
      description: "Modern digital portals, licensing workflows, and municipal automation solutions designed for regulatory transparency and high volume citizen access.",
      specs: ["Compliant with G2C / G2B Standards", "Automated Permit Workflows", "Federal Data Sovereignty Security"],
      metric: "99.9% Citizen SLA Index",
    },
    healthcare: {
      title: "Healthcare Information Hubs",
      description: "HIPAA-compliant secure software, scheduling integrations, and patient health record platforms constructed with robust end-to-end data encryption.",
      specs: ["HIPAA & HITECH Certified Architecture", "HL7 / FHIR Ingestion Interfaces", "Sub-200ms Latency Record Lookups"],
      metric: "Zero Security Defect Log",
    },
    finance: {
      title: "Financial Transaction Pipelines",
      description: "Secure transaction pipelines, banking integrations, and fraud-detection telemetry nodes executing high-throughput ledger operations.",
      specs: ["PCI-DSS Level 1 Vault Isolation", "Double-Entry Ledger Architecture", "Async Fraud Analysis Streams"],
      metric: "P99 Transaction Latency < 15ms",
    },
    education: {
      title: "Educational Portal Frameworks",
      description: "Student management systems, virtual classroom portals, and learning analytics platforms built for high concurrency and media delivery.",
      specs: ["LTI Standard Integration Support", "Real-Time Quiz/Exam Telemetry", "Scalable CDN Video Caching"],
      metric: "20k+ Concurrent Session Support",
    },
  },
  products: {
    accela: {
      title: "Accela Permitting Suite Integration",
      description: "Enterprise-grade permissioning, asset management, and licensing automation systems configured for complex state and county departments.",
      specs: ["API Integration with Accela Civic Platform", "Custom Scripting & Form Automation", "Real-Time Mapping & GIS Synchronization"],
      metric: "Optimized File Ingestion SLA",
    },
    clariti: {
      title: "Clariti Permitting Services",
      description: "Community planning, building permits, and code enforcement platform. Highly responsive cloud solutions built on Salesforce Lightning framework.",
      specs: ["Salesforce Lightning SDK Integrations", "Custom Trigger Handlers & APEX Pipelines", "Interactive Citizen Map Visualizer"],
      metric: "90% Reduction in Permit Delay",
    },
    collabware: {
      title: "Collabware Archives Automation",
      description: "Secure records management and automated content archiving system. Designed for compliant records lifecycle management in the cloud.",
      specs: ["Zero-Data-Loss Archival Architecture", "Compliant Lifecycle Policy Engine", "Advanced Semantic Metadata Tagging"],
      metric: "WORM Storage Integration Active",
    },
    datawalk: {
      title: "Datawalk Graph Intelligence Platform",
      description: "Advanced intelligence analysis, entity matching, and multi-source graph database visualization software for corporate security teams.",
      specs: ["Big Data Graph Database Storage Node", "Federated Entity Matching & Clustering", "Visual Link Analysis Workspace Interface"],
      metric: "Inference Scaling up to 1B Entities",
    },
    sohema: {
      title: "Sohema Social Services Case System",
      description: "Case management system for social services, healthcare providers, and family welfare departments requiring sensitive record governance.",
      specs: ["Role-Based Access Control Audit Logger", "Dynamic Client Assessments Engine", "HIPAA Data Isolation Tunneling"],
      metric: "100% Sensitive Data Privacy Compliance",
    },
  },
  technologies: {
    nextjs: {
      title: "Next.js & React Client Engineering",
      description: "Production-ready, highly optimized client-side interfaces with modern SSR/ISR execution. Built on Tailwind CSS and TypeScript.",
      specs: ["Turbopack Compiled CSS/JS Modules", "Incremental Static Regeneration (ISR)", "Optimized Core Web Vitals Indexes"],
      metric: "LCP Threshold ≤ 1.2 seconds",
    },
    fastapi: {
      title: "FastAPI Async API Services",
      description: "High-performance, async backend APIs for fast telemetry, ML integrations, and lightweight data access pipelines.",
      specs: ["Python Uvicorn Async Worker Loops", "Pydantic Schema Serialization Rules", "OpenAPI Auto-Generated Documentation"],
      metric: "Up to 15,000 requests/sec",
    },
    postgres: {
      title: "PostgreSQL Database Architecture",
      description: "Enterprise relational database structure with robust clustering, transactional safety, and optimal query path lookup metrics.",
      specs: ["Multi-Region Replication Clusters", "Custom Index Tuning & Partition Rules", "Connection Pool Automation Layer"],
      metric: "P99 Query Response ≤ 5ms",
    },
    docker: {
      title: "Docker & AWS Cloud Infrastructure",
      description: "Containerized deployment clusters with automated load balancing, security sandboxes, and horizontal autoscaling configurations.",
      specs: ["ECS / Kubernetes Orchestration Rules", "Terraform Infrastructure-as-Code (IaC)", "Isolated VPC Networking Tunnels"],
      metric: "99.99% Node Availability SLA",
    },
  },
  services: {
    web: {
      title: "Full-Stack Web Engineering",
      description: "Responsive frontends, serverless API gateways, and distributed database models. Optimized for high-throughput citizen and consumer traffic.",
      specs: ["Next.js React Native Hybridization", "Edge Middleware Layer Routing", "Automated SSR Page Pre-generation"],
      metric: "Edge Router Overhead < 4ms",
    },
    mobile: {
      title: "Native & Omnichannel Mobile Apps",
      description: "Bespoke iOS and Android mobile solutions engineered to deliver seamless performance, offline-first capabilities, and fluid interfaces.",
      specs: ["React Native Cross-Platform Bundles", "Swift & Kotlin Native Implementations", "Secure Local SQLite Cache Protection"],
      metric: "Crash-Free Session Rating > 99.9%",
    },
    devops: {
      title: "Cloud DevOps & Architecture",
      description: "CI/CD pipelines, containerization, and infrastructure as code. Architecting resilient cloud structures on AWS and GCP with automated failover.",
      specs: ["GitHub Actions Continuous Pipelines", "Docker Image Registry Optimization", "Automatic VPC Failover Tunnels"],
      metric: "Deployment Cycle under 4 mins",
    },
    qa: {
      title: "Enterprise Quality Assurance",
      description: "Automated regression pipelines, unit/integration testing suites, and performance load tests ensuring zero-defect production rollouts.",
      specs: ["Cypress End-to-End Test Pipelines", "Playwright Regression Runner Suites", "Vulnerability Security Scanning"],
      metric: "Zero Critical Defect Rollouts",
    },
  },
  aboutus: {
    team: {
      title: "Our Leadership & Engineering Team",
      description: "Kalpanaaaa is directed by a core leadership group focused on technical excellence, strategic operations, and absolute reliability.",
      specs: [
        "Gaurav Kr Tripathi — Founder, MD & CTO",
        "Akshit Ujjain — Co-Founder & CEO",
        "Rahul Kr Pathak — Chief Operating Officer"
      ],
      metric: "Combined 15+ Yrs Industry Exp",
    },
    vision: {
      title: "Corporate Vision & SLA Commitments",
      description: "Our mission is to build highly resilient, compliant digital pipelines that automate complex tasks and secure workflows for enterprise partners.",
      specs: ["100% On-Time Delivery Guarantee", "Rigorous Verification Pipelines", "24/7 Priority Emergency Support SLA"],
      metric: "99.99% Operational Reliability",
    }
  }
};

interface DynamicShowcaseProps {
  selected: { category: string; item: string } | null;
}

export function DynamicShowcase({ selected }: DynamicShowcaseProps) {
  // Default fallback data if nothing is selected yet
  const displayCategory = selected ? selected.category.toLowerCase() : "products";
  const displayItem = selected ? selected.item.toLowerCase() : "accela";

  const data = showcaseContent[displayCategory]?.[displayItem] || showcaseContent.products.accela;

  return (
    <section id="showcase" className="py-24 md:py-32 border-t border-border bg-muted/30 dark:bg-background scroll-mt-24">
      <div className="container mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="text-sm font-semibold tracking-widest text-[#0066CC] uppercase mb-4">
            Interactive Showcase
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Selected Capability Inspector
          </h2>
          <p className="mt-4 text-base text-muted-foreground font-light">
            Select a product, technology, or industry sector in the menu or footer links to inspect operational metrics and specifications.
          </p>
        </div>

        {/* Showcase Panel Card */}
        <div 
          key={`${displayCategory}-${displayItem}`}
          className="max-w-4xl mx-auto bg-card rounded-2xl border border-border shadow-xl overflow-hidden grid md:grid-cols-12 animate-fade-in-up"
        >
          
          {/* Panel Left: Info */}
          <div className="p-8 md:p-12 md:col-span-8 space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#0066CC] uppercase tracking-wider mb-4">
                <Layers className="h-4 w-4" />
                <span>{selected ? `${selected.category} / ${selected.item}` : "Demo Selection"}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
                {data.title}
              </h3>
              <p className="mt-4 text-sm text-muted-foreground font-light leading-relaxed">
                {data.description}
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-border">
              <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">Specifications:</h4>
              <ul className="grid gap-2 text-xs text-muted-foreground">
                {data.specs.map((spec, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Panel Right: Metric Banner */}
          <div className="bg-slate-950 text-white p-8 md:p-12 md:col-span-4 flex flex-col justify-between items-start relative overflow-hidden">
            {/* Background design */}
            <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[#0066CC]/20 blur-2xl pointer-events-none" />
            
            <div className="space-y-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-[#0066CC]">
                <Cpu className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#0066CC] uppercase">
                Active Benchmark
              </span>
            </div>

            <div className="pt-16">
              <div className="text-lg font-bold font-mono tracking-tight leading-tight">
                {data.metric}
              </div>
              <div className="text-[10px] text-slate-400 mt-2 flex items-center gap-1">
                <span>Verified System Node</span>
                <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
