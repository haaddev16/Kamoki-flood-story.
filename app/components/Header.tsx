export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-warn/30 bg-ink/95 px-6 py-4 backdrop-blur md:px-16 lg:pl-32">
      <div className="flex items-center gap-2">
        <span className="text-warn" aria-hidden="true">
          {/* simple house glyph */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 11.5L12 4l9 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.5 10v9a1 1 0 0 0 1 1H9a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1v-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <span className="font-mono text-sm uppercase tracking-[0.25em] text-warn">
          Kamoki Record
        </span>
      </div>
    </header>
  );
}
