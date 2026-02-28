"use client";

import { useEffect, useState, useRef, useCallback } from "react";

function ParticleField() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    left: `${(i * 7.3 + 3) % 100}%`,
    bottom: `${(i * 11.7 + 5) % 100}%`,
    size: 1 + (i % 4),
    dur: `${12 + (i % 10) * 2}s`,
    delay: `${(i % 12) * 1.2}s`,
    opacity: 0.25 + (i % 5) * 0.1,
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

function CharStagger({ text, loaded }: { text: string; loaded: boolean }) {
  return (
    <span className={`char-stagger ${loaded ? "visible" : ""}`}>
      {text.split("").map((ch, i) => (
        <span key={i} className={ch === " " ? "inline" : ""}>
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}

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
    <span className="typewriter-cursor">
      {displayed}
    </span>
  );
}

function GoldEmblem({ loaded }: { loaded: boolean }) {
  return (
    <div
      className={`transition-all duration-1000 delay-200 ${
        loaded ? "opacity-100 scale-100" : "opacity-0 scale-75"
      }`}
    >
      <svg
        viewBox="0 0 80 80"
        fill="none"
        className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-8"
      >
        <circle cx="40" cy="40" r="38" stroke="url(#emblemGrad)" strokeWidth="0.5" opacity="0.5" />
        <circle cx="40" cy="40" r="34" stroke="url(#emblemGrad)" strokeWidth="0.3" opacity="0.3" />
        <path d="M40 18 L50 40 L40 62 L30 40Z" stroke="url(#emblemGrad)" strokeWidth="0.6" fill="none" opacity="0.6" />
        <line x1="20" y1="40" x2="60" y2="40" stroke="url(#emblemGrad)" strokeWidth="0.4" opacity="0.3" />
        <line x1="40" y1="20" x2="40" y2="60" stroke="url(#emblemGrad)" strokeWidth="0.4" opacity="0.3" />
        <circle cx="40" cy="40" r="2" fill="url(#emblemGrad)" opacity="0.4" />
        <circle cx="40" cy="18" r="1.2" fill="url(#emblemGrad)" opacity="0.3" />
        <circle cx="40" cy="62" r="1.2" fill="url(#emblemGrad)" opacity="0.3" />
        <circle cx="20" cy="40" r="1.2" fill="url(#emblemGrad)" opacity="0.3" />
        <circle cx="60" cy="40" r="1.2" fill="url(#emblemGrad)" opacity="0.3" />
        <defs>
          <linearGradient id="emblemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e8c96e" />
            <stop offset="100%" stopColor="#b8963e" />
          </linearGradient>
        </defs>
      </svg>
    </div>
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
  const heroRef = useRef<HTMLElement>(null);

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
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy noise-overlay"
      onMouseMove={handleMouseMove}
    >
      {/* Aurora background */}
      <div className="aurora-bg" />

      {/* Multi-layer gradient */}
      <div className="absolute inset-0 mesh-gradient-navy" />

      {/* Mouse-follow spotlight */}
      <div className="hero-spotlight" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,90,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,90,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <ParticleField />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="morph-blob absolute -top-[20%] -right-[15%] w-[600px] h-[600px] bg-gold/[0.02] blur-[100px]"
          style={{ animationDuration: "18s" }}
        />
        <div
          className="morph-blob absolute -bottom-[20%] -left-[15%] w-[500px] h-[500px] bg-gold/[0.015] blur-[80px]"
          style={{ animationDuration: "22s", animationDelay: "-5s" }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1">
          <div
            className="w-3 h-3 rounded-full bg-gold/20 blur-sm"
            style={{ animation: "gradientOrbit 30s linear infinite" }}
          />
        </div>

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

        <div
          className="absolute top-0 left-[40%] w-px h-32 bg-gradient-to-b from-gold/[0.08] to-transparent"
          style={{ animation: "lineScan 12s linear infinite" }}
        />

        <div className="absolute top-0 left-[25%] w-px h-full bg-gradient-to-b from-transparent via-gold/[0.04] to-transparent" />
        <div className="absolute top-0 left-[75%] w-px h-full bg-gradient-to-b from-transparent via-gold/[0.03] to-transparent" />
        <div className="absolute top-[50%] left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/[0.03] to-transparent" />

        <div className="absolute top-10 left-10 w-24 h-24 border-l border-t border-gold/[0.08]" />
        <div className="absolute top-10 right-10 w-24 h-24 border-r border-t border-gold/[0.08]" />
        <div className="absolute bottom-10 left-10 w-24 h-24 border-l border-b border-gold/[0.08]" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border-r border-b border-gold/[0.08]" />

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

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <GoldEmblem loaded={loaded} />

        <div
          className={`mb-8 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="float-badge inline-flex items-center gap-3 text-[10px] tracking-[0.5em] uppercase text-gold/70 font-medium border border-gold/20 px-7 py-3 rounded-full backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-gold/40 animate-pulse" />
            International IP Law Firm
          </span>
        </div>

        <h1 className="mb-5">
          <span className="block text-6xl md:text-8xl lg:text-[7rem] font-bold font-serif text-gold-gradient leading-[0.95] tracking-tight">
            <CharStagger text="Pro & Team" loaded={loaded} />
          </span>
        </h1>

        <p
          className={`text-xl md:text-2xl text-white/80 font-light tracking-[0.15em] mb-4 transition-all duration-700 delay-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          프로앤팀 특허사무소
        </p>

        <div
          className={`h-8 mb-6 transition-all duration-700 delay-400 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-sm md:text-base text-gold/60 tracking-wider font-light">
            <Typewriter texts={typewriterTexts} loaded={loaded} />
          </p>
        </div>

        <div
          className={`mb-8 transition-all duration-1000 delay-400 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="ornament-divider max-w-xs mx-auto">
            <span className="text-gold/30 text-xs">◆</span>
          </div>
        </div>

        <p
          className={`text-[15px] md:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto mb-14 transition-all duration-700 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          국제 IP 분쟁 전문 경력 52년의 노하우로,
          <br className="hidden md:block" />
          기업의 글로벌 지식재산 전략을 이끕니다.
        </p>

        <div
          className={`flex flex-wrap justify-center gap-5 mb-20 transition-all duration-700 delay-600 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#contact"
            className="pulse-ring rotating-border btn-magnetic btn-glow group relative px-10 py-4 bg-gold text-navy font-bold text-sm tracking-wide rounded-sm overflow-hidden hover:shadow-2xl hover:shadow-gold/30 active:scale-[0.98] transition-all duration-400"
          >
            <span className="relative z-10">상담 문의</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-light via-gold to-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="#practice-areas"
            className="btn-magnetic group px-10 py-4 border border-gold/30 text-gold text-sm tracking-wide font-semibold rounded-sm hover:bg-gold/10 hover:border-gold/60 transition-all duration-400 relative overflow-hidden"
          >
            <span className="relative z-10">주요업무 보기</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </a>
        </div>

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
            <div key={i} className="text-center group cursor-default">
              <p className="text-3xl md:text-4xl font-bold text-gold/90 font-serif group-hover:text-gold group-hover:scale-110 transition-all duration-300">
                {s.num}
              </p>
              <p className="text-[10px] text-gray-500 tracking-wider mt-1.5 uppercase">
                {s.label}
              </p>
              <div className="w-0 group-hover:w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent transition-all duration-500 mt-2 mx-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className="wave-divider wave-divider--bottom">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120Z" fill="#f8f6f0" />
          <path d="M0,80 C240,110 480,20 720,80 C960,110 1200,20 1440,80 L1440,120 L0,120Z" fill="#f8f6f0" opacity="0.5" />
        </svg>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-gray-500 hover:text-gold transition-all z-10 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "1200ms", transitionDuration: "700ms" }}
      >
        <span className="text-[9px] tracking-[0.3em] uppercase font-medium">Scroll</span>
        <div className="w-5 h-9 rounded-full border border-current/30 flex justify-center pt-2">
          <div className="w-0.5 h-2.5 bg-current rounded-full" style={{ animation: "bounceDown 2s ease-in-out infinite" }} />
        </div>
      </a>
    </section>
  );
}
