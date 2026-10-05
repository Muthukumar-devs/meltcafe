'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCafe } from '../context/CafeContext';
import { CloseIcon, ShoppingBagIcon, CheckIcon, SparklesIcon, UtensilsIcon } from './Icons';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount,
    isCartOpen,
    setIsCartOpen,
    showToast,
  } = useCafe();

  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway'>('dine-in');
  const [selectedBranch, setSelectedBranch] = useState('Nungambakkam Flagship');
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isCartOpen) return null;

  const taxes = Math.round(cartTotal * 0.05);
  const grandTotal = cartTotal + taxes;

  const handleCheckout = () => {
    if (cart.length === 0) return;
    const generatedOrder = `MELT-ORD-${Math.floor(100 + Math.random() * 900)}`;
    setOrderNumber(generatedOrder);
    setIsOrderPlaced(true);
    showToast(`Order placed successfully! #${generatedOrder}`);
    clearCart();
  };

  const handleClose = () => {
    setIsCartOpen(false);
    setTimeout(() => {
      setIsOrderPlaced(false);
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#120a07] border-l border-amber-900/40 text-stone-200 flex flex-col shadow-2xl">
          {/* Drawer Header */}
          <div className="p-6 border-b border-amber-900/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBagIcon className="w-5 h-5 text-amber-400" />
              <h2 className="font-display font-bold text-xl text-white">Your Order</h2>
              <span className="text-xs bg-amber-500/20 text-amber-300 font-bold px-2 py-0.5 rounded-full border border-amber-500/30">
                {cartCount} {cartCount === 1 ? 'item' : 'items'}
              </span>
            </div>

            <button
              onClick={handleClose}
              className="p-2 rounded-full hover:bg-stone-900 text-stone-400 hover:text-white transition-colors"
              aria-label="Close Order Bag"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {isOrderPlaced ? (
              /* Order Success Screen */
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckIcon className="w-8 h-8" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-700/40 text-xs font-semibold text-amber-300">
                  <SparklesIcon className="w-3.5 h-3.5" />
                  <span>Order Dispatched to Baristas</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Order Confirmed!
                </h3>
                <div className="glass-panel p-4 rounded-2xl border border-amber-900/40 text-left space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-stone-400">Order Token</span>
                    <span className="font-mono font-bold text-amber-400 text-sm">{orderNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Order Mode</span>
                    <span className="font-semibold text-white uppercase">{orderType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Branch</span>
                    <span className="font-semibold text-white">{selectedBranch}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Estimated Prep Time</span>
                    <span className="font-semibold text-amber-300">12 - 15 minutes</span>
                  </div>
                </div>
                <p className="text-xs text-stone-400">
                  Our chef is firing up the hearth and our barista is extracting your roast. Please show your token at the counter.
                </p>
                <button
                  onClick={handleClose}
                  className="w-full py-3 rounded-full font-semibold btn-primary-melt text-white text-xs sm:text-sm"
                >
                  Continue Browsing
                </button>
              </div>
            ) : cart.length === 0 ? (
              /* Empty Cart State */
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 mx-auto flex items-center justify-center">
                  <UtensilsIcon className="w-8 h-8" />
                </div>
                <h3 className="font-display text-lg font-bold text-stone-200">
                  Your Order Bag is Empty
                </h3>
                <p className="text-xs text-stone-400 max-w-xs mx-auto">
                  Add artisan sourdough melts, decadent molten chocolate cakes, or single-origin brews to start your order.
                </p>
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-full font-semibold btn-primary-melt text-white text-xs"
                >
                  Explore Menu Offerings
                </button>
              </div>
            ) : (
              /* Cart Items List */
              <div className="space-y-4">
                {/* Order Type Toggle */}
                <div className="p-1 rounded-xl bg-stone-900 border border-amber-900/30 grid grid-cols-2 text-xs font-semibold">
                  <button
                    onClick={() => setOrderType('dine-in')}
                    className={`py-2 rounded-lg transition-all ${
                      orderType === 'dine-in'
                        ? 'btn-primary-melt text-white'
                        : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    Dine-In at Table
                  </button>
                  <button
                    onClick={() => setOrderType('takeaway')}
                    className={`py-2 rounded-lg transition-all ${
                      orderType === 'takeaway'
                        ? 'btn-primary-melt text-white'
                        : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    Curbside Takeaway
                  </button>
                </div>

                {/* Branch Selection */}
                <div className="text-xs">
                  <label className="text-stone-400 block mb-1">Pick up or dine at:</label>
                  <select
                    value={selectedBranch}
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    className="w-full bg-stone-900 border border-amber-900/30 rounded-xl px-3 py-2 text-stone-200 focus:outline-none focus:border-amber-500 text-xs"
                  >
                    <option value="Nungambakkam Flagship (Khader Nawaz Khan Rd)">
                      Nungambakkam Flagship (KNK Road)
                    </option>
                    <option value="Melt By The Bay (Besant Nagar Beach)">
                      Melt By The Bay (Besant Nagar Beach)
                    </option>
                  </select>
                </div>

                {/* Items */}
                <div className="space-y-3 pt-2">
                  {cart.map(({ item, quantity }) => (
                    <div
                      key={item.id}
                      className="glass-panel p-3.5 rounded-2xl flex items-center gap-3 border border-amber-900/30"
                    >
                      <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-stone-900">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-xs sm:text-sm text-stone-100 truncate">
                          {item.name}
                        </h4>
                        <p className="text-amber-400 font-bold text-xs mt-0.5">
                          ₹{item.price * quantity}
                        </p>

                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex items-center rounded-lg bg-stone-900 border border-stone-800 text-xs">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="px-2 py-0.5 text-stone-400 hover:text-white cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <span className="px-2 font-bold text-stone-200 text-xs">
                              {quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="px-2 py-0.5 text-stone-400 hover:text-white cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-[10px] text-stone-500 hover:text-red-400 transition-colors ml-auto cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Drawer Footer Summary */}
          {cart.length > 0 && !isOrderPlaced && (
            <div className="p-6 border-t border-amber-900/30 bg-[#0d0907] space-y-3">
              <div className="space-y-1.5 text-xs text-stone-400">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-stone-200">₹{cartTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST & Service (5%)</span>
                  <span className="text-stone-200">₹{taxes}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-amber-900/30">
                  <span>Total Amount</span>
                  <span className="text-amber-400 font-display text-lg">₹{grandTotal}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-3.5 rounded-full font-semibold btn-primary-melt text-white text-xs sm:text-sm cursor-pointer shadow-lg"
              >
                Place Order • ₹{grandTotal}
              </button>

              <p className="text-[11px] text-stone-500 text-center">
                Payment processed seamlessly at counter or via UPI on delivery
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
