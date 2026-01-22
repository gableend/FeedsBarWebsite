// Header.tsx
export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur">
      <div className="container-wide flex h-16 items-center justify-between">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-3">
          {/* Slightly bolder mark treatment without changing the SVG */}
          <span className="flex items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 shadow-sm">
            <span className="px-2.5 py-2">
              <img
                src="/images/feeds-mark-core.svg"
                alt="FeedBar"
                className="h-7 w-auto md:h-8"
              />
            </span>
          </span>

          <span className="text-sm font-semibold tracking-tight text-white md:text-base">
            FeedBar
          </span>
        </a>

        {/* Right cluster: nav + CTA kept together */}
        <div className="flex items-center gap-4 md:gap-6">
          <nav className="hidden items-center gap-5 md:flex">
            <a
              href="#about"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#press"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Press
            </a>
          </nav>

          <a href="#notify" className="btn-primary">
            Join waitlist
          </a>
        </div>
      </div>
    </header>
  );
}
