import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface CollapsingCardItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface CollapsingCardsProps {
  items: CollapsingCardItem[];
  defaultActiveIndex?: number;
  autoChange?: boolean;
  autoChangeInterval?: number;
  externalBgColor?: string;
  cardBgColor?: string;
  activeCardBgColor?: string;
  className?: string;
}

/**
 * CollapsingCards
 * Faithfully ports the Framer CollapsingCards component specification:
 * https://framer.com/m/CollapsingCards-gB5ZlD.js@O9909vqkVzIcNG4Jxsz2
 * 
 * Features:
 * - Automatic cycling through cards with smooth timing and pause-on-hover
 * - Fluid spring motion expansion on hover / touch
 * - Active card expands to showcase two-column layout: text & full-height format image
 * - Inactive cards collapse into sleek editorial previews
 * - Fully responsive: horizontal spring accordion on desktop, adaptive stack on mobile
 */
export const CollapsingCards: React.FC<CollapsingCardsProps> = ({
  items,
  defaultActiveIndex = 0,
  autoChange = true,
  autoChangeInterval = 4500,
  externalBgColor = '#101D32',
  cardBgColor = '#152438',
  activeCardBgColor = '#0C1624',
  className = '',
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(defaultActiveIndex);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-change timer: cycles through each card periodically
  useEffect(() => {
    if (!autoChange || isPaused || items.length <= 1) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, autoChangeInterval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoChange, isPaused, items.length, autoChangeInterval, activeIndex]);

  const handleCardSelect = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className={`w-full rounded-[24px] sm:rounded-[28px] p-2.5 sm:p-3 shadow-2xl border border-[#243D59]/60 overflow-hidden select-none ${className}`}
      style={{ backgroundColor: externalBgColor }}
    >
      {/* ================= DESKTOP VIEW (Horizontal Collapsing Accordion) ================= */}
      <div className="hidden lg:flex flex-row items-stretch gap-2.5 w-full h-[440px] xl:h-[470px]">
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={item.id}
              layout
              onMouseEnter={() => handleCardSelect(index)}
              onClick={() => handleCardSelect(index)}
              transition={{
                type: 'spring',
                stiffness: 350,
                damping: 34,
                mass: 0.8,
              }}
              className={`relative rounded-[20px] overflow-hidden transition-colors duration-300 ${
                isActive
                  ? 'flex-[3.2] cursor-default border border-[#D7B77A]/40 shadow-xl'
                  : 'flex-[1] cursor-pointer hover:border-white/20 border border-white/5 opacity-85 hover:opacity-100'
              }`}
              style={{
                backgroundColor: isActive ? activeCardBgColor : cardBgColor,
              }}
            >
              {/* Subtle blueprint grid pattern inside cards */}
              <div className="absolute inset-0 bg-blueprint-grid opacity-[0.06] pointer-events-none" />

              <div className="relative z-10 w-full h-full flex flex-row items-stretch p-5 sm:p-6 lg:p-7 gap-6">
                
                {/* Left Column: Number, Title, Description */}
                <div className={`flex flex-col justify-between h-full transition-all duration-300 ${
                  isActive ? 'w-[48%] shrink-0' : 'w-full'
                }`}>
                  {/* Top: Card Number */}
                  <div className="flex items-center justify-between">
                    <span className={`font-['Plus_Jakarta_Sans'] font-extrabold tracking-tight transition-colors duration-200 ${
                      isActive ? 'text-2xl text-[#D7B77A]' : 'text-xl text-white/50'
                    }`}>
                      {item.number}
                    </span>

                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F] shadow-[0_0_8px_#FF5A1F]" />
                    )}
                  </div>

                  {/* Middle / Bottom: Texts */}
                  <div className="space-y-3">
                    {isActive ? (
                      <div className="w-16 h-[2px] bg-white/10 rounded-full overflow-hidden mb-2 relative">
                        <motion.div
                          key={`progress-${activeIndex}-${isPaused}`}
                          initial={{ width: '0%' }}
                          animate={{ width: isPaused ? '0%' : '100%' }}
                          transition={{
                            duration: autoChangeInterval / 1000,
                            ease: 'linear',
                          }}
                          className="h-full bg-[#D7B77A]"
                        />
                      </div>
                    ) : (
                      <div className="w-6 h-[2px] bg-[#D7B77A]/40 mb-2" />
                    )}
                    
                    <h3 className={`font-['Plus_Jakarta_Sans'] font-bold text-white tracking-tight leading-snug transition-all duration-200 ${
                      isActive
                        ? 'text-xl sm:text-2xl xl:text-[26px]'
                        : 'text-base sm:text-lg line-clamp-3'
                    }`}>
                      {item.title}
                    </h3>

                    {/* Description is revealed when card expands */}
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.25, delay: 0.1 }}
                          className="font-['Inter'] text-sm sm:text-[14.5px] text-[#94A3B8] leading-relaxed font-normal pt-1"
                        >
                          {item.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Right Column: High-res Format Image (Revealed on active card) */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 28,
                      delay: 0.05,
                    }}
                    className="w-[52%] h-full rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl bg-[#08101C] shrink-0"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    
                    {/* Subtle ambient gradient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101D32]/50 via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                )}

              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ================= MOBILE & TABLET VIEW (Vertical Adaptive Accordion) ================= */}
      <div className="flex lg:hidden flex-col gap-3 w-full">
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={item.id}
              layout
              onClick={() => handleCardSelect(index)}
              className={`rounded-[18px] overflow-hidden border transition-all duration-300 ${
                isActive
                  ? 'border-[#D7B77A]/50 shadow-xl'
                  : 'border-white/10 hover:border-white/20'
              }`}
              style={{
                backgroundColor: isActive ? activeCardBgColor : cardBgColor,
              }}
            >
              <div className="p-5 sm:p-6 flex flex-col">
                {/* Header row: Number + Title */}
                <div className="flex items-start justify-between gap-3 cursor-pointer">
                  <div className="flex items-baseline gap-3">
                    <span className={`font-['Plus_Jakarta_Sans'] font-extrabold text-xl tracking-tight ${
                      isActive ? 'text-[#D7B77A]' : 'text-white/50'
                    }`}>
                      {item.number}
                    </span>
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-base sm:text-lg text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <span className={`text-sm text-[#D7B77A] font-mono transition-transform duration-300 ${
                    isActive ? 'rotate-90' : ''
                  }`}>
                    +
                  </span>
                </div>

                {/* Expanded content */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pt-4 space-y-4"
                  >
                    <p className="font-['Inter'] text-sm text-[#94A3B8] leading-relaxed">
                      {item.description}
                    </p>

                    <div className="w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-[#08101C]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
};

export default CollapsingCards;
