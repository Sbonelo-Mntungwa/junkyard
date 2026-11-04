'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import WarpField from '@/components/WarpField';

const PHOTOS = Array.from({ length: 17 }, (_, i) => `/faith/${String(i + 1).padStart(2, '0')}.jpg`);
const SLIDE_MS = 6500;
const PORTAL_MS = 5400;

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

  useEffect(() => {
    if (phase !== 'portal') return;
    const t = setTimeout(open, PORTAL_MS);
    window.addEventListener('keydown', open);
    return () => {
      clearTimeout(t);
      window.removeEventListener('keydown', open);
    };
  }, [phase, open]);

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
          cursor: pointer;
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
        .portal-skip {
          position: absolute;
          bottom: 7%;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #5a5475;
          opacity: 0;
          animation: logIn 0.6s 1.2s ease forwards, breathe 2.4s 2s ease-in-out infinite;
        }
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
        .portal.is-opening .portal-skip { opacity: 0 !important; transition: opacity 0.4s ease; animation: none; }
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
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1400px;
          cursor: pointer;
          animation: logIn 1.2s ease forwards;
        }
        .slide {
          position: absolute;
          will-change: transform, opacity, filter;
        }
        .slide.in-fwd { animation: inFwd 1.6s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .slide.in-back { animation: inBack 1.6s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .slide.out-fwd { animation: outFwd 1.1s cubic-bezier(0.5, 0, 0.75, 0) both; }
        .slide.out-back { animation: outBack 1.1s cubic-bezier(0.5, 0, 0.75, 0) both; }
        .float { animation: float 7s ease-in-out infinite; }
        .frame {
          position: relative;
          padding: 3px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 0 50px rgba(222, 26, 88, 0.45), 0 0 140px rgba(6, 182, 212, 0.22);
          animation: glow 5s ease-in-out infinite;
        }
        .frame::before {
          content: '';
          position: absolute;
          inset: -60%;
          background: conic-gradient(from 0deg, #8F0177, #DE1A58, #ff9ec0, #06b6d4, #f0e6ff, #8F0177);
          animation: spin 6s linear infinite;
        }
        .photo {
          position: relative;
          overflow: hidden;
          border-radius: 17px;
          background: #050508;
        }
        .photo img {
          display: block;
          width: auto;
          height: auto;
          max-height: 72vh;
          max-width: 84vw;
          animation: kenburns 10s ease-out both;
        }
        .photo::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(115deg, rgba(255, 255, 255, 0) 35%, rgba(255, 255, 255, 0.28) 50%, rgba(255, 255, 255, 0) 65%);
          transform: translateX(-120%);
          animation: sheen 1.8s 0.9s ease-out forwards;
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
        .hud.bottom { bottom: max(1.2rem, 3vh); gap: 0.7rem; }
        .faith-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.6rem, 5vw, 2.4rem);
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
        .constellation {
          position: relative;
          display: flex;
          align-items: center;
          gap: clamp(6px, 1.6vw, 14px);
          pointer-events: auto;
        }
        .constellation::before {
          content: '';
          position: absolute;
          left: 4px;
          right: 4px;
          top: 50%;
          height: 1px;
          background: linear-gradient(90deg, rgba(222, 26, 88, 0), rgba(222, 26, 88, 0.5), rgba(6, 182, 212, 0.5), rgba(6, 182, 212, 0));
        }
        .star {
          position: relative;
          width: 7px;
          height: 7px;
          padding: 0;
          border: none;
          border-radius: 50%;
          background: #5a5475;
          cursor: pointer;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), background 0.5s ease, box-shadow 0.5s ease;
        }
        .star::after { content: ''; position: absolute; inset: -10px; }
        .star.seen { background: #9b8fbf; }
        .star.on {
          background: #ffffff;
          transform: scale(1.9);
          box-shadow: 0 0 10px #DE1A58, 0 0 22px #06b6d4;
        }
        .meta {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.2em;
          color: #9b8fbf;
        }
        .bar {
          width: 110px;
          height: 2px;
          border-radius: 2px;
          background: rgba(155, 143, 191, 0.25);
          overflow: hidden;
        }
        .bar span {
          display: block;
          height: 100%;
          background: linear-gradient(90deg, #DE1A58, #06b6d4);
          transform-origin: left;
          animation: fill ${SLIDE_MS}ms linear forwards;
        }
        .bar.paused span { animation-play-state: paused; }
        .hint {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.62rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #5a5475;
        }

        @keyframes logIn { to { opacity: 1; } }
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
        @keyframes inFwd {
          0% { opacity: 0; transform: translateZ(-1100px) rotateY(-22deg) rotateZ(-5deg); filter: blur(16px) brightness(2); }
          55% { filter: blur(0) brightness(1.2); }
          100% { opacity: 1; transform: none; filter: none; }
        }
        @keyframes inBack {
          0% { opacity: 0; transform: translateZ(600px) rotateY(18deg) rotateZ(4deg); filter: blur(16px) brightness(2); }
          55% { filter: blur(0) brightness(1.2); }
          100% { opacity: 1; transform: none; filter: none; }
        }
        @keyframes outFwd { to { opacity: 0; transform: translateZ(600px) rotateY(16deg) rotateZ(4deg); filter: blur(20px) brightness(1.8); } }
        @keyframes outBack { to { opacity: 0; transform: translateZ(-1100px) rotateY(-20deg) rotateZ(-5deg); filter: blur(20px) brightness(1.8); } }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotateX(0deg) rotateY(0deg); }
          33% { transform: translateY(-10px) rotateX(2deg) rotateY(-3deg); }
          66% { transform: translateY(6px) rotateX(-1.5deg) rotateY(2.5deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 50px rgba(222, 26, 88, 0.45), 0 0 140px rgba(6, 182, 212, 0.22); }
          50% { box-shadow: 0 0 70px rgba(6, 182, 212, 0.45), 0 0 160px rgba(222, 26, 88, 0.3); }
        }
        @keyframes kenburns {
          from { transform: scale(1.14) translate(1.5%, 1.5%); }
          to { transform: scale(1) translate(0, 0); }
        }
        @keyframes sheen { to { transform: translateX(120%); } }
        @keyframes fill { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      `}</style>

      <WarpField warp={warp} />

      {phase === 'show' ? (
        <Slideshow onTravel={() => pulse(650)} />
      ) : (
        <Portal opening={phase === 'opening'} onOpen={open} />
      )}
    </div>
  );
}

function Portal({ opening, onOpen }: { opening: boolean; onOpen: () => void }) {
  return (
    <div className={`portal${opening ? ' is-opening' : ''}`} onClick={onOpen}>
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
      <div className="portal-skip">Tap to enter</div>
      <div className="portal-flash" />
    </div>
  );
}

function Slideshow({ onTravel }: { onTravel: () => void }) {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const [seen, setSeen] = useState(() => new Set([0]));
  const touchX = useRef<number | null>(null);
  const swiped = useRef(false);
  const exitTimer = useRef<ReturnType<typeof setTimeout>>();

  const goTo = useCallback((next: number, d: number) => {
    const n = (next + PHOTOS.length) % PHOTOS.length;
    if (n === index) return;
    setPrev(index);
    setIndex(n);
    setDir(d);
    setSeen((s) => new Set(s).add(n));
    clearTimeout(exitTimer.current);
    exitTimer.current = setTimeout(() => setPrev(null), 1200);
    onTravel();
  }, [index, onTravel]);

  const step = useCallback((d: number) => goTo(index + d, d), [goTo, index]);

  useEffect(() => {
    PHOTOS.forEach((src) => { new Image().src = src; });
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => step(1), SLIDE_MS);
    return () => clearTimeout(t);
  }, [index, paused, step]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === ' ') {
        e.preventDefault();
        setPaused((p) => !p);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [step]);

  const onClick = (e: React.MouseEvent) => {
    if (swiped.current) {
      swiped.current = false;
      return;
    }
    step(e.clientX < window.innerWidth / 3 ? -1 : 1);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 40) {
      swiped.current = true;
      step(dx < 0 ? 1 : -1);
    }
  };

  return (
    <>
      {prev !== null && <div key={`a${prev}-${index}`} className="ambient leaving" style={{ backgroundImage: `url(${PHOTOS[prev]})` }} />}
      <div key={`a${index}`} className="ambient" style={{ backgroundImage: `url(${PHOTOS[index]})` }} />
      <div className="nebula one" />
      <div className="nebula two" />
      <div className="vignette" />

      <div
        className="stage"
        onClick={onClick}
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={onTouchEnd}
      >
        {prev !== null && <Slide key={`p${prev}-${index}`} src={PHOTOS[prev]} motion={dir > 0 ? 'out-fwd' : 'out-back'} />}
        <Slide key={`c${index}`} src={PHOTOS[index]} motion={dir > 0 ? 'in-fwd' : 'in-back'} />
      </div>

      <div className="hud top">
        <div className="faith-title">For Faith</div>
      </div>

      <div className="hud bottom">
        <div className="constellation">
          {PHOTOS.map((src, i) => (
            <button
              key={src}
              className={`star${i === index ? ' on' : seen.has(i) ? ' seen' : ''}`}
              aria-label={`Photo ${i + 1}`}
              onClick={() => goTo(i, i > index ? 1 : -1)}
            />
          ))}
        </div>
        <div className="meta">
          <span>{String(index + 1).padStart(2, '0')} / {PHOTOS.length}</span>
          <div className={`bar${paused ? ' paused' : ''}`}><span key={index} /></div>
          <span>{paused ? 'paused' : 'playing'}</span>
        </div>
        <div className="hint">Swipe or use arrows &middot; space to pause</div>
      </div>
    </>
  );
}

function Slide({ src, motion }: { src: string; motion: string }) {
  return (
    <div className={`slide ${motion}`}>
      <div className="float">
        <div className="frame">
          <div className="photo">
            <img src={src} alt="Faith" draggable={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
