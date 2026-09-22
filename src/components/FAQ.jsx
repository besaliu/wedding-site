import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

export default function FAQ() {
  const { faq } = weddingConfig;
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F4EFE6]/50 border-t border-[#E8DFD1]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#8C7A6B] font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Good To Know</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#4A3F35] font-normal tracking-wide">
            {faq.sectionTitle}
          </h2>
          <div className="w-16 h-[1px] bg-[#C5A880] mx-auto my-4" />
          <p className="text-[#6C5840] text-sm sm:text-base font-light leading-relaxed">
            {faq.sectionSubtitle}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#E8DFD1] overflow-hidden shadow-card transition-all duration-200"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-xl sm:text-2xl text-[#4A3F35] font-normal">
                    {item.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-[#FAF7F2] text-[#8C7A6B] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#4A3F35] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-[#6C5840] text-sm sm:text-base font-light leading-relaxed border-t border-[#E8DFD1]/40 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Note */}
        <div className="text-center mt-12 p-6 rounded-2xl bg-white/80 border border-[#E8DFD1] text-xs text-[#8C7A6B] font-light">
          Still have a question that isn&apos;t answered here? Feel free to reach out directly to{' '}
          <span className="font-medium text-[#4A3F35]">
            {weddingConfig.couple.bride} or {weddingConfig.couple.groom}
          </span>
          .
        </div>
      </div>
    </section>
  );
}
