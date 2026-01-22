import { useState } from "react";
import { IS_LIVE, PADDLE_CHECKOUT_URL } from "../config";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCTAClick = () => {
    if (IS_LIVE) {
      window.open(PADDLE_CHECKOUT_URL, "_blank");
    } else {
      document.getElementById("notify")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ctaLabel = IS_LIVE ? "Buy now" : "Join waitlist";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm">
      <div className="container-wide">
        <nav className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
           <img
  src="/images/feeds-mark-core.svg"
  alt="FeedsBar"
  className="h-7 w-auto"
/>
            <span className="text-lg font-semibold text-white tracking-tight">
              feeds.bar
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-4 ml-auto">
            <div className="flex items-center gap-6 mr-2">
              <a
                href="#about"
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#press"
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                Press
              </a>
            </div>

            <button
              onClick={handleCTAClick}
              className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold
                         bg-white/10 text-white border border-white/15 hover:bg-white/15 hover:border-white/25
                         transition-colors"
            >
              {ctaLabel}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-90"
            >
              <path
                d="M3 5H17"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M3 10H17"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M3 15H17"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="mt-2 rounded-2xl border border-white/10 bg-black/60 p-3">
              <a
                href="#about"
                className="block rounded-xl px-3 py-2 text-sm text-white/85 hover:text-white hover:bg-white/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#press"
                className="block rounded-xl px-3 py-2 text-sm text-white/85 hover:text-white hover:bg-white/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Press
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleCTAClick();
                }}
                className="mt-2 w-full inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold
                           bg-white/10 text-white border border-white/15 hover:bg-white/15 hover:border-white/25
                           transition-colors"
              >
                {ctaLabel}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
