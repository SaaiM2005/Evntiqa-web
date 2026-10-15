import React from 'react';
import { ArrowLeft, Clock, ArrowRight, ShieldCheck, Newspaper } from 'lucide-react';
import { trackCtaClick } from '../utils/analytics';
import { getAssetUrl } from '../utils/asset';

interface BlogsPageProps {
  onBackToHome: () => void;
}

const blogPosts = [
  {
    title: 'How Global Cybersecurity Marketers Secure 100% CISO Attendance',
    category: 'Roundtable Playbook',
    readTime: '6 min read',
    date: 'Oct 2026',
    excerpt:
      'Why peer-led invitation architectures outperform cold outbound by 8.4x in enterprise account activation and executive pipeline generation.',
    image: getAssetUrl('/images/hero-collage.png'),
  },
  {
    title: 'The 2027 CISO Priority Shift: From Tool Consolidation to Risk Resilience',
    category: 'Executive Insights',
    readTime: '5 min read',
    date: 'Sep 2026',
    excerpt:
      'Analyzing insights gathered across 45+ enterprise roundtables with Fortune 500 CISOs in North America and EMEA.',
    image: getAssetUrl('/images/hero-reference-full.jpg'),
  },
  {
    title: 'Account-Based Marketing for Cybersecurity: Beyond Display & Cold Calling',
    category: 'ABM Strategy',
    readTime: '7 min read',
    date: 'Aug 2026',
    excerpt:
      'A practical framework for orchestrating high-touch executive roundtables that directly influence 7-figure enterprise deal velocity.',
    image: getAssetUrl('/images/hero-visual.png'),
  },
];

export const BlogsPage: React.FC<BlogsPageProps> = ({ onBackToHome }) => {
  return (
    <div className="min-h-screen bg-warm-dots py-10 sm:py-16">
      <div className="max-w-[1400px] 2xl:max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        {/* Navigation Breadcrumb / Back button */}
        <button
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 mb-8 text-[#55534E] hover:text-[#111111] font-['Inter'] text-sm font-medium transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to CISO Roundtables</span>
        </button>

        {/* Editorial Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2.5 mb-4">
            <Newspaper className="w-4 h-4 text-[#FF5A1F]" />
            <span className="font-['Montserrat'] font-semibold text-xs uppercase tracking-[0.22em] text-[#55534E]">
              EVNTIQA PUBLICATIONS & INTELLIGENCE
            </span>
          </div>

          <h1 className="font-['Plus_Jakarta_Sans'] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#111111] tracking-tight mb-6">
            Insights on CISO Engagement & Pipeline Acceleration.
          </h1>
          <p className="font-['Inter'] text-lg sm:text-xl text-[#55534E] leading-relaxed">
            Proven playbooks, research briefings, and executive strategy from the leaders behind high-conversion CISO roundtables.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <article
              key={idx}
              className="bg-[#FAF8F5] rounded-2xl border border-[#DDD7CB] overflow-hidden flex flex-col justify-between hover:border-[#FF5A1F]/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF5A1F]/10 text-[#FF5A1F] font-['Montserrat'] font-semibold text-[11px] tracking-wider uppercase">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#8E8A82]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-xl sm:text-2xl text-[#111111] mb-3 group-hover:text-[#FF5A1F] transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="font-['Inter'] text-[#55534E] text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-[#E8E3D9] flex items-center justify-between text-xs text-[#787570]">
                <span>{post.date}</span>
                <span className="inline-flex items-center gap-1 font-semibold text-[#111111] group-hover:text-[#FF5A1F] transition-colors">
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* CISO News Callout */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-[#111111] text-white flex flex-col lg:flex-row lg:items-center justify-between gap-6 border border-[#2D2A26]">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#FF5A1F] font-['Montserrat'] text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              Dedicated Media Network
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl sm:text-3xl">
              Looking for daily cybersecurity executive news?
            </h3>
            <p className="font-['Inter'] text-sm sm:text-base text-white/70">
              Visit TheCISOnews.com, our global publication delivering curated daily analysis, executive interviews, and cyber boardroom reports.
            </p>
          </div>

          <a
            href="https://thecisonews.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCtaClick('Visit TheCISOnews.com', 'https://thecisonews.com')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FF5A1F] text-white font-['Inter'] font-semibold text-sm hover:bg-[#E24A12] transition-colors shrink-0"
          >
            <span>Visit TheCISOnews.com</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
