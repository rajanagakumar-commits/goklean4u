import React, { useState } from 'react';
import { FAQS_DATA } from '../../data/mockData';

export const FaqsScreen: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [search, setSearch] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'General', 'Process', 'Chemicals', 'Guarantee', 'Pricing'];

  const filtered = FAQS_DATA.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase());
    const matchesTab = activeTab === 'All' || item.category === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="w-full py-12 bg-porcelain-canvas min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        
        <div className="text-center">
          <span className="text-xs text-primary font-bold uppercase tracking-wider">
            Help &amp; Knowledge Center
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-on-surface mt-2 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Clear, transparent answers regarding equipment, chemical safety, cancellations, and the 3-day guarantee.
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-3.5 text-slate-400 text-[20px]">
            search
          </span>
          <input
            type="text"
            placeholder="Type keyword (e.g. equipment, pets, how long, reschedule, refund)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm shadow-xs focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === cat
                  ? 'bg-primary text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:text-primary hover:bg-ocean-tint border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {filtered.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
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
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                    <p className="pt-3">{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                      <span>Category: {faq.category}</span>
                      <span>·</span>
                      <span>Verified by Goklean4u Ops</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
