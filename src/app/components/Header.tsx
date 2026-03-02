"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { href: "#professionals", label: t("구성원", "Professionals") },
    { href: "#practice-areas", label: t("주요업무", "Practice Areas") },
    { href: "#contact", label: t("연락처", "Contact") },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["professionals", "practice-areas", "contact"];
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-md ${
        scrolled ? "border-b border-gray-200/80 shadow-[0_1px_8px_rgba(0,0,0,0.06)] py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#professionals"
          className="group flex items-center gap-3"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <div className="flex flex-col">
            <span
              className={`font-bold font-serif tracking-wide text-gold-gradient transition-all duration-300 ${
                scrolled ? "text-lg" : "text-xl"
              }`}
            >
              Pro &amp; Team
            </span>
            <span className={`text-[9px] text-gray-500 font-medium ${
              lang === "en" ? "tracking-[0.2em] font-serif" : "tracking-[0.08em]"
            }`}>
              {t("프로앤팀 특허법률사무소", "IP Law Firm")}
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
                    ? "text-gold-dark active"
                    : "text-gray-600 hover:text-gold-dark"
                }`}
              >
                {item.label}
              </a>
            );
          })}

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "ko" ? "en" : "ko")}
            className="ml-3 flex items-center gap-0 text-[11px] font-medium tracking-wider"
          >
            <span className={lang === "ko" ? "text-gold-dark" : "text-gray-400 hover:text-gray-600 transition-colors"}>KO</span>
            <span className="text-gray-300 mx-1">/</span>
            <span className={lang === "en" ? "text-gold-dark" : "text-gray-400 hover:text-gray-600 transition-colors"}>EN</span>
          </button>

          <a
            href="#contact"
            className="ml-4 px-5 py-2 bg-gold-dark text-white text-[12px] font-semibold tracking-wider rounded hover:bg-gold transition-all duration-300"
          >
            {t("상담 문의", "Consultation")}
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-600 hover:text-gold-dark transition-colors w-10 h-10 flex items-center justify-center rounded-sm hover:bg-gray-100"
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
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-4 mt-3 mb-2 bg-cream border-t border-b border-gray-200 overflow-hidden">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-6 py-4 text-sm font-medium border-b border-gray-100 last:border-0 transition-colors ${
                  isActive
                    ? "text-gold-dark bg-gold/[0.08]"
                    : "text-gray-600 hover:text-gold-dark hover:bg-gray-50"
                }`}
              >
                {isActive && (
                  <span className="w-0.5 h-4 bg-gold" />
                )}
                {item.label}
              </a>
            );
          })}
          {/* Mobile language toggle */}
          <button
            onClick={() => {
              setLang(lang === "ko" ? "en" : "ko");
              setMobileOpen(false);
            }}
            className="w-full flex items-center gap-3 px-6 py-4 text-sm font-medium text-gray-600 hover:text-gold-dark transition-colors border-t border-gray-100"
          >
            <span className="text-[11px] tracking-wider">
              <span className={lang === "ko" ? "text-gold-dark" : ""}>KO</span>
              <span className="text-gray-300 mx-1">/</span>
              <span className={lang === "en" ? "text-gold-dark" : ""}>EN</span>
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
