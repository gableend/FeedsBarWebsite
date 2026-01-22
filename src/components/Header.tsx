// Header.tsx
export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur">
      <div className="container-wide flex h-16 items-center justify-between">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-2">
          <span className="flex items-center justify-center rounded-full bg-white/5 p-1.5">
            <img
              src="/images/feeds-mark-core.svg"
              alt="FeedBar"
              className="h-6 md:h-7 w-auto"
            />
          </span>
          <span className="text-sm font-semibold text-white">FeedBar</span>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
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

        {/* CTA */}
        <div className="flex items-center">
          <a href="#notify" className="btn-primary">
            Join waitlist
          </a>
        </div>
      </div>
    </header>
  );
}
