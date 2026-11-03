'use client';

import { useId } from 'react';

export function MarkOneIcon({ size = 40 }: { size?: number }) {
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="6" y1="8" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD27A" />
          <stop offset="1" stopColor="#E8930C" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${id})`} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 12h9a12 12 0 0 1 0 24h-9z" />
        <circle cx="37.5" cy="24" r="2.5" />
        <path d="M4 18h10M4 30h10M40 24h4" />
      </g>
      <circle r="2.2" fill="#f0e6ff">
        <animateMotion dur="2.2s" repeatCount="indefinite" path="M4 18h10M14 18h9M23 24h21" />
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="2.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
