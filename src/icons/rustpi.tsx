'use client';

import { useId } from 'react';

export function RustPiIcon({ size = 40 }: { size?: number }) {
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="6" y1="8" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF7A45" />
          <stop offset="1" stopColor="#E23E0C" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${id})`} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <animateTransform attributeName="transform" type="rotate" values="-3 24 24;3 24 24;-3 24 24" dur="2.6s" repeatCount="indefinite" />
        <ellipse cx="24" cy="28" rx="11" ry="7" />
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
        <circle cx="19" cy="15" r="2" fill={`url(#${id})`} stroke="none" />
        <circle cx="29" cy="15" r="2" fill={`url(#${id})`} stroke="none" />
      </g>
    </svg>
  );
}