import React, { useState } from 'react';
import { CITIES_DATA } from '../../data/mockData';

interface LocationsScreenProps {
  onOpenBooking: (serviceId?: string, cityId?: string) => void;
}

export const LocationsScreen: React.FC<LocationsScreenProps> = ({ onOpenBooking }) => {
  const [selectedCityId, setSelectedCityId] = useState<string>(CITIES_DATA[0].id);

  const activeCity = CITIES_DATA.find((c) => c.id === selectedCityId) || CITIES_DATA[0];

  return (
    <div className="w-full py-12 bg-porcelain-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs text-primary font-bold uppercase tracking-wider">
            Operational Footprint
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-on-surface mt-2 tracking-tight">
            Branch Depots &amp; City Hubs Across AP &amp; Telangana
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            With 33+ active service vans, localized inventory depots, and full-time background-verified crews stationed near you.
          </p>
        </div>

        {/* City Selector Pills */}
        <div className="flex flex-wrap gap-2.5 justify-center">
          {CITIES_DATA.map((city) => (
            <button
              key={city.id}
              onClick={() => setSelectedCityId(city.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCityId === city.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-slate-700 hover:text-primary hover:bg-ocean-tint border border-slate-200'
              }`}
            >
              {city.name}
            </button>
          ))}
        </div>

        {/* Detailed Hub Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Hub info (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{activeCity.state} Regional Depot</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-on-surface mt-1">{activeCity.name}</h2>
                </div>
                <span className="px-3.5 py-1 rounded-full bg-emerald-subtle text-secondary font-bold text-xs">
                  {activeCity.statusBadge}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-surface-container-low border border-slate-100">
                  <span className="text-[11px] text-slate-500 block">Active Service Fleet</span>
                  <span className="text-base font-extrabold text-primary">{activeCity.teamsCount} Vans on Road</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-surface-container-low border border-slate-100">
                  <span className="text-[11px] text-slate-500 block">Established</span>
                  <span className="text-base font-extrabold text-primary">{activeCity.estYear}</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-surface-container-low border border-slate-100">
                  <span className="text-[11px] text-slate-500 block">Local Turnaround</span>
                  <span className="text-base font-extrabold text-secondary">Same / Next Day</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                  Localities Covered by {activeCity.name.split(' ')[0]} Teams
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeCity.coverageAreas.map((area, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium"
                    >
                      📍 {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-surface-container-high/50 border border-slate-200 space-y-2 text-xs">
                <div className="flex items-start gap-2 text-slate-700">
                  <span className="material-symbols-outlined text-primary text-[18px]">location_on</span>
                  <div>
                    <strong className="block text-on-surface">Depot Address:</strong>
                    <span className="text-slate-600">{activeCity.depotAddress}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-700 pt-1">
                  <span className="material-symbols-outlined text-secondary text-[18px]">person</span>
                  <span>Supervisor in Charge: <strong>{activeCity.supervisorName}</strong></span>
                </div>
              </div>

            </div>

            {/* Action Card (5 Cols) */}
            <div className="lg:col-span-5 bg-teal-deep text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-5">
              <span className="text-xs font-bold text-secondary-container uppercase tracking-wider">Fast Booking</span>
              <h3 className="text-xl font-bold">Schedule Cleaning in {activeCity.name}</h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                Direct dispatch from our local {activeCity.name.split(' ')[0]} inventory depot ensures timely arrival and no long-distance transit delays.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={`tel:${activeCity.phone.replace(/[^0-9]/g, '')}`}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors text-white text-xs font-bold"
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">call</span>
                    Direct City Line
                  </span>
                  <span>{activeCity.phone}</span>
                </a>

                <a
                  href={`https://wa.me/919703721616?text=Hi%20GoKlean4u,%20I%20am%20looking%20for%20cleaning%20services%20in%20${activeCity.name}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 text-xs font-bold transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    WhatsApp Dispatch Desk
                  </span>
                  <span>Open Now</span>
                </a>
              </div>

              <button
                onClick={() => onOpenBooking('home-deep-clean', activeCity.id)}
                className="btn-shine w-full py-3.5 rounded-xl bg-secondary-container hover:bg-secondary-fixed text-on-secondary-fixed text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
              >
                Book Cleaning in {activeCity.name.split(' ')[0]}
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
