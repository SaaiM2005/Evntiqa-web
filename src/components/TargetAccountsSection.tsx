import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface AccountCard {
  id: string;
  step: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const accountCards: AccountCard[] = [
  {
    id: 'hard-to-penetrate',
    step: '01',
    title: 'Hard-to-Penetrate',
    description: 'Open doors to strategic accounts where executive access has been difficult.',
    image: '/images/target-01-vault.jpg',
    imageAlt: 'Secure architectural corporate vault doors',
  },
  {
    id: 'dormant-stalled',
    step: '02',
    title: 'Dormant & Stalled',
    description: 'Restart conversations with accounts that have gone quiet.',
    image: '/images/target-02-terracotta.jpg',
    imageAlt: 'Warm terracotta acoustic geometric architectural wall',
  },
  {
    id: 'active-opportunities',
    step: '03',
    title: 'Active Opportunities',
    description: 'Deepen executive engagement and help move buying conversations forward.',
    image: '/images/target-03-boardroom.jpg',
    imageAlt: 'Executive boardroom overlooking city skyline at dusk',
  },
  {
    id: 'net-new-accounts',
    step: '04',
    title: 'Net-New Accounts',
    description: 'Create first conversations with security leaders in new target accounts.',
    image: '/images/target-04-atrium.jpg',
    imageAlt: 'Corporate headquarters atrium staircase with stone paving',
  },
];

export const TargetAccountsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking across sticky section: starts as soon as section enters viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  // 1. Dark rectangular block reveal: rises directly from the bottom of the section
  const darkBlockTranslateY = useTransform(scrollYProgress, [0.26, 0.40], ['100%', '0%']);
  const darkBlockOpacity = useTransform(scrollYProgress, [0.26, 0.36], [0, 1]);

  // 2. Sequential card entrance from the RIGHT side of the screen
  // Card 01 -> settles in Column 1
  const card1Opacity = useTransform(scrollYProgress, [0.38, 0.48], [0, 1]);
  const card1X = useTransform(scrollYProgress, [0.38, 0.52], [1000, 0]);

  // Card 02 -> settles in Column 2
  const card2Opacity = useTransform(scrollYProgress, [0.52, 0.62], [0, 1]);
  const card2X = useTransform(scrollYProgress, [0.52, 0.66], [1000, 0]);

  // Card 03 -> settles in Column 3
  const card3Opacity = useTransform(scrollYProgress, [0.66, 0.76], [0, 1]);
  const card3X = useTransform(scrollYProgress, [0.66, 0.80], [1000, 0]);

  // Card 04 -> settles in Column 4
  const card4Opacity = useTransform(scrollYProgress, [0.80, 0.90], [0, 1]);
  const card4X = useTransform(scrollYProgress, [0.80, 0.94], [1000, 0]);

  // 3. Sharp Growth Trendline Chart: starts growing smoothly as soon as section enters viewport
  const rawLineProgress = useTransform(scrollYProgress, [0.01, 0.28], [0, 1]);
  // Spring physics for buttery-smooth momentum flow as user scrolls
  const smoothLineProgress = useSpring(rawLineProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.5,
    restDelta: 0.001,
  });

  // Area fill reveals smoothly in sync with the line
  const fillClipWidth = useTransform(smoothLineProgress, [0, 1], [25, 1000]);

  // Summit accent beacon scale and opacity
  const summitOpacity = useTransform(smoothLineProgress, [0.90, 1], [0, 1]);
  const summitScale = useTransform(smoothLineProgress, [0.88, 1], [0.2, 1]);

  const cardMotionValues = [
    { opacity: card1Opacity, x: card1X },
    { opacity: card2Opacity, x: card2X },
    { opacity: card3Opacity, x: card3X },
    { opacity: card4Opacity, x: card4X },
  ];

  return (
    <section
      ref={containerRef}
      id="accounts"
      className="relative w-full h-[260vh] scroll-mt-28"
      aria-label="Target Account Activation"
    >
      {/* Sticky viewport frame that locks during scrolling */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-end overflow-hidden bg-warm-dots">
        
        {/* ================= TOP AREA: ANIMATED MINIMALIST GROWTH GRAPH + HEADLINE ================= */}
        <div className="w-full max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 mb-2 sm:mb-3 z-10">
          
          {/* 1. Sharp Minimalist Growth Line Graph matching user sketched trajectory */}
          <div className="w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[270px] mb-1 sm:mb-2 overflow-visible select-none">
            <svg
              viewBox="0 0 1000 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
              aria-label="Account acceleration growth line trajectory"
            >
              <defs>
                {/* Champagne Gold area gradient matching Muted Gold theme */}
                <linearGradient id="sharpGoldGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D7B77A" stopOpacity="0.22" />
                  <stop offset="60%" stopColor="#D7B77A" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#FAF8F5" stopOpacity="0" />
                </linearGradient>

                {/* Sharp gradient along the growth line: Navy -> Gold -> Brand Orange breakout */}
                <linearGradient id="sharpLineGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#1B3152" />
                  <stop offset="35%" stopColor="#243D59" />
                  <stop offset="65%" stopColor="#D7B77A" />
                  <stop offset="85%" stopColor="#D7B77A" />
                  <stop offset="100%" stopColor="#FF5A1F" />
                </linearGradient>

                {/* Smooth area fill clip expanding in sync with line flow */}
                <clipPath id="chartAreaClip">
                  <motion.rect
                    x="0"
                    y="0"
                    height="240"
                    style={{ width: fillClipWidth }}
                  />
                </clipPath>
              </defs>

              {/* Faint Architectural Reference Gridlines */}
              <line x1="25" y1="220" x2="940" y2="220" stroke="#101D32" strokeWidth="1" strokeOpacity="0.15" />
              <line x1="25" y1="155" x2="940" y2="155" stroke="#101D32" strokeWidth="1" strokeOpacity="0.06" strokeDasharray="3 4" />
              <line x1="25" y1="90" x2="940" y2="90" stroke="#101D32" strokeWidth="1" strokeOpacity="0.06" strokeDasharray="3 4" />
              <line x1="25" y1="58" x2="940" y2="58" stroke="#D7B77A" strokeWidth="1" strokeOpacity="0.16" strokeDasharray="2 3" />
              <line x1="25" y1="16" x2="940" y2="16" stroke="#101D32" strokeWidth="1" strokeOpacity="0.06" strokeDasharray="3 4" />

              {/* Minimal Axis Vertical Ticks at reference inflection points */}
              <line x1="25" y1="216" x2="25" y2="224" stroke="#687587" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="150" y1="216" x2="150" y2="224" stroke="#687587" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="270" y1="216" x2="270" y2="224" stroke="#687587" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="400" y1="216" x2="400" y2="224" stroke="#687587" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="530" y1="216" x2="530" y2="224" stroke="#687587" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="660" y1="216" x2="660" y2="224" stroke="#687587" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="780" y1="216" x2="780" y2="224" stroke="#687587" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="860" y1="216" x2="860" y2="224" stroke="#687587" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="940" y1="216" x2="940" y2="224" stroke="#FF5A1F" strokeWidth="1.5" strokeOpacity="0.7" />

              {/* Shaded Area fill under polyline (clipped to match line progression) */}
              <g clipPath="url(#chartAreaClip)">
                <path
                  d="M 25 220 L 150 155 L 270 142 L 400 90 L 530 66 L 660 58 L 780 38 L 860 28 L 940 16 L 940 220 Z"
                  fill="url(#sharpGoldGradient)"
                />
              </g>

              {/* Sharp Growth Polyline matching user sketched trajectory:
                  - Start: (25, 220)
                  - Sharp rise under ZoomInfo/F-Secure: (150, 155)
                  - Gentle rise under F-Secure: (270, 142)
                  - Steep surge under Intel: (400, 90)
                  - Steady advance under Infosys: (530, 66)
                  - Plateau / consolidation under Trend Micro: (660, 58)
                  - Strong climb across Trend Micro / Commvault: (780, 38)
                  - Approach kink under Commvault: (860, 28)
                  - Summit peak below carousel arrows: (940, 16)
                  Animated with Framer Motion pathLength for silky-smooth vector flow */}
              <motion.path
                d="M 25 220 L 150 155 L 270 142 L 400 90 L 530 66 L 660 58 L 780 38 L 860 28 L 940 16"
                fill="none"
                stroke="url(#sharpLineGradient)"
                strokeWidth="4"
                strokeLinejoin="miter"
                strokeMiterlimit="6"
                strokeLinecap="round"
                style={{ pathLength: smoothLineProgress }}
              />

              {/* Summit Marker: Crisp Brand Orange beacon at peak */}
              <motion.circle
                cx="940"
                cy="16"
                r="5.5"
                fill="#FF5A1F"
                stroke="#101D32"
                strokeWidth="2"
                style={{
                  opacity: summitOpacity,
                  scale: summitScale,
                }}
              />
              <motion.circle
                cx="940"
                cy="16"
                r="11"
                fill="none"
                stroke="#FF5A1F"
                strokeWidth="1.5"
                strokeOpacity="0.4"
                style={{
                  opacity: summitOpacity,
                  scale: summitScale,
                }}
              />
            </svg>
          </div>

          {/* 2. Headline & Subheadline */}
          <div className="max-w-3xl">
            {/* Headline */}
            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-[#101D32] tracking-tight leading-[1.1] mb-1.5 sm:mb-2">
              Turn Target Accounts into Active{' '}
              <span className="font-['Playfair_Display'] italic font-normal text-[#D7B77A] inline-block selection:text-white">
                Pipeline
              </span>
              <span className="text-[#FF5A1F]">.</span>
            </h2>

            {/* Subheadline */}
            <p className="font-['Inter'] text-sm sm:text-base md:text-lg text-[#687587] leading-relaxed max-w-2xl font-normal">
              Engage security leaders to move key accounts forward.
            </p>
          </div>

        </div>

        {/* ================= BOTTOM AREA: REVEALED DARK BLOCK & 4 CARDS ================= */}
        {/* Positioned tightly below header text, flush at bottom of Section 2 */}
        <div className="relative w-full overflow-hidden">
          
          {/* THE DARK RECTANGULAR BLOCK:
              Comes directly from the bottom of the section itself with rounded top corners */}
          <motion.div
            style={{
              y: darkBlockTranslateY,
              opacity: darkBlockOpacity,
            }}
            className="absolute bottom-0 left-0 right-0 h-[240px] sm:h-[260px] md:h-[280px] w-full max-w-[1440px] 2xl:max-w-[1560px] mx-auto rounded-t-[32px] sm:rounded-t-[44px] bg-[#101D32] shadow-2xl z-0"
          >
            {/* Subtle architectural grid pattern inside dark block */}
            <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none rounded-t-[32px] sm:rounded-t-[44px]" />
          </motion.div>

          {/* 4 CARDS ROW:
              Arranged in a 4-column grid spanning the container width.
              Cards enter one by one from the right side and stop at x = 0.
              At the end of scroll, all 4 cards are fully visible side-by-side without leaving the screen. */}
          <div className="relative z-10 w-full max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14 pb-6 sm:pb-8 overflow-hidden">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 w-full items-end">
              {accountCards.map((card, index) => {
                const motionValues = cardMotionValues[index];
                return (
                  <motion.div
                    key={card.id}
                    style={{
                      opacity: motionValues.opacity,
                      x: motionValues.x,
                    }}
                    className="w-full flex flex-col group select-none"
                  >
                    {/* Upper Half: Architectural Image (sits above dark block in warm canvas) */}
                    <div className="w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-[#DDD7CB]/60 bg-[#EDE8DF] mb-3.5 sm:mb-4 relative group-hover:shadow-2xl transition-all duration-300">
                      <img
                        src={card.image}
                        alt={card.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Lower Half: Sits inside the dark rectangular block */}
                    <div className="pt-2 pb-1 text-white">
                      {/* Step Number + Title */}
                      <div className="flex items-baseline gap-2.5 mb-1.5">
                        <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl sm:text-[26px] text-white tracking-tight leading-none shrink-0">
                          {card.step}
                        </span>
                        <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-sm sm:text-base text-white leading-snug">
                          {card.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="font-['Inter'] text-xs sm:text-[13px] text-[#94A3B8] leading-relaxed line-clamp-3">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TargetAccountsSection;
