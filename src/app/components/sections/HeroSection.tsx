"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light/40 to-navy" />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #d4af5a 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Decorative geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[15%] right-[10%] w-[500px] h-[500px] rounded-full border border-gold/10"
          style={{ animation: "float 8s ease-in-out infinite" }}
        />
        <div
          className="absolute top-[20%] right-[12%] w-[400px] h-[400px] rounded-full border border-gold/5"
          style={{ animation: "float 10s ease-in-out infinite 1s" }}
        />
        <div
          className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] rounded-full border border-gold/8"
          style={{ animation: "floatSlow 12s ease-in-out infinite" }}
        />
        <div
          className="absolute top-[40%] left-[15%] w-[150px] h-[150px] rounded-full border border-gold/5"
          style={{ animation: "pulseGlow 6s ease-in-out infinite" }}
        />
        {/* Diagonal gold line */}
        <div className="absolute top-0 right-[30%] w-px h-[200px] bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
        <div className="absolute bottom-[20%] left-[25%] w-px h-[150px] bg-gradient-to-b from-transparent via-gold/15 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p
            className={`text-xs tracking-[0.3em] uppercase text-gray-400 mb-6 transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            IP Law Firm
          </p>

          {/* Main heading */}
          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-4 transition-all duration-700 delay-100 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-gold-gradient">Pro &amp; Team</span>
          </h1>

          {/* Korean name */}
          <p
            className={`text-xl md:text-2xl text-gray-300 mb-3 transition-all duration-700 delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            프로앤팀 특허사무소
          </p>

          {/* Gold line */}
          <div
            className={`h-px bg-gold mb-8 transition-all duration-1000 delay-300 ${
              loaded ? "w-20 opacity-100" : "w-0 opacity-0"
            }`}
          />

          {/* Tagline */}
          <p
            className={`text-base md:text-lg text-gray-400 leading-relaxed max-w-xl mb-12 transition-all duration-700 delay-400 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            국제 IP 분쟁 전문 경력 52년의 노하우로,
            <br className="hidden md:block" />
            기업의 글로벌 지식재산 전략을 이끕니다.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 delay-500 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="#contact"
              className="px-8 py-3.5 bg-gold text-navy font-semibold rounded-sm hover:bg-gold-light hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-gold/20"
            >
              상담 문의
            </a>
            <a
              href="#practice-areas"
              className="px-8 py-3.5 border border-gold/60 text-gold font-semibold rounded-sm hover:bg-gold/10 hover:border-gold transition-all duration-200"
            >
              주요업무 보기
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-gold transition-colors duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "800ms", transitionDuration: "700ms" }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="animate-bounce"
          style={{ animation: "bounceDown 2s ease-in-out infinite" }}
        >
          <path d="M8 2v10M4 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
