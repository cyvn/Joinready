"use client";

import { useEffect, useRef, useState } from "react";
import type { MilitaryBase } from "@/src/types/military";

interface GlobeProps {
  bases?: MilitaryBase[];
  className?: string;
  size?: number;
}

type Point = { x: number; y: number; z: number };

function latLonToXYZ(lat: number, lon: number, r: number): Point {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return {
    x: -r * Math.sin(phi) * Math.cos(theta),
    y: r * Math.cos(phi),
    z: r * Math.sin(phi) * Math.sin(theta),
  };
}

function rotateY(p: Point, angle: number): Point {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return { x: p.x * cos + p.z * sin, y: p.y, z: -p.x * sin + p.z * cos };
}

function project(p: Point, cx: number, cy: number, fov: number): { sx: number; sy: number; visible: boolean } {
  const visible = p.z > 0;
  const scale = fov / (fov + p.z);
  return { sx: cx + p.x * scale, sy: cy + p.y * scale, visible };
}

export function WireframeDottedGlobe({ bases = [], className = "", size = 260 }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const angleRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const r = size * 0.38;
    const fov = r * 2.8;

    const gridDots: { lat: number; lon: number }[] = [];
    for (let lat = -80; lat <= 80; lat += 15) {
      for (let lon = -180; lon <= 180; lon += 15) {
        gridDots.push({ lat, lon });
      }
    }

    const markerPositions = bases
      .filter((b) => b.latitude !== 0 || b.longitude !== 0)
      .map((b) => ({ lat: b.latitude, lon: b.longitude, name: b.name }));

    const draw = () => {
      ctx.clearRect(0, 0, size, size);
      const angle = angleRef.current;

      // grid dots
      for (const { lat, lon } of gridDots) {
        const raw = latLonToXYZ(lat, lon, r);
        const rotated = rotateY(raw, angle);
        const { sx, sy, visible } = project(rotated, cx, cy, fov);
        if (!visible) continue;
        const opacity = Math.max(0.05, (rotated.z / r) * 0.25);
        ctx.beginPath();
        ctx.arc(sx, sy, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96,165,250,${opacity})`;
        ctx.fill();
      }

      // base markers
      for (const m of markerPositions) {
        const raw = latLonToXYZ(m.lat, m.lon, r);
        const rotated = rotateY(raw, angle);
        const { sx, sy, visible } = project(rotated, cx, cy, fov);
        if (!visible) continue;
        // pulse ring
        ctx.beginPath();
        ctx.arc(sx, sy, 6, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(251,191,36,0.5)";
        ctx.lineWidth = 1;
        ctx.stroke();
        // dot
        ctx.beginPath();
        ctx.arc(sx, sy, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(251,191,36,0.9)";
        ctx.fill();
      }

      // outline circle
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(96,165,250,0.12)";
      ctx.lineWidth = 1;
      ctx.stroke();

      angleRef.current += 0.004;
      rafRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(rafRef.current);
  }, [bases, size]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: size, height: size }}
      className={`rounded-full ${className}`}
      aria-hidden="true"
    />
  );
}
