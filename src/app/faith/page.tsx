'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import WarpField from '@/components/WarpField';
import StarShower from '@/components/StarShower';

const PHOTOS = Array.from({ length: 17 }, (_, i) => `/faith/${String(i + 1).padStart(2, '0')}.jpg`);
// Photos per second drifting right to left.
const DRIFT = 1 / 4.2;
// The Enter button appears once the unlock title has resolved.
const UNLOCK_MS = 4300;

const LOG = [
  '> incoming signal: sbonelo.xyz/faith',
  '> verifying coordinates ... ok',
  '> stabilising wormhole ...',
];

const PARTICLE_COLORS = ['#DE1A58', '#ff9ec0', '#06b6d4', '#f0e6ff', '#8F0177'];
const particles = Array.from({ length: 32 }, (_, i) => ({
  a: `${(i / 32) * 360}deg`,
  r: `${170 + (i % 4) * 30}px`,
  d: `${1.6 + (i % 8) * 0.22}s`,
  c: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
}));
const ticks = Array.from({ length: 36 }, (_, i) => i * 10);

export default function FaithPage() {
  const [phase, setPhase] = useState<'portal' | 'opening' | 'show'>('portal');
  const [warp, setWarp] = useState(false);
  const warpTimer = useRef<ReturnType<typeof setTimeout>>();

  const pulse = useCallback((ms: number) => {
    setWarp(true);
    clearTimeout(warpTimer.current);
    warpTimer.current = setTimeout(() => setWarp(false), ms);
  }, []);

  const opened = useRef(false);
  const open = useCallback(() => {
    if (opened.current) return;
    opened.current = true;
    setPhase('opening');
    pulse(2200);
    setTimeout(() => setPhase('show'), 1100);
  }, [pulse]);

  // Now and then the stream jumps to warp, the same burst as entering the portal.
  useEffect(() => {
    if (phase !== 'show') return;
    let t: ReturnType<typeof setTimeout>;
    const next = () => {
      t = setTimeout(() => {
        pulse(2200);
        next();
      }, 25000 + Math.random() * 50000);
    };
    next();
    return () => clearTimeout(t);
  }, [phase, pulse]);

  return (
    <div className="faith">
      <style jsx global>{`
        .faith {
          position: fixed;
          inset: 0;
          overflow: hidden;
          background: #020204;
          color: #f0e6ff;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }

        /* Portal */
        .portal {
          position: fixed;
          inset: 0;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .portal-log {
          position: absolute;
          top: 12%;
          left: 50%;
          transform: translateX(-50%);
          width: min(92vw, 30rem);
          font-family: 'JetBrains Mono', monospace;
          font-size: clamp(0.7rem, 2.6vw, 0.9rem);
          color: #9b8fbf;
          line-height: 1.9;
        }
        .portal-log div {
          opacity: 0;
          animation: logIn 0.5s ease forwards;
        }
        .portal-log div:last-child { color: #DE1A58; }
        .portal-core {
          position: relative;
          width: min(72vmin, 420px);
          aspect-ratio: 1;
          transition: transform 1.1s cubic-bezier(0.7, 0, 0.84, 0), opacity 1.1s ease-in;
        }
        .vortex {
          position: absolute;
          inset: 14%;
          border-radius: 50%;
          background: conic-gradient(from 0deg, #8F0177, #DE1A58, #ff9ec0, #06b6d4, #6b21a8, #8F0177);
          filter: blur(22px);
          opacity: 0;
          transform: scale(0.2);
          animation: vortexIn 1.8s 1.3s cubic-bezier(0.16, 1, 0.3, 1) forwards, spin 2.4s linear infinite;
        }
        .vortex-inner {
          position: absolute;
          inset: 30%;
          border-radius: 50%;
          background: conic-gradient(from 180deg, #06b6d4, #f0e6ff, #DE1A58, #06b6d4);
          filter: blur(14px);
          opacity: 0;
          animation: vortexIn 1.6s 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards, spin 1.6s linear infinite reverse;
        }
        .portal-eye {
          position: absolute;
          inset: 43%;
          border-radius: 50%;
          background: radial-gradient(circle, #ffffff 0%, #ffd6e6 35%, rgba(222, 26, 88, 0) 72%);
          opacity: 0;
          animation: eyeIn 1.2s 2.4s ease forwards, breathe 1.8s 3.6s ease-in-out infinite;
        }
        .rings { position: absolute; inset: 0; overflow: visible; }
        .rings .draw {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: draw 1.6s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
        .rings .turn { transform-origin: 0 0; animation: spin 18s linear infinite; }
        .rings .turn-back { transform-origin: 0 0; animation: spin 26s linear infinite reverse; }
        .rings .tick { opacity: 0; animation: logIn 0.4s ease forwards; }
        .particle {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 4px;
          height: 4px;
          margin: -2px;
          border-radius: 50%;
          background: var(--c);
          box-shadow: 0 0 10px var(--c);
          opacity: 0;
          animation: converge 1.8s var(--d) cubic-bezier(0.55, 0, 1, 0.45) infinite;
        }
        .portal-title {
          margin-top: 2.2rem;
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.8rem, 7vw, 3.6rem);
          letter-spacing: 0.9em;
          text-align: center;
          text-transform: uppercase;
          background: linear-gradient(90deg, #f0e6ff, #ff9ec0, #06b6d4, #f0e6ff);
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          opacity: 0;
          filter: blur(12px);
          animation: titleIn 1.4s 3.1s cubic-bezier(0.16, 1, 0.3, 1) forwards, shimmer 4s linear infinite;
        }
        .portal-enter {
          position: absolute;
          bottom: 9%;
          padding: 0.85rem 2.4rem;
          border-radius: 100px;
          border: 1px solid rgba(222, 26, 88, 0.7);
          background: linear-gradient(135deg, rgba(143, 1, 119, 0.35), rgba(6, 182, 212, 0.18));
          color: #f0e6ff;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          letter-spacing: 0.4em;
          padding-left: calc(2.4rem + 0.4em);
          text-transform: uppercase;
          cursor: pointer;
          opacity: 0;
          transform: translateY(12px);
          pointer-events: none;
          transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .portal-enter.ready {
          opacity: 1;
          transform: none;
          pointer-events: auto;
          animation: beacon 2.4s ease-in-out infinite;
        }
        .portal-enter:hover { border-color: #06b6d4; box-shadow: 0 0 40px rgba(6, 182, 212, 0.55); }
        .portal-flash {
          position: fixed;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(circle, #ffffff 0%, #ffd6e6 30%, rgba(222, 26, 88, 0.6) 60%, rgba(2, 2, 4, 0) 100%);
          opacity: 0;
        }
        .portal.is-opening .portal-core { transform: scale(9); opacity: 0; }
        .portal.is-opening .portal-log,
        .portal.is-opening .portal-title,
        .portal.is-opening .portal-enter { opacity: 0 !important; transition: opacity 0.4s ease; animation: none; }
        .portal.is-opening .portal-flash { animation: flash 1.1s ease-in forwards; }

        /* Slideshow */
        .ambient {
          position: fixed;
          inset: -12%;
          z-index: 1;
          background-size: cover;
          background-position: center;
          filter: blur(70px) saturate(1.7);
          animation: ambientIn 2.2s ease forwards;
        }
        .ambient.leaving { animation: ambientOut 2.2s ease forwards; }
        .nebula {
          position: fixed;
          z-index: 1;
          width: 70vmax;
          height: 70vmax;
          border-radius: 50%;
          mix-blend-mode: screen;
          pointer-events: none;
          filter: blur(40px);
        }
        .nebula.one {
          left: -25vmax;
          top: -25vmax;
          background: radial-gradient(circle, rgba(143, 1, 119, 0.45), rgba(143, 1, 119, 0) 65%);
          animation: drift 22s ease-in-out infinite;
        }
        .nebula.two {
          right: -25vmax;
          bottom: -25vmax;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.3), rgba(6, 182, 212, 0) 65%);
          animation: drift 28s ease-in-out infinite reverse;
        }
        .vignette {
          position: fixed;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background: radial-gradient(ellipse at center, rgba(2, 2, 4, 0) 45%, rgba(2, 2, 4, 0.75) 100%);
        }
        .stage {
          position: fixed;
          inset: 0;
          z-index: 3;
          perspective: 1600px;
          cursor: grab;
          touch-action: pan-y;
          opacity: 0;
          animation: logIn 1.4s ease forwards;
        }
        .stage.dragging { cursor: grabbing; }
        .card {
          position: absolute;
          left: 50%;
          top: 50%;
          will-change: transform, opacity, filter;
        }
        .card-center { transform: translate(-50%, -50%); }
        .float { animation: float 7s ease-in-out infinite; }
        .frame {
          position: relative;
          padding: 3px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 0 24px rgba(222, 26, 88, 0.25);
        }
        .frame::before {
          content: '';
          position: absolute;
          inset: -60%;
          background: conic-gradient(from 0deg, #8F0177, #DE1A58, #ff9ec0, #06b6d4, #f0e6ff, #8F0177);
          animation: spin 6s linear infinite;
        }
        .halo {
          position: absolute;
          inset: 0;
          border-radius: 20px;
          pointer-events: none;
          opacity: var(--f, 0);
          box-shadow: 0 0 60px rgba(222, 26, 88, 0.55), 0 0 150px rgba(6, 182, 212, 0.3);
          animation: glow 5s ease-in-out infinite;
        }
        .photo {
          position: relative;
          overflow: hidden;
          border-radius: 17px;
          background: #050508;
        }
        /* Every card is 3:4, the shape of the widest photos. Taller ones are trimmed,
           keeping most of the top: in these shots her face sits high in the frame. */
        .photo img {
          display: block;
          width: auto;
          height: min(60vh, 92vw);
          aspect-ratio: 3 / 4;
          object-fit: cover;
          object-position: 50% 15%;
          max-width: none;
          pointer-events: none;
        }
        .hud {
          position: fixed;
          left: 0;
          right: 0;
          z-index: 4;
          display: flex;
          flex-direction: column;
          align-items: center;
          pointer-events: none;
          opacity: 0;
          animation: logIn 1.2s 0.6s ease forwards;
        }
        .hud.top { top: max(1.2rem, 3vh); }
        .faith-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2rem, 6.5vw, 3.2rem);
          letter-spacing: 0.35em;
          padding-left: 0.35em;
          background: linear-gradient(90deg, #f0e6ff, #ff9ec0, #06b6d4, #f0e6ff);
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 6s linear infinite;
          filter: drop-shadow(0 0 18px rgba(222, 26, 88, 0.5));
        }
        .faith-back {
          position: fixed;
          top: max(1.3rem, 3vh);
          left: max(1.2rem, 2.5vw);
          z-index: 20;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.9rem;
          color: #9b8fbf;
          text-decoration: none;
          transition: color 0.3s ease, text-shadow 0.3s ease;
        }
        .faith-back:hover { color: #f0e6ff; text-shadow: 0 0 14px rgba(222, 26, 88, 0.8); }
        @media (max-width: 640px) {
          .faith-back {
            top: auto;
            bottom: max(1.2rem, 3vh);
            padding: 0.4rem 0;
          }
        }

        /* Gentle glitch on one photo at a time */
        .photo .ghost {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 15%;
          opacity: 0;
          mix-blend-mode: screen;
          pointer-events: none;
        }
        .photo .ghost.r { filter: sepia(1) saturate(6) hue-rotate(-50deg); }
        .photo .ghost.c { filter: sepia(1) saturate(6) hue-rotate(150deg); }
        .card.glitching .ghost.r { animation: glitchR 0.6s steps(1, end) both; }
        .card.glitching .ghost.c { animation: glitchC 0.6s steps(1, end) both; }
        .card.glitching .photo .base { animation: jitter 0.6s steps(1, end) both; }

        /* The rare hard glitch: a canvas that wrecks the pixels for about a second */
        .photo .shatter {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }
        .card.wrecked .frame { animation: shake 0.14s steps(1, end) 7; }
        .card.wrecked .halo { opacity: 1; }

        @keyframes logIn { to { opacity: 1; } }
        @keyframes beacon {
          0%, 100% { box-shadow: 0 0 18px rgba(222, 26, 88, 0.35); }
          50% { box-shadow: 0 0 44px rgba(222, 26, 88, 0.7), 0 0 80px rgba(6, 182, 212, 0.3); }
        }
        @keyframes glitchR {
          0% { opacity: 0.6; transform: translateX(-6px); clip-path: inset(12% 0 70% 0); }
          20% { transform: translateX(5px); clip-path: inset(55% 0 28% 0); }
          40% { transform: translateX(-3px); clip-path: inset(32% 0 52% 0); }
          60% { transform: translateX(4px); clip-path: inset(76% 0 6% 0); }
          80% { transform: translateX(-2px); clip-path: inset(2% 0 88% 0); }
          100% { opacity: 0; transform: none; clip-path: inset(0); }
        }
        @keyframes glitchC {
          0% { opacity: 0.5; transform: translateX(6px); clip-path: inset(60% 0 22% 0); }
          20% { transform: translateX(-5px); clip-path: inset(18% 0 66% 0); }
          40% { transform: translateX(3px); clip-path: inset(70% 0 12% 0); }
          60% { transform: translateX(-4px); clip-path: inset(40% 0 44% 0); }
          80% { transform: translateX(2px); clip-path: inset(86% 0 2% 0); }
          100% { opacity: 0; transform: none; clip-path: inset(0); }
        }
        @keyframes jitter {
          0% { transform: translateX(2px); }
          20% { transform: translateX(-2px); }
          40% { transform: translateX(1px); }
          60% { transform: translateX(-1px); }
          80%, 100% { transform: none; }
        }
        @keyframes shake {
          0% { transform: translate(7px, -3px) skewX(-4deg); }
          25% { transform: translate(-9px, 2px) skewX(5deg); }
          50% { transform: translate(5px, 4px); }
          75% { transform: translate(-6px, -2px) skewX(-3deg); }
          100% { transform: none; }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes draw { to { stroke-dashoffset: 0; } }
        @keyframes vortexIn { to { opacity: 0.95; transform: scale(1); } }
        @keyframes eyeIn { to { opacity: 1; } }
        @keyframes breathe { 50% { opacity: 0.45; } }
        @keyframes converge {
          0% { opacity: 0; transform: rotate(var(--a)) translateX(var(--r)); }
          25% { opacity: 1; }
          100% { opacity: 0; transform: rotate(calc(var(--a) + 140deg)) translateX(0); }
        }
        @keyframes titleIn { to { opacity: 1; filter: blur(0); letter-spacing: 0.22em; } }
        @keyframes shimmer { to { background-position: 300% 0; } }
        @keyframes flash {
          0% { opacity: 0; }
          55% { opacity: 1; }
          100% { opacity: 1; }
        }
        @keyframes ambientIn { from { opacity: 0; } to { opacity: 0.42; } }
        @keyframes ambientOut { from { opacity: 0.42; } to { opacity: 0; } }
        @keyframes drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(8vmax, 6vmax) scale(1.15); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotateX(0deg); }
          50% { transform: translateY(-12px) rotateX(2deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 60px rgba(222, 26, 88, 0.55), 0 0 150px rgba(6, 182, 212, 0.3); }
          50% { box-shadow: 0 0 80px rgba(6, 182, 212, 0.55), 0 0 170px rgba(222, 26, 88, 0.35); }
        }
      `}</style>

      <WarpField warp={warp} />
      <Link href="/" className="faith-back">&lt; Back</Link>

      {phase === 'show' ? (
        <Slideshow onTravel={() => pulse(650)} />
      ) : (
        <Portal opening={phase === 'opening'} onOpen={open} />
      )}
    </div>
  );
}

