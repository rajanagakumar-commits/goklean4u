import React, { useState } from 'react';
import { Testimonial } from '../types';
import { TESTIMONIALS_DATA } from '../data/mockData';

interface TestimonialsSectionProps {
  onOpenBooking: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews] = useState<Testimonial[]>(TESTIMONIALS_DATA);
  const [filterCity, setFilterCity] = useState<string>('all');

  const filteredReviews = filterCity === 'all'
    ? reviews
    : reviews.filter((r) => r.city === filterCity);

  const maxIndex = Math.max(0, filteredReviews.length - 1);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section className="w-full py-16 lg:py-20 bg-porcelain-canvas" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs text-primary font-bold uppercase tracking-wider">
              Verified Reviews
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-surface mt-2 tracking-tight">
              Loved by 100,000+ Happy Homeowners
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Real unedited customer feedback from across Andhra Pradesh &amp; Telangana</p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-end">
            {/* Filter */}
            <select
              value={filterCity}
              onChange={(e) => {
                setFilterCity(e.target.value);
                setCurrentIndex(0);
              }}
              className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs focus:outline-none"
            >
              <option value="all">All Cities</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="vijayawada">Vijayawada</option>
              <option value="visakhapatnam">Visakhapatnam</option>
              <option value="guntur">Guntur</option>
              <option value="rajahmundry">Rajahmundry</option>
              <option value="kakinada">Kakinada</option>
            </select>

            {/* Controls */}
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-xs hover:bg-ocean-tint text-primary flex items-center justify-center transition-colors cursor-pointer border border-slate-100"
            >
              <span className="material-symbols-outlined text-[24px]">chevron_left</span>
            </button>

            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-xs hover:bg-ocean-tint text-primary flex items-center justify-center transition-colors cursor-pointer border border-slate-100"
            >
              <span className="material-symbols-outlined text-[24px]">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Testimonial Slider Stage */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (window.innerWidth >= 1024 ? 33.33 : window.innerWidth >= 768 ? 50 : 100)}%)`,
            }}
          >
            {filteredReviews.map((item) => (
              <div
                key={item.id}
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
              >
                <div className="h-full p-6 sm:p-8 rounded-3xl bg-white shadow-xs border border-slate-100 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-tertiary-container">
                        {[...Array(item.rating)].map((_, i) => (
                          <span key={i} className="material-symbols-outlined text-[20px]">
                            star
                          </span>
                        ))}
                      </div>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-ocean-tint text-primary">
                        {item.service}
                      </span>
                    </div>

                    <p className="text-sm text-on-surface italic leading-relaxed">
                      "{item.review}"
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-ocean-tint text-primary flex items-center justify-center font-bold text-xs">
                        {item.initials}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-on-surface">{item.name}</h4>
                        <p className="text-xs text-slate-500">{item.location}</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Progress Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {filteredReviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                index === currentIndex ? 'w-8 bg-primary' : 'w-2.5 bg-slate-200'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
