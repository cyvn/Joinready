"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ThumbsUp } from "lucide-react";
import { cn } from "@/src/lib/utils";

const LABELS = ["Poor", "Fair", "Good", "Great", "Excellent"];

interface EmojiRatingProps {
  onRate?: (rating: number) => void;
  label?: string;
}

export function EmojiRating({ onRate, label = "Was this module helpful?" }: EmojiRatingProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (index: number) => {
    setSelected(index);
    setSubmitted(true);
    onRate?.(index + 1);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2.5 text-sm"
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/30">
          <ThumbsUp className="h-3.5 w-3.5 text-emerald-400" />
        </div>
        <span className="text-slate-300">Thanks for your feedback!</span>
      </motion.div>
    );
  }

  const activeIndex = hovered ?? selected ?? -1;

  return (
    <div className="space-y-2.5">
      <p className="text-sm text-slate-400">{label}</p>
      <div className="flex items-center gap-0.5">
        {LABELS.map((lbl, i) => (
          <motion.button
            key={i}
            whileTap={{ scale: 0.8 }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleSelect(i)}
            title={lbl}
            aria-label={lbl}
            className="p-1.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8A9A5B] transition-transform"
          >
            <Star
              className={cn(
                "h-5 w-5 transition-all duration-100",
                i <= activeIndex
                  ? "text-amber-400 fill-amber-400"
                  : "text-slate-600 fill-transparent"
              )}
            />
          </motion.button>
        ))}
        <AnimatedLabel label={activeIndex >= 0 ? LABELS[activeIndex] : null} />
      </div>
    </div>
  );
}

function AnimatedLabel({ label }: { label: string | null }) {
  return (
    <motion.span
      key={label}
      initial={{ opacity: 0, x: -4 }}
      animate={{ opacity: label ? 1 : 0, x: 0 }}
      className="ml-2 text-xs text-slate-500 min-w-[50px]"
    >
      {label}
    </motion.span>
  );
}
