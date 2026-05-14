"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, UserPlus, AlertCircle } from "lucide-react";
import { JoinReadyLogo } from "@/src/components/JoinReadyLogo";
import { signup } from "@/app/auth/actions";
import { BorderRotate } from "@/src/components/ui/animated-gradient-border";
import { OAuthButtons } from "@/src/components/OAuthButtons";

export default function SignupPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center">
          <div className="h-5 w-5 rounded-full border-2 border-[#8A9A5B] border-t-transparent animate-spin" />
        </div>
      }
    >
      <SignupContent />
    </Suspense>
  );
}

function SignupContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const redirectTo = searchParams.get("redirectTo") ?? "";

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-[420px]"
      >
        {/* Logo */}
        <div className="text-center mb-8 space-y-3">
          <div className="flex justify-center">
            <JoinReadyLogo size={48} />
          </div>
          <div>
            <h1 className="font-display text-2xl font-bold text-white tracking-tight">Create your account</h1>
            <p className="text-sm text-slate-500 mt-1">Save your guide progress and selections</p>
          </div>
        </div>

        <BorderRotate
          gradientColors={{ primary: "#151D13", secondary: "#3d4a28", accent: "#8A9A5B" }}
          backgroundColor="#0B0F0A"
          borderWidth={1}
          borderRadius={20}
          animationMode="auto-rotate"
          animationSpeed={12}
          className="p-6 space-y-5"
        >
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-2.5 rounded-xl border border-rose-500/20 bg-rose-500/[0.07] px-3.5 py-3"
            >
              <AlertCircle className="h-4 w-4 text-rose-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-rose-400 leading-relaxed">{decodeURIComponent(error)}</p>
            </motion.div>
          )}

          <form action={signup} className="space-y-4">
            <input type="hidden" name="redirectTo" value={redirectTo} />

            <div className="space-y-2">
              <label className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                <Mail className="h-3 w-3" />
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/[0.09] bg-[#0C1509] px-4 h-[50px] text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#8A9A5B]/30 focus:border-[#8A9A5B]/40 transition-all hover:border-white/[0.17]"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                <Lock className="h-3 w-3" />
                Password
              </label>
              <input
                name="password"
                type="password"
                required
                minLength={8}
                autoComplete="new-password"
                placeholder="Minimum 8 characters"
                className="w-full rounded-xl border border-white/[0.09] bg-[#0C1509] px-4 h-[50px] text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#8A9A5B]/30 focus:border-[#8A9A5B]/40 transition-all hover:border-white/[0.17]"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-full bg-[#6F8F3E] hover:bg-[#8A9A5B] active:scale-[0.98] text-white font-display font-semibold text-sm h-[50px] transition-all shadow-lg shadow-[#6F8F3E]/20"
            >
              <UserPlus className="h-4 w-4" />
              Create Account
            </button>
          </form>

          <div className="relative flex items-center gap-3">
            <div className="flex-1 h-px bg-white/[0.05]" />
            <span className="text-[10px] text-slate-600 uppercase tracking-widest">or</span>
            <div className="flex-1 h-px bg-white/[0.05]" />
          </div>

          <OAuthButtons redirectTo={redirectTo || undefined} />

          <div className="h-px bg-white/[0.05]" />

          <p className="text-center text-xs text-slate-600">
            Already have an account?{" "}
            <Link
              href={`/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""}`}
              className="text-[#C2B280] hover:text-[#D6A84F] font-medium transition-colors"
            >
              Sign in
            </Link>
          </p>
        </BorderRotate>

        <p className="text-center text-[10px] text-slate-700 mt-6 leading-relaxed">
          By creating an account you agree that Join Ready is an independent educational resource only.<br />
          No recruiting. No commitments.
        </p>
      </motion.div>
    </div>
  );
}
