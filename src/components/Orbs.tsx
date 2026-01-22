import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const orbTopics = [
  { name: 'Tech', color: 'bg-blue-400', keywords: ['AI', 'Startups', 'Apple'] },
  { name: 'Markets', color: 'bg-emerald-400', keywords: ['Earnings', 'Fed', 'Crypto'] },
  { name: 'Science', color: 'bg-purple-400', keywords: ['Climate', 'Space', 'Health'] },
  { name: 'News', color: 'bg-amber-400', keywords: ['Policy', 'Global', 'Local'] },
];

function RotatingKeyword({ keywords }: { keywords: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % keywords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [keywords.length]);

  return (
    <span className="inline-block min-w-16 text-center transition-opacity duration-300">
      {keywords[index]}
    </span>
  );
}

export default function Orbs() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="features" className="py-20 lg:py-28" ref={sectionRef}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Explanation */}
          <div className={`order-2 lg:order-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand-950 tracking-tight">
              Topic Orbs
            </h2>
            <p className="mt-6 text-lg text-brand-600 leading-relaxed">
              Each topic you follow gets its own colored Orb. It sits quietly in your menu bar, rotating through live keywords so you can sense what's happening without clicking.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-brand-500" />
                </div>
                <p className="text-brand-700 text-sm leading-relaxed">
                  <strong className="text-brand-900">Glanceable:</strong> See trending keywords without opening anything.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-brand-500" />
                </div>
                <p className="text-brand-700 text-sm leading-relaxed">
                  <strong className="text-brand-900">Contextual colors:</strong> News Orb color reflects overall sentiment.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-brand-500" />
                </div>
                <p className="text-brand-700 text-sm leading-relaxed">
                  <strong className="text-brand-900">Non-intrusive:</strong> No badges, no counts, no anxiety.
                </p>
              </div>
            </div>
          </div>

          {/* Visual demo */}
          <div className={`order-1 lg:order-2 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              {/* macOS menu bar mockup */}
              <div className="bg-brand-900/95 rounded-lg p-4 shadow-2xl">
                <div className="flex items-center justify-end gap-4">
                  {orbTopics.map((orb) => (
                    <div key={orb.name} className="flex items-center gap-2">
                      <div className={`w-3.5 h-3.5 rounded-full ${orb.color} shadow-lg`} />
                      <span className="text-xs text-brand-100 font-medium">
                        <RotatingKeyword keywords={orb.keywords} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Orb cards below */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {orbTopics.map((orb, index) => (
                  <div
                    key={orb.name}
                    className="p-4 bg-white rounded-xl border border-brand-200 fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-4 h-4 rounded-full ${orb.color}`} />
                      <span className="text-sm font-medium text-brand-900">{orb.name}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {orb.keywords.map((kw) => (
                        <span
                          key={kw}
                          className="text-xs px-2 py-1 bg-brand-100 rounded text-brand-600"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Ambient glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-amber-400/10 rounded-2xl -z-10 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
