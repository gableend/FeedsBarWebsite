export default function Hero() {
  return (
    <section className="pt-28 lg:pt-32">
      <div className="container-wide">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-brand-900">
            Stay informed without being interrupted.
          </h1>

          <p className="mt-6 text-lg text-brand-700 max-w-2xl">
            FeedsBar brings high-signal headlines to your Mac desktop. Quietly. Continuously.
          </p>

          {/* Pills */}
          <div className="mt-7 flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full border border-brand-200 bg-white px-4 py-2 text-sm text-brand-700">
              Ambient awareness, not alerts
            </span>
            <span className="inline-flex items-center rounded-full border border-brand-200 bg-white px-4 py-2 text-sm text-brand-700">
              Curated, high-quality sources
            </span>
            <span className="inline-flex items-center rounded-full border border-brand-200 bg-white px-4 py-2 text-sm text-brand-700">
              Topic Orbs that reflect what’s moving
            </span>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex items-center gap-6">
            <a href="#notify" className="btn-primary">
              Join waitlist
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-semibold text-brand-700 hover:text-brand-900 transition-colors"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Video underneath */}
        <div className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-brand-200 bg-black shadow-2xl">
            <video
              className="w-full h-auto"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/FeedsBarv3.png"
              aria-label="FeedsBar demo"
            >
              <source src="/videos/FeedsBarv3.mp4" type="video/mp4" />
            </video>

            {/* No-JS fallback */}
            <noscript>
              <img
                src="/images/FeedsBarv3.png"
                alt="FeedsBar demo"
                className="w-full h-auto"
              />
            </noscript>
          </div>
        </div>
      </div>
    </section>
  );
}
