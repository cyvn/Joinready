"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, MapPin } from "lucide-react";
import { CountryBranchSelector } from "@/src/components/CountryBranchSelector";
import { HoverBorderGradient } from "@/src/components/ui/hover-border-gradient";
import { BorderRotate } from "@/src/components/ui/animated-gradient-border";
import { AnimatedGroup } from "@/src/components/ui/animated-group";
import { InfiniteGridBackground } from "@/src/components/ui/the-infinite-grid";
import { Starfield } from "@/src/components/ui/starfield-1";
import HeroWave from "@/src/components/ui/dynamic-wave-canvas-background";
import { saveSelection } from "@/src/lib/progress";
import { getBranchData } from "@/src/data/military-data";
import { allCountries } from "@/src/data/countries";
import { cn } from "@/src/lib/utils";

// ─── Compact result card shown after both dropdowns are filled ────────────────

function CompactResult({ country, branch: branchId }: { country: string; branch: string }) {
  const branch = getBranchData(country, branchId);
  const countryName = allCountries.find((c) => c.code === country)?.name ?? country;
  const [expanded, setExpanded] = useState(false);
  if (!branch) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 3 }}
      transition={{ duration: 0.25 }}
    >
      <BorderRotate
        gradientColors={{ primary: "#151D13", secondary: "#3d4a28", accent: "#8A9A5B" }}
        backgroundColor="#0B0F0A"
        borderWidth={1}
        borderRadius={12}
        animationMode="auto-rotate"
        animationSpeed={12}
        className="p-4 space-y-3"
      >
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-display font-semibold text-white text-[13px] leading-snug">
              {countryName} · {branch.displayName ?? branch.name}
            </p>
            <p className="text-[11px] text-emerald-400 mt-0.5 font-medium">Selection confirmed</p>
          </div>
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/30 flex-shrink-0 mt-0.5">
            <span className="block h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </div>
        </div>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="w-full text-left group"
          aria-label={expanded ? "Collapse description" : "Expand description"}
        >
          <p className={cn("text-[12px] text-slate-400 leading-relaxed transition-all", expanded ? "" : "line-clamp-2")}>
            {branch.overview}
          </p>
          <span className="text-[10px] text-slate-600 group-hover:text-slate-400 transition-colors mt-0.5 block">
            {expanded ? "Show less ↑" : "Show more ↓"}
          </span>
        </button>

        <div className="flex items-center gap-1.5 flex-wrap">
          <MapPin className="h-2.5 w-2.5 text-slate-600 flex-shrink-0" />
          {branch.careerPaths.slice(0, 3).map((p) => (
            <span key={p} className="text-[10px] text-slate-500 bg-white/[0.04] border border-white/[0.07] px-1.5 py-0.5 rounded-full">
              {p}
            </span>
          ))}
          {branch.careerPaths.length > 3 && (
            <span className="text-[10px] text-slate-600">+{branch.careerPaths.length - 3} more</span>
          )}
        </div>
      </BorderRotate>
    </motion.div>
  );
}

// ─── Main page content ────────────────────────────────────────────────────────

