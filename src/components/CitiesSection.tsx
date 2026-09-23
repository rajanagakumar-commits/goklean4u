import React from 'react';
import { CITIES_DATA } from '../data/mockData';

interface CitiesSectionProps {
  onOpenBooking: (serviceId?: string, cityId?: string) => void;
}

export const CitiesSection: React.FC<CitiesSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="w-full py-16 lg:py-20 bg-porcelain-canvas" id="locations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs text-primary font-bold uppercase tracking-wider">
              Regional Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-surface mt-2 tracking-tight">
              Operating Across 6 Metropolitan Hubs in AP &amp; Telangana
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              With local operations teams and dedicated equipment depots stationed across South India.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-primary text-sm font-bold bg-ocean-tint px-4 py-2 rounded-xl self-start md:self-end">
            <span className="material-symbols-outlined text-[20px]">near_me</span>
            <span>Expanding to 4 new cities soon</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CITIES_DATA.map((city) => (
            <div
              key={city.id}
              className="card-lift p-6 rounded-3xl bg-white shadow-xs border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-ocean-tint text-primary text-[11px] font-bold">
                    {city.statusBadge}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Est. {city.estYear}</span>
                </div>

                <h3 className="text-xl font-bold text-on-surface">
                  {city.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  Serving {city.coverageAreas.slice(0, 8).join(', ')}, and surrounding areas.
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-1 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-primary">person</span>
                    <span>Lead Supervisor: <strong>{city.supervisorName}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-secondary">call</span>
                    <span>Direct: <a href={`tel:${city.phone.replace(/[^0-9]/g, '')}`} className="text-primary hover:underline">{city.phone}</a></span>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-border flex items-center justify-between">
                <span className="text-xs text-primary font-bold">
                  {city.id === 'hyderabad' ? 'Same-Day Available' : 'Daily Deployments'}
                </span>
                <button
                  onClick={() => onOpenBooking('home-deep-clean', city.id)}
                  className="text-xs sm:text-sm font-bold text-primary hover:text-primary-container hover:underline flex items-center gap-1 cursor-pointer"
                >
                  Book in {city.name.split(' ')[0]} <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
