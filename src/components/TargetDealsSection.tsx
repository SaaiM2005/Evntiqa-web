import React from 'react';
import { motion } from 'framer-motion';
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
  return (
    <section
      id="deals"
      className="w-full py-20 sm:py-28 lg:py-32 border-t border-[#E8E3D9] scroll-mt-28 relative overflow-hidden bg-[#FAF8F5]"
      aria-label="Turn Target Accounts into Deals"
    >
      {/* Background architectural dot pattern matching FAQ */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(#101D32_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Ambient Theme Color Blobs for Depth and Warmth */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[520px] h-[520px] bg-gradient-to-br from-[#FF5A1F]/[0.08] via-[#D7B77A]/[0.05] to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-[#FF5A1F]/[0.05] to-transparent rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-[1400px] 2xl:max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
          
          {/* ================= LEFT COLUMN: HEADLINE, SUBHEADLINE & CTA BUTTON ================= */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-start"
          >
            {/* Headline with signature Playfair italic accent & brand orange theme */}
            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] text-[#101D32] tracking-tight leading-[1.08] mb-5">
              Turn Target Accounts<br className="hidden sm:inline" /> into{' '}
              <span className="font-['Playfair_Display'] italic font-normal text-[#FF5A1F]">
                Deals
              </span>
              <span className="text-[#FF5A1F]">.</span>
            </h2>

            {/* Subheadline */}
            <p className="font-['Inter'] text-base sm:text-lg text-[#575550] leading-relaxed max-w-sm mb-8">
              Activate stalled, dormant, and net-new global enterprise accounts.
            </p>

            {/* Micro-animated CTA Button */}
            <div>
              <motion.a
                href="#contact"
                onClick={() => trackCtaClick('Talk to an ABM Expert', '#contact')}
                whileHover={{ scale: 1.025, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3.5 px-8 sm:px-9 py-4 sm:py-4.5 rounded-full bg-[#111111] text-white font-['Inter'] font-medium text-base sm:text-[17px] hover:bg-[#1E1D1A] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_32px_rgba(255,90,31,0.25)] border border-[#2B2925] group cursor-pointer"
              >
                <span>Talk to an ABM Expert</span>
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[#FF5A1F] group-hover:bg-[#FF5A1F] group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                  →
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN: INTERACTIVE METRICS CARD ================= */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="relative overflow-hidden w-full bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-[#E8E3D9] p-6 sm:p-9 lg:p-10 shadow-[0_12px_44px_-8px_rgba(16,29,50,0.06),0_0_0_1px_rgba(255,255,255,0.8)] hover:shadow-[0_20px_56px_-10px_rgba(255,90,31,0.12)] transition-shadow duration-500">
              {/* Subtle top hairline gradient in brand orange */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#FF5A1F]/50 to-transparent pointer-events-none" />

              <div className="divide-y divide-[#EFECE6]">
                {METRICS.map((metric, index) => (
                  <motion.div
                    key={metric.stat}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: 0.15 + index * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group relative py-5 sm:py-6 first:pt-2 last:pb-2 px-3 sm:px-4 -mx-3 sm:-mx-4 rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-[#FAF8F5] flex items-center justify-between gap-4 cursor-default"
                  >
                    <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                      {/* Stat Number with theme color hover pulse */}
                      <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl sm:text-3xl lg:text-[38px] text-[#101D32] tracking-tight group-hover:text-[#FF5A1F] transition-colors duration-300 shrink-0 min-w-[95px] sm:min-w-[130px]">
                        {metric.stat}
                      </span>

                      {/* Micro-animated Theme Dash: expands and turns orange on hover */}
                      <div className="flex items-center shrink-0">
                        <span
                          className="h-[2px] w-6 sm:w-8 bg-[#DDD7CB] group-hover:w-11 group-hover:bg-[#FF5A1F] transition-all duration-300 rounded-full"
                          aria-hidden="true"
                        />
                      </div>

                      {/* Label with micro color transition */}
                      <span className="font-['Inter'] text-base sm:text-lg text-[#575550] group-hover:text-[#101D32] font-medium leading-snug transition-colors duration-300">
                        {metric.label}
                      </span>
                    </div>

                    {/* Micro-interaction indicator that glides in on hover */}
                    <div className="hidden sm:flex items-center shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#FF5A1F]">
                      <span className="w-7 h-7 rounded-full bg-[#FF5A1F]/10 flex items-center justify-center text-xs font-bold">
                        →
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TargetDealsSection;
