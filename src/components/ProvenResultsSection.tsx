import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface ClientLogo {
  name: string;
  src: string;
}

const topRowLogos: ClientLogo[] = [
  { name: 'Intel', src: '/logos/Intel_transperent.png' },
  { name: 'Infosys', src: '/logos/Infosys_transperent.png' },
  { name: 'Trend Micro', src: '/logos/trend-micro transperent.png' },
  { name: 'Commvault', src: '/logos/Commvault Monochrome Logo.png' },
  { name: 'Informatica', src: '/logos/informatica_monochrome_transparent.png' },
];

const bottomRowLogos: ClientLogo[] = [
  { name: 'ZoomInfo', src: '/logos/zoom-info transperent.png' },
  { name: 'F-Secure', src: '/logos/F-Secure Gray Logo on Transparency.png' },
];

export const ProvenResultsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Track scroll progression through the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // 1. Scroll-to-reveal: brackets fade in and smoothly glide inward from the sides
  const bracketOpacity = useTransform(scrollYProgress, [0.08, 0.28], [0, 1]);
  const leftBracketX = useTransform(scrollYProgress, [0.08, 0.28], [-30, 0]);
  const rightBracketX = useTransform(scrollYProgress, [0.08, 0.28], [30, 0]);

  // 2. Growth phase: as user hits the last area of this section, brackets slightly increase in size
  const bracketScale = useTransform(
    scrollYProgress,
    [0.28, 0.55, 0.85],
    [1.0, 1.0, 1.18]
  );

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      className="w-full relative min-h-screen flex flex-col justify-center py-20 sm:py-28 md:py-36 border-t border-[#E8E3D9] scroll-mt-28 bg-[#FAF8F5] overflow-hidden"
      aria-label="Proven Results Across Enterprise ABM"
    >
      <div className="w-full max-w-[1220px] xl:max-w-[1280px] 2xl:max-w-[1340px] mx-auto px-4 sm:px-6">
        
        {/* Flanking Layout: Brackets brought closer to snuggly embrace the content */}
        <div className="relative flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          
          {/* ================= LEFT CURLY BRACKET (DM SANS) ================= */}
          <motion.div
            style={
              prefersReducedMotion
                ? {}
                : {
                    opacity: bracketOpacity,
                    x: leftBracketX,
                    scale: bracketScale,
                    transformOrigin: 'left center',
                  }
            }
            className="shrink-0 flex items-center justify-center text-[#101D32] select-none pointer-events-none"
            aria-hidden="true"
          >
            <span className="font-['DM_Sans'] font-light text-[200px] sm:text-[270px] md:text-[360px] lg:text-[440px] xl:text-[500px] 2xl:text-[540px] scale-y-[1.08] leading-none select-none inline-block">
              &#123;
            </span>
          </motion.div>

          {/* ================= CENTER CONTENT ================= */}
          <div className="flex-1 max-w-[780px] lg:max-w-[840px] xl:max-w-[880px] mx-auto text-center px-2 sm:px-4 md:px-6 z-10">
            {/* Main Headline */}
            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] text-[#101D32] tracking-tight leading-[1.15] mb-3 sm:mb-4 max-w-[680px] sm:max-w-[740px] mx-auto">
              Proven Results Across Enterprise ABM<span className="text-[#FF5A1F]">.</span>
            </h2>

            {/* Subheadline */}
            <p className="font-['Inter'] text-sm sm:text-base md:text-lg lg:text-xl text-[#575550] max-w-xl sm:max-w-2xl mx-auto leading-relaxed font-normal mb-10 sm:mb-14 md:mb-16">
              See how cybersecurity leaders turn target accounts into pipeline.
            </p>

            {/* Client Logos: 5 on Top Row, 2 on Bottom Row */}
            <div className="w-full flex flex-col items-center justify-center">
              {/* Top Row: 5 Logos */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-9 mb-6 sm:mb-8 md:mb-10">
                {topRowLogos.map((logo) => (
                  <div
                    key={logo.name}
                    className="flex items-center justify-center py-2 px-1 sm:px-1.5 transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      className="h-6 sm:h-7 md:h-8 lg:h-8 max-w-[95px] sm:max-w-[110px] md:max-w-[125px] object-contain grayscale opacity-65 hover:opacity-100 hover:grayscale-0 transition-all duration-300 select-none"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Bottom Row: 2 Logos */}
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-9 md:gap-11 lg:gap-13">
                {bottomRowLogos.map((logo) => (
                  <div
                    key={logo.name}
                    className="flex items-center justify-center py-2 px-1 sm:px-1.5 transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      className="h-6 sm:h-7 md:h-8 lg:h-8 max-w-[105px] sm:max-w-[120px] md:max-w-[135px] object-contain grayscale opacity-65 hover:opacity-100 hover:grayscale-0 transition-all duration-300 select-none"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT CURLY BRACKET (DM SANS) ================= */}
          <motion.div
            style={
              prefersReducedMotion
                ? {}
                : {
                    opacity: bracketOpacity,
                    x: rightBracketX,
                    scale: bracketScale,
                    transformOrigin: 'right center',
                  }
            }
            className="shrink-0 flex items-center justify-center text-[#101D32] select-none pointer-events-none"
            aria-hidden="true"
          >
            <span className="font-['DM_Sans'] font-light text-[200px] sm:text-[270px] md:text-[360px] lg:text-[440px] xl:text-[500px] 2xl:text-[540px] scale-y-[1.08] leading-none select-none inline-block">
              &#125;
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProvenResultsSection;
