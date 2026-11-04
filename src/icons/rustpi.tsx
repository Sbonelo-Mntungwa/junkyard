'use client';

import { useId } from 'react';

// Ferris inside a Rust gear. A light chases round the teeth while the gear turns.
const TEETH = 12;
const teeth = Array.from({ length: TEETH }, (_, i) => {
  const a = (i / TEETH) * 360;
  return { a, begin: `${((i / TEETH) * 1.8).toFixed(2)}s` };
});

export function RustPiIcon({ size = 40 }: { size?: number }) {
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="-60 -60 120 120" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}g`} x1="-40" y1="-40" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF7A45" />
          <stop offset="1" stopColor="#E23E0C" />
        </linearGradient>
        <radialGradient id={`${id}core`}>
          <stop offset="0" stopColor="#FFB38A" stopOpacity="0.55" />
          <stop offset="1" stopColor="#E23E0C" stopOpacity="0" />
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
        <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="14s" repeatCount="indefinite" />
        <circle r="44" stroke="#FF7A45" strokeOpacity="0.35" strokeWidth="3" />
        <g filter={`url(#${id}glow)`}>
          {teeth.map((t) => (
            <rect key={t.a} x="-5" y="-55" width="10" height="10" rx="2" fill="#FF7A45" transform={`rotate(${t.a})`} opacity="0.25">
              <animate attributeName="opacity" values="0.25;1;0.25" dur="1.8s" begin={t.begin} repeatCount="indefinite" />
            </rect>
          ))}
        </g>
      </g>

      <circle r="38" fill={`url(#${id}core)`}>
        <animate attributeName="r" values="30;38;30" dur="2.6s" repeatCount="indefinite" />
      </circle>

      <g transform="scale(1.35) translate(-24 -27)" stroke={`url(#${id}g)`} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" filter={`url(#${id}glow)`}>
        <g>
          <animateTransform attributeName="transform" type="rotate" values="-3 24 24;3 24 24;-3 24 24" dur="2.6s" repeatCount="indefinite" />
          <ellipse cx="24" cy="28" rx="11" ry="7" fill="#2a0d04" fillOpacity="0.8" />
          <path d="M15 27c4 4 14 4 18 0" />
          <path d="M20 22l-1-6M28 22l1-6" />
          <g>
            <animateTransform attributeName="transform" type="rotate" values="0 14 26;-14 14 26;0 14 26" dur="1s" repeatCount="indefinite" />
            <path d="M14 26l-6-3-4 2M8 23l-3 4" />
          </g>
          <g>
            <animateTransform attributeName="transform" type="rotate" values="0 34 26;14 34 26;0 34 26" dur="1s" repeatCount="indefinite" />
            <path d="M34 26l6-3 4 2M40 23l3 4" />
          </g>
          <path d="M16 32l-5 4M19 34l-4 4M23 35l-3 4" />
          <path d="M32 32l5 4M29 34l4 4M25 35l3 4" />
          <circle cx="19" cy="15" r="2" fill="#FFD2B8" stroke="none">
            <animate attributeName="r" values="2;2;0.4;2" keyTimes="0;0.9;0.95;1" dur="3.4s" repeatCount="indefinite" />
          </circle>
          <circle cx="29" cy="15" r="2" fill="#FFD2B8" stroke="none">
            <animate attributeName="r" values="2;2;0.4;2" keyTimes="0;0.9;0.95;1" dur="3.4s" repeatCount="indefinite" />
          </circle>
        </g>
      </g>
    </svg>
  );
}
