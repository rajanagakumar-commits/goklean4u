import React from 'react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: 'badge',
      title: '100% In-House Staff',
      desc: 'Never outsourced to random unverified gig workers. Every technician is full-time, payroll employed, and police verified.',
    },
    {
      icon: 'precision_manufacturing',
      title: 'Industrial Grade Gear',
      desc: 'We deploy heavy-duty Kärcher, Taski, and Bosch pressure washers, rotary floor scrubbers, and industrial dust vacuums.',
    },
    {
      icon: 'health_and_safety',
      title: 'Hospital-Safe Chemicals',
      desc: 'Zero caustic acids that corrode grout or irritate lungs. Certified eco-surfactants safe for newborn babies and pets.',
    },
    {
      icon: 'history_edu',
      title: '3-Day Free Reclean',
      desc: 'Not 100% thrilled with any corner or surface? Notify our team within 72 hours and we will re-clean it without a rupee extra.',
    },
    {
      icon: 'alarm_on',
      title: 'Punctual Arrival',
      desc: 'Equipped vans arrive punctually within your scheduled morning, noon, or evening appointment window.',
    },
    {
      icon: 'supervisor_account',
      title: 'Dedicated Supervisor',
      desc: 'Every deep-cleaning crew is managed by a bilingual site supervisor who audits checklists before handover.',
    },
    {
      icon: 'currency_rupee',
      title: 'No Surprise Extras',
      desc: 'Upfront transparent pricing agreed before we turn on a single machine. No on-site tip coercion or surprise travel surcharges.',
    },
    {
      icon: 'support_agent',
      title: 'Direct Human Support',
      desc: 'Call or WhatsApp a real human coordinator 7 days a week from 7 AM to 9 PM with instant responses.',
    },
  ];

  return (
    <section className="w-full py-16 lg:py-20 bg-porcelain-canvas" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs text-primary font-bold uppercase tracking-wider">
            The Standard of Distinction
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-surface mt-2 tracking-tight">
            Engineered for Reliability, Safety &amp; Spotless Results
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Why tens of thousands of households and corporate facilities trust GoKlean4u as their dedicated housekeeping partners.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="card-lift p-6 rounded-3xl bg-white shadow-xs border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-ocean-tint text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[26px]">{pillar.icon}</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-on-surface">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
