import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    number: '01',
    title: 'Choose your topics',
    description: 'Select the subjects that matter to you. Tech, finance, science, or create your own.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Let FeedBar run quietly',
    description: 'It lives in your menu bar, updating in the background. No notifications, no interruptions.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Stay informed at a glance',
    description: 'Glance at your Orbs to see what matters. Click to dive deeper when you want to.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-28 bg-gray-50"
      ref={sectionRef}
    >
      <div className="container-wide">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand-950 tracking-tight">
            How it works
          </h2>
          <p className="mt-4 text-brand-600 max-w-md mx-auto">
            Three simple steps to ambient awareness.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-brand-200 text-brand-700 mb-6 transition-transform hover:scale-110">
                  {step.icon}
                </div>
                <span className="text-xs font-medium text-brand-400 tracking-wider uppercase mb-2">
                  Step {step.number}
                </span>
                <h3 className="text-xl font-semibold text-brand-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-brand-600 leading-relaxed">
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
