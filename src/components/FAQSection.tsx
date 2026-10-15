import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is CISO account activation?',
    answer:
      'CISO account activation helps you engage security leaders at target accounts and move them from awareness to active pipeline.',
  },
  {
    id: 'faq-2',
    question: 'How does Evntiqa help cybersecurity companies engage CISOs?',
    answer:
      'We run ABM-driven executive engagement programs that connect cybersecurity companies with CISOs from priority accounts through peer-led roundtables and other targeted formats.',
  },
  {
    id: 'faq-3',
    question: 'Can Evntiqa recruit CISOs from our target accounts?',
    answer:
      'Yes. We identify and recruit relevant CISOs and security leaders aligned with your ICP and target-account priorities.',
  },
  {
    id: 'faq-4',
    question: 'How do you identify the right executives to engage?',
    answer:
      'We align your ICP, target accounts, intent signals, and campaign goals to identify relevant security decision-makers.',
  },
  {
    id: 'faq-5',
    question: 'What types of executive engagement programs do you offer?',
    answer:
      'We offer ABM-driven virtual roundtables, in-person executive dinners, webinars, and audience acquisition services.',
  },
  {
    id: 'faq-6',
    question: 'Can Evntiqa guarantee the right executives from our ICP and target accounts?',
    answer:
      'We commit to recruiting executives aligned with your agreed ICP and target-account criteria. If an engagement does not meet the agreed audience requirements, we’ll deliver the next virtual event at no additional cost, subject to mutually agreed terms.',
  },
  {
    id: 'faq-7',
    question: 'How does Evntiqa support pipeline progression after an engagement?',
    answer:
      'We share attendee and engagement insights to help your team follow up, strengthen account relationships, and advance opportunities.',
  },
];

export const FAQSection: React.FC = () => {
  // First item open by default, matching reference image
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="w-full py-20 sm:py-28 lg:py-32 border-t border-[#E8E3D9] scroll-mt-28 relative overflow-hidden bg-[#FAF8F5]"
      aria-label="Frequently Asked Questions"
    >
      {/* Background architectural dot pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(#101D32_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-[1400px] 2xl:max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-start">
          
          {/* ================= LEFT COLUMN: HEADLINE, SUBHEADLINE & EXPLORE BUTTON ================= */}
          <div className="lg:col-span-5 flex flex-col justify-start lg:pt-4">
            {/* Kicker / Eyebrow matching reference image */}
            {/* <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
              <span className="w-5 h-[2px] bg-[#FF5A1F]" />
              <span className="font-['Montserrat'] font-bold text-xs uppercase tracking-[0.24em] text-[#FF5A1F]">
                SUPPORT & CLARITY
              </span>
            </div> */}

            {/* Headline matching reference image (Frequently Asked / Questions.) */}
            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] text-[#101D32] tracking-tight leading-[1.08] mb-5">
              Frequently Asked<br className="hidden sm:inline" /> Questions<span className="text-[#FF5A1F]">.</span>
            </h2>

            {/* Subheadline matching reference image */}
            <p className="font-['Inter'] text-base sm:text-lg text-[#575550] leading-relaxed max-w-sm">
              Everything you need to know about CISO account activation.
            </p>
          </div>

          {/* ================= RIGHT COLUMN: WHITE ACCORDION CARD ================= */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full bg-white rounded-2xl sm:rounded-3xl border border-[#E8E3D9] p-6 sm:p-9 lg:p-10 shadow-[0_4px_28px_rgba(0,0,0,0.035)]">
              <div className="divide-y divide-[#EFECE6]">
                {FAQ_LIST.map((faq, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div
                      key={faq.id}
                      className="py-5 sm:py-6 first:pt-0 last:pb-0 transition-colors"
                    >
                      {/* Accordion Header / Trigger */}
                      <button
                        type="button"
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer"
                      >
                        <span className="font-['Plus_Jakarta_Sans'] font-bold text-base sm:text-[17px] text-[#101D32] group-hover:text-[#FF5A1F] transition-colors leading-snug">
                          {faq.question}
                        </span>

                        <span className="shrink-0 w-6 h-6 flex items-center justify-center">
                          {isOpen ? (
                            <Minus className="w-4 h-4 text-[#FF5A1F] stroke-[2.5] transition-transform duration-200" />
                          ) : (
                            <Plus className="w-4 h-4 text-[#FF5A1F] stroke-[2.5] transition-transform duration-200 group-hover:scale-110" />
                          )}
                        </span>
                      </button>

                      {/* Accordion Answer Content */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="font-['Inter'] text-sm sm:text-[14.5px] text-[#575550] leading-relaxed pt-3 pr-6">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
