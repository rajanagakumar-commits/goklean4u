import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Select Your Service',
      desc: 'Choose home deep cleaning, sofa shampoo, kitchen degreasing, or custom corporate maintenance packages online or over WhatsApp.',
    },
    {
      num: '02',
      title: 'Choose Date & Slot',
      desc: 'Select convenient morning, noon, or afternoon slots. Same-day emergency service slots available in select cities.',
    },
    {
      num: '03',
      title: 'Crew Arrival & Clean',
      desc: 'Our uniformed, ID-verified technicians arrive with all vacuums, scrubbers, solutions, and ladder kits. You just sit back and relax.',
    },
    {
      num: '04',
      title: 'Audit & Enjoy',
      desc: 'Walk through the property with our supervisor, verify every point on the 50-item checklist, and pay securely only when satisfied.',
    },
  ];

  return (
    <section className="w-full py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs text-primary font-bold uppercase tracking-wider">
            Hassle-Free Process
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-surface mt-2 tracking-tight">
            How Goklean4u Brings the Sparkle
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            From booking to sparkling handover, our workflow is simple, transparent, and completely stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-surface-container-low shadow-xs border border-slate-200/70 flex flex-col justify-between"
            >
              <div>
                <span className="text-4xl sm:text-5xl font-extrabold text-primary/20 block mb-2">
                  {step.num}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-on-surface">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
