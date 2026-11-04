'use client';

import { useId } from 'react';

// Sparkle whose colors keep cycling through the Junkyard palette
// (magenta -> nova -> pink -> cyan), with a glowing core and three dots in orbit.
// Pass `color` for a flat, static tone instead.
const orbits = [
  { r: 44, dur: '6s', from: 0, fill: '#DE1A58' },
  { r: 44, dur: '6s', from: 180, fill: '#06b6d4' },
  { r: 34, dur: '4s', from: 90, fill: '#ff2d6a' },
];

export function MoreIcon({ size = 40, color }: { size?: number; color?: string }) {
  const id = useId();
  const stroke = color ?? `url(#${id})`;
  return (
    <svg width={size} height={size} viewBox="-60 -60 120 120" fill="none" aria-hidden="true">
      <defs>
        {!color && (
          <linearGradient id={id} x1="-28" y1="-26" x2="28" y2="26" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#8F0177">
              <animate attributeName="stop-color" values="#8F0177;#DE1A58;#ff2d6a;#06b6d4;#8F0177" dur="6s" repeatCount="indefinite" />
            </stop>
            <stop offset="0.4" stopColor="#DE1A58">
              <animate attributeName="stop-color" values="#DE1A58;#ff2d6a;#06b6d4;#8F0177;#DE1A58" dur="6s" repeatCount="indefinite" />
            </stop>
            <stop offset="0.68" stopColor="#ff2d6a">
              <animate attributeName="stop-color" values="#ff2d6a;#06b6d4;#8F0177;#DE1A58;#ff2d6a" dur="6s" repeatCount="indefinite" />
            </stop>
            <stop offset="1" stopColor="#06b6d4">
              <animate attributeName="stop-color" values="#06b6d4;#8F0177;#DE1A58;#ff2d6a;#06b6d4" dur="6s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        )}
        <radialGradient id={`${id}core`}>
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="0.4" stopColor="#ff9ec0" stopOpacity="0.45" />
          <stop offset="1" stopColor="#DE1A58" stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}glow`}>
          <feGaussianBlur stdDeviation="2.5" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g>
        <animateTransform attributeName="transform" type="rotate" from="0" to="-360" dur="18s" repeatCount="indefinite" />
        <circle r="44" stroke={stroke} strokeOpacity="0.45" strokeWidth="2.5" strokeDasharray="4 9" />
      </g>
      <circle r="34" stroke={stroke} strokeOpacity="0.2" strokeWidth="2" />

      {!color && orbits.map((o) => (
        <g key={`${o.r}-${o.from}`}>
          <animateTransform attributeName="transform" type="rotate" from={o.from} to={o.from + 360} dur={o.dur} repeatCount="indefinite" />
          <circle cx={o.r} cy="0" r="3.5" fill={o.fill} filter={`url(#${id}glow)`} />
        </g>
      ))}

      <circle r="14" fill={`url(#${id}core)`}>
        <animate attributeName="r" values="12;20;12" dur="1.7s" repeatCount="indefinite" />
      </circle>

      <g stroke={stroke} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" filter={`url(#${id}glow)`}>
        <g>
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="10s" repeatCount="indefinite" />
          <path d="M0 -26l5.2 20.8L26 0l-20.8 5.2L0 26l-5.2-20.8L-26 0l20.8-5.2z" />
        </g>
        <g>
          <animate attributeName="opacity" values="0.35;1;0.35" dur="1.7s" repeatCount="indefinite" />
          <path d="M26 -24v10M21 -19h10" />
        </g>
        <g>
          <animate attributeName="opacity" values="0.35;1;0.35" dur="1.7s" begin="0.85s" repeatCount="indefinite" />
          <path d="M-22 16v10M-27 21h10" />
        </g>
      </g>
    </svg>
  );
}
