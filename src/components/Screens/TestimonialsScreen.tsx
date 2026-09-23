import React, { useState } from 'react';
import { Testimonial } from '../../types';
import { TESTIMONIALS_DATA } from '../../data/mockData';

export const TestimonialsScreen: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Testimonial[]>(TESTIMONIALS_DATA);
  const [cityFilter, setCityFilter] = useState<string>('all');
  const [showReviewModal, setShowReviewModal] = useState<boolean>(false);

  // New review form
  const [newAuthor, setNewAuthor] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newCity, setNewCity] = useState('hyderabad');
  const [newService, setNewService] = useState('Residential Deep Cleaning');
  const [newRating, setNewRating] = useState(5);
  const [newText, setNewText] = useState('');
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const filtered = cityFilter === 'all'
    ? reviewsList
    : reviewsList.filter((r) => r.city === cityFilter);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newText) return;

    const initials = newAuthor
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();

    const created: Testimonial = {
      id: `t-${Date.now()}`,
      name: newAuthor,
      location: `${newLocation || 'Downtown'}, ${newCity.charAt(0).toUpperCase() + newCity.slice(1)}`,
      city: newCity,
      service: newService,
      rating: newRating,
      review: newText,
      date: 'Today',
      initials: initials || 'CU',
    };

    setReviewsList([created, ...reviewsList]);
    setSubmittedFeedback(true);
    setTimeout(() => {
      setSubmittedFeedback(false);
      setShowReviewModal(false);
      setNewAuthor('');
      setNewLocation('');
      setNewText('');
    }, 1500);
  };

  return (
    <div className="w-full py-12 bg-porcelain-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs text-primary font-bold uppercase tracking-wider">
            Verified Customer Stories
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-on-surface mt-2 tracking-tight">
            Loved by Over 100,000+ Happy Families
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Read real feedback from clients across Hyderabad, Vijayawada, Vizag, Guntur, Rajahmundry, and Kakinada.
          </p>
        </div>

        {/* Filter and Write Review CTA */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500">Filter by Hub:</span>
            <select
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="all">All Cities</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="vijayawada">Vijayawada</option>
              <option value="visakhapatnam">Visakhapatnam</option>
              <option value="guntur">Guntur</option>
              <option value="rajahmundry">Rajahmundry</option>
              <option value="kakinada">Kakinada</option>
            </select>
            <span className="text-xs text-slate-400">({filtered.length} Reviews)</span>
          </div>

          <button
            onClick={() => setShowReviewModal(true)}
            className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold shadow-xs hover:bg-primary-container transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px]">rate_review</span>
            <span>Write a Review</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-tertiary-container">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-ocean-tint text-primary">
                    {item.service}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-on-surface italic leading-relaxed">
                  "{item.review}"
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ocean-tint text-primary flex items-center justify-center font-bold text-xs">
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-on-surface">{item.name}</h4>
                    <p className="text-[11px] text-slate-500">{item.location}</p>
                  </div>
                </div>
                <span className="text-[10px] text-slate-400 font-medium">{item.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative border border-slate-200">
            <button
              onClick={() => setShowReviewModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full flex items-center justify-center bg-slate-100"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            {submittedFeedback ? (
              <div className="text-center py-6 space-y-3">
                <span className="material-symbols-outlined text-secondary text-[48px]">check_circle</span>
                <h4 className="text-lg font-bold text-on-surface">Thank You For Your Review!</h4>
                <p className="text-xs text-slate-500">Your feedback helps our technicians maintain top standards.</p>
              </div>
            ) : (
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Share Experience</span>
                <h3 className="text-lg font-bold text-on-surface mt-1">Leave Feedback for GoKlean4u</h3>

                <form onSubmit={handleAddReview} className="mt-4 space-y-3.5">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Varma"
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-1 focus:ring-primary focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Locality</label>
                      <input
                        type="text"
                        placeholder="e.g. Gachibowli"
                        value={newLocation}
                        onChange={(e) => setNewLocation(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-1 focus:ring-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">City Hub</label>
                      <select
                        value={newCity}
                        onChange={(e) => setNewCity(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-1 focus:ring-primary focus:outline-none"
                      >
                        <option value="hyderabad">Hyderabad</option>
                        <option value="vijayawada">Vijayawada</option>
                        <option value="visakhapatnam">Vizag</option>
                        <option value="guntur">Guntur</option>
                        <option value="rajahmundry">Rajahmundry</option>
                        <option value="kakinada">Kakinada</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Service Availed</label>
                    <select
                      value={newService}
                      onChange={(e) => setNewService(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-1 focus:ring-primary focus:outline-none"
                    >
                      <option value="Residential Deep Cleaning">Residential Deep Cleaning</option>
                      <option value="Sofa & Upholstery Shampooing">Sofa &amp; Upholstery Shampooing</option>
                      <option value="Kitchen Degreasing">Kitchen Degreasing</option>
                      <option value="Bathroom Descaling">Bathroom Descaling</option>
                      <option value="Post-Construction Clean">Post-Construction Clean</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Star Rating</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewRating(star)}
                          className={`text-xl cursor-pointer ${
                            star <= newRating ? 'text-tertiary-container' : 'text-slate-300'
                          }`}
                        >
                          ★
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Review Comments *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Tell us about the crew punctuality, machine work, and results..."
                      value={newText}
                      onChange={(e) => setNewText(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-1 focus:ring-primary focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-container transition-all"
                  >
                    Post Review
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
