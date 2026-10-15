import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, X, Shield, Lock, FileText } from 'lucide-react';

interface FooterProps {
  onNavigate?: (path: string) => void;
  onOpenCalendar?: () => void;
  currentPath?: string;
}

type LegalModalType = 'privacy' | 'gdpr' | 'ccpa' | 'terms' | null;

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenCalendar,
  currentPath = '/',
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState<LegalModalType>(null);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('hello@evntiqa.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSectionClick = (sectionId: string) => {
    if (currentPath !== '/') {
      if (onNavigate) {
        onNavigate('/');
        // Wait for page to render then scroll
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        window.location.href = `/#${sectionId}`;
      }
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handlePageNavigate = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.href = path;
    }
  };

  return (
    <>
      <footer className="w-full bg-[#FAF7F2] border-t border-[#E8E3D9] pt-16 pb-12 text-[#121212] relative overflow-hidden">
        {/* Subtle decorative architectural background accents */}
        <div className="absolute inset-0 pointer-events-none bg-blueprint-grid opacity-30" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF5A1F]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-[1400px] 2xl:max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-14 pb-14 border-b border-[#E8E3D9]">
            
            {/* Column 1: Brand & Positioning Statement (md:col-span-5) */}
            <div className="md:col-span-5 lg:col-span-5 flex flex-col justify-between">
              <div>
                <a
                  href="#hero"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPath !== '/') {
                      handlePageNavigate('/');
                    } else {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="inline-block group focus:outline-none focus:ring-2 focus:ring-[#FF5A1F] rounded-lg"
                  aria-label="Evntiqa Home"
                >
                  <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-[28px] sm:text-[30px] tracking-tight text-[#111111] group-hover:opacity-85 transition-opacity">
                    evntiqa<span className="text-[#FF5A1F]">.</span>
                  </span>
                </a>

                <p className="mt-4 text-[#575550] text-sm sm:text-base leading-relaxed max-w-md font-['Inter']">
                  Zero-lift CISO engagement programs engineered to activate priority accounts and accelerate enterprise pipeline.
                </p>
              </div>

              {/* Trust Badge / Direct CISO Touchpoint */}
              <div className="mt-8 pt-6 border-t border-[#E8E3D9]/60 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-[#787570] font-['Inter']">
                  Accepting enterprise partner cohorts for H1/H2 2027
                </span>
              </div>
            </div>

            {/* Column 2: Explore (md:col-span-3 lg:col-span-3) */}
            <div className="md:col-span-3 lg:col-span-3">
              <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-xs uppercase tracking-wider text-[#121212] mb-5">
                Explore
              </h4>
              <ul className="space-y-3 text-sm font-['Inter']">
                <li>
                  <button
                    type="button"
                    onClick={() => handleSectionClick('hero')}
                    className="text-[#575550] hover:text-[#FF5A1F] transition-colors cursor-pointer text-left"
                  >
                    CISO Roundtables
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleSectionClick('accounts')}
                    className="text-[#575550] hover:text-[#FF5A1F] transition-colors cursor-pointer text-left"
                  >
                    Accounts We Activate
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleSectionClick('solutions')}
                    className="text-[#575550] hover:text-[#FF5A1F] transition-colors cursor-pointer text-left"
                  >
                    Solutions
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleSectionClick('case-studies')}
                    className="text-[#575550] hover:text-[#FF5A1F] transition-colors cursor-pointer text-left"
                  >
                    Case Studies
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenCalendar}
                    className="text-[#575550] hover:text-[#FF5A1F] transition-colors flex items-center gap-1.5 cursor-pointer text-left group"
                  >
                    <span>2027 Virtual CISO Calendar</span>
                    <span className="text-[10px] bg-[#FF5A1F]/10 text-[#FF5A1F] font-semibold px-1.5 py-0.5 rounded group-hover:bg-[#FF5A1F] group-hover:text-white transition-colors">
                      Live
                    </span>
                  </button>
                </li>
                <li>
                  <a
                    href="https://thecisonews.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#575550] hover:text-[#FF5A1F] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>TheCISONews.com</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#8E8A82] group-hover:text-[#FF5A1F] transition-colors" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Company (md:col-span-2 lg:col-span-2) */}
            <div className="md:col-span-2 lg:col-span-2">
              <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-xs uppercase tracking-wider text-[#121212] mb-5">
                Company
              </h4>
              <ul className="space-y-3 text-sm font-['Inter']">
                <li>
                  <button
                    type="button"
                    onClick={() => handlePageNavigate('/about')}
                    className="text-[#575550] hover:text-[#FF5A1F] transition-colors cursor-pointer text-left"
                  >
                    About us
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handlePageNavigate('/blogs')}
                    className="text-[#575550] hover:text-[#FF5A1F] transition-colors cursor-pointer text-left"
                  >
                    Blogs
                  </button>
                </li>
                <li>
                  <a
                    href="mailto:careers@evntiqa.com?subject=Career%20Inquiry%20-%20Evntiqa"
                    className="text-[#575550] hover:text-[#FF5A1F] transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span>Careers</span>
                    <span className="text-[10px] bg-[#EAE5DC] text-[#575550] font-medium px-1.5 py-0.5 rounded group-hover:bg-[#FF5A1F]/10 group-hover:text-[#FF5A1F] transition-colors">
                      Hiring
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Let’s Connect (md:col-span-2 lg:col-span-2) */}
            <div className="md:col-span-2 lg:col-span-2">
              <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-xs uppercase tracking-wider text-[#121212] mb-5">
                Let’s Connect
              </h4>

              {/* Social Icons (LinkedIn + Gmail) */}
              <div className="flex items-center gap-3 mb-4">
                {/* LinkedIn Icon */}
                <a
                  href="https://www.linkedin.com/company/evntiqa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#EDE7DC] hover:bg-[#0A66C2] text-[#121212] hover:text-white flex items-center justify-center transition-all duration-200 border border-[#DDD6C8] hover:border-[#0A66C2] hover:shadow-sm"
                  aria-label="Evntiqa on LinkedIn"
                  title="Connect on LinkedIn"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                  </svg>
                </a>

                {/* Gmail Icon */}
                <a
                  href="mailto:hello@evntiqa.com"
                  className="w-10 h-10 rounded-xl bg-[#EDE7DC] hover:bg-[#EA4335] text-[#121212] hover:text-white flex items-center justify-center transition-all duration-200 border border-[#DDD6C8] hover:border-[#EA4335] hover:shadow-sm"
                  aria-label="Email EVNTIQA via Gmail"
                  title="Send Email to hello@evntiqa.com"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
              </div>

              {/* Direct Email Address display with quick copy */}
              <div className="mt-3">
                <a
                  href="mailto:hello@evntiqa.com"
                  className="text-xs text-[#575550] hover:text-[#111111] font-medium transition-colors break-all block"
                >
                  hello@evntiqa.com
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="mt-1.5 inline-flex items-center gap-1 text-[11px] text-[#8E8A82] hover:text-[#111111] transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-700 font-medium">Copied to clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy email address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Legal + Copyright + Silicon Mango Attribution */}
          <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-5 text-xs text-[#787570] font-['Inter']">
            {/* Left / Center Area: Copyright & Legal Links */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
              <span>© 2027 EVNTIQA Inc. All rights reserved.</span>
              
              <div className="flex flex-wrap items-center justify-center gap-2 text-[#787570]">
                <button
                  type="button"
                  onClick={() => setActiveLegalModal('privacy')}
                  className="hover:text-[#111111] transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
                <span className="text-[#D0C9BD]">|</span>
                <button
                  type="button"
                  onClick={() => setActiveLegalModal('gdpr')}
                  className="hover:text-[#111111] transition-colors cursor-pointer"
                >
                  GDPR Compliance
                </button>
                <span className="text-[#D0C9BD]">|</span>
                <button
                  type="button"
                  onClick={() => setActiveLegalModal('ccpa')}
                  className="hover:text-[#111111] transition-colors cursor-pointer"
                >
                  CCPA Statement
                </button>
                <span className="text-[#D0C9BD]">|</span>
                <button
                  type="button"
                  onClick={() => setActiveLegalModal('terms')}
                  className="hover:text-[#111111] transition-colors cursor-pointer"
                >
                  Terms & Conditions
                </button>
              </div>
            </div>

            {/* Bottom Right Corner: Developed by Silicon Mango */}
            <div className="flex items-center gap-1.5 text-xs text-[#787570]">
              <span>Developed by</span>
              <a
                href="https://www.siliconmango.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#111111] hover:text-[#FF5A1F] transition-colors inline-flex items-center gap-0.5 group underline decoration-[#D0C9BD] hover:decoration-[#FF5A1F] underline-offset-2"
              >
                Silicon Mango
                <ArrowUpRight className="w-3 h-3 text-[#8E8A82] group-hover:text-[#FF5A1F] transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Accessible Interactive Legal Modal for Compliance Disclosures */}
      {activeLegalModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveLegalModal(null)}
        >
          <div
            className="w-full max-w-2xl bg-[#FAF8F5] border border-[#E8E3D9] rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#E8E3D9]">
              <div className="flex items-center gap-2.5">
                {activeLegalModal === 'privacy' && <Lock className="w-5 h-5 text-[#FF5A1F]" />}
                {activeLegalModal === 'gdpr' && <Shield className="w-5 h-5 text-[#FF5A1F]" />}
                {activeLegalModal === 'ccpa' && <Shield className="w-5 h-5 text-[#FF5A1F]" />}
                {activeLegalModal === 'terms' && <FileText className="w-5 h-5 text-[#FF5A1F]" />}
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#111111]">
                  {activeLegalModal === 'privacy' && 'Privacy Policy'}
                  {activeLegalModal === 'gdpr' && 'GDPR Compliance Statement'}
                  {activeLegalModal === 'ccpa' && 'California Consumer Privacy Act (CCPA)'}
                  {activeLegalModal === 'terms' && 'Terms & Conditions of Service'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveLegalModal(null)}
                className="p-1.5 rounded-lg text-[#787570] hover:text-[#111111] hover:bg-[#EAE5DC] transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-5 space-y-4 text-sm text-[#575550] leading-relaxed font-['Inter']">
              {activeLegalModal === 'privacy' && (
                <>
                  <p>
                    EVNTIQA Inc. respects your privacy and is dedicated to protecting confidential business and personal data. We exclusively curate private executive roundtables and executive intelligence briefings for senior enterprise security leaders and vetted enterprise technology sponsors.
                  </p>
                  <p>
                    Information collected across registrations, executive calendar requests, and roundtable dialogues is used strictly for event curation, verified peer matching, and bilateral pipeline acceleration. We never sell, lease, or distribute private contact records to third-party data brokers.
                  </p>
                  <p>
                    For privacy inquiries or data rights requests, please reach out to <a href="mailto:hello@evntiqa.com" className="text-[#FF5A1F] underline">hello@evntiqa.com</a>.
                  </p>
                </>
              )}

              {activeLegalModal === 'gdpr' && (
                <>
                  <p>
                    In accordance with the General Data Protection Regulation (GDPR) (EU 2016/679), EVNTIQA operates as both a Data Controller and Data Processor with stringent technical and organizational safeguards.
                  </p>
                  <p>
                    EU and UK participants hold full rights under GDPR including the Right of Access, Right to Rectification, Right to Erasure (&quot;Right to be Forgotten&quot;), and Right to Object to processing. Processing of corporate contact data is conducted under legitimate business interest for verified B2B executive communications.
                  </p>
                </>
              )}

              {activeLegalModal === 'ccpa' && (
                <>
                  <p>
                    Under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), California residents are entitled to notice regarding personal information collected, disclosed, or retained.
                  </p>
                  <p>
                    EVNTIQA does not sell personal information as defined by California law. You may submit requests to know, access, delete, or correct your personal information at any time by contacting us directly at <a href="mailto:hello@evntiqa.com" className="text-[#FF5A1F] underline">hello@evntiqa.com</a>.
                  </p>
                </>
              )}

              {activeLegalModal === 'terms' && (
                <>
                  <p>
                    Participation in EVNTIQA roundtables, programs, and digital properties is governed by Chatham House Rule and verified enterprise eligibility. Attendees and sponsors agree to preserve executive confidentiality regarding strategic disclosures shared during closed-door sessions.
                  </p>
                  <p>
                    All materials, proprietary methodologies, calendar programs, and trademarks are the exclusive intellectual property of EVNTIQA Inc. All rights reserved.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8E3D9] flex justify-end">
              <button
                type="button"
                onClick={() => setActiveLegalModal(null)}
                className="px-4 py-2 bg-[#111111] hover:bg-[#262626] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
