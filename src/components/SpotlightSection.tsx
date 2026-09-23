import React from 'react';

interface SpotlightSectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const SpotlightSection: React.FC<SpotlightSectionProps> = ({ onOpenBooking }) => {
  return (
    <div className="w-full">
      {/* 1. STEAM EXTRACTION SPOTLIGHT */}
      <section className="w-full py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Image with badge (6 Cols) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  alt="Indian technician steam extraction cleaning fabric sofa"
                  className="w-full h-[360px] sm:h-[440px] object-cover"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1X7O_okD-ex-3aOERlQkOTM0cCR6spp_QNG65XLQHQTQzV4gbeqBO3oNS8erdgVEbbIlsl03aiRdLBBirRGBiM8ffMmDvSB5KGV_1SpUKUKeM-dP7wTfzKaAOmUeuPA1QgW0_PsydZhU5pmZ3lNnB7IX5nV3qT_igVnpV4Qd5SuPkUG0t9lzU9GSrGC0RGfLFT7jGZlsu0Amyq213GQCY24k1g7R7C_Rvj_enwXlS-4I0UFz9M_vzufvH8"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/50 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md px-4 sm:px-5 py-3 rounded-2xl shadow-lg flex items-center gap-3 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-ocean-tint text-primary flex items-center justify-center font-bold text-xs">
                  140°C
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-on-surface">High-Heat Sanitization</p>
                  <p className="text-[11px] text-slate-500">Neutralizes 99.9% of bacteria and mites</p>
                </div>
              </div>
            </div>

            {/* Detail copy (6 Cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ocean-tint text-primary text-xs font-bold">
                <span className="material-symbols-outlined text-[16px]">water_drop</span>
                Industrial Upholstery Spa
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-surface tracking-tight leading-tight">
                Breathe Freshness Back into Couches, Recliners, and Dining Chairs
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Everyday vacuuming only captures surface dust. Our dual-chamber extraction system penetrates 4 inches into the foam padding to liquefy trapped sweat stains, pet fur, milk stains, and dust mites, extracting 95% of contaminated moisture on the spot.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-emerald-subtle text-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">done</span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-on-surface">Dry-Solvent Stain Pre-Treatment</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Breaks down tough tea, wine, coffee, grease, and ink blotches before mechanical extraction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-emerald-subtle text-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">done</span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-on-surface">Color-Safe Anti-Fading Formulations</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Neutral pH shampoos formulated specifically for velvet, linen, suede, and microfiber fabrics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-emerald-subtle text-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">done</span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-on-surface">Turbine Moisture Extraction</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Leaves cushions ready to sit on comfortably within hours, preventing mold and mustiness.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenBooking('sofa-carpet')}
                  className="btn-shine px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-container text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  Schedule Sofa Spa
                </button>
                <span className="text-xs text-slate-500 font-medium">Includes complimentary armrest deodorizing</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SPOTLESS KITCHEN SPOTLIGHT */}
      <section className="w-full py-16 lg:py-20 bg-porcelain-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Copy (6 Cols) */}
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-subtle text-tertiary-container text-xs font-bold">
                <span className="material-symbols-outlined text-[16px]">local_fire_department</span>
                Heavy Oil &amp; Spice Dissolver
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-surface tracking-tight leading-tight">
                Sparkling Modular Kitchens Free of Sticky Oil &amp; Yellow Grease
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                South Indian cooking infuses air with mustard seeds, tadka oil, and turmeric vapor that leaves a yellow film across overhead cabinets, chimneys, and tile joints. Our specialists break down hardened grease using food-safe citrus surfactants.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white shadow-xs border border-slate-100">
                  <div className="flex items-center gap-2 text-primary text-sm font-bold">
                    <span className="material-symbols-outlined text-[20px]">filter_alt</span>
                    Chimney Filter Bath
                  </div>
                  <p className="text-xs text-slate-600 mt-1.5 leading-normal">
                    Deep chemical immersion removes 100% of accumulated grease choking airflow.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white shadow-xs border border-slate-100">
                  <div className="flex items-center gap-2 text-primary text-sm font-bold">
                    <span className="material-symbols-outlined text-[20px]">sanitizer</span>
                    Sink &amp; Drain Descale
                  </div>
                  <p className="text-xs text-slate-600 mt-1.5 leading-normal">
                    Steam jet blast destroys drain flies, roach egg pods, and odor-causing sludge.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white shadow-xs border border-slate-100">
                  <div className="flex items-center gap-2 text-primary text-sm font-bold">
                    <span className="material-symbols-outlined text-[20px]">shelves</span>
                    Cabinet Cleanse
                  </div>
                  <p className="text-xs text-slate-600 mt-1.5 leading-normal">
                    Internal shelf wipe and exterior laminate buffing for streak-free reflection.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white shadow-xs border border-slate-100">
                  <div className="flex items-center gap-2 text-primary text-sm font-bold">
                    <span className="material-symbols-outlined text-[20px]">cleaning</span>
                    Granite Polishing
                  </div>
                  <p className="text-xs text-slate-600 mt-1.5 leading-normal">
                    Non-abrasive quartz and granite restoration that preserves stone luster.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking('kitchen-degrease')}
                  className="btn-shine inline-flex items-center px-6 py-3.5 rounded-xl bg-tertiary-container hover:bg-tertiary text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  Book Complete Kitchen Degrease
                </button>
              </div>
            </div>

            {/* Right Image (6 Cols) */}
            <div className="lg:col-span-6 relative order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  alt="Gleaming spotless modern modular kitchen after deep cleaning"
                  className="w-full h-[360px] sm:h-[440px] object-cover"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1XwOTkIXZAbN0UzoLYmhYev105MukhWh5la8f8-s9ocuXrnhevMb67GL_xQ57W1QjXtd9T4dW7LjZTz5DqNhIQP70K5KzdSTMen8TuAJQbChpaCTGPxYiOJznGPTLLcBdnEvd_3KcVOL8rQrCCbJyTNy_jzQO-B8YF3HZExf_T638EWS0y5pUlBQ39kVijSnbaMHLFdCWlH3cNcKFA8iLq0dwKMFdwVkDnQ2qUAFESQc2wyfLX-5SFnRw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/50 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-5 bg-white/95 backdrop-blur-md px-4 sm:px-5 py-3 sm:py-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-emerald-subtle text-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">restaurant</span>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-on-surface">100% Food-Safe Chemistry</p>
                  <p className="text-[11px] text-slate-500">Zero chemical residue on cooking counters</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
