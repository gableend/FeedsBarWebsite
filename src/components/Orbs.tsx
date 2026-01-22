import { useScrollAnimation } from "../hooks/useScrollAnimation";

function OrbsInlineIllustration() {
  // Brand-ish palette (tweak any hex later if you want them tighter to your UI)
  const colors = {
    news: "#F59E0B", // amber
    trends: "#10B981", // emerald
    science: "#8B5CF6", // violet
    sport: "#EF4444", // red
    ai: "#3B82F6", // blue
    business: "#94A3B8", // slate
  };

  const tiles = [
    { label: "NEWS", k1: "ELECTION", k2: "BUDGET", k3: "STRIKE", c: colors.news },
    { label: "TRENDS", k1: "CREATORS", k2: "SHORTS", k3: "SHIFTS", c: colors.trends },
    { label: "SCIENCE", k1: "SPACE", k2: "MOON", k3: "LANDER", c: colors.science },
    { label: "SPORT", k1: "TITLE", k2: "RACE", k3: "HEATS", c: colors.sport },
    { label: "AI & RESEARCH", k1: "MODELS", k2: "BENCH", k3: "SHIFT", c: colors.ai },
    { label: "BUSINESS", k1: "EARNINGS", k2: "RATES", k3: "DEALS", c: colors.business },
  ];

  // Layout: 2 rows x 3 cols
  const originX = 54;
  const originY = 48;
  const colW = 240;
  const rowH = 110;
  const tileW = 220;
  const tileH = 84;
  const gapX = 22;
  const gapY = 18;

  return (
    <svg
      viewBox="0 0 860 420"
      className="w-full h-auto"
      role="img"
      aria-label="A stylized preview of FeedsBar Topic Orbs"
    >
      <defs>
        <linearGradient id="bgSheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0B0B0C" />
          <stop offset="1" stopColor="#141416" />
        </linearGradient>

        <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#000000" floodOpacity="0.25" />
        </filter>

        <filter id="tileGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#000000" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Outer card */}
      <g filter="url(#softShadow)">
        <rect x="20" y="20" rx="26" ry="26" width="820" height="380" fill="#FFFFFF" />
      </g>

      {/* Top dark area */}
      <rect x="20" y="20" rx="26" ry="26" width="820" height="210" fill="url(#bgSheen)" />

      {/* Subtle inner border */}
      <rect
        x="28"
        y="28"
        rx="22"
        ry="22"
        width="804"
        height="364"
        fill="none"
        stroke="#000000"
        strokeOpacity="0.18"
      />

      {/* Tiles */}
      {tiles.map((t, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = originX + col * (tileW + gapX);
        const y = originY + row * (tileH + gapY);

        return (
          <g key={t.label} filter="url(#tileGlow)">
            <rect
              x={x}
              y={y}
              rx="16"
              ry="16"
              width={tileW}
              height={tileH}
              fill="rgba(0,0,0,0.35)"
              stroke="rgba(255,255,255,0.10)"
            />

            {/* Orb ring */}
            <g>
              <circle cx={x + 26} cy={y + 30} r="14" fill="none" stroke={t.c} strokeWidth="4" opacity="0.95" />
              <circle cx={x + 26} cy={y + 30} r="6.5" fill={t.c} opacity="0.95" />
              <circle cx={x + 23.5} cy={y + 27.5} r="2.2" fill="#FFFFFF" opacity="0.35" />
            </g>

            {/* Label */}
            <text
              x={x + 50}
              y={y + 24}
              fill="rgba(255,255,255,0.55)"
              fontSize="11"
              fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
              letterSpacing="1.2"
            >
              {t.label}
            </text>

            {/* Keywords */}
            <text
              x={x + 50}
              y={y + 48}
              fill={t.c}
              fontSize="18"
              fontWeight="700"
              fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
              letterSpacing="0.6"
            >
              {t.k1}
            </text>
            <text
              x={x + 50}
              y={y + 68}
              fill={t.c}
              fontSize="18"
              fontWeight="700"
              fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
              letterSpacing="0.6"
            >
              {t.k2}
            </text>
            <text
              x={x + 50}
              y={y + 88}
              fill={t.c}
              fontSize="18"
              fontWeight="700"
              fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
              letterSpacing="0.6"
            >
              {t.k3}
            </text>
          </g>
        );
      })}

      {/* Bottom white copy area */}
      <rect x="20" y="210" width="820" height="190" fill="#FFFFFF" rx="0" ry="0" />
      {/* Re-round bottom corners */}
      <path
        d="M20 210 H840 V374 C840 389 828 400 814 400 H46 C32 400 20 389 20 374 V210 Z"
        fill="#FFFFFF"
      />

      <text
        x="64"
        y="290"
        fill="#475569"
        fontSize="22"
        fontWeight="500"
        fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
      >
        Orbs rotate every few seconds. A click opens the full story in your browser.
      </text>
    </svg>
  );
}

export default function Orbs() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="orbs" className="py-20 lg:py-28 bg-white" ref={sectionRef}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Copy */}
          <div
            className={`lg:col-span-5 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand-900 tracking-tight">Topic Orbs</h2>

            <p className="mt-5 text-neutral-600 leading-relaxed max-w-lg">
              Each Orb rotates through three keywords, so you can sense what is moving without opening anything.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex gap-4">
                <span className="mt-1 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                </span>
                <p className="text-neutral-700 leading-relaxed">
                  <span className="font-semibold text-brand-900">Glanceable:</span> A quick scan tells you what matters right now.
                </p>
              </li>

              <li className="flex gap-4">
                <span className="mt-1 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                </span>
                <p className="text-neutral-700 leading-relaxed">
                  <span className="font-semibold text-brand-900">Contextual:</span> The News Orb can shift color with overall sentiment.
                </p>
              </li>

              <li className="flex gap-4">
                <span className="mt-1 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                </span>
                <p className="text-neutral-700 leading-relaxed">
                  <span className="font-semibold text-brand-900">Non-intrusive:</span> No badges. No counts. No interruptions.
                </p>
              </li>
            </ul>
          </div>

          {/* Illustration */}
          <div
            className={`lg:col-span-7 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "120ms" }}
          >
            <div className="rounded-3xl overflow-hidden">
              <OrbsInlineIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
