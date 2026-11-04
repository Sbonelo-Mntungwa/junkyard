'use client';

import { useId } from 'react';

// The vintage set from the TV Doctor brand mark: it beats like a heart, a pulse
// draws across the screen, the dials turn while it tunes in, and the ADB light
// breathes amber because the TV it was built on has no network ADB.
const ECG = 'M-40 1h9l4-11 6 24 6-28 5 15h22';
const BEAT = '1;1.08;0.98;1.05;1;1';
const knobs = [
  { cx: 37, cy: -15, dur: '3.2s', to: 360 },
  { cx: 37, cy: 5, dur: '4.4s', to: -360 },
];
const arc = (cx: number, cy: number, r: number, a0: number, a1: number) => {
  const p = (a: number) => `${(cx + r * Math.cos((a * Math.PI) / 180)).toFixed(2)} ${(cy + r * Math.sin((a * Math.PI) / 180)).toFixed(2)}`;
  return `M${p(a0)}A${r} ${r} 0 0 1 ${p(a1)}`;
};
const waves = [
  { d: arc(-21, -51, 9, 195, 255) + arc(21, -51, 9, 285, 345), begin: '0s' },
  { d: arc(-21, -51, 15, 195, 255) + arc(21, -51, 15, 285, 345), begin: '0.3s' },
];

export function TvDoctorIcon({ size = 40 }: { size?: number }) {
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="-60 -60 120 120" fill="none" aria-hidden="true">
      <defs>
        <filter id={`${id}glow`}>
          <feGaussianBlur stdDeviation="2.2" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g transform="translate(0 9)">
        <g>
          <animateTransform attributeName="transform" type="scale" values={BEAT} keyTimes="0;0.1;0.2;0.3;0.4;1" dur="2s" repeatCount="indefinite" />

          <g stroke="#4fd1c5" strokeWidth="5" strokeLinecap="round">
            <path d="M-6 -34L-21 -51M6 -34L21 -51M-40 36L-46 47M40 36L46 47" />
          </g>
          <circle cx="-21" cy="-51" r="4.6" fill="#4fd1c5" />
          <circle cx="21" cy="-51" r="4.6" fill="#4fd1c5" />
          <g filter={`url(#${id}glow)`} stroke="#4fd1c5" strokeWidth="3.6" strokeLinecap="round">
            {waves.map((w) => (
              <path key={w.begin} d={w.d} opacity="0.25">
                <animate attributeName="opacity" values="0.25;1;0.25" dur="1.6s" begin={w.begin} repeatCount="indefinite" />
              </path>
            ))}
          </g>

          <rect x="-55" y="-34" width="110" height="70" rx="11" fill="#4fd1c5" fillOpacity="0.14" stroke="#4fd1c5" strokeWidth="5.5" />
          <rect x="-47" y="-26" width="66" height="54" rx="12" fill="#4fd1c5" fillOpacity="0.2" stroke="#4fd1c5" strokeWidth="3.6" />

          {knobs.map((k) => (
            <g key={k.cy} stroke="#4fd1c5" strokeWidth="3.6" strokeLinecap="round">
              <animateTransform attributeName="transform" type="rotate" from={`0 ${k.cx} ${k.cy}`} to={`${k.to} ${k.cx} ${k.cy}`} dur={k.dur} repeatCount="indefinite" />
              <circle cx={k.cx} cy={k.cy} r="7.5" />
              <path d={`M${k.cx} ${k.cy}L${k.cx + 3.5} ${k.cy - 5.5}`} />
            </g>
          ))}

          <g filter={`url(#${id}glow)`}>
            <path d={ECG} stroke="#4fd1c5" strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round" pathLength="100" strokeDasharray="100" strokeDashoffset="100">
              <animate attributeName="stroke-dashoffset" values="100;0;-100" dur="2s" repeatCount="indefinite" />
            </path>
            <circle cx="37" cy="23" r="4.2" fill="#f2c65c">
              <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
            </circle>
          </g>
        </g>
      </g>
    </svg>
  );
}
