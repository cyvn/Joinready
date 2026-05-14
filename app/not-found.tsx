"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { GlassButton } from "@/src/components/ui/apple-tahoe-liquid-glass-button";
import { Home } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 space-y-6"
    >
      <h1 className="font-display text-7xl font-bold text-white/[0.06] tracking-tight select-none">
        404
      </h1>
      <div className="space-y-2">
        <h2 className="font-display text-xl font-semibold text-white">Page not found</h2>
        <p className="text-sm text-slate-500">The page you were looking for does not exist.</p>
      </div>
      <GlassButton
        glassColor="oklch(from #6366f1 l c h / 20%)"
        onClick={() => router.push("/")}
      >
        <Home className="h-4 w-4" />
        Back to Home
      </GlassButton>
    </motion.div>
  );
}
