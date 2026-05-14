"use client";

/**
 * Canvas-only wave background extracted from GlowyWavesHero (moumensoliman/glowy-waves-hero-shadcnui).
 * Reads CSS variables --background, --muted, --primary, --accent, --secondary, --foreground,
 * --primary-foreground to determine wave and background colours.
 */

import { useEffect, useRef } from "react";

type Point = { x: number; y: number };
interface WaveConfig {
  offset: number;
  amplitude: number;
  frequency: number;
  color: string;
  opacity: number;
}

function resolveColor(variable: string, fallback: string, alpha = 1): string {
  const el = document.createElement("div");
  el.style.cssText = "position:absolute;visibility:hidden;width:1px;height:1px;";
  el.style.backgroundColor = `var(${variable}, ${fallback})`;
  document.body.appendChild(el);
  const computed = getComputedStyle(el).backgroundColor;
  document.body.removeChild(el);

  if (!computed || computed === "rgba(0, 0, 0, 0)") return `rgba(99,102,241,${alpha})`;
  if (alpha < 1) {
    const m = computed.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (m) return `rgba(${m[1]},${m[2]},${m[3]},${alpha})`;
  }
  return computed;
}

function buildPalette(): WaveConfig[] {
  return [
    { offset: 0,            amplitude: 75,  frequency: 0.0030, color: resolveColor("--primary",          "#6366f1", 0.80), opacity: 0.45 },
    { offset: Math.PI/2,    amplitude: 95,  frequency: 0.0026, color: resolveColor("--accent",           "#818cf8", 0.70), opacity: 0.38 },
    { offset: Math.PI,      amplitude: 60,  frequency: 0.0034, color: resolveColor("--secondary",        "#4338ca", 0.65), opacity: 0.30 },
    { offset: Math.PI*1.5,  amplitude: 80,  frequency: 0.0022, color: resolveColor("--primary-foreground","#e0e7ff", 0.20), opacity: 0.20 },
    { offset: Math.PI*2,    amplitude: 50,  frequency: 0.0042, color: resolveColor("--foreground",       "#f1f5f9", 0.15), opacity: 0.15 },
  ];
}

export function WavesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<Point>({ x: 0, y: 0 });
  const targetRef = useRef<Point>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let time = 0;
    const palette = buildPalette();

    const bgTop    = resolveColor("--background", "#020617", 1);
    const bgBottom = resolveColor("--muted",      "#0f172a", 0.95);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouseInfluence  = reduced ? 10  : 65;
    const influenceRadius = reduced ? 160 : 300;
    const smoothing       = reduced ? 0.04 : 0.10;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      const c = { x: canvas.width / 2, y: canvas.height / 2 };
      mouseRef.current = { ...c };
      targetRef.current = { ...c };
    };

    const onMove  = (e: MouseEvent) => { targetRef.current = { x: e.clientX, y: e.clientY }; };
    const onLeave = () => {
      targetRef.current = { x: canvas.width / 2, y: canvas.height / 2 };
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    const drawWave = (wave: WaveConfig) => {
      ctx.save();
      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += 4) {
        const dx = x - mouseRef.current.x;
        const dy = canvas.height / 2 - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const inf  = Math.max(0, 1 - dist / influenceRadius);
        const me   = inf * mouseInfluence * Math.sin(time * 0.001 + x * 0.01 + wave.offset);
        const y    =
          canvas.height / 2 +
          Math.sin(x * wave.frequency + time * 0.002 + wave.offset) * wave.amplitude +
          Math.sin(x * wave.frequency * 0.4 + time * 0.003) * (wave.amplitude * 0.45) +
          me;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.lineWidth    = 2.5;
      ctx.strokeStyle  = wave.color;
      ctx.globalAlpha  = wave.opacity;
      ctx.shadowBlur   = 30;
      ctx.shadowColor  = wave.color;
      ctx.stroke();
      ctx.restore();
    };

    const loop = () => {
      time += 1;
      mouseRef.current.x += (targetRef.current.x - mouseRef.current.x) * smoothing;
      mouseRef.current.y += (targetRef.current.y - mouseRef.current.y) * smoothing;

      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0, bgTop);
      grad.addColorStop(1, bgBottom);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalAlpha = 1;
      ctx.shadowBlur  = 0;
      palette.forEach(drawWave);

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
