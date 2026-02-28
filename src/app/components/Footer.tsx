export default function Footer() {
  return (
    <footer className="relative bg-navy-dark text-gray-400 overflow-hidden noise-overlay">
      {/* Top border gradient - animated */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="hr-gold" />

      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-gold/5 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-gold/5 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,_rgba(212,175,90,0.02)_0%,_transparent_70%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10">
        {/* Main 3-column grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-14">
          {/* Col 1: Branding + description */}
          <div>
            <p className="text-gold-gradient-static font-bold font-serif text-xl tracking-wide mb-2">
              Pro &amp; Team
            </p>
            <p className="text-[10px] text-gray-500/70 tracking-[0.2em] uppercase mb-5">
              IP Law Firm
            </p>
            <p className="text-[13px] text-gray-500 leading-relaxed max-w-xs">
              국제 IP 분쟁 전문 경력 52년의 노하우로,
              기업의 글로벌 지식재산 전략을 이끕니다.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <div className="w-8 h-px bg-gradient-to-r from-gold/40 to-transparent" />
              <span className="text-[10px] text-gold-dark/40 tracking-wider uppercase font-medium">
                Since 2026
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-[11px] text-gold-dark/60 font-semibold tracking-[0.2em] uppercase mb-6">
              Navigation
            </h4>
            <nav className="space-y-3.5">
              {[
                { href: "#about", label: "사무소 소개", en: "About Us" },
                { href: "#practice-areas", label: "주요업무", en: "Practice Areas" },
                { href: "#professionals", label: "구성원", en: "Professionals" },
                { href: "#contact", label: "연락처", en: "Contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-3 text-gray-500 hover:text-gold transition-colors duration-200"
                >
                  <span className="w-4 h-px bg-gray-700 group-hover:bg-gold/50 group-hover:w-6 transition-all duration-300" />
                  <span className="text-[13px]">{link.label}</span>
                  <span className="text-[10px] text-gray-600 tracking-wide">{link.en}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3: Contact & back to top */}
          <div>
            <h4 className="text-[11px] text-gold-dark/60 font-semibold tracking-[0.2em] uppercase mb-6">
              Contact Info
            </h4>
            <div className="space-y-4 text-[13px] text-gray-500 mb-8">
              <div className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-gold/40 shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>(추후 업데이트)</span>
              </div>
              <div className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-gold/40 shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>(추후 업데이트)</span>
              </div>
            </div>

            {/* Back to top */}
            <a
              href="#hero"
              className="btn-magnetic group inline-flex items-center gap-2.5 text-[11px] text-gray-500 hover:text-gold tracking-wider uppercase transition-colors duration-200"
            >
              <span>Back to Top</span>
              <span className="w-8 h-8 rounded-full border border-gray-700 group-hover:border-gold/40 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md group-hover:shadow-gold/10">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                  <path
                    fillRule="evenodd"
                    d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Bottom divider + copyright */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-gray-600 tracking-wide">
            &copy; {new Date().getFullYear()} 프로앤팀 특허사무소. All rights reserved.
          </p>
          <p className="text-[10px] text-gray-700 tracking-wide">
            International IP Dispute Specialists
          </p>
        </div>
      </div>
    </footer>
  );
}
