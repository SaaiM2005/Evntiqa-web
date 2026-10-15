import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LogoStrip } from './components/LogoStrip';
import { TargetAccountsSection } from './components/TargetAccountsSection';
import { EngagementFormatsSection } from './components/EngagementFormatsSection';
import { ExecutionEngineSection } from './components/ExecutionEngineSection';
import { ProvenResultsSection } from './components/ProvenResultsSection';
import { FAQSection } from './components/FAQSection';
import { TargetDealsSection } from './components/TargetDealsSection';
import { ContactSection } from './components/ContactSection';
import { CalendarModal } from './components/CalendarModal';
import { BlogsPage } from './components/BlogsPage';
import { AboutPage } from './components/AboutPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path === '/blogs' || path === '/about') return path;
    }
    return '/';
  });

  const [calendarModalOpen, setCalendarModalOpen] = useState(false);

  // Sync browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPath(path === '/blogs' || path === '/about' ? path : '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    try {
      window.history.pushState(null, '', path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      // fallback
    }
  };

  return (
    <div className="min-h-screen bg-warm-dots flex flex-col justify-between selection:bg-[#FF5A1F] selection:text-white">
      {/* Universal Header with Announcement Bar & FloatingPillNavigation */}
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenCalendar={() => setCalendarModalOpen(true)}
      />

      {/* 2027 Calendar Interactive Modal */}
      <CalendarModal
        isOpen={calendarModalOpen}
        onClose={() => setCalendarModalOpen(false)}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentPath === '/blogs' ? (
          <BlogsPage onBackToHome={() => handleNavigate('/')} />
        ) : currentPath === '/about' ? (
          <AboutPage onBackToHome={() => handleNavigate('/')} />
        ) : (
          <>
            {/* Section 1: Hero Section */}
            <Hero />

            {/* Social Proof: Engaging Global Enterprise CISOs (LogoStrip) */}
            <div className="w-full max-w-[1400px] 2xl:max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
              <LogoStrip />
            </div>

            {/* Section 2: Turn Target Accounts into Active Pipeline */}
            <TargetAccountsSection />

            {/* Section 3: Engagement Formats Built for Pipeline */}
            <EngagementFormatsSection />

            {/* Section 4: 4-Phase Execution Engine */}
            <ExecutionEngineSection />

            {/* Section 5: Proven Results Across Enterprise ABM */}
            <ProvenResultsSection />

            {/* Section 6: Frequently Asked Questions */}
            <FAQSection />

            {/* Turn Target Accounts into Deals */}
            <TargetDealsSection />

            {/* Destination for "Talk to an ABM Expert" */}
            <ContactSection />
          </>
        )}
      </main>

      {/* Global Minimalist Footer */}
      <footer className="w-full border-t border-[#E8E3D9] bg-[#FAF8F5] py-10 mt-16 text-sm text-[#787570]">
        <div className="max-w-[1400px] 2xl:max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-lg text-[#111111]">
              evntiqa<span className="text-[#FF5A1F]">.</span>
            </span>
            <span className="text-xs text-[#8E8A82]">
              — Executive CISO Roundtables built for pipeline acceleration.
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs font-['Inter']">
            <a
              href="https://thecisonews.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#111111] transition-colors"
            >
              TheCISOnews.com ↗
            </a>
            <button
              type="button"
              onClick={() => handleNavigate('/blogs')}
              className="hover:text-[#111111] transition-colors cursor-pointer"
            >
              Blogs
            </button>
            <button
              type="button"
              onClick={() => handleNavigate('/about')}
              className="hover:text-[#111111] transition-colors cursor-pointer"
            >
              About Evntiqa
            </button>
            <button
              type="button"
              onClick={() => setCalendarModalOpen(true)}
              className="hover:text-[#111111] transition-colors cursor-pointer"
            >
              2027 Calendar
            </button>
          </div>

          <div className="text-xs text-[#8E8A82]">
            © 2026 Evntiqa Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
