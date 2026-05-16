"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, AlertCircle, CheckCircle, ArrowLeft } from "lucide-react";
import { JoinReadyLogo } from "@/src/components/JoinReadyLogo";
import { BorderRotate } from "@/src/components/ui/animated-gradient-border";
import { createClient } from "@/src/lib/supabase/client";

export default function ForgotPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center">
          <div className="h-5 w-5 rounded-full border-2 border-[#8A9A5B] border-t-transparent animate-spin" />
        </div>
      }
    >
      <ForgotPasswordContent />
    </Suspense>
  );
}

function ForgotPasswordContent() {
  const searchParams = useSearchParams();
  const urlError = searchParams.get("error");

  const [error, setError] = useState<string | null>(
    urlError ? decodeURIComponent(urlError) : null
  );
  const [sent, setSent] = useState(!!searchParams.get("sent"));
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    const supabase = createClient();
    const redirectUrl = `${window.location.origin}/auth/callback?next=/auth/reset-password`;
    const { error: authError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: redirectUrl,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
    } else {
      setSent(true);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full max-w-[400px]"
      >
        <div className="text-center mb-7 space-y-3">
          <div className="flex justify-center">
            <JoinReadyLogo size={48} />
          </div>
          <div>
            <h1 className="font-display text-2xl font-bold text-white tracking-tight">Reset password</h1>
            <p className="text-sm text-slate-500 mt-1">
              {sent ? "Check your inbox" : "Enter your email to receive a reset link"}
            </p>
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
          {sent ? (
            <div className="flex flex-col items-center gap-3 py-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6F8F3E]/15 border border-[#8A9A5B]/30">
                <CheckCircle className="h-5 w-5 text-[#8A9A5B]" />
              </div>
              <p className="text-sm text-slate-300 text-center leading-relaxed">
                If that email is in our system, you&apos;ll receive a password reset link shortly.
              </p>
            </div>
          ) : (
            <>
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

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-[#6F8F3E] hover:bg-[#8A9A5B] active:scale-[0.98] text-white font-display font-semibold text-sm h-[48px] transition-all shadow-lg shadow-[#6F8F3E]/20 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending…" : "Send reset link"}
                </button>
              </form>
            </>
          )}

          <div className="h-px bg-white/[0.06]" />

          <Link
            href="/login"
            className="flex items-center justify-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to sign in
          </Link>
        </BorderRotate>
      </motion.div>
    </div>
  );
}
