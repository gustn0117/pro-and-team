export default function Footer() {
  return (
    <footer className="relative bg-navy-dark text-gray-400 overflow-hidden">
      {/* Top border gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-gold/5 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-gold/5 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,_rgba(212,175,90,0.02)_0%,_transparent_70%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Main row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Branding */}
          <div className="text-center md:text-left">
            <p className="text-gold-gradient-static font-bold font-serif text-base tracking-wide mb-1.5">
              Pro &amp; Team
            </p>
            <p className="text-[10px] text-gray-500/70 tracking-[0.2em] uppercase">
              IP Law Firm
            </p>
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "#about", label: "사무소 소개" },
              { href: "#practice-areas", label: "주요업무" },
              { href: "#professionals", label: "Professionals" },
              { href: "#contact", label: "연락처" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="animated-underline text-[11px] text-gray-500 hover:text-gold tracking-wider uppercase transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 text-[11px] text-gray-500 hover:text-gold tracking-wider uppercase transition-colors duration-200"
          >
            <span>Back to Top</span>
            <span className="w-8 h-8 rounded-full border border-gray-700 group-hover:border-gold/40 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-0.5">
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

        {/* Bottom divider + copyright */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent mb-6" />
        <p className="text-center text-[10px] text-gray-600 tracking-wide">
          &copy; {new Date().getFullYear()} 프로앤팀 특허사무소. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
