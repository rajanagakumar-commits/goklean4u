import React, { useState } from 'react';
import { Booking } from '../../types';

interface MyBookingsScreenProps {
  bookings: Booking[];
  onCancelBooking: (bookingId: string) => void;
  onOpenBooking: () => void;
}

export const MyBookingsScreen: React.FC<MyBookingsScreenProps> = ({
  bookings,
  onCancelBooking,
  onOpenBooking,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'completed'>('all');
  const [recleanClaimedId, setRecleanClaimedId] = useState<string | null>(null);
  const [selectedBookingForReceipt, setSelectedBookingForReceipt] = useState<Booking | null>(null);

  const filtered = bookings.filter((b) => {
    if (activeTab === 'active') return b.status !== 'Completed';
    if (activeTab === 'completed') return b.status === 'Completed';
    return true;
  });

  const handleClaimReclean = (id: string) => {
    setRecleanClaimedId(id);
    setTimeout(() => {
      setRecleanClaimedId(null);
    }, 4000);
  };

  return (
    <div className="w-full py-12 bg-porcelain-canvas min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-primary font-bold uppercase tracking-wider">
              Customer Portal
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-on-surface mt-1 tracking-tight">
              My Cleaning Reservations &amp; Guarantee
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Track crew dispatch, download receipts, and trigger 3-Day Free Reclean warranty.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="btn-shine px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-container text-white text-xs sm:text-sm font-bold shadow-sm transition-all flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            <span>Book New Service</span>
          </button>
        </div>

        {/* Tab Filters */}
        <div className="flex gap-2 border-b border-slate-200 pb-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
              activeTab === 'all'
                ? 'bg-primary text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            All Bookings ({bookings.length})
          </button>
          <button
            onClick={() => setActiveTab('active')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
              activeTab === 'active'
                ? 'bg-primary text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Active &amp; Scheduled ({bookings.filter((b) => b.status !== 'Completed').length})
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
              activeTab === 'completed'
                ? 'bg-primary text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Past Cleans ({bookings.filter((b) => b.status === 'Completed').length})
          </button>
        </div>

        {/* Bookings List */}
        {filtered.length === 0 ? (
          <div className="bg-white rounded-3xl p-10 text-center border border-slate-200 space-y-4 shadow-xs">
            <div className="w-14 h-14 rounded-full bg-ocean-tint text-primary mx-auto flex items-center justify-center">
              <span className="material-symbols-outlined text-[32px]">calendar_month</span>
            </div>
            <h3 className="text-lg font-bold text-on-surface">No Reservations In This View</h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
              Book your first home deep clean, sofa shampoo, or kitchen degreasing in under 60 seconds.
            </p>
            <button
              onClick={onOpenBooking}
              className="btn-shine px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-bold shadow-md cursor-pointer"
            >
              Book Now
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map((b) => (
              <div
                key={b.id}
                className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-xs space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-ocean-tint text-primary flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-[22px]">cleaning_services</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-on-surface">{b.serviceName}</h3>
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                          {b.id}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {b.variant} · Booked on {new Date(b.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      b.status === 'Completed'
                        ? 'bg-slate-100 text-slate-700'
                        : 'bg-emerald-subtle text-secondary'
                    }`}>
                      {b.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 block font-medium">Date &amp; Time Slot:</span>
                    <strong className="text-on-surface text-sm block mt-0.5">{b.date}</strong>
                    <span className="text-slate-600">{b.timeSlot}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block font-medium">Service Address:</span>
                    <strong className="text-on-surface block mt-0.5 truncate">{b.address}</strong>
                    <span className="text-slate-600 capitalize">City: {b.city}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block font-medium">Assigned Supervisor:</span>
                    <strong className="text-primary text-sm block mt-0.5">{b.supervisorName || 'Operations Lead'}</strong>
                    <a href={`tel:${b.supervisorPhone || '9703721616'}`} className="text-secondary hover:underline flex items-center gap-1 mt-0.5">
                      <span className="material-symbols-outlined text-[14px]">call</span>
                      {b.supervisorPhone || '+91 97037 21616'}
                    </a>
                  </div>
                </div>

                {b.addons && b.addons.length > 0 && (
                  <div className="pt-2">
                    <span className="text-xs font-semibold text-slate-500">Included Add-ons:</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {b.addons.map((a, idx) => (
                        <span key={idx} className="px-2.5 py-0.5 rounded-lg bg-surface-container-low text-xs text-primary font-medium">
                          + {a}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reclean Feedback Notification */}
                {recleanClaimedId === b.id && (
                  <div className="p-3.5 rounded-2xl bg-emerald-subtle text-secondary text-xs font-semibold flex items-center gap-2 animate-fadeIn">
                    <span className="material-symbols-outlined text-[20px]">task_alt</span>
                    <span>3-Day Guarantee Re-Clean Request Triggered! Supervisor {b.supervisorName} has been alerted to arrange a free visit.</span>
                  </div>
                )}

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">Total Bill:</span>
                    <strong className="text-base font-extrabold text-primary">₹{b.totalAmount}</strong>
                    <span className="text-[10px] text-slate-400">(Pay on completion)</span>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    <button
                      onClick={() => setSelectedBookingForReceipt(b)}
                      className="px-3.5 py-1.5 rounded-xl border border-slate-200 hover:border-slate-300 text-xs font-bold text-slate-700 hover:text-primary transition-all cursor-pointer flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-[16px]">receipt</span>
                      <span>View Receipt</span>
                    </button>

                    <button
                      onClick={() => handleClaimReclean(b.id)}
                      className="px-3.5 py-1.5 rounded-xl bg-ocean-tint text-primary hover:bg-primary hover:text-white text-xs font-bold transition-all cursor-pointer flex items-center gap-1"
                      title="Request a free touchup under 3-day guarantee"
                    >
                      <span className="material-symbols-outlined text-[16px]">verified</span>
                      <span>3-Day Warranty Re-Clean</span>
                    </button>

                    {b.status !== 'Completed' && (
                      <button
                        onClick={() => onCancelBooking(b.id)}
                        className="px-3 py-1.5 rounded-xl text-xs font-bold text-red-600 hover:bg-red-50 transition-all cursor-pointer"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Invoice / Receipt Modal */}
      {selectedBookingForReceipt && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative border border-slate-200 space-y-4">
            <button
              onClick={() => setSelectedBookingForReceipt(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full flex items-center justify-center bg-slate-100"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <img
                alt="Logo"
                className="h-8 w-auto"
                src="https://lh3.googleusercontent.com/aida/AEtjO1VINiIYd5le1C0pNg0ce1n3DAHq78aDm0-t_Lv589uWP8oTLmD-QXftAykDp-wUk4RwZDag8eD4t6MA3k2ULPnTsfbVHHNGJVlcmpjrRvrhMCB7QZ8VBiyeDlnLc8zsQ029Uexj4kLkzhGLUy1ZTGt3RpA8WkNy5mip-zxY64zcojt2FdNDCp5pgBbgHSkU9cMcggfbMLvJfX8Fqm6PMKlCPTbeV5YsixqWzlz9I188w156pgE443Ll36A"
              />
              <div>
                <h4 className="text-sm font-bold text-primary">GoKlean4u Tax Invoice</h4>
                <p className="text-[10px] text-slate-400">GSTIN: 37AABCG1234F1Z8</p>
              </div>
            </div>

            <div className="text-xs space-y-2 text-slate-600">
              <div className="flex justify-between">
                <span>Invoice No:</span>
                <strong className="text-on-surface">INV-{selectedBookingForReceipt.id}</strong>
              </div>
              <div className="flex justify-between">
                <span>Client Name:</span>
                <strong className="text-on-surface">{selectedBookingForReceipt.customerName}</strong>
              </div>
              <div className="flex justify-between">
                <span>Scheduled Date:</span>
                <span>{selectedBookingForReceipt.date}</span>
              </div>
              <div className="flex justify-between">
                <span>Service:</span>
                <span className="text-right">{selectedBookingForReceipt.serviceName} ({selectedBookingForReceipt.variant})</span>
              </div>
              <div className="pt-2 border-t border-slate-200 flex justify-between font-bold text-sm text-on-surface">
                <span>Total Amount:</span>
                <span className="text-primary">₹{selectedBookingForReceipt.totalAmount}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 text-[11px] text-slate-500 leading-normal">
              Payment mode: Cash / UPI on site upon supervisor satisfaction sign-off. Includes 3-Day Free Reclean warranty.
            </div>

            <button
              onClick={() => {
                alert('Receipt downloaded to PDF / ready to print');
                setSelectedBookingForReceipt(null);
              }}
              className="w-full py-2.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-container"
            >
              Print / Save Receipt
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
