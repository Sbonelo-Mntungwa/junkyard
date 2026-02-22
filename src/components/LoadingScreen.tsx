'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          setTimeout(() => setVisible(false), 600);
          return 100;
        }
        // Accelerate towards the end
        const increment = prev < 70 ? Math.random() * 8 + 2 : Math.random() * 15 + 5;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <>
      <style jsx global>{`
        @keyframes drift {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
        @keyframes orbitSlow {
          0% { transform: rotate(0deg) translateX(60px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
        }
        @keyframes orbitMed {
          0% { transform: rotate(120deg) translateX(90px) rotate(-120deg); }
          100% { transform: rotate(480deg) translateX(90px) rotate(-480deg); }
        }
        @keyframes orbitFar {
          0% { transform: rotate(240deg) translateX(130px) rotate(-240deg); }
          100% { transform: rotate(600deg) translateX(130px) rotate(-600deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @keyframes loadFadeOut {
          to { opacity: 0; }
        }
        @keyframes scanLine {
          0% { left: 0%; }
          100% { left: 100%; }
        }
      `}</style>

      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#020204',
          animation: fadeOut ? 'loadFadeOut 0.6s ease forwards' : undefined,
        }}
      >
        {/* Background particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: i % 3 === 0 ? '2px' : '1px',
              height: i % 3 === 0 ? '2px' : '1px',
              background: i % 5 === 0 ? '#8F0177' : i % 3 === 0 ? '#DE1A58' : '#f0e6ff',
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.5,
              animation: `pulse ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Orbital system — cosmic debris */}
        <div
          style={{
            position: 'relative',
            width: '280px',
            height: '280px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'drift 4s ease-in-out infinite',
          }}
        >
          {/* Orbit rings */}
          {[60, 90, 130].map((r, i) => (
            <div
              key={r}
              style={{
                position: 'absolute',
                width: r * 2,
                height: r * 2,
                border: `1px solid rgba(143, 1, 119, ${0.12 - i * 0.03})`,
                borderRadius: '50%',
              }}
            />
          ))}

          {/* Center glow */}
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#DE1A58',
              boxShadow: '0 0 20px #DE1A58, 0 0 60px rgba(143, 1, 119, 0.4)',
            }}
          />

          {/* Orbiting debris */}
          <div
            style={{
              position: 'absolute',
              width: '6px',
              height: '6px',
              background: '#f0e6ff',
              borderRadius: '50%',
              animation: 'orbitSlow 3s linear infinite',
              boxShadow: '0 0 6px rgba(240, 230, 255, 0.5)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              background: '#8F0177',
              borderRadius: '1px',
              animation: 'orbitMed 5s linear infinite',
              boxShadow: '0 0 8px rgba(143, 1, 119, 0.6)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '3px',
              height: '3px',
              background: '#DE1A58',
              borderRadius: '50%',
              animation: 'orbitFar 8s linear infinite',
              boxShadow: '0 0 6px rgba(222, 26, 88, 0.5)',
            }}
          />
        </div>

        {/* Text */}
        <div
          style={{
            marginTop: '2.5rem',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '1.4rem',
              letterSpacing: '0.15em',
              color: '#f0e6ff',
              marginBottom: '0.5rem',
            }}
          >
            THE JUNKYARD
          </div>
          <div
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.7rem',
              color: '#5a5475',
              letterSpacing: '0.1em',
            }}
          >
            ASSEMBLING DEBRIS . . .
          </div>
        </div>

        {/* Progress bar */}
        <div
          style={{
            marginTop: '2rem',
            width: '200px',
            height: '2px',
            background: '#1a1825',
            borderRadius: '1px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #8F0177, #DE1A58)',
              borderRadius: '1px',
              transition: 'width 0.15s ease-out',
              boxShadow: '0 0 8px rgba(222, 26, 88, 0.5)',
            }}
          />
        </div>

        {/* Percentage */}
        <div
          style={{
            marginTop: '0.75rem',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.65rem',
            color: '#5a5475',
            letterSpacing: '0.05em',
          }}
        >
          {Math.floor(progress)}%
        </div>
      </div>
    </>
  );
}
