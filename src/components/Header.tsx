import React, { useState } from 'react';
import { AnnouncementBar } from './AnnouncementBar';
import { FloatingPillNavigation, type NavItem } from './FloatingPillNavigation';
import { trackCtaClick } from '../utils/analytics';
import { Menu, X, ArrowRight, ExternalLink } from 'lucide-react';

interface HeaderProps {
  onOpenCalendar?: () => void;
  onNavigate?: (path: string) => void;
  currentPath?: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCalendar,
  onNavigate,
  currentPath = '/',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exact navigation items requested by the user
  const navItems: NavItem[] = [
    {
      label: 'CISO Roundtables',
      href: '#hero',
    },
    {
      label: 'Accounts We Activate',
      href: '#accounts',
    },
    {
      label: 'Solutions',
      href: '#solutions',
    },
    {
      label: 'Case Studies',
      href: '#case-studies',
    },
    {
      label: 'Blogs',
      href: '/blogs',
    },
    {
      label: 'TheCISOnews.com',
      href: 'https://thecisonews.com',
      target: '_blank',
    },
    {
      label: 'About Evntiqa',
      href: '/about',
    },
  ];

  // Determine active item based on current route or default
  const getActiveLink = () => {
    if (currentPath === '/blogs') return 'Blogs';
    if (currentPath === '/about') return 'About Evntiqa';
    return 'CISO Roundtables';
  };

  const handleNavClick = (item: NavItem) => {
    setMobileMenuOpen(false);

    if (item.href === '/blogs' || item.href === '/about') {
      if (onNavigate) {
        onNavigate(item.href);
      }
      return;
    }

    if (item.href?.startsWith('#')) {
      if (currentPath === '/blogs' || currentPath === '/about') {
        if (onNavigate) {
          onNavigate('/');
          const targetId = item.href.slice(1);
          setTimeout(() => {
            const el = document.getElementById(targetId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 150);
        }
        return;
      }

      const target = document.querySelector(item.href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleCtaClick = () => {
    trackCtaClick('Talk to an ABM Expert (Header)', '#contact');
    if (currentPath === '/blogs' || currentPath === '/about') {
      if (onNavigate) {
        onNavigate('/');
        setTimeout(() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
      return;
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar onGetCalendar={onOpenCalendar} />

      {/* 2. Main Navigation Bar with Frosted Glass Effect */}
      <div className="w-full bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E3D9]">
        <div className="max-w-[1400px] 2xl:max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-14 py-3 sm:py-3.5 flex items-center justify-between gap-4">
          
          {/* Brand Wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              if (currentPath !== '/') {
                e.preventDefault();
                if (onNavigate) onNavigate('/');
              }
            }}
            className="group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF5A1F] rounded-lg py-1 px-1.5"
            aria-label="Evntiqa Home"
          >
            <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-[24px] sm:text-[25px] tracking-tight text-[#111111] group-hover:opacity-85 transition-opacity">
              evntiqa<span className="text-[#FF5A1F]">.</span>
            </span>
          </a>

          {/* Desktop Floating Pill Navigation (Visible on lg/xl displays) */}
          <div className="hidden xl:flex items-center justify-center flex-1 max-w-[780px] mx-2">
            <FloatingPillNavigation
              items={navItems}
              activeLink={getActiveLink()}
              backgroundColor="#EDE8DF"
              textColor="#55534E"
              activeBackgroundColor="#111111"
              activeTextColor="#FFFFFF"
              padding={4}
              gap={2}
              linkPadding="6px 13px"
              font={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '-0.01em',
              }}
              onItemClick={handleNavClick}
            />
          </div>

          {/* Right Action: CTA Button + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={handleCtaClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] text-white font-['Inter'] font-medium text-xs sm:text-[13.5px] hover:bg-[#2A2925] transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer shrink-0"
            >
              <span>Talk to an ABM Expert</span>
              <span className="text-[#FF5A1F] transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>

            {/* Mobile / Tablet Drawer Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-10 h-10 rounded-full border border-[#DDD7CB] flex items-center justify-center text-[#111111] hover:bg-[#F0EBE2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF5A1F]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Navigation Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden w-full bg-[#FAF8F5] border-t border-[#E8E3D9] px-6 py-5 shadow-xl animate-fade-in">
            <div className="flex flex-col gap-2 max-w-lg mx-auto">
              <span className="font-['Montserrat'] font-semibold text-[11px] uppercase tracking-[0.2em] text-[#8E8A82] mb-1">
                Navigation
              </span>

              {navItems.map((item, idx) => {
                const isActive = item.label === getActiveLink();
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      if (item.target === '_blank') {
                        window.open(item.href, '_blank', 'noopener,noreferrer');
                      } else {
                        handleNavClick(item);
                        if (item.href?.startsWith('#')) {
                          const target = document.querySelector(item.href);
                          if (target) {
                            target.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                      }
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-left font-['Inter'] text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-[#111111] text-white font-semibold'
                        : 'text-[#111111] hover:bg-[#F2EDE4]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {item.label}
                      {item.target === '_blank' && (
                        <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                      )}
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 ${isActive ? 'text-[#FF5A1F]' : 'opacity-40'}`}
                    />
                  </button>
                );
              })}

              <div className="pt-3 mt-2 border-t border-[#E8E3D9] flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenCalendar) onOpenCalendar();
                  }}
                  className="w-full text-center py-2.5 px-4 rounded-xl border border-[#DDD7CB] text-[#55534E] text-xs font-['Inter'] hover:border-[#111111] transition-colors"
                >
                  📅 View 2027 Virtual CISO Calendar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
