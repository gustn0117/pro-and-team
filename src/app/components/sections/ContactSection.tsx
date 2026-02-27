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

export default function ContactSection() {
  const section = useReveal();

  return (
    <section id="contact" className="py-20 md:py-28 bg-navy scroll-mt-20 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-navy-light/30" />
      </div>

      <div ref={section.ref} className={`reveal ${section.visible ? "visible" : ""} relative z-10 max-w-5xl mx-auto px-6`}>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-gold" />
          <span className="text-xs tracking-[0.2em] uppercase text-gold-dark font-medium">Contact</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gold mb-10">연락처</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: message */}
          <div>
            <p className="text-gray-300 text-[15px] leading-relaxed mb-8">
              국제 IP 분쟁 대응, 특허 전략 수립, 라이선싱 협상 등
              지식재산 관련 전문 상담이 필요하시면 언제든 연락해 주세요.
            </p>
            <a
              href="#hero"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy font-semibold rounded-sm hover:bg-gold-light hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-gold/20"
            >
              Pro &amp; Team
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Right: contact items */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gold-dark font-medium mb-1">Tel</p>
                <p className="text-gray-300 text-sm">(추후 업데이트)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gold-dark font-medium mb-1">Fax</p>
                <p className="text-gray-300 text-sm">(추후 업데이트)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gold-dark font-medium mb-1">Email</p>
                <p className="text-gray-300 text-sm">(추후 업데이트)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
