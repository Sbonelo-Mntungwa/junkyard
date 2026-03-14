'use client';

import Link from 'next/link';
import CosmicBackground from '@/components/CosmicBackground';
import DebugItem from '@/components/DebugItem';
import CodeBlock from '@/components/CodeBlock';
import BackToTop from '@/components/BackToTop';

export default function PiMonitorPage() {
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
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '1.6rem',
          color: 'var(--accent-cosmic)',
          letterSpacing: '0.05em'
        }}>
          <span style={{ color: 'var(--accent-nova)' }}>⏲ </span>
          Pi-Monitor
          <span style={{ color: 'var(--accent-nova)', animation: 'cursorBlink 1s step-end infinite' }}>_</span>
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
          Lightweight <span style={{
            background: 'linear-gradient(135deg, #8F0177 0%, #DE1A58 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>System Monitoring</span> for Pi
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '42rem', color: 'var(--text-dust)' }}>
          A Rust-based monitoring agent that reads /proc metrics and serves them via Prometheus endpoints, JSON API, and a live web dashboard
        </p>
        
        <div style={{ display: 'flex', gap: '3rem', marginTop: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { num: '741', label: 'KB Binary Size' },
            { num: '5', label: 'Metric Types' },
            { num: '4', label: 'HTTP Endpoints' },
            { num: '0', label: 'Dependencies on Pi' }
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent-nova)' }}>{stat.num}</div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginTop: '0.25rem', color: 'var(--text-dim)' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* GitHub Link */}
        <a 
          href="https://github.com/Sbonelo-Mntungwa/pi-monitor"
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
          href="https://tungsten-bramble-977.notion.site/ebd//323b9a7f133e80309529fd19d716dd6c"
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
            <div style={{ color: 'var(--accent-nova)' }}>$ curl http://10.0.0.111:9100/health</div>
            <div style={{ color: 'var(--accent-green)' }}>ok</div>
            <div style={{ color: 'var(--accent-nova)', marginTop: '0.5rem' }}>$ curl http://10.0.0.111:9100/metrics</div>
            <div style={{ color: 'var(--text-dim)' }}># HELP pi_cpu_usage_percent CPU usage percentage</div>
            <div style={{ color: 'var(--text-dim)' }}># TYPE pi_cpu_usage_percent gauge</div>
            <div style={{ color: 'var(--text-dust)' }}>pi_cpu_usage_percent{'{'}cpu=&quot;total&quot;,mode=&quot;user&quot;{'}'} <span style={{ color: 'var(--accent-aurora)' }}>2.5</span></div>
            <div style={{ color: 'var(--text-dust)' }}>pi_cpu_usage_percent{'{'}cpu=&quot;total&quot;,mode=&quot;idle&quot;{'}'} <span style={{ color: 'var(--accent-aurora)' }}>95.3</span></div>
            <div style={{ color: 'var(--text-dim)' }}>...</div>
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
              { num: '02', text: 'Architecture & Data Flow', href: '#architecture' },
              { num: '03', text: 'Metrics Collection', href: '#metrics' },
              { num: '04', text: 'Live Web Dashboard', href: '#dashboard' },
              { num: '05', text: 'Grafana Integration', href: '#grafana' },
              { num: '06', text: 'Build & Deploy Pipeline', href: '#build' },
              { num: '07', text: 'Debugging Adventures', href: '#debugging' },
              { num: '08', text: 'Key Learnings', href: '#learnings' },
              { num: '09', text: 'Full Documentation (Notion)', href: '#documentation' },
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
            Pi-Monitor is a lightweight system monitoring agent written in Rust, designed to run on the same Raspberry Pi 3A+ that hosts our custom RustPi Linux distribution. It reads system metrics directly from /proc and /sys, serves them in multiple formats, and includes a built-in web dashboard — all in a single 741KB static binary.
          </p>
          <p style={pStyle}>
            This project is completely separate from RustPi — it has its own repository, its own build pipeline, and its own Vagrant VM. The binary is deployed via SCP and runs as a standalone process. RustPi stays untouched.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {[
              { icon: '📟', title: 'Live Dashboard', desc: 'Built-in web UI with CPU graphs, memory rings, and click-to-expand modals' },
              { icon: '📊', title: 'Prometheus Native', desc: 'Standard /metrics endpoint compatible with any Prometheus scraper' },
              { icon: '🔧', title: 'Zero Dependencies', desc: 'Single static musl binary — just SCP it to the Pi and run' },
              { icon: '📈', title: 'Grafana Ready', desc: 'Pre-built Grafana dashboard with Tron-themed aquamarine visuals' },
            ].map((card) => (
              <div key={card.title} style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-void)', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{card.icon}</div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-star)' }}>{card.title}</h4>
                <p style={{ fontSize: '0.95rem', margin: 0, color: 'var(--text-dust)' }}>{card.desc}</p>
              </div>
            ))}
          </div>

          <h3 style={h3Style}>Endpoints</h3>
          <div style={{ margin: '1rem 0' }}>
            {[
              { path: 'GET /', desc: 'Live web dashboard with auto-refresh' },
              { path: 'GET /metrics', desc: 'Prometheus exposition format' },
              { path: 'GET /json', desc: 'All metrics as JSON' },
              { path: 'GET /health', desc: 'Liveness check (returns "ok")' },
            ].map((ep) => (
              <div key={ep.path} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', margin: '0.75rem 0' }}>
                <code style={{ flexShrink: 0, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', background: 'var(--bg-tertiary)', padding: '0.25rem 0.75rem', borderRadius: '4px', color: 'var(--accent-aurora)' }}>{ep.path}</code>
                <span style={{ color: 'var(--text-dust)', fontSize: '1.05rem' }}>{ep.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section id="architecture" style={sectionStyle}>
          <h2 style={h2Style}>Architecture & Data Flow</h2>
          <p style={pStyle}>Data flows one direction: the kernel exposes raw counters in /proc → our Rust code parses those text files into structured data → the HTTP server formats it for whichever endpoint was requested.</p>

          <div style={{ margin: '2rem 0', padding: '1.5rem', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--border-void)' }}>
            {[
              { name: 'HTTP Server', tech: 'tokio + hyper (port 9100)' },
              { name: 'Route Handlers', tech: '/metrics, /json, /health, /' },
              { name: 'Prometheus Formatter', tech: 'Exposition format output' },
              { name: 'Metrics Collectors', tech: '5 modules parsing /proc' },
              { name: 'Linux Kernel', tech: '/proc & /sys virtual filesystems' },
              { name: 'Hardware', tech: 'Pi 3A+ (BCM2837)' },
            ].map((layer, i, arr) => (
              <div key={layer.name}>
                <div style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-void)', borderRadius: '8px', padding: '1rem 1.5rem', margin: '0.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-star)', fontSize: '1.05rem' }}>{layer.name}</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', color: 'var(--accent-cosmic)', background: 'rgba(143, 1, 119, 0.15)', padding: '0.25rem 0.75rem', borderRadius: '4px' }}>{layer.tech}</span>
                </div>
                {i < arr.length - 1 && <div style={{ textAlign: 'center', fontSize: '1.5rem', color: 'var(--text-dim)' }}>↑</div>}
              </div>
            ))}
          </div>

          <h3 style={h3Style}>The CPU Sampling Problem</h3>
          <p style={pStyle}>
            Every metric except CPU is a point-in-time snapshot — read /proc/meminfo and you get current memory usage. CPU is different: /proc/stat gives cumulative tick counts since boot. To get a percentage, you need two readings separated by a time interval, compute the difference, and calculate what fraction of elapsed ticks were spent in each state.
          </p>
          <p style={pStyle}>
            This is solved with a background tokio task that samples /proc/stat every 2 seconds and stores the computed percentages in an Arc&lt;Mutex&lt;CpuMetrics&gt;&gt;. HTTP handlers read the latest values without blocking.
          </p>
        </section>

        {/* Metrics */}
        <section id="metrics" style={sectionStyle}>
          <h2 style={h2Style}>Metrics Collection</h2>
          <p style={pStyle}>Five collectors, each parsing a different /proc file format:</p>

          <div style={{ margin: '2rem 0' }}>
            {[
              { file: '/proc/stat', module: 'cpu.rs', desc: 'CPU ticks per core → usage percentages via background sampling' },
              { file: '/proc/meminfo', module: 'memory.rs', desc: 'Key-value pairs → total, used, free, available, buffers, cached' },
              { file: '/proc/net/dev', module: 'network.rs', desc: 'Whitespace table → rx/tx bytes, packets, errors per interface' },
              { file: '/proc/loadavg', module: 'system.rs', desc: 'Load averages, process count, uptime' },
              { file: 'statfs() syscall', module: 'disk.rs', desc: 'Disk total/used/free per mount point' },
            ].map((m) => (
              <div key={m.module} style={{ display: 'flex', gap: '1rem', margin: '1rem 0', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border-void)' }}>
                <code style={{ flexShrink: 0, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', color: 'var(--accent-aurora)', minWidth: '140px' }}>{m.file}</code>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-star)', marginBottom: '0.25rem' }}>{m.module}</div>
                  <div style={{ color: 'var(--text-dust)', fontSize: '0.95rem' }}>{m.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <h3 style={h3Style}>CPU Usage Algorithm</h3>
          <CodeBlock language="rust">{`/// Compare two /proc/stat snapshots and compute percentages
pub fn calculate_usage(prev: &[RawCpuCounters], curr: &[RawCpuCounters]) -> CpuMetrics {
    let user_diff = curr.user.saturating_sub(prev.user);
    let system_diff = curr.system.saturating_sub(prev.system);
    let idle_diff = curr.idle.saturating_sub(prev.idle);
    let total_diff = user_diff + system_diff + idle_diff + ...;
    
    CpuUsage {
        user_percent: (user_diff as f64 / total_diff as f64) * 100.0,
        idle_percent: (idle_diff as f64 / total_diff as f64) * 100.0,
        ...
    }
}`}</CodeBlock>
        </section>

        {/* Dashboard */}
        <section id="dashboard" style={sectionStyle}>
          <h2 style={h2Style}>📟 Live Web Dashboard</h2>
          <p style={pStyle}>
            The dashboard is a single HTML page embedded in the binary at compile time using Rust&apos;s include_str!() macro. It polls /json every 2 seconds and renders all metrics with canvas-drawn graphs and interactive modals.
          </p>

          {/* Dashboard mockup */}
          <div style={{ margin: '2rem 0', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-void)', boxShadow: '0 20px 80px rgba(0,0,0,0.5)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', background: 'var(--bg-tertiary)', borderBottom: '1px solid var(--border-void)' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27ca40' }}></div>
              <span style={{ marginLeft: '0.5rem', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--text-dim)' }}>http://10.0.0.111:9100</span>
            </div>
            <div style={{ background: '#060d12', padding: '1.5rem', display: 'grid', gridTemplateColumns: '1.2fr 1fr 0.8fr', gap: '0.75rem', minHeight: '280px' }}>
              {/* CPU card mock */}
              <div style={{ background: '#0b1820', borderRadius: '6px', padding: '1rem', border: '1px solid #143040' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.65rem', color: '#4a8a8a', textTransform: 'uppercase', letterSpacing: '0.1em' }}>◇ CPU</span>
                  <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#40e0d0' }}>3.2%</span>
                </div>
                <div style={{ height: '50px', background: '#0f2230', borderRadius: '4px', position: 'relative', overflow: 'hidden', marginBottom: '0.5rem' }}>
                  <svg viewBox="0 0 200 50" style={{ width: '100%', height: '100%' }}>
                    <defs>
                      <linearGradient id="cpuGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(64,224,208,0.3)" />
                        <stop offset="100%" stopColor="rgba(64,224,208,0.02)" />
                      </linearGradient>
                    </defs>
                    <path d="M0,45 Q20,42 40,43 T80,40 T120,38 T160,41 T200,35 V50 H0Z" fill="url(#cpuGrad)" />
                    <path d="M0,45 Q20,42 40,43 T80,40 T120,38 T160,41 T200,35" fill="none" stroke="#40e0d0" strokeWidth="1.5" />
                  </svg>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.25rem' }}>
                  {['cpu0', 'cpu1', 'cpu2', 'cpu3'].map((c, i) => (
                    <div key={c} style={{ background: '#0f2230', borderRadius: '3px', padding: '0.3rem', textAlign: 'center', border: '1px solid #143040' }}>
                      <div style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '0.5rem', color: '#4a8a8a' }}>{c}</div>
                      <div style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '0.7rem', fontWeight: 'bold', color: '#40e0d0' }}>{[2.1, 5.3, 1.0, 4.5][i]}%</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Middle stack mock */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ background: '#0b1820', borderRadius: '6px', padding: '0.75rem', border: '1px solid #143040' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.6rem', color: '#4a8a8a', textTransform: 'uppercase' }}>◇ Memory</span>
                    <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.9rem', fontWeight: 700, color: '#40e0d0' }}>8.2%</span>
                  </div>
                  <div style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '0.6rem', color: '#4a8a8a' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>used</span><span style={{ color: '#e0f0f0' }}>34.0 MB</span></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>total</span><span style={{ color: '#e0f0f0' }}>416 MB</span></div>
                  </div>
                </div>
                <div style={{ background: '#0b1820', borderRadius: '6px', padding: '0.75rem', border: '1px solid #143040' }}>
                  <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.6rem', color: '#4a8a8a', textTransform: 'uppercase' }}>◇ System</span>
                  <div style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '0.6rem', color: '#e0f0f0', marginTop: '0.3rem' }}>
                    <div>↑ 2d 14h 32m</div>
                  </div>
                </div>
                <div style={{ background: '#0b1820', borderRadius: '6px', padding: '0.75rem', border: '1px solid #143040', flex: 1 }}>
                  <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.6rem', color: '#4a8a8a', textTransform: 'uppercase' }}>◇ Network</span>
                  <div style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '0.6rem', marginTop: '0.3rem' }}>
                    <div style={{ color: '#22d3ee', fontWeight: 'bold', marginBottom: '0.2rem' }}>◆ eth0</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#4a8a8a' }}><span>rx</span><span style={{ color: '#e0f0f0' }}>1.2 MB</span></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#4a8a8a' }}><span>tx</span><span style={{ color: '#e0f0f0' }}>45.3 KB</span></div>
                  </div>
                </div>
              </div>
              {/* Disk mock */}
              <div style={{ background: '#0b1820', borderRadius: '6px', padding: '0.75rem', border: '1px solid #143040' }}>
                <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.6rem', color: '#4a8a8a', textTransform: 'uppercase' }}>◇ Disk</span>
                <div style={{ marginTop: '0.4rem' }}>
                  {['/', '/tmp', '/run'].map((m, i) => (
                    <div key={m} style={{ padding: '0.3rem 0', borderBottom: '1px solid #143040' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Share Tech Mono, monospace', fontSize: '0.6rem' }}>
                        <span style={{ color: '#22d3ee' }}>{m}</span>
                        <span style={{ color: [35.4, 0.1, 0.5][i] > 30 ? '#fbbf24' : '#40e0d0', fontWeight: 'bold' }}>{[35.4, 0.1, 0.5][i]}%</span>
                      </div>
                      <div style={{ height: '2px', background: '#0f2230', borderRadius: '1px', marginTop: '0.2rem' }}>
                        <div style={{ height: '100%', width: `${[35.4, 0.1, 0.5][i]}%`, background: [35.4, 0.1, 0.5][i] > 30 ? '#fbbf24' : '#34d399', borderRadius: '1px' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textAlign: 'center', fontFamily: 'JetBrains Mono, monospace' }}>Click any card to expand — modals show detailed breakdowns with larger fonts and more data</p>
        </section>

        {/* Grafana */}
        <section id="grafana" style={sectionStyle}>
          <h2 style={h2Style}>Grafana Integration</h2>
          <p style={pStyle}>
            Since Pi-Monitor speaks native Prometheus format, it integrates directly with Prometheus + Grafana for historical monitoring with time-range queries, alerting, and all the features a production monitoring stack provides.
          </p>

          {/* Grafana mockup */}
          <div style={{ margin: '2rem 0', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-void)', boxShadow: '0 20px 80px rgba(0,0,0,0.5)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', background: '#111217', borderBottom: '1px solid #2a2a3a' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27ca40' }}></div>
              <span style={{ marginLeft: '0.5rem', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#8e8ea0' }}>◆ Pi-Monitor // RustPi — Grafana</span>
            </div>
            <div style={{ background: '#0b0c10', padding: '1rem' }}>
              {/* Stat row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '0.5rem', marginBottom: '0.75rem' }}>
                {[
                  { label: '◇ CPU', val: '3.2%', color: '#22d3ee' },
                  { label: '◇ MEMORY', val: '8.2%', color: '#22d3ee' },
                  { label: '◇ DISK /', val: '35.4%', color: '#fbbf24' },
                  { label: '◇ UPTIME', val: '2d 14h', color: '#0d9488' },
                  { label: '◇ LOAD', val: '0.12', color: '#34d399' },
                  { label: '◇ PROCS', val: '105', color: '#1a5c6a' },
                ].map((s) => (
                  <div key={s.label} style={{ background: s.color, borderRadius: '4px', padding: '0.5rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.5rem', color: 'rgba(0,0,0,0.6)', textTransform: 'uppercase', fontWeight: 600 }}>{s.label}</div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: 'rgba(0,0,0,0.8)' }}>{s.val}</div>
                  </div>
                ))}
              </div>
              {/* Graph row */}
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0.5rem' }}>
                <div style={{ background: 'transparent', borderRadius: '4px', padding: '0.75rem', height: '120px', position: 'relative' }}>
                  <div style={{ fontSize: '0.6rem', color: '#8e8ea0', marginBottom: '0.3rem' }}>◇ CPU USAGE</div>
                  <svg viewBox="0 0 300 80" style={{ width: '100%', height: '80px' }}>
                    <defs>
                      <linearGradient id="gCpu1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(64,224,208,0.25)" />
                        <stop offset="100%" stopColor="rgba(64,224,208,0)" />
                      </linearGradient>
                      <linearGradient id="gCpu2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(13,148,136,0.2)" />
                        <stop offset="100%" stopColor="rgba(13,148,136,0)" />
                      </linearGradient>
                    </defs>
                    <path d="M0,70 Q30,68 60,65 T120,60 T180,55 T240,58 T300,50 V80 H0Z" fill="url(#gCpu1)" />
                    <path d="M0,70 Q30,68 60,65 T120,60 T180,55 T240,58 T300,50" fill="none" stroke="#40e0d0" strokeWidth="1.5" />
                    <path d="M0,75 Q30,74 60,73 T120,71 T180,70 T240,72 T300,68 V80 H0Z" fill="url(#gCpu2)" />
                    <path d="M0,75 Q30,74 60,73 T120,71 T180,70 T240,72 T300,68" fill="none" stroke="#0d9488" strokeWidth="1" />
                  </svg>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.25rem' }}>
                  {['cpu0', 'cpu1', 'cpu2', 'cpu3'].map((c, i) => (
                    <div key={c} style={{ borderRadius: '4px', padding: '0.4rem', textAlign: 'center', position: 'relative' }}>
                      <svg viewBox="0 0 60 60" style={{ width: '40px', height: '40px', margin: '0 auto' }}>
                        <circle cx="30" cy="30" r="24" fill="none" stroke="#143040" strokeWidth="4" />
                        <circle cx="30" cy="30" r="24" fill="none" stroke="#40e0d0" strokeWidth="4" strokeDasharray={`${[8, 20, 4, 18][i]} 150`} transform="rotate(-90 30 30)" strokeLinecap="round" />
                      </svg>
                      <div style={{ fontSize: '0.5rem', color: '#8e8ea0', marginTop: '0.15rem' }}>{c}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <h3 style={h3Style}>PromQL Queries</h3>
          <CodeBlock language="promql">{`# CPU usage (excluding idle)
100 - pi_cpu_usage_percent{cpu="total", mode="idle"}

# Memory usage percentage
pi_memory_used_bytes / pi_memory_total_bytes * 100

# Network throughput (bytes/sec)
rate(pi_network_receive_bytes_total{interface="eth0"}[1m])`}</CodeBlock>
        </section>

        {/* Build */}
        <section id="build" style={sectionStyle}>
          <h2 style={h2Style}>Build & Deploy Pipeline</h2>
          <p style={pStyle}>The entire workflow is scripted — build in a Vagrant VM, deploy via SCP, auto-start on login.</p>

          <CodeBlock language="bash">{`# Build the static binary (inside Vagrant VM)
./scripts/build.sh
# Output: 741KB static aarch64 musl binary

# Deploy to Pi (stops old instance, uploads, starts)
PI_HOST=10.0.0.111 ./scripts/deploy.sh

# Setup Prometheus + Grafana on Mac
./scripts/monitoring-setup.sh 10.0.0.111`}</CodeBlock>

          <h3 style={h3Style}>Release Optimizations</h3>
          <CodeBlock language="toml">{`[profile.release]
opt-level = "s"      # Optimize for binary size
lto = true           # Link-time optimization
codegen-units = 1    # Better optimization, slower build
strip = true         # Remove debug symbols
panic = "abort"      # No unwinding machinery`}</CodeBlock>
        </section>

        {/* Debugging */}
        <section id="debugging" style={sectionStyle}>
          <h2 style={h2Style}>Debugging Adventures</h2>
          <p style={pStyle}>Lessons learned while building and deploying Pi-Monitor:</p>

          <div style={{ marginTop: '2rem' }}>
            <DebugItem title="Connection Refused on First curl" defaultOpen={true}>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Symptom:</strong> <code style={{ background: 'var(--bg-tertiary)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>curl: (7) Failed to connect to localhost port 9100: Connection refused</code></p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Cause:</strong> The CPU background sampler needs 2 seconds for its first tick before the server is fully ready.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Solution:</strong> Wait a moment after starting, or add a readiness delay. Harmless race condition.</p>
            </DebugItem>

            <DebugItem title="Deploy Script: Password Prompted 5 Times">
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Symptom:</strong> Each SSH/SCP command in deploy.sh prompts for the password separately.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Cause:</strong> No SSH key auth configured — each command opens a new connection.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Solution:</strong> Set up SSH key authentication, or use SSH ControlMaster for connection reuse.</p>
            </DebugItem>

            <DebugItem title="CPU Shows 100% Idle on First Request">
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Symptom:</strong> First /metrics request shows all CPUs at 100% idle.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Cause:</strong> The CPU sampler needs TWO readings to compute a diff. The first reading has no previous to compare against.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Solution:</strong> By design — the default state is 100% idle until the second sample (2 seconds after start).</p>
            </DebugItem>

            <DebugItem title="/etc/profile.d Doesn't Exist on RustPi">
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Symptom:</strong> <code style={{ background: 'var(--bg-tertiary)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>can&apos;t create /etc/profile.d/pi-monitor.sh: nonexistent directory</code></p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Cause:</strong> Minimal RustPi has no profile.d directory — only a flat /etc/profile file.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Solution:</strong> Append the auto-start block directly to /etc/profile instead.</p>
            </DebugItem>
          </div>
        </section>

        {/* Learnings */}
        <section id="learnings" style={sectionStyle}>
          <h2 style={h2Style}>Key Learnings</h2>
          
          <h3 style={h3Style}>Technical Skills Gained</h3>
          <div style={{ margin: '1rem 0' }}>
            {['Async Rust (tokio)', 'HTTP Servers (hyper)', 'Prometheus Format', '/proc Filesystem', 'Arc<Mutex<T>>', 'musl Static Linking', 'Canvas Rendering', 'Grafana Dashboards', 'PromQL', 'Background Tasks'].map((skill) => (
              <span key={skill} style={{ display: 'inline-block', background: 'var(--bg-tertiary)', border: '1px solid var(--border-void)', padding: '0.5rem 1rem', borderRadius: '100px', fontSize: '0.9rem', color: 'var(--text-dust)', margin: '0.25rem' }}>{skill}</span>
            ))}
          </div>

          <h4 style={h4Style}>1. CPU Usage Is Not Straightforward</h4>
          <p style={pStyle}>Unlike memory or disk, CPU percentage requires diffing two snapshots of cumulative counters over time. This is why every monitoring tool needs a background sampling loop.</p>

          <h4 style={h4Style}>2. Separate Reading from Parsing</h4>
          <p style={pStyle}>Every /proc parser has a read function (touches the filesystem) and a parse function (takes a string). This makes unit testing trivial — paste real Pi data into tests without needing /proc.</p>

          <h4 style={h4Style}>3. Embed Assets at Compile Time</h4>
          <p style={pStyle}>Using include_str!() to bake HTML/CSS/JS into the binary means zero runtime dependencies. Edit the files separately during development, get a single self-contained binary for deployment.</p>

          <blockquote style={{ borderLeft: '4px solid var(--accent-cosmic)', paddingLeft: '1.5rem', margin: '2rem 0', fontStyle: 'italic', color: 'var(--text-dust)', fontSize: '1.1rem' }}>
            &ldquo;The best monitoring tool is the one you understand completely — because when it breaks at 3am, you can fix it.&rdquo;
          </blockquote>
        </section>

        {/* Full Documentation */}
        <section id="documentation" style={sectionStyle}>
          <h2 style={h2Style}>Full Documentation</h2>
          <p style={pStyle}>
            Want the complete technical deep-dive? The full Pi-Monitor documentation covers every /proc file format, 
            every Rust module line-by-line, the async architecture, dashboard design decisions, and every issue encountered with its resolution.
          </p>

          <a 
            href="https://tungsten-bramble-977.notion.site/ebd//323b9a7f133e80309529fd19d716dd6c"
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
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-star)', margin: 0 }}>Pi-Monitor — Complete Technical Documentation</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', margin: '0.25rem 0 0', fontFamily: 'JetBrains Mono, monospace' }}>tungsten-bramble-977.notion.site</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
              {['/proc Parsing', 'Async Rust', 'HTTP Server', 'Dashboard Design', 'Prometheus Format', 'Grafana Setup', 'Debugging Guide', 'All Source Code'].map((tag) => (
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
              Covers how Linux exposes metrics through /proc, the CPU tick-diffing algorithm, tokio async runtime internals,
              hyper HTTP server setup, Prometheus exposition format, compile-time asset embedding with include_str!(),
              canvas-drawn dashboard visuals, Grafana + Prometheus integration, and every debugging issue encountered.
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
        <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.5rem', marginBottom: '1rem' }}>Built with 🦀 and Curiosity</h3>
        <p style={{ color: 'var(--text-dim)', fontSize: '1rem' }}>Pi-Monitor: 741KB of pure Rust monitoring goodness.</p>
        <p style={{ marginTop: '2rem', fontSize: '0.875rem', color: 'var(--text-dim)' }}>© 2026 — Built from scratch, deployed via SCP</p>
      </footer>
    </div>
  );
}