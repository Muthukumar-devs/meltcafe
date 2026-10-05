'use client';

import React, { useState } from 'react';
import { useCafe } from '../context/CafeContext';
import { CHENNAI_LOCATIONS } from '../data/locationsData';
import { CloseIcon, CalendarIcon, ClockIcon, UserIcon, MapPinIcon, CheckIcon, SparklesIcon } from './Icons';

export const ReservationModal: React.FC = () => {
  const { isReservationOpen, setIsReservationOpen, selectedBranch, showToast } = useCafe();

  const [branch, setBranch] = useState(selectedBranch || 'nungambakkam');
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('7:30 PM');
  const [seatingArea, setSeatingArea] = useState('Indoor Roastery Lounge');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState('');

  if (!isReservationOpen) return null;

  const currentBranch = CHENNAI_LOCATIONS.find((b) => b.id === branch) || CHENNAI_LOCATIONS[0];

  const timeSlots = [
    '8:30 AM', '10:00 AM', '11:30 AM',
    '3:30 PM', '5:00 PM', '6:30 PM',
    '7:30 PM', '8:45 PM', '9:45 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      showToast('Please enter your name and phone number');
      return;
    }
    const randomId = `MELT-CHE-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingId(randomId);
    setIsConfirmed(true);
    showToast(`Table confirmed! Reference ID: ${randomId}`);
  };

  const handleClose = () => {
    setIsReservationOpen(false);
    setTimeout(() => {
      setIsConfirmed(false);
      setName('');
      setPhone('');
      setNotes('');
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#140e0b] border border-amber-900/50 rounded-3xl shadow-2xl p-6 sm:p-8 my-8 text-stone-200">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-900/80 text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors"
          aria-label="Close Reservation Modal"
        >
          <CloseIcon className="w-5 h-5" />
        </button>

        {isConfirmed ? (
          /* Confirmation Screen */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckIcon className="w-8 h-8" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-700/40 text-xs font-semibold text-amber-300">
              <SparklesIcon className="w-3.5 h-3.5" />
              <span>Reservation Confirmed</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              We look forward to hosting you, {name}!
            </h3>

            <div className="glass-panel p-5 rounded-2xl border border-amber-900/40 text-left space-y-2.5 text-xs sm:text-sm">
              <div className="flex justify-between items-center pb-2 border-b border-amber-900/30">
                <span className="text-stone-400">Booking Reference</span>
                <span className="font-mono font-bold text-amber-400 text-base">{bookingId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Branch</span>
                <span className="font-semibold text-white">{currentBranch.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Address</span>
                <span className="text-stone-300 text-right max-w-xs">{currentBranch.address}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Date & Slot</span>
                <span className="font-semibold text-amber-300">{date} at {timeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Party Size</span>
                <span className="font-semibold text-white">{guests} Guests ({seatingArea})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Contact</span>
                <span className="text-stone-300">+91 {phone}</span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              A confirmation SMS has been prepared for +91 {phone}. Your table will be held for 15 minutes past your reservation time. Valet parking is available at the entrance.
            </p>

            <button
              onClick={handleClose}
              className="w-full py-3.5 rounded-full font-semibold btn-primary-melt text-white text-sm"
            >
              Done & Return to Cafe
            </button>
          </div>
        ) : (
          /* Reservation Form */
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1">
                <CalendarIcon className="w-3.5 h-3.5" />
                <span>Table Reservation</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Book a Table at Melt
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 mt-1">
                Join us for specialty coffee, artisan toasts, and warm molten chocolate desserts in Chennai.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              {/* Branch Selector */}
              <div>
                <label className="block text-xs font-semibold text-amber-200 mb-1.5 flex items-center gap-1.5">
                  <MapPinIcon className="w-3.5 h-3.5" />
                  Select Chennai Location
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {CHENNAI_LOCATIONS.map((loc) => (
                    <button
                      type="button"
                      key={loc.id}
                      onClick={() => setBranch(loc.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        branch === loc.id
                          ? 'border-amber-500 bg-amber-950/40 text-amber-200'
                          : 'border-stone-800 bg-stone-900/60 text-stone-400 hover:border-stone-700'
                      }`}
                    >
                      <p className="font-bold text-xs sm:text-sm text-white">{loc.area}</p>
                      <p className="text-[10px] text-stone-400 truncate mt-0.5">{loc.tagline}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date and Guests Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">Date</label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3 py-2 text-stone-200 focus:outline-none focus:border-amber-500 text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1 flex items-center gap-1">
                    <UserIcon className="w-3 h-3 text-amber-400" />
                    Number of Guests: <span className="text-amber-400 font-bold ml-1">{guests}</span>
                  </label>
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                    {[1, 2, 3, 4, 5, 6, 8].map((num) => (
                      <button
                        type="button"
                        key={num}
                        onClick={() => setGuests(num)}
                        className={`w-8 h-8 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                          guests === num
                            ? 'bg-amber-500 text-stone-950 shadow'
                            : 'bg-stone-900 text-stone-400 border border-stone-800 hover:text-white'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1.5 flex items-center gap-1">
                  <ClockIcon className="w-3 h-3 text-amber-400" />
                  Select Time Slot
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setTimeSlot(slot)}
                      className={`py-2 px-2 text-center rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                        timeSlot === slot
                          ? 'border-amber-500 bg-amber-500/20 text-amber-300 font-bold'
                          : 'border-stone-800 bg-stone-900/60 text-stone-400 hover:border-stone-700'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Seating Preference */}
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">Seating Preference</label>
                <div className="grid grid-cols-3 gap-2">
                  {['Indoor Roastery Lounge', 'Alfresco Garden', 'Cozy Booth'].map((area) => (
                    <button
                      type="button"
                      key={area}
                      onClick={() => setSeatingArea(area)}
                      className={`py-2 px-1 text-center rounded-xl text-[11px] font-medium border transition-all cursor-pointer ${
                        seatingArea === area
                          ? 'border-amber-500 bg-amber-950/40 text-amber-200'
                          : 'border-stone-800 bg-stone-900/60 text-stone-400'
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Raman"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3 py-2 text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-amber-500 text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">Mobile Number</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-xs font-medium">+91</span>
                    <input
                      type="tel"
                      required
                      placeholder="98400 12345"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl pl-10 pr-3 py-2 text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-amber-500 text-xs sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Special Occasion / Notes */}
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">Special Occasion or Dietary Notes (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. Birthday celebration, High chair needed"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3 py-2 text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-amber-500 text-xs sm:text-sm"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full font-semibold btn-primary-melt text-white text-sm cursor-pointer shadow-lg"
                >
                  Confirm Table Reservation
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
