'use client';

import { useId } from 'react';

// A monitor on a scanline grid: the pulse trace draws itself in, a dot rides it,
// and three meters bounce like the live dashboard's CPU cores.
const TRACE = 'M-40 -6h16l7-18 9 32 7-21 7 7h20';
const meters = [
  { x: 29, values: '6;16;9;20;6', dur: '1.3s' },
  { x: 35, values: '14;7;18;10;14', dur: '1.7s' },
  { x: 41, values: '9;19;5;14;9', dur: '1.1s' },
];

export function PiMonitorIcon({ size = 40 }: { size?: number }) {
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="-60 -60 120 120" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}g`} x1="-50" y1="-42" x2="50" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6B6B" />
          <stop offset="1" stopColor="#D42A2A" />
        </linearGradient>
        <radialGradient id={`${id}screen`} cx="0" cy="-10" r="55" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FF6B6B" stopOpacity="0.22" />
          <stop offset="1" stopColor="#D42A2A" stopOpacity="0.04" />
        </radialGradient>
        <filter id={`${id}glow`}>
          <feGaussianBlur stdDeviation="2.5" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <clipPath id={`${id}clip`}>
          <rect x="-44" y="-36" width="88" height="52" rx="3" />
        </clipPath>
      </defs>

      <rect x="-44" y="-36" width="88" height="52" rx="3" fill={`url(#${id}screen)`} />
      <g clipPath={`url(#${id}clip)`} stroke="#FF6B6B" strokeOpacity="0.14" strokeWidth="1">
        <path d="M-44 -23h88M-44 -10h88M-44 3h88M-22 -36v52M0 -36v52M22 -36v52" />
        <rect x="-44" y="-36" width="88" height="5" fill="#FF6B6B" fillOpacity="0.12" stroke="none">
          <animate attributeName="y" values="-40;16" dur="3s" repeatCount="indefinite" />
        </rect>
      </g>

      <g filter={`url(#${id}glow)`}>
        {meters.map((m) => (
          <rect key={m.x} x={m.x - 2} y="2" width="4" height="10" rx="1" fill="#FF6B6B" opacity="0.85">
            <animate attributeName="height" values={m.values} dur={m.dur} repeatCount="indefinite" />
            <animate attributeName="y" values={m.values.split(';').map((v) => 12 - Number(v)).join(';')} dur={m.dur} repeatCount="indefinite" />
          </rect>
        ))}
        <path d={TRACE} stroke={`url(#${id}g)`} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="160" strokeDashoffset="160">
          <animate attributeName="stroke-dashoffset" values="160;0;0;160" keyTimes="0;0.45;0.85;1" dur="2.6s" repeatCount="indefinite" />
        </path>
      </g>

      <circle r="4" fill="#ffe4e4" filter={`url(#${id}glow)`}>
        <animateMotion dur="2.6s" repeatCount="indefinite" path={TRACE} keyPoints="0;1;1" keyTimes="0;0.45;1" calcMode="linear" />
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.8;1" dur="2.6s" repeatCount="indefinite" />
      </circle>

      <g stroke={`url(#${id}g)`} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="-50" y="-42" width="100" height="64" rx="7" />
        <path d="M-12 22v12M12 22v12M-26 38h52" />
      </g>
      <circle cx="42" cy="-36" r="2.5" fill="#FF6B6B">
        <animate attributeName="opacity" values="1;0.2;1" dur="1.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
