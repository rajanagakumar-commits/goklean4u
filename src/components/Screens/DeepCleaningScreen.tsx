import React, { useState } from 'react';

interface DeepCleaningScreenProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const DeepCleaningScreen: React.FC<DeepCleaningScreenProps> = ({ onOpenBooking }) => {
  const [bhkSize, setBhkSize] = useState<string>('3bhk');
  const [bathrooms, setBathrooms] = useState<number>(3);
  const [balconies, setBalconies] = useState<number>(2);
  const [includeSofa, setIncludeSofa] = useState<boolean>(true);
  const [includeKitchenDeep, setIncludeKitchenDeep] = useState<boolean>(true);

  const baseRates: Record<string, { base: number; label: string; sqft: string; duration: string; crew: string }> = {
    '1bhk': { base: 3499, label: '1 BHK Apartment', sqft: 'Up to 700 sq.ft', duration: '4 - 5 Hours', crew: '3 Specialists' },
    '2bhk': { base: 4499, label: '2 BHK Apartment', sqft: '700 - 1200 sq.ft', duration: '5 - 6 Hours', crew: '3 - 4 Specialists' },
    '3bhk': { base: 5499, label: '3 BHK Apartment', sqft: '1200 - 1800 sq.ft', duration: '6 - 7 Hours', crew: '4 Specialists + 1 Lead' },
    '4bhk': { base: 6999, label: '4 BHK / Duplex', sqft: '1800 - 2600 sq.ft', duration: '7 - 8 Hours', crew: '5 Specialists + 1 Lead' },
    'villa': { base: 9499, label: 'Independent Villa', sqft: '3000+ sq.ft', duration: 'Full Day (8 Hours)', crew: '6 Specialists + 1 Supervisor' },
  };

  const currentBhk = baseRates[bhkSize];
  const calculatedTotal =
    currentBhk.base +
    (bathrooms > 2 ? (bathrooms - 2) * 500 : 0) +
    (balconies > 1 ? (balconies - 1) * 350 : 0) +
    (includeSofa ? 1299 : 0) +
    (includeKitchenDeep ? 999 : 0);

  const roomsChecklist = [
    {
      room: 'Living & Dining Room',
      icon: 'weekend',
      items: [
        'Ceiling fan blade degreasing and dry wiping',
        'Chandelier & decorative light dusting',
        'Single-disc rotary machine tile scrubbing & buffing',
        'Window glass pane polishing inside & out',
        'Window sliding tracks vacuumed with micro-nozzle',
        'Switchboard & electrical outer plate sanitizing',
        'Wall spot treatment for handprints and grease dots',
        'Baseboard / skirting wet wipe and grout descaling',
      ],
    },
    {
      room: 'Master & Guest Bedrooms',
      icon: 'bed',
      items: [
        'Wardrobe top and external face wipe & buff',
        'Mattress dust mite surface vacuuming',
        'Bed frame & headboard dry extraction',
        'Dressing table mirror streak-free restoration',
        'Door frame & panel anti-bacterial wipe',
        'Curtain rod & AC outer casing dust removal',
        'Tile floor motorized buffing and corner sweep',
      ],
    },
    {
      room: 'Modular Kitchen & Utility',
      icon: 'countertops',
      items: [
        'Chimney baffle filter chemical immersion degreasing',
        'Gas stove burner & spark igniter descaling',
        'Granite / quartz countertop food-safe polishing',
        'Backsplash tile & grease film removal',
        'Cabinet exterior & handle sanitization',
        'Under-sink anti-bacterial scrub & drain flush',
        'Utility area floor scrubbing & washing machine outer clean',
      ],
    },
    {
      room: 'Bathrooms & Powder Rooms',
      icon: 'shower',
      items: [
        'Glass shower partition hard water calcium removal',
        'Wall tiles acid-free descaling to restore color',
        'Western commode interior, rim & outer sanitizing',
        'Washbasin & chrome CP taps mirror buffing',
        'Exhaust fan & geyser outer de-dusting',
        'Anti-bacterial enzymatic drain flushing',
      ],
    },
    {
      room: 'Balconies & Exterior Windows',
      icon: 'balcony',
      items: [
        'High-pressure water jet wash for floor tiles',
        'Balcony railing iron/steel wipe and rust spot scrub',
        'Glass sliding door tracks high-suction extraction',
        'Drain trap clearing and floor dry squeegee',
      ],
    },
  ];

