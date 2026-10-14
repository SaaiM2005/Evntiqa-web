import { Hero } from './components/Hero';
import { LogoStrip } from './components/LogoStrip';

export default function App() {
  return (
    <main className="min-h-screen bg-warm-dots flex flex-col justify-between">
      {/* Section 1: Hero */}
      <Hero />

      {/* Logos Strip after Hero Section */}
      <div className="w-full max-w-[1400px] 2xl:max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        <LogoStrip />
      </div>
    </main>
  );
}
