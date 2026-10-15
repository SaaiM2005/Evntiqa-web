import { useState } from 'react';
import { trackConversion } from '../utils/analytics';
import { Check, Send, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    targetAccounts: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackConversion('abm_expert_consultation_form', {
      company: formData.company,
      targetAccountsCount: formData.targetAccounts,
    });
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full py-16 sm:py-24 border-t border-[#E8E3D9] scroll-mt-28" aria-label="Talk to an ABM Expert">
      <div className="max-w-[1400px] 2xl:max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#2B2925] shadow-2xl relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5A1F]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Value Prop */}
            <div className="lg:col-span-6 space-y-6">
              {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5A1F]/15 border border-[#FF5A1F]/30 text-[#FF5A1F] text-xs font-['Montserrat'] font-semibold tracking-wider uppercase">
                <PhoneCall className="w-3.5 h-3.5" />
                Executive ABM Consultation
              </div> */}

              <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.08]">
                Talk to an ABM Expert about activating your target CISOs.
              </h2>

              <p className="font-['Inter'] text-white/70 text-base sm:text-lg leading-relaxed">
                Schedule a 20-minute strategic consultation. We'll analyze your tier-1 account wishlist and map out a bespoke roundtable blueprint guaranteed to engage enterprise security leaders.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <ShieldCheck className="w-4 h-4 text-[#FF5A1F] shrink-0" />
                  <span>100% CISO attendance guarantee backed by replacement seats</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <ShieldCheck className="w-4 h-4 text-[#FF5A1F] shrink-0" />
                  <span>Custom ICP account tiering & persona alignment</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <ShieldCheck className="w-4 h-4 text-[#FF5A1F] shrink-0" />
                  <span>Full post-event intelligence and account activation dossier</span>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-6">
              <div className="bg-[#1C1A17] p-8 sm:p-10 rounded-2xl border border-[#34302B]">
                {submitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-14 h-14 bg-[#FF5A1F]/20 text-[#FF5A1F] rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-7 h-7" />
                    </div>
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-2xl text-white">
                      Request Received!
                    </h3>
                    <p className="font-['Inter'] text-sm text-white/70 max-w-sm mx-auto">
                      Our Head of Enterprise ABM will review your target account scope and connect within 1 business day.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-2 text-xs text-[#FF5A1F] underline underline-offset-4 hover:text-[#FFA07A] pt-2"
                    >
                      Send another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-['Montserrat'] font-semibold tracking-wider uppercase text-white/70 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-[#34302B] text-white placeholder-white/40 focus:border-[#FF5A1F] focus:outline-none transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-['Montserrat'] font-semibold tracking-wider uppercase text-white/70 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@cybersecurity.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-[#34302B] text-white placeholder-white/40 focus:border-[#FF5A1F] focus:outline-none transition-colors text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-['Montserrat'] font-semibold tracking-wider uppercase text-white/70 mb-1.5">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="CyberTech Solutions"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-[#34302B] text-white placeholder-white/40 focus:border-[#FF5A1F] focus:outline-none transition-colors text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-['Montserrat'] font-semibold tracking-wider uppercase text-white/70 mb-1.5">
                          Target CISO Accounts
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Fortune 500, FinTech"
                          value={formData.targetAccounts}
                          onChange={(e) => setFormData({ ...formData, targetAccounts: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-[#34302B] text-white placeholder-white/40 focus:border-[#FF5A1F] focus:outline-none transition-colors text-sm"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FF5A1F] text-white font-['Inter'] font-semibold text-sm hover:bg-[#E24A12] transition-colors shadow-lg cursor-pointer"
                    >
                      <span>Talk to an ABM Expert</span>
                      <Send className="w-4 h-4" />
                    </button>

                    <p className="text-[11px] text-white/40 text-center pt-1 font-['Inter']">
                      No spam. We respect executive privacy under strict NDA.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
