"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  CheckCircle2,
  BookOpen,
  Target,
  Dumbbell,
  Plane,
  Cpu,
  Users,
  Shield,
  ArrowRight,
} from "lucide-react";
import { AnimatedPage } from "@/src/components/AnimatedPage";
import { HoverBorderGradient } from "@/src/components/ui/hover-border-gradient";
import { cn } from "@/src/lib/utils";

// ─── Quiz data ────────────────────────────────────────────────────────────────

interface Question {
  id: number;
  question: string;
  answers: string[];
  scores: Record<number, Partial<Scores>>; // answer index → score deltas
}

interface Scores {
  physical: number;
  combat: number;
  technical: number;
  medical: number;
  travel: number;
  structure: number;
  intel: number;
}

const ZERO_SCORES: Scores = { physical: 0, combat: 0, technical: 0, medical: 0, travel: 0, structure: 0, intel: 0 };

const QUESTIONS: Question[] = [
  {
    id: 0,
    question: "When you're under pressure or facing a high-stakes situation, you tend to:",
    answers: [
      "Stay calm and follow a clear process step by step",
      "Get a surge of energy — I work best under pressure",
      "Take a moment to think it through, then act steadily",
      "Feel overwhelmed — I prefer predictable situations",
    ],
    scores: {
      0: { structure: 2 },
      1: { combat: 2 },
      2: { intel: 1, technical: 1 },
      3: { structure: -1 },
    },
  },
  {
    id: 1,
    question: "How would you describe your current physical fitness level?",
    answers: [
      "Very active — I train or exercise daily",
      "Moderately active — a few times a week",
      "Lightly active — occasional walks or activity",
      "Just starting to think about fitness",
    ],
    scores: {
      0: { physical: 3 },
      1: { physical: 2 },
      2: { physical: 1 },
      3: { physical: 0 },
    },
  },
  {
    id: 2,
    question: "Which best describes your fitness background?",
    answers: [
      "Team sports — football, rugby, basketball, etc.",
      "Individual endurance — running, cycling, swimming",
      "Gym or strength training",
      "No structured background",
    ],
    scores: {
      0: { physical: 1, combat: 1 },
      1: { physical: 2 },
      2: { physical: 1 },
      3: {},
    },
  },
  {
    id: 3,
    question: "How do you feel about being away from home for extended periods — weeks or months at a time?",
    answers: [
      "Excited — I actively want to see and experience the world",
      "Open to it with some adjustment",
      "I'd prefer assignments that keep me closer to home",
      "I'm unsure — depends on the circumstances",
    ],
    scores: {
      0: { travel: 3 },
      1: { travel: 2 },
      2: { travel: 0 },
      3: { travel: 1 },
    },
  },
  {
    id: 4,
    question: "Which type of work interests you most?",
    answers: [
      "Engineering, technology, or complex systems",
      "Medical, health, or caring for others",
      "Field operations, direct action, or combat roles",
      "Intelligence, analysis, cyber, or surveillance",
    ],
    scores: {
      0: { technical: 3 },
      1: { medical: 3 },
      2: { combat: 3 },
      3: { intel: 3, technical: 1 },
    },
  },
  {
    id: 5,
    question: "How important is access to education, training, or qualifications?",
    answers: [
      "Very important — funded education is a key reason I'm considering this",
      "Important, but not the only factor",
      "I'm mainly looking for experience and practical skills",
      "I already have a degree or relevant qualifications",
    ],
    scores: {
      0: { structure: 1 },
      1: {},
      2: { combat: 1 },
      3: { technical: 1 },
    },
  },
  {
    id: 6,
    question: "How do you feel about strict rules, hierarchy, and structured routines?",
    answers: [
      "I thrive in them — structure helps me perform",
      "Generally comfortable — it takes getting used to but works for me",
      "I can adapt, but I need some flexibility",
      "I strongly prefer autonomy and flexibility",
    ],
    scores: {
      0: { structure: 3 },
      1: { structure: 2 },
      2: { structure: 1 },
      3: { structure: -1 },
    },
  },
  {
    id: 7,
    question: "Do you prefer working as part of a team or independently?",
    answers: [
      "Strongly team-oriented — I do my best work with others",
      "A mix of both, depending on the task",
      "Mostly independent — I prefer working on my own",
      "I prefer leading a team rather than following",
    ],
    scores: {
      0: { combat: 1, medical: 1 },
      1: {},
      2: { intel: 1, technical: 1 },
      3: { structure: 1, combat: 1 },
    },
  },
  {
    id: 8,
    question: "How comfortable are you with physical risk or potentially hazardous situations?",
    answers: [
      "Very comfortable — I actively want that challenge",
      "Comfortable with the right training and preparation",
      "I'd prefer a support, logistics, or back-line role",
      "I want to contribute without direct physical risk",
    ],
    scores: {
      0: { combat: 3 },
      1: { combat: 1 },
      2: { medical: 1 },
      3: { medical: 2, technical: 1 },
    },
  },
  {
    id: 9,
    question: "How interested are you in working with advanced technology, systems, or equipment?",
    answers: [
      "Very interested — technology is a major draw for me",
      "Somewhat interested — I'd learn what I need to",
      "Neutral — it doesn't define my preference",
      "I prefer hands-on physical or people-facing roles",
    ],
    scores: {
      0: { technical: 3, intel: 1 },
      1: { technical: 1 },
      2: {},
      3: { combat: 1, medical: 1 },
    },
  },
  {
    id: 10,
    question: "Are you open to learning or regularly using a second language?",
    answers: [
      "Yes — languages interest me and I'd pursue them",
      "Open to it if it's part of the role",
      "I'd prefer to work in my native language",
      "I already speak a second language",
    ],
    scores: {
      0: { intel: 2 },
      1: { intel: 1 },
      2: {},
      3: { intel: 3 },
    },
  },
  {
    id: 11,
    question: "What is your biggest concern about committing to military service?",
    answers: [
      "Meeting the physical requirements",
      "The length of the commitment",
      "Being away from family and friends",
      "Career prospects and stability after leaving",
    ],
    scores: {
      0: { physical: -1 },
      1: { structure: -1 },
      2: { travel: -1 },
      3: {},
    },
  },
  {
    id: 12,
    question: "What matters most to you about life after your service commitment?",
    answers: [
      "Transferable skills and recognised qualifications",
      "Stability — pension, housing support, or long-term benefits",
      "Using service as a foundation for a civilian career",
      "The experience and personal growth matter most",
    ],
    scores: {
      0: { technical: 1 },
      1: { structure: 1 },
      2: {},
      3: { combat: 1, travel: 1 },
    },
  },
];

