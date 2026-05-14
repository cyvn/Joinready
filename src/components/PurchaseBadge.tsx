"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { isBadgeVisible, dismissBadge, markBadgeFirstSeen } from "@/src/lib/cart";

const SHOPIFY_STORE_URL =
  process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL ?? "https://joinready.myshopify.com";

export function PurchaseBadge() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    markBadgeFirstSeen();
    const check = () => setVisible(isBadgeVisible());
    check();
    const id = setInterval(check, 5_000);
    return () => clearInterval(id);
  }, []);

  function handleDismiss(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    dismissBadge();
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="purchase-badge"
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: hovered ? 1.01 : 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-20 sm:top-24 left-4 sm:left-12 z-50 w-[calc(100vw-32px)] sm:w-auto"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <a
            href={SHOPIFY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-0 rounded-full overflow-hidden h-[48px] group"
            style={{
              background: hovered
                ? "rgba(16,22,15,0.72)"
                : "rgba(16,22,15,0.58)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: hovered
                ? "1px solid rgba(194,178,128,0.38)"
                : "1px solid rgba(194,178,128,0.22)",
              boxShadow: hovered
                ? "0 8px 30px rgba(0,0,0,0.4), 0 0 16px rgba(138,154,91,0.12)"
                : "0 8px 30px rgba(0,0,0,0.28)",
              transition: "background 0.2s, border-color 0.2s, box-shadow 0.2s",
            }}
          >
            {/* Inner highlight rim */}
            <span
              className="pointer-events-none absolute inset-px rounded-full"
              style={{ background: "rgba(255,255,255,0.025)" }}
            />

            {/* Physical Copy | Take me there */}
            <span className="relative flex items-center gap-2.5 px-4 text-[12px] whitespace-nowrap">
              <span className="font-semibold tracking-wide" style={{ color: "#C2B280" }}>
                Physical Copy
              </span>
              <span className="opacity-30" style={{ color: "#C2B280" }}>|</span>
              <span
                className="font-semibold flex items-center gap-1"
                style={{ color: hovered ? "#C2B280" : "#8A9A5B", transition: "color 0.2s" }}
              >
                Take me there
                <svg
                  className="h-3 w-3 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 12 12"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M2.5 9.5 9.5 2.5M5 2.5h4.5v4.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </span>

            {/* Close button — floats outside the pill */}
          </a>

          {/* Detached close dot so it doesn't interrupt the pill flow */}
          <button
            onClick={handleDismiss}
            aria-label="Dismiss"
            className="absolute -top-1.5 -right-1.5 sm:right-auto sm:-right-1.5 flex h-5 w-5 items-center justify-center rounded-full transition-colors"
            style={{
              background: "rgba(16,22,15,0.85)",
              border: "1px solid rgba(194,178,128,0.2)",
              color: "rgba(194,178,128,0.5)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = "#C2B280";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(194,178,128,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = "rgba(194,178,128,0.5)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(194,178,128,0.2)";
            }}
          >
            <X className="h-2.5 w-2.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
