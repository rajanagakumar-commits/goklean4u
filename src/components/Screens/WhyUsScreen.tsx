import React from 'react';

interface WhyUsScreenProps {
  onOpenBooking: () => void;
}

export const WhyUsScreen: React.FC<WhyUsScreenProps> = ({ onOpenBooking }) => {
  const machinery = [
    {
      name: 'Taski Ergodisc 165',
      type: 'Single-Disc Rotary Floor Scrubber',
      spec: '165 RPM high-torque motor with nylon & abrasive grit brushes for vitrified tiles and marble.',
      icon: 'precision_manufacturing',
    },
    {
      name: 'Kärcher Puzzi 10/1',
      type: 'Injection-Extraction Spray Extractor',
      spec: '220 mbar vacuum pressure extracts 95% of moisture from sofa cushions, mattresses, and rugs.',
      icon: 'water_drop',
    },
    {
      name: 'Bosch Aquatak 140',
      type: 'High-Pressure Water Jet',
      spec: '140 bar pressurized water stream blasts moss, dried cement slurry, and balcony dust.',
      icon: 'shower',
    },
    {
      name: 'Raycop UV-C Anti-Mite Vac',
      type: 'High-Frequency Mattress Sanitizer',
      spec: 'Pulsating pads vibrate at 4,000 BPM with 253.7nm UV-C germicidal light.',
      icon: 'pest_control',
    },
  ];

  const safetyProtocols = [
    {
      title: 'Aadhaar & Police Verification',
      desc: 'Every crew member undergoes government identity vetting and local police antecedent clearance before stepping foot into a client residence.',
      badge: '100% Verified',
    },
    {
      title: 'Zero Hydrochloric Acid Policy',
      desc: 'We strictly ban cheap muriatic or hydrochloric acids. Instead, we use Diversey Taski R1/R9 descalers that dissolve calcium without eroding tile glaze or chrome taps.',
      badge: 'Enamel Safe',
    },
    {
      title: 'Pet & Baby Safe Chemistry',
      desc: 'Neutral pH eco-surfactants leave zero toxic residues, eliminating choking chemical vapors and protecting curious infant fingers and animal paws.',
      badge: 'Non-Toxic',
    },
    {
      title: 'Bilingual Site Supervisor Audit',
      desc: 'A dedicated supervisor coordinates every job, performs a 50-point checklist audit with the client, and releases payment only when satisfied.',
      badge: 'Supervised',
    },
  ];

  return (
    <div className="w-full py-12 bg-porcelain-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs text-primary font-bold uppercase tracking-wider">
            Clinical Standards
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-on-surface mt-2 tracking-tight">
            Why GoKlean4u Sets The Gold Standard in Cleaning
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            We reject the typical unorganized contractor approach. From full-time employee payrolls to industrial European machinery, here is how we guarantee perfection.
          </p>
        </div>

        {/* 4 Pillars of Safety */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-on-surface mb-6 text-center">
            Trust &amp; Safety Infrastructure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {safetyProtocols.map((p, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-on-surface">{p.title}</h3>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-subtle text-secondary">
                      {p.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Machinery Showcase */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Industrial Hardware</span>
            <h2 className="text-xl sm:text-2xl font-bold text-on-surface mt-1">European Cleaning Equipment</h2>
            <p className="text-xs text-slate-500 mt-1">We bring professional equipment, not mops and domestic buckets.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {machinery.map((m, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 shadow-xs border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-ocean-tint text-primary flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[26px]">{m.icon}</span>
                  </div>
                  <h4 className="text-base font-bold text-on-surface">{m.name}</h4>
                  <span className="text-xs text-primary font-semibold block mt-1">{m.type}</span>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{m.spec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3-Day Free Reclean Banner */}
        <div className="bg-gradient-to-r from-teal-deep to-primary rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-secondary-container uppercase tracking-wider">Zero Risk Policy</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Our 3-Day Satisfaction Guarantee</h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
              If our supervisor misses any spot or you are not completely delighted with any section of your home, notify us within 72 hours and we send our crew back free of cost.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="btn-shine px-7 py-3.5 rounded-xl bg-tertiary-container hover:bg-tertiary text-white font-bold text-xs sm:text-sm shadow-md transition-all whitespace-nowrap cursor-pointer"
          >
            Experience The Standard
          </button>
        </div>

      </div>
    </div>
  );
};
