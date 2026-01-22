// Header.tsx
export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur">
      <div className="container-wide flex h-16 items-center justify-between">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-3">
          <img
            src="/images/feeds-mark-core.svg"
            alt="FeedBar"
            className="h-7 w-auto md:h-8"
          />
          <span className="text-sm font-semibold tracking-tight text-white md:text-base">
            FeedBar
          </span>
        </a>

        {/* Right cluster */}
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

          <a
            href="#notify"
            className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/15 transition-colors"
          >
            Join waitlist
          </a>
        </div>
      </div>
    </header>
  );
}
