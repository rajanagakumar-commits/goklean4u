import React from 'react';
import { ScreenType } from '../types';

interface ServicesBentoProps {
  onOpenBooking: (serviceId?: string) => void;
  onNavigate: (screen: ScreenType) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <section className="w-full py-16 lg:py-20 bg-porcelain-canvas" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs text-primary font-bold uppercase tracking-wider">
            Tailored Specialized Care
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-surface mt-2 tracking-tight">
            Comprehensive Sanitization for Every Room and Fabric
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            From heavy degreasing to surgical fabric sanitization, we bring industrial performance straight to your doorstep.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Bento 1: Full Home Deep Clean (Span 2 col on large) */}
          <div className="card-lift lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-ocean-tint text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[32px]">home_work</span>
                </div>
                <span className="px-3.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold tracking-wide">
                  MOST POPULAR
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-on-surface">
                Complete Residential Deep Cleaning
              </h3>

              <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                Full top-to-bottom scrub down: cobweb removal, ceiling fans, switchboards, balcony jet washing, multi-surface window glass wiping, tile floor buffing, and high-frequency touchpoint sanitization.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-on-surface font-medium">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  Tile Buffing
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-on-surface font-medium">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  Balcony Jet Wash
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-on-surface font-medium">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  Glass Polishing
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-on-surface font-medium">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  Fan &amp; Light Dusting
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-on-surface font-medium">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  Wall Spot Treatment
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-on-surface font-medium">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  Hospital Grade Spray
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-border flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-xs text-slate-500 font-medium">Starting From</span>
                <p className="text-lg sm:text-xl font-bold text-primary">
                  ₹3,499 <span className="text-xs text-slate-500 font-normal">(1 BHK)</span>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onNavigate('deep-cleaning')}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:text-primary hover:border-primary text-xs sm:text-sm font-bold transition-all cursor-pointer"
                >
                  View Checklist
                </button>
                <button
                  onClick={() => onOpenBooking('home-deep-clean')}
                  className="px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-container text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
                >
                  Book Deep Clean
                </button>
              </div>
            </div>
          </div>

          {/* Bento 2: Sofa & Carpet Shampooing */}
          <div className="card-lift bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-ocean-tint text-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[32px]">chair</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-on-surface">
                Sofa &amp; Upholstery Shampooing
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Three-stage injection-extraction method. Dissolves beverage spills, bodily oils, dust mites, and stubborn odor without soaking fabrics.
              </p>
              <ul className="space-y-2 mt-4 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  Deep fiber foam injection
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  High-suction fluid extraction
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  90% dry within 4 hours
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-border flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500">Starting From</span>
                <p className="text-base sm:text-lg font-bold text-primary">
                  ₹699 <span className="text-xs text-slate-500 font-normal">(Per Seat)</span>
                </p>
              </div>
              <button
                onClick={() => onOpenBooking('sofa-carpet')}
                className="px-4 py-2 rounded-xl bg-ocean-tint hover:bg-primary hover:text-white text-primary font-bold text-xs sm:text-sm transition-all cursor-pointer"
              >
                Book Wash
              </button>
            </div>
          </div>

          {/* Bento 3: Kitchen Degreasing */}
          <div className="card-lift bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-ocean-tint text-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[32px]">countertops</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-on-surface">
                Kitchen Degreasing &amp; Chimney
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Dissolves baked-on Indian spice oils, grease encrusted chimney filters, gas burner grime, tile backsplashes, and under-sink sanitation.
              </p>
              <ul className="space-y-2 mt-4 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  Baffle filter chemical bath
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  Backsplash tile restoration
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  Cabinet interior &amp; exterior wipe
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-border flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500">Starting From</span>
                <p className="text-base sm:text-lg font-bold text-primary">₹1,799</p>
              </div>
              <button
                onClick={() => onOpenBooking('kitchen-degrease')}
                className="px-4 py-2 rounded-xl bg-ocean-tint hover:bg-primary hover:text-white text-primary font-bold text-xs sm:text-sm transition-all cursor-pointer"
              >
                Book Kitchen
              </button>
            </div>
          </div>

          {/* Bento 4: Bathroom Intense Descaling */}
          <div className="card-lift bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-ocean-tint text-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[32px]">shower</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-on-surface">
                Bathroom Intense Descaling
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Eradicates stubborn hard-water calcification, soap scum, grout discoloration, and chrome tap oxidation to hospital-standard hygiene.
              </p>
              <ul className="space-y-2 mt-4 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  Glass partition scaling removal
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  Commode internal sanitizing
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  Anti-bacterial drain flushing
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-border flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500">Starting From</span>
                <p className="text-base sm:text-lg font-bold text-primary">
                  ₹799 <span className="text-xs text-slate-500 font-normal">/ Bath</span>
                </p>
              </div>
              <button
                onClick={() => onOpenBooking('bathroom-scrub')}
                className="px-4 py-2 rounded-xl bg-ocean-tint hover:bg-primary hover:text-white text-primary font-bold text-xs sm:text-sm transition-all cursor-pointer"
              >
                Book Bath
              </button>
            </div>
          </div>

          {/* Bento 5: Mattress & Pest Shield */}
          <div className="card-lift bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-ocean-tint text-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[32px]">pest_control</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-on-surface">
                Pest Shield &amp; Mattress Clean
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Eliminate dust mites, dead skin cells, and allergens. Combined with odorless herbal gel anti-cockroach and anti-termite barrier protection.
              </p>
              <ul className="space-y-2 mt-4 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  High-frequency UV mattress vacuum
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  Odorless German Bayer herbal gel
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  90-day anti-pest warranty
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-border flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500">Starting From</span>
                <p className="text-base sm:text-lg font-bold text-primary">₹1,199</p>
              </div>
              <button
                onClick={() => onOpenBooking('pest-control')}
                className="px-4 py-2 rounded-xl bg-ocean-tint hover:bg-primary hover:text-white text-primary font-bold text-xs sm:text-sm transition-all cursor-pointer"
              >
                Book Shield
              </button>
            </div>
          </div>

        </div>

        {/* Allied Maintenance Strip */}
        <div className="mt-8 bg-surface-container-high/60 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 border border-slate-200">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-[28px] flex-shrink-0">construction</span>
            <p className="text-xs sm:text-sm text-on-surface leading-relaxed">
              <strong>Looking for Allied Services?</strong> We also offer Post-Construction Rubble Scrubbing, Italian Marble Crystallization, Water Tank Sanitization, and Office Corporate Sanitization.
            </p>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="text-xs sm:text-sm font-bold text-primary hover:underline flex items-center gap-1 cursor-pointer whitespace-nowrap"
          >
            Explore All 8 Services <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>

      </div>
    </section>
  );
};
