'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCafe } from '../context/CafeContext';
import { ShoppingBagIcon, CalendarIcon, PhoneIcon, MenuIcon, CloseIcon, MapPinIcon } from './Icons';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen, openReservation } = useCafe();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Our Story', href: '#story' },
    { label: 'Artisanal Menu', href: '#menu' },
    { label: 'Affogato Ritual', href: '#affogato' },
    { label: 'Chennai Branches', href: '#locations' },
    { label: 'Guest Reviews', href: '#reviews' },
  ];

  return (
    <>
      {/* Top Announcement Strip */}
      <div className="bg-[#120a07] border-b border-amber-900/30 text-xs py-2 px-4 text-amber-200/90 text-center font-medium tracking-wide flex items-center justify-center gap-4 flex-wrap">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Now Brewing Fresh: Single-Origin Shevaroy Roast
        </span>
        <span className="hidden md:inline text-amber-500/50">•</span>
        <span className="hidden md:flex items-center gap-1">
          <MapPinIcon className="w-3.5 h-3.5 text-amber-400" />
          Nungambakkam & Besant Nagar, Chennai
        </span>
        <span className="hidden md:inline text-amber-500/50">•</span>
        <a
          href="tel:+914448921100"
          className="hover:text-amber-400 transition-colors flex items-center gap-1"
        >
          <PhoneIcon className="w-3.5 h-3.5 text-amber-400" />
          +91 44 4892 1100
        </a>
      </div>

      {/* Main Glass Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3 shadow-xl shadow-black/40'
            : 'bg-[#0d0907]/90 backdrop-blur-md py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-11 h-11 rounded-full overflow-hidden ring-1 ring-amber-500/40 shadow-lg group-hover:ring-amber-400 transition-all duration-300">
                <Image
                  src="/images/logo.jpg"
                  alt="Melt Cafe Emblem Logo"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-[#fdfaf6] group-hover:text-amber-300 transition-colors">
                    MELT
                  </span>
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-amber-950/70 border border-amber-600/40 text-amber-300 px-1.5 py-0.5 rounded">
                    CHENNAI
                  </span>
                </div>
                <span className="text-[11px] uppercase tracking-wider text-amber-200/60 font-medium">
                  Chocolaterie & Roastery
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-stone-300 hover:text-amber-400 transition-colors relative py-1 hover:border-b-2 hover:border-amber-400"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-3">
              {/* Cart Drawer Trigger */}
              <button
                id="cart-toggle-btn"
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 rounded-full bg-stone-900/80 border border-amber-900/40 text-stone-200 hover:text-amber-400 hover:border-amber-600/60 transition-all cursor-pointer"
                aria-label="View Order"
              >
                <ShoppingBagIcon className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-500 text-stone-950 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce-subtle">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Reservation Button */}
              <button
                id="navbar-reserve-btn"
                onClick={() => openReservation()}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold btn-primary-melt cursor-pointer"
              >
                <CalendarIcon className="w-4 h-4" />
                Reserve Table
              </button>

              {/* Mobile Menu Button */}
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-stone-900/80 text-stone-300 hover:text-amber-400 border border-amber-900/40 cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-amber-900/30 bg-[#120a07]/95 backdrop-blur-xl px-4 pt-4 pb-6 mt-3 space-y-3 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-stone-200 hover:bg-amber-950/40 hover:text-amber-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-amber-900/30 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openReservation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold btn-primary-melt text-sm"
              >
                <CalendarIcon className="w-4 h-4" />
                Reserve a Table in Chennai
              </button>
              <div className="text-xs text-stone-400 text-center pt-2">
                Open Daily: 8:00 AM – Midnight • Valet Available
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
