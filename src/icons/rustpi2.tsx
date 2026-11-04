'use client';

import { useId } from 'react';

// A container stack that powers up one crate at a time, the top one docking last,
// on a platform whose status LEDs blink.
const CYCLE = '3.6s';
const crates = [
  { x: -46, y: 6, w: 28, h: 26, on: 0.12 },
  { x: -14, y: 6, w: 28, h: 26, on: 0.27 },
  { x: 18, y: 6, w: 28, h: 26, on: 0.42 },
  { x: -14, y: -26, w: 28, h: 26, on: 0.6 },
];
const leds = [-36, -18, 0, 18, 36];

export function RustPi2Icon({ size = 40 }: { size?: number }) {
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="-60 -60 120 120" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}g`} x1="-46" y1="-30" x2="46" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5BB8F0" />
          <stop offset="1" stopColor="#2377C4" />
        </linearGradient>
        <radialGradient id={`${id}core`} cx="0" cy="0" r="58" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#5BB8F0" stopOpacity="0.3" />
          <stop offset="1" stopColor="#2377C4" stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}glow`}>
          <feGaussianBlur stdDeviation="2.5" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle r="58" fill={`url(#${id}core)`}>
        <animate attributeName="opacity" values="0.3;1;1;0.3" keyTimes={`0;0.6;0.9;1`} dur={CYCLE} repeatCount="indefinite" />
      </circle>

      {crates.map((c, i) => {
        const keyTimes = `0;${c.on};${c.on + 0.04};0.9;1`;
        const crate = (
          <>
            <rect x={c.x} y={c.y} width={c.w} height={c.h} rx="3" fill="#5BB8F0" fillOpacity="0.08">
              <animate attributeName="fill-opacity" values="0.08;0.08;0.55;0.55;0.08" keyTimes={keyTimes} dur={CYCLE} repeatCount="indefinite" />
            </rect>
            <rect x={c.x} y={c.y} width={c.w} height={c.h} rx="3" stroke={`url(#${id}g)`} strokeWidth="4" />
            <path d={`M${c.x + 9.5} ${c.y + 5}v${c.h - 10}M${c.x + 18.5} ${c.y + 5}v${c.h - 10}`} stroke="#bfe4ff" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" />
          </>
        );
        if (i < 3) return <g key={i} filter={`url(#${id}glow)`}>{crate}</g>;
        return (
          <g key={i} filter={`url(#${id}glow)`}>
            <animateTransform attributeName="transform" type="translate" values="0 -10;0 -10;0 0;0 0;0 -10" keyTimes={`0;${c.on - 0.12};${c.on};0.9;1`} dur={CYCLE} repeatCount="indefinite" />
            {crate}
          </g>
        );
      })}

      <path d="M-54 40h108" stroke={`url(#${id}g)`} strokeWidth="4.5" strokeLinecap="round" />
      {leds.map((x, i) => (
        <circle key={x} cx={x} cy="49" r="2.6" fill="#5BB8F0">
          <animate attributeName="opacity" values="0.2;1;0.2" dur="1.5s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}
