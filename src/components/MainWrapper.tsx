"use client";

import { usePathname } from "next/navigation";

/**
 * Route-aware <main> wrapper.
 * / (home): no padding — the h-screen hero fills the viewport exactly, fixed
 *           footer floats transparently over it. Any padding here would add
 *           extra height and allow the page to scroll.
 * All other routes: pt-20 clears the fixed navbar, pb-12 keeps content
 *                   above the fixed footer.
 */
export function MainWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <main className={`flex-1 ${isHome ? "" : "pt-20 pb-12"}`}>
      {children}
    </main>
  );
}
