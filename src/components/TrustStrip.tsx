import React from 'react';

export const TrustStrip: React.FC = () => {
  const items = [
    {
      icon: 'verified',
      title: 'Verified Crew',
      desc: 'Police & background checked',
    },
    {
      icon: 'eco',
      title: 'Non-Toxic Solutions',
      desc: 'Safe for pets, babies & seniors',
    },
    {
      icon: 'precision_manufacturing',
      title: 'Modern Machines',
      desc: 'Kärcher & Taski industrial kits',
    },
    {
      icon: 'sentiment_very_satisfied',
      title: 'Zero-Risk Warranty',
      desc: 'Free redo within 3 business days',
    },
    {
      icon: 'receipt_long',
      title: 'Transparent Rates',
      desc: 'No surprise bills or hidden fees',
    },
  ];

  return (
    <section className="w-full py-10 bg-porcelain-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5 sm:gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className={`card-lift p-4 rounded-2xl bg-white shadow-xs border border-slate-100 flex flex-col items-center text-center ${
                index === 4 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-ocean-tint text-primary flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
              </div>
              <h4 className="text-sm font-bold text-on-surface">{item.title}</h4>
              <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
