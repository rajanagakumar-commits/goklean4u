import React, { useState } from 'react';

export const CorporateBanner: React.FC = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [corpName, setCorpName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('hyderabad');
  const [sqft, setSqft] = useState('2500 - 5000 sq.ft');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowQuoteModal(false);
      setSubmitted(false);
      setCorpName('');
      setContactPerson('');
      setPhone('');
    }, 2500);
  };

  return (
    <>
      <section className="w-full py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-teal-deep via-primary-container to-primary rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3 text-left">
              <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed text-xs font-bold uppercase tracking-wider inline-block">
                Corporate &amp; Enterprise
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Managing an Office, Co-working Hub, or Retail Space?
              </h3>
              <p className="text-sm sm:text-base text-slate-100 opacity-90 leading-relaxed">
                We provide structured AMC facility housekeeping, nightly office sanitization, carpet shampoo cycles, and post-interior fitout cleaning with GST compliance and dedicated accounts supervisors.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 flex-shrink-0 w-full lg:w-auto">
              <button
                onClick={() => setShowQuoteModal(true)}
                className="btn-shine w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-secondary-container hover:bg-secondary-fixed text-on-secondary-fixed text-sm font-bold shadow-md transition-all cursor-pointer text-center"
              >
                Request Corporate Quote
              </button>
              <a
                className="w-full sm:w-auto text-center px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-white/15 hover:bg-white/25 text-white text-sm font-bold backdrop-blur-md transition-all border border-white/20"
                href="mailto:support@goklean4u.com?subject=Corporate%20Cleaning%20Inquiry%20-%20AMC"
              >
                Email Facility Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative border border-slate-200">
            <button
              onClick={() => setShowQuoteModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full flex items-center justify-center bg-slate-100"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-subtle text-secondary mx-auto flex items-center justify-center">
                  <span className="material-symbols-outlined text-[36px]">check_circle</span>
                </div>
                <h4 className="text-xl font-bold text-on-surface">Quote Request Received!</h4>
                <p className="text-sm text-slate-600">
                  Our Corporate Facility Key Account Manager will contact <strong>{contactPerson}</strong> at <strong>{phone}</strong> with a detailed AMC proposal &amp; rate card.
                </p>
              </div>
            ) : (
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">B2B Facility Care</span>
                <h3 className="text-xl font-bold text-on-surface mt-1">Request Corporate AMC / Office Sanitization</h3>
                <p className="text-xs text-slate-500 mt-1">Special institutional rates with dedicated account manager and GST input invoices.</p>

                <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Company / Facility Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Tech Park / FinTech Solutions Ltd"
                      value={corpName}
                      onChange={(e) => setCorpName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Contact Person</label>
                      <input
                        type="text"
                        required
                        placeholder="Name"
                        value={contactPerson}
                        onChange={(e) => setContactPerson(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Mobile / Direct Phone</label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Location City</label>
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                      >
                        <option value="hyderabad">Hyderabad / Secunderabad</option>
                        <option value="vijayawada">Vijayawada</option>
                        <option value="visakhapatnam">Visakhapatnam</option>
                        <option value="guntur">Guntur</option>
                        <option value="rajahmundry">Rajahmundry</option>
                        <option value="kakinada">Kakinada</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Estimated Floor Area</label>
                      <select
                        value={sqft}
                        onChange={(e) => setSqft(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                      >
                        <option value="Under 2,500 sq.ft">Under 2,500 sq.ft</option>
                        <option value="2500 - 5000 sq.ft">2,500 - 5,000 sq.ft</option>
                        <option value="5000 - 15000 sq.ft">5,000 - 15,000 sq.ft</option>
                        <option value="15000+ sq.ft">15,000+ sq.ft (Multiple Floors)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-shine w-full py-3 rounded-xl bg-primary hover:bg-primary-container text-white text-sm font-bold shadow-md mt-2 cursor-pointer"
                  >
                    Submit Facility RFP Request
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
