'use client';

import Link from 'next/link';
import { MarkOneIcon } from '@/icons';
import CosmicBackground from '@/components/CosmicBackground';
import DebugItem from '@/components/DebugItem';
import CodeBlock from '@/components/CodeBlock';
import BackToTop from '@/components/BackToTop';

export default function MarkOnePage() {
  const sectionStyle = {
    padding: '5rem 0',
    borderTop: '1px solid var(--border-void)'
  };

  const h2Style = {
    fontFamily: 'Bebas Neue, sans-serif',
    fontSize: '3rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.02em',
    marginBottom: '2rem',
    position: 'relative' as const,
    display: 'inline-block'
  };

  const h3Style = {
    fontSize: '1.5rem',
    fontWeight: 600,
    margin: '2.5rem 0 1rem',
    color: 'var(--text-star)'
  };

  const h4Style = {
    fontSize: '1.2rem',
    fontWeight: 600,
    margin: '2rem 0 0.75rem',
    color: 'var(--accent-nova)'
  };

  const pStyle = {
    color: 'var(--text-dust)',
    marginBottom: '1.25rem',
    lineHeight: 1.8,
    fontSize: '1.05rem'
  };

  const codeStyle = { background: 'var(--bg-tertiary)', padding: '0.2rem 0.5rem', borderRadius: '4px' };

  const shot = (src: string, alt: string, caption: string) => (
    <>
      <div style={{ margin: '2rem 0 0.75rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-void)', boxShadow: '0 20px 80px rgba(0,0,0,0.5)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', background: 'var(--bg-tertiary)', borderBottom: '1px solid var(--border-void)' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27ca40' }}></div>
          <span style={{ marginLeft: '0.5rem', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--text-dim)' }}>http://127.0.0.1:7878</span>
        </div>
        <img src={src} alt={alt} style={{ display: 'block', width: '100%', height: 'auto', background: '#050b14' }} />
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textAlign: 'center', fontFamily: 'JetBrains Mono, monospace', marginBottom: '2rem' }}>{caption}</p>
    </>
  );

  return (
    <div style={{ background: '#010102', minHeight: '100vh' }}>
      <CosmicBackground starCount={150} shootingStarInterval={4000} />
      <BackToTop targetId="content" />

      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(1, 1, 2, 0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border-void)'
      }}>
        <Link
          href="/"
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.9rem',
            color: 'var(--text-dust)',
            textDecoration: 'none'
          }}
        >
          &lt; Back
        </Link>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.45rem',
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '1.6rem',
          color: 'var(--accent-cosmic)',
          letterSpacing: '0.05em'
        }}>
          <MarkOneIcon size={24} />
          <span>Mark One<span style={{ color: 'var(--accent-nova)', animation: 'cursorBlink 1s step-end infinite' }}>_</span></span>
        </span>
      </header>

      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '8rem 2rem 4rem',
        position: 'relative',
        zIndex: 10
      }}>
        <h1 style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          textTransform: 'uppercase',
          letterSpacing: '0.02em',
          lineHeight: 1.1,
          marginBottom: '1.5rem'
        }}>
          Building a <span style={{
            background: 'linear-gradient(135deg, #8F0177 0%, #DE1A58 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Computer</span> from Transistors Up
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '42rem', color: 'var(--text-dust)' }}>
          A game that takes you from a live wire to NAND gates, adders, memory, a CPU and programs running on the computer you built, on a switch-level circuit engine written in Rust
        </p>

        <div style={{ display: 'flex', gap: '3rem', marginTop: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { num: '42', label: 'Marks' },
            { num: '11,998', label: 'Transistor CPU' },
            { num: '139', label: 'Tests Passing' },
            { num: '3.1', label: 'MB Binary Size' }
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent-nova)' }}>{stat.num}</div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginTop: '0.25rem', color: 'var(--text-dim)' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* GitHub Link */}
        <a
          href="https://github.com/Sbonelo-Mntungwa/mark-one"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginTop: '2.5rem',
            padding: '1rem 2rem',
            background: 'linear-gradient(135deg, rgba(143, 1, 119, 0.2) 0%, rgba(222, 26, 88, 0.1) 100%)',
            border: '1px solid rgba(143, 1, 119, 0.5)',
            borderRadius: '50px',
            color: 'var(--text-star)',
            textDecoration: 'none',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.95rem',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(143, 1, 119, 0.4) 0%, rgba(222, 26, 88, 0.25) 100%)';
            e.currentTarget.style.borderColor = '#DE1A58';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(143, 1, 119, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(143, 1, 119, 0.2) 0%, rgba(222, 26, 88, 0.1) 100%)';
            e.currentTarget.style.borderColor = 'rgba(143, 1, 119, 0.5)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ flexShrink: 0 }}>
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span>View Source on GitHub</span>
          <span style={{ fontSize: '1.1rem', transition: 'transform 0.3s ease' }}>→</span>
        </a>

        {/* Notion Documentation Link */}
        <a
          href="https://tungsten-bramble-977.notion.site/ebd//40db9a7f133e80218039d375c8521ba4"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginTop: '1rem',
            padding: '1rem 2rem',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '50px',
            color: 'var(--text-star)',
            textDecoration: 'none',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.95rem',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(255, 255, 255, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ flexShrink: 0 }}>
            <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.84-.046.933-.56.933-1.167V6.354c0-.606-.233-.933-.746-.886l-15.177.887c-.56.046-.747.326-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.747 0-.933-.234-1.495-.933l-4.577-7.186v6.952l1.449.327s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.726l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.886.747-.933zM2.738 1.408l13.59-.933c1.675-.14 2.101.093 2.801.607l3.876 2.706c.467.327.607.747.607 1.214v16.21c0 1.026-.373 1.635-1.68 1.726l-15.458.934c-.98.046-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.148-1.26z"/>
          </svg>
          <span>Read Full Documentation</span>
          <span style={{ fontSize: '1.1rem', transition: 'transform 0.3s ease' }}>→</span>
        </a>

        {/* Terminal */}
        <div style={{
          marginTop: '4rem',
          width: '100%',
          maxWidth: '42rem',
          borderRadius: '12px',
          overflow: 'hidden',
          background: 'var(--bg-code)',
          border: '1px solid var(--border-void)',
          boxShadow: '0 20px 80px rgba(0,0,0,0.5)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', background: 'var(--bg-tertiary)', borderBottom: '1px solid var(--border-void)' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27ca40' }}></div>
          </div>
          <div style={{ padding: '1.5rem', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.875rem', textAlign: 'left' }}>
            <div style={{ color: 'var(--accent-nova)' }}>$ cargo test --release --workspace</div>
            <div style={{ color: 'var(--text-dim)' }}>     Running tests/exploits.rs</div>
            <div style={{ color: 'var(--text-dust)' }}>test result: <span style={{ color: 'var(--accent-green)' }}>ok</span>. <span style={{ color: 'var(--accent-aurora)' }}>5</span> passed; 0 failed</div>
            <div style={{ color: 'var(--text-dim)' }}>     Running tests/solutions.rs</div>
            <div style={{ color: 'var(--text-dust)' }}>test result: <span style={{ color: 'var(--accent-green)' }}>ok</span>. <span style={{ color: 'var(--accent-aurora)' }}>10</span> passed; 0 failed</div>
            <div style={{ color: 'var(--text-dim)' }}>...</div>
            <div style={{ color: 'var(--accent-nova)', marginTop: '0.5rem' }}>$ cargo run --release</div>
            <div style={{ color: 'var(--text-dust)' }}>Mark One running at <span style={{ color: 'var(--accent-aurora)' }}>http://127.0.0.1:7878</span></div>
            <div><span style={{ color: 'var(--accent-green)' }}>$</span> <span style={{ animation: 'cursorBlink 1s step-end infinite' }}>_</span></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10 }}>

        {/* Content List */}
        <section id="content" style={sectionStyle}>
          <h2 style={h2Style}>Content</h2>
          <ol style={{ listStyle: 'none', padding: 0, marginTop: '2rem' }}>
            {[
              { num: '01', text: 'Project Overview', href: '#overview' },
              { num: '02', text: 'How to Play', href: '#play' },
              { num: '03', text: 'The 42 Marks', href: '#marks' },
              { num: '04', text: 'Simulating Transistors', href: '#engine' },
              { num: '05', text: 'Timing & Analysis', href: '#timing' },
              { num: '06', text: 'The Instruction Set', href: '#isa' },
              { num: '07', text: 'Build & Run', href: '#build' },
              { num: '08', text: 'Debugging Adventures', href: '#debugging' },
              { num: '09', text: 'Key Learnings', href: '#learnings' },
              { num: '10', text: 'Full Documentation (Notion)', href: '#documentation' },
            ].map((item) => (
              <li key={item.num} style={{
                padding: '1rem 1.25rem',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-void)',
                borderRadius: '8px',
                marginBottom: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'all 0.3s ease'
              }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, color: 'var(--accent-nova)', fontSize: '1.1rem' }}>{item.num}</span>
                <a href={item.href} style={{ color: 'var(--text-star)', fontWeight: 500, textDecoration: 'none', fontSize: '1.05rem' }}>{item.text}</a>
              </li>
            ))}
          </ol>
        </section>

        {/* Overview */}
        <section id="overview" style={sectionStyle}>
          <h2 style={h2Style}>Project Overview</h2>
          <p style={pStyle}>
            Mark One is a game about building a computer from transistors up. You start with a live wire and a relay, build NOT, NAND and NOR
            from NMOS and PMOS transistors, and keep going through adders, latches, registers, RAM and a control unit until an 8-bit CPU runs
            programs you wrote for it.
          </p>
          <p style={pStyle}>
            Underneath the game is a real circuit engine written in Rust. Transistors are simulated at switch level, every finished part is
            checked against a reference model before it unlocks the next Mark, and the whole thing ships as one binary with the web view
            embedded at build time.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '2rem' }}>
            {[
              { icon: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#DE1A58" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h5M15 12h5" /><path d="M9 6v12" /><path d="M12 8v8" /><path d="M12 8h3v-4M12 16h3v4" /></svg>), title: 'Switch-level Transistors', desc: 'NMOS and PMOS simulated as switches with signal strength, floating nets and leaking charge' },
              { icon: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#DE1A58" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h4v-4h4v-4h4V8h4V4" /></svg>), title: '42 Marks', desc: 'A course from a live wire to software, each Mark gated by diagnostics' },
              { icon: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#DE1A58" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 16h4V8h5v8h3V8h6" /></svg>), title: 'Timing Mode', desc: 'Gate delays, glitches, setup violations and critical paths in a live waveform' },
              { icon: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#DE1A58" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5" /><path d="M14 5l-4 14" /></svg>), title: 'Verilog & KiCad Export', desc: 'Every library chip exported to Verilog is checked against the engine in Icarus Verilog' },
            ].map((card) => (
              <div key={card.title} style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-void)', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{card.icon}</div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-star)' }}>{card.title}</h4>
                <p style={{ fontSize: '0.95rem', margin: 0, color: 'var(--text-dust)' }}>{card.desc}</p>
              </div>
            ))}
          </div>

          <h3 style={h3Style}>What&apos;s included</h3>
          {[
            'Missions: 42 Marks, each checked by diagnostics before it unlocks the next',
            'Experiment: build anything from unlocked parts and save designs as components',
            'Waveform: probe wires and watch them as timing traces, export to VCD',
            'Test benches: expected input/output rows, rerun after every change',
            'Equivalence: prove two designs behave the same',
            'Debugger: step, breakpoints, live registers and RAM',
            'Print: schematic sheets with standard gate symbols and a bill of materials',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', margin: '0.75rem 0' }}>
              <span style={{ flexShrink: 0, width: '24px', height: '24px', background: 'var(--accent-green)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.8rem' }}>✓</span>
              <span style={{ color: 'var(--text-dust)', fontSize: '1.05rem' }}>{item}</span>
            </div>
          ))}
        </section>

        {/* How to Play */}
        <section id="play" style={sectionStyle}>
          <h2 style={h2Style}>How to Play</h2>
          <p style={pStyle}>Every Mark follows the same loop:</p>

          <div style={{ margin: '2rem 0' }}>
            {[
              { step: '01', title: 'Pick a Mark', desc: 'A one-card lesson explains the component, never how to build it' },
              { step: '02', title: 'Place and wire', desc: 'Drop parts from the fabricator at the bottom, then click pin to pin to wire them' },
              { step: '03', title: 'Test it live', desc: 'Toggle inputs and pulse the clock. Gold wires carry 1, steel wires carry 0' },
              { step: '04', title: 'Run diagnostics', desc: 'Press D. A pass turns your circuit into a chip in the fabricator for every later Mark' },
            ].map((s) => (
              <div key={s.step} style={{ display: 'flex', gap: '1rem', margin: '1rem 0', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border-void)' }}>
                <code style={{ flexShrink: 0, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', color: 'var(--accent-aurora)', minWidth: '40px' }}>{s.step}</code>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-star)', marginBottom: '0.25rem' }}>{s.title}</div>
                  <div style={{ color: 'var(--text-dust)', fontSize: '0.95rem' }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {shot('/projects/mark-one/mission.jpg', 'Mark 4: a CMOS NAND gate built from four transistors, with diagnostics passed', 'Mk 4: a CMOS NAND from two PMOS in parallel and two NMOS in series. 4 checks passed, NOR unlocked')}

          <p style={pStyle}>
            Experiment, under Bench in the left panel, is free build: anything you have unlocked, with your own pins, test benches,
            equivalence checks, timing and export. Designs saved there become components you can place like any library chip.
          </p>

          <h3 style={h3Style}>Controls</h3>
          <div style={{ margin: '1rem 0' }}>
            {[
              { key: 'D', desc: 'Run diagnostics' },
              { key: 'Space', desc: 'Pulse the clock' },
              { key: 'K', desc: 'Change the clock speed' },
              { key: 'H', desc: 'Run to HLT or a breakpoint' },
              { key: 'A', desc: 'Probe a wire' },
              { key: 'W', desc: 'Show the waveform' },
              { key: 'T', desc: 'Timing mode' },
              { key: 'R', desc: 'Rotate the selected part' },
              { key: 'Del', desc: 'Delete the selected part' },
              { key: 'P', desc: 'Print the schematic' },
              { key: 'X', desc: 'Reset the simulation' },
              { key: 'C', desc: 'Clear the board' },
            ].map((k) => (
              <div key={k.key} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', margin: '0.75rem 0' }}>
                <code style={{ flexShrink: 0, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', background: 'var(--bg-tertiary)', padding: '0.25rem 0.75rem', borderRadius: '4px', color: 'var(--accent-aurora)', minWidth: '110px', textAlign: 'center' }}>{k.key}</code>
                <span style={{ color: 'var(--text-dust)', fontSize: '1.05rem' }}>{k.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Marks */}
        <section id="marks" style={sectionStyle}>
          <h2 style={h2Style}>The 42 Marks</h2>
          <p style={pStyle}>Nine chapters, each built out of the chips the one below it unlocked:</p>

          <div style={{ margin: '2rem 0', padding: '1.5rem', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--border-void)' }}>
            {[
              { name: 'Software', marks: 'Mk 38-42', tech: 'Programs, then a free workshop' },
              { name: 'The CPU', marks: 'Mk 35-37', tech: 'Control unit, CPU, the computer' },
              { name: 'Memory Banks', marks: 'Mk 31-34', tech: '2 to 16 bytes of RAM' },
              { name: 'Counting & Decoding', marks: 'Mk 25-30', tech: 'Incrementer, PC, decoders' },
              { name: 'Memory', marks: 'Mk 18-24', tech: 'Latches, flip-flop, registers' },
              { name: 'Arithmetic', marks: 'Mk 10-17', tech: 'Adders up to 8 bits, ALU' },
              { name: 'Gates', marks: 'Mk 6-9', tech: 'AND, OR, XOR, selector' },
              { name: 'Transistors', marks: 'Mk 3-5', tech: 'NOT, NAND, NOR' },
              { name: 'Charge', marks: 'Mk 1-2', tech: 'Live wire, relay' },
            ].map((layer, i, arr) => (
              <div key={layer.name}>
                <div style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-void)', borderRadius: '8px', padding: '1rem 1.5rem', margin: '0.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-star)', fontSize: '1.05rem' }}>{layer.name} <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', fontWeight: 400, color: 'var(--text-dim)', marginLeft: '0.5rem' }}>{layer.marks}</span></span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', color: 'var(--accent-cosmic)', background: 'rgba(143, 1, 119, 0.15)', padding: '0.25rem 0.75rem', borderRadius: '4px' }}>{layer.tech}</span>
                </div>
                {i < arr.length - 1 && <div style={{ textAlign: 'center', fontSize: '1.5rem', color: 'var(--text-dim)' }}>↑</div>}
              </div>
            ))}
          </div>

          <h3 style={h3Style}>Diagnostics gate every Mark</h3>
          <p style={pStyle}>
            Each Mark drives your circuit through a test bench and compares every step with a reference model. Sequential Marks keep a
            history of recent steps, and the CPU and computer Marks run whole test programs for a fixed number of cycles. Every Mark also
            has a reference solution in <code style={codeStyle}>crates/course/tests/solutions.rs</code> that must pass, so no Mark can ship
            impossible.
          </p>

          <h3 style={h3Style}>Three crates and a view</h3>
          <div style={{ margin: '2rem 0' }}>
            {[
              { path: 'crates/engine', name: 'mark-one-engine', desc: 'Simulator, component models, analysis (truth tables, benches, equivalence, timing) and Verilog/KiCad export' },
              { path: 'crates/course', name: 'mark-one-course', desc: 'The 42 Marks, their test benches, diagnostics and saved progress' },
              { path: 'crates/server', name: 'mark-one', desc: 'The binary: axum JSON API on port 7878 plus the embedded web view' },
              { path: 'web/', name: 'the view', desc: 'Plain ES modules and CSS, no framework and no front-end build step' },
            ].map((m) => (
              <div key={m.path} style={{ display: 'flex', gap: '1rem', margin: '1rem 0', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border-void)' }}>
                <code style={{ flexShrink: 0, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', color: 'var(--accent-aurora)', minWidth: '140px' }}>{m.path}</code>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-star)', marginBottom: '0.25rem' }}>{m.name}</div>
                  <div style={{ color: 'var(--text-dust)', fontSize: '0.95rem' }}>{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Engine */}
        <section id="engine" style={sectionStyle}>
          <h2 style={h2Style}>Simulating Transistors</h2>
          <p style={pStyle}>
            A gate-level simulator would have made the first five Marks meaningless: you cannot build a NAND out of NANDs. So the bottom of
            the engine works on transistors, in the style of IRSIM and COSMOS, and every net carries one of four values.
          </p>

          <CodeBlock language="rust">{`/// The value on a net. Four-valued: driven 0, driven 1, floating, unknown.
pub enum Sig {
    L,
    H,
    /// Floating: nothing drives this line.
    Z,
    /// Unknown or conflicting.
    X,
}`}</CodeBlock>

          <h3 style={h3Style}>Solving a network of switches</h3>
          <p style={pStyle}>
            A transistor whose gate is a known value is simply on or off. Conducting channels join nets into groups with a union-find, and
            each group takes the value of whatever drives it. When two drivers meet, they either agree or short:
          </p>

          <CodeBlock language="rust">{`/// Combine two drivers on the same net. Z yields; equal values agree;
/// anything else is a conflict.
pub(super) fn merge(a: Sig, b: Sig, short: &mut bool) -> Sig {
    match (a, b) {
        (Sig::Z, x) | (x, Sig::Z) => x,
        (Sig::X, _) | (_, Sig::X) => Sig::X,
        (x, y) if x == y => x,
        _ => {
            *short = true;
            Sig::X
        }
    }
}`}</CodeBlock>

          <p style={pStyle}>
            If a gate is X or Z the transistor might be either, so the network is solved twice, once with it on and once off, and any net
            whose value differs between the two becomes X.
          </p>

          <h3 style={h3Style}>Strength and charge</h3>
          <p style={pStyle}>
            Two physical effects matter for a game about real circuits. An NMOS passes 0 well and 1 badly: a 1 that reaches a net only
            through an NMOS arrives about one threshold voltage short of the rail, and the same is true of a 0 through a PMOS. The solver
            marks such nets <strong style={{ color: 'var(--text-star)' }}>degraded</strong>. An undriven group keeps its stored charge but
            counts as floating, and that charge survives <code style={codeStyle}>CHARGE_SETTLES = 8</code> settles before it leaks to X, so
            dynamic storage has to be refreshed.
          </p>

          <h3 style={h3Style}>Chips once proven</h3>
          <p style={pStyle}>
            Simulating every transistor all the way up would make the CPU crawl. Once a Mark passes, its part runs as a directional
            behavioural model evaluated in Gauss-Seidel order until nothing changes, capped at 200 sweeps. The CPU model stands for 11,998
            transistors and still simulates instantly, and every model has its own unit tests in{' '}
            <code style={codeStyle}>crates/engine/src/components</code>.
          </p>
        </section>

        {/* Timing */}
        <section id="timing" style={sectionStyle}>
          <h2 style={h2Style}>Timing & Analysis</h2>
          <p style={pStyle}>
            The default simulator is zero-delay: it checks what a circuit computes, not when. Press T and the board switches to an
            event-driven simulator where a chip&apos;s outputs change its delay after its inputs do, and a transistor&apos;s channel responds
            one unit after its gate.
          </p>

          {shot('/projects/mark-one/timing-glitch.jpg', 'Timing mode: a selector built from gates glitches when SEL falls, shown in the waveform', 'A selector built from NOT and three NANDs. The NOT path is one gate slower, so Y dips when SEL falls')}

          <p style={pStyle}>
            Delays are inertial, as in Verilog: a pulse shorter than a chip&apos;s delay never reaches its output, but one at least that long
            does, so static hazards from unequal path delays show up in the waveform marked <code style={codeStyle}>glitch</code>.
            Edge-triggered chips are also checked for setup violations: a data input that changes within{' '}
            <code style={codeStyle}>SETUP = 1</code> unit of the clock edge is reported, because real hardware might take either value or
            go metastable. A run that still has events pending after <code style={codeStyle}>HORIZON = 5000</code> units is treated as
            oscillating.
          </p>

          <h3 style={h3Style}>Benches, equivalence and export</h3>
          <p style={pStyle}>
            The Analysis panel has five tabs: Table generates a full truth table, Bench reruns your expected rows after every change,
            Equiv proves two designs behave the same, Timing finds the critical path, and Export writes Verilog or a KiCad netlist. The
            Verilog for every library chip is checked against the engine by simulating it in Icarus Verilog during{' '}
            <code style={codeStyle}>cargo test</code>.
          </p>

          <CodeBlock language="text">{`# 2-to-1 selector: Y = SEL ? B : A
A B SEL | Y
0 0 0   | 0
1 0 0   | 1
0 1 0   | 0
1 1 0   | 1
0 0 1   | 0
1 0 1   | 0`}</CodeBlock>

          <p style={pStyle}>Press P and any board prints as a schematic sheet with standard gate symbols and a bill of materials:</p>

          <div style={{ margin: '2rem 0 0.75rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-void)', boxShadow: '0 20px 80px rgba(0,0,0,0.5)', background: '#ffffff' }}>
            <img src="/projects/mark-one/schematic.png" alt="A printed schematic of a full adder with standard gate symbols" style={{ display: 'block', width: '100%', height: 'auto' }} />
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textAlign: 'center', fontFamily: 'JetBrains Mono, monospace' }}>A full adder from two XOR, two AND and one OR: 10 parts, 12 wires, 50 transistors</p>
        </section>

        {/* ISA */}
        <section id="isa" style={sectionStyle}>
          <h2 style={h2Style}>The Instruction Set</h2>
          <p style={pStyle}>
            The CPU you build in Mk 36 is deliberately small: one byte per instruction, opcode in the high 4 bits and operand n in the low
            4. There are 16 bytes of ROM, 16 bytes of RAM and one 8-bit accumulator.
          </p>

          <div style={{ margin: '2rem 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '0.5rem' }}>
            {[
              { op: 'LDI n', hex: '1n', does: 'ACC = n' },
              { op: 'ADI n', hex: '2n', does: 'ACC = ACC + n' },
              { op: 'ADD n', hex: '3n', does: 'ACC = ACC + RAM[n]' },
              { op: 'SUB n', hex: '4n', does: 'ACC = ACC - RAM[n]' },
              { op: 'LDA n', hex: '5n', does: 'ACC = RAM[n]' },
              { op: 'STA n', hex: '6n', does: 'RAM[n] = ACC' },
              { op: 'JMP n', hex: '7n', does: 'PC = n' },
              { op: 'JZ n', hex: '8n', does: 'If ACC is 0, PC = n' },
              { op: 'OUT', hex: '90', does: 'OUT = ACC' },
              { op: 'HLT', hex: 'F0', does: 'Stop' },
              { op: 'NOP', hex: '00', does: 'Nothing' },
            ].map((i) => (
              <div key={i.op} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.6rem 0.9rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-void)', borderRadius: '8px' }}>
                <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', color: 'var(--accent-nova)', minWidth: '24px' }}>{i.hex}</code>
                <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', color: 'var(--text-star)', minWidth: '60px' }}>{i.op}</code>
                <span style={{ color: 'var(--text-dust)', fontSize: '0.9rem' }}>{i.does}</span>
              </div>
            ))}
          </div>

          <h3 style={h3Style}>A first program</h3>
          <p style={pStyle}>
            Select a ROM on the board to write assembly. Labels end with a colon and comments start with a semicolon. This is the program
            the Verilog export test runs on both the engine and Icarus Verilog:
          </p>

          <CodeBlock language="asm">{`LDI 5    ; 15   ACC = 5
ADI 7    ; 27   ACC = 12
STA 2    ; 62   RAM[2] = 12
ADD 2    ; 32   ACC = 24
OUT      ; 90   OUT = 24
HLT      ; F0`}</CodeBlock>

          {shot('/projects/mark-one/debugger.jpg', 'The program debugger stopped at a breakpoint, showing PC, ACC and RAM', 'Ran 4 cycles and stopped at the breakpoint on address 4: ACC = 24 (0x18), RAM[2] = 0C')}
        </section>

        {/* Build */}
        <section id="build" style={sectionStyle}>
          <h2 style={h2Style}>Build & Run</h2>
          <p style={pStyle}>Rust 1.85 or newer, then:</p>

          <CodeBlock language="bash">{`# Build and run
cargo run --release
# Mark One running at http://127.0.0.1:7878  (save file: mark_one_save.json)

# Run the tests (139 across the workspace)
cargo test --release --workspace

# Optional: lets the Verilog export tests run
brew install icarus-verilog`}</CodeBlock>

          <div style={{ margin: '1rem 0' }}>
            {[
              { path: 'PORT', desc: 'HTTP port (default 7878)' },
              { path: 'MARK_ONE_SAVE', desc: 'Progress, drafts and designs (default mark_one_save.json)' },
              { path: 'UNLOCK_ALL', desc: 'Set to 1 to open every Mark and chip' },
            ].map((ep) => (
              <div key={ep.path} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', margin: '0.75rem 0' }}>
                <code style={{ flexShrink: 0, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', background: 'var(--bg-tertiary)', padding: '0.25rem 0.75rem', borderRadius: '4px', color: 'var(--accent-aurora)' }}>{ep.path}</code>
                <span style={{ color: 'var(--text-dust)', fontSize: '1.05rem' }}>{ep.desc}</span>
              </div>
            ))}
          </div>

          <h3 style={h3Style}>One binary</h3>
          <p style={pStyle}>
            The server&apos;s <code style={codeStyle}>build.rs</code> walks <code style={codeStyle}>web/</code>, skips dotfiles, and generates
            an <code style={codeStyle}>assets.rs</code> that embeds every HTML, CSS and JS file with its MIME type. The release binary is
            3.1MB and needs nothing else to run.
          </p>

          <CodeBlock language="rust">{`//! Embeds every file under \`web/\` into the binary, so the server is one
//! self-contained executable. Generates \`$OUT_DIR/assets.rs\`.

fn mime(p: &Path) -> &'static str {
    match p.extension().and_then(|e| e.to_str()) {
        Some("html") => "text/html; charset=utf-8",
        Some("css") => "text/css; charset=utf-8",
        Some("js") => "text/javascript; charset=utf-8",
        ...
    }
}`}</CodeBlock>
        </section>

        {/* Debugging */}
        <section id="debugging" style={sectionStyle}>
          <h2 style={h2Style}>Debugging Adventures</h2>
          <p style={pStyle}>
            The hardest bugs were designs that passed diagnostics but would fail in silicon. Each one below once passed, and each now lives
            in <code style={codeStyle}>crates/course/tests/exploits.rs</code> as a test that must fail:
          </p>

          <div style={{ marginTop: '2rem' }}>
            <DebugItem title="Two-Transistor AND Passed Diagnostics" defaultOpen={true}>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Symptom:</strong> An AND gate made of one NMOS and one PMOS passed Mk 6 with a correct truth table. A real CMOS AND needs six.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Cause:</strong> The NMOS passes B to Y when A = 1, which gives a weak 1, and the PMOS pulls Y to GND when A = 0, which gives a weak 0. The logic was right and the voltages were not.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Solution:</strong> Track strength in the switch solver and fail any degraded output: <code style={codeStyle}>An output is degraded: it is driven only through a transistor that passes that value weakly</code></p>
            </DebugItem>

            <DebugItem title="Pass-Transistor Selector Passed">
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Symptom:</strong> A 2-to-1 selector from two transistors passed Mk 9.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Cause:</strong> An NMOS passes B when SEL = 1 and a PMOS passes A when SEL = 0. Each one passes half its values weakly.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Solution:</strong> Caught by the same degraded check. The message tells you to drive outputs from a complementary pull-up and pull-down.</p>
            </DebugItem>

            <DebugItem title="Dynamic Latch Held Its Value Forever">
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Symptom:</strong> A D latch built as D, then one NMOS gated by E, then two inverters, passed with no feedback keeper.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Cause:</strong> While E = 0 the node between the pass transistor and the inverters is undriven, and the engine kept its stored charge indefinitely. Real charge leaks.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Solution:</strong> Count settles each net spends undriven and leak it to X after <code style={codeStyle}>CHARGE_SETTLES = 8</code>: <code style={codeStyle}>An output is unknown (X): conflicting drivers, an unconnected input upstream, or stored charge that has leaked away.</code></p>
            </DebugItem>

            <DebugItem title="Glitch Flip-Flop Passed in One Order">
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Symptom:</strong> A flip-flop made from a D latch enabled by AND(CLK, NOT CLK) passed Mk 20.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Cause:</strong> That AND is always 0 in a real circuit. It only produced a zero-width pulse because the parts were placed AND, latch, NOT, so the zero-delay simulator happened to evaluate them in an order that caught it.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Solution:</strong> Run every bench twice, chips first to last and then last to first, and fail any design that only passes one way: <code style={codeStyle}>Passes only when chips are evaluated in one particular order</code></p>
            </DebugItem>

            <DebugItem title="Source-Follower Buffer on the NOT Board">
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Symptom:</strong> An NMOS from VCC and a PMOS to GND, both gated by A, wired to Mk 3&apos;s inverter pins.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Cause:</strong> Both transistors are the wrong way round for their rails, so Y follows A weakly instead of inverting it.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Solution:</strong> Kept as a regression test so the degraded and wrong-value checks keep rejecting it.</p>
            </DebugItem>
          </div>
        </section>

        {/* Learnings */}
        <section id="learnings" style={sectionStyle}>
          <h2 style={h2Style}>Key Learnings</h2>

          <h3 style={h3Style}>Technical skills gained</h3>
          <div style={{ margin: '1rem 0' }}>
            {['CMOS Logic', 'Switch-level Simulation', 'Four-valued Logic', 'Union-Find', 'Event-driven Simulation', 'Static Hazards', 'Setup Timing', 'CPU Design', 'Verilog', 'KiCad Netlists', 'axum', 'build.rs Codegen'].map((skill) => (
              <span key={skill} style={{ display: 'inline-block', background: 'var(--bg-tertiary)', border: '1px solid var(--border-void)', padding: '0.5rem 1rem', borderRadius: '100px', fontSize: '0.9rem', color: 'var(--text-dust)', margin: '0.25rem' }}>{skill}</span>
            ))}
          </div>

          <h4 style={h4Style}>1. A correct truth table can still be a broken circuit</h4>
          <p style={pStyle}>The two-transistor AND matched its spec in every row. Only modelling signal strength showed that its outputs sat a threshold voltage away from the rails.</p>

          <h4 style={h4Style}>2. Zero-delay simulators hide races</h4>
          <p style={pStyle}>With no delays, the order chips are evaluated in decides what a glitch does. Running every bench in both orders costs one extra pass and catches designs that rely on luck.</p>

          <h4 style={h4Style}>3. Prove it once, then model it</h4>
          <p style={pStyle}>NOT, NAND and NOR are proved from transistors, and every later part runs as a tested model. That is what lets an 11,998-transistor CPU step at the speed of a click.</p>

          <blockquote style={{ borderLeft: '4px solid var(--accent-cosmic)', paddingLeft: '1.5rem', margin: '2rem 0', fontStyle: 'italic', color: 'var(--text-dust)', fontSize: '1.1rem' }}>
            &ldquo;If a circuit only works in one evaluation order, it only works by accident.&rdquo;
          </blockquote>
        </section>

        {/* Full Documentation */}
        <section id="documentation" style={sectionStyle}>
          <h2 style={h2Style}>Full Documentation</h2>
          <p style={pStyle}>
            Want the complete technical deep-dive? The full Mark One documentation covers the switch-level solver, every Mark and its
            diagnostics, the timing model, the CPU and its instruction set, and every exploit found along the way.
          </p>

          <a
            href="https://tungsten-bramble-977.notion.site/ebd//40db9a7f133e80218039d375c8521ba4"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(143, 1, 119, 0.08) 100%)',
              border: '1px solid rgba(143, 1, 119, 0.3)',
              borderRadius: '12px',
              padding: '2rem',
              margin: '2rem 0',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#DE1A58';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(143, 1, 119, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(143, 1, 119, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <svg viewBox="0 0 24 24" width="32" height="32" fill="var(--text-star)" style={{ flexShrink: 0 }}>
                <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.84-.046.933-.56.933-1.167V6.354c0-.606-.233-.933-.746-.886l-15.177.887c-.56.046-.747.326-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.747 0-.933-.234-1.495-.933l-4.577-7.186v6.952l1.449.327s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.726l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.886.747-.933zM2.738 1.408l13.59-.933c1.675-.14 2.101.093 2.801.607l3.876 2.706c.467.327.607.747.607 1.214v16.21c0 1.026-.373 1.635-1.68 1.726l-15.458.934c-.98.046-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.148-1.26z"/>
              </svg>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-star)', margin: 0 }}>Mark One: Complete Technical Documentation</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', margin: '0.25rem 0 0', fontFamily: 'JetBrains Mono, monospace' }}>tungsten-bramble-977.notion.site</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
              {['Switch-level Solver', 'All 42 Marks', 'Diagnostics', 'Timing Mode', 'CPU & ISA', 'Verilog Export', 'Exploits Found'].map((tag) => (
                <span key={tag} style={{
                  background: 'rgba(143, 1, 119, 0.15)',
                  border: '1px solid rgba(143, 1, 119, 0.25)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '100px',
                  fontSize: '0.8rem',
                  color: 'var(--accent-cosmic)',
                  fontFamily: 'JetBrains Mono, monospace'
                }}>{tag}</span>
              ))}
            </div>
            <p style={{ color: 'var(--text-dust)', margin: 0, fontSize: '0.95rem', lineHeight: 1.7 }}>
              Covers four-valued signals and the union-find network solver, signal strength and charge leakage, behavioural chip models,
              the event-driven timing simulator with inertial delays and setup checks, the 8-bit CPU and its 11 instructions, Verilog and
              KiCad export, and every design that once cheated diagnostics.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.25rem', color: 'var(--accent-nova)', fontSize: '0.9rem', fontFamily: 'JetBrains Mono, monospace' }}>
              <span>Open in Notion</span>
              <span style={{ fontSize: '1.1rem' }}>→</span>
            </div>
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ position: 'relative', zIndex: 10, padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid var(--border-void)' }}>
        <p style={{ color: 'var(--text-dim)', fontSize: '1rem' }}>Mark One: 42 Marks, an 11,998-transistor CPU, 139 tests, one 3.1MB binary.</p>
        <p style={{ marginTop: '2rem', fontSize: '0.875rem', color: 'var(--text-dim)' }}>© 2026 - Built from transistors up</p>
      </footer>
    </div>
  );
}
