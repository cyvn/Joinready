"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckSquare, Square } from "lucide-react";

interface Props {
  items: string[];
  moduleId: string;
}

export function ModuleChecklist({ items, moduleId }: Props) {
  const storageKey = `join-ready:checklist:${moduleId}`;

  const loadChecked = (): Set<number> => {
    if (typeof window === "undefined") return new Set();
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? new Set(JSON.parse(raw) as number[]) : new Set();
    } catch {
      return new Set();
    }
  };

  const [checked, setChecked] = useState<Set<number>>(loadChecked);

  const toggle = (idx: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      try {
        localStorage.setItem(storageKey, JSON.stringify(Array.from(next)));
      } catch {}
      return next;
    });
  };

  return (
    <div className="space-y-1.5">
      {items.map((item, idx) => (
        <motion.button
          key={idx}
          onClick={() => toggle(idx)}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-start gap-3 text-left rounded-lg p-3 hover:bg-slate-800/60 transition-colors"
          aria-label={item}
          aria-checked={checked.has(idx)}
          role="checkbox"
        >
          <span className="mt-0.5 flex-shrink-0">
            {checked.has(idx) ? (
              <CheckSquare className="h-4 w-4 text-emerald-400" />
            ) : (
              <Square className="h-4 w-4 text-slate-600" />
            )}
          </span>
          <span className={`text-sm transition-colors ${checked.has(idx) ? "line-through text-slate-600" : "text-slate-300"}`}>
            {item}
          </span>
        </motion.button>
      ))}
      <p className="text-xs text-slate-600 pt-1 pl-1">
        {checked.size}/{items.length} checked
      </p>
    </div>
  );
}
