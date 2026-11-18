"use client";

import { useEffect, useId, useRef, useState } from "react";
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
      ko: [
        "특허분쟁 100전 100승 기업의 특허만들기 사례",
        "기업 경영진에 특허보고서 작성 사례들(출원, 분쟁, 협상 보고서 등, 실제 사례 위주)",
        "특허 분쟁 및 라이센싱 협상 사례들",
        "해외 공동연구개발 계약서 분쟁 사례들",
        "IP Indemnity 계약 협상 및 분쟁 사례들",
        "라이센스 계약서에서 자주 발생하는 실수 사례들",
        "미국 고의침해 사례들 분석 및 사전 회피 전략",
        "특허청구항 해석 및 침해 판단",
        "미국법원에서의 합리적 로열티 산정 사례들",
        "연구원 대상: 로열티 많이 받는 특허만들기 위한 연구원 역할",
        "미국 특허 직접, 간접침해 및 대응 전략",
        "특허 수익화 전략 및 법적 쟁점",
        "미국 소송/ITC 개요 및 동종 업계의 소송 사례",
        "디스커버리 및 사내 문서 관리 전략",
        "미국 영업비밀 소송 및 분쟁 사례들",
      ],
      en: [
        "Case studies: how a company undefeated in 100 patent disputes builds its patents",
        "Case studies: writing patent reports for executives (filing, dispute & negotiation reports, based on real cases)",
        "Case studies: patent disputes & licensing negotiations",
        "Case studies: disputes over international joint R&D agreements",
        "Case studies: IP indemnity negotiations & disputes",
        "Case studies: common mistakes in license agreements",
        "U.S. willful infringement cases: analysis & proactive avoidance strategies",
        "Patent claim construction & infringement determination",
        "Case studies: reasonable royalty calculations in U.S. courts",
        "For researchers: the researcher's role in building high-royalty patents",
        "U.S. direct & indirect patent infringement and response strategies",
        "Patent monetization strategies & legal issues",
        "Overview of U.S. litigation & ITC proceedings, with cases from your industry",
        "Discovery & internal document management strategies",
        "Case studies: U.S. trade secret litigation & disputes",
      ],
    },
  },
];

// Long lists show this many items up front, with a toggle for the rest.
const PREVIEW_COUNT = 5;

function AreaItem({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-gray-700 leading-relaxed">
      <span className="mt-[7px] w-1 h-1 rounded-full bg-gold/50 shrink-0" />
      {children}
    </li>
  );
}

function AreaCard({ area }: { area: (typeof areas)[number] }) {
  const { lang, t } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const moreId = useId();

  const title = lang === "ko" ? area.title.ko : area.title.en;
  const subtitle = lang === "ko" ? area.title.en : area.title.ko;
  const items = lang === "ko" ? area.items.ko : area.items.en;

  // Collapse only when it hides at least two items.
  const collapsible = items.length > PREVIEW_COUNT + 1;
  const preview = collapsible ? items.slice(0, PREVIEW_COUNT) : items;
  const rest = collapsible ? items.slice(PREVIEW_COUNT) : [];

  const toggle = () => {
    // Collapsing removes the list above the button. If the reader has scrolled
    // past the card's top, bring it back into view so they aren't left further
    // down the page.
    const card = cardRef.current;
    if (expanded && card && card.getBoundingClientRect().top < 0) {
      card.scrollIntoView({ block: "start" });
    }
    setExpanded(!expanded);
  };

  return (
    <div ref={cardRef} className="group formal-card-accent rounded-md overflow-hidden scroll-mt-24">
      <div className="p-7 md:p-8">
        <h3 className="text-base font-bold text-navy leading-snug font-serif mb-1.5">
          {title}
        </h3>
        <p className="text-xs text-gray-500 mb-5 font-medium tracking-wide">
          {subtitle}
        </p>
        <ul className="space-y-2.5">
          {preview.map((item, i) => (
            <AreaItem key={i}>{item}</AreaItem>
          ))}
        </ul>

        {collapsible && (
          <>
            <div
              id={moreId}
              inert={!expanded}
              className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out motion-reduce:transition-none ${
                expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden min-h-0">
                <ul className="space-y-2.5 pt-2.5">
                  {rest.map((item, i) => (
                    <AreaItem key={i}>{item}</AreaItem>
                  ))}
                </ul>
              </div>
            </div>

            <button
              type="button"
              onClick={toggle}
              aria-expanded={expanded}
              aria-controls={moreId}
              className="mt-5 inline-flex items-center gap-1.5 rounded-md border border-gold/30 bg-gold/5 px-3.5 py-1.5 text-[13px] font-medium text-navy cursor-pointer transition-colors duration-200 hover:border-gold/50 hover:bg-gold/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <span>
                {expanded
                  ? t("접기", "Show less")
                  : t(`${rest.length}개 더보기`, `Show ${rest.length} more`)}
              </span>
              <svg
                aria-hidden="true"
                className={`w-3.5 h-3.5 text-gold-dark transition-transform duration-300 motion-reduce:transition-none ${expanded ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default function PracticeAreasSection() {
  const { t } = useLanguage();
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
          {areas.map((area, idx) => (
            <AreaCard key={idx} area={area} />
          ))}
        </div>
      </div>
    </section>
  );
}
