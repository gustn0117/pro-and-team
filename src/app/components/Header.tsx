"use client";

import { useState, useEffect } from "react";

const navItems = [
  { href: "#about", label: "사무소 소개" },
  { href: "#practice-areas", label: "주요업무" },
  { href: "#professionals", label: "구성원" },
  { href: "#contact", label: "연락처" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-navy border-b border-gold/10 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="group flex items-center gap-3">
            <div className="flex flex-col">
              <span
                className={`font-bold font-serif tracking-wide text-gold-gradient transition-all duration-300 ${
                  scrolled ? "text-lg" : "text-xl"
                }`}
              >
                Pro &amp; Team
              </span>
              <span className="text-[9px] tracking-[0.3em] text-gray-400/60 font-serif font-medium small-caps flex items-center gap-1.5">
                <span className="text-gold/40 text-[8px]">&middot;</span>
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
              className="ml-4 px-5 py-2 bg-gold/10 border border-gold/20 text-gold text-[12px] font-serif font-semibold tracking-wider small-caps rounded-none hover:bg-gold/15 hover:border-gold/30 transition-all duration-300"
            >
              상담 문의
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-gold transition-colors w-10 h-10 flex items-center justify-center rounded-sm hover:bg-white/5"
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
          <nav className="mx-4 mt-3 mb-2 bg-navy-light border-t border-b border-gold/10 overflow-hidden">
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
                    <span className="w-0.5 h-4 bg-gold" />
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
