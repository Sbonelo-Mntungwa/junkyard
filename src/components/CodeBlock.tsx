'use client';

import { useState, type CSSProperties, type ReactNode } from 'react';

interface CodeBlockProps {
  language?: string;
  children: string;
}

// One pass over the source: the first alternative that matches at a position
// wins, so comments and strings swallow anything that looks like code inside them.
const RUST = new RegExp([
  '(?<comment>//.*)',
  '(?<string>"(?:\\\\.|[^"\\\\])*")',
  "(?<life>'[a-z_]+\\b(?!'))",
  '(?<attr>#!?\\[[^\\]]*\\])',
  '(?<macro>\\b[a-z_][a-z0-9_]*!)',
  '(?<kw>\\b(?:as|async|await|break|const|continue|crate|dyn|else|enum|fn|for|if|impl|in|let|loop|match|mod|move|mut|pub|ref|return|self|Self|static|struct|super|trait|type|unsafe|use|where|while|true|false)\\b)',
  '(?<type>\\b[A-Z][A-Za-z0-9_]*\\b)',
  '(?<num>\\b(?:0x[0-9a-fA-F_]+|\\d[\\d_]*(?:\\.\\d+)?(?:[iu](?:8|16|32|64|size))?)\\b)',
  '(?<call>\\b[a-z_][a-z0-9_]*(?=\\())',
].join('|'), 'g');

const colors: Record<string, CSSProperties> = {
  comment: { color: 'var(--text-dim)', fontStyle: 'italic' },
  string: { color: 'var(--accent-green)' },
  life: { color: '#c084fc' },
  attr: { color: 'var(--text-dim)' },
  macro: { color: '#c084fc' },
  kw: { color: 'var(--accent-nova)' },
  type: { color: 'var(--accent-aurora)' },
  num: { color: '#c084fc' },
  call: { color: 'var(--text-star)' },
};

function highlightRust(code: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  RUST.lastIndex = 0;
  while ((m = RUST.exec(code))) {
    const groups = m.groups!;
    const kind = Object.keys(groups).find((k) => groups[k] !== undefined)!;
    if (m.index > last) out.push(code.slice(last, m.index));
    out.push(<span key={m.index} style={colors[kind]}>{m[0]}</span>);
    last = m.index + m[0].length;
  }
  out.push(code.slice(last));
  return out;
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
        <code>{language === 'rust' ? highlightRust(children) : children}</code>
      </pre>
    </div>
  );
}