// ─── Scoring ──────────────────────────────────────────────────────────────────

function computeScores(answers: Record<number, number>): Scores {
  const s = { ...ZERO_SCORES };
  QUESTIONS.forEach((q) => {
    const chosen = answers[q.id];
    if (chosen === undefined) return;
    const delta = q.scores[chosen] ?? {};
    (Object.keys(delta) as (keyof Scores)[]).forEach((k) => {
      s[k] += delta[k] ?? 0;
    });
  });
  return s;
}

interface ResultProfile {
  traits: string[];
  branchCategories: Array<{ label: string; reason: string }>;
  modules: string[];
  priorities: string[];
}

function buildResults(s: Scores): ResultProfile {
  const traits: string[] = [];
  const branchCategories: Array<{ label: string; reason: string }> = [];
  const modules: string[] = [];
  const priorities: string[] = [];

  // Traits
  if (s.physical >= 4) traits.push("Physically active");
  else traits.push("Building physical readiness");
  if (s.combat >= 4) traits.push("Drawn to field operations");
  else if (s.technical >= 4) traits.push("Technically oriented");
  else if (s.medical >= 4) traits.push("Care and support focused");
  else if (s.intel >= 4) traits.push("Analytically driven");
  else traits.push("Exploring options");
  if (s.travel >= 3) traits.push("Open to international deployment");
  else traits.push("Prefers home-based assignments");
  if (s.structure >= 4) traits.push("Comfortable with structure and hierarchy");

  // Branch categories
  if (s.combat >= 4 && s.physical >= 3) {
    branchCategories.push({ label: "Infantry / Ground Forces", reason: "Suits your comfort with physical challenge and field operations." });
  }
  if (s.combat >= 5 && s.physical >= 4 && s.travel >= 2) {
    branchCategories.push({ label: "Special Operations", reason: "May be worth researching if you want elite field roles — fitness demands are high." });
  }
  if (s.technical >= 4) {
    branchCategories.push({ label: "Technical / Engineering Corps", reason: "Aligns with your interest in technology and complex systems." });
  }
  if (s.intel >= 4) {
    branchCategories.push({ label: "Intelligence / Cyber Branches", reason: "Your analytical inclination and language interest suit these roles well." });
  }
  if (s.medical >= 3) {
    branchCategories.push({ label: "Medical / Healthcare Corps", reason: "Matches your interest in support and care-focused roles." });
  }
  if (s.travel >= 3) {
    branchCategories.push({ label: "Naval / Maritime Forces", reason: "If travel and sea-based operations interest you, this may be worth exploring." });
  }
  if (s.technical >= 3 && s.travel >= 2) {
    branchCategories.push({ label: "Air Force / Aviation", reason: "Combines technical systems with the opportunity for international exposure." });
  }
  // Fallback
  if (branchCategories.length === 0) {
    branchCategories.push({ label: "General Entry / Infantry", reason: "A good starting point — most branches offer diverse paths after initial service." });
  }

  // Modules
  if (s.physical < 3) {
    modules.push("Physical Preparation — fitness standards vary by branch; this module helps you understand what's expected.");
    priorities.push("Start a consistent fitness routine before applying.");
  }
  modules.push("Eligibility & Requirements — understand what each branch requires before you commit.");
  if (s.technical >= 3 || s.intel >= 3) {
    modules.push("Career Paths — explore which technical or specialist roles may be available to you.");
  }
  if (s.travel <= 1) {
    modules.push("Lifestyle & Deployment — understand what home-base options and posting rotations typically look like.");
  }
  modules.push("Questions to Ask a Recruiter — go into any recruiter conversation prepared and informed.");

  // Priorities
  if (s.structure < 2) priorities.push("Research what daily military life looks like — structure is a significant adjustment.");
  if (s.travel < 1) priorities.push("Explore which branches offer more domestic-based postings.");
  priorities.push("Verify eligibility requirements for your country and chosen branch before committing to anything.");
  priorities.push("Use the free guide to research at your own pace before speaking to a recruiter.");

  return {
    traits: traits.slice(0, 4),
    branchCategories: branchCategories.slice(0, 4),
    modules: modules.slice(0, 4),
    priorities: priorities.slice(0, 4),
  };
}

