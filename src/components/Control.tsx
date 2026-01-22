import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Control() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="control"
      className="pt-12 pb-20 lg:pt-16 lg:pb-28"
      ref={sectionRef}
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Visual (left) */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="relative overflow-hidden rounded-3xl">
  <img
    src="/images/control.png"
    alt="FeedsBar controls"
    className="w-full h-auto"
    loading="lazy"
  />
</div>

          </div>

          {/* Copy (right) */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand-900 tracking-tight">
              You’re in control
            </h2>

            <p className="mt-4 text-neutral-600 max-w-lg">
              FeedsBar adapts to how you work, not the other way around.
            </p>

            <p className="mt-4 text-neutral-600 max-w-lg">
              Choose where it lives, how it moves, and what it shows. Nothing
              more than you need.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-neutral-700">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-900/40" />
                <span>
                  <span className="font-semibold text-brand-900">Placement:</span>{" "}
                  choose your monitor and position
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-900/40" />
                <span>
                  <span className="font-semibold text-brand-900">Behavior:</span>{" "}
                  adjust size, scroll speed, and density
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-900/40" />
                <span>
                  <span className="font-semibold text-brand-900">Content:</span>{" "}
                  enable the topics and sources that matter
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
