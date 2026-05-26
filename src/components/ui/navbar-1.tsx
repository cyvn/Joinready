"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogIn } from "lucide-react";
import { JoinReadyLogo } from "@/src/components/JoinReadyLogo";
import type { User } from "@supabase/supabase-js";
import { createClient, supabaseEnvConfigured } from "@/src/lib/supabase/client";
import { UserMenu, MobileUserSection } from "@/src/components/UserMenu";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/guide", label: "Guide" },
  { href: "/quiz", label: "Quiz" },
  { href: "/about", label: "About" },
];

/* Active nav pill gradient style — olive/sand military tones */
const ACTIVE_PILL_STYLE: React.CSSProperties = {
  border: "1px solid transparent",
  backgroundImage: `
    linear-gradient(#0B0F0A, #0B0F0A),
    conic-gradient(from var(--gradient-angle, 0deg), #151D13 0%, #3d4a28 35%, #8A9A5B 50%, #3d4a28 65%, #151D13 100%)
  `,
  backgroundClip: "padding-box, border-box",
  backgroundOrigin: "padding-box, border-box",
};

export function JoinReadyNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!supabaseEnvConfigured()) return;

    const supabase = createClient();

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    if (!supabaseEnvConfigured()) return;
    const supabase = createClient();
    await supabase.auth.signOut();
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 bg-transparent pointer-events-none">
      {/* Pill nav — three-column grid keeps nav truly centered regardless of side widths */}
      <div className="pointer-events-auto flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] px-5 sm:px-7 py-2.5 bg-[#0B0F0A]/90 backdrop-blur-xl rounded-full border border-[rgba(138,154,91,0.13)] shadow-2xl shadow-black/60 w-full max-w-[800px]" style={{ isolation: "isolate" }}>

        {/* Col 1 — Logo (left-aligned) */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <JoinReadyLogo size={26} />
          <span className="font-display font-bold text-[15px] text-white tracking-tight">
            Join Ready
          </span>
        </Link>

        {/* Col 2 — Desktop nav (true center) */}
        <nav className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "relative px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-all duration-150",
                  active ? "text-white" : "text-slate-400 hover:text-slate-200",
                ].join(" ")}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full gradient-border-auto"
                    style={{
                      ...ACTIVE_PILL_STYLE,
                      // @ts-expect-error – CSS custom property
                      "--animation-duration": "7s",
                    }}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Col 3 — Desktop CTA + mobile hamburger (right-aligned) */}
        <div className="flex items-center justify-end">
          {/* Desktop: UserMenu when signed in, Sign In when signed out */}
          <div className="hidden md:flex items-center">
            {user ? (
              <UserMenu user={user} onSignOut={handleSignOut} />
            ) : (
              <Link
                href="/login"
                className="flex items-center gap-1.5 text-[12px] font-medium text-slate-400 hover:text-slate-200 transition-colors px-2 py-1.5"
              >
                <LogIn className="h-3.5 w-3.5" />
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex items-center justify-center h-8 w-8 rounded-full border border-white/[0.08] bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "x" : "m"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="pointer-events-auto absolute top-[calc(100%+8px)] left-4 right-4 bg-[#0B0F0A]/95 backdrop-blur-xl border border-white/[0.07] rounded-2xl shadow-2xl shadow-black/60 overflow-hidden"
          >
            <nav className="p-3 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const active =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={[
                      "px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                      active
                        ? "bg-[#8A9A5B]/[0.12] border border-[#8A9A5B]/20 text-[#C2B280]"
                        : "text-slate-500 hover:text-white hover:bg-white/[0.04] border border-transparent",
                    ].join(" ")}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Mobile auth section */}
              {user ? (
                <MobileUserSection user={user} onSignOut={handleSignOut} />
              ) : (
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-500 hover:text-white hover:bg-white/[0.04] border border-transparent transition-colors"
                >
                  <LogIn className="h-4 w-4" />
                  Sign In
                </Link>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export { JoinReadyNavbar as Navbar1 };