// ─── Components ───────────────────────────────────────────────────────────────

function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full space-y-1.5">
      <div className="flex justify-between text-[10px] text-slate-500">
        <span>Question {current} of {total}</span>
        <span>{pct}%</span>
      </div>
      <div className="h-[3px] w-full rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#6F8F3E] to-[#8A9A5B]"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="max-w-xl w-full text-center space-y-6 sm:space-y-8"
    >
      <div className="space-y-3">
        <h1 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
          Ready to start?
        </h1>
        <p className="text-slate-400 text-[15px] leading-relaxed max-w-sm mx-auto">
          13 questions covering your goals, interests, fitness, and values. Takes around 3–4 minutes.
        </p>
        <p className="text-[12px] text-slate-600 leading-relaxed">
          This quiz helps you explore options — it does not make decisions for you,
          and does not involve any recruiter contact.
        </p>
      </div>

      <div className="space-y-2 flex flex-col items-center">
        <HoverBorderGradient
          as="button"
          onClick={onStart}
          containerClassName="rounded-full border-transparent bg-transparent gap-0"
          className="bg-[#6F8F3E] hover:bg-[#8A9A5B] text-white font-display font-semibold text-base px-8 py-3.5 rounded-full flex items-center gap-2 transition-colors shadow-lg shadow-[#6F8F3E]/20"
        >
          I am ready
          <ArrowRight className="h-4 w-4" />
        </HoverBorderGradient>
        <p className="text-[11px] text-slate-600">No account required</p>
      </div>
    </motion.div>
    </div>
  );
}

