"use client";

import { CartProvider } from "@/src/contexts/CartContext";
import { CartDrawer } from "@/src/components/ui/cart-drawer";
import { PurchaseBadge } from "@/src/components/PurchaseBadge";
import { CookieBanner } from "@/src/components/CookieBanner";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartDrawer />
      <PurchaseBadge />
      <CookieBanner />
    </CartProvider>
  );
}
