"use client";

import { useEffect, useRef, useState } from "react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.08 }
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
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    items: ["특허분쟁/소송 협상전략", "라이센싱 협상전략", "공동개발 협상전략", "특허거래 협상전략"],
  },
  {
    title: "기업 특허전략 컨설팅",
    titleEn: "Corporate Patent Strategy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
    items: ["보유특허 품질진단 및 개선", "해외특허 확보전략 및 비용 효율화", "특허정책 (발명자 보상제도, 업무단계별 Check List)", "특허조직 운영전략 및 팀원 능력향상", "경영진/연구원 대상 특허활용 사업성공사례 강의", "기술특례상장 대비한 특허전략"],
  },
  {
    title: "경고장 대응 (국내/해외)",
    titleEn: "Cease-and-Desist Response",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4M12 16h.01"/>
      </svg>
    ),
    items: ["특허권자의 경고장 작성", "경고장 수신한 기업의 답변서 작성", "특허분석 및 회피설계 자문", "조기 타결을 위한 협상전략 개발"],
  },
  {
    title: "해외 특허소송 대응",
    titleEn: "Global Patent Litigation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    items: ["해외 대리인 선정 전략", "특허침해/무효 분석", "조기 타결을 위한 협상전략"],
  },
  {
    title: "침해/무효 분석",
    titleEn: "Infringement / Invalidity",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/>
      </svg>
    ),
    items: ["명세서/심사과정/해외 패밀리 분석", "청구항 해석", "선행기술 분석", "침해 및 무효 판단"],
  },
  {
    title: "라이선싱",
    titleEn: "Licensing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    items: ["특허/기술 가치평가", "라이선싱 협상전략 개발", "라이선스 계약서 작성"],
  },
  {
    title: "특허 가치평가",
    titleEn: "Patent Valuation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    items: ["특허 청구범위 정밀 분석", "미국 법원의 특허 가치평가 적용"],
  },
  {
    title: "특허 및 기술 거래",
    titleEn: "Patent & Technology Transactions",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
      </svg>
    ),
    items: ["잠재적 Buyer/Seller 발굴 및 컨택", "협상 및 계약"],
  },
  {
    title: "특허 수익화 컨설팅",
    titleEn: "Patent Monetization",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    items: ["수익화 및 소송용 특허만들기 자문", "보유 특허 평가 및 수익화 특허 선정", "NPE 및 소송펀딩 업체와 계약", "라이선싱 및 소송"],
  },
  {
    title: "특허 강의 (사례 위주)",
    titleEn: "Patent Seminars",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    items: ["로열티를 많이 받을 수 있는 특허만들기", "해외 경고장 대응 및 소송 대응 사례들", "특허 계약(라이선스, 공동개발 등) 분쟁 사례들", "(연구원) 강한 특허를 만들기 위한 연구원의 역할", "(경영진) 사업성공에 특허활용한 사례들"],
  },
];

export default function PracticeAreasSection() {
  const header = useReveal();
  const grid = useReveal();

  return (
    <section id="practice-areas" className="py-24 md:py-32 bg-white scroll-mt-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-px h-[300px] bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
      <div className="absolute bottom-20 right-0 w-px h-[300px] bg-gradient-to-b from-transparent via-gold/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section header */}
        <div ref={header.ref} className={`reveal ${header.visible ? "visible" : ""} text-center mb-16`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold/60" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-gold-dark font-medium">Practice Areas</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold/60" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">주요업무</h2>
          <p className="text-sm text-gray-400 max-w-md mx-auto">국제 IP 분쟁의 전 과정을 아우르는 종합적 서비스</p>
        </div>

        {/* Cards grid */}
        <div ref={grid.ref} className={`reveal-stagger ${grid.visible ? "visible" : ""} grid md:grid-cols-2 gap-5`}>
          {areas.map((area, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-gold/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-400"
            >
              {/* Hover accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-gold/40 group-hover:via-gold group-hover:to-gold/40 transition-all duration-300" />
              {/* Hover glow */}
              <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-gold/0 group-hover:bg-gold/[0.04] transition-all duration-500 blur-2xl" />

              <div className="relative p-7">
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-navy text-gold/80 flex items-center justify-center group-hover:bg-navy-light group-hover:text-gold transition-all duration-300 shadow-sm">
                    {area.icon}
                  </div>
                  <div className="pt-0.5">
                    <h3 className="text-[15px] font-bold text-navy leading-snug">{area.title}</h3>
                    <p className="text-[11px] text-gold-dark/80 mt-0.5 font-medium">{area.titleEn}</p>
                  </div>
                </div>
                <ul className="space-y-2 pl-[60px]">
                  {area.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[13px] text-gray-500 group-hover:text-gray-600 transition-colors">
                      <span className="text-gold/50 mt-[3px] flex-shrink-0 text-[8px]">&#9670;</span>
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
