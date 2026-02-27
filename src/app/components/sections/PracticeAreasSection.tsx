"use client";

import { useEffect, useRef, useState } from "react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

const areas = [
  {
    title: "협상 컨설팅",
    titleEn: "Negotiation Consulting",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M7 11v-1a5 5 0 0 1 10 0v1" /><path d="M4 15a2 2 0 0 1 2-2h1v4H6a2 2 0 0 1-2-2zM17 13h1a2 2 0 0 1 0 4h-1v-4z" /><path d="M7 17v1a3 3 0 0 0 3 3h1" />
      </svg>
    ),
    items: ["특허분쟁/소송 협상전략", "라이센싱 협상전략", "공동개발 협상전략", "특허거래 협상전략"],
  },
  {
    title: "기업 특허전략 컨설팅",
    titleEn: "Corporate Patent Strategy Consulting",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M2 20h20M5 20V8l7-5 7 5v12" /><path d="M9 20v-4h6v4" /><path d="M9 12h.01M15 12h.01" />
      </svg>
    ),
    items: ["보유특허 품질진단 및 개선", "해외특허 확보전략 및 비용 효율화", "특허정책 (발명자 보상제도, 업무단계별 Check List)", "특허조직 운영전략 및 팀원 능력향상", "경영진/연구원 대상 특허활용 사업성공사례 강의", "기술특례상장 대비한 특허전략"],
  },
  {
    title: "경고장 대응 (국내/해외)",
    titleEn: "Cease-and-Desist Letter Response",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M12 8v4M12 16h.01" />
      </svg>
    ),
    items: ["특허권자의 경고장 작성", "경고장 수신한 기업의 답변서 작성", "특허분석 및 회피설계 자문", "조기 타결을 위한 협상전략 개발"],
  },
  {
    title: "해외 특허소송 대응",
    titleEn: "Global Patent Litigation Support",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    items: ["해외 대리인 선정 전략", "특허침해/무효 분석", "조기 타결을 위한 협상전략"],
  },
  {
    title: "침해/무효 분석",
    titleEn: "Infringement / Invalidity Analysis",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /><path d="M11 8v6M8 11h6" />
      </svg>
    ),
    items: ["명세서/심사과정/해외 패밀리 분석", "청구항 해석", "선행기술 분석", "침해 및 무효 판단"],
  },
  {
    title: "라이선싱",
    titleEn: "Licensing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" y1="12" x2="3" y2="12" />
      </svg>
    ),
    items: ["특허/기술 가치평가", "라이선싱 협상전략 개발", "라이선스 계약서 작성"],
  },
  {
    title: "특허 가치평가",
    titleEn: "Patent Valuation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    items: ["특허 청구범위 정밀 분석", "미국 법원의 특허 가치평가 적용"],
  },
  {
    title: "특허 및 기술 거래",
    titleEn: "Patent & Technology Transactions",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M17 1l4 4-4 4" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><path d="M7 23l-4-4 4-4" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
    items: ["잠재적 Buyer/Seller 발굴 및 컨택", "협상 및 계약"],
  },
  {
    title: "특허 수익화 컨설팅",
    titleEn: "Patent Monetization Consulting",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    items: ["수익화 및 소송용 특허만들기 자문", "보유 특허 평가 및 수익화 특허 선정", "NPE 및 소송펀딩 업체와 계약", "라이선싱 및 소송"],
  },
  {
    title: "특허 강의 (사례 위주 강의)",
    titleEn: "Patent Seminars (Case Study-Based)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    items: ["로열티를 많이 받을 수 있는 특허만들기", "해외 경고장 대응 및 소송 대응 사례들", "특허 계약(라이선스, 공동개발 등) 분쟁 사례들", "(연구원) 강한 특허를 만들기 위한 연구원의 역할", "(경영진) 사업성공에 특허활용한 사례들"],
  },
];

export default function PracticeAreasSection() {
  const header = useReveal();
  const grid = useReveal();

  return (
    <section id="practice-areas" className="py-20 md:py-28 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div ref={header.ref} className={`reveal ${header.visible ? "visible" : ""} mb-14`}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-px bg-gold" />
            <span className="text-xs tracking-[0.2em] uppercase text-gold-dark font-medium">Practice Areas</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">주요업무</h2>
        </div>

        {/* Cards grid */}
        <div ref={grid.ref} className={`reveal-stagger ${grid.visible ? "visible" : ""} grid md:grid-cols-2 gap-6`}>
          {areas.map((area, idx) => (
            <div
              key={idx}
              className="group bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-gold/30"
            >
              <div className="h-0.5 bg-gray-100 group-hover:bg-gold transition-colors duration-300" />
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-navy/5 group-hover:bg-gold/10 flex items-center justify-center text-navy/60 group-hover:text-gold-dark transition-colors duration-300">
                    {area.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-navy group-hover:text-navy transition-colors">{area.title}</h3>
                    <p className="text-xs text-gold-dark mt-0.5">{area.titleEn}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-14">
                  {area.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="text-gold/70 mt-0.5 flex-shrink-0 text-[10px]">&#9670;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
