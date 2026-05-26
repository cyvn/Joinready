"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { ModuleQuiz } from "@/src/components/ModuleQuiz";
import { PdfDownloadButton } from "@/src/components/PdfDownloadButton";
import { EmptyGuideState } from "@/src/components/EmptyGuideState";
import { AnimatedPage } from "@/src/components/AnimatedPage";
import { getModuleById } from "@/src/data/guide-modules";
import { allCountries } from "@/src/data/countries";
import { getBranchData } from "@/src/data/military-data";

export function QuizContent({ moduleId }: { moduleId: string }) {
  const searchParams = useSearchParams();
  const country = searchParams.get("country") ?? "";
  const branch = searchParams.get("branch") ?? "";

  if (!country || !branch) return <EmptyGuideState />;

  const module = getModuleById(moduleId);
  if (!module) notFound();

  const branchData = getBranchData(country, branch);
  const countryName = allCountries.find((c) => c.code === country)?.name ?? country;
  const branchName = branchData?.name ?? branch;
  const moduleUrl = `/guide/${moduleId}?country=${country}&branch=${branch}`;
  const guideUrl = `/guide?country=${country}&branch=${branch}`;

  if (module.quiz.length === 0) {
    return (
      <AnimatedPage>
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="font-display text-xl font-semibold text-white">Quiz coming soon</h2>
        <p className="text-slate-500 text-sm">The quiz for this module is being prepared.</p>
        <Link href={moduleUrl} className="text-[#C2B280] hover:text-[#D6A84F] text-sm transition-colors">
          Back to module
        </Link>
      </div>
      </AnimatedPage>
    );
  }

  return (
    <AnimatedPage>
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-600 flex-wrap">
        <Link href={guideUrl} className="inline-flex items-center gap-1 hover:text-slate-400 transition-colors">
          <ChevronLeft className="h-3.5 w-3.5" />
          Guide
        </Link>
        <span className="text-slate-800">/</span>
        <Link href={moduleUrl} className="hover:text-slate-400 transition-colors">{module.title}</Link>
        <span className="text-slate-800">/</span>
        <span className="text-slate-400 font-medium">Quiz</span>
        <span className="text-slate-800 ml-1">· {countryName} · {branchName}</span>
      </div>

      <div>
        <h1 className="font-display text-2xl font-bold text-white tracking-tight">
          {module.title} — Quiz
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          {module.quiz.length} questions · Test your understanding
        </p>
      </div>

      <ModuleQuiz module={module} country={country} branch={branch} />

      <div className="pt-4">
        <PdfDownloadButton type="full-guide" country={country} branch={branch} label="Get Complete Guide PDF" />
      </div>
    </div>
    </AnimatedPage>
  );
}
