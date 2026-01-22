import { IS_LIVE, PADDLE_CHECKOUT_URL } from '../config';

const valueBullets = [
  'Ambient awareness, not alerts',
  'Curated, high-quality sources',
  'Topic Orbs with live keywords',
  'Buy once. Own it.',
];

export default function Hero() {
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
            <h1 className="text-4xl lg:text-5xl font-semibold text-brand-950 leading-tight tracking-tight">
              Stay informed without being interrupted.
            </h1>
            <p className="mt-6 text-lg text-brand-600 leading-relaxed max-w-lg fade-in-up" style={{ animationDelay: '0.1s' }}>
              FeedBar brings high-signal headlines and topics to your Mac desktop, quietly, continuously, and without subscriptions.
            </p>

            {/* Value bullets */}
            <ul className="mt-8 space-y-3">
              {valueBullets.map((bullet, index) => (
                <li
                  key={bullet}
                  className="flex items-center gap-3 text-brand-700 fade-in-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-sm">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4 fade-in-up" style={{ animationDelay: '0.5s' }}>
              <button
                onClick={handleCTAClick}
                className="px-8 py-3.5 bg-brand-900 text-brand-50 font-medium rounded-lg hover:bg-brand-800 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {IS_LIVE ? 'Buy for €24.99' : 'Join waitlist'}
              </button>
              <a
                href="#how-it-works"
                className="text-sm text-brand-600 hover:text-brand-900 transition-colors underline underline-offset-4"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* Product visual */}
          <div className="slide-in-right lg:pl-8" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Placeholder for hero.gif - replace with actual screenshot */}
              <div className="bg-brand-900 rounded-xl overflow-hidden shadow-2xl shadow-brand-900/20">
                {/* macOS menu bar */}
                <div className="h-7 bg-brand-800 flex items-center justify-between px-4">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                    </div>
                    <span className="text-[10px] text-brand-300 font-medium">FeedBar</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                      <span className="text-[9px] text-brand-200">AI</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      <span className="text-[9px] text-brand-200">Fed</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="text-[9px] text-brand-200">Policy</span>
                    </div>
                  </div>
                </div>

                {/* Feed dropdown */}
                <div className="p-4">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Header */}
                    <div className="px-4 py-3 border-b border-brand-200 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-400" />
                        <span className="text-sm font-medium text-brand-900">Tech</span>
                      </div>
                      <span className="text-xs text-brand-400">Updated 2m ago</span>
                    </div>

                    {/* Feed items */}
                    <div className="divide-y divide-brand-100">
                      <div className="px-4 py-3 hover:bg-brand-100/50">
                        <p className="text-sm text-brand-800 font-medium">OpenAI announces GPT-5 preview</p>
                        <p className="text-xs text-brand-500 mt-1">The Verge</p>
                      </div>
                      <div className="px-4 py-3 hover:bg-brand-100/50">
                        <p className="text-sm text-brand-800 font-medium">Apple Vision Pro sales exceed forecasts</p>
                        <p className="text-xs text-brand-500 mt-1">Bloomberg</p>
                      </div>
                      <div className="px-4 py-3 hover:bg-brand-100/50">
                        <p className="text-sm text-brand-800 font-medium">Stripe reaches $100B valuation</p>
                        <p className="text-xs text-brand-500 mt-1">TechCrunch</p>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="px-4 py-2 bg-white border-t border-brand-200">
                      <span className="text-xs text-brand-400">3 of 12 headlines</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating orb decorations */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-blue-400/20 to-emerald-400/20 blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-br from-accent/15 to-amber-400/15 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
