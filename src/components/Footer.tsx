import React from 'react';
import { ScreenType } from '../types';

interface FooterProps {
  onNavigate: (screen: ScreenType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface border-t border-slate-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                alt="Goklean4u Brand Logo"
                className="h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1VINiIYd5le1C0pNg0ce1n3DAHq78aDm0-t_Lv589uWP8oTLmD-QXftAykDp-wUk4RwZDag8eD4t6MA3k2ULPnTsfbVHHNGJVlcmpjrRvrhMCB7QZ8VBiyeDlnLc8zsQ029Uexj4kLkzhGLUy1ZTGt3RpA8WkNy5mip-zxY64zcojt2FdNDCp5pgBbgHSkU9cMcggfbMLvJfX8Fqm6PMKlCPTbeV5YsixqWzlz9I188w156pgE443Ll36A"
              />
              <span className="text-xl font-bold text-primary">GoKlean4u</span>
            </div>

            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              South India's premier residential, commercial, and post-construction cleaning service specialist. Delivering clinical hygiene, trained staff, and eco-friendly solutions across Andhra Pradesh &amp; Telangana.
            </p>

            <div className="flex items-center gap-3 pt-2 flex-wrap">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-xs font-semibold text-xs text-secondary border border-slate-100">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                5-Star Rated Service
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-xs font-semibold text-xs text-primary border border-slate-100">
                <span className="material-symbols-outlined text-[16px]">shield_with_heart</span>
                100% Guaranteed
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <p className="text-base font-bold text-on-surface mb-4">Cleaning Services</p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              <li>
                <button
                  onClick={() => onNavigate('estimator')}
                  className="hover:text-primary transition-colors text-left font-semibold text-primary flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[15px]">calculate</span>
                  Quick Price Estimator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('deep-cleaning')}
                  className="hover:text-primary transition-colors text-left"
                >
                  Home Deep Cleaning
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-primary transition-colors text-left"
                >
                  Commercial Office Sanitization
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-primary transition-colors text-left"
                >
                  Kitchen &amp; Chimney Degreasing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-primary transition-colors text-left"
                >
                  Bathroom Intense Scrubbing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-primary transition-colors text-left"
                >
                  Sofa &amp; Carpet Shampooing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-primary transition-colors text-left"
                >
                  Post-Construction Cleanup
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-primary transition-colors text-left"
                >
                  Integrated Pest Control
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Cities */}
          <div>
            <p className="text-base font-bold text-on-surface mb-4">Service Cities</p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              <li>
                <button
                  onClick={() => onNavigate('locations')}
                  className="hover:text-primary transition-colors text-left"
                >
                  Hyderabad &amp; Secunderabad
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('locations')}
                  className="hover:text-primary transition-colors text-left"
                >
                  Vijayawada
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('locations')}
                  className="hover:text-primary transition-colors text-left"
                >
                  Guntur
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('locations')}
                  className="hover:text-primary transition-colors text-left"
                >
                  Visakhapatnam (Vizag)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('locations')}
                  className="hover:text-primary transition-colors text-left"
                >
                  Rajahmundry
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('locations')}
                  className="hover:text-primary transition-colors text-left"
                >
                  Kakinada
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('locations')}
                  className="hover:text-primary transition-colors text-left font-semibold text-primary"
                >
                  View All Branch Depots →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Reach Us Directly */}
          <div>
            <p className="text-base font-bold text-on-surface mb-4">Reach Us Directly</p>
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-600">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-primary text-[20px]">call</span>
                <div>
                  <p className="text-xs font-bold text-on-surface">Direct Helpline</p>
                  <a className="hover:text-primary" href="tel:9703721616">
                    +91 97037 21616
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary text-[20px]">chat</span>
                <div>
                  <p className="text-xs font-bold text-on-surface">WhatsApp Booking</p>
                  <a
                    className="hover:text-primary"
                    href="https://wa.me/919703721616"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +91 97037 21616
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-primary text-[20px]">mail</span>
                <div>
                  <p className="text-xs font-bold text-on-surface">Inquiries &amp; Quotes</p>
                  <a className="hover:text-primary" href="mailto:support@goklean4u.com">
                    support@goklean4u.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-slate-500 text-[20px]">schedule</span>
                <div>
                  <p className="text-xs font-bold text-on-surface">Operating Hours</p>
                  <p className="text-xs">Mon - Sun: 7:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 GoKlean4u Facilities &amp; Cleaning Services. All rights reserved.</p>
          <div className="flex items-center gap-6 font-semibold">
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => onNavigate('faqs')}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Help Center
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
