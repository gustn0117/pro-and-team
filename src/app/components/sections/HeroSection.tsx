"use client";

import { useEffect, useState, useCallback } from "react";

function Typewriter({ texts, loaded }: { texts: string[]; loaded: boolean }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!loaded) return;
    const current = texts[index];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (displayed.length < current.length) {
        timer = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timer = setTimeout(() => setDeleting(true), 2500);
      }
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }
    return () => clearTimeout(timer);
  }, [displayed, deleting, index, loaded, texts]);

  return (
    <span className="typewriter-cursor">{displayed}</span>
  );
}

const typewriterTexts = [
  "국제 IP 분쟁 전문",
  "52년 합산 경력",
  "글로벌 특허 전략",
  "해외 소송 대응",
];

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy"
      onMouseMove={handleMouseMove}
    >
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy to-navy-light/20" />

      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,90,0.04)_0%,_transparent_60%)]" />

      {/* Mouse-follow spotlight */}
      <div className="hero-spotlight" />

      {/* Minimal decorative lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-[25%] w-px h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
        <div className="absolute top-0 left-[75%] w-px h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
        <div className="absolute top-[50%] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.02] to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div
          className={`mb-10 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-gold/50 font-medium">
            <span className="w-8 h-px bg-gold/30" />
            International IP Law Firm
            <span className="w-8 h-px bg-gold/30" />
          </span>
        </div>

        {/* Main title */}
        <h1
          className={`mb-6 transition-all duration-1000 delay-100 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block text-6xl md:text-8xl lg:text-[6.5rem] font-bold font-serif text-gold-gradient leading-[1] tracking-tight">
            Pro &amp; Team
          </span>
        </h1>

        {/* Korean name */}
        <p
          className={`text-lg md:text-xl text-white/60 font-light tracking-[0.2em] mb-6 transition-all duration-700 delay-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          프로앤팀 특허사무소
        </p>

        {/* Thin divider */}
        <div
          className={`flex justify-center mb-6 transition-all duration-700 delay-350 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        </div>

        {/* Typewriter */}
        <div
          className={`h-7 mb-10 transition-all duration-700 delay-400 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-sm text-white/30 tracking-widest font-light">
            <Typewriter texts={typewriterTexts} loaded={loaded} />
          </p>
        </div>

        {/* Tagline */}
        <p
          className={`text-[15px] text-gray-400/80 leading-relaxed max-w-md mx-auto mb-14 transition-all duration-700 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          국제 IP 분쟁 전문 경력 52년의 노하우로,
          <br className="hidden md:block" />
          기업의 글로벌 지식재산 전략을 이끕니다.
        </p>

        {/* CTA buttons */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-24 transition-all duration-700 delay-600 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#contact"
            className="group relative px-9 py-3.5 bg-gold text-navy font-semibold text-sm tracking-wide rounded-sm hover:bg-gold-light active:scale-[0.98] transition-all duration-300"
          >
            상담 문의
          </a>
          <a
            href="#practice-areas"
            className="group px-9 py-3.5 border border-white/15 text-white/70 text-sm tracking-wide font-medium rounded-sm hover:border-white/30 hover:text-white/90 transition-all duration-300"
          >
            주요업무 보기
          </a>
        </div>

        {/* Stats */}
        <div
          className={`flex justify-center gap-12 md:gap-20 transition-all duration-700 delay-800 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {[
            { num: "52+", label: "합산 경력(년)" },
            { num: "180+", label: "해외 분쟁(건)" },
            { num: "300+", label: "계약·협상(건)" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl md:text-3xl font-semibold text-gold/80 font-serif">
                {s.num}
              </p>
              <p className="text-[10px] text-white/25 tracking-wider mt-1.5 uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 hover:text-white/40 transition-all z-10 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "1200ms", transitionDuration: "700ms" }}
      >
        <span className="text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-current/40 flex justify-center pt-1.5">
          <div className="w-0.5 h-2 bg-current rounded-full" style={{ animation: "bounceDown 2s ease-in-out infinite" }} />
        </div>
      </a>
    </section>
  );
}
