import React from 'react';

export const MetricsStrip: React.FC = () => {
  const stats = [
    {
      value: '2017',
      label: 'Serving South India',
      sub: '8+ Continuous years of hygiene excellence',
    },
    {
      value: '60+',
      label: 'Industrial Machines',
      sub: 'Injection-extraction & rotary polishers',
    },
    {
      value: '6',
      label: 'Metropolitan Hubs',
      sub: 'Direct local supervisor hubs',
    },
    {
      value: '3-Day',
      label: 'Service Guarantee',
      sub: 'Complimentary touch-up guarantee',
    },
  ];

  return (
    <section className="w-full bg-teal-deep text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-teal-800">
          {stats.map((stat, i) => (
            <div key={i} className={`space-y-1.5 ${i > 0 ? 'pt-6 lg:pt-0' : ''}`}>
              <p className="text-4xl sm:text-5xl font-extrabold text-secondary-container tracking-tight">
                {stat.value}
              </p>
              <p className="text-base sm:text-lg font-bold text-white">{stat.label}</p>
              <p className="text-xs sm:text-sm text-slate-300 opacity-90">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
