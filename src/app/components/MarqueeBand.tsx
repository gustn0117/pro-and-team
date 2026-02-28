"use client";

const keywordsRow1 = [
  "Patent Strategy",
  "특허전략",
  "IP Litigation",
  "해외분쟁",
  "Licensing",
  "라이선싱",
  "Negotiation",
  "협상전략",
];

const keywordsRow2 = [
  "Patent Valuation",
  "특허가치평가",
  "Monetization",
  "수익화",
  "Global IP",
  "국제소송",
  "Consulting",
  "컨설팅",
];

const keywordsRow3 = [
  "ITC Litigation",
  "Trade Secrets",
  "영업비밀",
  "Due Diligence",
  "Patent Portfolio",
  "특허포트폴리오",
  "Cross-Border Disputes",
  "해외소송대응",
];

const separator1 = (
  <span className="mx-6 md:mx-8 text-gold/20 text-xs select-none">◆</span>
);

export default function MarqueeBand() {
  return (
    <div className="bg-cream-dark/60 border-y border-gold/[0.06] overflow-hidden">
      {/* Row 1 — left to right, large serif */}
      <div
        className="marquee-band py-4"
        style={{ "--marquee-bg": "#ede9df" } as React.CSSProperties}
      >
        <div className="animate-marquee" style={{ "--marquee-speed": "55s" } as React.CSSProperties}>
          {[0, 1].map((set) => (
            <div key={set} className="flex items-center shrink-0">
              {keywordsRow1.map((word, i) => (
                <span key={`${set}-${i}`} className="flex items-center">
                  <span className="text-lg md:text-xl tracking-[0.08em] font-serif font-medium text-navy/[0.07] uppercase whitespace-nowrap">
                    {word}
                  </span>
                  {separator1}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — right to left, smaller sans */}
      <div
        className="marquee-band py-3 border-t border-gold/[0.04]"
        style={{ "--marquee-bg": "#ede9df" } as React.CSSProperties}
      >
        <div className="animate-marquee-reverse" style={{ "--marquee-speed": "45s" } as React.CSSProperties}>
          {[0, 1].map((set) => (
            <div key={set} className="flex items-center shrink-0">
              {keywordsRow2.map((word, i) => (
                <span key={`${set}-${i}`} className="flex items-center">
                  <span className="text-[12px] tracking-[0.2em] font-medium text-gold-dark/20 uppercase whitespace-nowrap">
                    {word}
                  </span>
                  <span className="mx-5 md:mx-7 text-gold/15 text-[8px] select-none">●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Row 3 — left to right, medium speed, subtle text */}
      <div
        className="marquee-band py-2.5 border-t border-gold/[0.03]"
        style={{ "--marquee-bg": "#ede9df" } as React.CSSProperties}
      >
        <div className="animate-marquee" style={{ "--marquee-speed": "65s" } as React.CSSProperties}>
          {[0, 1].map((set) => (
            <div key={set} className="flex items-center shrink-0">
              {keywordsRow3.map((word, i) => (
                <span key={`${set}-${i}`} className="flex items-center">
                  <span className="text-[10px] tracking-[0.25em] font-light text-navy/[0.04] uppercase whitespace-nowrap">
                    {word}
                  </span>
                  <span className="mx-4 md:mx-6 text-gold/10 text-[6px] select-none">◇</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
