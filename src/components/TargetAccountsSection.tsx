import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { getAssetUrl } from '../utils/asset';

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
    image: getAssetUrl('/images/target-01-vault.jpg'),
    imageAlt: 'Secure architectural corporate vault doors',
  },
  {
    id: 'dormant-stalled',
    step: '02',
    title: 'Dormant & Stalled',
    description: 'Restart conversations with accounts that have gone quiet.',
    image: getAssetUrl('/images/target-02-terracotta.jpg'),
    imageAlt: 'Warm terracotta acoustic geometric architectural wall',
  },
  {
    id: 'active-opportunities',
    step: '03',
    title: 'Active Opportunities',
    description: 'Deepen executive engagement and help move buying conversations forward.',
    image: getAssetUrl('/images/target-03-boardroom.jpg'),
    imageAlt: 'Executive boardroom overlooking city skyline at dusk',
  },
  {
    id: 'net-new-accounts',
    step: '04',
    title: 'Net-New Accounts',
    description: 'Create first conversations with security leaders in new target accounts.',
    image: getAssetUrl('/images/target-04-atrium.jpg'),
    imageAlt: 'Corporate headquarters atrium staircase with stone paving',
  },
];

export const TargetAccountsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking starts precisely when the sticky section locks at top of viewport ('start start')
  // and completes when reaching the end of the scroll container ('end end')
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // 1. Dark rectangular block reveal: rises smoothly as user begins scrolling while pinned
  const darkBlockTranslateY = useTransform(scrollYProgress, [0.02, 0.16], ['100%', '0%']);
  const darkBlockOpacity = useTransform(scrollYProgress, [0.02, 0.12], [0, 1]);

  // 2. Sequential card entrance from the RIGHT side of the screen
  // Card 01 -> settles in Column 1
  const card1Opacity = useTransform(scrollYProgress, [0.12, 0.22], [0, 1]);
  const card1X = useTransform(scrollYProgress, [0.12, 0.26], [600, 0]);

  // Card 02 -> settles in Column 2
  const card2Opacity = useTransform(scrollYProgress, [0.26, 0.36], [0, 1]);
  const card2X = useTransform(scrollYProgress, [0.26, 0.40], [600, 0]);

  // Card 03 -> settles in Column 3
  const card3Opacity = useTransform(scrollYProgress, [0.40, 0.50], [0, 1]);
  const card3X = useTransform(scrollYProgress, [0.40, 0.54], [600, 0]);

  // Card 04 -> settles in Column 4
  const card4Opacity = useTransform(scrollYProgress, [0.54, 0.64], [0, 1]);
  const card4X = useTransform(scrollYProgress, [0.54, 0.68], [600, 0]);

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
      {/* Sticky viewport frame that locks during scrolling, with calibrated top padding */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden bg-warm-dots pt-[68px] sm:pt-[76px] lg:pt-[84px]">

        {/* ================= TOP AREA: HEADLINE, SUBHEADLINE & ROUNDTABLE ================= */}
        <div className="w-full flex-1 min-h-0 flex flex-col md:flex-row items-center justify-between max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 pt-2 sm:pt-4 pb-2 z-10 relative">
          {/* Left: Headline & Subheadline */}
          <div className="max-w-xl xl:max-w-2xl 2xl:max-w-3xl z-10 w-full md:w-auto">
            {/* Headline */}
            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] 2xl:text-[46px] text-[#101D32] tracking-tight leading-[1.08] mb-2 sm:mb-2.5">
              Turn Target Accounts into Active{' '}
              <span className="font-['Playfair_Display'] italic font-normal text-[#D7B77A] inline-block selection:text-white">
                Pipeline
              </span>
              <span className="text-[#FF5A1F]">.</span>
            </h2>

            {/* Subheadline */}
            <p className="font-['Inter'] text-sm sm:text-base md:text-lg text-[#687587] leading-relaxed max-w-xl font-normal">
              Engage security leaders to move key accounts forward.
            </p>
          </div>

          {/* Right: Enlarged Roundtable Aerial Visual (scaled responsively to available height) */}
          <div className="relative shrink-0 flex items-center justify-center mt-1 md:mt-0 md:-translate-y-2 lg:-translate-y-4 md:translate-x-3 lg:translate-x-6 xl:translate-x-8">
            <div className="relative flex items-center justify-center">
              <img
                src={getAssetUrl('/images/roundtable-aerial.png')}
                alt="Executive CISO Roundtable Discussion"
                className="w-[230px] sm:w-[290px] md:w-[350px] lg:w-[420px] xl:w-[480px] 2xl:w-[530px] max-h-[24vh] sm:max-h-[28vh] md:max-h-[32vh] lg:max-h-[35vh] xl:max-h-[380px] object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.12)] select-none pointer-events-none"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* ================= BOTTOM AREA: REVEALED DARK BLOCK & 4 CARDS ================= */}
        {/* Responsive container: dark block automatically hugs the bottom 70% of cards */}
        <div className="relative w-full overflow-hidden shrink-0">

          {/* THE DARK RECTANGULAR BLOCK:
              Comes directly from the bottom of the section with rounded top corners,
              dynamically covering the bottom portion behind the text and cards */}
          <motion.div
            style={{
              y: darkBlockTranslateY,
              opacity: darkBlockOpacity,
            }}
            className="absolute bottom-0 left-0 right-0 top-[22%] sm:top-[25%] lg:top-[28%] w-full max-w-[1440px] 2xl:max-w-[1560px] mx-auto rounded-t-[24px] sm:rounded-t-[32px] lg:rounded-t-[40px] bg-[#101D32] shadow-2xl z-0"
          >
            {/* Subtle architectural grid pattern inside dark block */}
            <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none rounded-t-[24px] sm:rounded-t-[32px] lg:rounded-t-[40px]" />
          </motion.div>

          {/* 4 CARDS ROW:
              Arranged in a 4-column grid spanning the container width.
              Cards enter one by one from the right side and settle.
              During the final 32% of scroll, all 4 cards remain settled for clean readability. */}
          <div className="relative z-10 w-full max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14 pb-3 sm:pb-4 lg:pb-6 overflow-hidden">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 w-full items-end">
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
                    <div className="w-full aspect-[16/10] max-h-[85px] sm:max-h-[105px] md:max-h-[120px] lg:max-h-[135px] xl:max-h-[150px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-[#DDD7CB]/60 bg-[#EDE8DF] mb-1.5 sm:mb-2 relative group-hover:shadow-2xl transition-all duration-300">
                      <img
                        src={card.image}
                        alt={card.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Lower Half: Sits inside the dark rectangular block */}
                    <div className="pt-1 pb-1 sm:pt-1.5 sm:pb-1.5 text-white">
                      {/* Step Number + Title */}
                      <div className="flex items-baseline gap-2 mb-0.5 sm:mb-1">
                        <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-lg sm:text-xl lg:text-[22px] xl:text-[24px] text-white tracking-tight leading-none shrink-0">
                          {card.step}
                        </span>
                        <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xs sm:text-sm lg:text-[15px] text-white leading-snug truncate">
                          {card.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="font-['Inter'] text-[11px] sm:text-xs lg:text-[12.5px] text-[#94A3B8] leading-relaxed line-clamp-2 sm:line-clamp-3">
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
