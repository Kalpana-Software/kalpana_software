"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Sun, Moon } from "lucide-react";

interface NavbarProps {
  onSelectShowcase: (category: string, item: string) => void;
}

export function Navbar({ onSelectShowcase }: NavbarProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setTimeout(() => {
        setTheme("dark");
      }, 0);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md font-sans select-none">
      <div className="container mx-auto flex py-2 min-h-[90px] max-w-7xl items-center justify-between px-6 md:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo_full.png"
            alt="KALPANAAA Logo"
            className="h-24 w-auto object-contain dark:invert"
          />
        </Link>

        {/* Middle Navigation with Dropdowns */}
        <nav className="hidden lg:flex items-center gap-8 h-full">

          {/* INDUSTRIES */}
          <div className="group relative flex items-center gap-1 text-xs font-bold text-muted-foreground hover:text-[#0066CC] uppercase tracking-wider cursor-pointer transition-colors duration-200 py-6">
            <span>Industries</span>
            <ChevronDown className="h-3 w-3 text-slate-400 group-hover:text-[#0066CC] transition-colors" />

            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 hidden group-hover:block w-56 bg-card border border-border shadow-xl rounded-md py-2 text-foreground animate-in fade-in slide-in-from-top-2 duration-200">
              <button onClick={() => handleItemClick("industries", "government")} className="w-full text-left px-4 py-2.5 hover:bg-muted hover:text-[#0066CC] transition-colors text-xs font-semibold tracking-wide font-mono uppercase cursor-pointer">
                Government
              </button>
              <button onClick={() => handleItemClick("industries", "healthcare")} className="w-full text-left px-4 py-2.5 hover:bg-muted hover:text-[#0066CC] transition-colors text-xs font-semibold tracking-wide font-mono uppercase cursor-pointer">
                Healthcare
              </button>
              <button onClick={() => handleItemClick("industries", "finance")} className="w-full text-left px-4 py-2.5 hover:bg-muted hover:text-[#0066CC] transition-colors text-xs font-semibold tracking-wide font-mono uppercase cursor-pointer">
                Finance
              </button>
              <button onClick={() => handleItemClick("industries", "education")} className="w-full text-left px-4 py-2.5 hover:bg-muted hover:text-[#0066CC] transition-colors text-xs font-semibold tracking-wide font-mono uppercase cursor-pointer">
                Education
              </button>
            </div>
          </div>

          {/* PRODUCTS */}
          <div className="group relative flex items-center gap-1 text-xs font-bold text-muted-foreground hover:text-[#0066CC] uppercase tracking-wider cursor-pointer transition-colors duration-200 py-6">
            <span>Products</span>
            <ChevronDown className="h-3 w-3 text-slate-400 group-hover:text-[#0066CC] transition-colors" />

            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 hidden group-hover:block w-56 bg-card border border-border shadow-xl rounded-md py-2 text-foreground animate-in fade-in slide-in-from-top-2 duration-200">
              <button onClick={() => handleItemClick("products", "accela")} className="w-full text-left px-4 py-2.5 hover:bg-muted hover:text-[#0066CC] transition-colors text-xs font-semibold tracking-wide font-mono uppercase cursor-pointer">
                Accela
              </button>
              <button onClick={() => handleItemClick("products", "clariti")} className="w-full text-left px-4 py-2.5 hover:bg-muted hover:text-[#0066CC] transition-colors text-xs font-semibold tracking-wide font-mono uppercase cursor-pointer">
                Clariti
              </button>
              <button onClick={() => handleItemClick("products", "collabware")} className="w-full text-left px-4 py-2.5 hover:bg-muted hover:text-[#0066CC] transition-colors text-xs font-semibold tracking-wide font-mono uppercase cursor-pointer">
                Collabware
              </button>
              <button onClick={() => handleItemClick("products", "datawalk")} className="w-full text-left px-4 py-2.5 hover:bg-muted hover:text-[#0066CC] transition-colors text-xs font-semibold tracking-wide font-mono uppercase cursor-pointer">
                Datawalk
              </button>
              <button onClick={() => handleItemClick("products", "sohema")} className="w-full text-left px-4 py-2.5 hover:bg-muted hover:text-[#0066CC] transition-colors text-xs font-semibold tracking-wide font-mono uppercase cursor-pointer">
                Sohema
              </button>
            </div>
          </div>

          {/* TECHNOLOGIES */}
          <div className="group relative flex items-center gap-1 text-xs font-bold text-muted-foreground hover:text-[#0066CC] uppercase tracking-wider cursor-pointer transition-colors duration-200 py-6">
            <span>Technologies</span>
            <ChevronDown className="h-3 w-3 text-slate-400 group-hover:text-[#0066CC] transition-colors" />

            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 hidden group-hover:block w-56 bg-card border border-border shadow-xl rounded-md py-2 text-foreground animate-in fade-in slide-in-from-top-2 duration-200">
              <button onClick={() => handleItemClick("technologies", "nextjs")} className="w-full text-left px-4 py-2.5 hover:bg-muted hover:text-[#0066CC] transition-colors text-xs font-semibold tracking-wide font-mono uppercase cursor-pointer">
                Next.js
              </button>
              <button onClick={() => handleItemClick("technologies", "fastapi")} className="w-full text-left px-4 py-2.5 hover:bg-muted hover:text-[#0066CC] transition-colors text-xs font-semibold tracking-wide font-mono uppercase cursor-pointer">
                FastAPI
              </button>
              <button onClick={() => handleItemClick("technologies", "postgres")} className="w-full text-left px-4 py-2.5 hover:bg-muted hover:text-[#0066CC] transition-colors text-xs font-semibold tracking-wide font-mono uppercase cursor-pointer">
                PostgreSQL
              </button>
              <button onClick={() => handleItemClick("technologies", "docker")} className="w-full text-left px-4 py-2.5 hover:bg-muted hover:text-[#0066CC] transition-colors text-xs font-semibold tracking-wide font-mono uppercase cursor-pointer">
                Docker & AWS
              </button>
            </div>
          </div>

          {/* SERVICES */}
          <div className="group relative flex items-center gap-1 text-xs font-bold text-muted-foreground hover:text-[#0066CC] uppercase tracking-wider cursor-pointer transition-colors duration-200 py-6">
            <span>Services</span>
            <ChevronDown className="h-3 w-3 text-slate-400 group-hover:text-[#0066CC] transition-colors" />

            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 hidden group-hover:block w-56 bg-card border border-border shadow-xl rounded-md py-2 text-foreground animate-in fade-in slide-in-from-top-2 duration-200">
              <button onClick={() => handleItemClick("services", "web")} className="w-full text-left px-4 py-2.5 hover:bg-muted hover:text-[#0066CC] transition-colors text-xs font-semibold tracking-wide font-mono uppercase cursor-pointer">
                Web Engineering
              </button>
              <button onClick={() => handleItemClick("services", "mobile")} className="w-full text-left px-4 py-2.5 hover:bg-muted hover:text-[#0066CC] transition-colors text-xs font-semibold tracking-wide font-mono uppercase cursor-pointer">
                Mobile Apps
              </button>
              <button onClick={() => handleItemClick("services", "devops")} className="w-full text-left px-4 py-2.5 hover:bg-muted hover:text-[#0066CC] transition-colors text-xs font-semibold tracking-wide font-mono uppercase cursor-pointer">
                Cloud DevOps
              </button>
              <button onClick={() => handleItemClick("services", "qa")} className="w-full text-left px-4 py-2.5 hover:bg-muted hover:text-[#0066CC] transition-colors text-xs font-semibold tracking-wide font-mono uppercase cursor-pointer">
                Quality Assurance
              </button>
            </div>
          </div>

          {/* ABOUT US */}
          <div className="group relative flex items-center gap-1 text-xs font-bold text-muted-foreground hover:text-[#0066CC] uppercase tracking-wider cursor-pointer transition-colors duration-200 py-6">
            <span>About Us</span>
            <ChevronDown className="h-3 w-3 text-slate-400 group-hover:text-[#0066CC] transition-colors" />

            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 hidden group-hover:block w-56 bg-card border border-border shadow-xl rounded-md py-2 text-foreground animate-in fade-in slide-in-from-top-2 duration-200">
              <button onClick={() => handleItemClick("aboutus", "team")} className="w-full text-left px-4 py-2.5 hover:bg-muted hover:text-[#0066CC] transition-colors text-xs font-semibold tracking-wide font-mono uppercase cursor-pointer">
                Our Team
              </button>
              <button onClick={() => handleItemClick("aboutus", "vision")} className="w-full text-left px-4 py-2.5 hover:bg-muted hover:text-[#0066CC] transition-colors text-xs font-semibold tracking-wide font-mono uppercase cursor-pointer">
                Corporate Vision
              </button>
            </div>
          </div>
        </nav>

        {/* CTA Button & Theme Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground hover:bg-muted transition-colors duration-200 cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5 text-slate-700" />
            ) : (
              <Sun className="h-5 w-5 text-amber-400" />
            )}
          </button>
          <Link
            href="/contact"
            className="bg-black dark:bg-white dark:text-black hover:bg-slate-800 dark:hover:bg-slate-200 text-white px-7 py-3 text-xs font-bold uppercase tracking-wider transition-colors duration-200 select-none cursor-pointer rounded-md"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
