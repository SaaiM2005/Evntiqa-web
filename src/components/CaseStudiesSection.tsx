import { CheckCircle, Quote } from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  return (
    <section id="testimonials" className="w-full py-16 sm:py-24 border-t border-[#E8E3D9] scroll-mt-28 bg-[#F4EFE6]/50" aria-label="Executive Spotlight">
      <div className="max-w-[1400px] 2xl:max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        {/* ================= SECTION 6: EXECUTIVE SPOTLIGHT & TESTIMONIALS ================= */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <Quote className="w-4 h-4 text-[#FF5A1F]" />
            <span className="font-['Montserrat'] font-semibold text-xs uppercase tracking-[0.22em] text-[#55534E]">
              SECTION 06 • EXECUTIVE SPOTLIGHT
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Testimonial 1 */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#111111] text-white flex flex-col justify-between border border-[#2B2925] relative">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#FF5A1F] text-xs font-['Montserrat'] font-semibold uppercase tracking-wider">
                  <CheckCircle className="w-4 h-4" />
                  Global Cloud Security Unicorn
                </div>
                <blockquote className="font-['Playfair_Display'] italic text-xl sm:text-2xl text-white/95 leading-relaxed">
                  "Evntiqa brought 11 Fortune 500 CISOs into one virtual room who had never answered our SDR emails. Within 60 days, 7 turned into active POC evaluations."
                </blockquote>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-['Plus_Jakarta_Sans'] font-bold text-sm text-white">
                    VP of Global Demand Gen & ABM
                  </div>
                  <div className="text-xs text-white/60">
                    Series D Cybersecurity Unicorn ($2B Valuation)
                  </div>
                </div>
                <span className="font-['Caveat'] text-[#FF5A1F] text-lg">
                  $3.8M Qualified Pipeline
                </span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CB] flex flex-col justify-between relative">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#FF5A1F] text-xs font-['Montserrat'] font-semibold uppercase tracking-wider">
                  <CheckCircle className="w-4 h-4" />
                  Enterprise Identity & Access Leader
                </div>
                <blockquote className="font-['Playfair_Display'] italic text-xl sm:text-2xl text-[#111111] leading-relaxed">
                  "The moderation caliber and senior CISO engagement was completely unmatched. It didn't feel like a vendor pitch; it was genuine strategic consultation."
                </blockquote>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8E3D9] flex items-center justify-between">
                <div>
                  <div className="font-['Plus_Jakarta_Sans'] font-bold text-sm text-[#111111]">
                    Head of Field & Executive Marketing
                  </div>
                  <div className="text-xs text-[#55534E]">
                    Enterprise Security Solutions Provider
                  </div>
                </div>
                <span className="font-['Caveat'] text-[#FF5A1F] text-lg">
                  9 Follow-up Demos
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudiesSection;
