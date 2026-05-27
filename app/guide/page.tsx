"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { EmptyGuideState } from "@/src/components/EmptyGuideState";
import { AnimatedPage } from "@/src/components/AnimatedPage";
import { GuideModuleCard } from "@/src/components/GuideModuleCard";
import { PdfDownloadButton } from "@/src/components/PdfDownloadButton";
import { RoleRequirementsButton } from "@/src/components/RoleRequirementsButton";
import { guideModules } from "@/src/data/guide-modules";
import { allCountries } from "@/src/data/countries";
import { getBranchData } from "@/src/data/military-data";
import { loadGuideProgress, countCompletedModules } from "@/src/lib/progress";


function GuideDashboard() {
  const searchParams = useSearchParams();
  const country = searchParams.get("country") ?? "";
  const branch = searchParams.get("branch") ?? "";

  if (!country || !branch) return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
      <EmptyGuideState />
    </div>
  );

  const branchData = getBranchData(country, branch);
  const countryName = allCountries.find((c) => c.code === country)?.name ?? country;
  const branchName = branchData?.name ?? branch;

  const progress = loadGuideProgress(country, branch);
  const { completed, total } = countCompletedModules(country, branch, guideModules.length);
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <AnimatedPage>
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 py-5 sm:py-10 space-y-4 sm:space-y-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href={`/?country=${country}&branch=${branch}`}
            className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-400 transition-colors mb-4 group"
          >
            <ChevronLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Back to selection
          </Link>
          <h1 className="font-display text-2xl font-bold text-white tracking-tight">
            Your Join Ready Guide
          </h1>
          <p className="text-slate-500 text-sm mt-1">{countryName} · {branchName}</p>
        </motion.div>

        {/* Progress card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="rounded-2xl border border-white/[0.07] bg-slate-900/50 backdrop-blur-sm p-5 space-y-4"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">Guide Progress</p>
              <p className="text-[11px] text-slate-600 mt-0.5">{pct}% complete</p>
            </div>
            <span className="text-xs text-slate-500 bg-white/[0.04] border border-white/[0.07] px-3 py-1 rounded-full">
              {completed} / {total} modules
            </span>
          </div>
          <div className="h-[3px] w-full rounded-full bg-white/[0.05] overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-[#6F8F3E] to-[#8A9A5B]"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <PdfDownloadButton type="full-guide" country={country} branch={branch} />
            <RoleRequirementsButton country={country} branch={branch} />
          </div>
        </motion.div>

        {/* Module grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {guideModules.map((mod, i) => {
            const modProg = progress.modules.find((m) => m.moduleId === mod.id) ?? {
              moduleId: mod.id,
              completedLessons: [],
              quizCompleted: false,
              quizAttempts: 0,
            };
            return (
              <GuideModuleCard
                key={mod.id}
                module={mod}
                progress={modProg}
                country={country}
                branch={branch}
                index={i}
              />
            );
          })}
        </div>

      </div>
    </AnimatedPage>
  );
}

export default function GuidePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#070A08] flex items-center justify-center">
          <div className="h-6 w-6 rounded-full border-2 border-[#8A9A5B] border-t-transparent animate-spin" />
        </div>
      }
    >
      <GuideDashboard />
    </Suspense>
  );
}
