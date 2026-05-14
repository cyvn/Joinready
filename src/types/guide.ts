export type LessonSection = {
  heading: string;
  body: string;
};

export type GuideLesson = {
  id: string;
  title: string;
  summary: string;
  sections: LessonSection[];
  checklistItems: string[];
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  lessonId: string;
  lessonTitle: string;
};

export type GuideModule = {
  id: string;
  title: string;
  description: string;
  lessons: GuideLesson[];
  quiz: QuizQuestion[];
  pdfSlug: string;
};

export type ModuleProgress = {
  moduleId: string;
  completedLessons: string[];
  quizCompleted: boolean;
  quizScore?: number;
  quizAttempts: number;
};

export type GuideProgress = {
  country: string;
  branch: string;
  modules: ModuleProgress[];
  lastUpdated: string;
};

export type QuizAnswer = {
  questionId: string;
  selectedAnswer: string;
  isCorrect: boolean;
};

export type QuizResult = {
  moduleId: string;
  answers: QuizAnswer[];
  score: number;
  total: number;
  completedAt: string;
};
