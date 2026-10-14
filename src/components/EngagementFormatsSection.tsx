import React from 'react';
import { CollapsingCards, type CollapsingCardItem } from './CollapsingCards';

const formats: CollapsingCardItem[] = [
  {
    id: 'virtual-roundtables',
    number: '01',
    title: 'ABM-Driven Virtual Roundtables',
    description:
      'Turn priority-account engagement into meaningful CISO conversations and stronger pipeline opportunities.',
    image: '/images/format-01-roundtables.jpg',
  },
  {
    id: 'executive-dinners',
    number: '02',
    title: 'In-Person Executive Dinners',
    description:
      'Build trusted executive relationships that open doors, deepen account engagement, and help advance strategic deals.',
    image: '/images/format-02-dinners.jpg',
  },
  {
    id: 'webinars',
    number: '03',
    title: 'Webinars',
    description:
      'Expand your reach among security decision-makers, engage potential buyers, and create new sales conversations.',
    image: '/images/format-03-webinars.jpg',
  },
  {
    id: 'audience-acquisition',
    number: '04',
    title: 'Audience Acquisition',
    description:
      'Reach the right security decision-makers to strengthen event attendance and engage priority accounts.',
    image: '/images/format-04-audience.jpg',
  },
];

export const EngagementFormatsSection: React.FC = () => {
  return (
    <section
      id="solutions"
      className="w-full relative py-16 sm:py-24 border-t border-[#E8E3D9] scroll-mt-28 bg-[#FAF8F5]"
      aria-label="Engagement Formats"
    >
      <div className="w-full max-w-[1400px] 2xl:max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="mb-10 sm:mb-12">
          <div className="max-w-3xl">
            {/* Headline */}
            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] text-[#101D32] tracking-tight leading-[1.1] mb-2 sm:mb-3">
              Engagement Formats Built for{' '}
              <span className="font-['Playfair_Display'] italic font-normal text-[#D7B77A] inline-block selection:text-white">
                Pipeline
              </span>
              <span className="text-[#FF5A1F]">.</span>
            </h2>

            {/* Subheadline */}
            <p className="font-['Inter'] text-base sm:text-lg md:text-xl text-[#687587] leading-relaxed max-w-2xl font-normal">
              Four targeted formats built to engage your priority account list.
            </p>
          </div>
        </div>

        {/* ================= COLLAPSING CARDS COMPONENT ================= */}
        <CollapsingCards items={formats} />

      </div>
    </section>
  );
};
export default EngagementFormatsSection;
