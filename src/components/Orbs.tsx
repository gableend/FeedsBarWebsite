import { useScrollAnimation } from '../hooks/useScrollAnimation';

type Orb = {
  label: string;
  color: string; // hex
  words: [string, string, string];
};

const ORBS: Orb[] = [
  { label: 'NEWS', color: '#F59E0B', words: ['GREENLAND', 'TARIFFS', 'NATO'] },
  { label: 'TRENDS', color: '#10B981', words: ['OFFLINE', 'SLOWLIVING', 'CRAFT'] },
  { label: 'SCIENCE', color: '#8B5CF6', words: ['LUNAR', 'FUSION', 'CYBERAI'] },
  { label: 'SPORT', color: '#EF4444', words: ['OLYMPIC', 'QUALIFIERS', 'INJURY'] },
  { label: 'AI & RESEARCH', color: '#3B82F6', words: ['AGENTS', 'AUTONOMY', 'SECURITY'] },
  { label: 'BUSINESS', color: '#94A3B8', words: ['MARKETS', 'RISKOFF', 'CRYPTO'] },
];

function OrbsInlineSVG() {
  // --- LAYOUT MATH ---
  const cardW = 270;
  
  // INCREASED HEIGHT: Was 132, now 160 to prevent text clipping.
  const cardH = 160; 
  
  const gapX = 44;
  const gapY = 32;
  const sidePad = 44;
  const topPad = 42;

  // Width: (3 cards * 270) + (2 gaps * 44) + (2 side pads * 44) = 986
  const W = 986; 
  
  // Height: topPad + (2 rows * cardH) + (1 gapY) + bottomPad
  // 42 + 320 + 32 + 42 = 436
  const H = 436;
  
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

      {/* Main Container */}
      <g filter="url(#softShadow)">
        
        {/* Single Black Background Rect */}
        <rect x="0" y="0" width={W} height={H} rx={outerR} fill="url(#blackGlow)" />

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
          
          // Adjusted Y positions for taller card (160px height)
          // Previous: 78, 104, 130
          // New: 80, 110, 140 (leaves 20px bottom padding)
          const wordY1 = y + 80;
          const wordY2 = y + 110;
          const wordY3 = y + 140;

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
