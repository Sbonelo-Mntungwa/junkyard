'use client';

import { useEffect, useRef } from 'react';

const SHOWER_MS = 3800;

type Meteor = { x: number; y: number; vx: number; vy: number; len: number; r: number; life: number };
type Spark = { x: number; y: number; r: number; born: number; ttl: number };

// Every so often the sky fills with white shooting stars falling right to left,
// with sparkles popping in and out between them. Idle otherwise.
export default function StarShower({ zIndex = 2 }: { zIndex?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let w = 0, h = 0, frame = 0, timer: ReturnType<typeof setTimeout>;
    let meteors: Meteor[] = [];
    let sparks: Spark[] = [];
    let showerStart = -1;
    let last = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const meteor = (): Meteor => {
      const speed = 700 + Math.random() * 900;
      const angle = (200 + Math.random() * 18) * (Math.PI / 180);
      const fromTop = Math.random() < 0.6;
      return {
        x: fromTop ? Math.random() * w * 1.3 : w + 20,
        y: fromTop ? -20 : Math.random() * h * 0.7,
        vx: Math.cos(angle) * speed,
        vy: -Math.sin(angle) * speed,
        len: 30 + Math.random() * 90,
        r: 0.8 + Math.random() * 1.6,
        life: 1,
      };
    };

    const tick = (now: number) => {
      const elapsed = Math.min(0.25, (now - last) / 1000 || 0);
      const dt = Math.min(0.05, elapsed);
      last = now;
      const t = showerStart < 0 ? 1 : (now - showerStart) / SHOWER_MS;

      if (t < 1) {
        // Rises quickly, then tapers off.
        const rate = Math.sin(Math.PI * Math.min(1, t * 1.4)) * 150;
        for (let n = rate * elapsed + Math.random(); n >= 1; n--) meteors.push(meteor());
        for (let n = rate * 0.9 * elapsed + Math.random(); n >= 1; n--) {
          sparks.push({ x: Math.random() * w, y: Math.random() * h, r: 1 + Math.random() * 1.8, born: now, ttl: 600 + Math.random() * 1000 });
        }
      }

      ctx.clearRect(0, 0, w, h);

      meteors = meteors.filter((m) => m.x > -m.len && m.y < h + m.len);
      for (const m of meteors) {
        m.x += m.vx * dt;
        m.y += m.vy * dt;
        const speed = Math.hypot(m.vx, m.vy);
        const tx = m.x - (m.vx / speed) * m.len;
        const ty = m.y - (m.vy / speed) * m.len;
        const tail = ctx.createLinearGradient(m.x, m.y, tx, ty);
        tail.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
        tail.addColorStop(0.3, 'rgba(255, 214, 230, 0.35)');
        tail.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.strokeStyle = tail;
        ctx.lineWidth = m.r * 1.3;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tx, ty);
        ctx.stroke();

        ctx.shadowColor = 'rgba(255, 255, 255, 0.9)';
        ctx.shadowBlur = 8;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      sparks = sparks.filter((s) => now - s.born < s.ttl);
      for (const s of sparks) {
        const k = (now - s.born) / s.ttl;
        ctx.globalAlpha = Math.sin(Math.PI * k);
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = 10;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      if (t < 1 || meteors.length || sparks.length) {
        frame = requestAnimationFrame(tick);
      } else {
        frame = 0;
        schedule(12000 + Math.random() * 18000);
      }
    };

    const start = () => {
      showerStart = performance.now();
      last = showerStart;
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const schedule = (ms: number) => {
      timer = setTimeout(start, ms);
    };

    resize();
    window.addEventListener('resize', resize);
    schedule(5000 + Math.random() * 4000);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', zIndex, pointerEvents: 'none' }} />;
}
