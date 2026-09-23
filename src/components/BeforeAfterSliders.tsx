import React, { useState } from 'react';

interface SliderData {
  id: number;
  title: string;
  badge: string;
  instruction: string;
  afterTitle: string;
  afterDesc: string;
  afterIcon: string;
  beforeTitle: string;
  beforeDesc: string;
  beforeIcon: string;
  afterGradient: string;
  beforeGradient: string;
}

export const BeforeAfterSliders: React.FC = () => {
  const [sliderValues, setSliderValues] = useState<Record<number, number>>({
    1: 50,
    2: 50,
    3: 50,
    4: 50,
  });

  const sliders: SliderData[] = [
    {
      id: 1,
      title: 'Kitchen Chimney & Baffle Filters',
      badge: '3-Stage Degrease',
      instruction: 'Drag handle left or right to inspect grease removal',
      afterTitle: 'AFTER GOKLEAN4U',
      afterDesc: 'Stainless steel gleaming, filters flowing 100% grease-free',
      afterIcon: 'auto_awesome',
      beforeTitle: 'BEFORE CLEANING',
      beforeDesc: 'Clogged baffle filters, burnt cooking residue, sticky dust',
      beforeIcon: 'oil_barrel',
      afterGradient: 'from-primary-container via-teal-deep to-primary',
      beforeGradient: 'from-slate-900 via-slate-800 to-slate-900',
    },
    {
      id: 2,
      title: 'Shower Enclosure & Chrome Descaling',
      badge: 'Acid-Free Polish',
      instruction: 'Drag handle to verify hard water calcium eradication',
      afterTitle: 'AFTER DESCALING',
      afterDesc: 'Crystal transparent glass partition, mirror-finish taps',
      afterIcon: 'water_drop',
      beforeTitle: 'BEFORE DESCALING',
      beforeDesc: 'Opaque calcium crust, soap ring, tarnished brass taps',
      beforeIcon: 'blur_on',
      afterGradient: 'from-primary via-teal-deep to-primary-container',
      beforeGradient: 'from-slate-900 via-slate-800 to-slate-900',
    },
    {
      id: 3,
      title: 'Fabric Couch Stain Extraction',
      badge: 'Color-Safe Rinse',
      instruction: 'Drag handle to view deep-fiber stain removal',
      afterTitle: 'AFTER RESTORATION',
      afterDesc: 'Vibrant original fabric tone, fresh allergen-free fiber',
      afterIcon: 'chair',
      beforeTitle: 'BEFORE SHAMPOO',
      beforeDesc: 'Dark water marks, food spills, dull grayish fabric',
      beforeIcon: 'texture',
      afterGradient: 'from-primary-container via-teal-deep to-primary',
      beforeGradient: 'from-slate-900 via-slate-800 to-slate-900',
    },
    {
      id: 4,
      title: 'Vitrified Floor Machine Buffing',
      badge: 'Rotary Scrubber',
      instruction: 'Drag handle to witness grout restoration & surface shine',
      afterTitle: 'AFTER ROTARY POLISH',
      afterDesc: 'Mirror shine reflection, spotless white grout lines',
      afterIcon: 'arrow_back_ios_new',
      beforeTitle: 'BEFORE BUFFING',
      beforeDesc: 'Scuff marks, construction cement dust, blackened grout',
      beforeIcon: 'layers_clear',
      afterGradient: 'from-primary via-teal-deep to-primary-container',
      beforeGradient: 'from-slate-900 via-slate-800 to-slate-900',
    },
  ];

  const handleSliderChange = (id: number, val: number) => {
    setSliderValues((prev) => ({ ...prev, [id]: val }));
  };

  return (
    <section className="w-full py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-xs text-primary font-bold uppercase tracking-wider">
            Proof in the Polish
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-surface mt-2 tracking-tight">
            Drag to Reveal The Goklean4u Transformation
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Slide left and right on each panel to see real job-site before &amp; after results captured by our crew.
          </p>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {sliders.map((slider) => {
            const val = sliderValues[slider.id] ?? 50;

            return (
              <div
                key={slider.id}
                className="bg-surface-container-low rounded-3xl p-5 sm:p-6 shadow-md border border-slate-200 flex flex-col"
              >
                <div className="flex items-center justify-between mb-3 px-1">
                  <h4 className="text-base sm:text-lg font-bold text-on-surface">
                    {slider.title}
                  </h4>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white text-slate-600 shadow-xs border border-slate-100">
                    {slider.badge}
                  </span>
                </div>

                {/* Slider Container */}
                <div className="ba-slider-container relative rounded-2xl h-72 w-full overflow-hidden shadow-inner select-none">
                  
                  {/* "After" Layer (Base/Underneath) */}
                  <div className={`absolute inset-0 w-full h-full bg-gradient-to-br ${slider.afterGradient} flex items-center justify-center text-white`}>
                    <div className="text-center p-6 max-w-sm">
                      <span className="material-symbols-outlined text-[42px] text-secondary-container">
                        {slider.afterIcon}
                      </span>
                      <p className="text-lg font-extrabold mt-2 tracking-wide text-secondary-container">
                        {slider.afterTitle}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-100 opacity-90 mt-1 leading-normal">
                        {slider.afterDesc}
                      </p>
                    </div>
                  </div>

                  {/* "Before" Layer (Clipped on top) */}
                  <div
                    className="absolute inset-0 h-full overflow-hidden"
                    style={{ width: `${val}%` }}
                  >
                    <div
                      className={`absolute inset-0 h-full w-[200%] sm:w-[200%] bg-gradient-to-br ${slider.beforeGradient} flex items-center justify-center text-white`}
                      style={{ width: '100%', minWidth: '100%' }}
                    >
                      <div className="text-center p-6 max-w-sm">
                        <span className="material-symbols-outlined text-[42px] text-amber-200">
                          {slider.beforeIcon}
                        </span>
                        <p className="text-lg font-extrabold mt-2 tracking-wide text-amber-200">
                          {slider.beforeTitle}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-300 opacity-90 mt-1 leading-normal">
                          {slider.beforeDesc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Divider Line & Handle */}
                  <div
                    className="absolute top-0 bottom-0 z-20 pointer-events-none flex items-center justify-center"
                    style={{ left: `${val}%`, transform: 'translateX(-50%)' }}
                  >
                    <div className="w-1 h-full bg-white shadow-2xl" />
                    <div className="absolute w-9 h-9 rounded-full bg-white text-primary flex items-center justify-center shadow-lg border-2 border-primary">
                      <span className="material-symbols-outlined text-[18px]">drag_indicator</span>
                    </div>
                  </div>

                  {/* Range Input on Top */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={val}
                    onChange={(e) => handleSliderChange(slider.id, Number(e.target.value))}
                    aria-label={`Slide to compare before and after for ${slider.title}`}
                    className="ba-range-slider"
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 mt-3 px-1">
                  <span>← Slide for Before</span>
                  <span className="font-semibold text-primary">{slider.instruction}</span>
                  <span>Slide for After →</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
