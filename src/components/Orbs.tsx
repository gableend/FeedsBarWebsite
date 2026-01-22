import { useScrollAnimation } from '../hooks/useScrollAnimation';

type Orb = {
  label: string;
  color: string; // hex
  words: [string, string, string];
};

const ORBS: Orb[] = [
  { label: 'NEWS', color: '#F59E0B', words: ['ELECTION', 'BUDGET', 'STRIKE'] },
  { label: 'TRENDS', color: '#10B981', words: ['CREATORS', 'SHORTS', 'SHIFTS'] },
  { label: 'SCIENCE', color: '#8B5CF6', words: ['SPACE', 'MOON', 'LANDER'] },
  { label: 'SPORT', color: '#EF4444', words: ['TITLE', 'RACE', 'HEATS'] },
  { label: 'AI & RESEARCH', color: '#3B82F6', words: ['MODELS', 'BENCH', 'SHIFT'] },
  { label: 'BUSINESS', color: '#94A3B8', words: ['EARNINGS', 'RATES', 'DEALS'] },
];

function OrbsInlineSVG() {
  // --- LAYOUT MATH ---
  const cardW = 270;
  const cardH = 132;
  const gapX = 44;
  const gapY = 32;
  const sidePad = 44;
  const topPad = 42;

  // Calculate required width to ensure symmetry
  // (3 cards * 270) + (2 gaps * 44) + (2 paddings * 44) = 986
  const W = 986; 
  
  // Calculate where the cards actually end
  // topPad + (2 rows * 132) + (1 gap * 32) = 42 + 264 + 32 = 338
  const contentBottomY = topPad + (cardH * 2) + gapY;

  // Black area needs to cover the cards plus some bottom padding
  const blackH = contentBottomY + 42; 
  
  // White area starts slightly overlapping the black for the rounded blend
  const whiteY = blackH - 24;
  
  // Total Height
  const H = whiteY + 160; 
  const whiteH = H - whiteY;
  const outerR = 36;

  const positions = [
    { x: sidePad + 0 * (cardW + gapX), y: topPad + 0 * (cardH + gapY) },
    { x: sidePad + 1 * (cardW + gapX), y: topPad + 0 * (cardH + gapY) },
    { x: sidePad + 2 * (cardW + gapX), y: topPad + 0 * (cardH + gapY) },

    { x: sidePad + 0 * (cardW + gapX), y: topPad + 1 * (cardH + gapY) },
    { x: sidePad + 1 * (cardW + gapX), y: topPad + 1 * (cardH + gapY) },
    { x: sidePad + 2 * (cardW + gapX), y: topPad + 1 * (cardH + gapY) },
  ];

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      height="100%"
      role="img"
      aria-label="Topic Orbs preview"
      className="block"
      style={{ maxWidth: '100%', height: 'auto' }}
    >
      <defs>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="18" stdDeviation="18" floodOpacity="0.18" />
        </filter>

        <radialGradient id="blackGlow" cx="50%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#1B1B1D" />
          <stop offset="60%" stopColor="#0D0D0F" />
          <stop offset="100%" stopColor="#0A0A0B" />
        </radialGradient>

        <linearGradient id="cardFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#0B0B0C" />
          <stop offset="100%" stopColor="#070708" />
        </linearGradient>

        <linearGradient id="whiteFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F7F7F8" />
        </linearGradient>

        <style>
          {`
            .orbCard { filter: drop-shadow(0px 12px 26px rgba(0,0,0,0.28)); }
            .orbStroke { stroke: rgba(255,255,255,0.10); }
            .orbStroke2 { stroke: rgba(255,255,255,0.16); }
            .label { letter-spacing: 0.16em; font-weight: 600; }
            .word { font-weight: 800; letter-spacing: 0.02em; }
            @keyframes pulseWord {
              0% { opacity: 0.55; }
              10% { opacity: 1; }
              30% { opacity: 0.75; }
              100% { opacity: 0.55; }
            }
            .w1 { animation: pulseWord 4.8s infinite; }
            .w2 { animation: pulseWord 4.8s infinite 1.6s; }
            .w3 { animation: pulseWord 4.8s infinite 3.2s; }
          `}
        </style>
      </defs>

      {/* Outer rounded container with shadow */}
      <g filter="url(#softShadow)">
        
        {/* White area (Background for the bottom part) */}
        <rect x="0" y={whiteY} width={W} height={whiteH} rx={outerR} fill="url(#whiteFill)" />
        
        {/* Black area (Top part) */}
        <rect x="0" y="0" width={W} height={blackH} rx={outerR} fill="url(#blackGlow)" />

        {/* Orb cards */}
        {ORBS.map((orb, i) => {
          const p = positions[i];
          const x = p.x;
          const y = p.y;

          const orbCx = x + 40;
          const orbCy = y + 44;

          const titleX = x + 78;
          const titleY = y + 42;

          const wordX = x + 78;
          const wordY1 = y + 78;
          const wordY2 = y + 104;
          const wordY3 = y + 130;

          return (
            <g key={orb.label} className="orbCard">
              <rect
                x={x}
                y={y}
                width={cardW}
                height={cardH}
                rx={24}
                fill="url(#cardFill)"
              />
              <rect
                x={x}
                y={y}
                width={cardW}
                height={cardH}
                rx={24}
                fill="none"
                className="orbStroke"
                strokeWidth="1"
              />

              {/* Orb ring */}
              <circle cx={orbCx} cy={orbCy} r="18" fill="none" stroke={orb.color} strokeWidth="5" opacity="0.95" />
              <circle cx={orbCx} cy={orbCy} r="8" fill={orb.color} opacity="0.9" />
              <circle cx={orbCx} cy={orbCy} r="22" fill="none" className="orbStroke2" strokeWidth="1" />

              {/* Label */}
              <text
                x={titleX}
                y={titleY}
                fill="rgba(255,255,255,0.55)"
                fontSize="11"
                className="label"
              >
                {orb.label}
              </text>

              {/* Words */}
              <text x={wordX} y={wordY1} fill={orb.color} fontSize="22" className="word w1">
                {orb.words[0]}
              </text>
              <text x={wordX} y={wordY2} fill={orb.color} fontSize="22" className="word w2">
                {orb.words[1]}
              </text>
              <text x={wordX} y={wordY3} fill={orb.color} fontSize="22" className="word w3">
                {orb.words[2]}
              </text>
            </g>
          );
        })}

        {/* Inner white stroke for the white card area */}
        <rect
          x="24"
          y={whiteY + 18}
          width={W - 48}
          height={whiteH - 36}
          rx={24}
          fill="none"
          stroke="rgba(17,24,39,0.12)"
          strokeWidth="1"
        />

        {/* Use foreignObject to handle text wrapping properly.
          This prevents the text from bleeding out of the container.
        */}
        <foreignObject x="40" y={whiteY + 18} width={W - 80} height={whiteH - 36}>
          <div className="h-full flex items-center justify-center text-center px-4">
            <p className="text-[28px] font-semibold text-gray-800 leading-snug">
              Orbs subtly rotate in your FeedsBar as the global narrative changes.
            </p>
          </div>
        </foreignObject>
        
      </g>
    </svg>
  );
}

export default function Orbs() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="orbs" className="py-20 lg:py-28" ref={sectionRef}>
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
              Each topic has its own Orb. It rotates through three keywords so you can feel what is moving, without opening anything.
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
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <OrbsInlineSVG />
              </div>

              <div className="absolute -inset-6 -z-10 rounded-3xl blur-2xl bg-gradient-to-r from-category-blue/10 via-category-purple/10 to-category-gold/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
