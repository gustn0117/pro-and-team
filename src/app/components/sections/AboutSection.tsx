"use client";

import { useEffect, useRef, useState, useCallback } from "react";

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
      } else setCount(Math.floor(current));
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
  {
    end: 52,
    suffix: "+",
    label: "합산 경력",
    unit: "년",
    sublabel: "Years of Combined Experience",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    end: 180,
    suffix: "+",
    label: "해외 소송 및 분쟁",
    unit: "건",
    sublabel: "International IP Cases",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    end: 300,
    suffix: "+",
    label: "계약 및 협상",
    unit: "건",
    sublabel: "Contracts & Negotiations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

export default function AboutSection() {
  const header = useReveal();
  const textLeft = useReveal();
  const textRight = useReveal();
  const statsReveal = useReveal();
  const stat0 = useCountUp(stats[0].end);
  const stat1 = useCountUp(stats[1].end);
  const stat2 = useCountUp(stats[2].end);
  const counters = [stat0, stat1, stat2];

  /* Card spotlight mouse handler */
  const handleCardMouse = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--spotlight-x", `${x}px`);
    e.currentTarget.style.setProperty("--spotlight-y", `${y}px`);
  }, []);

  return (
    <section id="about" className="py-28 md:py-40 mesh-gradient-cream scroll-mt-20 relative overflow-hidden">
      {/* Aurora background */}
      <div className="aurora-bg" style={{ opacity: 0.5 }} />

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(212,175,90,0.04)_0%,_transparent_70%)]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(212,175,90,0.03)_0%,_transparent_70%)]" />

      {/* Diagonal accent lines */}
      <div className="absolute top-20 left-0 w-px h-[400px] bg-gradient-to-b from-transparent via-gold/8 to-transparent" />
      <div className="absolute bottom-20 right-0 w-px h-[400px] bg-gradient-to-b from-transparent via-gold/8 to-transparent" />

      {/* Background pattern dots */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(circle, #d4af5a 0.8px, transparent 0.8px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Large section number */}
      <div className="section-number top-6 right-8 md:right-16">01</div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <div ref={header.ref} className={`reveal ${header.visible ? "visible" : ""} mb-16 md:mb-20`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-gold/80 to-gold/20" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-gold-dark font-medium">
              About Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-navy">
            사무소 소개
          </h2>
        </div>

        {/* Two-column intro text */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-20 md:mb-28">
          <div ref={textLeft.ref} className={`split-reveal-left ${textLeft.visible ? "visible" : ""}`}>
            <div className="relative">
              <div className="absolute -top-8 -left-4 text-gold/10 text-[80px] font-serif leading-none select-none">
                &ldquo;
              </div>
              <p className="relative text-gray-600 text-[15px] md:text-base leading-[1.9]">
                프로앤팀 특허사무소는 국제 IP 분쟁 분야에서 합산{" "}
                <strong className="text-navy font-semibold">52년 이상의 경력</strong>을 보유한
                전문가들이 설립한 지식재산 전문 사무소입니다. 미국, 독일, 유럽, 일본 등 글로벌
                주요 관할권에서의 특허소송, 영업비밀 소송, ITC 소송에 대한 풍부한 실무 경험을
                바탕으로, 기업의 해외 IP 분쟁 대응을 전략적으로 지원합니다.
              </p>
            </div>
          </div>
          <div ref={textRight.ref} className={`split-reveal-right ${textRight.visible ? "visible" : ""}`}>
            <p className="text-gray-600 text-[15px] md:text-base leading-[1.9] mb-6">
              단순한 법률 서비스를 넘어, 기업의 사업 성공에 기여하는{" "}
              <strong className="text-navy font-semibold">
                실질적인 특허 전략 파트너
              </strong>
              로서의 역할을 지향합니다.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-gradient-to-r from-gold to-transparent" />
              <span className="text-[11px] text-gold-dark/60 tracking-wider uppercase font-medium">
                Since 2026
              </span>
            </div>
          </div>
        </div>

        {/* Animated gold HR between text and stats */}
        <hr className="hr-gold mb-20 md:mb-28 max-w-xl mx-auto" />

        {/* Stats cards */}
        <div
          ref={statsReveal.ref}
          className={`reveal-stagger ${statsReveal.visible ? "visible" : ""} grid md:grid-cols-3 gap-6`}
        >
          {stats.map((stat, idx) => {
            const counter = counters[idx];
            const circumference = 2 * Math.PI * 54;
            const progress = counter.count / stat.end;
            const offset = circumference * (1 - progress);
            return (
              <div
                key={idx}
                ref={counter.ref}
                className="card-3d"
              >
                <div
                  className="card-3d-inner card-spotlight gradient-border-animated diagonal-shimmer group relative bg-white rounded-2xl p-8 md:p-10 overflow-hidden border border-gray-100/50"
                  onMouseMove={handleCardMouse}
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/20 via-gold to-gold/20" />
                  {/* Hover glow */}
                  <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-gold/[0.03] rounded-full group-hover:bg-gold/[0.08] transition-colors duration-500" />

                  <div className="relative flex items-start gap-6">
                    {/* Circular progress ring */}
                    <div className="shrink-0 relative w-24 h-24 hidden md:flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 120 120">
                        <circle
                          cx="60" cy="60" r="54"
                          fill="none"
                          stroke="rgba(212,175,90,0.08)"
                          strokeWidth="4"
                        />
                        <circle
                          cx="60" cy="60" r="54"
                          fill="none"
                          stroke="url(#goldGrad)"
                          strokeWidth="4"
                          strokeLinecap="round"
                          className="progress-ring-circle"
                          strokeDasharray={circumference}
                          strokeDashoffset={offset}
                        />
                        <defs>
                          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#e8c96e" />
                            <stop offset="100%" stopColor="#b8963e" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-gold-dark/70">
                        {stat.icon}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center text-gold-dark/70 mb-4 md:hidden">
                        {stat.icon}
                      </div>
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-4xl md:text-5xl font-bold text-gold tabular-nums font-serif">
                          {counter.count}
                        </span>
                        <span className="text-xl font-bold text-gold-dark">{stat.suffix}</span>
                        <span className="text-sm text-gray-400 ml-1">{stat.unit}</span>
                      </div>
                      <p className="text-sm font-semibold text-navy mb-1">{stat.label}</p>
                      <p className="text-xs text-gray-400">{stat.sublabel}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Wave divider to next section */}
      <div className="wave-divider wave-divider--bottom">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,80 L0,80Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
