"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { ModuleLessonView } from "@/src/components/ModuleLessonView";
import { PdfDownloadButton } from "@/src/components/PdfDownloadButton";
import { EmptyGuideState } from "@/src/components/EmptyGuideState";
import { AnimatedPage } from "@/src/components/AnimatedPage";
import { getModuleById } from "@/src/data/guide-modules";
import { allCountries } from "@/src/data/countries";
import { getBranchData } from "@/src/data/military-data";

function ModuleContent({ moduleId }: { moduleId: string }) {
  const searchParams = useSearchParams();
  const country = searchParams.get("country") ?? "";
  const branch = searchParams.get("branch") ?? "";

  if (!country || !branch) return <EmptyGuideState />;

  const module = getModuleById(moduleId);
  if (!module) notFound();

  const branchData = getBranchData(country, branch);
  const countryName = allCountries.find((c) => c.code === country)?.name ?? country;
  const branchName = branchData?.name ?? branch;
  const guideUrl = `/guide?country=${country}&branch=${branch}`;

  return (
    <AnimatedPage>
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-600 flex-wrap">
        <Link
          href={guideUrl}
          className="inline-flex items-center gap-1 hover:text-slate-400 transition-colors"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
          Guide
        </Link>
        <span className="text-slate-800">/</span>
        <span className="text-slate-400 font-medium">{module.title}</span>
        <span className="text-slate-800 ml-1">· {countryName} · {branchName}</span>
      </div>

      <div>
        <h1 className="font-display text-2xl font-bold text-white tracking-tight">{module.title}</h1>
        <p className="text-slate-500 text-sm mt-1 leading-relaxed">{module.description}</p>
      </div>

      <div className="flex flex-wrap gap-3">
        <PdfDownloadButton type="module" country={country} branch={branch} moduleSlug={module.pdfSlug} />
        <PdfDownloadButton type="full-guide" country={country} branch={branch} label="Download Full Guide PDF" />
      </div>

      <ModuleLessonView module={module} country={country} branch={branch} />
    </div>
    </AnimatedPage>
  );
}

export default function ModulePage({ params }: { params: { moduleId: string } }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#070A08] flex items-center justify-center">
          <div className="h-6 w-6 rounded-full border-2 border-[#8A9A5B] border-t-transparent animate-spin" />
        </div>
      }
    >
      <ModuleContent moduleId={params.moduleId} />
    </Suspense>
  );
}
