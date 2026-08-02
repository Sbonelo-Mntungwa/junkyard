/*
  PROJECT PAGE TEMPLATE
  =====================
  Copy this file to: src/app/projects/<slug>/page.tsx
  Then fill only the CONFIG BLOCKS at the top. The layout JSX below reads from
  those blocks, so in most cases you edit data, not markup.

  See src/templates/NEW_PROJECT.md for the full workflow and the mapping from a
  Notion doc to these blocks.

  RULES:
  - Keep 'use client' as the very first line.
  - Use the CSS variables from src/styles/globals.css for every color.
  - Do NOT use em dashes anywhere. Use colons, hyphens, or parentheses instead.
  - Delete any optional section you do not need. Each is marked OPTIONAL below.
*/

'use client';

import Link from 'next/link';
import CosmicBackground from '@/components/CosmicBackground';
import DebugItem from '@/components/DebugItem';
import CodeBlock from '@/components/CodeBlock';
import BackToTop from '@/components/BackToTop';

export default function ProjectTemplatePage() {
  // ============================================================
  // FILL: PROJECT METADATA
  // ============================================================
  const project = {
    name: 'PROJECT_NAME',
    icon: '>', // small glyph shown in the header and on the home card
    tagline:
      'One or two sentences describing what this project is and what it does.',
    githubUrl: 'https://github.com/USER/REPO',
    notionUrl: 'https://your-notion-doc-url',
  };

  // ============================================================
  // FILL: HERO HEADLINE
  // Renders as: LEAD <gradient>HIGHLIGHT</gradient> TAIL
  // ============================================================
  const headline = {
    lead: 'Building a',
    highlight: 'Highlighted Phrase',
    tail: 'from Scratch',
  };

  // ============================================================
  // FILL: HERO STATS (use 3 or 4)
  // ============================================================
  const stats = [
    { num: '512', label: 'MB Image Size' },
    { num: '~3s', label: 'Boot Time' },
    { num: '100%', label: 'Custom Built' },
  ];

  // ============================================================
  // FILL: HERO TERMINAL (optional flavor block)
  // Each line is one printed row. Colors are CSS variables.
  // ============================================================
  const terminalLines = [
    { text: '$ ./run --demo', color: 'var(--accent-nova)' },
    { text: 'starting service on port 8080', color: 'var(--text-dust)' },
    { text: 'ready', color: 'var(--accent-green)' },
  ];

  // ============================================================
  // FILL: TABLE OF CONTENTS
  // href values must match the section id attributes further down.
  // ============================================================
  const contents = [
    { num: '01', text: 'Project Overview', href: '#overview' },
    { num: '02', text: 'Architecture', href: '#architecture' },
    { num: '03', text: 'Deep Dive', href: '#deep-dive' },
    { num: '04', text: 'Debugging Adventures', href: '#debugging' },
    { num: '05', text: 'Key Learnings', href: '#learnings' },
    { num: '06', text: 'Full Documentation (Notion)', href: '#documentation' },
  ];

  // ============================================================
  // FILL: OVERVIEW
  // ============================================================
  const overviewParagraphs = [
    'First overview paragraph. What it is, where it runs, why it exists.',
    'Second overview paragraph. Scope, boundaries, what it does not do.',
  ];

  // OPTIONAL: feature cards. Delete the array and the block below if unused.
  const featureCards = [
    { icon: '🦀', title: 'Feature One', desc: 'Short description of feature one.' },
    { icon: '🐧', title: 'Feature Two', desc: 'Short description of feature two.' },
    { icon: '📦', title: 'Feature Three', desc: 'Short description of feature three.' },
    { icon: '🔧', title: 'Feature Four', desc: 'Short description of feature four.' },
  ];

  // OPTIONAL: a checklist of what is included. Delete if unused.
  const whatsIncluded = [
    'First included thing.',
    'Second included thing.',
    'Third included thing.',
  ];

  // ============================================================
  // FILL: ARCHITECTURE LAYER STACK
  // Rendered bottom to top with an up arrow between rows.
  // ============================================================
  const layers = [
    { name: 'User Applications', tech: 'Shell, SSH, Utilities' },
    { name: 'Init System', tech: 'Rust (PID 1)' },
    { name: 'User-space Libraries', tech: 'BusyBox, musl libc' },
    { name: 'Linux Kernel', tech: '6.x ARM64' },
    { name: 'Bootloader', tech: 'Raspberry Pi GPU' },
    { name: 'Hardware', tech: 'Pi 3A+ (BCM2837)' },
  ];

  // ============================================================
  // FILL: DEBUGGING ITEMS
  // Each maps to a collapsible DebugItem with Symptom, Cause, Solution.
  // This maps directly from an "Issues & Resolutions" table in Notion.
  // ============================================================
  const debugItems = [
    {
      title: 'Short description of the symptom',
      open: true, // first one usually starts open
      symptom: 'What you saw. Error text can go here.',
      cause: 'Why it happened.',
      solution: 'What fixed it.',
    },
    {
      title: 'Second issue title',
      open: false,
      symptom: 'What you saw.',
      cause: 'Why it happened.',
      solution: 'What fixed it.',
    },
  ];

  // ============================================================
  // FILL: KEY LEARNINGS
  // ============================================================
  const skills = [
    'Skill One',
    'Skill Two',
    'Skill Three',
    'Skill Four',
  ];

  const learnings = [
    { title: '1. First Learning', body: 'One paragraph on what you took away.' },
    { title: '2. Second Learning', body: 'One paragraph on what you took away.' },
    { title: '3. Third Learning', body: 'One paragraph on what you took away.' },
  ];

  const closingQuote = 'A short closing line that captures the spirit of the build.';

  // ============================================================
  // FILL: NOTION DOCUMENTATION CARD
  // ============================================================
  const notionCard = {
    title: 'PROJECT_NAME - Complete Technical Documentation',
    host: 'your-notion-workspace.notion.site',
    tags: ['Tag One', 'Tag Two', 'Tag Three', 'Tag Four'],
    description:
      'One paragraph summary of what the full Notion write-up covers.',
  };

  // ============================================================
  // FILL: FOOTER
  // ============================================================
  const footer = {
    title: 'Built with 🦀 and Curiosity',
    tagline: 'A one line sign off for the project.',
    copyright: '© 2026 - Built from scratch',
  };

  // ============================================================
  // SHARED STYLES (do not edit unless you are changing the design system)
  // ============================================================
  const sectionStyle = {
    padding: '5rem 0',
    borderTop: '1px solid var(--border-void)',
  };

  const h2Style = {
    fontFamily: 'Bebas Neue, sans-serif',
    fontSize: '3rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.02em',
    marginBottom: '2rem',
    position: 'relative' as const,
    display: 'inline-block',
  };

  const h3Style = {
    fontSize: '1.5rem',
    fontWeight: 600,
    margin: '2.5rem 0 1rem',
    color: 'var(--text-star)',
  };

  const h4Style = {
    fontSize: '1.2rem',
    fontWeight: 600,
    margin: '2rem 0 0.75rem',
    color: 'var(--accent-nova)',
  };

  const pStyle = {
    color: 'var(--text-dust)',
    marginBottom: '1.25rem',
    lineHeight: 1.8,
    fontSize: '1.05rem',
  };

  const pillLinkBase = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1rem 2rem',
    borderRadius: '50px',
    color: 'var(--text-star)',
    textDecoration: 'none',
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: '0.95rem',
    transition: 'all 0.3s ease',
    position: 'relative' as const,
    overflow: 'hidden' as const,
  };

  return (
    <div style={{ background: '#010102', minHeight: '100vh' }}>
      <CosmicBackground starCount={150} shootingStarInterval={4000} />
      <BackToTop targetId="content" />

      {/* ================= HEADER ================= */}
      <header
        style={{
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
          borderBottom: '1px solid var(--border-void)',
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.9rem',
            color: 'var(--text-dust)',
            textDecoration: 'none',
          }}
        >
          &lt; Back
        </Link>
        <span
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '1.6rem',
            color: 'var(--accent-cosmic)',
            letterSpacing: '0.05em',
          }}
        >
          <span style={{ color: 'var(--accent-nova)' }}>{project.icon} </span>
          {project.name}
          <span
            style={{
              color: 'var(--accent-nova)',
              animation: 'cursorBlink 1s step-end infinite',
            }}
          >
            _
          </span>
        </span>
      </header>

      {/* ================= HERO ================= */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '8rem 2rem 4rem',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
          }}
        >
          {headline.lead}{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #8F0177 0%, #DE1A58 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {headline.highlight}
          </span>{' '}
          {headline.tail}
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '42rem', color: 'var(--text-dust)' }}>
          {project.tagline}
        </p>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            gap: '3rem',
            marginTop: '3rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {stats.map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'var(--accent-nova)',
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  marginTop: '0.25rem',
                  color: 'var(--text-dim)',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub link */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...pillLinkBase,
            marginTop: '2.5rem',
            background:
              'linear-gradient(135deg, rgba(143, 1, 119, 0.2) 0%, rgba(222, 26, 88, 0.1) 100%)',
            border: '1px solid rgba(143, 1, 119, 0.5)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background =
              'linear-gradient(135deg, rgba(143, 1, 119, 0.4) 0%, rgba(222, 26, 88, 0.25) 100%)';
            e.currentTarget.style.borderColor = '#DE1A58';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(143, 1, 119, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background =
              'linear-gradient(135deg, rgba(143, 1, 119, 0.2) 0%, rgba(222, 26, 88, 0.1) 100%)';
            e.currentTarget.style.borderColor = 'rgba(143, 1, 119, 0.5)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ flexShrink: 0 }}>
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span>View Source on GitHub</span>
          <span style={{ fontSize: '1.1rem' }}>&rarr;</span>
        </a>

        {/* Notion link */}
        <a
          href={project.notionUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...pillLinkBase,
            marginTop: '1rem',
            background:
              'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background =
              'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(255, 255, 255, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background =
              'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ flexShrink: 0 }}>
            <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.84-.046.933-.56.933-1.167V6.354c0-.606-.233-.933-.746-.886l-15.177.887c-.56.046-.747.326-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.747 0-.933-.234-1.495-.933l-4.577-7.186v6.952l1.449.327s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.726l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.886.747-.933zM2.738 1.408l13.59-.933c1.675-.14 2.101.093 2.801.607l3.876 2.706c.467.327.607.747.607 1.214v16.21c0 1.026-.373 1.635-1.68 1.726l-15.458.934c-.98.046-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.148-1.26z" />
          </svg>
          <span>Read Full Documentation</span>
          <span style={{ fontSize: '1.1rem' }}>&rarr;</span>
        </a>

        {/* Terminal (OPTIONAL: delete this whole block if you do not want it) */}
        <div
          style={{
            marginTop: '4rem',
            width: '100%',
            maxWidth: '42rem',
            borderRadius: '12px',
            overflow: 'hidden',
            background: 'var(--bg-code)',
            border: '1px solid var(--border-void)',
            boxShadow: '0 20px 80px rgba(0,0,0,0.5)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1rem',
              background: 'var(--bg-tertiary)',
              borderBottom: '1px solid var(--border-void)',
            }}
          >
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27ca40' }} />
          </div>
          <div
            style={{
              padding: '1.5rem',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.875rem',
              textAlign: 'left',
            }}
          >
            {terminalLines.map((line, i) => (
              <div key={i} style={{ color: line.color }}>
                {line.text}
              </div>
            ))}
            <div>
              <span style={{ color: 'var(--accent-green)' }}>$</span>{' '}
              <span style={{ animation: 'cursorBlink 1s step-end infinite' }}>_</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN ================= */}
      <main
        style={{
          maxWidth: '56rem',
          margin: '0 auto',
          padding: '0 2rem',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* Table of Contents */}
        <section id="content" style={sectionStyle}>
          <h2 style={h2Style}>Content</h2>
          <ol style={{ listStyle: 'none', padding: 0, marginTop: '2rem' }}>
            {contents.map((item) => (
              <li
                key={item.num}
                style={{
                  padding: '1rem 1.25rem',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-void)',
                  borderRadius: '8px',
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  transition: 'all 0.3s ease',
                }}
              >
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontWeight: 700,
                    color: 'var(--accent-nova)',
                    fontSize: '1.1rem',
                  }}
                >
                  {item.num}
                </span>
                <a
                  href={item.href}
                  style={{
                    color: 'var(--text-star)',
                    fontWeight: 500,
                    textDecoration: 'none',
                    fontSize: '1.05rem',
                  }}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ol>
        </section>

        {/* Overview */}
        <section id="overview" style={sectionStyle}>
          <h2 style={h2Style}>Project Overview</h2>
          {overviewParagraphs.map((text, i) => (
            <p key={i} style={pStyle}>
              {text}
            </p>
          ))}

          {/* OPTIONAL: feature cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginTop: '2rem',
            }}
          >
            {featureCards.map((card) => (
              <div
                key={card.title}
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-void)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{card.icon}</div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-star)' }}>
                  {card.title}
                </h4>
                <p style={{ fontSize: '0.95rem', margin: 0, color: 'var(--text-dust)' }}>{card.desc}</p>
              </div>
            ))}
          </div>

          {/* OPTIONAL: what is included checklist */}
          <h3 style={h3Style}>What&apos;s Included</h3>
          {whatsIncluded.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', margin: '0.75rem 0' }}>
              <span
                style={{
                  flexShrink: 0,
                  width: '24px',
                  height: '24px',
                  background: 'var(--accent-green)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '0.8rem',
                }}
              >
                &#10003;
              </span>
              <span style={{ color: 'var(--text-dust)', fontSize: '1.05rem' }}>{item}</span>
            </div>
          ))}
        </section>

        {/* Architecture */}
        <section id="architecture" style={sectionStyle}>
          <h2 style={h2Style}>Architecture</h2>
          <p style={pStyle}>Intro sentence describing how the layers relate.</p>

          <div
            style={{
              margin: '2rem 0',
              padding: '1.5rem',
              borderRadius: '12px',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-void)',
            }}
          >
            {layers.map((layer, i, arr) => (
              <div key={layer.name}>
                <div
                  style={{
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-void)',
                    borderRadius: '8px',
                    padding: '1rem 1.5rem',
                    margin: '0.5rem 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ fontWeight: 600, color: 'var(--text-star)', fontSize: '1.05rem' }}>{layer.name}</span>
                  <span
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.9rem',
                      color: 'var(--accent-cosmic)',
                      background: 'rgba(143, 1, 119, 0.15)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '4px',
                    }}
                  >
                    {layer.tech}
                  </span>
                </div>
                {i < arr.length - 1 && (
                  <div style={{ textAlign: 'center', fontSize: '1.5rem', color: 'var(--text-dim)' }}>&uarr;</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/*
          ================= DEEP DIVE (CUSTOM SECTION) =================
          Duplicate this section for each phase or topic from your Notion doc.
          It shows the standard building blocks: prose, a subheading, and a
          CodeBlock. Change the id to match a TOC href.
        */}
        <section id="deep-dive" style={sectionStyle}>
          <h2 style={h2Style}>Deep Dive</h2>
          <p style={pStyle}>Explain the topic in prose here.</p>

          <h3 style={h3Style}>A Subsection</h3>
          <p style={pStyle}>More detail. Then a code sample below.</p>

          <CodeBlock language="bash">{`# Replace with a real command or snippet
./build.sh --release`}</CodeBlock>

          {/* Custom mockups (dashboards, diagrams) go here as bespoke JSX.
              There is no generic block for these on purpose, since they are
              unique per project. See pi-monitor/page.tsx for worked examples. */}
        </section>

        {/* Debugging */}
        <section id="debugging" style={sectionStyle}>
          <h2 style={h2Style}>Debugging Adventures</h2>
          <p style={pStyle}>Issues encountered and how they were resolved.</p>

          <div style={{ marginTop: '2rem' }}>
            {debugItems.map((item, i) => (
              <DebugItem key={i} title={item.title} defaultOpen={item.open}>
                <p style={pStyle}>
                  <strong style={{ color: 'var(--text-star)' }}>Symptom:</strong> {item.symptom}
                </p>
                <p style={pStyle}>
                  <strong style={{ color: 'var(--text-star)' }}>Cause:</strong> {item.cause}
                </p>
                <p style={pStyle}>
                  <strong style={{ color: 'var(--text-star)' }}>Solution:</strong> {item.solution}
                </p>
              </DebugItem>
            ))}
          </div>
        </section>

        {/* Learnings */}
        <section id="learnings" style={sectionStyle}>
          <h2 style={h2Style}>Key Learnings</h2>

          <h3 style={h3Style}>Technical Skills Gained</h3>
          <div style={{ margin: '1rem 0' }}>
            {skills.map((skill) => (
              <span
                key={skill}
                style={{
                  display: 'inline-block',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-void)',
                  padding: '0.5rem 1rem',
                  borderRadius: '100px',
                  fontSize: '0.9rem',
                  color: 'var(--text-dust)',
                  margin: '0.25rem',
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          {learnings.map((l, i) => (
            <div key={i}>
              <h4 style={h4Style}>{l.title}</h4>
              <p style={pStyle}>{l.body}</p>
            </div>
          ))}

          <blockquote
            style={{
              borderLeft: '4px solid var(--accent-cosmic)',
              paddingLeft: '1.5rem',
              margin: '2rem 0',
              fontStyle: 'italic',
              color: 'var(--text-dust)',
              fontSize: '1.1rem',
            }}
          >
            &ldquo;{closingQuote}&rdquo;
          </blockquote>
        </section>

        {/* Full Documentation (Notion card) */}
        <section id="documentation" style={sectionStyle}>
          <h2 style={h2Style}>Full Documentation</h2>
          <p style={pStyle}>
            The complete technical write-up lives in Notion. It covers the build
            end to end, including every decision and every issue with its fix.
          </p>

          <a
            href={project.notionUrl}
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
                <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.84-.046.933-.56.933-1.167V6.354c0-.606-.233-.933-.746-.886l-15.177.887c-.56.046-.747.326-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.747 0-.933-.234-1.495-.933l-4.577-7.186v6.952l1.449.327s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.726l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.886.747-.933zM2.738 1.408l13.59-.933c1.675-.14 2.101.093 2.801.607l3.876 2.706c.467.327.607.747.607 1.214v16.21c0 1.026-.373 1.635-1.68 1.726l-15.458.934c-.98.046-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.148-1.26z" />
              </svg>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-star)', margin: 0 }}>
                  {notionCard.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-dim)',
                    margin: '0.25rem 0 0',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  {notionCard.host}
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
              {notionCard.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: 'rgba(143, 1, 119, 0.15)',
                    border: '1px solid rgba(143, 1, 119, 0.25)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '100px',
                    fontSize: '0.8rem',
                    color: 'var(--accent-cosmic)',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <p style={{ color: 'var(--text-dust)', margin: 0, fontSize: '0.95rem', lineHeight: 1.7 }}>
              {notionCard.description}
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '1.25rem',
                color: 'var(--accent-nova)',
                fontSize: '0.9rem',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              <span>Open in Notion</span>
              <span style={{ fontSize: '1.1rem' }}>&rarr;</span>
            </div>
          </a>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '4rem 2rem',
          textAlign: 'center',
          borderTop: '1px solid var(--border-void)',
        }}
      >
        <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.5rem', marginBottom: '1rem' }}>
          {footer.title}
        </h3>
        <p style={{ color: 'var(--text-dim)', fontSize: '1rem' }}>{footer.tagline}</p>
        <p style={{ marginTop: '2rem', fontSize: '0.875rem', color: 'var(--text-dim)' }}>{footer.copyright}</p>
      </footer>
    </div>
  );
}