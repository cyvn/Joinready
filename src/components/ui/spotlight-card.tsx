"use client";

import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/src/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(99,102,241,0.08)",
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [focused, setFocused] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setFocused(true)}
      onMouseLeave={() => setFocused(false)}
      className={cn(
        "relative overflow-hidden rounded-xl border border-slate-700/50 bg-slate-900 transition-all duration-300",
        className
      )}
      style={{
        background: focused
          ? `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 60%), #0f172a`
          : "#0f172a",
      }}
    >
      {children}
    </div>
  );
}
