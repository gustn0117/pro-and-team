"use client";

const keywords = [
  "Patent Strategy",
  "특허전략",
  "IP Litigation",
  "해외분쟁",
  "Licensing",
  "라이선싱",
  "Negotiation",
  "협상전략",
  "Patent Valuation",
  "특허가치평가",
  "Monetization",
  "수익화",
  "Global IP",
  "국제소송",
];

const separator = (
  <span className="mx-6 text-gold/30 text-lg select-none">◆</span>
);

export default function MarqueeBand() {
  return (
    <div
      className="marquee-band py-5 bg-cream-dark/60 border-y border-gold/[0.06]"
      style={{ "--marquee-bg": "#ede9df" } as React.CSSProperties}
    >
      <div className="animate-marquee" style={{ "--marquee-speed": "50s" } as React.CSSProperties}>
        {/* Double the content for seamless loop */}
        {[0, 1].map((set) => (
          <div key={set} className="flex items-center shrink-0">
            {keywords.map((word, i) => (
              <span key={`${set}-${i}`} className="flex items-center">
                <span className="text-[13px] tracking-[0.15em] font-medium text-navy/30 uppercase whitespace-nowrap">
                  {word}
                </span>
                {separator}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
