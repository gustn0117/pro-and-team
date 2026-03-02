"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const navItems = [
    { href: "#professionals", label: t("구성원", "Professionals") },
    { href: "#practice-areas", label: t("주요업무", "Practice Areas") },
    { href: "#contact", label: t("연락처", "Contact") },
  ];

  return (
    <footer className="relative bg-white text-gray-600 overflow-hidden">
      {/* Top border */}
      <div className="border-t border-gray-200" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10">
        {/* Main 3-column grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-14">
          {/* Col 1: Branding */}
          <div>
            <p className="text-navy font-bold font-serif text-xl tracking-wide mb-2">
              Pro &amp; Team
            </p>
            <p className="text-[10px] text-gray-500 tracking-[0.2em] font-serif small-caps mb-5">
              {t("프로앤팀 특허법률사무소", "IP Law Firm")}
            </p>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              {t(
                "국제 IP 분쟁 전문 경력 52년의 노하우로, 기업의 글로벌 지식재산 전략을 이끕니다.",
                "With 52 years of expertise in international IP disputes, we lead corporate global intellectual property strategy."
              )}
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-[11px] text-gold-dark font-serif font-semibold tracking-[0.2em] small-caps mb-6">
              Navigation
            </h4>
            <nav className="space-y-4">
              {navItems.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-gray-500 hover:text-gold-dark transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3: Contact & back to top */}
          <div>
            <h4 className="text-[11px] text-gold-dark font-serif font-semibold tracking-[0.2em] small-caps mb-6">
              Contact Info
            </h4>
            <div className="space-y-5 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-gold-dark/60 shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <a href="tel:02-6677-3868" className="hover:text-gold-dark transition-colors">02-6677-3868</a>
              </div>
              <div className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-gold-dark/60 shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <a href="mailto:info@proteamip.com" className="hover:text-gold-dark transition-colors">info@proteamip.com</a>
              </div>
              <div className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-gold-dark/60 shrink-0 mt-0.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>
                  {t(
                    "서울특별시 강남구 선릉로 511, 8층 812호",
                    "511 Seolleung-ro, Gangnam-gu, Seoul, 8F #812"
                  )}
                </span>
              </div>
            </div>

            {/* Back to top */}
            <a
              href="#professionals"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="group inline-flex items-center gap-2.5 text-[11px] text-gray-400 hover:text-gold-dark tracking-wider font-serif small-caps transition-colors duration-200"
            >
              <span>{t("맨 위로", "Back to Top")}</span>
              <span className="w-8 h-8 rounded-sm border border-gray-300 group-hover:border-gold/50 flex items-center justify-center transition-colors duration-300">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                  <path
                    fillRule="evenodd"
                    d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Bottom divider + copyright */}
        <div className="border-t border-gray-200 mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-gray-400 tracking-wide">
            &copy; {new Date().getFullYear()} {t("프로앤팀 특허법률사무소", "Pro & Team IP Law Firm")}. All rights reserved.
          </p>
          <p className="text-[10px] text-gray-400 tracking-wide font-serif small-caps">
            {t("국제 IP 분쟁 전문", "International IP Dispute Specialists")}
          </p>
        </div>
      </div>
    </footer>
  );
}
