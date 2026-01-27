'use client';

import Link from 'next/link';
import CosmicBackground from '@/components/CosmicBackground';

export default function Home() {
  return (
    <>
      <CosmicBackground starCount={200} shootingStarInterval={2500} />
      
      <style jsx global>{`
        .project-card {
          position: relative;
          background: rgba(8, 8, 12, 0.8);
          border: 1px solid #1a1825;
          border-radius: 12px;
          padding: 1.5rem;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(143, 1, 119, 0.15) 0%, rgba(222, 26, 88, 0.08) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .project-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: #8F0177;
          box-shadow: 
            0 20px 50px rgba(143, 1, 119, 0.25),
            0 0 80px rgba(222, 26, 88, 0.1);
        }

        .project-card:hover::before {
          opacity: 1;
        }

        .project-card.featured {
          border: 2px solid #8F0177;
          box-shadow: 0 0 20px rgba(143, 1, 119, 0.15);
        }

        .project-card.featured:hover {
          border-color: #DE1A58;
          box-shadow: 
            0 20px 50px rgba(143, 1, 119, 0.3),
            0 0 80px rgba(222, 26, 88, 0.15);
        }

        .project-card.disabled {
          opacity: 0.5;
        }

        .tag {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          padding: 0.25rem 0.5rem;
          background: rgba(143, 1, 119, 0.2);
          border: 1px solid rgba(143, 1, 119, 0.3);
          border-radius: 4px;
          color: #DE1A58;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(220px, 320px));
          gap: 1.5rem;
          max-width: 700px;
          width: 100%;
        }

        .card-description,
        .card-tags {
          display: block;
        }

        .card-arrow {
          position: absolute;
          bottom: 1.25rem;
          right: 1.25rem;
          font-size: 1.25rem;
          color: #5a5475;
        }

        .transmissions {
          font-size: 0.75rem;
          color: #5a5475;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          margin-bottom: 1.5rem;
          font-family: 'Space Mono', monospace;
        }

        .main-container {
          position: relative;
          z-index: 10;
          height: 100vh;
          height: 100dvh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          overflow: hidden;
          box-sizing: border-box;
        }

        .welcome-section {
          text-align: center;
          margin-bottom: 0.5rem;
        }

        .subtitle {
          font-family: 'Space Mono', monospace;
          font-size: clamp(0.55rem, 1.2vw, 1rem);
          color: #9b8fbf;
          text-align: center;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          white-space: nowrap;
          margin-bottom: 1.5rem;
        }

        .site-footer {
          position: absolute;
          bottom: 1.5rem;
          text-align: center;
        }

        .footer-text {
          font-size: 0.8rem;
          color: #5a5475;
          font-family: 'Space Mono', monospace;
        }

        .footer-year {
          margin-top: 0.25rem;
          font-size: 0.8rem;
          color: #8F0177;
          letter-spacing: 0.2em;
        }

        @media (max-width: 640px) {
          .main-container {
            padding: 0.5rem;
            justify-content: space-evenly;
          }

          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;
            max-width: 100%;
            padding: 0 0.25rem;
          }

          .project-card {
            padding: 0.75rem;
            border-radius: 8px;
          }

          .card-emoji {
            font-size: 1.25rem !important;
            margin-bottom: 0.15rem !important;
          }

          .card-title {
            font-size: 1rem !important;
            margin-bottom: 0 !important;
          }

          .card-description,
          .card-tags {
            display: none !important;
          }

          .card-arrow {
            position: static;
            display: block;
            margin-top: 0.25rem;
            font-size: 0.9rem;
          }

          .transmissions {
            display: none;
          }

          .welcome-section {
            margin-bottom: 0.25rem;
          }

          .subtitle {
            margin-bottom: 0.5rem;
            font-size: 0.45rem;
            letter-spacing: 0.08em;
          }

          .site-footer {
            position: relative;
            bottom: auto;
            margin-top: 0.5rem;
          }

          .footer-text {
            font-size: 0.6rem;
          }

          .footer-year {
            font-size: 0.6rem;
            margin-top: 0.1rem;
          }
        }
      `}</style>

      <style jsx>{`
        .junkyard-text {
          font-family: 'Orbitron', sans-serif;
          font-size: clamp(2.5rem, 16vw, 12rem);
          font-weight: 900;
          letter-spacing: -0.02em;
          background: linear-gradient(
            135deg, 
            #8F0177 0%, 
            #a8028f 20%,
            #DE1A58 40%, 
            #ff2d6a 60%,
            #06b6d4 80%,
            #8F0177 100%
          );
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          filter: drop-shadow(0 0 40px rgba(222, 26, 88, 0.4));
          animation: gradientShift 8s ease-in-out infinite;
          line-height: 1;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .junkyard-text::before {
          content: 'Junkyard';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(135deg, #06b6d4 0%, #DE1A58 50%, #8F0177 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: glitchBefore 4s ease-in-out infinite, gradientShift 8s ease-in-out infinite reverse;
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
        }

        .junkyard-text::after {
          content: 'Junkyard';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(135deg, #DE1A58 0%, #8F0177 50%, #06b6d4 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: glitchAfter 4s ease-in-out infinite, gradientShift 8s ease-in-out infinite;
          clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
        }

        @keyframes glitchBefore {
          0%, 85%, 100% { transform: translate(0); }
          86% { transform: translate(-5px, -3px); }
          88% { transform: translate(5px, 3px); }
          90% { transform: translate(-3px, 2px); }
          92% { transform: translate(3px, -2px); }
        }

        @keyframes glitchAfter {
          0%, 85%, 100% { transform: translate(0); }
          87% { transform: translate(5px, 3px); }
          89% { transform: translate(-5px, -3px); }
          91% { transform: translate(3px, -2px); }
          93% { transform: translate(-3px, 2px); }
        }

        .welcome-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.25rem, 6vw, 4rem);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #f0e6ff;
          opacity: 0.9;
        }

        .blink {
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      <div className="main-container">
        <div className="welcome-section">
          <h1 className="welcome-text">Welcome to my</h1>
          <div className="junkyard-text">Junkyard</div>
        </div>
        
        <p className="subtitle">
          Experiments, projects &amp; digital debris<span className="blink">_</span>
        </p>

        <p className="transmissions">
          // Transmissions from the void
        </p>

        <div className="projects-grid">
          <Link href="/projects/rustpi" className="project-card featured" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <span className="card-emoji" style={{ fontSize: '2rem', marginBottom: '0.5rem', display: 'block' }}>🦀</span>
              <h3 className="card-title" style={{ 
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: '1.6rem',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                background: 'linear-gradient(135deg, #f0e6ff 0%, #DE1A58 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                RustPi
              </h3>
              <p className="card-description" style={{ fontSize: '0.9rem', color: '#9b8fbf', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                Building a custom Linux distribution from scratch for Raspberry Pi.
              </p>
              <div className="card-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                <span className="tag">Rust</span>
                <span className="tag">Linux</span>
                <span className="tag">Embedded</span>
              </div>
              <span className="card-arrow">→</span>
            </div>
          </Link>

          <div className="project-card disabled">
            <div style={{ position: 'relative', zIndex: 1 }}>
              <span className="card-emoji" style={{ fontSize: '2rem', marginBottom: '0.5rem', display: 'block' }}>🌌</span>
              <h3 className="card-title" style={{ 
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: '1.6rem',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
                color: '#9b8fbf'
              }}>
                More Coming
              </h3>
              <p className="card-description" style={{ fontSize: '0.9rem', color: '#5a5475', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                Additional projects will materialize from the cosmic void.
              </p>
              <div className="card-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                <span className="tag" style={{ opacity: 0.5 }}>???</span>
              </div>
              <span className="card-arrow">⋯</span>
            </div>
          </div>
        </div>

        <footer className="site-footer">
          <p className="footer-text">
            Lost in the digital cosmos
          </p>
          <p className="footer-year">◈ 2025 ◈</p>
        </footer>
      </div>
    </>
  );
}
