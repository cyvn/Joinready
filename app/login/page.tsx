"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, LogIn, AlertCircle } from "lucide-react";
import { JoinReadyLogo } from "@/src/components/JoinReadyLogo";
import { BorderRotate } from "@/src/components/ui/animated-gradient-border";
import { OAuthButtons } from "@/src/components/OAuthButtons";
import { createClient } from "@/src/lib/supabase/client";

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center">
          <div className="h-5 w-5 rounded-full border-2 border-[#8A9A5B] border-t-transparent animate-spin" />
        </div>
      }
    >
      <LoginContent />
    </Suspense>
  );
}

function LoginContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirectTo = searchParams.get("redirectTo") ?? "";
  const urlError = searchParams.get("error");

  const [error, setError] = useState<string | null>(
    urlError ? decodeURIComponent(urlError) : null
  );
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const supabase = createClient();
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });

    if (authError) {
      setError(authError.message);
      setLoading(false);
    } else {
      router.push(redirectTo && redirectTo.startsWith("/") ? redirectTo : "/");
      router.refresh();
    }
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 py-12">
      {/* Subtle glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-[#6F8F3E]/[0.07] rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full max-w-[400px]"
      >
        {/* Logo */}
        <div className="text-center mb-7 space-y-3">
          <div className="flex justify-center">
            <JoinReadyLogo size={48} />
          </div>
          <div>
            <h1 className="font-display text-2xl font-bold text-white tracking-tight">Welcome back</h1>
            <p className="text-sm text-slate-500 mt-1">Sign in to your Join Ready account</p>
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
              <p className="text-xs text-rose-400 leading-relaxed">{error}</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="redirectTo" value={redirectTo} />

            <div className="space-y-2">
              <label className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                <Mail className="h-3 w-3" />
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/[0.09] bg-[#0C1509] px-4 h-[48px] text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#8A9A5B]/30 focus:border-[#8A9A5B]/40 transition-all hover:border-white/[0.15]"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  <Lock className="h-3 w-3" />
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-[11px] text-slate-600 hover:text-[#C2B280] transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                name="password"
                type="password"
                required
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full rounded-xl border border-white/[0.09] bg-[#0C1509] px-4 h-[48px] text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#8A9A5B]/30 focus:border-[#8A9A5B]/40 transition-all hover:border-white/[0.15]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 rounded-full bg-[#6F8F3E] hover:bg-[#8A9A5B] active:scale-[0.98] text-white font-display font-semibold text-sm h-[48px] transition-all shadow-lg shadow-[#6F8F3E]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8A9A5B] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <LogIn className="h-4 w-4" />
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>

          <div className="relative flex items-center gap-3">
            <div className="flex-1 h-px bg-white/[0.06]" />
            <span className="text-[10px] text-slate-600 uppercase tracking-widest">or</span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>

          <OAuthButtons redirectTo={redirectTo || undefined} />

          <div className="h-px bg-white/[0.06]" />

          <div className="space-y-2.5 text-center">
            <p className="text-xs text-slate-500">
              Don&apos;t have an account?{" "}
              <Link
                href={`/signup${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""}`}
                className="text-[#C2B280] hover:text-[#D6A84F] font-semibold transition-colors"
              >
                Create one free
              </Link>
            </p>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              No recruiter contact &middot; No commitment &middot; Progress saved only
            </p>
          </div>
        </BorderRotate>

        <p className="text-center text-[11px] text-slate-600 mt-5 leading-relaxed">
          Join Ready is an independent educational resource. Not affiliated with any military branch or government.
        </p>
      </motion.div>
    </div>
  );
}