function Portal({ opening, onOpen }: { opening: boolean; onOpen: () => void }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), UNLOCK_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter') onOpen();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [ready, onOpen]);

  return (
    <div className={`portal${opening ? ' is-opening' : ''}`}>
      <div className="portal-log">
        {LOG.map((line, i) => (
          <div key={line} style={{ animationDelay: `${0.3 + i * 0.7}s` }}>{line}</div>
        ))}
      </div>

      <div className="portal-core">
        <div className="vortex" />
        <div className="vortex-inner" />
        <svg className="rings" viewBox="-210 -210 420 420" fill="none" aria-hidden="true">
          <g className="turn">
            <circle r="200" stroke="#DE1A58" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="3 10" />
            {ticks.map((t, i) => (
              <rect key={t} className="tick" x="-1.5" y="-188" width="3" height={t % 30 === 0 ? 14 : 7} fill={t % 30 === 0 ? '#f0e6ff' : '#9b8fbf'} transform={`rotate(${t})`} style={{ animationDelay: `${1.2 + i * 0.03}s` }} />
            ))}
          </g>
          <circle className="draw" r="168" pathLength="1" stroke="#ff9ec0" strokeWidth="2" style={{ animationDelay: '1.1s' }} transform="rotate(-90)" />
          <g className="turn-back">
            <circle className="draw" r="146" pathLength="1" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.8" style={{ animationDelay: '1.4s' }} />
            <circle r="146" stroke="#06b6d4" strokeWidth="5" strokeOpacity="0.5" strokeDasharray="40 420" />
          </g>
          <circle className="draw" r="124" pathLength="1" stroke="#f0e6ff" strokeOpacity="0.6" strokeWidth="1" style={{ animationDelay: '1.7s' }} transform="rotate(90)" />
        </svg>
        {particles.map((p) => (
          <span key={p.a} className="particle" style={{ '--a': p.a, '--r': p.r, '--d': p.d, '--c': p.c } as React.CSSProperties} />
        ))}
        <div className="portal-eye" />
      </div>

      <div className="portal-title">Secret portal unlocked</div>
      <button className={`portal-enter${ready ? ' ready' : ''}`} onClick={onOpen} tabIndex={ready ? 0 : -1}>Enter</button>
      <div className="portal-flash" />
    </div>
  );
}

