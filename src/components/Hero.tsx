import { useState, useEffect } from 'react';
import { IS_LIVE, PADDLE_CHECKOUT_URL } from '../config';

const valueBullets = [
  'Ambient awareness, not alerts',
  'Curated, high-quality sources',
  'Topic Orbs with rotating keywords',
];

export default function Hero() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleCTAClick = () => {
    if (IS_LIVE) {
      window.open(PADDLE_CHECKOUT_URL, '_blank');
    } else {
      document.getElementById('notify')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-semibold text-brand-900 leading-tight tracking-tight">
              Stay informed without being interrupted.
            </h1>
            <p className="mt-6 text-lg text-neutral-600 leading-relaxed max-w-lg fade-in-up" style={{ animationDelay: '0.1s' }}>
              FeedBar brings high-signal headlines and topics to your Mac desktop, quietly, continuously, and without subscriptions.
            </p>

            {/* Value bullets */}
            <ul className="mt-8 space-y-3">
              {valueBullets.map((bullet, index) => (
                <li
                  key={bullet}
                  className="flex items-center gap-3 text-neutral-700 fade-in-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 flex-shrink-0" />
                  <span className="text-sm">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4 fade-in-up" style={{ animationDelay: '0.5s' }}>
              <button
                onClick={handleCTAClick}
                className="btn-primary"
              >
                {IS_LIVE ? 'Buy for €24.99' : 'Join waitlist'}
              </button>
              <a
                href="#how-it-works"
                className="text-sm text-neutral-600 hover:text-accent hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:rounded transition-colors"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* Product visual */}
          <div className="slide-in-right lg:pl-8" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Hero video with reduced-motion fallback */}
              {prefersReducedMotion ? (
                <img
                  src="/images/FeedsBarv3.png"
                  alt="FeedBar application interface"
                  className="w-full rounded-xl shadow-2xl shadow-brand-900/20"
                />
              ) : (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-xl shadow-2xl shadow-brand-900/20"
                  aria-label="FeedBar application demo"
                >
                  <source src="/videos/FeedsBarv3.mp4" type="video/mp4" />
                </video>
              )}

              {/* Floating orb decorations */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-category-blue/20 to-category-teal/20 blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-br from-accent/15 to-category-gold/15 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
