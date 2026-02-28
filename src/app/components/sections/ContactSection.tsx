"use client";

import { useEffect, useRef, useState } from "react";

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

const contactItems = [
  {
    label: "Tel",
    value: "(추후 업데이트)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Fax",
    value: "(추후 업데이트)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "(추후 업데이트)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const section = useReveal();
  const ctaReveal = useReveal();

  return (
    <section id="contact" className="py-28 md:py-40 scroll-mt-20 relative overflow-hidden bg-gradient-to-b from-navy-dark via-navy to-navy-dark">
      {/* Enhanced radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,90,0.05)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,_rgba(212,175,90,0.03)_0%,_transparent_50%)]" />

      {/* Floating diamond decorations */}
      <div className="absolute top-20 left-[10%] text-gold/[0.07] text-lg float-slow pointer-events-none select-none">&#9670;</div>
      <div className="absolute bottom-32 right-[12%] text-gold/[0.05] text-sm float-slow-delayed pointer-events-none select-none">&#9670;</div>

      {/* Guide lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-[25%] w-px h-full bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
        <div className="absolute top-0 right-[25%] w-px h-full bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
      </div>

      <div
        ref={section.ref}
        className={`reveal ${section.visible ? "visible" : ""} relative z-10 max-w-5xl mx-auto px-6`}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold/40" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-gold-dark/60 font-medium">
              Contact
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold/40" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-gold-gradient mb-6">
            연락처
          </h2>
          <p className="text-gray-400/80 text-[15px] max-w-md mx-auto leading-relaxed">
            국제 IP 분쟁 대응, 특허 전략 수립, 라이선싱 협상 등
            지식재산 관련 전문 상담이 필요하시면 언제든 연락해 주세요.
          </p>
          <div className="flex justify-center mt-8">
            <div className="w-24 section-divider" />
          </div>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {contactItems.map((item, idx) => (
            <div
              key={idx}
              className="group glass-card rounded-2xl p-8 text-center hover:border-gold/15 transition-all duration-400"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/[0.06] flex items-center justify-center text-gold/70 mx-auto mb-5 group-hover:bg-gold/10 group-hover:text-gold transition-all duration-300">
                {item.icon}
              </div>
              <p className="text-[11px] text-gold-dark/60 font-medium uppercase tracking-wider mb-2">
                {item.label}
              </p>
              <p className="text-gray-400/70 text-sm">{item.value}</p>
            </div>
          ))}
        </div>

        {/* CTA area */}
        <div
          ref={ctaReveal.ref}
          className={`reveal ${ctaReveal.visible ? "visible" : ""}`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-gold/20 via-transparent to-gold/10 max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-10 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex-1 max-w-[80px] h-px bg-gradient-to-r from-transparent to-gold/20" />
              <span className="text-gold/25 text-xs">&#9670;</span>
              <div className="flex-1 max-w-[80px] h-px bg-gradient-to-l from-transparent to-gold/20" />
            </div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-gold-gradient mb-3">
              전문 상담을 원하시나요?
            </h3>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              국제 IP 분쟁, 특허 전략, 라이선싱 등 어떤 주제든 편하게 문의해 주세요.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#hero"
                className="btn-shine group relative px-10 py-4 bg-gold text-navy font-bold text-sm tracking-wide rounded-sm hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 active:scale-[0.98] transition-all duration-300"
              >
                <span className="font-serif text-base">Pro &amp; Team</span>
              </a>
              <a
                href="#hero"
                className="group flex items-center gap-2.5 text-[12px] text-gray-400/70 hover:text-gold/80 tracking-wider uppercase transition-colors duration-200"
              >
                <span>Back to Top</span>
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform">
                  <path
                    fillRule="evenodd"
                    d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
