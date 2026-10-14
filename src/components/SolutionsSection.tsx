import { Target, Shield, Users } from 'lucide-react';

export const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="w-full py-16 sm:py-24 border-t border-[#E8E3D9] scroll-mt-28" aria-label="Solutions">
      <div className="max-w-[1400px] 2xl:max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        
        {/* ================= SECTION 3: SOLUTIONS OVERVIEW ================= */}
        <div className="mb-20">
          <div className="flex items-center gap-2.5 mb-4">
            <svg
              className="w-4 h-4 text-[#FF5A1F] shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
            </svg>
            <span className="font-['Montserrat'] font-semibold text-xs uppercase tracking-[0.22em] text-[#55534E]">
              SECTION 03 • TAILORED SOLUTIONS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-8">
              <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#111111] tracking-tight leading-[1.08]">
                Bespoke CISO Roundtables built specifically for enterprise account acceleration.
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="font-['Inter'] text-base text-[#55534E] leading-relaxed">
                We combine hyper-targeted executive curation with Chatham House peer dynamics so your sales and marketing teams walk away with active pipeline.
              </p>
            </div>
          </div>

          {/* Solutions 3-card grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#DDD7CB] hover:border-[#FF5A1F] transition-all hover:shadow-lg space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#111111] flex items-center justify-center text-white">
                <Target className="w-6 h-6 text-[#FF5A1F]" />
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#111111]">
                Target Account Selection
              </h3>
              <p className="font-['Inter'] text-sm text-[#55534E] leading-relaxed">
                Provide your tier-1 named account list. We match, recruit, and confirm 10–12 vetted enterprise security decision-makers.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#DDD7CB] hover:border-[#FF5A1F] transition-all hover:shadow-lg space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#111111] flex items-center justify-center text-white">
                <Users className="w-6 h-6 text-[#FF5A1F]" />
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#111111]">
                Peer-Led Executive Moderation
              </h3>
              <p className="font-['Inter'] text-sm text-[#55534E] leading-relaxed">
                Facilitated by former Fortune 500 CISOs and industry thought leaders. No pitch decks—only genuine peer problem-solving.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#DDD7CB] hover:border-[#FF5A1F] transition-all hover:shadow-lg space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#111111] flex items-center justify-center text-white">
                <Shield className="w-6 h-6 text-[#FF5A1F]" />
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#111111]">
                Intent Signals & Pipeline Handoff
              </h3>
              <p className="font-['Inter'] text-sm text-[#55534E] leading-relaxed">
                Receive comprehensive executive summary dossiers, priority pain-point maps, and direct warm follow-up introductions.
              </p>
            </div>
          </div>
        </div>

        {/* ================= SECTION 4: EXECUTION WORKFLOW ================= */}
        <div className="pt-12 border-t border-[#E8E3D9]">
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

      </div>
    </section>
  );
};

export default SolutionsSection;
