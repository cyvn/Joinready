"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield } from "lucide-react";

const CONSENT_KEY = "join-ready:cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) {
      setVisible(true);
    }
  }, []);

  const respond = (choice: "accepted" | "denied") => {
    localStorage.setItem(CONSENT_KEY, choice);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="cookie-banner"
          initial={{ opacity: 0, x: "-50%", y: 16 }}
          animate={{ opacity: 1, x: "-50%", y: 0 }}
          exit={{ opacity: 0, x: "-50%", y: 16 }}
          transition={{ type: "spring", bounce: 0.18, duration: 0.4 }}
          className="fixed left-1/2 bottom-[60px] z-50 w-[min(920px,calc(100vw-32px))]"
        >
          <div
            className="rounded-2xl bg-[#0A0F09]/95 backdrop-blur-xl shadow-2xl shadow-black/70 px-5 py-3.5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5"
            style={{ border: "1px solid rgba(138,154,91,0.16)" }}
          >
            {/* Icon + text */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-xl flex-shrink-0"
                style={{ background: "rgba(111,143,62,0.13)", border: "1px solid rgba(111,143,62,0.25)" }}
              >
                <Shield className="h-4 w-4 text-[#8A9A5B]" />
              </div>
              <div className="min-w-0">
                <span className="text-[12px] font-semibold text-[#F4F1E8]">This website uses cookies. </span>
                <span className="text-[12px] text-[#8A9A9A] leading-relaxed">
                  Essential cookies keep your session and preferences. No tracking. No advertising.
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2 flex-shrink-0 sm:ml-auto">
              <button
                onClick={() => respond("denied")}
                className="text-[12px] font-medium px-4 py-2 rounded-xl text-slate-500 hover:text-slate-300 transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.07)" }}
              >
                Deny
              </button>
              <button
                onClick={() => respond("accepted")}
                className="text-[12px] font-semibold px-5 py-2 rounded-xl bg-[#6F8F3E] hover:bg-[#7D9F48] active:scale-[0.97] text-white transition-all shadow-sm shadow-[#6F8F3E]/30"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
