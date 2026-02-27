"use client";

import { useEffect, useRef, useState } from "react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    label: "Fax",
    value: "(추후 업데이트)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
  {
    label: "Email",
    value: "(추후 업데이트)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
];

export default function ContactSection() {
  const section = useReveal();

  return (
    <section id="contact" className="py-24 md:py-32 bg-navy scroll-mt-20 relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,90,0.04)_0%,_transparent_60%)]" />

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-gold/[0.05]" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full border border-gold/[0.04]" />
        <div className="absolute top-1/3 right-[10%] w-px h-40 bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
      </div>

      <div ref={section.ref} className={`reveal ${section.visible ? "visible" : ""} relative z-10 max-w-5xl mx-auto px-6`}>
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold/60" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-gold-dark font-medium">Contact</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold/60" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gold-gradient mb-4">연락처</h2>
          <p className="text-gray-400 text-[15px] max-w-md mx-auto leading-relaxed">
            국제 IP 분쟁 대응, 특허 전략 수립, 라이선싱 협상 등
            지식재산 관련 전문 상담이 필요하시면 언제든 연락해 주세요.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {contactItems.map((item, idx) => (
            <div
              key={idx}
              className="group glass-card rounded-xl p-6 text-center hover:border-gold/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mx-auto mb-4 group-hover:bg-gold/15 transition-colors duration-300">
                {item.icon}
              </div>
              <p className="text-[11px] text-gold-dark font-medium uppercase tracking-wider mb-2">{item.label}</p>
              <p className="text-gray-400 text-sm">{item.value}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#hero"
            className="group inline-flex items-center gap-3 px-8 py-3.5 bg-gold text-navy font-semibold rounded overflow-hidden hover:shadow-xl hover:shadow-gold/25 active:scale-[0.98] transition-all duration-300 relative"
          >
            <span className="relative z-10">Pro &amp; Team</span>
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 relative z-10 group-hover:-translate-y-0.5 transition-transform">
              <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