function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [country, setCountry] = useState(searchParams.get("country") ?? "");
  const [branch, setBranch] = useState(searchParams.get("branch") ?? "");
  const bothSelected = !!(country && branch);

  useEffect(() => {
    if (!country && !branch) { router.replace("/", { scroll: false }); return; }
    const p = new URLSearchParams();
    if (country) p.set("country", country);
    if (branch) p.set("branch", branch);
    router.replace(`/?${p}`, { scroll: false });
    if (country && branch) saveSelection(country, branch);
  }, [country, branch]); // eslint-disable-line

  return (
    <div className="h-screen overflow-hidden relative flex flex-col items-center justify-center bg-[#070A08]">

      {/* ── Layer 1: Dynamic wave canvas (military olive/graphite tones) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        <HeroWave />
      </div>

      {/* ── Layer 2: Starfield (screen blend — black bg = transparent, sand stars visible) ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ opacity: 0.18, mixBlendMode: "screen" }}
        aria-hidden
      >
        <Starfield
          bgColor="rgba(0,0,0,1)"
          starColor="rgba(194,178,128,1)"
          quantity={110}
          speed={0.28}
        />
      </div>

      {/* ── Layer 3: Infinite grid overlay (olive grid lines + mouse reveal) ── */}
      <InfiniteGridBackground className="z-[2]" />

      {/* ── Layer 4: Hero-section-1 style directional beams, military olive ── */}
      <div
        aria-hidden
        className="z-[3] absolute inset-0 pointer-events-none opacity-40 hidden lg:block"
      >
        <div className="w-[38rem] h-[80rem] -translate-y-[380px] absolute left-[-5%] top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(138,154,91,0.08)_0,rgba(111,143,62,0.03)_50%,transparent_80%)]" />
        <div className="h-[70rem] absolute right-[-5%] top-0 w-64 rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(194,178,128,0.06)_0,transparent_100%)] [translate:0%_-40%]" />
      </div>

      {/* ── Layer 5: Vignette so content reads over the atmospheric bg ── */}
      <div
        className="absolute inset-0 pointer-events-none z-[4]"
        style={{
          background:
            "radial-gradient(ellipse 72% 62% at 50% 45%, transparent 18%, rgba(7,10,8,0.65) 100%)",
        }}
        aria-hidden
      />

      {/* ── Content layer ── */}
      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-4 sm:px-6 flex flex-col items-center -mt-4">

        {/* Hero text — AnimatedGroup from hero-section-1 for staggered blur-slide reveal */}
        <AnimatedGroup
          variants={{
            container: {
              visible: { transition: { staggerChildren: 0.13, delayChildren: 0.08 } },
            },
            item: {
              hidden: { opacity: 0, filter: "blur(10px)", y: 14 },
              visible: {
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
                transition: { type: "spring" as const, bounce: 0.2, duration: 1.3 },
              },
            },
          }}
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <div className="mb-3 text-center">
            <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              <span className="block h-px w-5 bg-[#8A9A5B]/40" />
              Independent Military Guidance
              <span className="block h-px w-5 bg-[#8A9A5B]/40" />
            </span>
          </div>

          {/* Static headline only */}
          <div className="flex flex-col items-center mb-3 sm:mb-5">
            <h1 className="font-display text-[1.85rem] sm:text-[2.7rem] leading-[1.07] font-bold text-[#F4F1E8] tracking-tight text-center">
              Become your best self.
            </h1>
          </div>
        </AnimatedGroup>

        {/* ── Selector card ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.30 }}
          className="w-full max-w-[520px] space-y-2 sm:space-y-3"
        >
          <div className="rounded-2xl border border-[rgba(194,178,128,0.12)] hover:border-[rgba(194,178,128,0.22)] bg-[#0B0F0A]/92 backdrop-blur-xl shadow-2xl shadow-black/60 p-4 space-y-3 transition-colors duration-300">
            <CountryBranchSelector
              country={country}
              branch={branch}
              onCountryChange={setCountry}
              onBranchChange={setBranch}
              onReset={() => { setCountry(""); setBranch(""); }}
            />

            <AnimatePresence>
              {bothSelected && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.18 }}
                  className="overflow-hidden"
                >
                  <div className="h-px bg-[rgba(194,178,128,0.08)] mb-3" />
                  <HoverBorderGradient
                    as="button"
                    onClick={() => router.push(`/guide?country=${country}&branch=${branch}`)}
                    containerClassName="w-full rounded-full border-[rgba(194,178,128,0.10)] bg-transparent gap-0"
                    className="w-full bg-[#0B1209] text-[#F4F1E8] font-display font-semibold text-sm py-2.5 rounded-full flex items-center justify-center"
                  >
                    Open My Guide
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </HoverBorderGradient>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Result preview */}
          <AnimatePresence>
            {bothSelected && (
              <CompactResult country={country} branch={branch} />
            )}
          </AnimatePresence>
        </motion.div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.44 }}
          className="flex items-center justify-center gap-3 text-[11px] text-slate-500 mt-5"
        >
          <span>Unbiased</span>
          <span className="text-slate-700">·</span>
          <span>Not a recruiter</span>
          <span className="text-slate-700">·</span>
          <span>Educational only</span>
        </motion.div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense
      fallback={
        <div className="h-screen bg-[#070A08] flex items-center justify-center">
          <div className="h-5 w-5 rounded-full border-2 border-[#8A9A5B] border-t-transparent animate-spin" />
        </div>
      }
    >
      <HomeContent />
    </Suspense>
  );
}
