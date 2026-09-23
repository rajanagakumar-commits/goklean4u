import React, { useState } from 'react';
import { SERVICES_DATA } from '../../data/mockData';
import { QuickPriceEstimator } from '../QuickPriceEstimator';

interface ServicesScreenProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesScreen: React.FC<ServicesScreenProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_DATA[0].id);

  const categories = ['All', 'Home Cleaning', 'Fabric Care', 'Specialized', 'Sanitization', 'Heavy Industrial', 'Corporate B2B', 'Floor Restoration'];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  const activeService = SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];

  return (
    <div className="w-full py-12 bg-porcelain-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs text-primary font-bold uppercase tracking-wider">
            Service Catalog &amp; Transparent Rates
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-on-surface mt-2 tracking-tight">
            Specialized Cleaning &amp; Restoration Services
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Every service is executed with hospital-grade sanitizers, Kärcher industrial machines, and background-verified technicians.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:text-primary hover:bg-ocean-tint border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 2-Column Catalog View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Services List (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            {filteredServices.map((service) => {
              const isSelected = service.id === activeService.id;

              return (
                <div
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`p-5 rounded-3xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-primary shadow-md ring-2 ring-primary/20'
                      : 'bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isSelected ? 'bg-primary text-white' : 'bg-ocean-tint text-primary'
                      }`}>
                        <span className="material-symbols-outlined text-[22px]">{service.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-on-surface">{service.name}</h4>
                        <span className="text-[11px] text-slate-500">{service.category} · {service.duration}</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-primary whitespace-nowrap">
                      From ₹{service.startingPrice}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-2.5 line-clamp-2">{service.shortDesc}</p>
                </div>
              );
            })}
          </div>

          {/* Active Service Detailed View (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6 sticky top-28">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-ocean-tint text-primary">
                    {activeService.category}
                  </span>
                  {activeService.popularTag && (
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed">
                      {activeService.popularTag}
                    </span>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-on-surface mt-2">{activeService.name}</h3>
              </div>

              <div className="text-right">
                <span className="text-xs text-slate-500">Starting From</span>
                <p className="text-2xl font-extrabold text-primary">
                  ₹{activeService.startingPrice} <span className="text-xs text-slate-500 font-normal">({activeService.unit})</span>
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">{activeService.fullDesc}</p>

            {/* Inclusions */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                Included Checklist &amp; Steps
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeService.inclusions.map((inc, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-on-surface">
                    <span className="material-symbols-outlined text-secondary text-[18px] flex-shrink-0">check_circle</span>
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Machinery & Chemical Specifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-surface-container-low p-4 rounded-2xl border border-slate-200 text-xs">
              <div>
                <span className="font-bold text-slate-700 block mb-1">Industrial Machinery:</span>
                <p className="text-slate-600">{activeService.equipment.join(', ')}</p>
              </div>
              <div>
                <span className="font-bold text-slate-700 block mb-1">Safe Chemistry Used:</span>
                <p className="text-slate-600">{activeService.chemicalType}</p>
              </div>
            </div>

            {/* Pricing Variants */}
            {activeService.variants && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                  Package Options
                </h4>
                <div className="space-y-2">
                  {activeService.variants.map((v, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                      <div>
                        <strong className="text-on-surface">{v.name}</strong>
                        <p className="text-slate-500">{v.description}</p>
                      </div>
                      <span className="font-bold text-primary text-sm">₹{v.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
                <span>Includes 3-Day Free Reclean Guarantee</span>
              </div>

              <button
                onClick={() => onOpenBooking(activeService.id)}
                className="btn-shine px-7 py-3 rounded-xl bg-primary hover:bg-primary-container text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
              >
                Book This Service Now
              </button>
            </div>
          </div>

        </div>

        {/* Embedded Quick Price Estimator Section */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-8">
            <QuickPriceEstimator
              onOpenBooking={(serviceId) => onOpenBooking(serviceId)}
              variant="embedded"
            />
          </div>
        </div>

      </div>
    </div>
  );
};
