import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Scroll tracking across sticky section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // 1. Dark rectangular block reveal: rises directly from the bottom of the section
  const darkBlockTranslateY = useTransform(scrollYProgress, [0.03, 0.22], ['100%', '0%']);
  const darkBlockOpacity = useTransform(scrollYProgress, [0.03, 0.18], [0, 1]);

  // 2. Horizontal track movement: shifts smoothly to showcase cards in sequence
  const trackX = useTransform(scrollYProgress, [0.22, 0.92], ['0%', '-48%']);

  // 3. Sequential card reveal from the left (one by one as you scroll down)
  // Card 01
  const card1Opacity = useTransform(scrollYProgress, [0.18, 0.28], [0, 1]);
  const card1X = useTransform(scrollYProgress, [0.18, 0.28], [-70, 0]);

  // Card 02
  const card2Opacity = useTransform(scrollYProgress, [0.34, 0.46], [0, 1]);
  const card2X = useTransform(scrollYProgress, [0.34, 0.46], [-70, 0]);

  // Card 03
  const card3Opacity = useTransform(scrollYProgress, [0.52, 0.64], [0, 1]);
  const card3X = useTransform(scrollYProgress, [0.52, 0.64], [-70, 0]);

  // Card 04
  const card4Opacity = useTransform(scrollYProgress, [0.70, 0.82], [0, 1]);
  const card4X = useTransform(scrollYProgress, [0.70, 0.82], [-70, 0]);

  const cardMotionValues = [
    { opacity: card1Opacity, x: card1X },
    { opacity: card2Opacity, x: card2X },
    { opacity: card3Opacity, x: card3X },
    { opacity: card4Opacity, x: card4X },
  ];

  // Sync active index based on scroll progress for arrow controls
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest < 0.35) {
        setActiveCardIndex(0);
      } else if (latest < 0.54) {
        setActiveCardIndex(1);
      } else if (latest < 0.73) {
        setActiveCardIndex(2);
      } else {
        setActiveCardIndex(3);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Manual arrow navigation
  const scrollToCard = (index: number) => {
    if (!containerRef.current) return;
    const clampedIndex = Math.max(0, Math.min(accountCards.length - 1, index));
    const targetProgressMap = [0.28, 0.46, 0.64, 0.84];
    const targetProgress = targetProgressMap[clampedIndex];

    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight - window.innerHeight;
    const scrollTarget = containerTop + containerHeight * targetProgress;

    window.scrollTo({
      top: scrollTarget,
      behavior: 'smooth',
    });
  };

  const handlePrev = () => {
    scrollToCard(activeCardIndex - 1);
  };

  const handleNext = () => {
    scrollToCard(activeCardIndex + 1);
  };

  return (
    <section
      ref={containerRef}
      id="accounts"
      className="relative w-full h-[260vh] scroll-mt-28"
      aria-label="Target Account Activation"
    >
      {/* Sticky viewport frame */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden bg-warm-dots">
        
        {/* ================= TOP AREA: HEADLINE & SUBHEAD ================= */}
        {/* Generous top padding (pt-24 sm:pt-28) ensures it's never covered by the floating header */}
        <div className="w-full max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 pt-24 sm:pt-28 pb-3 z-10">
          <div className="max-w-3xl">
            {/* Headline */}
            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-[#101D32] tracking-tight leading-[1.1] mb-2 sm:mb-2.5">
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

        {/* ================= BOTTOM AREA: REVEALED DARK BLOCK & CARDS ================= */}
        {/* Flush at the bottom of Section 2: No white container wrapper */}
        <div className="relative w-full flex-1 flex flex-col justify-end">
          
          {/* THE DARK RECTANGULAR BLOCK:
              Comes directly from the bottom of the section itself with rounded top corners */}
          <motion.div
            style={{
              y: darkBlockTranslateY,
              opacity: darkBlockOpacity,
            }}
            className="absolute bottom-0 left-0 right-0 h-[260px] sm:h-[280px] md:h-[300px] w-full max-w-[1440px] 2xl:max-w-[1560px] mx-auto rounded-t-[32px] sm:rounded-t-[44px] bg-[#101D32] shadow-2xl z-0"
          >
            {/* Subtle architectural grid pattern inside dark block */}
            <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none rounded-t-[32px] sm:rounded-t-[44px]" />

            {/* Circular navigation arrows (< and >) in bottom right corner */}
            <div className="absolute bottom-5 sm:bottom-7 right-6 sm:right-10 flex items-center gap-2.5 z-30">
              <button
                type="button"
                onClick={handlePrev}
                disabled={activeCardIndex === 0}
                aria-label="Previous card"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF5A1F]"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={activeCardIndex === accountCards.length - 1}
                aria-label="Next card"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF5A1F]"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </motion.div>

          {/* HORIZONTAL CARDS TRACK:
              Cards straddle the dark block, with images projecting above and text nestled inside */}
          <div className="relative z-10 w-full max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14 overflow-hidden pb-6 sm:pb-7">
            <motion.div
              style={{ x: trackX }}
              className="flex items-end gap-6 sm:gap-8 w-max"
            >
              {accountCards.map((card, index) => {
                const motionValues = cardMotionValues[index];
                return (
                  <motion.div
                    key={card.id}
                    style={{
                      opacity: motionValues.opacity,
                      x: motionValues.x,
                    }}
                    className="w-[280px] sm:w-[350px] md:w-[410px] shrink-0 flex flex-col group select-none"
                  >
                    {/* Upper Half: Architectural Image (sits above dark block in warm canvas) */}
                    <div className="w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-[#DDD7CB]/60 bg-[#EDE8DF] mb-4 sm:mb-5 relative group-hover:shadow-2xl transition-all duration-300">
                      <img
                        src={card.image}
                        alt={card.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Lower Half: Three-column layout inside the dark block (Number | Title | Description) */}
                    <div className="grid grid-cols-12 gap-3 sm:gap-4 items-start pt-1 text-white">
                      {/* Column 1: Step Number (01, 02, 03, 04) */}
                      <div className="col-span-2">
                        <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                          {card.step}
                        </span>
                      </div>

                      {/* Column 2: Title */}
                      <div className="col-span-4 sm:col-span-4">
                        <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-sm sm:text-base text-white leading-snug">
                          {card.title}
                        </h3>
                      </div>

                      {/* Column 3: Description */}
                      <div className="col-span-6 sm:col-span-6 pr-2">
                        <p className="font-['Inter'] text-xs sm:text-[13px] text-[#94A3B8] leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TargetAccountsSection;
