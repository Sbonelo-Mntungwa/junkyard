'use client';

import { useId } from 'react';

export function RustPi2Icon({ size = 40 }: { size?: number }) {
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="6" y1="8" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5BB8F0" />
          <stop offset="1" stopColor="#2377C4" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${id})`} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="25" width="32" height="13" rx="2" />
        <path d="M16 25v13M24 25v13M32 25v13" />
        <g>
          <animateTransform attributeName="transform" type="translate" values="0 0;0 -2.5;0 0" dur="2.1s" repeatCount="indefinite" />
          <rect x="17" y="14" width="14" height="10" rx="2" />
          <path d="M24 14v10" />
        </g>
        <path d="M5 41h38" />
      </g>
    </svg>
  );
}