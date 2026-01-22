import { IS_LIVE, PADDLE_CHECKOUT_URL, PRICE } from '../config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  'All current features',
  'All 1.x updates included',
  'No subscription required',
  'Works offline after activation',
];

export default function Pricing() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>();

  const handleCTAClick = () => {
    if (IS_LIVE) {
      window.open(PADDLE_CHECKOUT_URL, '_blank');
    } else {
      document.getElementById('notify')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-gray-50" ref={sectionRef}>
      <div className="container-narrow">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand-950 tracking-tight">
            Simple pricing
          </h2>
          <p className="mt-4 text-brand-600">
            One price. One purchase. Forever yours.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className={`bg-white rounded-2xl border border-brand-200 p-8 lg:p-10 shadow-xl shadow-brand-900/5 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
            {/* Price */}
            <div className="text-center">
              <span className="text-sm font-medium text-brand-500 uppercase tracking-wider">
                One-time purchase
              </span>
              <div className="mt-4 flex items-baseline justify-center gap-1">
                <span className="text-5xl font-semibold text-brand-950">{PRICE}</span>
              </div>
              <p className="mt-2 text-sm text-brand-500">
                Pay once, own forever
              </p>
            </div>

            {/* Features */}
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
                  <span className="text-brand-700">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={handleCTAClick}
              className="mt-10 w-full py-4 bg-brand-900 text-brand-50 font-medium rounded-xl hover:bg-brand-800 transition-colors"
            >
              {IS_LIVE ? `Buy for ${PRICE}` : 'Join waitlist'}
            </button>

            {/* Trust line */}
            <p className="mt-6 text-center text-sm text-brand-500">
              No subscriptions. No tracking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