function QuestionScreen({
  question,
  index,
  total,
  selectedAnswer,
  onAnswer,
  onNext,
  onBack,
}: {
  question: Question;
  index: number;
  total: number;
  selectedAnswer: number | undefined;
  onAnswer: (i: number) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="max-w-xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-6 sm:space-y-8"
    >
      <ProgressBar current={index + 1} total={total} />

      <div className="space-y-6">
        <h2 className="font-display text-xl font-semibold text-white leading-snug">
          {question.question}
        </h2>

        <div className="space-y-2.5">
          {question.answers.map((answer, i) => (
            <motion.button
              key={i}
              onClick={() => onAnswer(i)}
              whileTap={{ scale: 0.99 }}
              className={cn(
                "w-full text-left px-4 py-3.5 rounded-xl border text-sm transition-all duration-150 group",
                selectedAnswer === i
                  ? "border-[#8A9A5B]/50 bg-[#8A9A5B]/[0.12] text-white"
                  : "border-[rgba(194,178,128,0.08)] bg-white/[0.02] text-slate-400 hover:border-[rgba(138,154,91,0.30)] hover:bg-[#10160F] hover:text-slate-300"
              )}
            >
              <div className="flex items-center gap-3">
                <div className={cn(
                  "flex-shrink-0 h-4 w-4 rounded-full border-2 transition-all",
                  selectedAnswer === i
                    ? "border-[#8A9A5B] bg-[#8A9A5B]"
                    : "border-white/[0.2] bg-transparent group-hover:border-white/[0.35]"
                )}>
                  {selectedAnswer === i && (
                    <div className="h-full w-full rounded-full flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    </div>
                  )}
                </div>
                <span className="leading-snug">{answer}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-2">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </button>
        <button
          onClick={onNext}
          disabled={selectedAnswer === undefined}
          className={cn(
            "inline-flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-full transition-all",
            selectedAnswer !== undefined
              ? "bg-[#6F8F3E] hover:bg-[#8A9A5B] text-white shadow-lg shadow-[#6F8F3E]/20 border border-[rgba(138,154,91,0.35)] hover:border-[rgba(138,154,91,0.6)]"
              : "bg-white/[0.04] text-slate-600 cursor-not-allowed border border-transparent"
          )}
        >
          {index === total - 1 ? "See my results" : "Next"}
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
}

function ResultsScreen({ answers, onRetake }: { answers: Record<number, number>; onRetake: () => void }) {
  const scores = computeScores(answers);
  const results = buildResults(scores);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-6 sm:space-y-8"
    >
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="flex justify-center mb-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 border border-emerald-500/25">
            <CheckCircle2 className="h-6 w-6 text-emerald-400" />
          </div>
        </div>
        <h2 className="font-display text-2xl font-bold text-white tracking-tight">Your Profile</h2>
        <p className="text-sm text-slate-400">Based on your answers — use this as a starting point for research, not a final answer.</p>
      </div>

      {/* Traits */}
      <div className="rounded-2xl border border-[rgba(194,178,128,0.08)] bg-[#10160F] p-5 space-y-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">Your Traits</p>
        <div className="flex flex-wrap gap-2">
          {results.traits.map((t) => (
            <span key={t} className="text-[12px] bg-[#8A9A5B]/[0.12] border border-[#8A9A5B]/[0.2] text-[#C2B280] px-3 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Branch categories */}
      <div className="rounded-2xl border border-[rgba(194,178,128,0.08)] bg-[#10160F] p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4 text-[#8A9A5B]" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">Branch Categories to Explore</p>
        </div>
        <div className="space-y-3">
          {results.branchCategories.map((bc) => (
            <div key={bc.label} className="space-y-0.5">
              <p className="text-[13px] font-semibold text-white">{bc.label}</p>
              <p className="text-[12px] text-slate-400 leading-relaxed">{bc.reason}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Guide modules */}
      <div className="rounded-2xl border border-[rgba(194,178,128,0.08)] bg-[#10160F] p-5 space-y-3">
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-[#8A9A5B]" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">Guide Modules to Focus On</p>
        </div>
        <ul className="space-y-2">
          {results.modules.map((m) => (
            <li key={m} className="flex items-start gap-2.5 text-[12px] text-slate-400 leading-relaxed">
              <span className="text-[#8A9A5B] flex-shrink-0 font-bold mt-px">·</span>
              {m}
            </li>
          ))}
        </ul>
      </div>

      {/* Preparation priorities */}
      <div className="rounded-2xl border border-[rgba(194,178,128,0.08)] bg-[#10160F] p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Target className="h-4 w-4 text-[#8A9A5B]" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">Preparation Priorities</p>
        </div>
        <ul className="space-y-2">
          {results.priorities.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-[12px] text-slate-400 leading-relaxed">
              <span className="text-emerald-400 flex-shrink-0 font-bold mt-px">✓</span>
              {p}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <HoverBorderGradient
          as="div"
          containerClassName="flex-1 rounded-full border-transparent bg-transparent gap-0"
          className="w-full bg-[#6F8F3E] hover:bg-[#8A9A5B] text-white font-display font-semibold text-sm px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#6F8F3E]/20 group"
        >
          <Link href="/" className="flex items-center gap-2">
            Explore My Guide
            <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </HoverBorderGradient>
        <button
          onClick={onRetake}
          className="inline-flex items-center justify-center gap-2 border border-[rgba(194,178,128,0.08)] bg-white/[0.03] hover:bg-[#10160F] hover:border-[rgba(138,154,91,0.25)] text-slate-400 hover:text-white text-sm font-medium px-6 py-3 rounded-full transition-all"
        >
          <RotateCcw className="h-4 w-4" />
          Retake Quiz
        </button>
      </div>

      <p className="text-center text-[11px] text-slate-600 leading-relaxed">
        These suggestions are for research purposes only. Join Ready is an independent educational resource
        and is not affiliated with any military branch or recruiting organisation.
      </p>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

type Phase = "intro" | "questions" | "results";

export default function QuizPage() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const handleStart = () => setPhase("questions");

  const handleAnswer = (answerIndex: number) => {
    setAnswers((prev) => ({ ...prev, [currentQ]: answerIndex }));
  };

  const handleNext = () => {
    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ((q) => q + 1);
    } else {
      setPhase("results");
    }
  };

  const handleBack = () => {
    if (currentQ === 0) {
      setPhase("intro");
    } else {
      setCurrentQ((q) => q - 1);
    }
  };

  const handleRetake = () => {
    setPhase("intro");
    setCurrentQ(0);
    setAnswers({});
  };

  return (
    <AnimatedPage>
      <div className="bg-[#070A08] min-h-screen">
        {/* Subtle glow */}
        <div className="fixed inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#6F8F3E]/[0.07] rounded-full blur-3xl" />
        </div>

        <AnimatePresence mode="wait">
          {phase === "intro" && (
            <IntroScreen key="intro" onStart={handleStart} />
          )}
          {phase === "questions" && (
            <QuestionScreen
              key={`q-${currentQ}`}
              question={QUESTIONS[currentQ]}
              index={currentQ}
              total={QUESTIONS.length}
              selectedAnswer={answers[currentQ]}
              onAnswer={handleAnswer}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {phase === "results" && (
            <ResultsScreen key="results" answers={answers} onRetake={handleRetake} />
          )}
        </AnimatePresence>
      </div>
    </AnimatedPage>
  );
}
