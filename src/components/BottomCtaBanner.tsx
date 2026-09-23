import React from 'react';

interface BottomCtaBannerProps {
  onOpenBooking: () => void;
}

export const BottomCtaBanner: React.FC<BottomCtaBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-teal-deep text-white p-8 sm:p-14 shadow-2xl">
          {/* Background decorative wave */}
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-primary/40 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed text-xs font-bold">
              <span className="material-symbols-outlined text-[16px]">celebration</span>
              Special First-Time Booking Offer
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready for a Cleaner, Fresher Space?
            </h2>

            <p className="text-base sm:text-lg text-white opacity-90 leading-relaxed">
              Experience clinical-grade deep cleaning backed by our 3-Day Satisfaction Guarantee. Same-day and next-day slots filling fast across Hyderabad, Vijayawada, Vizag, Guntur, Rajahmundry &amp; Kakinada.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="btn-shine px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-tertiary-container hover:bg-tertiary text-white font-bold text-sm shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                <span>BOOK YOUR CLEANING TODAY</span>
              </button>

              <a
                className="px-6 py-3.5 sm:py-4 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm backdrop-blur-md transition-all flex items-center gap-2 border border-white/20"
                href="tel:9703721616"
              >
                <span className="material-symbols-outlined text-[20px]">call</span>
                <span>Call Helpline: 9703721616</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
