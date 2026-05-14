"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, RotateCcw, Trophy, ChevronRight } from "lucide-react";
import Link from "next/link";
import { EmojiRating } from "@/src/components/ui/emoji-rating";
import { GlassButton } from "@/src/components/ui/apple-tahoe-liquid-glass-button";
import { markQuizComplete, saveQuizResult } from "@/src/lib/progress";
import type { GuideModule, QuizAnswer, QuizResult } from "@/src/types/guide";

interface Props {
  module: GuideModule;
  country: string;
  branch: string;
}

type Phase = "quiz" | "review";

export function ModuleQuiz({ module, country, branch }: Props) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [phase, setPhase] = useState<Phase>("quiz");
  const [result, setResult] = useState<QuizResult | null>(null);

  const questions = module.quiz;
  const allAnswered = questions.every((q) => answers[q.id]);

  const submit = () => {
    const quizAnswers: QuizAnswer[] = questions.map((q) => ({
      questionId: q.id,
      selectedAnswer: answers[q.id] ?? "",
      isCorrect: answers[q.id] === q.correctAnswer,
    }));
    const correct = quizAnswers.filter((a) => a.isCorrect).length;
    const score = Math.round((correct / questions.length) * 100);
    const quizResult: QuizResult = {
      moduleId: module.id,
      answers: quizAnswers,
      score,
      total: questions.length,
      completedAt: new Date().toISOString(),
    };
    markQuizComplete(country, branch, module.id, score);
    saveQuizResult(country, branch, quizResult);
    setResult(quizResult);
    setPhase("review");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const retake = () => {
    setAnswers({});
    setPhase("quiz");
    setResult(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const guideUrl = `/guide?country=${country}&branch=${branch}`;
  const moduleUrl = `/guide/${module.id}?country=${country}&branch=${branch}`;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {phase === "quiz" && (
        <>
          <div className="space-y-4">
            {questions.map((q, qi) => (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: qi * 0.05, duration: 0.3 }}
                className="rounded-2xl border border-white/[0.07] bg-slate-900/60 p-5 space-y-4"
              >
                <p className="text-sm font-medium text-slate-100 leading-relaxed">
                  <span className="text-slate-600 mr-2 font-normal">Q{qi + 1}.</span>
                  {q.question}
                </p>
                <div className="space-y-2" role="radiogroup">
                  {q.options.map((opt) => {
                    const sel = answers[q.id] === opt;
                    return (
                      <button
                        key={opt}
                        onClick={() => setAnswers((p) => ({ ...p, [q.id]: opt }))}
                        role="radio"
                        aria-checked={sel}
                        className={[
                          "w-full text-left text-sm rounded-xl px-4 py-3 border transition-all",
                          sel
                            ? "border-[#8A9A5B]/55 bg-[#6F8F3E]/15 text-white"
                            : "border-white/[0.06] bg-white/[0.02] text-slate-400 hover:border-white/[0.12] hover:text-slate-200",
                        ].join(" ")}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <GlassButton
            glassColor={allAnswered ? "rgba(111,143,62,0.22)" : undefined}
            className={`w-full font-sans font-semibold ${!allAnswered ? "opacity-40 cursor-not-allowed" : ""}`}
            onClick={allAnswered ? submit : undefined}
            disabled={!allAnswered}
          >
            {allAnswered ? "Submit Quiz" : `Answer all ${questions.length} questions to submit`}
          </GlassButton>
        </>
      )}

      {phase === "review" && result && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            {/* Score */}
            <div className="text-center rounded-2xl border border-white/[0.07] bg-slate-900/60 p-8 space-y-3">
              <Trophy
                className={`h-10 w-10 mx-auto ${result.score >= 70 ? "text-amber-400" : "text-slate-600"}`}
              />
              <h2 className="font-display text-4xl font-bold text-white">{result.score}%</h2>
              <p className="text-slate-500 text-sm">
                {result.answers.filter((a) => a.isCorrect).length} of {result.total} correct
              </p>
              {result.score >= 70 ? (
                <p className="text-emerald-400 text-sm font-medium">
                  Well done — module quiz completed!
                </p>
              ) : (
                <p className="text-amber-400 text-sm">
                  Review the questions below and retake to improve.
                </p>
              )}
            </div>

            {/* Question review */}
            <div className="space-y-3">
              <h3 className="text-[11px] font-semibold text-slate-600 uppercase tracking-widest">
                Question Review
              </h3>
              {questions.map((q, qi) => {
                const ans = result.answers.find((a) => a.questionId === q.id);
                const correct = ans?.isCorrect;
                return (
                  <div
                    key={q.id}
                    className={[
                      "rounded-2xl border p-5 space-y-3",
                      correct
                        ? "border-emerald-500/25 bg-emerald-500/5"
                        : "border-rose-500/25 bg-rose-500/5",
                    ].join(" ")}
                  >
                    <div className="flex items-start gap-2.5">
                      {correct ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      ) : (
                        <XCircle className="h-4 w-4 text-rose-400 mt-0.5 flex-shrink-0" />
                      )}
                      <div className="space-y-2 flex-1 min-w-0">
                        <p className="text-sm font-medium text-white leading-snug">
                          Q{qi + 1}. {q.question}
                        </p>
                        <div className="text-xs space-y-1">
                          <p>
                            <span className="text-slate-600">Your answer: </span>
                            <span className={correct ? "text-emerald-400" : "text-rose-400 font-medium"}>
                              {ans?.selectedAnswer || "Not answered"}
                            </span>
                            <span className={`ml-1.5 font-semibold ${correct ? "text-emerald-400" : "text-rose-400"}`}>
                              ({correct ? "Correct" : "Incorrect"})
                            </span>
                          </p>
                          {!correct && (
                            <p>
                              <span className="text-slate-600">Correct answer: </span>
                              <span className="text-emerald-400 font-medium">{q.correctAnswer}</span>
                            </p>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 bg-white/[0.03] rounded-xl p-3 leading-relaxed">
                          {q.explanation}
                        </p>
                        {!correct && (
                          <Link
                            href={`${moduleUrl}#${q.lessonId}`}
                            className="text-xs text-[#8A9A5B] hover:text-[#C2B280] transition-colors inline-flex items-center gap-1"
                          >
                            Review: {module.title} → {q.lessonTitle}
                            <ChevronRight className="h-3 w-3" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Feedback rating */}
            <div className="rounded-2xl border border-white/[0.07] bg-slate-900/60 p-5">
              <EmojiRating label="Was this quiz helpful?" />
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={retake}
                className="flex items-center gap-2 text-sm border border-white/[0.09] text-slate-400 hover:text-slate-200 hover:border-white/[0.18] rounded-xl px-4 py-2.5 transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Retake Quiz
              </button>
              <GlassButton
                size="sm"
                glassColor="oklch(from #6366f1 l c h / 20%)"
                onClick={() => window.location.assign(guideUrl)}
                className="font-sans"
              >
                Back to Guide
              </GlassButton>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
