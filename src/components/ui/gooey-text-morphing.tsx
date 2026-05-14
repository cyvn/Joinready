"use client";

import * as React from "react";
import { cn } from "@/src/lib/utils";

interface GooeyTextProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
  textClassName?: string;
}

export function GooeyText({
  texts,
  morphTime = 1,
  cooldownTime = 0.25,
  className,
  textClassName,
}: GooeyTextProps) {
  const text1Ref = React.useRef<HTMLSpanElement>(null);
  const text2Ref = React.useRef<HTMLSpanElement>(null);
  const rafRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    let textIndex = texts.length - 1;
    let time = Date.now() / 1000;
    let morph = 0;
    let cooldown = cooldownTime;

    if (text1Ref.current) text1Ref.current.textContent = texts[textIndex % texts.length];
    if (text2Ref.current) text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];

    const setMorph = (fraction: number) => {
      const el1 = text1Ref.current;
      const el2 = text2Ref.current;
      if (!el1 || !el2) return;

      el2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      el2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      const f2 = 1 - fraction;
      el1.style.filter = `blur(${Math.min(8 / f2 - 8, 100)}px)`;
      el1.style.opacity = `${Math.pow(f2, 0.4) * 100}%`;
    };

    const doCooldown = () => {
      morph = 0;
      const el1 = text1Ref.current;
      const el2 = text2Ref.current;
      if (!el1 || !el2) return;
      el2.style.filter = "";
      el2.style.opacity = "100%";
      el1.style.filter = "";
      el1.style.opacity = "0%";
    };

    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);
      const now = Date.now() / 1000;
      const dt = now - time;
      time = now;

      const wasCooling = cooldown > 0;
      cooldown -= dt;

      if (cooldown <= 0) {
        if (wasCooling) {
          textIndex = (textIndex + 1) % texts.length;
          const el1 = text1Ref.current;
          const el2 = text2Ref.current;
          if (el1 && el2) {
            el1.textContent = texts[textIndex % texts.length];
            el2.textContent = texts[(textIndex + 1) % texts.length];
          }
        }
        morph -= cooldown; // cooldown is negative here
        cooldown = 0;
        let fraction = morph / morphTime;
        if (fraction > 1) {
          cooldown = cooldownTime;
          fraction = 1;
        }
        setMorph(fraction);
      } else {
        doCooldown();
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [texts, morphTime, cooldownTime]);

  return (
    <div className={cn("relative overflow-visible", className)}>
      {/* SVG filter — 20-value matrix threshold for gooey morphing */}
      <svg
        className="absolute h-0 w-0 overflow-hidden"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <filter id="gooey-threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="flex items-center justify-center overflow-visible"
        style={{ filter: "url(#gooey-threshold)" }}
      >
        <span
          ref={text1Ref}
          className={cn(
            "absolute inline-block select-none text-center whitespace-nowrap",
            textClassName
          )}
        />
        <span
          ref={text2Ref}
          className={cn(
            "absolute inline-block select-none text-center whitespace-nowrap",
            textClassName
          )}
        />
      </div>
    </div>
  );
}
