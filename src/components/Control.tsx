import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Control() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="source-control" className="py-20 lg:py-28" ref={sectionRef}>
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Visual (left) */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
              {/* Swap this image for your real Settings / Source Control screenshot */}
              <img
                src="/images/source-control.png"
                alt="FeedsBar Source Control"
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
              Source Control
            </h2>

            <p className="mt-4 text-neutral-600 max-w-lg">
              Turn topics and sources on or off in seconds. No setup rabbit hole.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-neutral-700">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-900/40" />
                <span>
                  <span className="font-semibold text-brand-900">Topics:</span>{" "}
                  keep your bar focused
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-900/40" />
                <span>
                  <span className="font-semibold text-brand-900">Sources:</span>{" "}
                  curated by default, editable anytime
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-900/40" />
                <span>
                  <span className="font-semibold text-brand-900">Placement:</span>{" "}
                  above the Dock or below the menu bar
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
