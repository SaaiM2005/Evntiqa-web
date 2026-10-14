import React from 'react';
import { ArrowLeft, Sparkles, Target, Users, Award } from 'lucide-react';
import { trackCtaClick } from '../utils/analytics';

interface AboutPageProps {
  onBackToHome: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBackToHome }) => {
  return (
    <div className="min-h-screen bg-warm-dots py-10 sm:py-16">
      <div className="max-w-[1400px] 2xl:max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        {/* Back button */}
        <button
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 mb-8 text-[#55534E] hover:text-[#111111] font-['Inter'] text-sm font-medium transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to CISO Roundtables</span>
        </button>

        {/* Editorial Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2.5 mb-4">
            <Sparkles className="w-4 h-4 text-[#FF5A1F]" />
            <span className="font-['Montserrat'] font-semibold text-xs uppercase tracking-[0.22em] text-[#55534E]">
              ABOUT EVNTIQA
            </span>
          </div>

          <h1 className="font-['Plus_Jakarta_Sans'] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#111111] tracking-tight mb-6">
            Pioneering executive roundtable ABM for global cyber leaders.
          </h1>
          <p className="font-['Inter'] text-lg sm:text-xl text-[#55534E] leading-relaxed">
            Evntiqa was founded with a singular conviction: meaningful peer dialogue outperforms cold sales outreach every single time. We bridge high-growth cybersecurity innovators and enterprise CISOs.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CB] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#111111] text-white flex items-center justify-center">
              <Users className="w-5 h-5 text-[#FF5A1F]" />
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#111111]">
              Vetted Enterprise CISOs
            </h3>
            <p className="font-['Inter'] text-sm text-[#55534E] leading-relaxed">
              Curated participant rooms of 10–12 verified chief security officers matching your exact ideal account profiles.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CB] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#111111] text-white flex items-center justify-center">
              <Target className="w-5 h-5 text-[#FF5A1F]" />
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#111111]">
              Turnkey ABM Execution
            </h3>
            <p className="font-['Inter'] text-sm text-[#55534E] leading-relaxed">
              From bespoke agenda design and executive recruitment to moderation and post-event pipeline acceleration.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CB] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#111111] text-white flex items-center justify-center">
              <Award className="w-5 h-5 text-[#FF5A1F]" />
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#111111]">
              Measurable Pipeline Impact
            </h3>
            <p className="font-['Inter'] text-sm text-[#55534E] leading-relaxed">
              Targeted discussions designed to generate active enterprise opportunities and multi-quarter pipeline acceleration.
            </p>
          </div>
        </div>

        {/* Note tag indicating full page is being built */}
        <div className="p-6 rounded-xl bg-[#F4EFE6] border border-[#DDD7CB] flex items-center justify-between flex-wrap gap-4">
          <span className="font-['Inter'] text-sm text-[#55534E]">
            💡 Detailed company timeline, executive leadership, and case studies page is under final assembly.
          </span>
          <a
            href="#contact"
            onClick={() => {
              trackCtaClick('Talk to an ABM Expert (About Page)', '#contact');
              onBackToHome();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] text-white text-xs font-semibold hover:bg-[#2A2925] transition-colors"
          >
            <span>Talk to an ABM Expert</span>
            <span className="text-[#FF5A1F]">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
