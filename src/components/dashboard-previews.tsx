"use client";

export function DashboardPreviews() {
  return (
    <div className="mt-20 grid gap-8 md:grid-cols-2">
      
      {/* Picture 1: Reaching Technology Interface */}
      <div className="group relative rounded-xl overflow-hidden border border-border bg-card transition-all duration-300 hover:border-[#0066CC]/50">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-90" />
        
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=800&q=80"
          alt="Human hand touching technology screen"
          className="w-full h-[320px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Caption */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20">
          <span className="text-[10px] font-mono text-[#0066CC] bg-[#0066CC]/10 px-2.5 py-1 rounded border border-[#0066CC]/20 tracking-wider">
            HUMAN-TECH INTERACTION
          </span>
          <h4 className="text-xl font-bold text-foreground mt-3">
            Intelligent Interface Touchpoints
          </h4>
          <p className="text-xs text-muted-foreground mt-1 font-light leading-normal max-w-sm">
            Bridging the gap between human intent and complex software execution with responsive touch-optimized surfaces.
          </p>
        </div>
      </div>

      {/* Picture 2: User Hand Operating Tech System */}
      <div className="group relative rounded-xl overflow-hidden border border-border bg-card transition-all duration-300 hover:border-[#0066CC]/50">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-90" />
        
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
          alt="Hand touching digital technology console"
          className="w-full h-[320px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Caption */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20">
          <span className="text-[10px] font-mono text-[#0066CC] bg-[#0066CC]/10 px-2.5 py-1 rounded border border-[#0066CC]/20 tracking-wider">
            OPERATIONAL CONTROL
          </span>
          <h4 className="text-xl font-bold text-foreground mt-3">
            Responsive Command Terminals
          </h4>
          <p className="text-xs text-muted-foreground mt-1 font-light leading-normal max-w-sm">
            Empowering enterprise users with direct, seamless control nodes to manage workflows and cloud resource hubs.
          </p>
        </div>
      </div>

    </div>
  );
}
