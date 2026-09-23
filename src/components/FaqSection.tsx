import React, { useState } from 'react';
import { FAQS_DATA } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Process', 'Chemicals', 'Guarantee', 'Pricing'];

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === 'All' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full py-16 lg:py-20 bg-white" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs text-primary font-bold uppercase tracking-wider">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-surface mt-2 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Everything you need to know about our cleaning processes, crew safety, and policies.
          </p>
        </div>

        {/* Search Bar & Category Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-3.5 text-slate-400 text-[20px]">
              search
            </span>
            <input
              type="text"
              placeholder="Search questions (e.g. sofa, pets, duration, guarantee)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-surface-container-low border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-xs'
                    : 'bg-surface-container-low text-slate-600 hover:text-primary hover:bg-ocean-tint'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-10 bg-surface-container-low rounded-2xl p-6">
              <p className="text-slate-500 text-sm">No questions matched your search.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="mt-2 text-xs font-bold text-primary hover:underline"
              >
                Reset Search
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-surface-container-low border border-slate-100 overflow-hidden transition-all shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-on-surface">
                      {faq.question}
                    </span>
                    <span
                      className={`material-symbols-outlined text-primary text-[24px] transform transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/60 mt-1">
                      <p className="pt-3">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-10 p-5 rounded-2xl bg-ocean-tint border border-teal-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-white text-primary flex items-center justify-center flex-shrink-0 shadow-xs">
              <span className="material-symbols-outlined text-[22px]">contact_support</span>
            </div>
            <div>
              <p className="text-sm font-bold text-primary">Still have questions not answered here?</p>
              <p className="text-xs text-slate-600">Speak directly with our cleaning supervisors 7 days a week.</p>
            </div>
          </div>
          <a
            href="tel:9703721616"
            className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold shadow-xs hover:bg-primary-container transition-all whitespace-nowrap"
          >
            Call 9703721616
          </a>
        </div>

      </div>
    </section>
  );
};
