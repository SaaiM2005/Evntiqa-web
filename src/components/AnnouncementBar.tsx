import React, { useState } from 'react';
import { trackCtaClick } from '../utils/analytics';
import { X, ArrowRight, Calendar } from 'lucide-react';

interface AnnouncementBarProps {
  onGetCalendar?: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onGetCalendar }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleAction = () => {
    trackCtaClick('Get the Calendar (Announcement)', '#calendar');
    if (onGetCalendar) {
      onGetCalendar();
    } else {
      const el = document.getElementById('calendar-preview');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      role="banner"
      aria-label="Announcement"
      className="relative z-50 bg-[#121212] text-white text-xs sm:text-[13px] border-b border-[#252320] transition-all duration-300"
    >
      <div className="max-w-[1400px] 2xl:max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-14 py-2 sm:py-2.5 flex items-center justify-between gap-3">
        {/* Centered Announcement Message */}
        <div className="flex-1 flex items-center justify-center gap-2 sm:gap-3 text-center flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#FF5A1F]/15 border border-[#FF5A1F]/30 text-[#FF5A1F] font-['Montserrat'] font-semibold text-[10px] tracking-wider uppercase">
            <Calendar className="w-3 h-3 text-[#FF5A1F]" />
            Live Now
          </span>

          <span className="font-['Inter'] font-normal text-white/90">
            2027 Virtual CISO Roundtable Calendar Is Live
          </span>

          <button
            type="button"
            onClick={handleAction}
            className="inline-flex items-center gap-1 font-['Inter'] font-semibold text-[#FF5A1F] hover:text-[#FFA07A] transition-colors underline-offset-4 hover:underline cursor-pointer group ml-1 focus:outline-none focus:ring-1 focus:ring-[#FF5A1F] rounded"
          >
            <span>Get the Calendar</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Optional Dismiss button */}
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          className="text-white/40 hover:text-white transition-colors p-1 -mr-1 rounded focus:outline-none focus:ring-1 focus:ring-white/40 cursor-pointer shrink-0"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;
