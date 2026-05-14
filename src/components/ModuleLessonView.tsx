"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { ModuleChecklist } from "@/src/components/ModuleChecklist";
import { markLessonComplete } from "@/src/lib/progress";
import type { GuideModule } from "@/src/types/guide";

interface Props {
  module: GuideModule;
  country: string;
  branch: string;
}

export function ModuleLessonView({ module, country, branch }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());

  const lesson = module.lessons[activeIdx];
  const quizUrl = `/guide/${module.id}/quiz?country=${country}&branch=${branch}`;
  const allChecklistItems = module.lessons.flatMap((l) => l.checklistItems);

  const markDone = (lessonId: string) => {
    markLessonComplete(country, branch, module.id, lessonId);
    setCompletedIds((prev) => new Set([...Array.from(prev), lessonId]));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Sidebar */}
      <aside className="lg:col-span-1">
        <div className="sticky top-20 space-y-1">
          <p className="text-[11px] font-semibold text-slate-600 uppercase tracking-widest mb-3">
            Lessons
          </p>
          {module.lessons.map((l, idx) => (
            <button
              key={l.id}
              onClick={() => setActiveIdx(idx)}
              className={[
                "w-full text-left flex items-start gap-2 px-3 py-2.5 rounded-xl text-xs transition-all",
                idx === activeIdx
                  ? "bg-[#6F8F3E]/15 text-[#C2B280] border border-[#8A9A5B]/25"
                  : "text-slate-500 hover:text-slate-300 hover:bg-white/[0.04] border border-transparent",
              ].join(" ")}
            >
              {completedIds.has(l.id) ? (
                <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-emerald-400" />
              ) : (
                <span className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 rounded-full border border-current opacity-30" />
              )}
              <span className="leading-snug">{l.title}</span>
            </button>
          ))}

          <div className="pt-4">
            <Link
              href={quizUrl}
              className="block text-center bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold rounded-xl px-4 py-2.5 transition-colors"
            >
              Take Module Quiz
            </Link>
          </div>
        </div>
      </aside>

      {/* Content */}
      <div className="lg:col-span-3 space-y-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={lesson.id}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.18 }}
            className="space-y-5"
          >
            <div>
              <h2 className="font-display text-xl font-bold text-white tracking-tight">
                {lesson.title}
              </h2>
              <p className="text-slate-500 mt-1.5 text-sm leading-relaxed">{lesson.summary}</p>
            </div>

            {lesson.sections.map((section) => (
              <div
                key={section.heading}
                className="rounded-2xl border border-white/[0.06] bg-slate-900/50 p-5 space-y-2"
              >
                <h3 className="font-display font-semibold text-white text-sm">{section.heading}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{section.body}</p>
              </div>
            ))}

            {lesson.checklistItems.length > 0 && (
              <div className="rounded-2xl border border-white/[0.06] bg-slate-900/50 p-5 space-y-3">
                <h3 className="font-display font-semibold text-white text-sm">Lesson Checklist</h3>
                <ModuleChecklist
                  items={lesson.checklistItems}
                  moduleId={`${module.id}:${lesson.id}`}
                />
              </div>
            )}

            {!completedIds.has(lesson.id) ? (
              <button
                onClick={() => markDone(lesson.id)}
                className="text-sm text-emerald-400 hover:text-emerald-300 flex items-center gap-2 transition-colors"
              >
                <CheckCircle2 className="h-4 w-4" />
                Mark lesson as complete
              </button>
            ) : (
              <p className="text-sm text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                Lesson completed
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <div className="flex items-center justify-between pt-5 border-t border-white/[0.06]">
          <button
            onClick={() => setActiveIdx((i) => Math.max(0, i - 1))}
            disabled={activeIdx === 0}
            className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </button>
          <span className="text-xs text-slate-700">
            {activeIdx + 1} / {module.lessons.length}
          </span>
          {activeIdx < module.lessons.length - 1 ? (
            <button
              onClick={() => setActiveIdx((i) => Math.min(module.lessons.length - 1, i + 1))}
              className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-300 transition-colors"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <Link
              href={quizUrl}
              className="flex items-center gap-1 text-sm text-violet-400 hover:text-violet-300 transition-colors font-medium"
            >
              Take Quiz
              <ChevronRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        {allChecklistItems.length > 0 && (
          <div className="rounded-2xl border border-white/[0.06] bg-slate-900/50 p-5 space-y-3">
            <h3 className="font-display font-semibold text-white">Full Module Checklist</h3>
            <ModuleChecklist items={allChecklistItems} moduleId={module.id} />
          </div>
        )}
      </div>
    </div>
  );
}
