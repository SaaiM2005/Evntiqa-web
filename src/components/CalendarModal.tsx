import React from 'react';
import { X, Calendar, Download, CheckCircle2, ArrowRight } from 'lucide-react';
import { trackCtaClick } from '../utils/analytics';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const quarters = [
  {
    q: 'Q1 2027',
    theme: 'Zero Trust & AI-Driven Identity Governance',
    dates: 'Feb 18 & Mar 24, 2027',
    format: 'Virtual Executive Room (10-12 CISOs)',
    status: 'Invites Open',
  },
  {
    q: 'Q2 2027',
    theme: 'Cloud Native Application Security & SecOps Automation',
    dates: 'May 12 & Jun 16, 2027',
    format: 'Virtual Executive Room (10-12 CISOs)',
    status: 'Curating Agenda',
  },
  {
    q: 'Q3 2027',
    theme: 'Defending Critical Infrastructure & Ransomware Resilience',
    dates: 'Aug 19 & Sep 22, 2027',
    format: 'Virtual Executive Room (10-12 CISOs)',
    status: 'Upcoming',
  },
  {
    q: 'Q4 2027',
    theme: 'Boardroom Cyber Risk Governance & 2028 Budget Priorities',
    dates: 'Nov 10 & Dec 08, 2027',
    format: 'Virtual Executive Room (10-12 CISOs)',
    status: 'Upcoming',
  },
];

export const CalendarModal: React.FC<CalendarModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="calendar-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
    >
      <div
        className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-2xl border border-[#DDD7CB] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-8 h-8 rounded-full border border-[#DCD5C7] flex items-center justify-center text-[#55534E] hover:text-[#111111] hover:border-[#111111] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FF5A1F]/10 text-[#FF5A1F] font-['Montserrat'] font-semibold text-xs tracking-wider uppercase">
            <Calendar className="w-3.5 h-3.5" />
            2027 Schedule
          </span>
        </div>

        <h2
          id="calendar-modal-title"
          className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl sm:text-3xl text-[#111111] mb-2"
        >
          2027 Virtual CISO Roundtable Calendar
        </h2>
        <p className="font-['Inter'] text-[#55534E] text-sm sm:text-base leading-relaxed mb-6">
          Exclusive, invitation-only virtual executive roundtables connecting 10–12 vetted enterprise CISOs per session. Explore the 2027 annual roadmap below.
        </p>

        {/* Calendar Schedule Grid */}
        <div className="space-y-3.5 mb-8">
          {quarters.map((quarter, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#F4EFE6] border border-[#E5DFD4] flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#FF5A1F]/50 transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-['Montserrat'] font-bold text-xs tracking-wider uppercase text-[#FF5A1F]">
                    {quarter.q}
                  </span>
                  <span className="text-xs text-[#8E8A82]">• {quarter.dates}</span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-[#111111]">
                  {quarter.theme}
                </h3>
                <p className="font-['Inter'] text-xs text-[#575550]">
                  {quarter.format}
                </p>
              </div>

              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-white text-[#111111] border border-[#DDD7CB] shrink-0 self-start sm:self-center">
                <CheckCircle2 className="w-3 h-3 text-[#FF5A1F]" />
                {quarter.status}
              </span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#E8E3D9]">
          <a
            href="#contact"
            onClick={() => {
              trackCtaClick('Request Roundtable Sponsorship / Seat', '#contact');
              onClose();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#111111] text-white font-['Inter'] font-medium text-sm hover:bg-[#2A2925] transition-all"
          >
            <span>Request Target Account Invitation</span>
            <ArrowRight className="w-4 h-4 text-[#FF5A1F]" />
          </a>

          <button
            type="button"
            onClick={() => {
              trackCtaClick('Download 2027 Calendar PDF', 'download');
              alert('2027 Roundtable Schedule brief has been downloaded.');
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-[#DDD7CB] text-[#111111] font-['Inter'] font-medium text-sm hover:border-[#111111] transition-colors"
          >
            <Download className="w-4 h-4 text-[#55534E]" />
            <span>Download PDF Overview</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;
