"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      {/* Multi-layer background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,90,0.06)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(36,48,68,0.5)_0%,_transparent_60%)]" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #d4af5a 0.8px, transparent 0.8px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large rotating ring */}
        <div
          className="absolute -top-[10%] -right-[10%] w-[700px] h-[700px] rounded-full border border-gold/[0.07]"
          style={{ animation: "rotateSlowly 120s linear infinite" }}
        />
        <div
          className="absolute -top-[8%] -right-[8%] w-[600px] h-[600px] rounded-full border border-dashed border-gold/[0.04]"
          style={{ animation: "rotateSlowly 90s linear infinite reverse" }}
        />
        {/* Floating orbs */}
        <div
          className="absolute top-[20%] right-[15%] w-[300px] h-[300px] rounded-full bg-gold/[0.03] blur-3xl"
          style={{ animation: "float 8s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-[15%] left-[8%] w-[250px] h-[250px] rounded-full bg-gold/[0.025] blur-2xl"
          style={{ animation: "floatSlow 10s ease-in-out infinite" }}
        />
        {/* Geometric accents */}
        <div
          className="absolute top-[30%] right-[25%] w-16 h-16 border border-gold/10 rotate-45"
          style={{ animation: "float 6s ease-in-out infinite 2s" }}
        />
        <div
          className="absolute bottom-[25%] left-[20%] w-10 h-10 border border-gold/[0.07] rotate-12"
          style={{ animation: "floatSlow 8s ease-in-out infinite 1s" }}
        />
        {/* Vertical gold lines */}
        <div className="absolute top-0 right-[35%] w-px h-[250px] bg-gradient-to-b from-transparent via-gold/15 to-transparent" />
        <div className="absolute bottom-0 left-[30%] w-px h-[200px] bg-gradient-to-t from-transparent via-gold/10 to-transparent" />
        {/* Horizontal accent */}
        <div className="absolute top-[45%] right-0 w-[200px] h-px bg-gradient-to-l from-transparent via-gold/10 to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow with decorative line */}
          <div
            className={`flex items-center gap-4 mb-8 transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-12 h-px bg-gradient-to-r from-gold/80 to-gold/20" />
            <p className="text-[11px] tracking-[0.35em] uppercase text-gold-dark/80 font-medium">
              International IP Law Firm
            </p>
          </div>

          {/* Main heading */}
          <h1
            className={`mb-5 transition-all duration-900 delay-150 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] text-gold-gradient">
              Pro &amp; Team
            </span>
          </h1>

          {/* Korean name */}
          <p
            className={`text-xl md:text-2xl text-white/90 font-light tracking-wide mb-2 transition-all duration-700 delay-250 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            프로앤팀 특허사무소
          </p>

          {/* Shimmer line */}
          <div
            className={`h-px mb-8 transition-all duration-1200 delay-350 ${
              loaded ? "w-24 opacity-100" : "w-0 opacity-0"
            }`}
          >
            <div className="h-full shimmer-gold" />
          </div>

          {/* Tagline */}
          <p
            className={`text-[15px] md:text-lg text-gray-400 leading-relaxed max-w-lg mb-14 transition-all duration-700 delay-400 ${
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
              className="group relative px-8 py-3.5 bg-gold text-navy font-semibold rounded overflow-hidden hover:shadow-xl hover:shadow-gold/25 active:scale-[0.98] transition-all duration-300"
            >
              <span className="relative z-10">상담 문의</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#practice-areas"
              className="px-8 py-3.5 border border-gold/40 text-gold font-semibold rounded hover:bg-gold/10 hover:border-gold/70 transition-all duration-300"
            >
              주요업무 보기
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />

      {/* Scroll indicator */}
      <a
        href="#about"
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-gold transition-all duration-300 z-10 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "900ms", transitionDuration: "700ms" }}
      >
        <span className="text-[9px] tracking-[0.25em] uppercase font-medium">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-current/40 flex justify-center pt-1.5">
          <div
            className="w-0.5 h-2 bg-current rounded-full"
            style={{ animation: "bounceDown 2s ease-in-out infinite" }}
          />
        </div>
      </a>
    </section>
  );
}
