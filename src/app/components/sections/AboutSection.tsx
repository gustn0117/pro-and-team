"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
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
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
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

const stats = [
  { end: 52, suffix: "+", label: "합산 경력 (년)", sublabel: "Years of Combined Experience" },
  { end: 180, suffix: "+", label: "해외 소송 및 분쟁", sublabel: "International IP Cases" },
  { end: 300, suffix: "+", label: "계약 및 협상", sublabel: "Contracts & Negotiations" },
];

export default function AboutSection() {
  const intro = useReveal();
  const stat0 = useCountUp(stats[0].end);
  const stat1 = useCountUp(stats[1].end);
  const stat2 = useCountUp(stats[2].end);
  const counters = [stat0, stat1, stat2];

  return (
    <section id="about" className="py-20 md:py-28 bg-cream scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div ref={intro.ref} className={`reveal ${intro.visible ? "visible" : ""}`}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-px bg-gold" />
            <span className="text-xs tracking-[0.2em] uppercase text-gold-dark font-medium">About Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12">사무소 소개</h2>
        </div>

        {/* Firm introduction */}
        <div ref={intro.ref} className={`reveal ${intro.visible ? "visible" : ""} max-w-3xl mb-16`}>
          <div className="border-l-2 border-gold/40 pl-6 space-y-4 text-gray-700 text-[15px] leading-relaxed">
            <p>
              프로앤팀 특허사무소는 국제 IP 분쟁 분야에서 합산 52년 이상의 경력을 보유한
              전문가들이 설립한 지식재산 전문 사무소입니다.
            </p>
            <p>
              미국, 독일, 유럽, 일본 등 글로벌 주요 관할권에서의 특허소송, 영업비밀 소송,
              ITC 소송에 대한 풍부한 실무 경험을 바탕으로, 기업의 해외 IP 분쟁 대응을
              전략적으로 지원합니다.
            </p>
            <p>
              단순한 법률 서비스를 넘어, 기업의 사업 성공에 기여하는 실질적인 특허 전략
              파트너로서의 역할을 지향합니다.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => {
            const counter = counters[idx];
            return (
              <div
                key={idx}
                ref={counter.ref}
                className="relative bg-white rounded-lg p-8 border-t-2 border-gold/60 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
                  {counter.count}
                  <span className="text-gold-dark">{stat.suffix}</span>
                </div>
                <p className="text-sm font-medium text-navy mb-1">{stat.label}</p>
                <p className="text-xs text-gray-400">{stat.sublabel}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
