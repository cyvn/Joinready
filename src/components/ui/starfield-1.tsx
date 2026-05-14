"use client";

import React, { useEffect, useRef, useState } from 'react';

const generateUUID = () => {
  const lut = Array(256).fill(null).map((_, i) => (i < 16 ? '0' : '') + i.toString(16));
  const d0 = Math.random() * 0xffffffff | 0;
  const d1 = Math.random() * 0xffffffff | 0;
  const d2 = Math.random() * 0xffffffff | 0;
  const d3 = Math.random() * 0xffffffff | 0;
  return (
    lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + '-' +
    lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + '-' + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + '-' +
    lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + '-' + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] +
    lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff]
  );
};

interface StarfieldProps {
  starColor?: string;
  bgColor?: string;
  mouseAdjust?: boolean;
  tiltAdjust?: boolean;
  easing?: number;
  clickToWarp?: boolean;
  hyperspace?: boolean;
  warpFactor?: number;
  opacity?: number;
  speed?: number;
  quantity?: number;
}

const Starfield = ({
  starColor = 'rgba(255,255,255,1)',
  bgColor = 'rgba(0,0,0,1)',
  mouseAdjust = false,
  tiltAdjust = false,
  easing = 1,
  clickToWarp = false,
  hyperspace = false,
  warpFactor = 10,
  opacity = 0.1,
  speed = 1,
  quantity = 512,
}: StarfieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mountedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const cursor = useRef({ x: 0, y: 0 });

  const [, forceUpdate] = useState(0);
  void forceUpdate;

  const sd = useRef<{
    w: number; h: number;
    ctx: CanvasRenderingContext2D | null;
    cw: number; ch: number;
    x: number; y: number; z: number;
    star: { colorRatio: number; arr: number[][] };
    prevTime: number;
  }>({
    w: 0, h: 0, ctx: null,
    cw: 0, ch: 0, x: 0, y: 0, z: 0,
    star: { colorRatio: 0, arr: [] },
    prevTime: 0,
  });

  const compSpeed = hyperspace ? speed * warpFactor : speed;
  const ratio = quantity / 2;
  const fillColor = hyperspace ? `rgba(0,0,0,${opacity})` : bgColor;

  const measureViewport = () => {
    const el = canvasRef.current?.parentElement;
    if (!el) return;
    sd.current.w = el.clientWidth;
    sd.current.h = el.clientHeight;
    sd.current.x = Math.round(sd.current.w / 2);
    sd.current.y = Math.round(sd.current.h / 2);
    sd.current.z = (sd.current.w + sd.current.h) / 2;
    sd.current.star.colorRatio = 1 / (sd.current.z || 1);
    if (cursor.current.x === 0) cursor.current.x = sd.current.x;
    if (cursor.current.y === 0) cursor.current.y = sd.current.y;
    if (mouse.current.x === 0) mouse.current.x = cursor.current.x - sd.current.x;
    if (mouse.current.y === 0) mouse.current.y = cursor.current.y - sd.current.y;
  };

  const setupCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    measureViewport();
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    sd.current.ctx = ctx;
    canvas.width = sd.current.w;
    canvas.height = sd.current.h;
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = starColor;
  };

  const bigBang = () => {
    if (sd.current.star.arr.length !== quantity) {
      sd.current.star.arr = Array.from({ length: quantity }, () => [
        Math.random() * sd.current.w * 2 - sd.current.x * 2,
        Math.random() * sd.current.h * 2 - sd.current.y * 2,
        Math.round(Math.random() * sd.current.z),
        0, 0, 0, 0, 1,
      ]);
    }
  };

  const resize = () => {
    // Guard: ctx and its canvas must exist before we touch dimensions
    if (!sd.current.ctx?.canvas) return;
    const oldStar = { ...sd.current.star, arr: [...sd.current.star.arr] };
    measureViewport();
    const prevW = sd.current.ctx.canvas.width;
    const prevH = sd.current.ctx.canvas.height;

    if (prevW !== sd.current.w || prevH !== sd.current.h) {
      const rw = sd.current.w / (prevW || 1);
      const rh = sd.current.h / (prevH || 1);

      sd.current.ctx.canvas.width = sd.current.w;
      sd.current.ctx.canvas.height = sd.current.h;

      if (!sd.current.star.arr.length) {
        bigBang();
      } else {
        sd.current.star.arr = sd.current.star.arr.map((star, i) => {
          const s = [...star];
          s[0] = oldStar.arr[i][0] * rw;
          s[1] = oldStar.arr[i][1] * rh;
          s[3] = sd.current.x + (s[0] / (s[2] || 1)) * ratio;
          s[4] = sd.current.y + (s[1] / (s[2] || 1)) * ratio;
          return s;
        });
      }

      sd.current.ctx.fillStyle = fillColor;
      sd.current.ctx.strokeStyle = starColor;
    }
  };

  const update = () => {
    mouse.current.x = (cursor.current.x - sd.current.x) / easing;
    mouse.current.y = (cursor.current.y - sd.current.y) / easing;
    if (!sd.current.star.arr.length) return;

    sd.current.star.arr = sd.current.star.arr.map(star => {
      const s = [...star];
      s[7] = 1;
      s[5] = s[3]; s[6] = s[4];
      s[0] += mouse.current.x >> 4;
      if (s[0] > sd.current.x << 1) { s[0] -= sd.current.w << 1; s[7] = 0; }
      if (s[0] < -(sd.current.x << 1)) { s[0] += sd.current.w << 1; s[7] = 0; }
      s[1] += mouse.current.y >> 4;
      if (s[1] > sd.current.y << 1) { s[1] -= sd.current.h << 1; s[7] = 0; }
      if (s[1] < -(sd.current.y << 1)) { s[1] += sd.current.h << 1; s[7] = 0; }
      s[2] -= compSpeed;
      if (s[2] > sd.current.z) { s[2] -= sd.current.z; s[7] = 0; }
      if (s[2] < 0) { s[2] += sd.current.z; s[7] = 0; }
      s[3] = sd.current.x + (s[0] / (s[2] || 1)) * ratio;
      s[4] = sd.current.y + (s[1] / (s[2] || 1)) * ratio;
      return s;
    });
  };

  const draw = () => {
    const ctx = sd.current.ctx;
    if (!ctx) return; // Guard: don't draw if context is gone
    ctx.fillStyle = fillColor;
    ctx.fillRect(0, 0, sd.current.w, sd.current.h);
    ctx.strokeStyle = starColor;
    for (const star of sd.current.star.arr) {
      if (star[5] > 0 && star[5] < sd.current.w && star[6] > 0 && star[6] < sd.current.h && star[7]) {
        ctx.lineWidth = (1 - sd.current.star.colorRatio * star[2]) * 2;
        ctx.beginPath();
        ctx.moveTo(star[5], star[6]);
        ctx.lineTo(star[3], star[4]);
        ctx.stroke();
        ctx.closePath();
      }
    }
  };

  const animate = () => {
    // Guard: stop loop if unmounted or ctx is gone
    if (!mountedRef.current || !sd.current.ctx?.canvas) return;
    if (sd.current.prevTime === 0) sd.current.prevTime = Date.now();
    resize();
    update();
    draw();
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  const stopAnimation = () => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  };

  const destroyStarfield = () => {
    stopAnimation();
    sd.current = {
      w: 0, h: 0, ctx: null,
      cw: 0, ch: 0, x: 0, y: 0, z: 0,
      star: { colorRatio: 0, arr: [] },
      prevTime: 0,
    };
  };

  useEffect(() => {
    mountedRef.current = true;

    const el = canvasRef.current?.parentElement;

    const mouseHandler = (event: MouseEvent) => {
      if (!el) return;
      cursor.current.x = event.pageX || event.clientX + el.scrollLeft - el.clientLeft;
      cursor.current.y = event.pageY || event.clientY + el.scrollTop - el.clientTop;
    };
    const tiltHandler = (event: DeviceOrientationEvent) => {
      if (event.beta == null || event.gamma == null) return;
      cursor.current.x = (sd.current.w / 2) + (event.gamma * 5);
      cursor.current.y = (sd.current.h / 2) + (event.beta * 5);
    };
    const clickHandler = (event: MouseEvent) => {
      void event; // hyperspace toggle — kept for API compatibility
    };

    if (mouseAdjust && el) el.addEventListener('mousemove', mouseHandler);
    if (tiltAdjust) window.addEventListener('deviceorientation', tiltHandler);
    if (clickToWarp && el) {
      el.addEventListener('mousedown', clickHandler);
      el.addEventListener('mouseup', clickHandler);
    }

    setupCanvas();
    bigBang();
    animate();

    return () => {
      mountedRef.current = false;
      destroyStarfield();
      if (mouseAdjust && el) el.removeEventListener('mousemove', mouseHandler);
      if (tiltAdjust) window.removeEventListener('deviceorientation', tiltHandler);
      if (clickToWarp && el) {
        el.removeEventListener('mousedown', clickHandler);
        el.removeEventListener('mouseup', clickHandler);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export { Starfield };
