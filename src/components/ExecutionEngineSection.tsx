import React from 'react';

export const ExecutionEngineSection: React.FC = () => {
  return (
    <section id="workflow" className="w-full py-16 sm:py-24 border-t border-[#E8E3D9] scroll-mt-28" aria-label="Execution Workflow">
      <div className="max-w-[1400px] 2xl:max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="font-['Montserrat'] font-semibold text-xs uppercase tracking-[0.22em] text-[#55534E]">
            SECTION 04 • 4-PHASE EXECUTION ENGINE
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#111111] mb-10 tracking-tight">
          How we take you from zero to 12 target CISOs in 6 weeks.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-[#F4EFE6] border border-[#E5DFD4] space-y-3 relative overflow-hidden">
            <span className="font-['Montserrat'] font-extrabold text-3xl text-[#111111]/15 absolute top-4 right-4">
              01
            </span>
            <div className="text-xs font-['Montserrat'] uppercase tracking-wider font-semibold text-[#FF5A1F]">
              Step 1
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#111111]">
              ICP Alignment
            </h3>
            <p className="font-['Inter'] text-xs sm:text-sm text-[#55534E] leading-relaxed">
              Define target verticals, company revenue bands, and specific CISO seniority levels.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#F4EFE6] border border-[#E5DFD4] space-y-3 relative overflow-hidden">
            <span className="font-['Montserrat'] font-extrabold text-3xl text-[#111111]/15 absolute top-4 right-4">
              02
            </span>
            <div className="text-xs font-['Montserrat'] uppercase tracking-wider font-semibold text-[#FF5A1F]">
              Step 2
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#111111]">
              White-Glove Outreach
            </h3>
            <p className="font-['Inter'] text-xs sm:text-sm text-[#55534E] leading-relaxed">
              Personalized executive invitations backed by guaranteed 10–12 verified seat confirmations.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#F4EFE6] border border-[#E5DFD4] space-y-3 relative overflow-hidden">
            <span className="font-['Montserrat'] font-extrabold text-3xl text-[#111111]/15 absolute top-4 right-4">
              03
            </span>
            <div className="text-xs font-['Montserrat'] uppercase tracking-wider font-semibold text-[#FF5A1F]">
              Step 3
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#111111]">
              Live Moderation
            </h3>
            <p className="font-['Inter'] text-xs sm:text-sm text-[#55534E] leading-relaxed">
              60–75 minute peer exchange with interactive polling, Chatham House governance, and organic engagement.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#F4EFE6] border border-[#E5DFD4] space-y-3 relative overflow-hidden">
            <span className="font-['Montserrat'] font-extrabold text-3xl text-[#111111]/15 absolute top-4 right-4">
              04
            </span>
            <div className="text-xs font-['Montserrat'] uppercase tracking-wider font-semibold text-[#FF5A1F]">
              Step 4
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#111111]">
              Pipeline Conversion
            </h3>
            <p className="font-['Inter'] text-xs sm:text-sm text-[#55534E] leading-relaxed">
              Debrief, attendee sentiment report, and 1-on-1 discovery meeting transitions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutionEngineSection;
