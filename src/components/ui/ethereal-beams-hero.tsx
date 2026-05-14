"use client";

import { motion } from "framer-motion";

interface BeamConfig {
  rotate: number;
  opacity: number;
  delay: number;
  widthPx: number;
  heightPx: number;
  color?: string;
}

const BEAMS: BeamConfig[] = [
  { rotate: -72, opacity: 0.07, delay: 0.0,  widthPx: 1,   heightPx: 480 },
  { rotate: -58, opacity: 0.13, delay: 0.08, widthPx: 1.5, heightPx: 580 },
  { rotate: -44, opacity: 0.20, delay: 0.04, widthPx: 1,   heightPx: 680 },
  { rotate: -28, opacity: 0.28, delay: 0.18, widthPx: 2,   heightPx: 760, color: "99,102,241" },
  { rotate: -12, opacity: 0.32, delay: 0.12, widthPx: 1.5, heightPx: 820, color: "99,102,241" },
  { rotate:   4, opacity: 0.28, delay: 0.0,  widthPx: 1,   heightPx: 800, color: "99,102,241" },
  { rotate:  18, opacity: 0.24, delay: 0.16, widthPx: 2,   heightPx: 740, color: "99,102,241" },
  { rotate:  32, opacity: 0.18, delay: 0.06, widthPx: 1.5, heightPx: 660 },
  { rotate:  48, opacity: 0.12, delay: 0.14, widthPx: 1,   heightPx: 560 },
  { rotate:  64, opacity: 0.07, delay: 0.22, widthPx: 1,   heightPx: 460 },
];

function Beam({ rotate, opacity, delay, widthPx, heightPx, color = "99,102,241" }: BeamConfig) {
  return (
    <motion.div
      className="absolute top-0 left-1/2 origin-top pointer-events-none"
      style={{
        rotate: `${rotate}deg`,
        width: `${widthPx}px`,
        height: `${heightPx}px`,
        marginLeft: `-${widthPx / 2}px`,
        background: `linear-gradient(to bottom, rgba(${color},${Math.min(opacity * 3, 0.9)}), rgba(${color},${opacity}), transparent)`,
      }}
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{ delay, duration: 2.0, ease: [0.23, 0.86, 0.39, 0.96] }}
    />
  );
}

export function EtherealBeamsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Primary radial glow at beam origin */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-indigo-900/[0.18] rounded-full blur-3xl" />
      <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[250px] h-[250px] bg-indigo-600/[0.14] rounded-full blur-2xl" />
      <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-[80px] h-[80px] bg-indigo-400/[0.08] rounded-full blur-xl" />

      {/* Beams */}
      {BEAMS.map((beam, i) => (
        <Beam key={i} {...beam} />
      ))}

      {/* Side ambient glows */}
      <div className="absolute top-[20%] left-[-5%] w-[300px] h-[400px] bg-indigo-900/[0.06] rounded-full blur-3xl" />
      <div className="absolute top-[30%] right-[-5%] w-[300px] h-[400px] bg-violet-900/[0.06] rounded-full blur-3xl" />

      {/* Vignette — fade from dark edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,transparent_40%,#020617_100%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#020617] to-transparent" />
    </div>
  );
}
