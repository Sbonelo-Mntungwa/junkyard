'use client';

import { useId } from 'react';

// Sparkle whose colors keep cycling through the Junkyard palette
// (magenta -> nova -> pink -> cyan). Pass `color` for a flat, static tone instead.
export function MoreIcon({ size = 40, color }: { size?: number; color?: string }) {
  const id = useId();
  const stroke = color ?? `url(#${id})`;
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {!color && (
        <defs>
          <linearGradient id={id} x1="10" y1="11" x2="38" y2="37" gradientUnits="userSpaceOnUse">
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
        </defs>
      )}
      <g stroke={stroke} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
        <g>
          <animateTransform attributeName="transform" type="rotate" from="0 24 24" to="360 24 24" dur="10s" repeatCount="indefinite" />
          <path d="M24 11l2.6 10.4L37 24l-10.4 2.6L24 37l-2.6-10.4L11 24l10.4-2.6z" />
        </g>
        <g>
          <animate attributeName="opacity" values="0.35;1;0.35" dur="1.7s" repeatCount="indefinite" />
          <path d="M37 12v5M34.5 14.5h5" />
        </g>
        <g>
          <animate attributeName="opacity" values="0.35;1;0.35" dur="1.7s" begin="0.85s" repeatCount="indefinite" />
          <path d="M13 32v5M10.5 34.5h5" />
        </g>
      </g>
    </svg>
  );
}