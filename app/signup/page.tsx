"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { JoinReadyLogo } from "@/src/components/JoinReadyLogo";
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
  const urlError = searchParams.get("error");

  const [error, setError] = useState<string | null>(
    urlError ? decodeURIComponent(urlError) : null
  );

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-[420px]"
      >
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
          className="p-6 space-y-4"
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

          <OAuthButtons onError={setError} />

          <div className="h-px bg-white/[0.05]" />

          <p className="text-center text-xs text-slate-600">
            Already have an account?{" "}
            <Link href="/login" className="text-[#C2B280] hover:text-[#D6A84F] font-medium transition-colors">
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
