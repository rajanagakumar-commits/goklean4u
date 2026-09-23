import React from 'react';
import { QuickPriceEstimator } from '../QuickPriceEstimator';
import { ScreenType } from '../../types';

interface EstimatorScreenProps {
  onOpenBooking: (serviceId?: string, cityId?: string) => void;
  onNavigate?: (screen: ScreenType) => void;
}

export const EstimatorScreen: React.FC<EstimatorScreenProps> = ({
  onOpenBooking,
  onNavigate,
}) => {
  return (
    <div className="w-full py-10 bg-porcelain-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Page Heading Banner */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold mb-3">
            <span className="material-symbols-outlined text-[16px]">calculate</span>
            <span>Accurate Cost Predictor · Andhra Pradesh &amp; Telangana</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
            Transparent Price Estimator
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Calculate instant estimated costs based on your exact BHK size, layout, condition, and service choice. Every quote includes German industrial machines, non-corrosive eco-chemicals, and our 3-day complimentary reclean warranty.
          </p>
        </div>

        {/* The Quick Price Estimator Component */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-8">
          <QuickPriceEstimator
            onOpenBooking={onOpenBooking}
            onNavigate={onNavigate}
            variant="embedded"
          />
        </div>

        {/* Estimation FAQs & Transparency Notes */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-[22px]">price_check</span>
            </div>
            <h3 className="text-sm font-bold text-navy-dark">Are materials &amp; machinery included?</h3>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              Yes. All industrial scrubbers (Taski Ergodisc), high-suction vacuums (Kärcher), microfibers, and Diversey eco-safe chemical solutions are 100% included in the calculated range.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-[22px]">commute</span>
            </div>
            <h3 className="text-sm font-bold text-navy-dark">Are there travel charges for my city?</h3>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              Zero travel fee applies within municipal zones across Hyderabad, Vijayawada, Visakhapatnam, Guntur, Rajahmundry, and Kakinada. Outer perimeter areas incur standard fuel tolls only if exceeding 35 km from our hub.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-[22px]">verified_user</span>
            </div>
            <h3 className="text-sm font-bold text-navy-dark">What if I'm not satisfied with the clean?</h3>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              Every booking is protected by our 3-Day Free Reclean Warranty. If any corner or shower tile is missed, our quality supervisor returns within 24 hours to re-scrub at zero charge.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
