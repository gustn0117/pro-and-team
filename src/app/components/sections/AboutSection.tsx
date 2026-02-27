"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!started) return;
    const step = end / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);
  return { count, ref };
}

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

const stats = [
  { end: 52, suffix: "+", label: "합산 경력", unit: "년", sublabel: "Years of Combined Experience", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  )},
  { end: 180, suffix: "+", label: "해외 소송 및 분쟁", unit: "건", sublabel: "International IP Cases", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
  )},
  { end: 300, suffix: "+", label: "계약 및 협상", unit: "건", sublabel: "Contracts & Negotiations", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
  )},
];

export default function AboutSection() {
  const header = useReveal();
  const intro = useReveal();
  const statsReveal = useReveal();
  const stat0 = useCountUp(stats[0].end);
  const stat1 = useCountUp(stats[1].end);
  const stat2 = useCountUp(stats[2].end);
  const counters = [stat0, stat1, stat2];

  return (
    <section id="about" className="py-24 md:py-32 bg-cream scroll-mt-20 relative">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(212,175,90,0.04)_0%,_transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <div ref={header.ref} className={`reveal ${header.visible ? "visible" : ""} text-center mb-16`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold/60" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-gold-dark font-medium">About Us</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold/60" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">사무소 소개</h2>
        </div>

        {/* Firm introduction — centered with quote style */}
        <div ref={intro.ref} className={`reveal ${intro.visible ? "visible" : ""} max-w-3xl mx-auto mb-20`}>
          <div className="relative">
            {/* Decorative quote mark */}
            <div className="absolute -top-6 -left-4 text-gold/15 text-[80px] font-serif leading-none select-none">&ldquo;</div>
            <div className="relative space-y-5 text-gray-600 text-[15px] md:text-base leading-[1.85] text-center">
              <p>
                프로앤팀 특허사무소는 국제 IP 분쟁 분야에서 합산 <strong className="text-navy font-semibold">52년 이상의 경력</strong>을 보유한
                전문가들이 설립한 지식재산 전문 사무소입니다.
              </p>
              <p>
                미국, 독일, 유럽, 일본 등 글로벌 주요 관할권에서의 특허소송, 영업비밀 소송,
                ITC 소송에 대한 풍부한 실무 경험을 바탕으로, 기업의 해외 IP 분쟁 대응을
                전략적으로 지원합니다.
              </p>
              <p>
                단순한 법률 서비스를 넘어, 기업의 사업 성공에 기여하는 <strong className="text-navy font-semibold">실질적인 특허 전략
                파트너</strong>로서의 역할을 지향합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Stats cards */}
        <div ref={statsReveal.ref} className={`reveal-stagger ${statsReveal.visible ? "visible" : ""} grid md:grid-cols-3 gap-6`}>
          {stats.map((stat, idx) => {
            const counter = counters[idx];
            return (
              <div
                key={idx}
                ref={counter.ref}
                className="group relative bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/20 via-gold to-gold/20 group-hover:h-1.5 transition-all duration-300" />
                {/* Background glow on hover */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gold/[0.03] rounded-full group-hover:bg-gold/[0.08] transition-colors duration-500" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center text-gold-dark/70">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-4xl md:text-5xl font-bold text-gold tabular-nums">
                      {counter.count}
                    </span>
                    <span className="text-2xl font-bold text-gold-dark">{stat.suffix}</span>
                    <span className="text-sm text-gray-400 ml-1">{stat.unit}</span>
                  </div>
                  <p className="text-sm font-semibold text-navy mb-1">{stat.label}</p>
                  <p className="text-xs text-gray-400">{stat.sublabel}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
