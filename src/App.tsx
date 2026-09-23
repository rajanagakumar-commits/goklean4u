/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScreenType, Booking } from './types';
import { INITIAL_BOOKINGS } from './data/mockData';

// Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickBookingWidget } from './components/QuickBookingWidget';
import { TrustStrip } from './components/TrustStrip';
import { MetricsStrip } from './components/MetricsStrip';
import { ServicesBento } from './components/ServicesBento';
import { SpotlightSection } from './components/SpotlightSection';
import { BeforeAfterSliders } from './components/BeforeAfterSliders';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { CitiesSection } from './components/CitiesSection';
import { CorporateBanner } from './components/CorporateBanner';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { BottomCtaBanner } from './components/BottomCtaBanner';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { BookingModal } from './components/BookingModal';
import { QuickPriceEstimator } from './components/QuickPriceEstimator';

// Dedicated Screens
import { ServicesScreen } from './components/Screens/ServicesScreen';
import { EstimatorScreen } from './components/Screens/EstimatorScreen';
import { DeepCleaningScreen } from './components/Screens/DeepCleaningScreen';
import { LocationsScreen } from './components/Screens/LocationsScreen';
import { WhyUsScreen } from './components/Screens/WhyUsScreen';
import { TestimonialsScreen } from './components/Screens/TestimonialsScreen';
import { FaqsScreen } from './components/Screens/FaqsScreen';
import { ContactScreen } from './components/Screens/ContactScreen';
import { MyBookingsScreen } from './components/Screens/MyBookingsScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [bookings, setBookings] = useState<Booking[]>(INITIAL_BOOKINGS);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [modalServiceId, setModalServiceId] = useState<string>('home-deep-clean');
  const [modalCityId, setModalCityId] = useState<string>('hyderabad');

  const handleOpenBooking = (serviceId?: string, cityId?: string) => {
    if (serviceId) setModalServiceId(serviceId);
    if (cityId) setModalCityId(cityId);
    setIsBookingModalOpen(true);
  };

  const handleBookingSuccess = (newBooking: Booking) => {
    setBookings((prev) => [newBooking, ...prev]);
  };

  const handleCancelBooking = (bookingId: string) => {
    setBookings((prev) => prev.filter((b) => b.id !== bookingId));
  };

  const activeBookingsCount = bookings.filter((b) => b.status !== 'Completed').length;

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9ff] text-[#0d1c2f] font-sans antialiased">
      {/* Sticky Top Navigation */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={(screen) => setCurrentScreen(screen)}
        onOpenBooking={() => handleOpenBooking()}
        bookingCount={activeBookingsCount}
      />

      {/* Main Screen Body */}
      <main className="w-full pt-28 pb-16 md:pb-0 flex-1">
        {currentScreen === 'home' && (
          <div className="flex flex-col w-full">
            {/* 1. Hero Section */}
            <Hero onOpenBooking={() => handleOpenBooking('home-deep-clean')} />

            {/* 2. Quick Fast-Track Booking Widget */}
            <QuickBookingWidget onBookingCreated={handleBookingSuccess} />

            {/* 3. Five Core Guarantees */}
            <TrustStrip />

            {/* 4. Performance Metrics Strip */}
            <MetricsStrip />

            {/* 5. Services Bento Grid */}
            <ServicesBento
              onOpenBooking={(id) => handleOpenBooking(id)}
              onNavigate={(s) => {
                setCurrentScreen(s);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 5.5 Quick Price Estimator Utility */}
            <div className="py-6 bg-slate-50/60 border-y border-slate-200/60">
              <QuickPriceEstimator
                onOpenBooking={(serviceId, cityId) => handleOpenBooking(serviceId, cityId)}
                onNavigate={(screen) => {
                  setCurrentScreen(screen);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                variant="standalone"
              />
            </div>

            {/* 6. Featured Spotlights: Steam Extraction & Modular Kitchen */}
            <SpotlightSection onOpenBooking={(id) => handleOpenBooking(id)} />

            {/* 7. Draggable Before & After Comparison Sliders */}
            <BeforeAfterSliders />

            {/* 8. 8 Core Pillars of Distinction */}
            <WhyChooseUs />

            {/* 9. 4-Step Process Workflow */}
            <HowItWorks />

            {/* 10. Operating Across 6 Major Cities */}
            <CitiesSection onOpenBooking={(svc, city) => handleOpenBooking(svc, city)} />

            {/* 11. Commercial & Corporate Enterprise Care */}
            <CorporateBanner />

            {/* 12. Verified Customer Testimonials Carousel */}
            <TestimonialsSection onOpenBooking={() => handleOpenBooking()} />

            {/* 13. Searchable FAQs Accordion */}
            <FaqSection />

            {/* 14. Bottom High-Conversion Banner */}
            <BottomCtaBanner onOpenBooking={() => handleOpenBooking()} />
          </div>
        )}

        {currentScreen === 'services' && (
          <ServicesScreen onOpenBooking={(id) => handleOpenBooking(id)} />
        )}

        {currentScreen === 'estimator' && (
          <EstimatorScreen
            onOpenBooking={(serviceId, cityId) => handleOpenBooking(serviceId, cityId)}
            onNavigate={(screen) => setCurrentScreen(screen)}
          />
        )}

        {currentScreen === 'deep-cleaning' && (
          <DeepCleaningScreen onOpenBooking={(id) => handleOpenBooking(id)} />
        )}

        {currentScreen === 'locations' && (
          <LocationsScreen onOpenBooking={(svc, city) => handleOpenBooking(svc, city)} />
        )}

        {currentScreen === 'why-us' && (
          <WhyUsScreen onOpenBooking={() => handleOpenBooking()} />
        )}

        {currentScreen === 'testimonials' && <TestimonialsScreen />}

        {currentScreen === 'faqs' && <FaqsScreen />}

        {currentScreen === 'contact' && <ContactScreen />}

        {currentScreen === 'my-bookings' && (
          <MyBookingsScreen
            bookings={bookings}
            onCancelBooking={handleCancelBooking}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}
      </main>

      {/* Global Comprehensive Footer */}
      <Footer
        onNavigate={(screen) => {
          setCurrentScreen(screen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Mobile Sticky Conversion Dock */}
      <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking Wizard Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        onBookingSuccess={handleBookingSuccess}
        initialServiceId={modalServiceId}
        initialCityId={modalCityId}
      />
    </div>
  );
}
