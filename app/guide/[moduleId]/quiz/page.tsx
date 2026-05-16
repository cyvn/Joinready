import { Suspense } from "react";
import { guideModules } from "@/src/data/guide-modules";
import { QuizContent } from "./_quiz-content";

export function generateStaticParams() {
  return guideModules.map((module) => ({
    moduleId: module.id,
  }));
}

export default function QuizPage({ params }: { params: { moduleId: string } }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#070A08] flex items-center justify-center">
          <div className="h-6 w-6 rounded-full border-2 border-[#8A9A5B] border-t-transparent animate-spin" />
        </div>
      }
    >
      <QuizContent moduleId={params.moduleId} />
    </Suspense>
  );
}
