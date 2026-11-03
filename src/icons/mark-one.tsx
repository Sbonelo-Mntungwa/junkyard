'use client';

import { useId } from 'react';

// Same geometry as the reactor in the Mark One brand mark, with 12 segments
// instead of 42 so each one still reads at 24px.
const N = 12;
const CHARGE = 0.8;
const p = (r: number, a: number) => `${(r * Math.cos(a)).toFixed(2)},${(r * Math.sin(a)).toFixed(2)}`;
const segs = Array.from({ length: N }, (_, i) => {
  const a0 = ((i / N) * 360 + 4 - 90) * Math.PI / 180;
  const a1 = (((i + 1) / N) * 360 - 4 - 90) * Math.PI / 180;
  const t = ((i + 1) / N) * CHARGE;
  return {
    d: `M${p(34, a0)} L${p(50, a0)} A50,50 0 0 1 ${p(50, a1)} L${p(34, a1)} A34,34 0 0 0 ${p(34, a0)} Z`,
    keyTimes: `0;${(t - 0.02).toFixed(3)};${t.toFixed(3)};0.92;1`,
  };
});

export function MarkOneIcon({ size = 40 }: { size?: number }) {
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="-60 -60 120 120" fill="none" aria-hidden="true">
      <defs>
        <filter id={`${id}glow`}>
          <feGaussianBlur stdDeviation="3" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id={`${id}core`}>
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.45" stopColor="#bfefff" />
          <stop offset="1" stopColor="#5ad7ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle r="57" stroke="#5ad7ff" strokeOpacity="0.45" strokeWidth="3" />
      <circle r="28" stroke="#5ad7ff" strokeOpacity="0.45" strokeWidth="3" />
      <g filter={`url(#${id}glow)`}>
        {segs.map((s) => (
          <path key={s.d} d={s.d} fill="#163650">
            <animate attributeName="fill" values="#163650;#163650;#ffb84d;#ffb84d;#163650" keyTimes={s.keyTimes} dur="3.6s" repeatCount="indefinite" />
          </path>
        ))}
      </g>
      <g>
        <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="6s" repeatCount="indefinite" />
        <circle r="22" stroke="#5ad7ff" strokeOpacity="0.6" strokeWidth="3" strokeDasharray="6 8" />
      </g>
      <circle r="12" fill={`url(#${id}core)`}>
        <animate attributeName="r" values="12;20;20;12" keyTimes={`0;${CHARGE};0.92;1`} dur="3.6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.45;1;1;0.45" keyTimes={`0;${CHARGE};0.92;1`} dur="3.6s" repeatCount="indefinite" />
      </circle>
      <circle r="6" fill="#cfefff" />
    </svg>
  );
}
