import { TrendingUp, CheckCircle, Quote } from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  return (
    <section id="case-studies" className="w-full py-16 sm:py-24 border-t border-[#E8E3D9] scroll-mt-28 bg-[#F4EFE6]/50" aria-label="Case Studies">
      <div className="max-w-[1400px] 2xl:max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        
        {/* ================= SECTION 5: METRICS & CASE STUDIES ================= */}
        <div className="mb-20">
          <div className="flex items-center gap-2.5 mb-4">
            <TrendingUp className="w-4 h-4 text-[#FF5A1F]" />
            <span className="font-['Montserrat'] font-semibold text-xs uppercase tracking-[0.22em] text-[#55534E]">
              SECTION 05 • VERIFIED IMPACT
            </span>
          </div>

          <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#111111] tracking-tight mb-12">
            Real enterprise numbers. Zero vanity metrics.
          </h2>

          {/* Metric KPI cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CB]">
              <div className="font-['Plus_Jakarta_Sans'] font-extrabold text-4xl sm:text-5xl text-[#111111] mb-2">
                100%
              </div>
              <div className="font-['Montserrat'] font-semibold text-xs tracking-wider uppercase text-[#FF5A1F] mb-1">
                Attendance Guarantee
              </div>
              <p className="font-['Inter'] text-xs text-[#55534E]">
                Target account CISO seat fulfillment backed by our replacement protocol.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CB]">
              <div className="font-['Plus_Jakarta_Sans'] font-extrabold text-4xl sm:text-5xl text-[#111111] mb-2">
                $4.2M
              </div>
              <div className="font-['Montserrat'] font-semibold text-xs tracking-wider uppercase text-[#FF5A1F] mb-1">
                Avg. Pipeline Influenced
              </div>
              <p className="font-['Inter'] text-xs text-[#55534E]">
                Direct and influenced 6-month pipeline generated per multi-roundtable series.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CB]">
              <div className="font-['Plus_Jakarta_Sans'] font-extrabold text-4xl sm:text-5xl text-[#111111] mb-2">
                84%
              </div>
              <div className="font-['Montserrat'] font-semibold text-xs tracking-wider uppercase text-[#FF5A1F] mb-1">
                Meeting Conversion
              </div>
              <p className="font-['Inter'] text-xs text-[#55534E]">
                Of participating CISOs agree to post-event 1-on-1 strategic follow-up discussions.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CB]">
              <div className="font-['Plus_Jakarta_Sans'] font-extrabold text-4xl sm:text-5xl text-[#111111] mb-2">
                250+
              </div>
              <div className="font-['Montserrat'] font-semibold text-xs tracking-wider uppercase text-[#FF5A1F] mb-1">
                Roundtables Hosted
              </div>
              <p className="font-['Inter'] text-xs text-[#55534E]">
                Trusted by high-growth cybersecurity innovators and Fortune 500 vendors.
              </p>
            </div>
          </div>
        </div>

        {/* ================= SECTION 6: EXECUTIVE SPOTLIGHT & TESTIMONIALS ================= */}
        <div className="pt-12 border-t border-[#E8E3D9]">
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
