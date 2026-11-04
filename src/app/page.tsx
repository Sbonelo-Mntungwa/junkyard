'use client';

import Link from 'next/link';
import CosmicBackground from '@/components/CosmicBackground';
import { RustPiIcon, RustPi2Icon, PiMonitorIcon, MarkOneIcon, TvDoctorIcon, MoreIcon } from '@/icons';

export default function Home() {
  return (
    <>
      <CosmicBackground starCount={200} shootingStarInterval={2500} />

      <style jsx global>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          width: 100%;
          max-width: 780px;
        }

        .project-card {
          position: relative;
          aspect-ratio: 1 / 1;
          border-radius: 14px;
          border: 1px solid #1a1825;
          background: rgba(8, 8, 12, 0.8);
          text-decoration: none;
          color: inherit;
          transition: border-color 0.35s ease, box-shadow 0.35s ease;
        }

        @media (hover: hover) {
          .project-card:hover {
            border-color: #DE1A58;
            box-shadow: 0 12px 36px rgba(143, 1, 119, 0.3), 0 0 50px rgba(222, 26, 88, 0.14);
            z-index: 50;
          }
        }

        .project-card.featured {
          border-color: rgba(143, 1, 119, 0.55);
        }

        .project-card.disabled {
          opacity: 0.4;
        }

        .project-card.disabled:hover {
          border-color: #1a1825;
          box-shadow: none;
        }

        /* Resting face: emoji + title */
        .card-face {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem;
          text-align: center;
          transition: opacity 0.25s ease;
        }

        .card-face svg {
          width: 44px;
          height: 44px;
        }

        .card-face .card-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.15rem;
          line-height: 1.05;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          background: linear-gradient(135deg, #f0e6ff 0%, #DE1A58 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @media (hover: hover) {
          .project-card:hover .card-face {
            opacity: 0;
          }
        }

        /* Hover pop-out: a larger floating card with logo + details */
        .card-pop {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 272px;
          transform: translate(-50%, -50%) scale(0.72);
          transform-origin: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.85rem;
          padding: 1.85rem 1.5rem;
          border-radius: 18px;
          text-align: center;
          background: linear-gradient(160deg, rgba(56, 6, 66, 0.98) 0%, rgba(24, 5, 30, 0.98) 100%);
          border: 1px solid #DE1A58;
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.55), 0 0 80px rgba(222, 26, 88, 0.45);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          z-index: 60;
        }

        @media (hover: hover) {
          .project-card:hover .card-pop {
            opacity: 1;
            visibility: visible;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        .card-pop svg {
          width: 62px;
          height: 62px;
          filter: drop-shadow(0 4px 18px rgba(222, 26, 88, 0.35));
        }

        .card-pop .card-title-pop {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.9rem;
          line-height: 1;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          background: linear-gradient(135deg, #f0e6ff 0%, #DE1A58 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .card-pop .card-desc {
          font-size: 0.82rem;
          line-height: 1.45;
          color: #d3c4f0;
          margin: 0;
        }

        .card-tags {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.35rem;
        }

        .tag {
          font-family: 'Space Mono', monospace;
          font-size: 0.62rem;
          padding: 0.2rem 0.5rem;
          background: rgba(143, 1, 119, 0.2);
          border: 1px solid rgba(143, 1, 119, 0.4);
          border-radius: 4px;
          color: #DE1A58;
          text-transform: uppercase;
          letter-spacing: 0.05em;
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
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 3rem 1.5rem;
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
          text-align: center;
          margin-top: 2.5rem;
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

        @media (max-width: 820px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
            max-width: 560px;
          }
        }

        @media (max-width: 560px) {
          .main-container {
            padding: 2rem 1rem;
          }

          /* one tall card per row, full details shown (no hover on touch) */
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 0.85rem;
            max-width: 420px;
          }

          .project-card {
            aspect-ratio: auto;
          }

          /* hide the compact face and show the full content in normal flow */
          .card-face {
            display: none;
          }

          .card-pop {
            position: static;
            transform: none;
            width: auto;
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            background: transparent;
            border: none;
            box-shadow: none;
            padding: 1.5rem 1.25rem;
            gap: 0.6rem;
          }

          .card-pop svg {
            width: 46px;
            height: 46px;
          }

          .card-pop .card-title-pop {
            font-size: 1.5rem;
          }

          .transmissions {
            display: none;
          }

          .subtitle {
            font-size: 0.5rem;
            letter-spacing: 0.08em;
            margin-bottom: 1rem;
          }

          .footer-text {
            font-size: 0.65rem;
          }

          .footer-year {
            font-size: 0.65rem;
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

        @media (max-width: 640px) {
          .junkyard-text { animation: none; }
          .junkyard-text::before,
          .junkyard-text::after { display: none; }
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

        {/* spacer kept where the transmissions line used to be */}
        <p className="transmissions" aria-hidden="true">&nbsp;</p>

        <div className="projects-grid">
          <Link href="/projects/rustpi" className="project-card featured">
            <div className="card-face">
              <RustPiIcon size={44} />
              <span className="card-title">RustPi</span>
            </div>
            <div className="card-pop">
              <RustPiIcon size={62} />
              <span className="card-title-pop">RustPi</span>
              <p className="card-desc">Building a custom Linux distribution from scratch for Raspberry Pi.</p>
              <div className="card-tags">
                <span className="tag">Rust</span>
                <span className="tag">Linux</span>
                <span className="tag">Embedded</span>
              </div>
            </div>
          </Link>

          <Link href="/projects/pi-monitor" className="project-card featured">
            <div className="card-face">
              <PiMonitorIcon size={44} />
              <span className="card-title">Pi-Monitor</span>
            </div>
            <div className="card-pop">
              <PiMonitorIcon size={62} />
              <span className="card-title-pop">Pi-Monitor</span>
              <p className="card-desc">Lightweight system monitoring agent with a live dashboard and Grafana integration.</p>
              <div className="card-tags">
                <span className="tag">Rust</span>
                <span className="tag">Prometheus</span>
                <span className="tag">Grafana</span>
              </div>
            </div>
          </Link>

          <Link href="/projects/rustpi2" className="project-card featured">
            <div className="card-face">
              <RustPi2Icon size={44} />
              <span className="card-title">RustPi 2</span>
            </div>
            <div className="card-pop">
              <RustPi2Icon size={62} />
              <span className="card-title-pop">RustPi 2</span>
              <p className="card-desc">Turning the bare RustPi image into an Alpine Docker host: apk bootstrap, disk resize, and containers.</p>
              <div className="card-tags">
                <span className="tag">Alpine</span>
                <span className="tag">Docker</span>
                <span className="tag">apk</span>
              </div>
            </div>
          </Link>

          <Link href="/projects/mark-one" className="project-card featured">
            <div className="card-face">
              <MarkOneIcon size={44} />
              <span className="card-title">Mark One</span>
            </div>
            <div className="card-pop">
              <MarkOneIcon size={62} />
              <span className="card-title-pop">Mark One</span>
              <p className="card-desc">A game about building a computer from transistors up, on a circuit engine written in Rust.</p>
              <div className="card-tags">
                <span className="tag">Rust</span>
                <span className="tag">CMOS</span>
                <span className="tag">CPU</span>
              </div>
            </div>
          </Link>

          <Link href="/projects/tv-doctor" className="project-card featured">
            <div className="card-face">
              <TvDoctorIcon size={44} />
              <span className="card-title">TV Doctor</span>
            </div>
            <div className="card-pop">
              <TvDoctorIcon size={62} />
              <span className="card-title-pop">TV Doctor</span>
              <p className="card-desc">Finding, examining and speeding up an old Android TV from a Mac, over ADB, Cast and DIAL.</p>
              <div className="card-tags">
                <span className="tag">Rust</span>
                <span className="tag">Android TV</span>
                <span className="tag">macOS</span>
              </div>
            </div>
          </Link>

          <div className="project-card disabled">
            <div className="card-face">
              <MoreIcon size={44} />
              <span className="card-title">More Coming</span>
            </div>
            <div className="card-pop">
              <MoreIcon size={62} />
              <span className="card-title-pop">More Coming</span>
              <p className="card-desc">Additional projects will materialize from the cosmic void.</p>
              <div className="card-tags">
                <span className="tag">???</span>
              </div>
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