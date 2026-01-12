'use client';

import { useState } from 'react';

interface DebugItemProps {
  title: string;
  isResolved?: boolean;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export default function DebugItem({ 
  title, 
  isResolved = true, 
  defaultOpen = false,
  children 
}: DebugItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div style={{ 
      marginBottom: '1.5rem', 
      borderRadius: '12px', 
      overflow: 'hidden',
      background: 'var(--bg-secondary)', 
      border: '1px solid var(--border-void)' 
    }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '1.25rem 1.5rem',
          textAlign: 'left',
          background: 'var(--bg-tertiary)',
          border: 'none',
          cursor: 'pointer',
          transition: 'background 0.2s',
          color: 'inherit',
          fontSize: 'inherit',
          fontFamily: 'inherit'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-secondary)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'var(--bg-tertiary)'}
      >
        <span 
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            flexShrink: 0,
            background: isResolved ? 'var(--accent-green)' : '#fbbf24'
          }}
        />
        <span style={{ flex: 1, fontWeight: 600, color: 'var(--text-star)' }}>
          {title}
        </span>
        <span 
          style={{ 
            color: '#5a5475', 
            transition: 'transform 0.3s',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
        >
          ▼
        </span>
      </button>
      
      {isOpen && (
        <div style={{ 
          padding: '1.5rem', 
          borderTop: '1px solid var(--border-void)' 
        }}>
          {children}
        </div>
      )}
    </div>
  );
}
