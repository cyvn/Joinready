"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, Trash2, Package } from "lucide-react";
import { useCart } from "@/src/contexts/CartContext";

export function CartDrawer() {
  const { items, totalItems, removeItem, updateQuantity, clearCart, isOpen, closeCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeCart}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            key="cart-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
            className="fixed inset-y-0 right-0 z-[70] w-full max-w-[340px] bg-[#10160F] border-l border-[rgba(194,178,128,0.14)] flex flex-col shadow-2xl shadow-black/80"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.07]">
              <div className="flex items-center gap-2.5">
                <ShoppingCart className="h-4 w-4 text-[#8A9A5B]" />
                <span className="font-display font-semibold text-white text-sm">Cart</span>
                {totalItems > 0 && (
                  <span className="inline-flex items-center justify-center h-4 min-w-[16px] px-1 rounded-full bg-[#6F8F3E] text-[10px] font-bold text-white">
                    {totalItems}
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                aria-label="Close cart"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
              <AnimatePresence mode="popLayout">
                {items.length === 0 ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center py-16 gap-3 text-center"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06]">
                      <ShoppingCart className="h-5 w-5 text-slate-600" />
                    </div>
                    <p className="text-sm text-slate-600">Your cart is empty</p>
                  </motion.div>
                ) : (
                  items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.2 }}
                      className="rounded-xl border border-[rgba(194,178,128,0.12)] bg-[#151D13] p-4 flex items-start gap-3 hover:border-[rgba(194,178,128,0.26)] hover:bg-[#161E14] transition-colors duration-150"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#6F8F3E]/[0.15] border border-[#8A9A5B]/20 flex-shrink-0">
                        <Package className="h-4 w-4 text-[#8A9A5B]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-white leading-snug truncate">
                          {item.name}
                        </p>
                        <p className="text-[11px] text-slate-500 mt-0.5">{item.type}</p>
                        <div className="flex items-center gap-2 mt-1.5">
                          <span className="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full px-2 py-0.5 font-medium">
                            {item.status}
                          </span>
                          <div className="flex items-center gap-1 ml-auto">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="flex h-5 w-5 items-center justify-center rounded-md border border-white/[0.1] bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.1] transition-colors leading-none"
                              aria-label="Decrease quantity"
                            >
                              −
                            </button>
                            <span className="text-[11px] text-slate-300 w-5 text-center font-medium tabular-nums">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="flex h-5 w-5 items-center justify-center rounded-md border border-white/[0.1] bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.1] transition-colors leading-none"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-600 hover:text-red-400 hover:bg-red-500/10 transition-colors flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="px-5 py-4 border-t border-white/[0.07] space-y-3">
              {/* Checkout notice */}
              <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] px-4 py-3">
                <p className="text-[11px] text-slate-500 leading-relaxed text-center">
                  Checkout is not available yet.
                </p>
              </div>

              {/* Clear cart */}
              {items.length > 0 && (
                <button
                  onClick={clearCart}
                  className="w-full flex items-center justify-center gap-1.5 text-[12px] text-slate-600 hover:text-red-400 transition-colors py-2"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  Clear cart
                </button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