const wrap = (d: number) => ((((d + PHOTOS.length / 2) % PHOTOS.length) + PHOTOS.length) % PHOTOS.length) - PHOTOS.length / 2;

// Fisher-Yates, so every visit starts the stream in a new order.
const shuffle = <T,>(list: T[]) => {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
};

// Roughly 1 glitch in 16 is the hard kind: about once a minute.
const WRECK_CHANCE = 1 / 16;
const WRECK_MS = 1100;
// Width over height of every card; matches aspect-ratio on .photo img.
const CARD_ASPECT = 3 / 4;

// Redraws the photo on a canvas, frame by frame: pixelated, torn into shifted
// bands with a red/cyan split, corrupted blocks and noise rows. Then removes it.
function wreck(card: HTMLDivElement) {
  const photo = card.querySelector<HTMLDivElement>('.photo');
  const img = photo?.querySelector<HTMLImageElement>('img.base');
  if (!photo || !img || !img.complete || card.classList.contains('wrecked')) return;

  const w = photo.clientWidth;
  const h = photo.clientHeight;
  const canvas = document.createElement('canvas');
  canvas.className = 'shatter';
  canvas.width = w;
  canvas.height = h;
  photo.appendChild(canvas);
  card.classList.add('wrecked', 'glitching');

  const ctx = canvas.getContext('2d')!;
  const small = document.createElement('canvas');
  const sctx = small.getContext('2d')!;
  // Sample the same area that object-fit: cover and object-position: 50% 15% show.
  const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
  const cw = w / scale;
  const ch = h / scale;
  const ox = (img.naturalWidth - cw) * 0.5;
  const oy = (img.naturalHeight - ch) * 0.15;
  const sy = ch / h;
  const rand = (n: number) => Math.random() * n;
  const start = performance.now();

  const frame = (now: number) => {
    const t = (now - start) / WRECK_MS;
    if (t >= 1) {
      canvas.remove();
      card.classList.remove('wrecked', 'glitching');
      return;
    }
    // Peaks in the middle, with random spikes so it stutters rather than fades.
    const force = Math.min(1, Math.sin(Math.PI * t) * (0.7 + rand(0.6)));
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.imageSmoothingEnabled = false;

    const block = Math.max(2, Math.round(3 + force * rand(30)));
    small.width = Math.ceil(w / block);
    small.height = Math.ceil(h / block);
    sctx.drawImage(img, ox, oy, cw, ch, 0, 0, small.width, small.height);
    ctx.drawImage(small, 0, 0, small.width, small.height, 0, 0, w, h);

    for (let i = 0, n = 3 + Math.round(force * 9); i < n; i++) {
      const y = rand(h);
      const bh = 4 + rand(h * 0.12 * force + 6);
      const dx = (Math.random() - 0.5) * w * 0.45 * force;
      ctx.drawImage(img, ox, oy + y * sy, cw, bh * sy, dx, y, w, bh);
      ctx.globalCompositeOperation = 'screen';
      ctx.globalAlpha = 0.55 * force;
      ctx.fillStyle = Math.random() < 0.5 ? '#DE1A58' : '#06b6d4';
      ctx.fillRect(dx + (Math.random() < 0.5 ? -8 : 8), y, w, bh);
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1;
    }

    for (let i = 0, n = Math.round(force * 7); i < n; i++) {
      ctx.globalCompositeOperation = Math.random() < 0.35 ? 'difference' : 'source-over';
      ctx.fillStyle = ['#ffffff', '#DE1A58', '#06b6d4', '#000000', '#f0e6ff'][Math.floor(rand(5))];
      ctx.fillRect(Math.floor(rand(w / 8)) * 8, Math.floor(rand(h / 8)) * 8, 8 + Math.floor(rand(6)) * 8, 8 + Math.floor(rand(3)) * 8);
    }

    ctx.globalCompositeOperation = 'source-over';
    for (let i = 0, n = Math.round(force * 14); i < n; i++) {
      ctx.globalAlpha = 0.25 + rand(0.5);
      ctx.fillStyle = `rgb(${rand(255) | 0}, ${rand(255) | 0}, ${rand(255) | 0})`;
      ctx.fillRect(0, rand(h), w, 1 + rand(2));
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

function Slideshow({ onTravel }: { onTravel: () => void }) {
  const [photos] = useState(() => shuffle(PHOTOS));
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const cards = useRef<(HTMLDivElement | null)[]>([]);
  const motion = useRef({ pos: 0, target: 0, slot: 300, slow: false, paused: false, drag: null as null | { x: number; pos: number } });
  const shown = useRef(0);

  useEffect(() => {
    motion.current.paused = paused;
  }, [paused]);

  useEffect(() => {
    PHOTOS.forEach((src) => { new Image().src = src; });

    const m = motion.current;
    const resize = () => {
      const card = Math.min(window.innerHeight * 0.6, window.innerWidth * 0.92);
      // About 1.2 card widths apart, so there is a small gap between photos.
      m.slot = card * CARD_ASPECT * 1.21;
    };
    resize();
    window.addEventListener('resize', resize);

    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!m.paused && !m.drag) m.target += dt * DRIFT * (m.slow ? 0.35 : 1);
      if (!m.drag) m.pos += (m.target - m.pos) * (1 - Math.exp(-dt * 5));

      cards.current.forEach((el, i) => {
        if (!el) return;
        const d = wrap(i - m.pos);
        const a = Math.abs(d);
        if (a > 4.5) {
          el.style.visibility = 'hidden';
          return;
        }
        el.style.visibility = 'visible';
        const turn = Math.max(-50, Math.min(50, -d * 24));
        el.style.transform = `translate3d(${d * m.slot}px, 0, ${-a * 240}px) rotateY(${turn}deg) scale(${1 - Math.min(a, 3) * 0.08})`;
        el.style.opacity = String(Math.max(0, Math.min(1, 1.3 - a * 0.3)));
        el.style.filter = a < 0.6 ? 'none' : `blur(${((a - 0.6) * 2.2).toFixed(1)}px) brightness(${(1 - Math.min(a, 3) * 0.16).toFixed(2)})`;
        el.style.zIndex = String(100 - Math.round(a * 10));
        el.style.setProperty('--f', Math.max(0, 1 - a * 1.6).toFixed(2));
      });

      const cur = ((Math.round(m.pos) % PHOTOS.length) + PHOTOS.length) % PHOTOS.length;
      if (cur !== shown.current) {
        setPrev(shown.current);
        shown.current = cur;
        setIndex(cur);
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  useEffect(() => {
    // The hard glitch flashes, so it is skipped when the OS asks for less motion.
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let t: ReturnType<typeof setTimeout>;
    const next = () => {
      t = setTimeout(() => {
        const m = motion.current;
        const visible = cards.current.filter((el, i) => el && Math.abs(wrap(i - m.pos)) < 2.5) as HTMLDivElement[];
        const el = visible[Math.floor(Math.random() * visible.length)];
        if (el && Math.random() < WRECK_CHANCE && !calm) wreck(el);
        else if (el) {
          el.classList.add('glitching');
          setTimeout(() => el.classList.remove('glitching'), 650);
        }
        next();
      }, 1800 + Math.random() * 2800);
    };
    next();
    return () => clearTimeout(t);
  }, []);

  const jump = useCallback((by: number) => {
    const m = motion.current;
    m.target = Math.round(m.target) + by;
    onTravel();
  }, [onTravel]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') jump(1);
      else if (e.key === 'ArrowLeft') jump(-1);
      else if (e.key === ' ') {
        e.preventDefault();
        setPaused((p) => !p);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [jump]);

  const onPointerDown = (e: React.PointerEvent) => {
    const m = motion.current;
    m.drag = { x: e.clientX, pos: m.pos };
    setDragging(true);
    (e.target as Element).setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const m = motion.current;
    if (!m.drag) return;
    m.pos = m.drag.pos - (e.clientX - m.drag.x) / m.slot;
    m.target = m.pos;
  };
  const onPointerUp = () => {
    motion.current.drag = null;
    setDragging(false);
  };

  return (
    <>
      {prev !== null && <div key={`a${prev}-${index}`} className="ambient leaving" style={{ backgroundImage: `url(${photos[prev]})` }} />}
      <div key={`a${index}`} className="ambient" style={{ backgroundImage: `url(${photos[index]})` }} />
      <div className="nebula one" />
      <div className="nebula two" />
      <div className="vignette" />
      <StarShower />

      <div
        className={`stage${dragging ? ' dragging' : ''}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onPointerEnter={(e) => { if (e.pointerType === 'mouse') motion.current.slow = true; }}
        onPointerLeave={() => { motion.current.slow = false; onPointerUp(); }}
      >
        {photos.map((src, i) => (
          <div key={src} ref={(el) => { cards.current[i] = el; }} className="card" style={{ visibility: 'hidden' }}>
            <div className="card-center">
              <div className="float" style={{ animationDelay: `${-(i % 5) * 1.4}s` }}>
                <div className="frame">
                  <div className="photo">
                    <img className="base" src={src} alt="Faith" draggable={false} />
                    <img className="ghost r" src={src} alt="" aria-hidden="true" draggable={false} />
                    <img className="ghost c" src={src} alt="" aria-hidden="true" draggable={false} />
                  </div>
                  <div className="halo" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hud top">
        <div className="faith-title">For Faith</div>
      </div>

    </>
  );
}
