import type { GuideProgress, ModuleProgress, QuizResult } from "@/src/types/guide";

const KEYS = {
  COUNTRY: "join-ready:selected-country",
  BRANCH: "join-ready:selected-branch",
  GUIDE_PROGRESS: "join-ready:guide-progress",
  QUIZ_RESULTS: "join-ready:quiz-results",
} as const;

function safeGet<T>(key: string): T | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function safeSet(key: string, value: unknown): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage quota exceeded or unavailable
  }
}

// ─── Selection persistence ────────────────────────────────────────────────────

export function saveSelection(country: string, branch: string): void {
  safeSet(KEYS.COUNTRY, country);
  safeSet(KEYS.BRANCH, branch);
}

export function loadSelection(): { country: string; branch: string } | null {
  const country = safeGet<string>(KEYS.COUNTRY);
  const branch = safeGet<string>(KEYS.BRANCH);
  if (country && branch) return { country, branch };
  return null;
}

// ─── Guide progress ───────────────────────────────────────────────────────────

function getProgressKey(country: string, branch: string): string {
  return `${KEYS.GUIDE_PROGRESS}:${country}:${branch}`;
}

export function loadGuideProgress(country: string, branch: string): GuideProgress {
  const key = getProgressKey(country, branch);
  const saved = safeGet<GuideProgress>(key);
  if (saved) return saved;
  return { country, branch, modules: [], lastUpdated: new Date().toISOString() };
}

export function saveGuideProgress(progress: GuideProgress): void {
  const key = getProgressKey(progress.country, progress.branch);
  safeSet(key, { ...progress, lastUpdated: new Date().toISOString() });
}

export function getModuleProgress(
  country: string,
  branch: string,
  moduleId: string
): ModuleProgress {
  const progress = loadGuideProgress(country, branch);
  return (
    progress.modules.find((m) => m.moduleId === moduleId) ?? {
      moduleId,
      completedLessons: [],
      quizCompleted: false,
      quizAttempts: 0,
    }
  );
}

export function markLessonComplete(
  country: string,
  branch: string,
  moduleId: string,
  lessonId: string
): void {
  const progress = loadGuideProgress(country, branch);
  let modProg = progress.modules.find((m) => m.moduleId === moduleId);
  if (!modProg) {
    modProg = { moduleId, completedLessons: [], quizCompleted: false, quizAttempts: 0 };
    progress.modules.push(modProg);
  }
  if (!modProg.completedLessons.includes(lessonId)) {
    modProg.completedLessons.push(lessonId);
  }
  saveGuideProgress(progress);
}

export function markQuizComplete(
  country: string,
  branch: string,
  moduleId: string,
  score: number
): void {
  const progress = loadGuideProgress(country, branch);
  let modProg = progress.modules.find((m) => m.moduleId === moduleId);
  if (!modProg) {
    modProg = { moduleId, completedLessons: [], quizCompleted: false, quizAttempts: 0 };
    progress.modules.push(modProg);
  }
  modProg.quizCompleted = true;
  modProg.quizScore = score;
  modProg.quizAttempts = (modProg.quizAttempts || 0) + 1;
  saveGuideProgress(progress);
}

export function countCompletedModules(
  country: string,
  branch: string,
  totalModules: number
): { completed: number; total: number } {
  const progress = loadGuideProgress(country, branch);
  const completed = progress.modules.filter((m) => m.quizCompleted).length;
  return { completed, total: totalModules };
}

// ─── Quiz results ─────────────────────────────────────────────────────────────

function getQuizResultsKey(country: string, branch: string): string {
  return `${KEYS.QUIZ_RESULTS}:${country}:${branch}`;
}

export function saveQuizResult(country: string, branch: string, result: QuizResult): void {
  const key = getQuizResultsKey(country, branch);
  const existing = safeGet<QuizResult[]>(key) ?? [];
  const updated = existing.filter((r) => r.moduleId !== result.moduleId);
  updated.push(result);
  safeSet(key, updated);
}

export function loadQuizResult(
  country: string,
  branch: string,
  moduleId: string
): QuizResult | null {
  const key = getQuizResultsKey(country, branch);
  const results = safeGet<QuizResult[]>(key) ?? [];
  return results.find((r) => r.moduleId === moduleId) ?? null;
}
