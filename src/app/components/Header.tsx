"use client";

import { useState, useEffect } from "react";

const navItems = [
  { href: "#about", label: "사무소 소개" },
  { href: "#practice-areas", label: "주요업무" },
  { href: "#professionals", label: "Professionals" },
  { href: "#contact", label: "연락처" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-wide text-gold-gradient group-hover:opacity-80 transition-opacity">
              Pro &amp; Team
            </span>
            <span className="text-[10px] tracking-[0.25em] text-gray-400 uppercase">
              IP Law Firm
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-all duration-200 relative pb-1 ${
                  isActive
                    ? "text-gold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gold after:transition-all"
                    : "text-gray-300 hover:text-gold after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-gold after:transition-all hover:after:left-0 hover:after:w-full"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-navy-light/95 backdrop-blur-md border-t border-gray-700/50">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-6 py-3.5 text-sm font-medium border-b border-gray-700/30 transition-colors ${
                  isActive
                    ? "text-gold bg-navy/50"
                    : "text-gray-300 hover:text-gold hover:bg-navy/30"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
