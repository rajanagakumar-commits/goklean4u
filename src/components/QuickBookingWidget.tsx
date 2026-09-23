import React, { useState } from 'react';
import { Booking } from '../types';

interface QuickBookingWidgetProps {
  onBookingCreated: (booking: Booking) => void;
}

export const QuickBookingWidget: React.FC<QuickBookingWidgetProps> = ({ onBookingCreated }) => {
  const [selectedService, setSelectedService] = useState('home-deep-clean');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('hyderabad');
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState('morning');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<Booking | null>(null);

  const chips = [
    { id: 'home-deep-clean', icon: '🏡', label: 'Complete Home Deep Cleaning' },
    { id: 'sofa-carpet', icon: '🛋️', label: 'Sofa & Upholstery Shampooing' },
    { id: 'kitchen-degrease', icon: '🍳', label: 'Kitchen Degrease & Chimney' },
    { id: 'bathroom-scrub', icon: '🚿', label: 'Bathroom Descaling' },
    { id: 'pest-control', icon: '🛡️', label: 'Integrated Pest Shield' },
  ];

  const serviceNames: Record<string, string> = {
    'home-deep-clean': 'Complete Home Deep Cleaning',
    'sofa-carpet': 'Sofa & Upholstery Shampooing',
    'kitchen-degrease': 'Kitchen Degrease & Chimney',
    'bathroom-scrub': 'Bathroom Intense Descaling',
    'mattress-clean': 'Mattress Allergen Extraction',
    'pest-control': 'Integrated Pest Shield',
    'post-construction': 'Post-Construction Deep Clean',
  };

  const slotLabels: Record<string, string> = {
    morning: 'Morning (8:00 AM - 11:00 AM)',
    afternoon: 'Afternoon (11:00 AM - 3:00 PM)',
    evening: 'Late Afternoon (3:00 PM - 7:00 PM)',
  };

  const basePrices: Record<string, number> = {
    'home-deep-clean': 4499,
    'sofa-carpet': 1999,
    'kitchen-degrease': 1799,
    'bathroom-scrub': 1499,
    'mattress-clean': 1199,
    'pest-control': 1699,
    'post-construction': 6499,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const newBooking: Booking = {
        id: `GK4U-${randomNum}`,
        serviceId: selectedService,
        serviceName: serviceNames[selectedService] || 'Home Deep Cleaning',
        variant: 'Standard Package',
        customerName: name,
        phone,
        city,
        address: `${city.charAt(0).toUpperCase() + city.slice(1)} - Service address to be confirmed on call`,
        date,
        timeSlot: slotLabels[slot] || 'Morning',
        addons: ['Complimentary Touchpoint Misting'],
        totalAmount: basePrices[selectedService] || 3499,
        status: 'Supervisor Assigned',
        supervisorName: city === 'hyderabad' ? 'K. Vamsi Krishna' : 'Local Operations Lead',
        supervisorPhone: '+91 97037 21616',
        createdAt: new Date().toISOString(),
      };

      onBookingCreated(newBooking);
      setSubmittedBooking(newBooking);
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section className="w-full bg-white py-12 shadow-sm relative z-20" id="quick-booking">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-surface-container-low rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-border">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs text-primary font-bold uppercase tracking-wider">
                Fast-Track Reservation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-on-surface mt-1">
                Book Your Service in Under 60 Seconds
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
              <span className="text-xs font-semibold text-slate-500">
                Slots open for Today &amp; Tomorrow
              </span>
            </div>
          </div>

          {/* Quick Select Category Chips */}
          <div className="mb-6 flex flex-wrap gap-2.5">
            {chips.map((chip) => {
              const isActive = selectedService === chip.id;
              return (
                <button
                  key={chip.id}
                  type="button"
                  onClick={() => setSelectedService(chip.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white text-slate-700 hover:text-primary hover:bg-ocean-tint'
                  }`}
                >
                  <span>{chip.icon}</span>
                  <span>{chip.label}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Booking Form */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-on-surface flex items-center gap-1" htmlFor="user-name">
                <span className="material-symbols-outlined text-slate-500 text-[16px]">person</span>
                Your Full Name
              </label>
              <input
                id="user-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ramesh Varma"
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-on-surface text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-on-surface flex items-center gap-1" htmlFor="user-phone">
                <span className="material-symbols-outlined text-slate-500 text-[16px]">call</span>
                Mobile Number
              </label>
              <input
                id="user-phone"
                type="tel"
                pattern="[0-9]{10}"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="10-digit mobile number"
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-on-surface text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-on-surface flex items-center gap-1" htmlFor="user-city">
                <span className="material-symbols-outlined text-slate-500 text-[16px]">location_on</span>
                City
              </label>
              <select
                id="user-city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-on-surface text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              >
                <option value="hyderabad">Hyderabad / Secunderabad</option>
                <option value="vijayawada">Vijayawada</option>
                <option value="guntur">Guntur</option>
                <option value="visakhapatnam">Visakhapatnam (Vizag)</option>
                <option value="rajahmundry">Rajahmundry</option>
                <option value="kakinada">Kakinada</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-on-surface flex items-center gap-1" htmlFor="user-service">
                <span className="material-symbols-outlined text-slate-500 text-[16px]">cleaning_services</span>
                Service Type
              </label>
              <select
                id="user-service"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-on-surface text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              >
                <option value="home-deep-clean">Complete Home Deep Cleaning</option>
                <option value="sofa-carpet">Sofa &amp; Upholstery Shampooing</option>
                <option value="kitchen-degrease">Kitchen Degrease &amp; Chimney</option>
                <option value="bathroom-scrub">Bathroom Intense Descaling</option>
                <option value="mattress-clean">Mattress Allergen Extraction</option>
                <option value="pest-control">Integrated Pest Shield</option>
                <option value="post-construction">Post-Construction Deep Clean</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-on-surface flex items-center gap-1" htmlFor="user-date">
                <span className="material-symbols-outlined text-slate-500 text-[16px]">calendar_month</span>
                Preferred Date
              </label>
              <input
                id="user-date"
                type="date"
                required
                value={date}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-on-surface text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-on-surface flex items-center gap-1" htmlFor="user-slot">
                <span className="material-symbols-outlined text-slate-500 text-[16px]">schedule</span>
                Time Slot
              </label>
              <select
                id="user-slot"
                value={slot}
                onChange={(e) => setSlot(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-on-surface text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              >
                <option value="morning">Morning (8:00 AM - 11:00 AM)</option>
                <option value="afternoon">Afternoon (11:00 AM - 3:00 PM)</option>
                <option value="evening">Late Afternoon (3:00 PM - 7:00 PM)</option>
              </select>
            </div>

            <div className="sm:col-span-2 flex items-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-shine w-full py-3.5 px-6 rounded-xl bg-tertiary-container hover:bg-tertiary text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {isSubmitting ? (
                  <>
                    <span className="material-symbols-outlined text-[20px] animate-spin">refresh</span>
                    <span>Checking Slot Availability...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[20px]">bolt</span>
                    <span>CHECK AVAILABILITY &amp; BOOK NOW</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Dynamic Success Feedback Banner */}
          {submittedBooking && (
            <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-emerald-subtle border border-emerald-200 text-secondary flex items-start sm:items-center justify-between gap-4 animate-fadeIn">
              <div className="flex items-start sm:items-center gap-3">
                <span className="material-symbols-outlined text-[32px] flex-shrink-0 text-secondary">check_circle</span>
                <div>
                  <p className="text-sm sm:text-base font-bold text-secondary">
                    Booking Request Registered Successfully! (Ref: {submittedBooking.id})
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 mt-0.5">
                    Our operations supervisor <strong>{submittedBooking.supervisorName}</strong> will call you at {submittedBooking.phone} within 15 minutes to confirm crew dispatch.
                  </p>
                </div>
              </div>
              <a
                href={`https://wa.me/919703721616?text=Hi%20GoKlean4u,%20I%20just%20submitted%20booking%20${submittedBooking.id}%20for%20${submittedBooking.serviceName}%20on%20${submittedBooking.date}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-secondary text-white text-xs font-bold whitespace-nowrap shadow-xs hover:bg-opacity-90"
              >
                <span className="material-symbols-outlined text-[16px]">chat</span>
                Verify on WhatsApp
              </a>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
