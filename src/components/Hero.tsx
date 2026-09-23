import React from 'react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const scrollToBooking = () => {
    const el = document.getElementById('quick-booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenBooking();
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-porcelain-canvas pt-6 pb-14 lg:pt-12 lg:pb-20">
      {/* Subtle Ambient Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-ocean-tint/60 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Content (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-ocean-tint text-primary text-xs font-bold shadow-xs">
              <span className="material-symbols-outlined text-secondary text-[18px]">verified_user</span>
              <span>South India's Top Deep Cleaning Network</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight leading-[1.15]">
              Professional Cleaning Services That Make Your Space{' '}
              <span className="text-primary underline decoration-secondary-container decoration-4 underline-offset-8">
                Feel New
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Clinical-grade home sanitation, industrial steam fabric rejuvenation, and oil-free kitchen transformations. Handled by thoroughly background-verified cleaning specialists using hospital-safe chemicals.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={scrollToBooking}
                className="btn-shine flex items-center justify-center px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-primary hover:bg-primary-container text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all"
              >
                <span className="material-symbols-outlined text-[20px] mr-2">calendar_today</span>
                <span>BOOK A CLEANING</span>
              </button>

              <a
                className="flex items-center justify-center px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-emerald-subtle hover:bg-secondary-container text-secondary font-bold text-sm shadow-xs transition-colors"
                href="https://wa.me/919703721616"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px] mr-2">chat</span>
                <span>WhatsApp Instant Quote</span>
              </a>

              <a
                className="flex items-center gap-2 px-4 py-3.5 sm:py-4 rounded-xl text-slate-700 hover:text-primary font-bold text-sm transition-colors"
                href="tel:9703721616"
              >
                <span className="material-symbols-outlined text-[20px]">call</span>
                <span>+91 97037 21616</span>
              </a>
            </div>

            {/* Trust Badges Row */}
            <div className="pt-6 grid grid-cols-3 gap-3 sm:gap-4 border-t border-slate-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-xs text-primary">
                  <span className="material-symbols-outlined text-[22px]">star</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">4.9 / 5.0</p>
                  <p className="text-xs text-slate-500">Google Rating</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-xs text-primary">
                  <span className="material-symbols-outlined text-[22px]">workspace_premium</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">100,000+</p>
                  <p className="text-xs text-slate-500">Homes Cleaned</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-xs text-primary">
                  <span className="material-symbols-outlined text-[22px]">shield</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">100%</p>
                  <p className="text-xs text-slate-500">Verified Crew</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content: Hero Visual with Overlapping Trust Badges (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white">
              <img
                alt="Goklean4u cleaning crew sanitizing modern apartment"
                className="w-full h-[380px] sm:h-[460px] object-cover"
                src="https://lh3.googleusercontent.com/aida/AEtjO1XlzriYjVIp1ey6sf6CjtuWPhCmZfDw7hSkeguUCH5KB0ci9Xv2aToIWoVSHofnEhmwo5GGVkpzPCxgQTQKRZB0oWIRCb_lZ22OmbnvmwbG09g2JSnbknaKL5RP6Saa7Ok0y_0H299fay7rerw9d7V4BKVQi6tOuHFXZTl3PuScuTu-ZhAHzrEI8mJ_nGavjcXmFwsIoy-ZfJUEV5vGaLqQOjmw1iStge8-MLYBRcXjwIkdTtA3fsWUDQo"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/75 via-teal-deep/15 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs uppercase tracking-wider text-secondary-container font-bold">
                  Clinical Hygiene In Action
                </p>
                <h3 className="text-lg font-bold mt-1 text-white">
                  Hospital-Grade Disinfection &amp; Polish
                </h3>
                <p className="text-xs opacity-90 mt-1">
                  Equipped with 140°C pressurized steam and dual-motor rotary machines.
                </p>
              </div>
            </div>

            {/* Floating Verified Crew Badge */}
            <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-float-gentle z-20 border border-slate-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-subtle flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[24px] sm:text-[28px]">verified</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse-subtle" />
                  <span className="text-xs sm:text-sm font-bold text-on-surface">Background Verified</span>
                </div>
                <p className="text-[11px] text-slate-500">Govt ID &amp; Police Screened Crew</p>
              </div>
            </div>

            {/* Floating 3-Day Warranty Badge */}
            <div className="absolute -bottom-5 -left-3 sm:-bottom-6 sm:-left-6 bg-white/95 backdrop-blur-md px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl shadow-xl flex items-center gap-3 z-20 hidden sm:flex border border-slate-100">
              <span className="material-symbols-outlined text-tertiary-container text-[26px]">task_alt</span>
              <div>
                <p className="text-sm font-bold text-on-surface">3-Day Free Reclean</p>
                <p className="text-xs text-slate-500">Zero questions satisfaction guarantee</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
