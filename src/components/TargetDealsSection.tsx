import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { trackCtaClick } from '../utils/analytics';

interface MetricItem {
  stat: string;
  label: string;
}

const METRICS: MetricItem[] = [
  { stat: '100%', label: 'ICP-Verified Executives' },
  { stat: '10X', label: 'Faster Pipeline Velocity' },
  { stat: '1:1', label: 'Priority Account Alignment' },
  { stat: '10–12', label: 'Executives per Roundtable' },
];

export const TargetDealsSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Track scroll progression from the moment the section enters the viewport
  // 'start end': starts immediately as soon as the top of the section enters the bottom of the viewport
  // 'center 38%': completes when the section is centered and settled in view
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'center 38%'],
  });

  // Sequential scroll-to-reveal transforms for each metric entry:
  // Starts loading as soon as user enters the section, so the box is never blank
  // Entry 1: 100% ICP-Verified Executives
  const opacity1 = useTransform(scrollYProgress, [0.02, 0.22], [0, 1]);
  const x1 = useTransform(scrollYProgress, [0.02, 0.22], [36, 0]);
  const scale1 = useTransform(scrollYProgress, [0.02, 0.22], [0.97, 1]);

  // Entry 2: 10X Faster Pipeline Velocity
  const opacity2 = useTransform(scrollYProgress, [0.22, 0.44], [0, 1]);
  const x2 = useTransform(scrollYProgress, [0.22, 0.44], [36, 0]);
  const scale2 = useTransform(scrollYProgress, [0.22, 0.44], [0.97, 1]);

  // Entry 3: 1:1 Priority Account Alignment
  const opacity3 = useTransform(scrollYProgress, [0.44, 0.66], [0, 1]);
  const x3 = useTransform(scrollYProgress, [0.44, 0.66], [36, 0]);
  const scale3 = useTransform(scrollYProgress, [0.44, 0.66], [0.97, 1]);

  // Entry 4: 10–12 Executives per Roundtable
  const opacity4 = useTransform(scrollYProgress, [0.66, 0.88], [0, 1]);
  const x4 = useTransform(scrollYProgress, [0.66, 0.88], [36, 0]);
  const scale4 = useTransform(scrollYProgress, [0.66, 0.88], [0.97, 1]);

  // Subtle card top border reveal indicator
  const cardBorderWidth = useTransform(scrollYProgress, [0.02, 0.88], ['0%', '100%']);

  const metricStyles = [
    { opacity: opacity1, x: x1, scale: scale1 },
    { opacity: opacity2, x: x2, scale: scale2 },
    { opacity: opacity3, x: x3, scale: scale3 },
    { opacity: opacity4, x: x4, scale: scale4 },
  ];

  return (
    <section
      ref={containerRef}
      id="deals"
      className="w-full py-20 sm:py-28 lg:py-32 border-t border-[#E8E3D9] scroll-mt-28 relative overflow-hidden bg-[#FAF8F5]"
      aria-label="Turn Target Accounts into Deals"
    >
      {/* Background architectural dot pattern matching FAQ */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(#101D32_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Ambient Theme Color Blobs for Depth and Warmth */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[520px] h-[520px] bg-gradient-to-br from-[#FF5A1F]/[0.08] via-[#D7B77A]/[0.05] to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-[#FF5A1F]/[0.05] to-transparent rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-[1400px] 2xl:max-w-[1520px] w-full mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
          
          {/* ================= LEFT COLUMN: HEADLINE, SUBHEADLINE & CTA BUTTON ================= */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            {/* Headline with signature Playfair italic accent & brand orange theme */}
            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] text-[#101D32] tracking-tight leading-[1.08] mb-4 sm:mb-5">
              Turn Target Accounts<br className="hidden sm:inline" /> into{' '}
              <span className="font-['Playfair_Display'] italic font-normal text-[#FF5A1F]">
                Deals
              </span>
              <span className="text-[#FF5A1F]">.</span>
            </h2>

            {/* Subheadline */}
            <p className="font-['Inter'] text-sm sm:text-base md:text-lg text-[#575550] leading-relaxed max-w-sm mb-6 sm:mb-8">
              Activate stalled, dormant, and net-new global enterprise accounts.
            </p>

            {/* Micro-animated CTA Button */}
            <div>
              <motion.a
                href="#contact"
                onClick={() => trackCtaClick('Talk to an ABM Expert', '#contact')}
                whileHover={{ scale: 1.025, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3.5 px-7 sm:px-9 py-3.5 sm:py-4.5 rounded-full bg-[#111111] text-white font-['Inter'] font-medium text-sm sm:text-base md:text-[17px] hover:bg-[#1E1D1A] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_32px_rgba(255,90,31,0.25)] border border-[#2B2925] group cursor-pointer"
              >
                <span>Talk to an ABM Expert</span>
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[#FF5A1F] group-hover:bg-[#FF5A1F] group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                  →
                </span>
              </motion.a>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: SCROLL-TO-REVEAL METRICS CARD ================= */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative overflow-hidden w-full bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-[#E8E3D9] p-5 sm:p-8 lg:p-10 shadow-[0_12px_44px_-8px_rgba(16,29,50,0.06),0_0_0_1px_rgba(255,255,255,0.8)] hover:shadow-[0_20px_56px_-10px_rgba(255,90,31,0.12)] transition-shadow duration-500">
              {/* Scroll-driven top hairline accent in brand orange */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#EFECE6] pointer-events-none">
                <motion.div
                  style={
                    prefersReducedMotion
                      ? { width: '100%' }
                      : { width: cardBorderWidth }
                  }
                  className="h-full bg-gradient-to-r from-[#FF5A1F]/70 via-[#FF5A1F] to-[#D7B77A]"
                />
              </div>

              <div className="divide-y divide-[#EFECE6]">
                {METRICS.map((metric, index) => {
                  const style = metricStyles[index];
                  return (
                    <motion.div
                      key={metric.stat}
                      style={
                        prefersReducedMotion
                          ? {}
                          : {
                              opacity: style.opacity,
                              x: style.x,
                              scale: style.scale,
                            }
                      }
                      className="group relative py-4 sm:py-5 lg:py-6 first:pt-2 last:pb-2 px-3 sm:px-4 -mx-3 sm:-mx-4 rounded-xl sm:rounded-2xl transition-colors duration-300 hover:bg-[#FAF8F5] flex items-center justify-between gap-4 cursor-default select-none"
                    >
                      <div className="flex items-center gap-3 sm:gap-6 min-w-0">
                        {/* Stat Number with theme color hover pulse */}
                        <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[38px] text-[#101D32] tracking-tight group-hover:text-[#FF5A1F] transition-colors duration-300 shrink-0 min-w-[85px] sm:min-w-[120px] lg:min-w-[130px]">
                          {metric.stat}
                        </span>

                        {/* Micro-animated Theme Dash: expands and turns orange on hover */}
                        <div className="flex items-center shrink-0">
                          <span
                            className="h-[2px] w-5 sm:w-8 bg-[#DDD7CB] group-hover:w-11 group-hover:bg-[#FF5A1F] transition-all duration-300 rounded-full"
                            aria-hidden="true"
                          />
                        </div>

                        {/* Label with micro color transition */}
                        <span className="font-['Inter'] text-sm sm:text-base md:text-lg text-[#575550] group-hover:text-[#101D32] font-medium leading-snug transition-colors duration-300">
                          {metric.label}
                        </span>
                      </div>

                      {/* Right arrow pill indicator from prompt */}
                      <div className="flex items-center shrink-0 text-[#FF5A1F]">
                        <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FAF8F5] border border-[#DDD7CB]/70 group-hover:bg-[#FF5A1F] group-hover:text-white group-hover:border-[#FF5A1F] flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-300 group-hover:translate-x-0.5 shadow-sm">
                          →
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TargetDealsSection;
