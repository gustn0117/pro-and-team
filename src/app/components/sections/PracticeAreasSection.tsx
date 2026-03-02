"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

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
      { threshold: 0.08 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

const areas = [
  {
    title: { ko: "협상 컨설팅", en: "Negotiation Consulting" },
    items: {
      ko: ["특허분쟁/소송 협상전략", "라이센싱 협상전략", "공동개발 협상전략", "특허거래 협상전략"],
      en: ["Patent dispute/litigation negotiation strategy", "Licensing negotiation strategy", "Joint development negotiation strategy", "Patent transaction negotiation strategy"],
    },
  },
  {
    title: { ko: "기업 특허전략 컨설팅", en: "Corporate Patent Strategy" },
    items: {
      ko: ["보유특허 품질진단 및 개선", "해외특허 확보전략 및 비용 효율화", "특허정책 (발명자 보상제도, 업무단계별 Check List)", "특허조직 운영전략 및 팀원 능력향상", "경영진/연구원 대상 특허활용 사업성공사례 강의", "기술특례상장 대비한 특허전략"],
      en: ["Patent portfolio quality assessment & improvement", "Overseas patent acquisition strategy & cost optimization", "Patent policy (inventor compensation, workflow checklists)", "Patent team management & capability development", "Executive/researcher seminars on patent-driven business success", "Patent strategy for tech-based IPO qualification"],
    },
  },
  {
    title: { ko: "경고장 대응 (국내/해외)", en: "Cease-and-Desist Response" },
    items: {
      ko: ["특허권자의 경고장 작성", "경고장 수신한 기업의 답변서 작성", "특허분석 및 회피설계 자문", "조기 타결을 위한 협상전략 개발"],
      en: ["Drafting cease-and-desist letters for patent holders", "Preparing responses for recipients of C&D letters", "Patent analysis & design-around advisory", "Negotiation strategy for early settlement"],
    },
  },
  {
    title: { ko: "해외 특허소송 대응", en: "Global Patent Litigation" },
    items: {
      ko: ["해외 대리인 선정 전략", "특허침해/무효 분석", "조기 타결을 위한 협상전략"],
      en: ["Foreign counsel selection strategy", "Patent infringement/invalidity analysis", "Negotiation strategy for early settlement"],
    },
  },
  {
    title: { ko: "침해/무효 분석", en: "Infringement / Invalidity" },
    items: {
      ko: ["명세서/심사과정/해외 패밀리 분석", "청구항 해석", "선행기술 분석", "침해 및 무효 판단"],
      en: ["Specification/prosecution history/patent family analysis", "Claim construction", "Prior art analysis", "Infringement & invalidity determination"],
    },
  },
  {
    title: { ko: "라이선싱", en: "Licensing" },
    items: {
      ko: ["특허/기술 가치평가", "라이선싱 협상전략 개발", "라이선스 계약서 작성"],
      en: ["Patent/technology valuation", "Licensing negotiation strategy", "License agreement drafting"],
    },
  },
  {
    title: { ko: "특허 가치평가", en: "Patent Valuation" },
    items: {
      ko: ["특허 청구범위 정밀 분석", "미국 법원의 특허 가치평가 적용"],
      en: ["Detailed claim scope analysis", "Application of U.S. court patent valuation methods"],
    },
  },
  {
    title: { ko: "특허 및 기술 거래", en: "Patent & Technology Transactions" },
    items: {
      ko: ["잠재적 Buyer/Seller 발굴 및 컨택", "협상 및 계약"],
      en: ["Identifying & contacting potential buyers/sellers", "Negotiation & contract execution"],
    },
  },
  {
    title: { ko: "특허 수익화 컨설팅", en: "Patent Monetization" },
    items: {
      ko: ["수익화 및 소송용 특허만들기 자문", "보유 특허 평가 및 수익화 특허 선정", "NPE 및 소송펀딩 업체와 계약", "라이선싱 및 소송"],
      en: ["Advisory on building monetizable & litigation-ready patents", "Portfolio evaluation & monetization target selection", "Contracting with NPEs & litigation funders", "Licensing & litigation"],
    },
  },
  {
    title: { ko: "특허 강의 (사례 위주)", en: "Patent Seminars" },
    items: {
      ko: ["로열티를 많이 받을 수 있는 특허만들기", "해외 경고장 대응 및 소송 대응 사례들", "특허 계약(라이선스, 공동개발 등) 분쟁 사례들", "(연구원) 강한 특허를 만들기 위한 연구원의 역할", "(경영진) 사업성공에 특허활용한 사례들"],
      en: ["Building patents that maximize royalty potential", "Case studies: responding to foreign C&D letters & litigation", "Case studies: patent contract disputes (licensing, joint development)", "(Researchers) Role of researchers in creating strong patents", "(Executives) Case studies on leveraging patents for business success"],
    },
  },
];

export default function PracticeAreasSection() {
  const { lang, t } = useLanguage();
  const header = useReveal();
  const grid = useReveal();

  return (
    <section id="practice-areas" className="py-28 md:py-40 bg-white scroll-mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section header */}
        <div ref={header.ref} className={`reveal ${header.visible ? "visible" : ""} mb-16 md:mb-20`}>
          <div className="w-10 h-1 bg-gold rounded-full mb-5" />
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-navy mb-4">
            {t("주요업무", "Practice Areas")}
          </h2>
          <p className="text-[15px] text-gray-600 max-w-lg leading-relaxed">
            {t(
              "국제 IP 분쟁의 전 과정을 아우르는 종합적 서비스",
              "Comprehensive services covering every stage of international IP disputes"
            )}
          </p>
        </div>

        {/* Cards grid */}
        <div
          ref={grid.ref}
          className={`reveal-stagger ${grid.visible ? "visible" : ""} grid md:grid-cols-2 gap-6`}
        >
          {areas.map((area, idx) => {
            const title = lang === "ko" ? area.title.ko : area.title.en;
            const subtitle = lang === "ko" ? area.title.en : area.title.ko;
            const items = lang === "ko" ? area.items.ko : area.items.en;

            return (
              <div
                key={idx}
                className="group formal-card-accent rounded-md overflow-hidden"
              >
                <div className="p-7 md:p-8">
                  <h3 className="text-base font-bold text-navy leading-snug font-serif mb-1.5">
                    {title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-5 font-medium tracking-wide">
                    {subtitle}
                  </p>
                  <ul className="space-y-2.5">
                    {items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-gray-700 leading-relaxed"
                      >
                        <span className="mt-[7px] w-1 h-1 rounded-full bg-gold/50 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
