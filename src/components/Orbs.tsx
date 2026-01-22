import { useEffect, useMemo, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

type Topic = {
  name: string;
  color: string;
  signals: [string, string, string][];
};

const orbTopics: Topic[] = [
  {
    name: 'News',
    color: '#F59E0B',
    signals: [
      ['GAZA', 'AID', 'CEASEFIRE'],
      ['ELECTION', 'BUDGET', 'STRIKE'],
      ['TRUMP', 'WAR', 'NATO'],
    ],
  },
  {
    name: 'Trends',
    color: '#10B981',
    signals: [
      ['CREATORS', 'SHORTS', 'SHIFTS'],
      ['LAYOFFS', 'HYPER', 'GROWTH'],
      ['PRICING', 'BUNDLES', 'FATIGUE'],
    ],
  },
  {
    name: 'Science',
    color: '#8B5CF6',
    signals: [
      ['FUSION', 'BREAK', 'THROUGH'],
      ['CLIMATE', 'HEAT', 'RECORDS'],
      ['SPACE', 'MOON', 'LANDER'],
    ],
  },
  {
    name: 'Sport',
    color: '#EF4444',
    signals: [
      ['TRANSFER', 'DRAMA', 'DEADLINE'],
      ['INJURY', 'SETBACK', 'RETURN'],
      ['TITLE', 'RACE', 'HEATS'],
    ],
  },
  {
    name: 'AI & Research',
    color: '#3B82F6',
    signals: [
      ['AGENTS', 'TOOLS', 'RUSH'],
      ['MODELS', 'BENCH', 'SHIFT'],
      ['AI', 'SAFETY', 'POLICY'],
    ],
  },
];

function useRotatingSignal(signals: [string, string, string][], intervalMs = 2200) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!signals.length) return;
    const t = setInterval(() => {
      setIdx((p) => (p + 1) % signals.length);
    }, intervalMs);
    return () => clearInterval(t);
  }, [signals.length, intervalMs]);

  return signals[idx] ?? ['—', '—', '—'];
}

function OrbBadge({
  label,
  color,
  words,
}: {
  label: string;
  color: string;
  words: [string, string, string];
}) {
  // Keep viewBox consistent; size controlled by CSS for responsive layout
  return (
    <svg
      viewBox="0 0 260 74"
      fill="none"
      role="img"
      aria-label={`${label}: ${words.join(', ')}`}
      className="w-full h-auto"
      preserveAspectRatio="xMinYMid meet"
    >
      <rect
        x="0.5"
        y="0.5"
        width="259"
        height="73"
        rx="14"
        fill="rgba(0,0,0,0.40)"
        stroke="rgba(255,255,255,0.10)"
      />

      {/* Orb */}
      <g transform="translate(14 14)">
        <circle cx="18" cy="23" r="18" fill={color} opacity="0.18" />
        <circle cx="18" cy="23" r="14.5" stroke={color} strokeWidth="2.5" opacity="0.95" />
        <circle cx="18" cy="23" r="9.5" fill={color} opacity="0.85" />
        <circle cx="13" cy="18" r="3.2" fill="white" opacity="0.55" />
      </g>

      {/* Text */}
      <g transform="translate(54 14)">
        <text
          x="0"
          y="10"
          fill="rgba(255,255,255,0.65)"
          fontSize="10"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
          letterSpacing="0.12em"
        >
          {label.toUpperCase()}
        </text>

        <text
          x="0"
          y="30"
          fill={color}
          fontSize="16"
          fontWeight="700"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
        >
          {words[0]}
        </text>
        <text
          x="0"
          y="48"
          fill={color}
          fontSize="16"
          fontWeight="700"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
        >
          {words[1]}
        </text>
        <text
          x="0"
          y="66"
          fill={color}
          fontSize="16"
          fontWeight="700"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
        >
          {words[2]}
        </text>
      </g>
    </svg>
  );
}

export default function Orbs() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>();
  const signalsByTopic = useMemo(() => orbTopics.map((t) => t.signals), []);
  const rotating = orbTopics.map((t, i) => useRotatingSignal(signalsByTopic[i] ?? [], 2200 + i * 150));

  return (
    <section id="features" className="py-20 lg:py-28" ref={sectionRef}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Copy */}
          <div
            className={`order-2 lg:order-1 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand-900 tracking-tight">
              Topic Orbs
            </h2>

            <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
              Each Orb rotates through three keywords, so you can sense what is moving without opening anything.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  <strong className="text-brand-900">Glanceable:</strong> A quick scan tells you what matters right now.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  <strong className="text-brand-900">Contextual:</strong> The News Orb can shift color with overall sentiment.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  <strong className="text-brand-900">Non-intrusive:</strong> No badges. No counts. No interruptions.
                </p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div
            className={`order-1 lg:order-2 transition-all duration-700 delay-150 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative">
              <div className="rounded-2xl border border-neutral-200 bg-white/70 backdrop-blur-sm shadow-xl overflow-hidden">
                {/* Dark “desktop strip” */}
                <div className="px-4 py-4 bg-neutral-950">
                  {/* Responsive grid so we never “miss” orbs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {orbTopics.map((t, idx) => (
                      <div
                        key={t.name}
                        className="transition-all duration-200 hover:-translate-y-0.5"
                        style={{
                          filter: 'drop-shadow(0 14px 22px rgba(0,0,0,0.35))',
                        }}
                        title={t.name}
                      >
                        {/* Keep cards from getting too tall on small screens */}
                        <div className="w-full max-w-[320px]">
                          <OrbBadge label={t.name} color={t.color} words={rotating[idx] as [string, string, string]} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-6 py-6">
                  <p className="text-sm text-neutral-600">
                    Orbs rotate every few seconds. A click opens the full story in your browser.
                  </p>
                </div>
              </div>

              {/* Ambient glow */}
              <div
                className="absolute -inset-6 rounded-3xl -z-10 blur-3xl"
                style={{
                  background:
                    'radial-gradient(60% 60% at 30% 30%, rgba(59,130,246,0.10), transparent 60%), radial-gradient(60% 60% at 70% 40%, rgba(139,92,246,0.10), transparent 60%), radial-gradient(60% 60% at 50% 80%, rgba(245,158,11,0.10), transparent 60%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
