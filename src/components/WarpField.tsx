'use client';

import { useEffect, useRef } from 'react';

const COLORS = ['#ffffff', '#f0e6ff', '#ff9ec0', '#DE1A58', '#06b6d4'];

// Stars fly toward the viewer. `warp` eases the speed up into streaks and back.
export default function WarpField({ warp = false, count = 700 }: { warp?: boolean; count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const target = useRef(1);

  useEffect(() => {
    target.current = warp ? 38 : 1;
  }, [warp]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = 0, h = 0, frame = 0, speed = 1;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = (z = Math.random() * 1000) => ({
      x: (Math.random() - 0.5) * 2000,
      y: (Math.random() - 0.5) * 2000,
      z,
      pz: z,
      c: COLORS[Math.floor(Math.random() * COLORS.length)],
    });
    const stars = Array.from({ length: count }, () => spawn());

    const tick = () => {
      speed += ((calm ? Math.min(target.current, 2) : target.current) - speed) * 0.06;
      ctx.fillStyle = speed > 4 ? 'rgba(2, 2, 4, 0.35)' : 'rgba(2, 2, 4, 0.9)';
      ctx.fillRect(0, 0, w, h);

      const cx = w / 2, cy = h / 2, f = Math.max(w, h) * 0.6;
      for (const s of stars) {
        s.pz = s.z;
        s.z -= speed;
        if (s.z < 1) Object.assign(s, spawn(1000));

        const x = cx + (s.x / s.z) * f;
        const y = cy + (s.y / s.z) * f;
        if (x < 0 || x > w || y < 0 || y > h) continue;

        const near = 1 - s.z / 1000;
        ctx.globalAlpha = Math.min(1, near * 1.4);
        ctx.strokeStyle = s.c;
        ctx.fillStyle = s.c;
        if (speed > 3) {
          ctx.lineWidth = near * 2.4;
          ctx.beginPath();
          ctx.moveTo(cx + (s.x / s.pz) * f, cy + (s.y / s.pz) * f);
          ctx.lineTo(x, y);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(x, y, near * 1.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      frame = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener('resize', resize);
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, [count]);

  return <canvas ref={canvasRef} aria-hidden="true" style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', zIndex: 0 }} />;
}
