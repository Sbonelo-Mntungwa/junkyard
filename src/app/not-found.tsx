'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import CosmicBackground from '@/components/CosmicBackground';

export default function NotFound() {
  const [glitchText, setGlitchText] = useState('404');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`0123456789';
    
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        const glitched = '404'.split('').map(char => 
          Math.random() > 0.5 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char
        ).join('');
        setGlitchText(glitched);
        setTimeout(() => setGlitchText('404'), 100);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <CosmicBackground starCount={300} shootingStarInterval={1500} />
      
      <style jsx>{`
        .container {
          position: relative;
          z-index: 10;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2rem;
          overflow: hidden;
        }

        .error-code {
          font-family: 'Orbitron', sans-serif;
          font-size: clamp(8rem, 30vw, 20rem);
          font-weight: 900;
          line-height: 1;
          position: relative;
          background: linear-gradient(
            135deg, 
            #8F0177 0%, 
            #DE1A58 25%,
            #06b6d4 50%,
            #DE1A58 75%,
            #8F0177 100%
          );
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientFlow 4s ease infinite;
          filter: drop-shadow(0 0 60px rgba(222, 26, 88, 0.5));
        }

        .error-code::before {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #06b6d4 0%, #DE1A58 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: glitch1 3s ease-in-out infinite;
          clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
          opacity: 0.8;
        }

        .error-code::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #DE1A58 0%, #8F0177 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: glitch2 3s ease-in-out infinite;
          clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
          opacity: 0.8;
        }

        @keyframes gradientFlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes glitch1 {
          0%, 90%, 100% { transform: translate(0); }
          92% { transform: translate(-8px, -4px); }
          94% { transform: translate(8px, 4px); }
          96% { transform: translate(-4px, 2px); }
          98% { transform: translate(4px, -2px); }
        }

        @keyframes glitch2 {
          0%, 90%, 100% { transform: translate(0); }
          91% { transform: translate(8px, 4px); }
          93% { transform: translate(-8px, -4px); }
          95% { transform: translate(4px, -2px); }
          97% { transform: translate(-4px, 2px); }
        }

        .title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: #f0e6ff;
          margin-top: 1rem;
          text-align: center;
        }

        .subtitle {
          font-family: 'Space Mono', monospace;
          font-size: clamp(0.75rem, 1.5vw, 1rem);
          color: #9b8fbf;
          margin-top: 1rem;
          text-align: center;
          max-width: 500px;
          line-height: 1.6;
        }

        .terminal {
          margin-top: 3rem;
          background: rgba(8, 8, 12, 0.9);
          border: 1px solid #1a1825;
          border-radius: 12px;
          padding: 1.5rem 2rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.875rem;
          max-width: 500px;
          width: 100%;
        }

        .terminal-line {
          margin: 0.5rem 0;
          color: var(--text-dust);
        }

        .terminal-prompt {
          color: #DE1A58;
        }

        .terminal-error {
          color: #ff5f56;
        }

        .terminal-path {
          color: #06b6d4;
        }

        .terminal-cursor {
          display: inline-block;
          width: 10px;
          height: 1.2em;
          background: #DE1A58;
          margin-left: 4px;
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .home-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 3rem;
          padding: 1rem 2.5rem;
          background: linear-gradient(135deg, rgba(143, 1, 119, 0.3) 0%, rgba(222, 26, 88, 0.15) 100%);
          border: 2px solid #8F0177;
          border-radius: 50px;
          color: #f0e6ff;
          text-decoration: none;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.25rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
        }

        .home-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(222, 26, 88, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .home-button:hover {
          transform: translateY(-4px) scale(1.02);
          border-color: #DE1A58;
          box-shadow: 
            0 20px 60px rgba(143, 1, 119, 0.4),
            0 0 100px rgba(222, 26, 88, 0.2),
            inset 0 0 30px rgba(222, 26, 88, 0.1);
        }

        .home-button:hover::before {
          left: 100%;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -30px) rotate(90deg); }
          50% { transform: translate(-10px, 20px) rotate(180deg); }
          75% { transform: translate(30px, 10px) rotate(270deg); }
        }

        .scan-line {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, transparent, #DE1A58, transparent);
          animation: scan 4s linear infinite;
          opacity: 0.3;
          z-index: 20;
          pointer-events: none;
        }

        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }

        .coordinates {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: #5a5475;
          z-index: 15;
        }

        .signal-lost {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 2rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem;
          color: #ff5f56;
          animation: pulse 2s ease-in-out infinite;
        }

        .signal-dot {
          width: 8px;
          height: 8px;
          background: #ff5f56;
          border-radius: 50%;
          animation: pulse 1s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        @media (max-width: 640px) {
          .terminal {
            padding: 1rem;
            font-size: 0.75rem;
          }

          .coordinates {
            display: none;
          }
        }
      `}</style>

      <div className="scan-line" />

      <div className="container">
        <div className="error-code" data-text={glitchText}>
          {glitchText}
        </div>

        <h1 className="title">Lost in the Void</h1>

        <p className="subtitle">
          The coordinates you entered lead to uncharted space. 
          This sector of the digital cosmos appears to be empty.
        </p>

        <div className="signal-lost">
          <span className="signal-dot" />
          SIGNAL LOST
        </div>

        <div className="terminal">
          <div className="terminal-line">
            <span className="terminal-prompt">visitor@junkyard</span>
            <span style={{ color: '#5a5475' }}>:</span>
            <span className="terminal-path">~</span>
            <span style={{ color: '#5a5475' }}>$ </span>
            <span>navigate --to requested_page</span>
          </div>
          <div className="terminal-line terminal-error">
            Error: DESTINATION_NOT_FOUND
          </div>
          <div className="terminal-line terminal-error">
            The requested coordinates do not exist in this dimension.
          </div>
          <div className="terminal-line" style={{ marginTop: '1rem' }}>
            <span className="terminal-prompt">visitor@junkyard</span>
            <span style={{ color: '#5a5475' }}>:</span>
            <span className="terminal-path">~</span>
            <span style={{ color: '#5a5475' }}>$ </span>
            <span className="terminal-cursor" />
          </div>
        </div>

        <Link href="/" className="home-button">
          <span>↩</span>
          <span>Return to Base</span>
        </Link>
      </div>

      <div className="coordinates">
        <div>SECTOR: NULL</div>
        <div>COORDINATES: {mousePos.x}, {mousePos.y}</div>
        <div>STATUS: UNDEFINED</div>
      </div>
    </>
  );
}
