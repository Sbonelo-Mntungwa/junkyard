'use client';

import Link from 'next/link';
import { RustPi2Icon, RustPiIcon } from '@/icons';
import CosmicBackground from '@/components/CosmicBackground';
import DebugItem from '@/components/DebugItem';
import CodeBlock from '@/components/CodeBlock';
import BackToTop from '@/components/BackToTop';

export default function RustPiPart2Page() {
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
          <RustPi2Icon size={24} />
          <span>RustPi 2<span style={{ color: 'var(--accent-nova)', animation: 'cursorBlink 1s step-end infinite' }}>_</span></span>
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
        <span style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.8rem',
          textTransform: 'uppercase',
          letterSpacing: '0.3em',
          color: 'var(--accent-nova)',
          marginBottom: '1.5rem'
        }}>
          RustPi 2
        </span>
        <h1 style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          textTransform: 'uppercase',
          letterSpacing: '0.02em',
          lineHeight: 1.1,
          marginBottom: '1.5rem'
        }}>
          From BusyBox to a <span style={{
            background: 'linear-gradient(135deg, #8F0177 0%, #DE1A58 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Container Host</span>
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '44rem', color: 'var(--text-dust)' }}>
          The follow-up to the RustPi distro build: taking the bare custom image and bootstrapping it into an Alpine-based Docker host. A package manager fetched over raw TLS, a root filesystem grown to fill the card, and a boot sequence that has to be re-run by hand.
        </p>
        
        <div style={{ display: 'flex', gap: '3rem', marginTop: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { num: '384MB', label: 'Root FS Before Resize' },
            { num: '~1.9MB', label: 'apk-tools-static' },
            { num: '1970', label: 'Clock on Boot' },
            { num: '4', label: 'Boot Steps to Re-run' }
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent-nova)' }}>{stat.num}</div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginTop: '0.25rem', color: 'var(--text-dim)' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* GitHub Link */}
        <a 
          href="https://github.com/Sbonelo-Mntungwa/rustpi"
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
          href="REPLACE_WITH_NOTION_URL"
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
            <div style={{ color: 'var(--accent-nova)' }}>$ apk --version</div>
            <div style={{ color: 'var(--text-dust)' }}>apk-tools 3.0.5, compiled for armhf</div>
            <div style={{ color: 'var(--accent-nova)', marginTop: '0.5rem' }}>$ ntpd -d -q -n -p pool.ntp.org</div>
            <div style={{ color: 'var(--accent-nova)' }}>$ date</div>
            <div style={{ color: 'var(--accent-green)' }}>Sat Aug  1 12:04:33 UTC 2026</div>
            <div><span style={{ color: 'var(--accent-green)' }}>rustpi#</span> <span style={{ animation: 'cursorBlink 1s step-end infinite' }}>_</span></div>
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
              { num: '01', text: 'The Goal: Running Docker on It', href: '#overview' },
              { num: '02', text: 'Starting Conditions', href: '#starting' },
              { num: '03', text: 'Networking & DNS Repair', href: '#dns' },
              { num: '04', text: 'Wiring up the BusyBox Commands', href: '#busybox' },
              { num: '05', text: 'Bootstrapping apk over Raw TLS', href: '#apk' },
              { num: '06', text: 'The 1970 Clock Problem', href: '#clock' },
              { num: '07', text: 'Resizing the Root Filesystem', href: '#resize' },
              { num: '08', text: 'Docker & Compose', href: '#docker' },
              { num: '09', text: 'Debugging Adventures', href: '#debugging' },
              { num: '10', text: 'Post-Reboot Checklist', href: '#checklist' },
              { num: '11', text: 'Full Documentation (Notion)', href: '#documentation' },
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
          <h2 style={h2Style}>The Goal: Running Docker on It</h2>
          <p style={pStyle}>
            The goal here was narrow and specific: end up with a Pi that can take a Dockerfile and run it. Not a
            general-purpose server, just a machine where <code style={{ background: 'var(--bg-tertiary)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>docker compose up</code> works.
            On any normal distro that is routine. The catch was the starting point.
          </p>
          <p style={pStyle}>
            This picks up exactly where <strong style={{ color: 'var(--text-star)' }}>RustPi 1</strong> left off.
            That project built the image from scratch: a hand-rolled minimal Linux for the Pi 3A+ with a Rust init as PID 1
            and a BusyBox userland. It boots to a shell over SSH, and that is where it stopped. A shell is not a platform.
            There was no package manager, DNS did not resolve for BusyBox wget, there were no shared libraries, the clock
            booted at 1970, and the root filesystem had only about 384MB to live in. Getting from there to a working
            container host is the whole story of this page.
          </p>

          <Link
            href="/projects/rustpi"
            style={{
              position: 'relative',
              display: 'block',
              overflow: 'hidden',
              margin: '2rem 0',
              padding: '2rem',
              borderRadius: '16px',
              textDecoration: 'none',
              background: 'linear-gradient(135deg, rgba(143, 1, 119, 0.15) 0%, rgba(222, 26, 88, 0.06) 100%)',
              border: '1px solid rgba(143, 1, 119, 0.4)',
              transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.borderColor = '#DE1A58';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(143, 1, 119, 0.3), 0 0 80px rgba(222, 26, 88, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(143, 1, 119, 0.4)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* decorative watermark */}
            <span style={{
              position: 'absolute',
              top: '-1.5rem',
              right: '0.5rem',
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '9rem',
              lineHeight: 1,
              color: 'rgba(143, 1, 119, 0.12)',
              pointerEvents: 'none',
              userSelect: 'none'
            }}>01</span>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.25em',
                color: 'var(--accent-nova)',
                marginBottom: '1.25rem'
              }}>
                &larr; The previous chapter
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <RustPiIcon size={56} />

                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontFamily: 'Bebas Neue, sans-serif',
                    fontSize: '2rem',
                    lineHeight: 1,
                    letterSpacing: '0.03em',
                    textTransform: 'uppercase',
                    margin: 0,
                    background: 'linear-gradient(135deg, #f0e6ff 0%, #DE1A58 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    RustPi 1: Distro Build
                  </h3>
                  <p style={{ color: 'var(--text-dust)', fontSize: '0.95rem', margin: '0.4rem 0 0', lineHeight: 1.5 }}>
                    Building a custom Linux distribution from scratch for the Raspberry Pi 3A+.
                  </p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '1.5rem',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.9rem',
                color: 'var(--text-star)'
              }}>
                <span>Read how the image was built</span>
                <span style={{ color: 'var(--accent-nova)', fontSize: '1.1rem' }}>&rarr;</span>
              </div>
            </div>
          </Link>

          <h3 style={h3Style}>The journey: installed image to Dockerfiles</h3>
          <p style={pStyle}>Each step unlocked the next. This is the whole path from a freshly installed image to a Pi that accepts Dockerfiles, in one view:</p>

          <div style={{ margin: '2rem 0', padding: '1.5rem', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--border-void)' }}>
            {[
              { n: '00', title: 'Distro installed (bare)', note: 'The RustPi image boots to a shell. About 384MB usable, no package manager, clock at 1970.', tone: 'start' },
              { n: '01', title: 'Repair DNS', note: 'Add a nameserver and the nsswitch hosts line so names resolve at all.', tone: 'step' },
              { n: '02', title: 'Wire up BusyBox commands', note: 'Symlink applets like ssl_client, nc, touch, and which into /bin, so ssl_client exists as a command for the next step.', tone: 'step' },
              { n: '03', title: 'Bootstrap apk over TLS', note: 'ssl_client fetches apk-tools by IP with a hand-written Host header. Now there is a package manager.', tone: 'step' },
              { n: '04', title: 'Set the clock', note: 'ntpd first, so TLS certificates stop failing as not-yet-valid and HTTPS apk works.', tone: 'step' },
              { n: '05', title: 'Unlock the disk', note: 'Recreate the root partition to fill the card. The 384MB box becomes the whole SD.', tone: 'disk' },
              { n: '06', title: 'Install Docker', note: 'Mount cgroup2, enable IPv4 forwarding, start dockerd.', tone: 'step' },
              { n: '07', title: 'Ready for Dockerfiles', note: 'docker compose up. The Pi now builds and runs containers.', tone: 'end' },
            ].map((s, i, arr) => (
              <div key={s.n}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1rem 1.25rem',
                  borderRadius: '8px',
                  background: s.tone === 'end'
                    ? 'linear-gradient(135deg, rgba(143, 1, 119, 0.25) 0%, rgba(222, 26, 88, 0.15) 100%)'
                    : s.tone === 'disk'
                    ? 'rgba(6, 182, 212, 0.1)'
                    : 'var(--bg-tertiary)',
                  border: s.tone === 'end'
                    ? '1px solid var(--accent-nova)'
                    : s.tone === 'disk'
                    ? '1px solid rgba(6, 182, 212, 0.5)'
                    : s.tone === 'start'
                    ? '1px solid var(--accent-cosmic)'
                    : '1px solid var(--border-void)'
                }}>
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontWeight: 700,
                    fontSize: '1rem',
                    minWidth: '2rem',
                    color: s.tone === 'disk' ? 'var(--accent-aurora)' : s.tone === 'end' ? 'var(--text-star)' : 'var(--accent-nova)'
                  }}>{s.n}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, color: 'var(--text-star)', marginBottom: '0.2rem' }}>{s.title}</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-dust)' }}>{s.note}</div>
                    {s.tone === 'disk' && (
                      <div style={{ marginTop: '0.6rem' }}>
                        <div style={{ height: '12px', borderRadius: '6px', background: 'var(--bg-void)', border: '1px solid var(--border-void)', overflow: 'hidden', position: 'relative' }}>
                          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '11%', background: 'var(--text-dim)' }} />
                          <div style={{ position: 'absolute', left: '11%', top: 0, bottom: 0, right: 0, background: 'linear-gradient(90deg, rgba(6, 182, 212, 0.55), rgba(16, 185, 129, 0.55))' }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: 'var(--text-dim)', marginTop: '0.3rem' }}>
                          <span>~384MB the image could use</span>
                          <span style={{ color: 'var(--accent-aurora)' }}>rest of the card, reclaimed</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {i < arr.length - 1 && <div style={{ textAlign: 'center', fontSize: '1.25rem', color: 'var(--text-dim)', lineHeight: 1.3 }}>↓</div>}
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '2rem' }}>
            {[
              { icon: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#DE1A58" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4v10l-8 4-8-4V7z" /><path d="M4 7l8 4 8-4M12 11v10" /></svg>), title: 'apk from scratch', desc: 'Fetched apk-tools-static over TLS by IP, stripped the HTTP headers, installed a working package manager' },
              { icon: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#DE1A58" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></svg>), title: 'Clock before TLS', desc: 'ntpd runs before any HTTPS apk call, because a 1970 clock fails every certificate check' },
              { icon: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#DE1A58" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="8" rx="2" /><path d="M7 12h6" /><circle cx="17" cy="12" r="1" fill="#DE1A58" stroke="none" /></svg>), title: 'Full-size root', desc: 'Recreated p2 at the same start sector, then grew ext4 online with resize2fs' },
              { icon: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#DE1A58" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="13" width="16" height="7" rx="1" /><path d="M9 13v7M13 13v7M17 13v7" /><rect x="9" y="8" width="6" height="5" rx="1" /></svg>), title: 'Docker host', desc: 'cgroup2 mounted, IPv4 forwarding on, dockerd up, running Compose stacks' },
            ].map((card) => (
              <div key={card.title} style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-void)', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{card.icon}</div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-star)' }}>{card.title}</h4>
                <p style={{ fontSize: '0.95rem', margin: 0, color: 'var(--text-dust)' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Starting Conditions */}
        <section id="starting" style={sectionStyle}>
          <h2 style={h2Style}>Starting Conditions</h2>
          <p style={pStyle}>Before touching anything, I captured what the device actually had. On a minimal image these facts drive every later decision.</p>

          <CodeBlock language="bash">{`uname -a                 # kernel + arch
cat /proc/version
busybox --list           # what applets are actually compiled in
ls /bin                  # where the real binaries and symlinks live
fdisk -l /dev/mmcblk0    # partition layout (record start sectors)
df -h                    # current filesystem usage
date                     # confirm clock sanity`}</CodeBlock>

          <p style={pStyle}>What that turned up: no package manager, no working DNS for BusyBox wget, no /etc/os-release, no shared libraries, a ~384MB root partition on a much larger card, and a clock stuck at 1970 that silently breaks TLS.</p>
        </section>

        {/* DNS */}
        <section id="dns" style={sectionStyle}>
          <h2 style={h2Style}>Networking & DNS Repair</h2>
          <p style={pStyle}>
            <code style={{ background: 'var(--bg-tertiary)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>ping 8.8.8.8</code> worked, 
            but <code style={{ background: 'var(--bg-tertiary)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>wget https://...</code> failed 
            with <code style={{ background: 'var(--bg-tertiary)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>bad address</code>. 
            Raw IP connectivity was fine, so the break was in name resolution.
          </p>

          <h3 style={h3Style}>Root cause</h3>
          <p style={pStyle}>Two compounding issues: /etc/resolv.conf had no usable nameserver, and /etc/nsswitch.conf had no hosts line, so the resolver never consulted files or DNS.</p>

          <CodeBlock language="bash">{`# 1. Nameserver
echo "nameserver 8.8.8.8" > /etc/resolv.conf

# 2. Tell the resolver to use files then DNS
echo "hosts: files dns" >> /etc/nsswitch.conf

# 3. Default gateway sanity check
route            # expect: default via 192.168.0.1 dev eth0`}</CodeBlock>

          <p style={pStyle}>DNS itself resolves when queried with an explicit server. I recorded one of the returned IPs and used it directly in the next step, because the static BusyBox wget still would not resolve names even after the fixes above.</p>

          <CodeBlock language="bash">{`busybox nslookup dl-cdn.alpinelinux.org 8.8.8.8
# record one of the returned IPs, e.g. 151.101.66.132`}</CodeBlock>
        </section>

        {/* apk bootstrap */}
        {/* BusyBox commands */}
        <section id="busybox" style={sectionStyle}>
          <h2 style={h2Style}>Wiring up the BusyBox Commands</h2>
          <p style={pStyle}>
            Before fetching anything, I needed the right BusyBox applets available as commands. The whole userland is one
            BusyBox binary, and each command (ls, cat, nc, ssl_client) is just a symlink pointing at it. The one that
            matters most here is ssl_client: it is what speaks TLS in the next step, so it has to exist as a command before
            the apk bootstrap can even start.
          </p>

          <CodeBlock language="bash">{`ln -sf /bin/busybox /bin/nc
ln -sf /bin/busybox /bin/ssl_client
ln -sf /bin/busybox /bin/touch
ln -sf /bin/busybox /bin/which

# confirm the applet is actually compiled into this build
busybox --list | grep -E 'ssl_client|nc'`}</CodeBlock>

          <div style={{ background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(6, 182, 212, 0.02) 100%)', border: '1px solid rgba(6, 182, 212, 0.3)', borderRadius: '12px', padding: '1.5rem', margin: '2rem 0' }}>
            <p style={{ ...pStyle, margin: 0 }}>
              <strong style={{ color: 'var(--text-star)' }}>The catch that cost me time:</strong> the first symlinks I made did nothing.
              I had created them in the home directory, which is not on PATH, so the shell never found them. On this image every
              real command lives in /bin, so the symlinks have to go there. And a symlink only helps if the applet was actually
              compiled into this BusyBox build, which is what the busybox --list check confirms.
            </p>
          </div>
        </section>

        {/* apk bootstrap */}
        <section id="apk" style={sectionStyle}>
          <h2 style={h2Style}>Bootstrapping apk over Raw TLS</h2>
          <p style={pStyle}>
            No package manager, and apk-tools has to be fetched before one exists. wget could not resolve DNS and nc could not do TLS. 
            BusyBox ships ssl_client, which can speak TLS, so the trick is to connect to the CDN by IP and supply the Host header by hand. 
            That retrieves apk-tools-static over HTTPS without a working resolver.
          </p>

          <p style={pStyle}>First, find the exact version-stamped filename. Never hardcode a guessed version.</p>

          <CodeBlock language="bash">{`printf "GET /alpine/latest-stable/main/armhf/ HTTP/1.0\\r\\nHost: dl-cdn.alpinelinux.org\\r\\nConnection: close\\r\\n\\r\\n" \\
  | ssl_client <CDN_IP> 443 2>/dev/null | grep apk-tools-static
# record the exact name, e.g. apk-tools-static-3.0.5-r0.apk`}</CodeBlock>

          <p style={pStyle}>Then download it by that filename, again by IP with a manual Host header.</p>

          <CodeBlock language="bash">{`printf "GET /alpine/latest-stable/main/armhf/<APK_TOOLS_FILENAME> HTTP/1.0\\r\\nHost: dl-cdn.alpinelinux.org\\r\\nConnection: close\\r\\n\\r\\n" \\
  | ssl_client <CDN_IP> 443 2>/dev/null > apk-tools-static.apk

ls -la apk-tools-static.apk    # sanity: expect ~1.9 MB, not a few hundred bytes`}</CodeBlock>

          <p style={pStyle}>The raw response includes HTTP headers before the payload. Strip everything up to and including the blank line, extract, and install.</p>

          <CodeBlock language="bash">{`sed '1,/^\\r\\{0,1\\}$/d' apk-tools-static.apk > apk-clean.apk
tar -xzf apk-clean.apk         # yields sbin/apk.static
cp sbin/apk.static /bin/apk
chmod +x /bin/apk
apk --version                  # expect: apk-tools <ver>, compiled for armhf`}</CodeBlock>

          <h3 style={h3Style}>Initialize the database and repositories</h3>
          <p style={pStyle}>
            In apk 3.x only apk add supports --initdb, so the database is created by adding the base metapackage. 
            Bootstrap over HTTP first, because TLS is not trusted yet (no CA bundle and the wrong clock), then switch to HTTPS.
          </p>

          <CodeBlock language="bash">{`mkdir -p /etc/apk /var/lib/apk /var/cache/apk

printf '%s\\n' \\
  "http://dl-cdn.alpinelinux.org/alpine/latest-stable/main" \\
  "http://dl-cdn.alpinelinux.org/alpine/latest-stable/community" \\
  > /etc/apk/repositories

apk add --initdb --allow-untrusted alpine-base
apk add ca-certificates          # now TLS can be trusted

# switch repos back to HTTPS
sed -i 's/http:/https:/g' /etc/apk/repositories
apk update`}</CodeBlock>
        </section>

        {/* Clock */}
        <section id="clock" style={sectionStyle}>
          <h2 style={h2Style}>The 1970 Clock Problem</h2>
          <p style={pStyle}>
            After bootstrap, and after every reboot, the clock reads Thu Jan 1 1970. TLS certificate validity checks then fail 
            with <code style={{ background: 'var(--bg-tertiary)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>server certificate not trusted</code>, 
            which breaks apk over HTTPS. Fix the clock before any HTTPS apk operation.
          </p>

          <CodeBlock language="bash">{`ntpd -d -q -n -p pool.ntp.org
date        # confirm a sane, current date`}</CodeBlock>

          <div style={{ background: 'linear-gradient(135deg, rgba(222, 26, 88, 0.1) 0%, rgba(222, 26, 88, 0.03) 100%)', border: '1px solid rgba(222, 26, 88, 0.3)', borderRadius: '12px', padding: '1.5rem', margin: '2rem 0' }}>
            <p style={{ ...pStyle, margin: 0 }}>
              <strong style={{ color: 'var(--text-star)' }}>Rule of thumb:</strong> this is the single most common failure in the whole setup. 
              Any &ldquo;certificate not trusted&rdquo; error is the clock until proven otherwise.
            </p>
          </div>
        </section>

        {/* Resize */}
        <section id="resize" style={sectionStyle}>
          <h2 style={h2Style}>Resizing the Root Filesystem</h2>
          <p style={pStyle}>
            This is the step that mattered most, so it is worth being clear about why it was needed. The installed image
            gave the root filesystem only about 384MB to live in, and that was true no matter how big the SD card was: the
            same 384MB on an 8GB, 16GB, or 32GB card. The rest of the card was real, physical storage, but it sat
            unallocated, outside any partition, so nothing on the system could touch it. It was capacity the Pi
            physically had but could not see.
          </p>
          <p style={pStyle}>
            With only 384MB free, a single Docker image fills the disk almost immediately, so there was no way to run
            containers until that hidden space was reclaimed. The way to reclaim it without reformatting is to delete the
            root partition's table entry and recreate it larger, in place, at the exact same start sector. The filesystem
            inside is untouched and simply gains room to grow into the space that was always there.
          </p>

          <div style={{ background: 'linear-gradient(135deg, rgba(222, 26, 88, 0.1) 0%, rgba(222, 26, 88, 0.03) 100%)', border: '1px solid rgba(222, 26, 88, 0.3)', borderRadius: '12px', padding: '1.5rem', margin: '2rem 0' }}>
            <p style={{ ...pStyle, margin: 0 }}>
              <strong style={{ color: 'var(--text-star)' }}>Critical rule:</strong> the start sector is fixed by the image, not the card size. 
              It is the same on an 8GB, 16GB, or 32GB card. Always read it from fdisk and reuse it exactly. Only the end sector varies, 
              so accept the default there to consume all remaining space.
            </p>
          </div>

          <CodeBlock language="bash">{`fdisk -l /dev/mmcblk0     # record the p2 START sector first
fdisk /dev/mmcblk0
# inside fdisk:
#   d          delete
#   2          partition 2
#   n -> p -> 2   new primary partition 2
#   <START>    SAME start sector as recorded (e.g. 262144)
#   <Enter>    default end = full remaining space
#   N          do NOT remove the ext filesystem signature
#   w          write and exit`}</CodeBlock>

          <p style={pStyle}>Then reboot, fix the clock, install the resize tool, and grow the filesystem online.</p>

          <CodeBlock language="bash">{`reboot
# after reboot:
ntpd -d -q -n -p pool.ntp.org
apk add e2fsprogs e2fsprogs-extra     # resize2fs lives in e2fsprogs-extra
/usr/sbin/resize2fs /dev/mmcblk0p2    # online resize of the mounted root FS
df -h                                 # confirm new size`}</CodeBlock>

          <p style={pStyle}>resize2fs is packaged in e2fsprogs-extra, not e2fsprogs, and it installs to /usr/sbin, which may not be on the minimal PATH. Call it by full path.</p>
        </section>

        {/* Docker */}
        <section id="docker" style={sectionStyle}>
          <h2 style={h2Style}>Docker & Compose</h2>
          <p style={pStyle}>With apk working and the disk grown, Docker installs cleanly. The daemon needs cgroups mounted and IPv4 forwarding on before it will run.</p>

          <CodeBlock language="bash">{`ntpd -d -q -n -p pool.ntp.org       # always, first
apk add docker docker-cli-compose   # docker compose v2 plugin`}</CodeBlock>

          <h3 style={h3Style}>Daemon segfault on first run</h3>
          <p style={pStyle}>
            The first dockerd run panicked with a SIGSEGV during shutdown and docker ps reported the socket was absent. 
            The cause was cgroups not being mounted, so the daemon aborted early. Mounting the cgroup2 hierarchy and enabling 
            forwarding brings it up.
          </p>

          <CodeBlock language="bash">{`mount -t cgroup2 none /sys/fs/cgroup       # cgroup v2 hierarchy
echo 1 > /proc/sys/net/ipv4/ip_forward     # required for container networking
dockerd &                                  # starts containerd + daemon
docker ps                                  # confirm the socket is live`}</CodeBlock>

          <h3 style={h3Style}>Expected non-fatal warnings</h3>
          <p style={pStyle}>These show on this kernel and image and do not block single-host containers:</p>
          <ul style={{ color: 'var(--text-dust)', lineHeight: 2, fontSize: '1.05rem' }}>
            <li><code>No memory limit support</code> / <code>No swap limit support</code>: kernel cgroup memory controller not configured</li>
            <li><code>ip6tables ... Protocol not supported</code>: no IPv6 nftables backend, IPv4 still works</li>
            <li><code>storage-driver=vfs</code>: falls back to vfs, which works but copies whole layers instead of overlaying them</li>
          </ul>
          <p style={pStyle}>The vfs fallback is disk-hungry and slow next to overlay2. On a space-constrained Pi it is worth revisiting once overlayfs support and a compatible backing filesystem are in place.</p>
        </section>

        {/* Debugging */}
        <section id="debugging" style={sectionStyle}>
          <h2 style={h2Style}>Debugging Adventures</h2>
          <p style={pStyle}>The failures that took the most time, and what actually fixed them:</p>

          <div style={{ marginTop: '2rem' }}>
            <DebugItem title="wget: bad address" defaultOpen={true}>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Symptom:</strong> <code style={{ background: 'var(--bg-tertiary)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>wget: bad address &lt;host&gt;</code>, while ping to a raw IP worked.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Cause:</strong> the static BusyBox resolver had no nameserver and no hosts line in nsswitch.conf.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Solution:</strong> fix resolv.conf and nsswitch.conf, and for the bootstrap download bypass name resolution entirely with ssl_client to the CDN IP plus a manual Host header.</p>
            </DebugItem>

            <DebugItem title="apk: certificate not trusted">
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Symptom:</strong> apk over HTTPS fails with <code style={{ background: 'var(--bg-tertiary)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>server certificate not trusted</code>.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Cause:</strong> the clock was at 1970, so every certificate looked not-yet-valid.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Solution:</strong> run ntpd before any HTTPS apk call.</p>
            </DebugItem>

            <DebugItem title="Downloaded apk-tools file is tiny">
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Symptom:</strong> apk-tools-static.apk is a few hundred bytes instead of ~1.9 MB.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Cause:</strong> an HTTP 404 or redirect got captured instead of the package, usually a wrong or stale filename.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Solution:</strong> cat the file to read the HTTP error, then re-check the exact version-stamped filename from the directory listing.</p>
            </DebugItem>

            <DebugItem title="resize2fs: not found">
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Symptom:</strong> <code style={{ background: 'var(--bg-tertiary)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>resize2fs: not found</code> after installing e2fsprogs.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Cause:</strong> resize2fs ships in e2fsprogs-extra, and it lands in /usr/sbin which is off the minimal PATH.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Solution:</strong> apk add e2fsprogs-extra and call /usr/sbin/resize2fs by full path.</p>
            </DebugItem>

            <DebugItem title="Cannot connect to the Docker daemon">
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Symptom:</strong> docker ps reports the daemon socket is absent, or dockerd panics on first run.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Cause:</strong> cgroups were not mounted, so the daemon aborted during init.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Solution:</strong> mount -t cgroup2, enable IPv4 forwarding, then start dockerd.</p>
            </DebugItem>
          </div>
        </section>

        {/* Checklist */}
        <section id="checklist" style={sectionStyle}>
          <h2 style={h2Style}>Post-Reboot Checklist</h2>
          <p style={pStyle}>None of the kernel-level prerequisites persist yet, so this runs in order after every boot, before starting any stack.</p>

          <CodeBlock language="bash">{`ntpd -d -q -n -p pool.ntp.org           # 1. fix clock (TLS depends on it)
mount -t cgroup2 none /sys/fs/cgroup    # 2. mount cgroups
echo 1 > /proc/sys/net/ipv4/ip_forward  # 3. enable IPv4 forwarding
dockerd &                               # 4. start Docker daemon`}</CodeBlock>

          <h3 style={h3Style}>Making it persistent (future work)</h3>
          <ul style={{ color: 'var(--text-dust)', lineHeight: 2, fontSize: '1.05rem' }}>
            <li>Time: enable an NTP or chrony service at boot instead of the manual one-shot</li>
            <li>cgroups: mount cgroup2 via fstab or init rather than by hand</li>
            <li>Forwarding: set net.ipv4.ip_forward=1 in a sysctl drop-in so it survives reboot</li>
            <li>Docker: add and enable the service (rc-update add docker boot) so it starts automatically</li>
          </ul>
        </section>

        {/* Full Documentation */}
        <section id="documentation" style={sectionStyle}>
          <h2 style={h2Style}>Full Documentation</h2>
          <p style={pStyle}>
            The complete RustPi 2 write-up covers every command with its root cause: the DNS repair, the ssl_client bootstrap, 
            the clock dependency, the partition math, the Docker bring-up, and the full failure-to-fix table.
          </p>

          <a 
            href="REPLACE_WITH_NOTION_URL"
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
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-star)', margin: 0 }}>RustPi 2: Platform Bootstrap</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', margin: '0.25rem 0 0', fontFamily: 'JetBrains Mono, monospace' }}>tungsten-bramble-977.notion.site</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
              {['DNS Repair', 'ssl_client Bootstrap', 'apk 3.x initdb', 'Clock + TLS', 'Partition Resize', 'Docker Bring-up', 'Failure Table'].map((tag) => (
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
              Covers the bare starting conditions, resolver repair, fetching apk-tools-static over TLS by IP, the HTTP-then-HTTPS 
              repository switch, the 1970 clock dependency, recreating the root partition at a fixed start sector, growing ext4 online, 
              and bringing up Docker with its expected warnings.
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
        <p style={{ color: 'var(--text-dim)', fontSize: '1rem' }}>RustPi 2: BusyBox to Alpine, apk bootstrapped over raw TLS, root grown to fill the card, Docker up.</p>
        <p style={{ marginTop: '2rem', fontSize: '0.875rem', color: 'var(--text-dim)' }}>© 2026 - Built from scratch, documented with care</p>
      </footer>
    </div>
  );
}