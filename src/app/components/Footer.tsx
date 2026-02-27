export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-gold/10 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-gold font-semibold text-sm tracking-wide mb-1">
            Pro &amp; Team IP Law Firm
          </p>
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} 프로앤팀 특허사무소. All rights reserved.
          </p>
        </div>
        <a
          href="#hero"
          className="text-xs text-gray-500 hover:text-gold transition-colors flex items-center gap-1"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 rotate-180">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
          Back to Top
        </a>
      </div>
    </footer>
  );
}
