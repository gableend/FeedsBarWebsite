import { useScrollAnimation } from '../hooks/useScrollAnimation';

const trustPoints = [
  {
    title: 'No ads',
    description: 'Your attention is not our product. Ever.',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M4.93 4.93l14.14 14.14" />
      </svg>
    ),
  },
  {
    title: 'No tracking',
    description: "We don't collect usage data, analytics, or behavior patterns.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'No account required',
    description: 'Download, activate, done. No accounts. No sign-ups.',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="M16 3l2 2-4 4" />
      </svg>
    ),
  },
];

export default function Trust() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="trust" className="py-20 lg:py-28" ref={sectionRef}>
      <div className="container-wide">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand-900 tracking-tight">
            Trust & privacy
          </h2>
          <p className="mt-4 text-neutral-600 max-w-lg mx-auto">
            FeedsBar is a tool you own, not a service that owns your data.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {trustPoints.map((point, index) => (
            <div
              key={point.title}
              className={`p-6 bg-white rounded-xl border border-neutral-200 transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 mb-4">
                {point.icon}
              </div>
              <h3 className="text-lg font-semibold text-brand-900 mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
