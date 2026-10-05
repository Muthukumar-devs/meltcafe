'use client';

import React from 'react';
import { CafeProvider } from './context/CafeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutStory } from './components/AboutStory';
import { InteractiveMenu } from './components/InteractiveMenu';
import { SignatureAffogato } from './components/SignatureAffogato';
import { ChennaiLocations } from './components/ChennaiLocations';
import { Reviews } from './components/Reviews';
import { ReservationModal } from './components/ReservationModal';
import { CartDrawer } from './components/CartDrawer';
import { Toast } from './components/Toast';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <CafeProvider>
      <div className="flex flex-col min-h-screen bg-[#0d0907] text-[#fdfaf6]">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero />
          <AboutStory />
          <InteractiveMenu />
          <SignatureAffogato />
          <ChennaiLocations />
          <Reviews />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Overlays, Drawers & Modals */}
        <ReservationModal />
        <CartDrawer />
        <Toast />
      </div>
    </CafeProvider>
  );
}
