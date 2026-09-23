import React, { useState } from 'react';

export const ContactScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('hyderabad');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setName('');
      setPhone('');
      setMessage('');
    }, 4000);
  };

  return (
    <div className="w-full py-12 bg-porcelain-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs text-primary font-bold uppercase tracking-wider">
            7 Days a Week (7:00 AM - 9:00 PM)
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-on-surface mt-2 tracking-tight">
            Connect With Goklean4u Regional Operations
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Need an emergency same-day booking, custom multi-floor commercial quotation, or have questions about our chemical safety? Our senior coordinators are on call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Quick Contact Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-ocean-tint text-primary flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[26px]">call</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-on-surface">Direct Central Helpline</h3>
                <p className="text-xs text-slate-500 mt-0.5">Toll-free across AP &amp; Telangana</p>
                <a href="tel:9703721616" className="text-base font-bold text-primary block mt-1 hover:underline">
                  +91 97037 21616
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-subtle text-secondary flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[26px]">chat</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-on-surface">WhatsApp Dispatch Bot &amp; Support</h3>
                <p className="text-xs text-slate-500 mt-0.5">Send photos of stained sofa or kitchen for instant quote</p>
                <a
                  href="https://wa.me/919703721616"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold text-secondary block mt-1 hover:underline"
                >
                  Message +91 97037 21616 →
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-ocean-tint text-primary flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[26px]">mail</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-on-surface">Email Inquiries</h3>
                <p className="text-xs text-slate-500 mt-0.5">Commercial RFPs, billing &amp; customer care</p>
                <a href="mailto:support@goklean4u.com" className="text-sm font-bold text-primary block mt-1 hover:underline">
                  support@goklean4u.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="p-6 rounded-3xl bg-surface-container-low border border-slate-200 text-xs text-slate-600 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-on-surface">
                <span className="material-symbols-outlined text-primary text-[18px]">schedule</span>
                <span>Operational Windows</span>
              </div>
              <p>• Service Crew Shifts: Monday to Sunday, 7:30 AM – 7:30 PM</p>
              <p>• Customer Helpline &amp; Dispatch: 7:00 AM – 9:00 PM</p>
              <p>• 24/7 Emergency Post-Construction Handover (By Prior Booking)</p>
            </div>

          </div>

          {/* Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-on-surface mb-1">
              Send an Inquiry or Request a Call Back
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Our supervisor will review your request and call back with an exact estimate within 15 minutes.
            </p>

            {sent ? (
              <div className="p-6 rounded-2xl bg-emerald-subtle text-secondary space-y-2 text-center animate-fadeIn">
                <span className="material-symbols-outlined text-[42px]">check_circle</span>
                <h4 className="text-lg font-bold">Inquiry Transmitted Successfully!</h4>
                <p className="text-xs text-slate-700">
                  Thank you, {name}. Our regional supervisor for {city} will ring you at {phone} shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Varma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Select City Hub *</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                  >
                    <option value="hyderabad">Hyderabad &amp; Secunderabad</option>
                    <option value="vijayawada">Vijayawada</option>
                    <option value="visakhapatnam">Visakhapatnam (Vizag)</option>
                    <option value="guntur">Guntur</option>
                    <option value="rajahmundry">Rajahmundry</option>
                    <option value="kakinada">Kakinada</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Message or Requirements *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about the property type, number of rooms, specific stains, or preferred schedule..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-shine w-full py-3.5 rounded-xl bg-primary hover:bg-primary-container text-white text-sm font-bold shadow-md transition-all cursor-pointer"
                >
                  Send Inquiry &amp; Request Callback
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
