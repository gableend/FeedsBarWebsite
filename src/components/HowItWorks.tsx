import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    number: '01',
    title: 'Choose your topics',
    description:
      'Pick from curated topic feeds designed to surface what matters most. News, tech, finance, science, and more.',
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
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Let FeedsBar run quietly',
    description:
      'FeedsBar sits discreetly on your desktop — above the Dock or below the menu bar, your choice. It updates continuously in the background. No notifications. No interruptions.',
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
        {/* horizontal bar */}
        <rect x="3" y="11" width="18" height="2" rx="1" />
        {/* indicator dot */}
        <circle cx="9" cy="12" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Stay informed at a glance',
    description:
      "Glance at your Orbs to see what’s moving right now. Click a headline to open the full story in your browser when you want more detail.",
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
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-gray-50" ref={sectionRef}>
      <div className="container-wide">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand-900 tracking-tight">
            How it works
          </h2>
          <p className="mt-4 text-neutral-600 max-w-md mx-auto">
            Three simple steps to ambient awareness.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              <div className="flex flex-col items-start">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-neutral-200 text-neutral-500 opacity-80 mb-6 transition-transform hover:scale-105">
                  {step.icon}
                </div>
                <span className="text-xs font-medium text-neutral-400 tracking-wider uppercase mb-2">
                  Step {step.number}
                </span>
                <h3 className="text-xl font-semibold text-brand-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
