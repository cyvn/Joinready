"use client";

import { motion } from "framer-motion";

function FloatingPath({ d, duration, delay }: { d: string; duration: number; delay: number }) {
  return (
    <motion.path
      d={d}
      fill="none"
      strokeWidth={1.2}
      stroke="currentColor"
      strokeOpacity={0.12}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration, delay, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
    />
  );
}

export function BackgroundPaths({ className = "" }: { className?: string }) {
  const paths = [
    "M-200 300 C 100 100, 400 500, 800 200",
    "M0 500 C 200 200, 600 400, 1000 100",
    "M100 600 C 300 300, 700 500, 1100 200",
    "M-100 400 C 200 100, 500 600, 900 300",
    "M50 700 C 250 400, 650 600, 1050 300",
    "M200 800 C 400 500, 800 700, 1200 400",
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full text-blue-400/30 dark:text-blue-300/20"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        {paths.map((d, i) => (
          <FloatingPath
            key={i}
            d={d}
            duration={8 + i * 1.5}
            delay={i * 0.8}
          />
        ))}
      </svg>
    </div>
  );
}
