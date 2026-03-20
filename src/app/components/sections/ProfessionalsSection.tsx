"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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

/* ────── Data types ────── */
interface TimelineItem { year: string; desc: string; }
interface PracticeArea { title: string; items: string[]; }
interface RepMatter { title: string; items: string[]; }
interface Bilingual<T> { ko: T; en: T; }

/* ────── Sub-components ────── */
function TimelineRow({ items }: { items: TimelineItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((t, i) => (
        <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
          <span className="text-xs font-serif text-gold-dark whitespace-nowrap font-semibold">{t.year}</span>
          <span className="text-sm text-gray-800 leading-relaxed">{t.desc}</span>
        </div>
      ))}
    </div>
  );
}

function PracticeAreaGrid({ areas }: { areas: PracticeArea[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {areas.map((area, i) => (
        <div key={i} className="bg-cream/70 rounded-md p-6 border border-cream-dark/50">
          <h5 className="font-bold text-navy mb-4 text-sm font-serif">
            {area.title}
          </h5>
          <ul className="space-y-2.5 text-sm text-gray-700">
            {area.items.map((item, j) => (
              <li key={j} className="flex items-start gap-2">
                <span className="mt-[7px] w-1 h-1 rounded-full bg-gold/50 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function RepMatters({ matters }: { matters: RepMatter[] }) {
  return (
    <div className="space-y-7">
      {matters.map((m, i) => (
        <div key={i}>
          <h5 className="font-semibold text-navy text-sm mb-3 font-serif">
            {m.title}
          </h5>
          <ul className="space-y-2.5 text-sm text-gray-700 pl-4">
            {m.items.map((item, j) => (
              <li key={j} className="flex items-start gap-2">
                <span className="mt-[7px] w-1 h-1 rounded-full bg-gold/50 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function SummaryList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3.5 text-sm text-gray-800 leading-relaxed">
      {items.map((s, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <span className="text-gold mt-[7px] flex-shrink-0 w-1 h-1 rounded-full bg-gold/50" />
          {s}
        </li>
      ))}
    </ul>
  );
}

/* ────── Profile Card ────── */
function ProfileCard({
  nameKo, nameEn, photo, badges, summaryItems, timeline, education, qualifications,
  practiceAreas, repMatters, expanded, onToggle, revealRef, revealClass, lang,
}: {
  nameKo: string; nameEn: string; photo: string; badges: string[];
  summaryItems: string[]; timeline: TimelineItem[]; education: string[];
  qualifications: string[]; practiceAreas: PracticeArea[]; repMatters: RepMatter[];
  expanded: boolean; onToggle: () => void;
  revealRef: React.RefObject<HTMLDivElement | null>; revealClass: string;
  lang: "ko" | "en";
}) {
  const l = lang === "ko"
    ? { summary: "Professional Summary", experience: "경력 | Experience", education: "학력 | Education", qualifications: "자격", practiceAreas: "전문 분야 | Practice Areas", repMatters: "대표 수행 업무 | Representative Matters", expand: "전문 분야 및 대표 수행 업무 보기", collapse: "접기" }
    : { summary: "Professional Summary", experience: "Experience", education: "Education", qualifications: "Qualifications", practiceAreas: "Practice Areas", repMatters: "Representative Matters", expand: "View Practice Areas & Representative Matters", collapse: "Collapse" };

  return (
    <div ref={revealRef} className={`${revealClass} mb-12`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-100 relative">
        {/* Header with photo */}
        <div className="relative bg-gradient-to-r from-cream to-cream-dark/40 border-b border-gray-200/80 px-8 md:px-12 py-8 md:py-10">
          <div className="relative flex flex-col md:flex-row md:items-center gap-7">
            <div className="shrink-0 w-28 h-28 md:w-32 md:h-32 rounded-lg overflow-hidden ring-2 ring-white shadow-md">
              <Image src={photo} alt={nameKo} width={128} height={128} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold font-serif text-navy mb-1.5">
                    {lang === "ko" ? nameKo : nameEn}
                  </h3>
                  <p className="text-sm text-gray-500 font-light tracking-wide">
                    {lang === "ko" ? nameEn : nameKo}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {badges.map((b, i) => (
                    <span key={i} className="text-[13px] px-4 py-2 rounded-full bg-white text-navy border border-gray-200 font-medium shadow-sm">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-10">
            <div>
              <h4 className="text-xs font-bold text-navy/60 tracking-wider uppercase mb-5 font-serif">
                {l.summary}
              </h4>
              <SummaryList items={summaryItems} />
            </div>
            <div className="space-y-10">
              <div>
                <h4 className="text-xs font-bold text-navy/60 tracking-wider uppercase mb-5 font-serif">
                  {l.experience}
                </h4>
                <TimelineRow items={timeline} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-navy/60 tracking-wider uppercase mb-5 font-serif">
                  {l.education}
                </h4>
                <div className="space-y-3 text-sm text-gray-800 leading-relaxed">
                  {education.map((e, i) => <p key={i}>{e}</p>)}
                </div>
              </div>
            </div>
          </div>

          {/* Qualifications */}
          <div className="flex flex-wrap items-center gap-3 mb-8 pb-8 border-b border-gray-100">
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wider mr-1 font-serif">{l.qualifications}</span>
            {qualifications.map((q, i) => (
              <span key={i} className="text-[13px] px-4 py-2 rounded-full bg-white text-navy font-medium font-serif border border-gray-200 shadow-sm">{q}</span>
            ))}
          </div>

          {/* Toggle */}
          <button onClick={onToggle} className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg border border-gold/30 bg-gold/5 text-sm text-gold-dark hover:bg-gold/10 hover:border-gold/50 font-medium transition-all duration-200">
            <span>{expanded ? l.collapse : l.expand}</span>
            <svg className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Expanded content */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? "max-h-[4000px] opacity-100 mt-8" : "max-h-0 opacity-0"}`}>
            <div className="space-y-12">
              <div>
                <h4 className="text-xs font-bold text-navy/60 tracking-wider uppercase mb-6 font-serif">
                  {l.practiceAreas}
                </h4>
                <PracticeAreaGrid areas={practiceAreas} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-navy/60 tracking-wider uppercase mb-6 font-serif">
                  {l.repMatters}
                </h4>
                <RepMatters matters={repMatters} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ────── Bilingual Profile Data ────── */
const leeData = {
  nameKo: "이승헌",
  nameEn: "Sean (Seunghun) Lee",
  photo: "/photos/lee-seunghun.png",
  badges: { ko: ["변리사", "미국변호사 (Illinois)"], en: ["Patent Attorney (KR)", "Attorney at Law (Illinois, US)"] },
  summary: {
    ko: [
      "20년 국제 IP 분쟁 전문 경력 (김·장 법률사무소 해외분쟁팀장 역임)",
      "80+ 미국·독일·유럽 법원 소송, ITC 소송 및 협상 수행",
      "100+ 미국 소송, 해외 정부조사 디스커버리 프로젝트 수행",
      "배터리·신재생에너지·바이오·반도체·전기전자 첨단기술 분야 특화",
    ],
    en: [
      "20 years specializing in international IP disputes (former Head of Overseas Dispute Team at Kim & Chang)",
      "80+ litigations in US, German, and European courts; ITC proceedings and negotiations",
      "100+ US litigation and international government investigation discovery projects",
      "Specialized in batteries, renewable energy, bio, semiconductors, and electronics",
    ],
  },
  timeline: {
    ko: [
      { year: "2026 – 현재", desc: "프로앤팀 특허사무소 대표변리사" },
      { year: "2015 – 2026", desc: "김·장 법률사무소 해외분쟁팀장" },
      { year: "2006 – 2015", desc: "김·장 법률사무소 전자부" },
    ],
    en: [
      { year: "2026 – Present", desc: "Managing Patent Attorney, Pro & Team IP" },
      { year: "2015 – 2026", desc: "Head of Overseas Dispute Team, Kim & Chang" },
      { year: "2006 – 2015", desc: "Electronics Division, Kim & Chang" },
    ],
  },
  education: {
    ko: ["UCLA School of Law, LL.M. (2014)", "한국방송통신대학교 법학과 (2012)", "서울대학교 전기공학부 (2006)"],
    en: ["UCLA School of Law, LL.M. (2014)", "Korea National Open University, Law (2012)", "Seoul National University, Electrical Engineering (2006)"],
  },
  qualifications: { ko: ["미국변호사 (Illinois)", "변리사"], en: ["Attorney at Law (Illinois, US)", "Patent Attorney (KR)"] },
  practiceAreas: {
    ko: [
      { title: "국제 IP 소송 및 분쟁 대응", items: ["미국 ITC 및 연방지방법원 특허/영업비밀 소송", "독일 특허법원 소송 및 유럽 특허 opposition", "해외 정부기관(NHTSA, CPSC, ACCC) 조사 대응"] },
      { title: "디스커버리 및 내부조사", items: ["100+ 미국 IP 소송 e-discovery 관리 및 전략 수립", "영업비밀 유출 및 형사 사건 관련 내부조사 수행", "Relativity 기반 대규모 문서 검토 총괄"] },
      { title: "IP 라이선스 및 협상", items: ["미국·유럽 특허 분쟁 해결 라이선스 협상 및 계약 체결", "공작기계, 수소, 철강, 3D 의료기기, IT 플랫폼, 전기차 신소재, 스포츠 장비 등 다분야 협상 경험"] },
      { title: "한국 특허 분쟁 및 심판", items: ["특허침해소송, 권리범위확인심판, 무효심판", "무선통신, 의료기기, 광학, 게임, 모바일 기술 등"] },
    ],
    en: [
      { title: "International IP Litigation & Dispute Response", items: ["US ITC and federal district court patent/trade secret litigation", "German Patent Court litigation and European patent opposition", "Government investigation response (NHTSA, CPSC, ACCC)"] },
      { title: "Discovery & Internal Investigation", items: ["100+ US IP litigation e-discovery management and strategy", "Internal investigations related to trade secret misappropriation and criminal matters", "Large-scale document review management using Relativity"] },
      { title: "IP Licensing & Negotiation", items: ["US/European patent dispute resolution licensing negotiations and agreements", "Multi-sector negotiation experience: machinery, hydrogen, steel, 3D medical devices, IT platforms, EV materials, sports equipment"] },
      { title: "Korean Patent Disputes & Trials", items: ["Patent infringement litigation, scope confirmation trials, invalidation trials", "Wireless communications, medical devices, optics, gaming, mobile technology"] },
    ],
  },
  repMatters: {
    ko: [
      { title: "첨단 기술 분야 국제 소송", items: ["전기화학 기술: 미국 영업비밀 소송, ITC 특허소송", "신재생에너지: 미국·유럽 특허 소송, ITC 특허소송", "3D 의료장비: 독일 특허소송, 유럽 opposition", "바이오: 미국 영업비밀 소송", "광학·전기차 신소재: 미국 ITC 및 연방법원 소송"] },
      { title: "정부조사 및 규제 대응", items: ["전기화학: 미국 NHTSA, 호주 ACCC 조사", "차량용품·가전: 미국 NHTSA, CPSC 조사"] },
      { title: "글로벌 IP 전략 자문", items: ["한국 주요 기업 대상 해외 IP 분쟁 대응 전략 강연 (수십회)", "사내 IP 정책 수립 및 공격용 특허 포트폴리오 구축", "베트남·인도 특허 분쟁 자문"] },
    ],
    en: [
      { title: "High-Tech International Litigation", items: ["Electrochemistry: US trade secret litigation, ITC patent litigation", "Renewable energy: US/European patent litigation, ITC patent litigation", "3D medical equipment: German patent litigation, European opposition", "Biotechnology: US trade secret litigation", "Optics/EV materials: US ITC and federal court litigation"] },
      { title: "Government Investigation & Regulatory Response", items: ["Electrochemistry: US NHTSA, Australia ACCC investigations", "Automotive/consumer electronics: US NHTSA, CPSC investigations"] },
      { title: "Global IP Strategy Advisory", items: ["IP dispute response strategy lectures for major Korean enterprises (dozens)", "In-house IP policy development and offensive patent portfolio building", "Patent dispute advisory for Vietnam and India"] },
    ],
  },
};

const kwonData = {
  nameKo: "권오진",
  nameEn: "Ohjin Kwon",
  photo: "/photos/kwon-ojin.png",
  badges: { ko: ["미국변호사 (Washington, D.C.)"], en: ["Attorney at Law (Washington, D.C., US)"] },
  summary: {
    ko: [
      "32년 국제 IP 분쟁·소송용 특허 만들기·IP계약 경력",
      "100+ 해외 특허분쟁/소송/협상 담당",
      "200+ 라이센스·IP Indemnity·공동개발 계약 담당",
      "다수의 수익화·소송용 특허만들기 및 특허 컨설팅 프로젝트 담당",
      "다수의 특허거래 담당",
      "100+ 특허 강연 (경영진·연구원·IP팀·구매팀·영업팀 대상)",
    ],
    en: [
      "32 years of experience in international IP disputes, litigation-ready patent drafting, and IP contracts",
      "100+ international patent disputes, litigations, and negotiations",
      "200+ licensing, IP indemnity, and joint development agreements",
      "Numerous patent monetization, litigation-ready patent creation, and consulting projects",
      "Extensive patent transaction experience",
      "100+ patent lectures (for executives, researchers, IP/procurement/sales teams)",
    ],
  },
  timeline: {
    ko: [
      { year: "2026 – 현재", desc: "프로앤팀 특허사무소 미국변호사 (Washington, D.C.)" },
      { year: "2017 – 2026", desc: "김·장 법률사무소 특허부" },
      { year: "2015 – 2017", desc: "서울반도체 특허팀장" },
      { year: "2015", desc: "KCC 특허팀장" },
      { year: "1994 – 2013", desc: "삼성전기 라이센싱 파트장" },
    ],
    en: [
      { year: "2026 – Present", desc: "Attorney at Law, Pro & Team IP (Washington, D.C.)" },
      { year: "2017 – 2026", desc: "Patent Division, Kim & Chang" },
      { year: "2015 – 2017", desc: "Head of Patent Team, Seoul Semiconductor" },
      { year: "2015", desc: "Head of Patent Team, KCC" },
      { year: "1994 – 2013", desc: "Head of Licensing, Samsung Electro-Mechanics" },
    ],
  },
  education: {
    ko: ["Indiana University School of Law, LL.M. (2014)", "한국방송통신대학교 법학과 (2012)", "경북대학교 전자공학과 (1994)"],
    en: ["Indiana University School of Law, LL.M. (2014)", "Korea National Open University, Law (2012)", "Kyungpook National University, Electronic Engineering (1994)"],
  },
  qualifications: { ko: ["미국변호사 (Washington, D.C.)"], en: ["Attorney at Law (Washington, D.C., US)"] },
  practiceAreas: {
    ko: [
      { title: "국제 IP 소송 및 분쟁 대응", items: ["미국 ITC 및 연방지방법원, 독일·일본 특허 소송", "미·독·이·일·영·캐·핀·중·네·룩 기업들과의 특허분쟁"] },
      { title: "기업 특허전략 컨설팅", items: ["다수 대기업 특허조직 운영 및 업무 전략 컨설팅", "다수 중소기업·스타트업의 보유특허 분석 및 품질향상", "공격특허 확보를 위한 업무 프로세스 구축"] },
      { title: "IP 라이선스 및 협상", items: ["미·유·일·중·핀 라이선스 협상 및 계약 체결", "전자부품, 타이어, 기계, 소재, 에너지, 광학, 소프트웨어, 철강 등"] },
      { title: "IP 분야 계약", items: ["100건 이상의 IP Indemnity 계약서 작성 및 협상", "50건 이상의 국내,외 공동개발계약 작성 및 협상"] },
      { title: "특허거래", items: ["기업 근무 시, 다수의 특허매입·매각", "김앤장법률사무소에서 특허거래 담당", "기술거래사 (2024) / 기술사업가치평가사 (2018)"] },
      { title: "기술특례상장", items: ["스타트업 특허확보 전략 컨설팅"] },
    ],
    en: [
      { title: "International IP Litigation & Dispute Response", items: ["US ITC and federal district court, German and Japanese patent litigation", "Patent disputes with companies across the US, Germany, Italy, Japan, UK, Canada, Finland, China, Netherlands, and Luxembourg"] },
      { title: "Corporate Patent Strategy Consulting", items: ["Patent organization management and strategy consulting for major corporations", "Patent portfolio analysis and quality improvement for SMEs and startups", "Building processes for acquiring offensive patents"] },
      { title: "IP Licensing & Negotiation", items: ["Licensing negotiations and agreements across the US, Europe, Japan, China, and Finland", "Electronic components, tires, machinery, materials, energy, optics, software, steel, etc."] },
      { title: "IP Contracts", items: ["100+ IP indemnity agreements drafted and negotiated", "50+ domestic and international joint development agreements drafted and negotiated"] },
      { title: "Patent Transactions", items: ["Numerous patent acquisitions and divestitures during corporate tenure", "Patent transaction management at Kim & Chang", "Certified Technology Broker (2024) / Technology Business Valuator (2018)"] },
      { title: "Tech-Special IPO", items: ["Patent acquisition strategy consulting for startups"] },
    ],
  },
  repMatters: {
    ko: [
      { title: "해외 특허소송 및 경고장 대응", items: ["전자부품: 미국 ITC 특허소송, 일본 소송", "소재 기술: 미국 특허 소송", "기계: 미국 특허소송", "장비: 독일 특허소송", "자동차 부품: 독일 소송", "100+ 해외 경고장 대응"] },
      { title: "사업성공을 위한 기업의 특허전략 컨설팅", items: ["국내 5대그룹의 일부 계열사들에 특허전략 컨설팅 수행", "다수의 중견·중소·스타트업 대상 특허현황 진단 및 공격용 특허만들기 컨설팅"] },
      { title: "협상 및 계약", items: ["라이선스 계약, 공동개발계약, IP Indemnity 계약서 작성 및 협상 (100+)"] },
      { title: "특허거래", items: ["기업 근무 시, 전자부품 및 광학기술 특허매입 및 판매", "김앤장법률사무소에서, 첨단 기술분야 특허거래 담당", "특허거래를 위한 특허가치평가"] },
      { title: "특허 강연", items: ["12개의 특허관련 주제로, 100회 강연"] },
    ],
    en: [
      { title: "International Patent Litigation & C&D Response", items: ["Electronic components: US ITC patent litigation, Japanese litigation", "Materials technology: US patent litigation", "Machinery: US patent litigation", "Equipment: German patent litigation", "Automotive parts: German litigation", "100+ international cease-and-desist responses"] },
      { title: "Corporate Patent Strategy for Business Success", items: ["Patent strategy consulting for subsidiaries of Korea's top 5 conglomerates", "Patent portfolio diagnosis and offensive patent creation consulting for mid-size companies, SMEs, and startups"] },
      { title: "Negotiations & Contracts", items: ["100+ licensing agreements, joint development contracts, and IP indemnity agreements drafted and negotiated"] },
      { title: "Patent Transactions", items: ["Electronic component and optical technology patent acquisitions and sales during corporate tenure", "High-tech patent transaction management at Kim & Chang", "Patent valuation for transactions"] },
      { title: "Patent Lectures", items: ["100 lectures covering 12 patent-related topics"] },
    ],
  },
};

const choData = {
  nameKo: "조경선",
  nameEn: "Kyungsun Cho",
  photo: "/photos/cho-kyungsun.png",
  badges: { ko: ["자문"], en: ["Advisor"] },
  summary: {
    ko: [
      "22년간 한국발명진흥회(정부공인 기술평가기관) 특허기술거래평가 팀장, 지식재산평가센터 소장 역임",
      "경영학 박사, 미국공인회계사(Maryland), 기술거래사, 경영지도사",
      "특허권, 상표권, 저작권, 데이터 등 가치평가",
      "기술가치평가 방법연구, 평가기법, 평가매뉴얼 개발",
      "기술사업타당성 분석/평가, 기술사업화 관련 컨설팅 및 교육",
      "지식재산권 자본화, 지식재산금융 및 투자 IR 컨설팅",
    ],
    en: [
      "22 years at KIPA (government-authorized technology evaluation agency) as Head of Patent Technology Transaction & Evaluation and Director of IP Valuation Center",
      "Ph.D. in Business Administration, US CPA (Maryland), Certified Technology Broker, Certified Management Consultant",
      "Valuation of patents, trademarks, copyrights, and data assets",
      "Technology valuation methodology research, evaluation techniques, and manual development",
      "Technology commercialization feasibility analysis/evaluation, consulting, and training",
      "IP capitalization, IP finance, and investment IR consulting",
    ],
  },
  timeline: {
    ko: [
      { year: "2010 – 현재", desc: "성균관대 기술경영전문대학원 겸임교수 (기술가치평가)" },
      { year: "2008 – 현재", desc: "서울대 공대 기술경영경제정책 대학원 강사" },
      { year: "2023 – 현재", desc: "울산과학기술원 기술경영전문대학원 겸임교수" },
      { year: "2014 – 현재", desc: "한국금융연수원 강사 (지식재산권 가치평가)" },
      { year: "2001 – 2022", desc: "한국발명진흥회 특허기술 거래평가팀장, 지식재산평가센터 소장" },
      { year: "2021 – 2023", desc: "한국지적재산권경상학회 회장" },
      { year: "2014 – 2016", desc: "한국산업기술진흥원 기술평가 대표위원" },
    ],
    en: [
      { year: "2010 – Present", desc: "Adjunct Professor, Sungkyunkwan University Graduate School of Technology Management (Technology Valuation)" },
      { year: "2008 – Present", desc: "Lecturer, Seoul National University Graduate School of Technology Management, Economics & Policy" },
      { year: "2023 – Present", desc: "Adjunct Professor, UNIST Graduate School of Technology Management" },
      { year: "2014 – Present", desc: "Lecturer, Korea Banking Institute (IP Valuation)" },
      { year: "2001 – 2022", desc: "Head of Patent Technology Transaction & Evaluation / Director of IP Valuation Center, KIPA" },
      { year: "2021 – 2023", desc: "President, Korean Intellectual Property Accounting Association" },
      { year: "2014 – 2016", desc: "Lead Commissioner for Technology Evaluation, KIAT" },
    ],
  },
  education: {
    ko: ["경영학 박사"],
    en: ["Ph.D. in Business Administration"],
  },
  qualifications: { ko: ["미국공인회계사 (Maryland)", "기술거래사", "경영지도사"], en: ["US CPA (Maryland)", "Certified Technology Broker", "Certified Management Consultant"] },
  practiceAreas: {
    ko: [
      { title: "기술가치평가", items: ["특허권, 상표권, 저작권, 데이터 등 가치평가", "기술가치평가 방법연구, 평가기법, 평가매뉴얼 개발"] },
      { title: "기술사업화 컨설팅", items: ["기술사업타당성 분석/평가", "기술사업화 관련 컨설팅 및 교육"] },
      { title: "지식재산금융", items: ["지식재산권 자본화", "지식재산금융 및 투자 IR 컨설팅"] },
    ],
    en: [
      { title: "Technology Valuation", items: ["Valuation of patents, trademarks, copyrights, and data assets", "Technology valuation methodology research, evaluation techniques, and manual development"] },
      { title: "Technology Commercialization Consulting", items: ["Technology business feasibility analysis/evaluation", "Technology commercialization consulting and training"] },
      { title: "IP Finance", items: ["IP capitalization", "IP finance and investment IR consulting"] },
    ],
  },
  repMatters: {
    ko: [
      { title: "가치평가 모형 및 가이드 개발", items: [
        "특허권 감정평가모델 및 가이드 개발 및 교육 (한국감정평가사협회, 2024)",
        "데이터가치평가매뉴얼 개발 (신용보증기금, 2022 / 중진공, 2023)",
        "소프트웨어저작권 가치평가모형 및 가이드 개발 (한국SW저작권협회, 2021)",
        "해양수산 기술가치평가모델 구축 (한국해양과학기술진흥원, 2015)",
        "의약 바이오 기술가치평가모형 개발 (지식경제부, 2011–2012)",
      ]},
      { title: "연구 및 정책", items: [
        "시장접근법 기반의 기술평가모형 정립 (한국산업기술진흥원, 2012)",
        "기업 기술력 등급평가 모델개선 및 개선방안 (지식경제부/KIAT, 2011)",
        "국제회계기준 도입에 대응할 기술평가방법 연구 (지식경제부/KIAT, 2009–2010)",
        "특허침해 손해액산정 방법 및 기준 제안 (지식경제부/KIAT, 2009–2010)",
      ]},
      { title: "저서 및 교육", items: [
        "특허권, 상표권, 기술가치평가 수행 (한국발명진흥회, 2001–2022)",
        "지식재산평가거래 학습모듈 대표 집필 (한국직업능력개발원, 2016)",
        "지식재산금융과 가치평가실무 (한국금융연수원, 2014)",
        "기술가치평가론 (산업자원부, 2007) 공동저자 등 다수",
      ]},
    ],
    en: [
      { title: "Valuation Model & Guide Development", items: [
        "Patent appraisal model and guide development & training (Korea Association of Property Appraisers, 2024)",
        "Data valuation manual development (Korea Credit Guarantee Fund, 2022 / SBC, 2023)",
        "Software copyright valuation model and guide (Korea SW Copyright Association, 2021)",
        "Maritime technology valuation model (KIMST, 2015)",
        "Pharmaceutical/bio technology valuation model (MKE, 2011–2012)",
      ]},
      { title: "Research & Policy", items: [
        "Market-based technology valuation model development (KIAT, 2012)",
        "Corporate technology capability rating model improvement (MKE/KIAT, 2011)",
        "Technology valuation methodology for IFRS adoption (MKE/KIAT, 2009–2010)",
        "Patent infringement damages calculation methodology (MKE/KIAT, 2009–2010)",
      ]},
      { title: "Publications & Education", items: [
        "Patent, trademark, and technology valuations (KIPA, 2001–2022)",
        "Lead author, IP Valuation & Transaction Learning Module (KRIVET, 2016)",
        "IP Finance and Valuation Practice (Korea Banking Institute, 2014)",
        "Technology Valuation Theory (MOTIE, 2007), co-author, and others",
      ]},
    ],
  },
};

/* ────── Main Section ────── */
export default function ProfessionalsSection() {
  const { lang, t } = useLanguage();
  const header = useReveal();
  const lee = useReveal();
  const kwon = useReveal();
  const cho = useReveal();
  const [expandedLee, setExpandedLee] = useState(false);
  const [expandedKwon, setExpandedKwon] = useState(false);
  const [expandedCho, setExpandedCho] = useState(false);

  const pick = <T,>(b: Bilingual<T>): T => (lang === "ko" ? b.ko : b.en);

  return (
    <section id="professionals" className="pt-32 md:pt-48 pb-28 md:pb-40 bg-cream scroll-mt-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <div ref={header.ref} className={`reveal ${header.visible ? "visible" : ""} mb-16 md:mb-20`}>
          <div className="w-10 h-1 bg-gold rounded-full mb-5" />
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-navy">
            {t("구성원", "Our Team")}
          </h2>
        </div>

        <ProfileCard
          lang={lang}
          revealRef={lee.ref}
          revealClass={`reveal ${lee.visible ? "visible" : ""}`}
          nameKo={leeData.nameKo}
          nameEn={leeData.nameEn}
          photo={leeData.photo}
          badges={pick(leeData.badges)}
          summaryItems={pick(leeData.summary)}
          timeline={pick(leeData.timeline)}
          education={pick(leeData.education)}
          qualifications={pick(leeData.qualifications)}
          practiceAreas={pick(leeData.practiceAreas)}
          repMatters={pick(leeData.repMatters)}
          expanded={expandedLee}
          onToggle={() => setExpandedLee(!expandedLee)}
        />

        <ProfileCard
          lang={lang}
          revealRef={kwon.ref}
          revealClass={`reveal ${kwon.visible ? "visible" : ""}`}
          nameKo={kwonData.nameKo}
          nameEn={kwonData.nameEn}
          photo={kwonData.photo}
          badges={pick(kwonData.badges)}
          summaryItems={pick(kwonData.summary)}
          timeline={pick(kwonData.timeline)}
          education={pick(kwonData.education)}
          qualifications={pick(kwonData.qualifications)}
          practiceAreas={pick(kwonData.practiceAreas)}
          repMatters={pick(kwonData.repMatters)}
          expanded={expandedKwon}
          onToggle={() => setExpandedKwon(!expandedKwon)}
        />

        <ProfileCard
          lang={lang}
          revealRef={cho.ref}
          revealClass={`reveal ${cho.visible ? "visible" : ""}`}
          nameKo={choData.nameKo}
          nameEn={choData.nameEn}
          photo={choData.photo}
          badges={pick(choData.badges)}
          summaryItems={pick(choData.summary)}
          timeline={pick(choData.timeline)}
          education={pick(choData.education)}
          qualifications={pick(choData.qualifications)}
          practiceAreas={pick(choData.practiceAreas)}
          repMatters={pick(choData.repMatters)}
          expanded={expandedCho}
          onToggle={() => setExpandedCho(!expandedCho)}
        />
      </div>
    </section>
  );
}
