import React from 'react';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-border p-3 shadow-2xl flex items-center gap-3">
      <a
        className="flex-1 py-3 rounded-xl bg-emerald-subtle text-secondary font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors"
        href="https://wa.me/919703721616"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="material-symbols-outlined text-[18px]">chat</span>
        <span>WhatsApp Us</span>
      </a>

      <button
        onClick={onOpenBooking}
        className="flex-1 py-3 rounded-xl bg-primary text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md hover:bg-primary-container transition-colors cursor-pointer"
      >
        <span className="material-symbols-outlined text-[18px]">calendar_month</span>
        <span>Book Now</span>
      </button>
    </div>
  );
};
