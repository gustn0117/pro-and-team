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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-navy ${
        scrolled ? "border-b border-gold/10 py-3" : "py-5"
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
            <span className={`text-[9px] text-gray-300 font-medium flex items-center gap-1.5 ${
              lang === "en" ? "tracking-[0.2em] font-serif small-caps" : "tracking-[0.1em]"
            }`}>
              <span className="text-gold/70 text-[8px]">&middot;</span>
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
                    ? "text-gold active"
                    : "text-gray-300 hover:text-gold"
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
            <span className={lang === "ko" ? "text-gold" : "text-gray-400 hover:text-gray-200 transition-colors"}>KO</span>
            <span className="text-gray-500 mx-1">/</span>
            <span className={lang === "en" ? "text-gold" : "text-gray-400 hover:text-gray-200 transition-colors"}>EN</span>
          </button>

          <a
            href="#contact"
            className="ml-4 px-5 py-2 bg-gold/15 border border-gold/30 text-gold text-[12px] font-serif font-semibold tracking-wider small-caps rounded-none hover:bg-gold/20 hover:border-gold/40 transition-all duration-300"
          >
            {t("상담 문의", "Consultation")}
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
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
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
                    : "text-gray-300 hover:text-gold hover:bg-white/[0.05]"
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
            className="w-full flex items-center gap-3 px-6 py-4 text-sm font-medium text-gray-300 hover:text-gold transition-colors border-t border-white/[0.05]"
          >
            <span className="text-[11px] tracking-wider">
              <span className={lang === "ko" ? "text-gold" : ""}>KO</span>
              <span className="text-gray-500 mx-1">/</span>
              <span className={lang === "en" ? "text-gold" : ""}>EN</span>
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
