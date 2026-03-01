"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";

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
interface TimelineItem {
  year: string;
  desc: string;
}
interface PracticeArea {
  title: string;
  items: string[];
}
interface RepMatter {
  title: string;
  items: string[];
}

/* ────── Sub-components ────── */
function TimelineRow({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative pl-6 space-y-4">
      <div className="absolute top-1 left-[5px] bottom-1 w-px bg-gradient-to-b from-gold/30 via-gold/15 to-transparent" />
      {items.map((t, i) => (
        <div key={i} className="relative flex items-start gap-4">
          <div className="absolute -left-6 top-[7px] w-[11px] h-[11px] rounded-full border-2 border-gold/40 bg-white" />
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
            <span className="text-xs font-serif text-gold-dark/70 whitespace-nowrap font-medium">{t.year}</span>
            <span className="text-[14px] text-gray-700 leading-relaxed">{t.desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function PracticeAreaGrid({ areas }: { areas: PracticeArea[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {areas.map((area, i) => (
        <div key={i} className="bg-cream/70 rounded-md p-5 border border-cream-dark/50 hover:border-gold/20 transition-colors duration-300">
          <h5 className="font-bold text-navy mb-3 text-sm font-serif flex items-center gap-2">
            <div className="w-0.5 h-4 bg-gold/40" />
            {area.title}
          </h5>
          <ul className="space-y-1.5 text-[13px] text-gray-600 pl-3">
            {area.items.map((item, j) => (
              <li key={j} className="flex items-start gap-2">
                <span className="text-gold/40 mt-[3px] text-[10px] font-serif">&mdash;</span>
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
    <div className="space-y-5">
      {matters.map((m, i) => (
        <div key={i}>
          <h5 className="font-semibold text-navy text-sm mb-2 font-serif flex items-center gap-2">
            <div className="w-0.5 h-3.5 bg-gold/30" />
            {m.title}
          </h5>
          <ul className="space-y-1.5 text-[13px] text-gray-600 pl-6">
            {m.items.map((item, j) => (
              <li key={j} className="flex items-start gap-2">
                <span className="text-gold/30 mt-[3px] text-[10px] font-serif">&mdash;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* ────── Profile Card ────── */
function ProfileCard({
  nameKo,
  nameEn,
  photo,
  badges,
  summary,
  timeline,
  education,
  qualifications,
  practiceAreas,
  repMatters,
  expanded,
  onToggle,
  revealRef,
  revealClass,
}: {
  nameKo: string;
  nameEn: string;
  photo: string;
  badges: string[];
  summary: ReactNode;
  timeline: TimelineItem[];
  education: string[];
  qualifications: string[];
  practiceAreas: PracticeArea[];
  repMatters: RepMatter[];
  expanded: boolean;
  onToggle: () => void;
  revealRef: React.RefObject<HTMLDivElement | null>;
  revealClass: string;
}) {
  return (
    <div ref={revealRef} className={`${revealClass} mb-12`}>
      <div className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100/80 relative">
        {/* Left gold accent — always visible legal margin line */}
        <div className="absolute top-0 left-0 w-[3px] h-full bg-gold/30" />

        {/* ── Header with photo ── */}
        <div className="relative bg-gradient-to-br from-navy-dark via-navy to-navy-light/30 px-8 md:px-10 py-8 md:py-10 overflow-hidden">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "radial-gradient(circle, #c9a84c 0.5px, transparent 0.5px)",
            backgroundSize: "24px 24px",
          }} />

          {/* Top accent line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          <div className="relative flex flex-col md:flex-row md:items-center gap-6">
            {/* Profile photo */}
            <div className="shrink-0 w-28 h-28 md:w-32 md:h-32 rounded-md p-[2px] bg-gradient-to-b from-gold/30 to-gold/15 shadow-md shadow-black/15">
              <div className="w-full h-full rounded-[5px] overflow-hidden">
                <Image
                  src={photo}
                  alt={nameKo}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold font-serif text-gold-gradient mb-1.5">
                    {nameKo}
                  </h3>
                  <p className="text-sm text-gray-300/70 font-light tracking-wide">{nameEn}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {badges.map((b, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-4 py-1.5 rounded-none bg-white/[0.06] text-gold/70 border border-gold/20 font-medium font-serif"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 mb-8">
            {/* Left: Summary */}
            <div>
              <h4 className="text-[11px] font-bold text-navy/40 tracking-wider uppercase mb-5 flex items-center gap-2 font-serif">
                <div className="w-4 h-px bg-gold/30" />
                Professional Summary
              </h4>
              {summary}
            </div>

            {/* Right: Experience + Education */}
            <div className="space-y-8">
              <div>
                <h4 className="text-[11px] font-bold text-navy/40 tracking-wider uppercase mb-5 flex items-center gap-2 font-serif">
                  <div className="w-4 h-px bg-gold/30" />
                  경력 | Experience
                </h4>
                <TimelineRow items={timeline} />
              </div>
              <div>
                <h4 className="text-[11px] font-bold text-navy/40 tracking-wider uppercase mb-5 flex items-center gap-2 font-serif">
                  <div className="w-4 h-px bg-gold/30" />
                  학력 | Education
                </h4>
                <div className="space-y-2 text-[14px] text-gray-700">
                  {education.map((e, i) => (
                    <p key={i}>{e}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Qualifications */}
          <div className="flex flex-wrap items-center gap-2 mb-8 pb-8 border-b border-gray-100">
            <span className="text-[11px] text-gray-400 font-medium uppercase tracking-wider mr-2 font-serif">
              자격
            </span>
            {qualifications.map((q, i) => (
              <span
                key={i}
                className="text-[12px] px-3.5 py-1.5 rounded-sm bg-navy text-gold/70 font-medium font-serif"
              >
                {q}
              </span>
            ))}
          </div>

          {/* Toggle */}
          <button
            onClick={onToggle}
            className="group flex items-center gap-2.5 text-sm text-gold-dark hover:text-gold font-medium transition-colors"
          >
            <span className="w-8 h-8 rounded-sm bg-gold/10 flex items-center justify-center group-hover:bg-gold/15 transition-colors duration-300">
              <svg
                className={`w-4 h-4 text-gold transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="font-serif">{expanded ? "접기" : "전문 분야 및 대표 수행 업무 보기"}</span>
          </button>

          {/* Expanded content */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              expanded ? "max-h-[4000px] opacity-100 mt-8" : "max-h-0 opacity-0"
            }`}
          >
            {/* Divider on expand */}
            <div className="w-full max-w-xs mx-auto mb-8 section-divider h-px" />
            <div className="space-y-10">
              <div>
                <h4 className="text-[11px] font-bold text-navy/40 tracking-wider uppercase mb-5 flex items-center gap-2 font-serif">
                  <div className="w-4 h-px bg-gold/30" />
                  전문 분야 | Practice Areas
                </h4>
                <PracticeAreaGrid areas={practiceAreas} />
              </div>
              <div>
                <h4 className="text-[11px] font-bold text-navy/40 tracking-wider uppercase mb-5 flex items-center gap-2 font-serif">
                  <div className="w-4 h-px bg-gold/30" />
                  대표 수행 업무 | Representative Matters
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

/* ────── Main Section ────── */
export default function ProfessionalsSection() {
  const header = useReveal();
  const lee = useReveal();
  const kwon = useReveal();
  const [expandedLee, setExpandedLee] = useState(false);
  const [expandedKwon, setExpandedKwon] = useState(false);

  return (
    <section id="professionals" className="py-28 md:py-40 bg-cream scroll-mt-20 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(201,168,76,0.03)_0%,_transparent_70%)]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(201,168,76,0.03)_0%,_transparent_70%)]" />

      {/* Guide lines */}
      <div className="absolute top-0 left-[25%] w-px h-full bg-gradient-to-b from-transparent via-navy/[0.04] to-transparent" />
      <div className="absolute top-0 right-[25%] w-px h-full bg-gradient-to-b from-transparent via-navy/[0.04] to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <div ref={header.ref} className={`reveal ${header.visible ? "visible" : ""} mb-16 md:mb-20`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-gold/60 to-gold/10" />
            <span className="text-[11px] tracking-[0.2em] text-gold-dark/70 font-serif font-semibold small-caps">
              Professionals
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-navy">
            구성원
          </h2>
        </div>

        {/* ── 이승헌 ── */}
        <ProfileCard
          revealRef={lee.ref}
          revealClass={`reveal ${lee.visible ? "visible" : ""}`}
          nameKo="이승헌"
          nameEn="Sean (Seunghun) Lee"
          photo="/photos/lee-seunghun.jpg"
          badges={["변리사", "미국변호사 (Illinois)"]}
          summary={
            <ul className="space-y-3 text-[14px] text-gray-700 leading-relaxed">
              {[
                "20년 국제 IP 분쟁 전문 경력 (김·장 법률사무소 해외분쟁팀장 역임)",
                "80+ 미국·독일·유럽 법원 소송, ITC 소송 및 협상 수행",
                "100+ 미국 소송, 해외 정부조사 디스커버리 프로젝트 수행",
                "배터리·신재생에너지·바이오·반도체·전기전자 첨단기술 분야 특화",
              ].map((s, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-gold/40 mt-[3px] flex-shrink-0 text-[10px] font-serif">&mdash;</span>
                  {s}
                </li>
              ))}
            </ul>
          }
          timeline={[
            { year: "2026 – 현재", desc: "프로앤팀 특허사무소 대표변리사" },
            { year: "2015 – 2026", desc: "김·장 법률사무소 해외분쟁팀장" },
            { year: "2006 – 2015", desc: "김·장 법률사무소 전자부" },
          ]}
          education={[
            "UCLA School of Law, LL.M. (2014)",
            "한국방송통신대학교 법학과 (2012)",
            "서울대학교 전기공학부 (2006)",
          ]}
          qualifications={["미국변호사 (Illinois)", "변리사"]}
          practiceAreas={[
            {
              title: "국제 IP 소송 및 분쟁 대응",
              items: [
                "미국 ITC 및 연방지방법원 특허/영업비밀 소송",
                "독일 특허법원 소송 및 유럽 특허 opposition",
                "해외 정부기관(NHTSA, CPSC, ACCC) 조사 대응",
              ],
            },
            {
              title: "디스커버리 및 내부조사",
              items: [
                "100+ 미국 IP 소송 e-discovery 관리 및 전략 수립",
                "영업비밀 유출 및 형사 사건 관련 내부조사 수행",
                "Relativity 기반 대규모 문서 검토 총괄",
              ],
            },
            {
              title: "IP 라이선스 및 협상",
              items: [
                "미국·유럽 특허 분쟁 해결 라이선스 협상 및 계약 체결",
                "공작기계, 수소, 철강, 3D 의료기기, IT 플랫폼, 전기차 신소재, 스포츠 장비 등 다분야 협상 경험",
              ],
            },
            {
              title: "한국 특허 분쟁 및 심판",
              items: [
                "특허침해소송, 권리범위확인심판, 무효심판",
                "무선통신, 의료기기, 광학, 게임, 모바일 기술 등",
              ],
            },
          ]}
          repMatters={[
            {
              title: "첨단 기술 분야 국제 소송",
              items: [
                "전기화학 기술: 미국 영업비밀 소송, ITC 특허소송",
                "신재생에너지: 미국·유럽 특허 소송, ITC 특허소송",
                "3D 의료장비: 독일 특허소송, 유럽 opposition",
                "바이오: 미국 영업비밀 소송",
                "광학·전기차 신소재: 미국 ITC 및 연방법원 소송",
              ],
            },
            {
              title: "정부조사 및 규제 대응",
              items: [
                "전기화학: 미국 NHTSA, 호주 ACCC 조사",
                "차량용품·가전: 미국 NHTSA, CPSC 조사",
              ],
            },
            {
              title: "글로벌 IP 전략 자문",
              items: [
                "한국 주요 기업 대상 해외 IP 분쟁 대응 전략 강연 (수십회)",
                "사내 IP 정책 수립 및 공격용 특허 포트폴리오 구축",
                "베트남·인도 특허 분쟁 자문",
              ],
            },
          ]}
          expanded={expandedLee}
          onToggle={() => setExpandedLee(!expandedLee)}
        />

        {/* ── 권오진 ── */}
        <ProfileCard
          revealRef={kwon.ref}
          revealClass={`reveal ${kwon.visible ? "visible" : ""}`}
          nameKo="권오진"
          nameEn="Ojin Kwon"
          photo="/photos/kwon-ojin.jpg"
          badges={["미국변호사 (Washington, D.C.)"]}
          summary={
            <ul className="space-y-3 text-[14px] text-gray-700 leading-relaxed">
              {[
                "32년 국제 IP 분쟁·소송용 특허 만들기·IP계약 경력",
                "100+ 해외 특허분쟁/소송/협상 담당",
                "200+ 라이센스·IP Indemnity·공동개발 계약 담당",
                "다수의 수익화·소송용 특허만들기 및 특허 컨설팅 프로젝트 담당",
                "다수의 특허거래 담당",
                "100+ 특허 강연 (경영진·연구원·IP팀·구매팀·영업팀 대상)",
              ].map((s, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-gold/40 mt-[3px] flex-shrink-0 text-[10px] font-serif">&mdash;</span>
                  {s}
                </li>
              ))}
            </ul>
          }
          timeline={[
            { year: "2026 – 현재", desc: "프로앤팀 특허사무소 미국변호사 (Washington, D.C.)" },
            { year: "2017 – 2026", desc: "김·장 법률사무소 특허부" },
            { year: "2015 – 2017", desc: "서울반도체 특허팀장" },
            { year: "2015", desc: "KCC 특허팀장" },
            { year: "1994 – 2013", desc: "삼성전기 라이센싱 파트장" },
          ]}
          education={[
            "Indiana University School of Law, LL.M. (2014)",
            "한국방송통신대학교 법학과 (2012)",
            "경북대학교 전자공학과 (1994)",
          ]}
          qualifications={["미국변호사 (Washington, D.C.)"]}
          practiceAreas={[
            {
              title: "국제 IP 소송 및 분쟁 대응",
              items: [
                "미국 ITC 및 연방지방법원, 독일·일본 특허 소송",
                "미·독·이·일·영·캐·핀·중·네·룩 기업들과의 특허분쟁",
              ],
            },
            {
              title: "기업 특허전략 컨설팅",
              items: [
                "다수 대기업 특허조직 운영 및 업무 전략 컨설팅",
                "다수 중소기업·스타트업의 보유특허 분석 및 품질향상",
                "공격특허 확보를 위한 업무 프로세스 구축",
              ],
            },
            {
              title: "IP 라이선스 및 협상",
              items: [
                "미·유·일·중·핀 라이선스 협상 및 계약 체결",
                "전자부품, 타이어, 기계, 소재, 에너지, 광학, 소프트웨어, 철강 등",
              ],
            },
            {
              title: "IP 분야 계약",
              items: [
                "100건 이상의 IP Indemnity 계약서 작성 및 협상",
                "50건 이상의 국내,외 공동개발계약 작성 및 협상",
              ],
            },
            {
              title: "특허거래",
              items: [
                "기업 근무 시, 다수의 특허매입·매각",
                "김앤장법률사무소에서 특허거래 담당",
                "기술거래사 (2024) / 기술사업가치평가사 (2018)",
              ],
            },
            {
              title: "기술특례상장",
              items: ["스타트업 특허확보 전략 컨설팅"],
            },
          ]}
          repMatters={[
            {
              title: "해외 특허소송 및 경고장 대응",
              items: [
                "전자부품: 미국 ITC 특허소송, 일본 소송",
                "소재 기술: 미국 특허 소송",
                "기계: 미국 특허소송",
                "장비: 독일 특허소송",
                "자동차 부품: 독일 소송",
                "100+ 해외 경고장 대응",
              ],
            },
            {
              title: "사업성공을 위한 기업의 특허전략 컨설팅",
              items: [
                "국내 5대그룹의 일부 계열사들에 특허전략 컨설팅 수행",
                "다수의 중견·중소·스타트업 대상 특허현황 진단 및 공격용 특허만들기 컨설팅",
              ],
            },
            {
              title: "협상 및 계약",
              items: [
                "라이선스 계약, 공동개발계약, IP Indemnity 계약서 작성 및 협상 (100+)",
              ],
            },
            {
              title: "특허거래",
              items: [
                "기업 근무 시, 전자부품 및 광학기술 특허매입 및 판매",
                "김앤장법률사무소에서, 첨단 기술분야 특허거래 담당",
                "특허거래를 위한 특허가치평가",
              ],
            },
            {
              title: "특허 강연",
              items: ["12개의 특허관련 주제로, 100회 강연"],
            },
          ]}
          expanded={expandedKwon}
          onToggle={() => setExpandedKwon(!expandedKwon)}
        />
      </div>
    </section>
  );
}
