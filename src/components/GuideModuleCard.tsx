"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, BookOpen, HelpCircle, ChevronRight } from "lucide-react";
import { PdfDownloadButton } from "@/src/components/PdfDownloadButton";
import { HoverBorderGradient } from "@/src/components/ui/hover-border-gradient";
import type { GuideModule, ModuleProgress } from "@/src/types/guide";

interface Props {
  module: GuideModule;
  progress: ModuleProgress;
  country: string;
  branch: string;
  index: number;
}

export function GuideModuleCard({ module, progress, country, branch, index }: Props) {
  const router = useRouter();
  const isComplete = progress.quizCompleted;
  const lessonsCompleted = progress.completedLessons.length;
  const totalLessons = module.lessons.length;
  const moduleUrl = `/guide/${module.id}?country=${country}&branch=${branch}`;
  const pct = totalLessons > 0 ? (lessonsCompleted / totalLessons) * 100 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.35, ease: [0.25, 0.4, 0.25, 1] as const }}
      whileHover={{ y: -2, transition: { duration: 0.15 } }}
      className={[
        "rounded-2xl border p-5 flex flex-col gap-4 transition-all duration-200 bg-[#10160F]/80 backdrop-blur-sm cursor-pointer group",
        isComplete
          ? "border-emerald-500/20 shadow-sm shadow-emerald-500/5 hover:border-emerald-500/40 hover:shadow-emerald-500/10"
          : "border-[rgba(194,178,128,0.08)] hover:border-[rgba(138,154,91,0.30)] hover:bg-[#10160F] hover:shadow-lg hover:shadow-[#8A9A5B]/5",
      ].join(" ")}
      onClick={() => router.push(moduleUrl)}
    >
      <div className="flex items-start gap-3">
        {/* Status icon */}
        <div className="mt-0.5 flex-shrink-0">
          {isComplete ? (
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/25">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            </div>
          ) : (
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#8A9A5B]/[0.06] border border-[rgba(138,154,91,0.15)] group-hover:border-[rgba(138,154,91,0.30)] transition-colors">
              <Circle className="h-3.5 w-3.5 text-slate-700 group-hover:text-[#8A9A5B]/50 transition-colors" />
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-white text-[14px] leading-snug group-hover:text-[#C2B280] transition-colors">
            {module.title}
          </h3>
          <p className="text-[12px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
            {module.description}
          </p>

          <div className="flex items-center gap-4 mt-3">
            <span className="flex items-center gap-1.5 text-[11px] text-slate-600">
              <BookOpen className="h-3 w-3" />
              {lessonsCompleted}/{totalLessons} lessons
            </span>
            <span className="flex items-center gap-1.5 text-[11px] text-slate-600">
              <HelpCircle className="h-3 w-3" />
              {progress.quizCompleted
                ? `Quiz · ${progress.quizScore ?? 0}%`
                : "Quiz pending"}
            </span>
          </div>

          {totalLessons > 0 && (
            <div className="mt-3 h-[3px] w-full rounded-full bg-white/[0.05] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.9, delay: index * 0.06 + 0.3, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-[#6F8F3E] to-[#8A9A5B]"
              />
            </div>
          )}
        </div>
      </div>

      <div
        className="flex items-center justify-between pt-3 border-t border-[rgba(194,178,128,0.06)] group-hover:border-[rgba(194,178,128,0.12)] transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        <PdfDownloadButton
          type="module"
          country={country}
          branch={branch}
          moduleSlug={module.pdfSlug}
          label="PDF"
          variant="ghost"
          className="text-[11px] py-1 px-2 text-slate-600 hover:text-slate-400"
        />

        <HoverBorderGradient
          as="button"
          onClick={(e: React.MouseEvent) => { e.stopPropagation(); router.push(moduleUrl); }}
          containerClassName="rounded-full border-transparent bg-transparent gap-0"
          className="bg-transparent text-[#8A9A5B] hover:text-[#C2B280] text-[12px] font-semibold px-3 py-1 rounded-full flex items-center gap-1.5"
        >
          Open Module
          <ChevronRight className="h-3.5 w-3.5" />
        </HoverBorderGradient>
      </div>
    </motion.div>
  );
}
