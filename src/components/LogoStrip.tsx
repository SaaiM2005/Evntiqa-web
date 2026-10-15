import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../utils/asset';

interface LogoItem {
  name: string;
  src: string;
}

const clientLogos: LogoItem[] = [
  {
    name: 'Intel',
    src: getAssetUrl('/logos/Intel_transperent.png'),
  },
  {
    name: 'Infosys',
    src: getAssetUrl('/logos/Infosys_transperent.png'),
  },
  {
    name: 'Trend Micro',
    src: getAssetUrl('/logos/trend-micro transperent.png'),
  },
  {
    name: 'Commvault',
    src: getAssetUrl('/logos/Commvault Monochrome Logo.png'),
  },
  {
    name: 'Informatica',
    src: getAssetUrl('/logos/informatica_monochrome_transparent.png'),
  },
  {
    name: 'ZoomInfo',
    src: getAssetUrl('/logos/zoom-info transperent.png'),
  },
  {
    name: 'F-Secure',
    src: getAssetUrl('/logos/F-Secure Gray Logo on Transparency.png'),
  },
];

export const LogoStrip: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    }
  };

  return (
    <section id="enterprise-logos" className="w-full border-t border-[#E8E3D9] pt-6 pb-10" aria-label="Partner and Client Logos">
      {/* Top Label and Controls */}
      <div className="flex items-center justify-between mb-6">
        <span className="font-['Montserrat'] font-semibold text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#787570]">
          ENGAGING GLOBAL ENTERPRISE CISOS
        </span>

        {/* Manual navigation arrows */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={scrollLeft}
            aria-label="Previous logos"
            className="w-8 h-8 rounded-full border border-[#DDD7CB] flex items-center justify-center text-[#55534E] hover:border-[#111111] hover:text-[#111111] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF5A1F]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={scrollRight}
            aria-label="Next logos"
            className="w-8 h-8 rounded-full border border-[#DDD7CB] flex items-center justify-center text-[#55534E] hover:border-[#111111] hover:text-[#111111] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF5A1F]"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Marquee Ticker & Scroll Container */}
      <div
        ref={scrollContainerRef}
        tabIndex={0}
        aria-label="Enterprise client logos marquee"
        className="w-full overflow-x-auto scrollbar-none flex items-center py-2 focus:outline-none"
      >
        <div className="animate-marquee items-center gap-12 sm:gap-16 md:gap-20">
          {/* First loop of client logos */}
          {clientLogos.map((logo, index) => (
            <div
              key={`logo-primary-${index}`}
              className="shrink-0 flex items-center justify-center h-12 px-3"
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="h-8 md:h-9 max-w-[150px] object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300 select-none"
                loading="lazy"
              />
            </div>
          ))}

          {/* Seamless duplicate loop for marquee */}
          {clientLogos.map((logo, index) => (
            <div
              key={`logo-secondary-${index}`}
              className="shrink-0 flex items-center justify-center h-12 px-3"
              aria-hidden="true"
            >
              <img
                src={logo.src}
                alt=""
                className="h-8 md:h-9 max-w-[150px] object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300 select-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
