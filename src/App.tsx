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
import { Footer } from './components/Footer';

const normalizeRoute = (pathname: string, hash: string): string => {
  // 1. Support hash routing fallback (e.g. #/blogs or #blogs)
  const cleanHash = hash.replace(/^#\/?/, '');
  if (cleanHash === 'blogs') return '/blogs';
  if (cleanHash === 'about') return '/about';

  // 2. Normalize path relative to Vite's base URL (e.g. /Evntiqa-web/)
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  let rel = pathname;
  if (base && rel.startsWith(base)) {
    rel = rel.slice(base.length);
  }
  if (!rel.startsWith('/')) rel = '/' + rel;
  if (rel.length > 1 && rel.endsWith('/')) rel = rel.slice(0, -1);

  if (rel === '/blogs' || rel === '/about') return rel;
  return '/';
};

const toFullPath = (route: string): string => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = route.startsWith('/') ? route : `/${route}`;
  return clean === '/' ? (base ? `${base}/` : '/') : `${base}${clean}`;
};

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return normalizeRoute(window.location.pathname, window.location.hash);
    }
    return '/';
  });

  const [calendarModalOpen, setCalendarModalOpen] = useState(false);

  // Sync browser back/forward buttons and hash navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizeRoute(window.location.pathname, window.location.hash));
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const handleNavigate = (path: string) => {
    const cleanRoute = path === '/blogs' || path === '/about' ? path : '/';
    setCurrentPath(cleanRoute);
    try {
      const full = toFullPath(cleanRoute);
      window.history.pushState(null, '', full);
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
      <Footer
        onNavigate={handleNavigate}
        onOpenCalendar={() => setCalendarModalOpen(true)}
        currentPath={currentPath}
      />
    </div>
  );
}
