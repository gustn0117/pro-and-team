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
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
      setScrollProgress(Math.min(progress, 1));
    };
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
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-navy/[0.97] backdrop-blur-xl shadow-lg shadow-black/10 py-3"
            : "bg-transparent py-6"
        }`}
      >
        {/* Subtle bottom border when scrolled */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
        )}

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="group flex items-center gap-3">
            <div className="flex flex-col">
              <span
                className={`font-bold font-serif tracking-wide text-gold-gradient-static transition-all duration-300 ${
                  scrolled ? "text-lg" : "text-xl"
                }`}
              >
                Pro &amp; Team
              </span>
              <span className="text-[9px] tracking-[0.3em] text-gray-400/70 uppercase font-medium">
                IP Law Firm
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`animated-underline relative text-[13px] font-medium tracking-wide px-4 py-2 transition-all duration-200 ${
                    isActive
                      ? "text-gold active"
                      : "text-gray-400 hover:text-gold"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="#contact"
              className="btn-magnetic ml-4 px-5 py-2 bg-gold/10 border border-gold/25 text-gold text-[12px] font-semibold tracking-wider uppercase rounded-sm hover:bg-gold/20 hover:border-gold/50 hover:shadow-md hover:shadow-gold/10 transition-all duration-300"
            >
              상담 문의
            </a>
          </nav>

          {/* Mobile Toggle - animated hamburger */}
          <button
            className="md:hidden text-gray-300 hover:text-gold transition-colors w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴"
          >
            <div className="relative w-5 h-4 flex flex-col justify-between">
              <span className={`block w-full h-[1.5px] bg-current transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-full h-[1.5px] bg-current transition-all duration-200 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-full h-[1.5px] bg-current transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="mx-4 mt-3 mb-2 bg-navy-light/95 backdrop-blur-xl rounded-2xl border border-white/5 overflow-hidden">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-6 py-4 text-sm font-medium border-b border-white/[0.03] last:border-0 transition-colors ${
                    isActive
                      ? "text-gold bg-gold/[0.06]"
                      : "text-gray-400 hover:text-gold hover:bg-white/[0.03]"
                  }`}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
