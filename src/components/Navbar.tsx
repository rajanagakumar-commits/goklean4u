import React, { useState } from 'react';
import { ScreenType } from '../types';

interface NavbarProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onOpenBooking: (prefillService?: string) => void;
  bookingCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  onNavigate,
  onOpenBooking,
  bookingCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; screen: ScreenType }[] = [
    { label: 'Services', screen: 'services' },
    { label: 'Price Estimator', screen: 'estimator' },
    { label: 'Deep Cleaning', screen: 'deep-cleaning' },
    { label: 'Locations', screen: 'locations' },
    { label: 'Why Us', screen: 'why-us' },
    { label: 'Testimonials', screen: 'testimonials' },
    { label: 'FAQs', screen: 'faqs' },
    { label: 'Contact', screen: 'contact' },
  ];

  const handleNavClick = (screen: ScreenType) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      {/* Announcement Bar */}
      <div className="bg-teal-deep text-on-primary py-1.5 px-4 text-center text-xs font-semibold tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span>⚡ Delivering Sparkle Across Hyderabad, Vijayawada, Guntur, Vizag, Rajahmundry &amp; Kakinada</span>
          <span className="opacity-50 hidden sm:inline">|</span>
          <a
            className="text-secondary-container hover:text-on-primary flex items-center gap-1 transition-colors"
            href="tel:9703721616"
          >
            <span className="material-symbols-outlined text-[14px]">call</span>
            Call: 9703721616
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-20 bg-white/95 backdrop-blur-xl border-b border-slate-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-3">
          
          {/* Brand Logo & Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group transition-transform focus:outline-none"
          >
            <img
              alt="Goklean4u Brand Logo"
              className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida/AEtjO1VINiIYd5le1C0pNg0ce1n3DAHq78aDm0-t_Lv589uWP8oTLmD-QXftAykDp-wUk4RwZDag8eD4t6MA3k2ULPnTsfbVHHNGJVlcmpjrRvrhMCB7QZ8VBiyeDlnLc8zsQ029Uexj4kLkzhGLUy1ZTGt3RpA8WkNy5mip-zxY64zcojt2FdNDCp5pgBbgHSkU9cMcggfbMLvJfX8Fqm6PMKlCPTbeV5YsixqWzlz9I188w156pgE443Ll36A"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary tracking-tight leading-tight">
                GoKlean4u
              </span>
              <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">
                Home &amp; Commercial Cleaning
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = currentScreen === item.screen;
              return (
                <button
                  key={item.screen}
                  onClick={() => handleNavClick(item.screen)}
                  className={`text-sm font-semibold transition-all py-2 px-3 rounded-lg flex items-center gap-1 ${
                    isActive
                      ? 'bg-ocean-tint text-primary font-bold shadow-xs'
                      : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs & Profile */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Phone Quick link */}
            <a
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-primary hover:bg-ocean-tint text-sm font-semibold transition-colors"
              href="tel:9703721616"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span className="hidden md:inline">9703721616</span>
            </a>

            {/* WhatsApp trigger */}
            <a
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-subtle text-secondary text-sm font-semibold hover:bg-secondary-container transition-colors"
              href="https://wa.me/919703721616"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>WhatsApp</span>
            </a>

            {/* Book A Cleaning Primary Button */}
            <button
              onClick={() => onOpenBooking()}
              className="btn-shine flex items-center justify-center px-4 py-2.5 rounded-xl bg-primary hover:bg-primary-container text-white text-sm font-bold shadow-md hover:shadow-lg transition-all"
            >
              <span className="material-symbols-outlined text-[18px] mr-1.5">calendar_month</span>
              <span className="whitespace-nowrap">BOOK A CLEANING</span>
            </button>

            {/* My Bookings Tracker icon button */}
            <button
              onClick={() => handleNavClick('my-bookings')}
              aria-label="My Bookings"
              className="relative w-9 h-9 rounded-full bg-surface-container-high hover:bg-ocean-tint text-primary flex items-center justify-center transition-colors shadow-xs"
              title="View My Bookings"
            >
              <span className="material-symbols-outlined text-[20px]">receipt_long</span>
              {bookingCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-secondary text-white text-[11px] font-bold flex items-center justify-center shadow-xs">
                  {bookingCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-10 h-10 rounded-xl bg-surface-container-low text-on-surface flex items-center justify-center hover:bg-surface-container transition-colors"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/98 backdrop-blur-xl border-b border-slate-border px-6 py-5 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left px-4 py-2.5 rounded-xl text-base font-semibold ${
                currentScreen === 'home'
                  ? 'bg-ocean-tint text-primary font-bold'
                  : 'text-on-surface hover:bg-surface-container-low'
              }`}
            >
              Home Overview
            </button>
            {navItems.map((item) => (
              <button
                key={item.screen}
                onClick={() => handleNavClick(item.screen)}
                className={`text-left px-4 py-2.5 rounded-xl text-base font-semibold ${
                  currentScreen === item.screen
                    ? 'bg-ocean-tint text-primary font-bold'
                    : 'text-on-surface hover:bg-surface-container-low'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('my-bookings')}
              className={`text-left px-4 py-2.5 rounded-xl text-base font-semibold flex items-center justify-between ${
                currentScreen === 'my-bookings'
                  ? 'bg-ocean-tint text-primary font-bold'
                  : 'text-on-surface hover:bg-surface-container-low'
              }`}
            >
              <span>My Bookings &amp; Guarantee</span>
              <span className="px-2 py-0.5 rounded-full bg-secondary-container text-secondary text-xs font-bold">
                {bookingCount} Active
              </span>
            </button>

            <div className="pt-4 border-t border-slate-border flex flex-col gap-2.5">
              <a
                href="tel:9703721616"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-surface-container-low text-primary text-sm font-bold"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                Call Helpline: +91 97037 21616
              </a>
              <a
                href="https://wa.me/919703721616"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-subtle text-secondary text-sm font-bold"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                WhatsApp Instant Assistant
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
