import React, { useState } from 'react';
import { Booking } from '../types';
import { SERVICES_DATA, CITIES_DATA } from '../data/mockData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookingSuccess: (booking: Booking) => void;
  initialServiceId?: string;
  initialCityId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  onBookingSuccess,
  initialServiceId = 'home-deep-clean',
  initialCityId = 'hyderabad',
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialServiceId);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState<number>(0);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [city, setCity] = useState<string>(initialCityId);
  const [address, setAddress] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('Morning (8:00 AM - 11:00 AM)');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [specialNotes, setSpecialNotes] = useState<string>('');
  const [couponCode, setCouponCode] = useState<string>('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [couponMessage, setCouponMessage] = useState<string>('');
  const [completedBooking, setCompletedBooking] = useState<Booking | null>(null);

  if (!isOpen) return null;

  const currentService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];
  const variants = currentService.variants || [
    { name: 'Standard Service', price: currentService.startingPrice, description: currentService.unit },
  ];
  const activeVariant = variants[selectedVariantIndex] || variants[0];

  const addonsList = [
    { id: 'balcony-wash', name: 'Balcony Jet Wash', price: 499, desc: 'High-pressure wash of floor & railings' },
    { id: 'fridge-clean', name: 'Refrigerator Interior Sanitization', price: 399, desc: 'Food-safe wipe down of all shelves' },
    { id: 'microwave-clean', name: 'Oven & Microwave Degreasing', price: 299, desc: 'Removal of baked-on food splatter' },
    { id: 'mattress-uv', name: 'UV-C Mattress Anti-Allergen Vac', price: 499, desc: 'Mite extraction from 1 mattress' },
    { id: 'pest-gel', name: 'Bayer Odorless Cockroach Gel', price: 599, desc: 'Kitchen & bathroom crevice dots' },
  ];

  const toggleAddon = (name: string) => {
    setSelectedAddons((prev) =>
      prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name]
    );
  };

  const calculateAddonsCost = () => {
    return selectedAddons.reduce((acc, addonName) => {
      const found = addonsList.find((a) => a.name === addonName);
      return acc + (found ? found.price : 0);
    }, 0);
  };

  const basePrice = activeVariant.price;
  const addonsTotal = calculateAddonsCost();
  const subtotal = basePrice + addonsTotal;
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const finalTotal = subtotal - discountAmount;

  const handleApplyCoupon = () => {
    if (couponCode.trim().toUpperCase() === 'SPARKLE10' || couponCode.trim().toUpperCase() === 'FIRST10') {
      setDiscountPercent(10);
      setCouponMessage('🎉 10% First-Time Discount Applied!');
    } else if (couponCode.trim().toUpperCase() === 'CLEAN20') {
      setDiscountPercent(20);
      setCouponMessage('🌟 20% Festival Privilege Discount Applied!');
    } else {
      setDiscountPercent(0);
      setCouponMessage('❌ Invalid coupon code. Try SPARKLE10');
    }
  };

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !address || !date) return;

    const cityHub = CITIES_DATA.find((c) => c.id === city);
    const bookingId = `GK4U-${Math.floor(1000 + Math.random() * 9000)}`;

    const newBooking: Booking = {
      id: bookingId,
      serviceId: currentService.id,
      serviceName: currentService.name,
      variant: activeVariant.name,
      customerName: fullName,
      phone,
      email: email || undefined,
      city,
      address,
      date,
      timeSlot,
      addons: selectedAddons,
      totalAmount: finalTotal,
      status: 'Supervisor Assigned',
      supervisorName: cityHub ? cityHub.supervisorName : 'K. Vamsi Krishna',
      supervisorPhone: cityHub ? cityHub.phone : '+91 97037 21616',
      createdAt: new Date().toISOString(),
      notes: specialNotes || undefined,
    };

    setCompletedBooking(newBooking);
    onBookingSuccess(newBooking);
    setCurrentStep(4); // Success step
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-auto animate-fadeIn">
        
        {/* Modal Top Header */}
        <div className="bg-teal-deep text-white px-6 py-4.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-secondary-container text-[24px]">calendar_month</span>
            <div>
              <h3 className="text-base sm:text-lg font-bold">Book Goklean4u Service</h3>
              <p className="text-xs text-slate-200 opacity-90">Instant confirmed slot &amp; 3-Day Satisfaction Guarantee</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Stepper indicator */}
        {currentStep < 4 && (
          <div className="bg-surface-container-low px-6 py-3 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                currentStep >= 1 ? 'bg-primary text-white' : 'bg-slate-200 text-slate-600'
              }`}>
                1
              </span>
              <span className={currentStep === 1 ? 'text-primary' : 'text-slate-500'}>Service &amp; Size</span>
            </div>
            <span className="text-slate-300">──</span>
            <div className="flex items-center gap-2 text-xs font-bold">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                currentStep >= 2 ? 'bg-primary text-white' : 'bg-slate-200 text-slate-600'
              }`}>
                2
              </span>
              <span className={currentStep === 2 ? 'text-primary' : 'text-slate-500'}>Schedule &amp; Addons</span>
            </div>
            <span className="text-slate-300">──</span>
            <div className="flex items-center gap-2 text-xs font-bold">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                currentStep >= 3 ? 'bg-primary text-white' : 'bg-slate-200 text-slate-600'
              }`}>
                3
              </span>
              <span className={currentStep === 3 ? 'text-primary' : 'text-slate-500'}>Contact &amp; Confirm</span>
            </div>
          </div>
        )}

        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {/* STEP 1: Select Service & Variant */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-2">Select Cleaning Service</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SERVICES_DATA.map((svc) => (
                    <button
                      key={svc.id}
                      type="button"
                      onClick={() => {
                        setSelectedServiceId(svc.id);
                        setSelectedVariantIndex(0);
                      }}
                      className={`p-3 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                        selectedServiceId === svc.id
                          ? 'bg-ocean-tint border-primary text-primary shadow-xs'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[24px] text-primary">{svc.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-bold truncate">{svc.name}</p>
                        <p className="text-[11px] text-slate-500">From ₹{svc.startingPrice}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-2">
                  Select Configuration / Property Size
                </label>
                <div className="space-y-2">
                  {variants.map((v, idx) => (
                    <div
                      key={v.name}
                      onClick={() => setSelectedVariantIndex(idx)}
                      className={`p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                        selectedVariantIndex === idx
                          ? 'border-primary bg-emerald-subtle/50 text-on-surface shadow-xs ring-1 ring-primary'
                          : 'border-slate-200 bg-white hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="variant-select"
                          checked={selectedVariantIndex === idx}
                          onChange={() => setSelectedVariantIndex(idx)}
                          className="accent-primary"
                        />
                        <div>
                          <p className="text-xs sm:text-sm font-bold text-on-surface">{v.name}</p>
                          <p className="text-[11px] text-slate-500">{v.description}</p>
                        </div>
                      </div>
                      <span className="text-sm sm:text-base font-bold text-primary">₹{v.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500">Service Estimate</span>
                  <p className="text-lg font-bold text-primary">₹{basePrice}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="btn-shine px-6 py-3 rounded-xl bg-primary hover:bg-primary-container text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                >
                  Continue to Schedule →
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Schedule & Add-ons */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Time Slot *</label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                  >
                    <option value="Morning (8:00 AM - 11:00 AM)">Morning (8:00 AM - 11:00 AM)</option>
                    <option value="Afternoon (11:00 AM - 3:00 PM)">Afternoon (11:00 AM - 3:00 PM)</option>
                    <option value="Late Afternoon (3:00 PM - 7:00 PM)">Late Afternoon (3:00 PM - 7:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-2">
                  Optional Add-Ons (Special Discounted Bundle)
                </label>
                <div className="space-y-2">
                  {addonsList.map((addon) => {
                    const isChecked = selectedAddons.includes(addon.name);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.name)}
                        className={`p-3 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-ocean-tint border-primary shadow-xs'
                            : 'bg-white border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleAddon(addon.name)}
                            className="accent-primary w-4 h-4 rounded"
                          />
                          <div>
                            <p className="text-xs sm:text-sm font-bold text-on-surface">{addon.name}</p>
                            <p className="text-[11px] text-slate-500">{addon.desc}</p>
                          </div>
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-primary">+₹{addon.price}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="text-xs font-bold text-slate-600 hover:underline"
                >
                  ← Back to Services
                </button>
                <button
                  type="button"
                  disabled={!date}
                  onClick={() => setCurrentStep(3)}
                  className="btn-shine px-6 py-3 rounded-xl bg-primary hover:bg-primary-container text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer disabled:opacity-50"
                >
                  Next: Contact Details →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Contact Details & Price Summary */}
          {currentStep === 3 && (
            <form onSubmit={handleCompleteBooking} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Varma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Mobile Number (10 digits) *</label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="e.g. 9848022334"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">City Hub *</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                  >
                    <option value="hyderabad">Hyderabad / Secunderabad</option>
                    <option value="vijayawada">Vijayawada</option>
                    <option value="visakhapatnam">Visakhapatnam (Vizag)</option>
                    <option value="guntur">Guntur</option>
                    <option value="rajahmundry">Rajahmundry</option>
                    <option value="kakinada">Kakinada</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Email Address (Optional)</label>
                  <input
                    type="email"
                    placeholder="For invoice receipt"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Complete Address / Society Details *</label>
                <textarea
                  required
                  rows={2}
                  placeholder="Flat/House No, Building/Gated Community, Landmark, Locality"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Special Notes for Cleaning Crew</label>
                <input
                  type="text"
                  placeholder="e.g. Focus on kitchen chimney grease or kids room floor"
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>

              {/* Coupon Code Section */}
              <div className="bg-surface-container-low p-3.5 rounded-2xl border border-slate-200">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter Coupon (Use SPARKLE10)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 px-3 py-2 bg-white rounded-xl border border-slate-200 text-xs font-semibold uppercase focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleApplyCoupon}
                    className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-container"
                  >
                    Apply
                  </button>
                </div>
                {couponMessage && (
                  <p className="text-[11px] font-semibold mt-1.5 text-secondary">{couponMessage}</p>
                )}
              </div>

              {/* Price Calculation Card */}
              <div className="bg-surface-container-high/60 p-4 rounded-2xl border border-slate-200 space-y-1.5 text-xs text-slate-700">
                <div className="flex justify-between">
                  <span>{currentService.name} ({activeVariant.name}):</span>
                  <span className="font-semibold">₹{basePrice}</span>
                </div>
                {selectedAddons.length > 0 && (
                  <div className="flex justify-between">
                    <span>Add-ons ({selectedAddons.length}):</span>
                    <span className="font-semibold">+₹{addonsTotal}</span>
                  </div>
                )}
                {discountAmount > 0 && (
                  <div className="flex justify-between text-secondary font-bold">
                    <span>Promotional Discount:</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="pt-2 border-t border-slate-200 flex justify-between text-sm font-bold text-on-surface">
                  <span>Total Payable:</span>
                  <span className="text-primary text-base">₹{finalTotal}</span>
                </div>
                <p className="text-[11px] text-slate-500 pt-1">
                  💡 Pay securely via UPI, Card, or Cash only after service inspection.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="text-xs font-bold text-slate-600 hover:underline"
                >
                  ← Back to Schedule
                </button>
                <button
                  type="submit"
                  className="btn-shine px-7 py-3 rounded-xl bg-tertiary-container hover:bg-tertiary text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  Confirm &amp; Lock Slot
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Success Screen */}
          {currentStep === 4 && completedBooking && (
            <div className="text-center py-4 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-subtle text-secondary mx-auto flex items-center justify-center">
                <span className="material-symbols-outlined text-[36px]">verified</span>
              </div>

              <div>
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">Booking Confirmed</span>
                <h3 className="text-2xl font-extrabold text-on-surface mt-1">We Have Secured Your Cleaning Slot!</h3>
                <p className="text-xs text-slate-500 mt-1">Booking Reference ID: <strong className="text-primary">{completedBooking.id}</strong></p>
              </div>

              <div className="bg-surface-container-low p-4 sm:p-5 rounded-2xl border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-bold text-on-surface">{completedBooking.serviceName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Configuration:</span>
                  <span className="font-semibold text-on-surface">{completedBooking.variant}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Scheduled For:</span>
                  <span className="font-semibold text-on-surface">{completedBooking.date} ({completedBooking.timeSlot})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Address:</span>
                  <span className="font-semibold text-on-surface text-right truncate max-w-[200px]">{completedBooking.address}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Assigned Supervisor:</span>
                  <span className="font-bold text-primary">{completedBooking.supervisorName} ({completedBooking.supervisorPhone})</span>
                </div>
                <div className="pt-2 border-t border-slate-200 flex justify-between text-sm font-bold text-on-surface">
                  <span>Total Amount:</span>
                  <span className="text-primary text-base">₹{completedBooking.totalAmount}</span>
                </div>
              </div>

              <div className="p-3 bg-emerald-subtle rounded-xl text-secondary text-xs flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">task_alt</span>
                <span>Protected by Goklean4u 3-Day Free Reclean Warranty</span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/919703721616?text=Hello%20Goklean4u,%20I%20have%20booked%20service%20ID:%20${completedBooking.id}%20for%20${completedBooking.serviceName}%20on%20${completedBooking.date}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-secondary text-white text-xs font-bold flex items-center gap-1.5 shadow-xs hover:bg-opacity-90"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  Open in WhatsApp
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-surface-container-high text-primary text-xs font-bold hover:bg-ocean-tint"
                >
                  Done &amp; Close
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
