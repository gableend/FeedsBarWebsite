import { useState, useEffect } from 'react';
import { IS_LIVE, PADDLE_CHECKOUT_URL } from '../config';

const valuePills = [
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
        {/* Copy (left-aligned, max width) */}
        <div className="fade-in-up max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-semibold text-brand-900 leading-tight tracking-tight">
            Stay informed without being interrupted.
          </h1>

          <p
            className="mt-6 text-lg text-neutral-600 leading-relaxed max-w-2xl fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            FeedBar brings high-signal headlines and topics to your Mac desktop, quietly, continuously, and without subscriptions.
          </p>

          {/* Value pills (left-aligned, calm) */}
          <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3">
            {valuePills.map((pill, index) => (
              <div
                key={pill}
                className="fade-in-up inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/60 px-3 py-1.5 text-sm text-neutral-700 backdrop-blur"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <span className="whitespace-nowrap">{pill}</span>
              </div>
            ))}
          </div>

          {/* CTAs (left-aligned) */}
          <div
            className="mt-10 flex flex-wrap items-center gap-4 fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            <button onClick={handleCTAClick} className="btn-primary">
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

        {/* Product visual (below copy, wide) */}
        <div className="mt-14 lg:mt-16" style={{ animationDelay: '0.3s' }}>
          <div className="relative mx-auto max-w-6xl">
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
                preload="metadata"
                className="w-full rounded-xl shadow-2xl shadow-brand-900/20"
                aria-label="FeedBar application demo"
              >
                <source src="/videos/FeedsBarv3.mp4" type="video/mp4" />
              </video>
            )}

            {/* Subtle glow (kept, still restrained) */}
            <div className="pointer-events-none absolute -top-6 right-10 w-28 h-28 rounded-full bg-gradient-to-br from-category-blue/15 to-category-teal/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-accent/10 to-category-gold/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
