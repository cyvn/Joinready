"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { BookOpen, ChevronRight } from "lucide-react";
import { HoverBorderGradient } from "@/src/components/ui/hover-border-gradient";

export function EmptyGuideState() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center text-center py-28 space-y-6"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.03]">
        <BookOpen className="h-7 w-7 text-slate-600" />
      </div>

      <div className="space-y-2">
        <h2 className="font-display text-xl font-semibold text-white">No selection yet</h2>
        <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
          Choose a country and military branch on the homepage to open your personalized guide.
        </p>
      </div>

      <HoverBorderGradient
        as="button"
        onClick={() => router.push("/")}
        containerClassName="rounded-full border-white/[0.06] bg-transparent gap-0"
        className="bg-[#070d1c] text-white font-display font-semibold text-sm px-6 py-2.5 rounded-full flex items-center justify-center gap-1.5"
      >
        Choose Country &amp; Branch
        <ChevronRight className="h-4 w-4" />
      </HoverBorderGradient>
    </motion.div>
  );
}
