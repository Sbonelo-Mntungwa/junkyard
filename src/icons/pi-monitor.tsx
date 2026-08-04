'use client';

import { useId } from 'react';

export function PiMonitorIcon({ size = 40 }: { size?: number }) {
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="6" y1="8" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6B6B" />
          <stop offset="1" stopColor="#D42A2A" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${id})`} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="9" width="36" height="24" rx="3" />
        <path d="M11 23h6l3-8 4 14 3-9 3 3h6" />
        <path d="M20 33v5M28 33v5M16 40h16" />
      </g>
      <circle r="2.2" fill="#f0e6ff">
        <animateMotion dur="1.9s" repeatCount="indefinite" path="M11 23h6l3-8 4 14 3-9 3 3h6" />
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="1.9s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}