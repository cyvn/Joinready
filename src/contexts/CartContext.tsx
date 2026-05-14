"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import type { CartItem } from "@/src/lib/cart";
import { loadCart, saveCart, PHYSICAL_GUIDE_ITEM } from "@/src/lib/cart";

type CartContextValue = {
  items: CartItem[];
  totalItems: number;
  addPhysicalGuide: () => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setItems(loadCart());
  }, []);

  const addPhysicalGuide = useCallback(() => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === PHYSICAL_GUIDE_ITEM.id);
      const next: CartItem[] = existing
        ? prev.map((i) =>
            i.id === PHYSICAL_GUIDE_ITEM.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...prev, { ...PHYSICAL_GUIDE_ITEM, quantity: 1 }];
      saveCart(next);
      return next;
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => {
      const next = prev.filter((i) => i.id !== id);
      saveCart(next);
      return next;
    });
  }, []);

  const updateQuantity = useCallback((id: string, delta: number) => {
    setItems((prev) => {
      const next = prev.map((i) =>
        i.id === id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i
      );
      saveCart(next);
      return next;
    });
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    saveCart([]);
  }, []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        addPhysicalGuide,
        removeItem,
        updateQuantity,
        clearCart,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
