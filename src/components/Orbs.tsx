import { useScrollAnimation } from "../hooks/useScrollAnimation";

function OrbsInlineIllustration() {
  // Palette
  const colors = {
    news: "#F59E0B", // amber
    trends: "#10B981", // emerald
    science: "#8B5CF6", // violet
    sport: "#EF4444", // red
    ai: "#3B82F6", // blue
    business: "#94A3B8", // slate
  };

  const tiles = [
    { label: "NEWS", k: ["ELECTION", "BUDGET", "STRIKE"], c: colors.news },
    { label: "TRENDS", k: ["CREATORS", "SHORTS", "SHIFTS"], c: colors.trends },
    { label: "SCIENCE", k: ["SPACE", "MOON", "LANDER"], c: colors.science },
    { label: "SPORT", k: ["TITLE", "RACE", "HEATS"], c: colors.sport },
    { label: "AI & RESEARCH", k: ["MODELS", "BENCH", "SHIFT"], c: colors.ai },
    { label: "BUSINESS", k: ["EARNINGS", "RATES", "DEALS"], c: colors.business },
  ];

  // Card geometry
  const cardX = 20;
  const cardY = 20;
  const cardW = 820;
  const cardH = 420;
  const r = 26;

  // Make the black area larger
  const topH = 320; // was ~210
  const bottomH = cardH - topH;

  // Tile geometry (2 rows x 3 cols)
  const tileW = 230;
  const tileH = 92;
  const gapX = 28;
  const gapY = 22;

  const originX = cardX + 38;
  const originY = cardY + 60;

  // Motion tuning
  const cycle = 5.6; // seconds
  const baseDelay = 0.4; // stagger per tile

  return (
    <svg
      viewBox="0 0 860 460"
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
          <feDropShadow
            dx="0"
            dy="18"
            stdDeviation="18"
            floodColor="#000000"
            floodOpacity="0.22"
          />
        </filter>

        <filter id="tileGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow
            dx="0"
            dy="8"
            stdDeviation="12"
            floodColor="#000000"
            floodOpacity="0.35"
          />
        </filter>

        {/* Clip everything to rounded card */}
        <clipPath id="cardClip">
          <rect x={cardX} y={cardY} width={cardW} height={cardH} rx={r} ry={r} />
        </clipPath>
      </defs>

      {/* Outer card */}
      <g filter="url(#softShadow)">
        <rect x={cardX} y={cardY} rx={r} ry={r} width={cardW} height={cardH} fill="#FFFFFF" />
      </g>

      {/* Content clipped to card */}
      <g clipPath="url(#cardClip)">
        {/* Top dark area */}
        <rect x={cardX} y={cardY} width={cardW} height={topH} fill="url(#bgSheen)" />

        {/* Bottom white area */}
        <rect x={cardX} y={cardY + topH} width={cardW} height={bottomH} fill="#FFFFFF" />

        {/* Subtle border line between areas */}
        <rect
          x={cardX}
          y={cardY + topH}
          width={cardW}
          height="1"
          fill="#000000"
          opacity="0.06"
        />

        {/* Inner border */}
        <rect
          x={cardX + 8}
          y={cardY + 8}
          rx={r - 6}
          ry={r - 6}
          width={cardW - 16}
          height={cardH - 16}
          fill="none"
          stroke="#000000"
          strokeOpacity="0.14"
        />

        {/* Tiles */}
        {tiles.map((t, i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);

          const x = originX + col * (tileW + gapX);
          const y = originY + row * (tileH + gapY);

          const delay = (i * baseDelay) % cycle;

          return (
            <g key={t.label} filter="url(#tileGlow)">
              <rect
                x={x}
                y={y}
                rx="16"
                ry="16"
                width={tileW}
                height={tileH}
                fill="rgba(0,0,0,0.40)"
                stroke="rgba(255,255,255,0.10)"
              />

              {/* Orb */}
              <g>
                <circle cx={x + 26} cy={y + 32} r="14" fill="none" stroke={t.c} strokeWidth="4" opacity="0.95" />
                <circle cx={x + 26} cy={y + 32} r="6.5" fill={t.c} opacity="0.95" />
                <circle cx={x + 23.5} cy={y + 29.5} r="2.2" fill="#FFFFFF" opacity="0.35" />
              </g>

              {/* Label */}
              <text
                x={x + 52}
                y={y + 24}
                fill="rgba(255,255,255,0.55)"
                fontSize="11"
                fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
                letterSpacing="1.2"
              >
                {t.label}
              </text>

              {/* Keywords with subtle cycling motion */}
              {t.k.map((kw, idx) => {
                // Each line gently takes a "turn" at being most prominent.
                const begin = `${delay + idx * (cycle / 3)}s`;
                const yLine = y + 52 + idx * 20;

                return (
                  <text
                    key={kw}
                    x={x + 52}
                    y={yLine}
                    fill={t.c}
                    fontSize="18"
                    fontWeight="750"
                    fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
                    letterSpacing="0.6"
                    opacity="0.55"
                  >
                    {kw}
                    <animate
                      attributeName="opacity"
                      values="0.55;0.95;0.55"
                      dur={`${cycle}s`}
                      begin={begin}
                      repeatCount="indefinite"
                      keyTimes="0;0.20;1"
                    />
                  </text>
                );
              })}
            </g>
          );
        })}

        {/* Bottom copy (no spill: manual wrap) */}
        <text
  x={cardX + 64}
  y={cardY + topH + 84}
  fill="#475569"
  fontSize="22"
  fontWeight="500"
  fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
>
  <tspan x={cardX + 64} dy="0">
    Orbs subtly rotate in your FeedsBar
  </tspan>
  <tspan x={cardX + 64} dy="30">
    as the global narrative changes.
  </tspan>
</text>
      </g>
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
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand-900 tracking-tight">
              Topic Orbs
            </h2>

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
