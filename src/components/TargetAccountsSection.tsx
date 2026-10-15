import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
  const darkBlockTranslateY = useTransform(scrollYProgress, [0.08, 0.22], ['100%', '0%']);
  const darkBlockOpacity = useTransform(scrollYProgress, [0.08, 0.18], [0, 1]);

  // 2. Sequential card entrance from the RIGHT side of the screen
  // Card 01 -> settles in Column 1
  const card1Opacity = useTransform(scrollYProgress, [0.18, 0.28], [0, 1]);
  const card1X = useTransform(scrollYProgress, [0.18, 0.32], [1000, 0]);

  // Card 02 -> settles in Column 2
  const card2Opacity = useTransform(scrollYProgress, [0.32, 0.42], [0, 1]);
  const card2X = useTransform(scrollYProgress, [0.32, 0.46], [1000, 0]);

  // Card 03 -> settles in Column 3
  const card3Opacity = useTransform(scrollYProgress, [0.46, 0.56], [0, 1]);
  const card3X = useTransform(scrollYProgress, [0.46, 0.60], [1000, 0]);

  // Card 04 -> settles in Column 4
  const card4Opacity = useTransform(scrollYProgress, [0.60, 0.70], [0, 1]);
  const card4X = useTransform(scrollYProgress, [0.60, 0.74], [1000, 0]);

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
      className="relative w-full h-[220vh] scroll-mt-28"
      aria-label="Target Account Activation"
    >
      {/* Sticky viewport frame that locks during scrolling */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden bg-warm-dots">
        
        {/* ================= TOP AREA: HEADLINE, SUBHEADLINE & ROUNDTABLE ================= */}
        <div className="w-full flex-1 flex flex-col md:flex-row items-center justify-between max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 pt-4 sm:pt-6 pb-2 sm:pb-4 z-10 relative">
          {/* Left: Headline & Subheadline */}
          <div className="max-w-xl xl:max-w-2xl 2xl:max-w-3xl z-10 w-full md:w-auto">
            {/* Headline */}
            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-[#101D32] tracking-tight leading-[1.1] mb-2 sm:mb-2.5">
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

          {/* Right: Enlarged Roundtable Aerial Visual (scaled to give room for cards) */}
          <div className="relative shrink-0 flex items-center justify-center mt-1 md:mt-0 md:-translate-y-4 lg:-translate-y-6 xl:-translate-y-8 md:translate-x-3 lg:translate-x-6 xl:translate-x-8">
            <div className="relative flex items-center justify-center">
              <img
                src="/images/roundtable-aerial.png"
                alt="Executive CISO Roundtable Discussion"
                className="w-[230px] sm:w-[310px] md:w-[380px] lg:w-[440px] xl:w-[500px] 2xl:w-[540px] max-h-[190px] sm:max-h-[260px] md:max-h-[320px] lg:max-h-[370px] xl:max-h-[420px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.12)] select-none pointer-events-none"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* ================= BOTTOM AREA: REVEALED DARK BLOCK & 4 CARDS ================= */}
        {/* Positioned tightly below header text, brought up so all card content is visible */}
        <div className="relative w-full overflow-hidden">
          
          {/* THE DARK RECTANGULAR BLOCK:
              Comes directly from the bottom of the section itself with rounded top corners */}
          <motion.div
            style={{
              y: darkBlockTranslateY,
              opacity: darkBlockOpacity,
            }}
            className="absolute bottom-0 left-0 right-0 h-[210px] sm:h-[225px] md:h-[240px] lg:h-[255px] w-full max-w-[1440px] 2xl:max-w-[1560px] mx-auto rounded-t-[32px] sm:rounded-t-[44px] bg-[#101D32] shadow-2xl z-0"
          >
            {/* Subtle architectural grid pattern inside dark block */}
            <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none rounded-t-[32px] sm:rounded-t-[44px]" />
          </motion.div>

          {/* 4 CARDS ROW:
              Arranged in a 4-column grid spanning the container width.
              Cards enter one by one from the right side and stop at x = 0.
              At the end of scroll, all 4 cards are fully visible side-by-side without leaving the screen. */}
          <div className="relative z-10 w-full max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14 pb-6 sm:pb-8 lg:pb-10 xl:pb-12 overflow-hidden">
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
