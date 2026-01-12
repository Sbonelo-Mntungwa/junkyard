'use client';

import { useState } from 'react';

interface CodeBlockProps {
  language?: string;
  children: string;
}

export default function CodeBlock({ language = 'bash', children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ position: 'relative', margin: '1.5rem 0' }}>
      <div style={{ 
        position: 'absolute', 
        top: '0.75rem', 
        right: '0.75rem', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.5rem',
        zIndex: 10
      }}>
        <span style={{ 
          fontSize: '0.75rem', 
          textTransform: 'uppercase', 
          letterSpacing: '0.05em',
          color: 'var(--text-dim)' 
        }}>
          {language}
        </span>
        <button
          onClick={handleCopy}
          style={{ 
            padding: '0.375rem 0.75rem',
            fontSize: '0.75rem',
            borderRadius: '4px',
            border: '1px solid var(--border-void)',
            background: 'var(--bg-tertiary)',
            color: copied ? 'var(--accent-green)' : 'var(--text-dim)',
            cursor: 'pointer',
            fontFamily: 'JetBrains Mono, monospace',
            transition: 'all 0.2s'
          }}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre 
        style={{ 
          padding: '3rem 1.5rem 1.5rem',
          borderRadius: '8px',
          overflowX: 'auto',
          fontSize: '0.875rem',
          background: 'var(--bg-code)', 
          border: '1px solid var(--border-void)',
          fontFamily: 'JetBrains Mono, monospace',
          color: 'var(--text-dust)',
          margin: 0
        }}
      >
        <code>{children}</code>
      </pre>
    </div>
  );
}
