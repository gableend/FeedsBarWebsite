import { useState } from 'react';
import { IS_LIVE, PADDLE_CHECKOUT_URL } from '../config';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCTAClick = () => {
    if (IS_LIVE) {
      window.open(PADDLE_CHECKOUT_URL, '_blank');
    } else {
      document.getElementById('notify')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm">
      <div className="container-wide">
        <nav className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <img
              src="/images/feeds-mark-core.svg"
              alt="FeedBar"
              className="h-14 w-auto"
            />
            <span className="text-lg font-semibold text-white group-hover:text-white transition-colors">
              FeedBar
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              Pricing
            </a>
            <a
              href="#trust"
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              Trust
            </a>
            <button
              onClick={handleCTAClick}
              className="px-5 py-2.5 bg-[#4a7dff] text-white text-sm font-medium rounded-lg hover:bg-[#3a66ff] transition-colors"
            >
              {IS_LIVE ? 'Buy' : 'Join waitlist'}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 fade-in bg-black">
            <div className="flex flex-col gap-4">
              <a
                href="#features"
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                Pricing
              </a>
              <a
                href="#trust"
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                Trust
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleCTAClick();
                }}
                className="w-full px-5 py-2.5 bg-[#4a7dff] text-white text-sm font-medium rounded-lg hover:bg-[#3a66ff] transition-colors"
              >
                {IS_LIVE ? 'Buy' : 'Join waitlist'}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
