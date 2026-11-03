'use client';

import { useState } from 'react';

interface Shot {
  src: string;
  alt: string;
  caption: string;
  label?: string;
}

export default function Screenshot({ src, alt, caption, url = 'http://127.0.0.1:7878', phone = false }: Shot & { url?: string; phone?: boolean }) {
  return (
    <figure style={{ margin: '2rem auto', maxWidth: phone ? '300px' : 'none' }}>
      <div style={{ borderRadius: phone ? '24px' : '12px', overflow: 'hidden', border: phone ? '6px solid var(--bg-tertiary)' : '1px solid var(--border-void)', boxShadow: '0 20px 80px rgba(0,0,0,0.5)' }}>
        {!phone && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', background: 'var(--bg-tertiary)', borderBottom: '1px solid var(--border-void)' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27ca40' }}></div>
            <span style={{ marginLeft: '0.5rem', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--text-dim)' }}>{url}</span>
          </div>
        )}
        <img src={src} alt={alt} loading="lazy" style={{ display: 'block', width: '100%', height: 'auto', aspectRatio: phone ? '390 / 844' : '1600 / 913', background: '#050b14' }} />
      </div>
      <figcaption style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textAlign: 'center', fontFamily: 'JetBrains Mono, monospace', marginTop: '0.75rem', lineHeight: 1.6 }}>{caption}</figcaption>
    </figure>
  );
}

export function ScreenshotTabs({ shots }: { shots: Shot[] }) {
  const [active, setActive] = useState(0);
  const shot = shots[active];

  return (
    <div style={{ margin: '2rem 0' }}>
      <div role="tablist" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {shots.map((s, i) => (
          <button
            key={s.src}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.8rem',
              padding: '0.4rem 0.9rem',
              borderRadius: '100px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              background: i === active ? 'rgba(222, 26, 88, 0.18)' : 'var(--bg-secondary)',
              border: `1px solid ${i === active ? '#DE1A58' : 'var(--border-void)'}`,
              color: i === active ? 'var(--text-star)' : 'var(--text-dust)'
            }}
          >
            {s.label}
          </button>
        ))}
      </div>
      <Screenshot key={shot.src} {...shot} />
    </div>
  );
}
