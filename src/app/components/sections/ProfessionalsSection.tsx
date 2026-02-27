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

export default function ProfessionalsSection() {
  const header = useReveal();
  const lee = useReveal();
  const kwon = useReveal();
  const [expandedLee, setExpandedLee] = useState(false);
  const [expandedKwon, setExpandedKwon] = useState(false);

  return (
    <section id="professionals" className="py-20 md:py-28 bg-cream scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div ref={header.ref} className={`reveal ${header.visible ? "visible" : ""} mb-14`}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-px bg-gold" />
            <span className="text-xs tracking-[0.2em] uppercase text-gold-dark font-medium">Professionals</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">구성원</h2>
        </div>

        {/* 이승헌 */}
        <div ref={lee.ref} className={`reveal ${lee.visible ? "visible" : ""} mb-12`}>
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* Name header */}
            <div className="bg-navy px-8 py-6">
              <h3 className="text-2xl font-bold text-gold mb-1">이승헌</h3>
              <p className="text-sm text-gray-300">Sean (Seunghun) Lee</p>
              <div className="flex flex-wrap gap-3 mt-3">
                <span className="text-xs px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/20">변리사</span>
                <span className="text-xs px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/20">미국변호사 (Illinois)</span>
              </div>
            </div>

            <div className="p-8">
              {/* Summary + Experience side by side on desktop */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Professional Summary */}
                <div>
                  <h4 className="text-sm font-bold text-navy mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                    Professional Summary
                  </h4>
                  <ul className="space-y-2.5 text-[15px] text-gray-700 leading-relaxed">
                    <li className="flex items-start gap-2.5">
                      <span className="text-gold mt-0.5 flex-shrink-0 text-xs">&#9679;</span>
                      20년 국제 IP 분쟁 전문 경력 (김·장 법률사무소 해외분쟁팀장 역임)
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-gold mt-0.5 flex-shrink-0 text-xs">&#9679;</span>
                      80+ 미국·독일·유럽 법원 소송, ITC 소송 및 협상 수행
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-gold mt-0.5 flex-shrink-0 text-xs">&#9679;</span>
                      100+ 미국 소송, 해외 정부조사 디스커버리 프로젝트 수행
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-gold mt-0.5 flex-shrink-0 text-xs">&#9679;</span>
                      배터리·신재생에너지·바이오·반도체·전기전자 첨단기술 분야 특화
                    </li>
                  </ul>
                </div>

                {/* Experience + Education */}
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-bold text-navy mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                      경력 | Experience
                    </h4>
                    <div className="space-y-2.5 text-[15px]">
                      <div className="flex items-start gap-3">
                        <span className="text-xs font-mono text-gold-dark w-24 flex-shrink-0 pt-0.5">2026 – 현재</span>
                        <span className="text-gray-700">프로앤팀 특허사무소 대표변리사</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-xs font-mono text-gold-dark w-24 flex-shrink-0 pt-0.5">2015 – 2026</span>
                        <span className="text-gray-700">김·장 법률사무소 해외분쟁팀장</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-xs font-mono text-gold-dark w-24 flex-shrink-0 pt-0.5">2006 – 2015</span>
                        <span className="text-gray-700">김·장 법률사무소 전자부</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                      학력 | Education
                    </h4>
                    <div className="space-y-1.5 text-[15px] text-gray-700">
                      <p>UCLA School of Law, LL.M. (2014)</p>
                      <p>한국방송통신대학교 법학과 (2012)</p>
                      <p>서울대학교 전기공학부 (2006)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Toggle button */}
              <button
                onClick={() => setExpandedLee(!expandedLee)}
                className="text-sm text-gold-dark hover:text-gold font-medium transition-colors flex items-center gap-1"
              >
                {expandedLee ? "접기" : "자세히 보기"}
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${expandedLee ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20" fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>

              {/* Expanded content */}
              <div className={`overflow-hidden transition-all duration-500 ${expandedLee ? "max-h-[2000px] opacity-100 mt-8" : "max-h-0 opacity-0"}`}>
                {/* Practice Areas */}
                <h4 className="text-sm font-bold text-navy mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  전문 분야 | Practice Areas
                </h4>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-cream rounded-lg p-5">
                    <h5 className="font-bold text-navy mb-2 text-sm">국제 IP 소송 및 분쟁 대응</h5>
                    <ul className="space-y-1.5 text-sm text-gray-600">
                      <li>• 미국 ITC 및 연방지방법원 특허/영업비밀 소송</li>
                      <li>• 독일 특허법원 소송 및 유럽 특허 opposition</li>
                      <li>• 해외 정부기관(NHTSA, CPSC, ACCC) 조사 대응</li>
                    </ul>
                  </div>
                  <div className="bg-cream rounded-lg p-5">
                    <h5 className="font-bold text-navy mb-2 text-sm">디스커버리 및 내부조사</h5>
                    <ul className="space-y-1.5 text-sm text-gray-600">
                      <li>• 100+ 미국 IP 소송 e-discovery 관리 및 전략 수립</li>
                      <li>• 영업비밀 유출 및 형사 사건 관련 내부조사 수행</li>
                      <li>• Relativity 기반 대규모 문서 검토 총괄</li>
                    </ul>
                  </div>
                  <div className="bg-cream rounded-lg p-5">
                    <h5 className="font-bold text-navy mb-2 text-sm">IP 라이선스 및 협상</h5>
                    <ul className="space-y-1.5 text-sm text-gray-600">
                      <li>• 미국·유럽 특허 분쟁 해결 라이선스 협상 및 계약 체결</li>
                      <li>• 공작기계, 수소, 철강, 3D 의료기기, IT 플랫폼, 전기차 신소재, 스포츠 장비 등 다분야 협상 경험</li>
                    </ul>
                  </div>
                  <div className="bg-cream rounded-lg p-5">
                    <h5 className="font-bold text-navy mb-2 text-sm">한국 특허 분쟁 및 심판</h5>
                    <ul className="space-y-1.5 text-sm text-gray-600">
                      <li>• 특허침해소송, 권리범위확인심판, 무효심판</li>
                      <li>• 무선통신, 의료기기, 광학, 게임, 모바일 기술 등</li>
                    </ul>
                  </div>
                </div>

                {/* Representative Matters */}
                <h4 className="text-sm font-bold text-navy mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  대표 수행 업무 | Representative Matters
                </h4>
                <div className="space-y-5 mb-6">
                  <div>
                    <h5 className="font-semibold text-navy text-sm mb-2">첨단 기술 분야 국제 소송</h5>
                    <ul className="space-y-1 text-sm text-gray-600 ml-4">
                      <li>• 전기화학 기술: 미국 영업비밀 소송, ITC 특허소송</li>
                      <li>• 신재생에너지: 미국·유럽 특허 소송, ITC 특허소송</li>
                      <li>• 3D 의료장비: 독일 특허소송, 유럽 opposition</li>
                      <li>• 바이오: 미국 영업비밀 소송</li>
                      <li>• 광학·전기차 신소재: 미국 ITC 및 연방법원 소송</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-navy text-sm mb-2">정부조사 및 규제 대응</h5>
                    <ul className="space-y-1 text-sm text-gray-600 ml-4">
                      <li>• 전기화학: 미국 NHTSA, 호주 ACCC 조사</li>
                      <li>• 차량용품·가전: 미국 NHTSA, CPSC 조사</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-navy text-sm mb-2">글로벌 IP 전략 자문</h5>
                    <ul className="space-y-1 text-sm text-gray-600 ml-4">
                      <li>• 한국 주요 기업 대상 해외 IP 분쟁 대응 전략 강연 (수십회)</li>
                      <li>• 사내 IP 정책 수립 및 공격용 특허 포트폴리오 구축</li>
                      <li>• 베트남·인도 특허 분쟁 자문</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 권오진 */}
        <div ref={kwon.ref} className={`reveal ${kwon.visible ? "visible" : ""}`}>
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* Name header */}
            <div className="bg-navy px-8 py-6">
              <h3 className="text-2xl font-bold text-gold mb-1">권오진</h3>
              <p className="text-sm text-gray-300">Ojin Kwon</p>
              <div className="flex flex-wrap gap-3 mt-3">
                <span className="text-xs px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/20">미국변호사 (Washington, D.C.)</span>
              </div>
            </div>

            <div className="p-8">
              {/* Summary + Experience side by side on desktop */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Professional Summary */}
                <div>
                  <h4 className="text-sm font-bold text-navy mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                    Professional Summary
                  </h4>
                  <ul className="space-y-2.5 text-[15px] text-gray-700 leading-relaxed">
                    <li className="flex items-start gap-2.5">
                      <span className="text-gold mt-0.5 flex-shrink-0 text-xs">&#9679;</span>
                      32년 국제 IP 분쟁·소송용 특허 만들기·IP계약 경력
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-gold mt-0.5 flex-shrink-0 text-xs">&#9679;</span>
                      100+ 해외 특허분쟁/소송/협상 담당
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-gold mt-0.5 flex-shrink-0 text-xs">&#9679;</span>
                      200+ 라이센스·IP Indemnity·공동개발 계약 담당
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-gold mt-0.5 flex-shrink-0 text-xs">&#9679;</span>
                      다수의 수익화·소송용 특허만들기 및 특허 컨설팅 프로젝트 담당
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-gold mt-0.5 flex-shrink-0 text-xs">&#9679;</span>
                      다수의 특허거래 담당
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-gold mt-0.5 flex-shrink-0 text-xs">&#9679;</span>
                      100+ 특허 강연 (경영진·연구원·IP팀·구매팀·영업팀 대상)
                    </li>
                  </ul>
                </div>

                {/* Experience + Education */}
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-bold text-navy mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                      경력 | Experience
                    </h4>
                    <div className="space-y-2.5 text-[15px]">
                      <div className="flex items-start gap-3">
                        <span className="text-xs font-mono text-gold-dark w-24 flex-shrink-0 pt-0.5">2026 – 현재</span>
                        <span className="text-gray-700">프로앤팀 특허사무소 미국변호사 (Washington, D.C.)</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-xs font-mono text-gold-dark w-24 flex-shrink-0 pt-0.5">2017 – 2026</span>
                        <span className="text-gray-700">김·장 법률사무소 특허부</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-xs font-mono text-gold-dark w-24 flex-shrink-0 pt-0.5">2015 – 2017</span>
                        <span className="text-gray-700">서울반도체 특허팀장</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-xs font-mono text-gold-dark w-24 flex-shrink-0 pt-0.5">2015</span>
                        <span className="text-gray-700">KCC 특허팀장</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-xs font-mono text-gold-dark w-24 flex-shrink-0 pt-0.5">1994 – 2013</span>
                        <span className="text-gray-700">삼성전기 라이센싱 파트장</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                      학력 | Education
                    </h4>
                    <div className="space-y-1.5 text-[15px] text-gray-700">
                      <p>Indiana University School of Law, LL.M. (2014)</p>
                      <p>한국방송통신대학교 법학과 (2012)</p>
                      <p>경북대학교 전자공학과 (1994)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Toggle button */}
              <button
                onClick={() => setExpandedKwon(!expandedKwon)}
                className="text-sm text-gold-dark hover:text-gold font-medium transition-colors flex items-center gap-1"
              >
                {expandedKwon ? "접기" : "자세히 보기"}
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${expandedKwon ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20" fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>

              {/* Expanded content */}
              <div className={`overflow-hidden transition-all duration-500 ${expandedKwon ? "max-h-[3000px] opacity-100 mt-8" : "max-h-0 opacity-0"}`}>
                {/* Practice Areas */}
                <h4 className="text-sm font-bold text-navy mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  전문 분야 | Practice Areas
                </h4>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-cream rounded-lg p-5">
                    <h5 className="font-bold text-navy mb-2 text-sm">국제 IP 소송 및 분쟁 대응</h5>
                    <ul className="space-y-1.5 text-sm text-gray-600">
                      <li>• 미국 ITC 및 연방지방법원, 독일·일본 특허 소송</li>
                      <li>• 미·독·이·일·영·캐·핀·중·네·룩 기업들과의 특허분쟁</li>
                    </ul>
                  </div>
                  <div className="bg-cream rounded-lg p-5">
                    <h5 className="font-bold text-navy mb-2 text-sm">기업 특허전략 컨설팅</h5>
                    <ul className="space-y-1.5 text-sm text-gray-600">
                      <li>• 다수 대기업 특허조직 운영 및 업무 전략 컨설팅</li>
                      <li>• 다수 중소기업·스타트업의 보유특허 분석 및 품질향상</li>
                      <li>• 공격특허 확보를 위한 업무 프로세스 구축</li>
                    </ul>
                  </div>
                  <div className="bg-cream rounded-lg p-5">
                    <h5 className="font-bold text-navy mb-2 text-sm">IP 라이선스 및 협상</h5>
                    <ul className="space-y-1.5 text-sm text-gray-600">
                      <li>• 미·유·일·중·핀 라이선스 협상 및 계약 체결</li>
                      <li>• 전자부품, 타이어, 기계, 소재, 에너지, 광학, 소프트웨어, 철강 등</li>
                    </ul>
                  </div>
                  <div className="bg-cream rounded-lg p-5">
                    <h5 className="font-bold text-navy mb-2 text-sm">IP 분야 계약</h5>
                    <ul className="space-y-1.5 text-sm text-gray-600">
                      <li>• 100건 이상의 IP Indemnity 계약서 작성 및 협상</li>
                      <li>• 50건 이상의 국내,외 공동개발계약 작성 및 협상</li>
                    </ul>
                  </div>
                  <div className="bg-cream rounded-lg p-5">
                    <h5 className="font-bold text-navy mb-2 text-sm">특허거래</h5>
                    <ul className="space-y-1.5 text-sm text-gray-600">
                      <li>• 기업 근무 시, 다수의 특허매입·매각</li>
                      <li>• 김앤장법률사무소에서 특허거래 담당</li>
                      <li>• 기술거래사 (2024) / 기술사업가치평가사 (2018)</li>
                    </ul>
                  </div>
                  <div className="bg-cream rounded-lg p-5">
                    <h5 className="font-bold text-navy mb-2 text-sm">기술특례상장</h5>
                    <ul className="space-y-1.5 text-sm text-gray-600">
                      <li>• 스타트업 특허확보 전략 컨설팅</li>
                    </ul>
                  </div>
                </div>

                {/* Representative Matters */}
                <h4 className="text-sm font-bold text-navy mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  대표 수행 업무 | Representative Matters
                </h4>
                <div className="space-y-5 mb-6">
                  <div>
                    <h5 className="font-semibold text-navy text-sm mb-2">해외 특허소송 및 경고장 대응</h5>
                    <ul className="space-y-1 text-sm text-gray-600 ml-4">
                      <li>• 전자부품: 미국 ITC 특허소송, 일본 소송</li>
                      <li>• 소재 기술: 미국 특허 소송</li>
                      <li>• 기계: 미국 특허소송</li>
                      <li>• 장비: 독일 특허소송</li>
                      <li>• 자동차 부품: 독일 소송</li>
                      <li>• 100+ 해외 경고장 대응</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-navy text-sm mb-2">사업성공을 위한 기업의 특허전략 컨설팅</h5>
                    <ul className="space-y-1 text-sm text-gray-600 ml-4">
                      <li>• 국내 5대그룹의 일부 계열사들에 특허전략 컨설팅 수행</li>
                      <li>• 다수의 중견·중소·스타트업 대상 특허현황 진단 및 공격용 특허만들기 컨설팅</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-navy text-sm mb-2">협상 및 계약</h5>
                    <ul className="space-y-1 text-sm text-gray-600 ml-4">
                      <li>• 라이선스 계약, 공동개발계약, IP Indemnity 계약서 작성 및 협상 (100+)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-navy text-sm mb-2">특허거래</h5>
                    <ul className="space-y-1 text-sm text-gray-600 ml-4">
                      <li>• 기업 근무 시, 전자부품 및 광학기술 특허매입 및 판매</li>
                      <li>• 김앤장법률사무소에서, 첨단 기술분야 특허거래 담당</li>
                      <li>• 특허거래를 위한 특허가치평가</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-navy text-sm mb-2">특허 강연</h5>
                    <ul className="space-y-1 text-sm text-gray-600 ml-4">
                      <li>• 12개의 특허관련 주제로, 100회 강연</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
