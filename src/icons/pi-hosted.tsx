'use client';

import { useId } from 'react';

export function PiHostedIcon({ size = 40 }: { size?: number }) {
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="8" y1="7" x2="40" y2="41" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34D399" />
          <stop offset="1" stopColor="#059669" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${id})`} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <animate attributeName="opacity" values="1;0.55;1" dur="2s" repeatCount="indefinite" />
        <path d="M24 7 L39 12 V25 C39 33 32 39 24 41 C16 39 9 33 9 25 V12 Z" />
        <circle cx="24" cy="20" r="3" />
        <path d="M24 23 L22.6 30 L25.4 30 Z" />
      </g>
    </svg>
  );
}