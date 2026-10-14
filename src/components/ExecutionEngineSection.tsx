import React, { useMemo, useState, useEffect } from 'react';
import CurveFlowCarousel, { type CurveSlide } from './CurveFlowCarousel';
import { renderStepCardCanvas, type CardStepData } from '../utils/cardRenderer';

const STEPS_DATA: CardStepData[] = [
  {
    step: '01',
    title: 'ICP & Target Account Mapping',
    description:
      'We identify your ideal customer profile (ICP), map priority accounts, and define the security decision-makers to target.',
  },
  {
    step: '02',
    title: 'Intent & Campaign Alignment',
    description:
      'We align intent signals, account priorities, and campaign goals to focus engagement where it matters.',
  },
  {
    step: '03',
    title: 'Multi-Channel Targeting',
    description:
      'We activate a multi-channel strategy to reach relevant security decision-makers across your target accounts.',
  },
  {
    step: '04',
    title: 'Executive Recruitment',
    description:
      'We recruit CISOs and security leaders from your priority accounts for your engagement.',
  },
  {
    step: '05',
    title: 'Engagement Execution',
    description:
      'We manage the engagement to bring the right security leaders together for meaningful peer conversations.',
  },
  {
    step: '06',
    title: 'Post-Event Handoff',
    description:
      'We share attendee and engagement insights with your team to support follow-up and account progression.',
  },
];

export const ExecutionEngineSection: React.FC = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Ensure fonts are ready before rendering textures to guarantee crisp typography
  useEffect(() => {
    if (typeof document !== 'undefined' && 'fonts' in document) {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    } else {
      setFontsLoaded(true);
    }
  }, []);

  // Generate crisp minimal canvas textures for each step card
  const slides = useMemo<CurveSlide[]>(() => {
    return STEPS_DATA.map((item) => {
      let canvas: HTMLCanvasElement | undefined;
      if (typeof window !== 'undefined') {
        canvas = renderStepCardCanvas(item, 'dark');
      }
      return {
        canvas,
        step: item.step,
        title: item.title,
        description: item.description,
        caption: `Step ${item.step}: ${item.title}`,
      };
    });
    // Re-render canvases once webfonts are loaded
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fontsLoaded]);

  return (
    <section
      id="workflow"
      className="w-full relative pt-10 sm:pt-14 pb-12 sm:pb-16 border-t border-[#E8E3D9] scroll-mt-28 overflow-hidden"
      aria-label="Six Steps to CISO Engagement"
    >
      {/* Centered Headline and Subheadline Container */}
      <div className="w-full max-w-[1400px] 2xl:max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 text-center mb-6 sm:mb-8">
        {/* Subtle Eyebrow Label */}
        {/* <div className="inline-flex items-center justify-center gap-2 mb-3">
          <span className="font-['Montserrat'] font-semibold text-xs uppercase tracking-[0.22em] text-[#FF5A1F]">
            SECTION 04 • EXECUTION PROCESS
          </span>
        </div> */}

        {/* Centered Headline */}
        <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] text-[#101D32] tracking-tight leading-[1.12] mb-3">
          Six Steps to CISO Engagement<span className="text-[#FF5A1F]">.</span>
        </h2>

        {/* Centered SubHeadline */}
        <p className="font-['Inter'] text-base sm:text-lg md:text-xl text-[#575550] max-w-2xl mx-auto leading-relaxed">
          A zero-lift execution process from target mapping to handoff.
        </p>
      </div>

      {/* 
        CurveFlowCarousel Component: 
        Directly on the whole section, not constrained inside a container,
        spanning full edge-to-edge viewport width with enlarged prominent cards.
      */}
      <div className="w-full relative h-[520px] sm:h-[590px] md:h-[640px] lg:h-[680px] select-none">
        <CurveFlowCarousel
          slides={slides}
          frame={{
            heightPct: 65,
            heightCap: 450,
            fit: 'fixed',
            ratio: 1.55,
            spacing: 32,
            corner: 24,
            anchor: 50,
            offset: 0,
            centreSmall: true,
          }}
          curve={{
            flatPct: 48,
            edgeScale: 1.34,
            speedFlare: 1,
            fringe: 0.85,
            fringeOuter: 'rgba(255, 90, 31, 0.75)',
            fringeInner: 'rgba(215, 183, 122, 0.55)',
            split: 1,
          }}
          drive={{
            drag: 1,
            glide: 0.42,
            wheel: 'sideways',
            wheelGain: 1,
            autoplay: 26,
            holdOnHover: true,
            keys: true,
          }}
          reveal={{
            mode: 'lift',
            time: 0.85,
            gap: 0.08,
            wait: 0.1,
            repeat: false,
          }}
          press={{
            behaviour: 'focus',
            newTab: false,
          }}
          backdrop={{
            fill: 'transparent',
            grid: false,
          }}
        />
      </div>

      {/* Subtle Drag & Navigation Hint */}
      {/* <div className="w-full flex items-center justify-center gap-2 mt-4 text-xs font-['Montserrat'] font-medium text-[#8E8A82] tracking-wider uppercase select-none">
        <span>← Drag to explore all 6 steps →</span>
      </div> */}
    </section>
  );
};

export default ExecutionEngineSection;
