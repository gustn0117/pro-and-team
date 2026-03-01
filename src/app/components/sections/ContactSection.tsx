"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

export default function ContactSection() {
  const { t } = useLanguage();
  const section = useReveal();

  const contactItems = [
    {
      label: "Tel",
      value: "02-6677-3868",
      href: "tel:02-6677-3868",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      label: "Email",
      value: "info@proteamip.com",
      href: "mailto:info@proteamip.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      label: t("주소", "Address"),
      value: t(
        "서울특별시 강남구 선릉로 511, 8층 812호",
        "511 Seolleung-ro, Gangnam-gu, Seoul, 8F #812"
      ),
      href: undefined,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-28 md:py-40 scroll-mt-20 relative overflow-hidden bg-gradient-to-b from-navy-dark via-navy to-navy-dark">
      <div
        ref={section.ref}
        className={`reveal ${section.visible ? "visible" : ""} relative z-10 max-w-5xl mx-auto px-6`}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-gold-gradient mb-6">
            {t("연락처", "Contact")}
          </h2>
          <p className="text-gray-300 text-[15px] max-w-md mx-auto leading-relaxed">
            {t(
              "국제 IP 분쟁 대응, 특허 전략 수립, 라이선싱 협상 등 지식재산 관련 전문 상담이 필요하시면 언제든 연락해 주세요.",
              "For expert consultation on international IP disputes, patent strategy, licensing negotiations, and more — feel free to reach out anytime."
            )}
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactItems.map((item, idx) => (
            <div
              key={idx}
              className="group formal-card-dark rounded-md p-10 text-center"
            >
              <div className="w-14 h-14 rounded-md bg-gold/[0.10] flex items-center justify-center text-gold mx-auto mb-6 group-hover:bg-gold/[0.15] group-hover:text-gold-light transition-colors duration-300">
                {item.icon}
              </div>
              <p className="text-xs text-gold/80 font-serif font-semibold tracking-wider small-caps mb-3">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-gray-200 text-[15px] hover:text-gold transition-colors duration-200"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-200 text-[15px] leading-relaxed">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Back to top */}
        <div className="text-center mt-12">
          <a
            href="#professionals"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 text-[12px] text-gray-400 hover:text-gold tracking-wider transition-colors duration-200"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
            </svg>
            <span>{t("맨 위로", "Back to Top")}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
