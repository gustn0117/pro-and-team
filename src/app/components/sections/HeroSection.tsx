"use client";

import { useEffect, useState } from "react";

function ParticleField() {
  // Generate particle positions deterministically to avoid hydration mismatch
  const particles = Array.from({ length: 40 }, (_, i) => ({
    left: `${(i * 7.3 + 3) % 100}%`,
    bottom: `${(i * 11.7 + 5) % 100}%`,
    size: 1.5 + (i % 3),
    dur: `${14 + (i % 8) * 2}s`,
    delay: `${(i % 12) * 1.5}s`,
    opacity: 0.3 + (i % 5) * 0.12,
  }));

  return (
    <div className="hero-particles">
      {particles.map((p, i) => (
        <span
          key={i}
          className="hero-particle"
          style={{
            left: p.left,
            bottom: p.bottom,
            width: p.size,
            height: p.size,
            "--dur": p.dur,
            animationDelay: p.delay,
            opacity: p.opacity,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy"
    >
      {/* ── Multi-layer background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,90,0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(36,48,68,0.5)_0%,_transparent_50%)]" />

      {/* Animated gradient orb */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 30% 70%, rgba(212,175,90,0.05) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(212,175,90,0.04) 0%, transparent 50%)",
          animation: "gradientShift 20s ease infinite",
        }}
      />

      {/* ── Grid pattern ── */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,90,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,90,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── CSS Particle Field ── */}
      <ParticleField />

      {/* ── Morphing blobs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="morph-blob absolute -top-[20%] -right-[15%] w-[600px] h-[600px] bg-gold/[0.02] blur-[100px]"
          style={{ animationDuration: "18s" }}
        />
        <div
          className="morph-blob absolute -bottom-[20%] -left-[15%] w-[500px] h-[500px] bg-gold/[0.015] blur-[80px]"
          style={{ animationDuration: "22s", animationDelay: "-5s" }}
        />

        {/* Orbiting gradient dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1">
          <div
            className="w-3 h-3 rounded-full bg-gold/20 blur-sm"
            style={{ animation: "gradientOrbit 30s linear infinite" }}
          />
        </div>

        {/* Rotating rings */}
        <div
          className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] rounded-full border border-gold/[0.06]"
          style={{ animation: "rotateSlowly 120s linear infinite" }}
        />
        <div
          className="absolute -top-[7%] -right-[7%] w-[500px] h-[500px] rounded-full border border-dashed border-gold/[0.03]"
          style={{ animation: "rotateSlowly 80s linear infinite reverse" }}
        />
        <div
          className="absolute -bottom-[15%] -left-[10%] w-[400px] h-[400px] rounded-full border border-gold/[0.04]"
          style={{ animation: "rotateSlowly 100s linear infinite" }}
        />

        {/* Vertical scan line */}
        <div
          className="absolute top-0 left-[40%] w-px h-32 bg-gradient-to-b from-gold/[0.08] to-transparent"
          style={{ animation: "lineScan 12s linear infinite" }}
        />

        {/* Guide lines */}
        <div className="absolute top-0 left-[25%] w-px h-full bg-gradient-to-b from-transparent via-gold/[0.04] to-transparent" />
        <div className="absolute top-0 left-[75%] w-px h-full bg-gradient-to-b from-transparent via-gold/[0.03] to-transparent" />
        <div className="absolute top-[50%] left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/[0.03] to-transparent" />

        {/* Corner brackets */}
        <div className="absolute top-10 left-10 w-24 h-24 border-l border-t border-gold/[0.08]" />
        <div className="absolute top-10 right-10 w-24 h-24 border-r border-t border-gold/[0.08]" />
        <div className="absolute bottom-10 left-10 w-24 h-24 border-l border-b border-gold/[0.08]" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border-r border-b border-gold/[0.08]" />

        {/* Floating geometric shapes */}
        <div
          className="absolute top-[28%] right-[22%] w-20 h-20 border border-gold/[0.06] rotate-45"
          style={{ animation: "float 8s ease-in-out infinite 1s" }}
        />
        <div
          className="absolute bottom-[30%] left-[18%] w-12 h-12 border border-gold/[0.05] rotate-12"
          style={{ animation: "floatSlow 10s ease-in-out infinite 2s" }}
        />
        <div
          className="absolute top-[60%] right-[35%] w-6 h-6 bg-gold/[0.03] rotate-45"
          style={{ animation: "float 6s ease-in-out infinite 3s" }}
        />
      </div>

      {/* ── Main content (centered) ── */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow badge */}
        <div
          className={`mb-10 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-[10px] tracking-[0.5em] uppercase text-gold/70 font-medium border border-gold/20 px-7 py-3 rounded-full backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-gold/40 animate-pulse" />
            International IP Law Firm
          </span>
        </div>

        {/* Main heading */}
        <h1
          className={`mb-5 transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="block text-6xl md:text-8xl lg:text-[7rem] font-bold font-serif text-gold-gradient leading-[0.95] tracking-tight">
            Pro &amp; Team
          </span>
        </h1>

        {/* Korean name */}
        <p
          className={`text-xl md:text-2xl text-white/80 font-light tracking-[0.15em] mb-6 transition-all duration-700 delay-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          프로앤팀 특허사무소
        </p>

        {/* Animated gold line */}
        <div
          className={`mx-auto h-px mb-8 transition-all delay-400 ${
            loaded ? "w-32 opacity-100" : "w-0 opacity-0"
          }`}
          style={{ transitionDuration: "1500ms" }}
        >
          <div className="h-full shimmer-gold" />
        </div>

        {/* Tagline */}
        <p
          className={`text-[15px] md:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto mb-14 transition-all duration-700 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          국제 IP 분쟁 전문 경력 52년의 노하우로,
          <br className="hidden md:block" />
          기업의 글로벌 지식재산 전략을 이끕니다.
        </p>

        {/* CTA buttons */}
        <div
          className={`flex flex-wrap justify-center gap-5 mb-20 transition-all duration-700 delay-600 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#contact"
            className="btn-glow group relative px-10 py-4 bg-gold text-navy font-bold text-sm tracking-wide rounded-sm overflow-hidden hover:shadow-2xl hover:shadow-gold/30 active:scale-[0.98] transition-all duration-400"
          >
            <span className="relative z-10">상담 문의</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-light via-gold to-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="#practice-areas"
            className="group px-10 py-4 border border-gold/30 text-gold text-sm tracking-wide font-semibold rounded-sm hover:bg-gold/10 hover:border-gold/60 transition-all duration-400 relative overflow-hidden"
          >
            <span className="relative z-10">주요업무 보기</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </a>
        </div>

        {/* Stats preview bar */}
        <div
          className={`flex justify-center gap-10 md:gap-16 lg:gap-24 transition-all duration-700 delay-800 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {[
            { num: "52+", label: "합산 경력(년)" },
            { num: "180+", label: "해외 분쟁(건)" },
            { num: "300+", label: "계약·협상(건)" },
          ].map((s, i) => (
            <div key={i} className="text-center group">
              <p className="text-3xl md:text-4xl font-bold text-gold/90 font-serif group-hover:text-gold transition-colors">
                {s.num}
              </p>
              <p className="text-[10px] text-gray-500 tracking-wider mt-1.5 uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Wave divider at bottom ── */}
      <div className="wave-divider wave-divider--bottom">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120Z"
            fill="#f8f6f0"
          />
          <path
            d="M0,80 C240,110 480,20 720,80 C960,110 1200,20 1440,80 L1440,120 L0,120Z"
            fill="#f8f6f0"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* ── Scroll indicator ── */}
      <a
        href="#about"
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-gray-500 hover:text-gold transition-all z-10 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "1200ms", transitionDuration: "700ms" }}
      >
        <span className="text-[9px] tracking-[0.3em] uppercase font-medium">
          Scroll
        </span>
        <div className="w-5 h-9 rounded-full border border-current/30 flex justify-center pt-2">
          <div
            className="w-0.5 h-2.5 bg-current rounded-full"
            style={{ animation: "bounceDown 2s ease-in-out infinite" }}
          />
        </div>
      </a>
    </section>
  );
}
