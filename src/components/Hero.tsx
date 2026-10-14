import React from 'react';
import { ArrowDown } from 'lucide-react';
import { trackCtaClick } from '../utils/analytics';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full bg-warm-dots overflow-hidden pt-8 sm:pt-12 md:pt-16 pb-8 sm:pb-12 md:pb-16 scroll-mt-28" aria-label="Hero Section">
      <div className="relative max-w-[1400px] 2xl:max-w-[1520px] mx-auto w-full px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 xl:gap-6 items-center">
          
          {/* ================= LEFT COLUMN: CONTENT ================= */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start text-left z-10">
            {/* Kicker */}
            <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
              <svg
                className="w-4 h-4 text-[#FF5A1F] shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
              </svg>
              <span className="font-['Montserrat'] font-semibold text-xs sm:text-[13px] lg:text-[13.5px] uppercase tracking-[0.22em] text-[#55534E]">
                FOR GLOBAL CYBERSECURITY MARKETERS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[44px] sm:text-[56px] md:text-[68px] lg:text-[72px] xl:text-[84px] 2xl:text-[92px] leading-[0.98] tracking-[-0.035em] text-[#111111] mb-6 sm:mb-7">
              CISO
              <br />
              Roundtables
              <br />
              <span className="whitespace-nowrap">
                built for{' '}
                <span className="relative inline-block font-['Playfair_Display'] italic font-normal text-[#FF5A1F] pr-1">
                  pipeline
                  {/* Hand-drawn underline brush stroke */}
                  <svg
                    className="absolute -bottom-2 md:-bottom-3.5 left-0 w-full h-3.5 md:h-5 text-[#FF5A1F] overflow-visible"
                    viewBox="0 0 200 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M 2 8 C 45 4, 110 3, 196 9 C 145 13, 75 14, 18 11"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
              <br />
              acceleration.
            </h1>

            {/* Subheadline */}
            <p className="font-['Inter'] text-[#55534E] text-base sm:text-lg lg:text-[20px] xl:text-[21px] leading-relaxed max-w-[620px] mb-8 sm:mb-9 font-normal">
              We bring 10–12 CISOs from your target accounts into invitation-only,
              peer-led conversations—and handle all the heavy lifting from
              recruitment to execution.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-7">
              {/* Primary Pill Button */}
              <a
                href="#contact"
                onClick={() => trackCtaClick('Talk to an ABM Expert', '#contact')}
                className="inline-flex items-center gap-3 px-8 sm:px-9 py-4 sm:py-4.5 rounded-full bg-[#111111] text-white font-['Inter'] font-medium text-base sm:text-[17px] hover:bg-[#2A2925] transition-all duration-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
              >
                <span>Talk to an ABM Expert</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* Secondary Explore Action */}
              <a
                href="#how-it-works"
                onClick={() => trackCtaClick('Explore How it Works', '#how-it-works')}
                className="inline-flex items-center gap-3.5 group cursor-pointer py-1.5 focus:outline-none focus:ring-2 focus:ring-[#FF5A1F] rounded-lg"
              >
                <div className="w-12 h-12 rounded-full border border-[#DCD5C7] flex items-center justify-center text-[#FF5A1F] group-hover:border-[#FF5A1F] group-hover:bg-orange-50/50 transition-all duration-200 shrink-0">
                  <ArrowDown className="w-5 h-5 transition-transform duration-200 group-hover:translate-y-0.5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-['Montserrat'] font-semibold text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-[#3E3C37] leading-tight">
                    EXPLORE
                  </span>
                  <span className="font-['Montserrat'] font-semibold text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-[#787570] leading-tight">
                    HOW IT WORKS
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: LARGER COLLAGE ARTWORK ================= */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-[640px] sm:max-w-[720px] lg:max-w-none lg:w-[135%] xl:w-[144%] 2xl:w-[150%] lg:-ml-[35%] xl:-ml-[44%] 2xl:-ml-[50%]">
              {/* Transparent Collage PNG */}
              <img
                src="/images/hero-collage.png"
                alt="Executive CISO roundtable meeting collage with city skyline, notes and strategic tapes"
                className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-md"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

