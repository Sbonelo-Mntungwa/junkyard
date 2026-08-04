'use client';

import { useId } from 'react';

export function DoubleDigitIcon({ size = 40 }: { size?: number }) {
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="13" y1="12" x2="35" y2="35" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBBF24" />
          <stop offset="1" stopColor="#D97706" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${id})`} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="19" cy="20" r="8" />
        <circle cx="19" cy="20" r="4" />
        {/* front coin flips around its own center (x=29) via translate + scale + translate */}
        <g transform="translate(29 0)">
          <g>
            <animateTransform attributeName="transform" type="scale" values="1 1;0.14 1;1 1" dur="2.4s" repeatCount="indefinite" />
            <g transform="translate(-29 0)">
              <circle cx="29" cy="28" r="9" />
              <circle cx="29" cy="28" r="4.5" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}