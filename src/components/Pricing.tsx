import { useEffect, useRef, useState } from 'react';
import { IS_LIVE, PADDLE_CHECKOUT_URL, PRICE } from '../config';

const features = [
  'All features at launch',
  'All 1.x updates included',
  'No subscription required',
];

export default function Pricing() {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const [runSignal, setRunSignal] = useState(false);
  const [signalEndPx, setSignalEndPx] = useState<number>(Math.round(window.innerWidth * 0.7));

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;

        // Calculate where the signal should stop:
        // right edge of the card + small offset (so it feels like it "clears" the card)
        const rect = el.getBoundingClientRect();
        const desired = rect.right + 16;

        // Clamp so the head stays visible and doesn't end off-screen
        const clamped = Math.max(80, Math.min(desired, window.innerWidth - 24));

        setSignalEndPx(Math.round(clamped));
        setRunSignal(true);
        observer.disconnect(); // run once
      },
      {
        // Later trigger. Increase to 0.65 if you still feel it’s early.
        threshold: 0.6,
        rootMargin: '0px 0px -15% 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleCTAClick = () => {
    if (IS_LIVE) {
      window.open(PADDLE_CHECKOUT_URL, '_blank');
    } else {
      document.getElementById('notify')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="relative py-20 lg:py-28 bg-gray-50 overflow-hidden">
      {/* Full-width signal layer */}
      {runSignal && (
        <div
          className="pointer-events-none absolute inset-0 overflow-visible"
          style={{ ['--pricing-signal-end' as any]: `${signalEndPx}px` }}
        >
          <div className="pricing-signal-track">
            <div className="pricing-signal-line" />
            <div className="pricing-signal-head" />
            <div className="pricing-signal-pulse" />
          </div>
        </div>
      )}

      <div className="container-narrow relative">
        <div className="text-center mb-12 transition-all duration-700 opacity-100 translate-y-0">
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand-900 tracking-tight">
            Simple pricing
          </h2>
          <p className="mt-4 text-neutral-600">
            One price. One purchase. Forever yours.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div
            ref={cardRef}
            className="relative bg-white rounded-2xl border border-neutral-200 p-8 lg:p-10
              shadow-xl shadow-brand-900/5 transition-all duration-700"
          >
            <div className="text-center">
              <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                One-time purchase
              </span>
              <div className="mt-4 flex items-baseline justify-center gap-1">
                <span className="text-5xl font-semibold text-brand-900">
                  {PRICE}
                </span>
              </div>
              <p className="mt-2 text-sm text-neutral-500">
                Pay once. Keep it open.
              </p>
            </div>

            <ul className="mt-8 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-accent flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-neutral-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button onClick={handleCTAClick} className="mt-10 w-full btn-primary">
              {IS_LIVE ? `Buy for ${PRICE}` : 'Join waitlist'}
            </button>

            <p className="mt-6 text-center text-sm text-neutral-500">
              No subscriptions. No tracking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