  return (
    <div className="w-full py-12 bg-porcelain-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs text-primary font-bold uppercase tracking-wider">
            Flagship Treatment
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-on-surface mt-2 tracking-tight">
            Complete Residential Deep Cleaning
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Our 50-point clinical hygiene protocol transforms apartments, duplexes, and independent villas to showroom standard before move-in, festivals, or annual maintenance.
          </p>
        </div>

        {/* Interactive Estimator Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-slate-200">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Interactive Cost Calculator</span>
            <h2 className="text-xl sm:text-2xl font-bold text-on-surface mt-1">Estimate Your Home Deep Clean</h2>
            <p className="text-xs text-slate-500">Instant price transparency with no hidden extras.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              
              {/* BHK Selection */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-2">Select Apartment / Villa Configuration:</label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {Object.entries(baseRates).map(([key, val]) => (
                    <button
                      key={key}
                      onClick={() => setBhkSize(key)}
                      className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                        bhkSize === key
                          ? 'bg-primary text-white border-primary shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <p className="text-xs font-bold">{key.toUpperCase()}</p>
                      <p className={`text-[10px] ${bhkSize === key ? 'text-secondary-container' : 'text-slate-500'}`}>
                        ₹{val.base}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders for Bathrooms and Balconies */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-surface-container-low border border-slate-200">
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span>Bathrooms to Descale:</span>
                    <span className="text-primary font-extrabold">{bathrooms} Baths</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    value={bathrooms}
                    onChange={(e) => setBathrooms(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                </div>

                <div className="p-4 rounded-2xl bg-surface-container-low border border-slate-200">
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span>Balconies for Jet Wash:</span>
                    <span className="text-primary font-extrabold">{balconies} Balconies</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="5"
                    value={balconies}
                    onChange={(e) => setBalconies(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                </div>
              </div>

              {/* Addon Bundles */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 block">Bundle Popular Fabric &amp; Kitchen Treatments:</label>
                <div className="flex flex-wrap gap-3">
                  <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 bg-white cursor-pointer text-xs">
                    <input
                      type="checkbox"
                      checked={includeSofa}
                      onChange={(e) => setIncludeSofa(e.target.checked)}
                      className="accent-primary"
                    />
                    <span>Add 5-Seater Sofa Steam Spa (+₹1,299)</span>
                  </label>
                  <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 bg-white cursor-pointer text-xs">
                    <input
                      type="checkbox"
                      checked={includeKitchenDeep}
                      onChange={(e) => setIncludeKitchenDeep(e.target.checked)}
                      className="accent-primary"
                    />
                    <span>Add Chimney &amp; Baffle Degrease (+₹999)</span>
                  </label>
                </div>
              </div>

            </div>

            {/* Price Output (5 Cols) */}
            <div className="lg:col-span-5 bg-teal-deep text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-4">
              <span className="text-xs font-bold text-secondary-container uppercase tracking-wider">Estimated Scope</span>
              <h3 className="text-xl font-bold">{currentBhk.label}</h3>
              
              <div className="space-y-2 text-xs text-slate-200 pt-2 border-t border-teal-800">
                <div className="flex justify-between">
                  <span>Covered Footprint:</span>
                  <span className="font-semibold text-white">{currentBhk.sqft}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Duration:</span>
                  <span className="font-semibold text-white">{currentBhk.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Dispatched Crew:</span>
                  <span className="font-semibold text-white">{currentBhk.crew}</span>
                </div>
                <div className="flex justify-between">
                  <span>Included Bathrooms:</span>
                  <span className="font-semibold text-white">{bathrooms}</span>
                </div>
                <div className="flex justify-between">
                  <span>Included Balconies:</span>
                  <span className="font-semibold text-white">{balconies}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-teal-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-300">All-Inclusive Total</span>
                  <p className="text-3xl font-extrabold text-secondary-container">₹{calculatedTotal}</p>
                </div>
                <button
                  onClick={() => onOpenBooking('home-deep-clean')}
                  className="btn-shine px-6 py-3 rounded-xl bg-tertiary-container hover:bg-tertiary text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                >
                  Reserve Date
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Room-By-Room Detailed Checklist */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs text-primary font-bold uppercase tracking-wider">50-Point Protocol</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-on-surface mt-1">Room-by-Room Inclusions</h2>
            <p className="text-xs text-slate-500 mt-1">Audited by our bilingual site supervisor prior to handover.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roomsChecklist.map((section, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 shadow-xs border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-ocean-tint text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">{section.icon}</span>
                  </div>
                  <h3 className="text-base font-bold text-on-surface">{section.room}</h3>
                </div>

                <ul className="space-y-2 text-xs text-slate-600">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[16px] flex-shrink-0 mt-0.5">check_circle</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
