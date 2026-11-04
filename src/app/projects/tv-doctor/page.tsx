'use client';

import Link from 'next/link';
import { TvDoctorIcon } from '@/icons';
import CosmicBackground from '@/components/CosmicBackground';
import DebugItem from '@/components/DebugItem';
import CodeBlock from '@/components/CodeBlock';
import BackToTop from '@/components/BackToTop';
import Screenshot, { ScreenshotTabs } from '@/components/Screenshot';

const img = (name: string) => `/projects/tv-doctor/${name}.jpg`;
const url = 'http://127.0.0.1:8787';

export default function TvDoctorPage() {
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
  const strong = { color: 'var(--text-star)' };

  const quoteStyle = {
    borderLeft: '4px solid var(--accent-cosmic)',
    paddingLeft: '1.5rem',
    margin: '2rem 0',
    fontStyle: 'italic' as const,
    color: 'var(--text-dust)',
    fontSize: '1.1rem'
  };

  const rows = (items: { key: string; desc: string }[], keyWidth = '110px') => (
    <div style={{ margin: '1rem 0' }}>
      {items.map((k) => (
        <div key={k.key} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', margin: '0.75rem 0' }}>
          <code style={{ flexShrink: 0, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', background: 'var(--bg-tertiary)', padding: '0.25rem 0.75rem', borderRadius: '4px', color: 'var(--accent-aurora)', minWidth: keyWidth, textAlign: 'center' }}>{k.key}</code>
          <span style={{ color: 'var(--text-dust)', fontSize: '1.05rem' }}>{k.desc}</span>
        </div>
      ))}
    </div>
  );

  const cards = (items: { title: string; sub: string; desc: string }[]) => (
    <div style={{ margin: '2rem 0' }}>
      {items.map((m) => (
        <div key={m.title} style={{ display: 'flex', gap: '1rem', margin: '1rem 0', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border-void)' }}>
          <code style={{ flexShrink: 0, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', color: 'var(--accent-aurora)', minWidth: '140px' }}>{m.sub}</code>
          <div>
            <div style={{ fontWeight: 600, color: 'var(--text-star)', marginBottom: '0.25rem' }}>{m.title}</div>
            <div style={{ color: 'var(--text-dust)', fontSize: '0.95rem' }}>{m.desc}</div>
          </div>
        </div>
      ))}
    </div>
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
          <TvDoctorIcon size={24} />
          <span>TV Doctor<span style={{ color: 'var(--accent-nova)', animation: 'cursorBlink 1s step-end infinite' }}>_</span></span>
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
          House Calls for an Old <span style={{
            background: 'linear-gradient(135deg, #8F0177 0%, #DE1A58 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Android TV</span>
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '44rem', color: 'var(--text-dust)' }}>
          A Rust command line tool and a macOS app that find an Android TV on the home network, read its vital signs, and clean,
          recompile and slim it down over ADB. When the TV refuses ADB, it starts and stops apps over Cast and DIAL instead
        </p>

        <div style={{ display: 'flex', gap: '3rem', marginTop: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { num: '24', label: 'Commands' },
            { num: '3', label: 'Network Protocols' },
            { num: '0', label: 'External Crates' },
            { num: '639', label: 'KB Binary Size' }
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent-nova)' }}>{stat.num}</div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginTop: '0.25rem', color: 'var(--text-dim)' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* GitHub Link */}
        <a
          href="https://github.com/Sbonelo-Mntungwa/tv-doctor"
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

        {/* Live app */}
        <div style={{ width: '100%', maxWidth: '64rem', marginTop: '2rem', textAlign: 'left' }}>
          <Screenshot
            url={url}
            src={img('platform-remote-check')}
            alt="The TV Doctor platform after Examine, with the remote-check output in the monitor"
            caption="Examine on a Hisense HAT4KDTV: model, Cast build, uptime and DIAL apps, read with ADB switched off. The TV's name and address are changed on this page"
          />
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
              { num: '02', text: 'A Running Application', href: '#app' },
              { num: '03', text: 'Finding the TV', href: '#finding' },
              { num: '04', text: 'The Platform', href: '#platform' },
              { num: '05', text: 'When ADB Says No', href: '#no-adb' },
              { num: '06', text: 'Cast v2 by Hand', href: '#cast' },
              { num: '07', text: 'The Treatment', href: '#treatment' },
              { num: '08', text: 'The Brand Mark', href: '#mark' },
              { num: '09', text: 'Build & Run', href: '#build' },
              { num: '10', text: 'Debugging Adventures', href: '#debugging' },
              { num: '11', text: 'Key Learnings', href: '#learnings' },
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
            TV Doctor started with the Hisense HAT4KDTV at home, an Android TV that had become slow to open apps and slow to move through
            menus. Slow on an old Android TV is almost always one of four things, and each has a fix that can be run from a laptop:
          </p>

          {rows([
            { key: 'Storage', desc: 'Under about 1.5 GB free, Android TV crawls and app updates fail silently. clean frees it' },
            { key: 'RAM', desc: 'No free memory means every app cold-starts. bloat switches off preinstalled apps you never open' },
            { key: 'Compiled code', desc: 'Years of Play Store updates leave apps poorly compiled. optimize recompiles all of them' },
            { key: 'Animations', desc: 'Tuned for a faster chip. optimize sets all three animation scales to 0' },
          ], '150px')}

          <p style={pStyle}>
            All four need ADB, and the HAT4KDTV turned out to offer ADB over USB only. So TV Doctor grew a second half: everything it can
            do over the network without ADB, from reading the TV&apos;s details to launching and stopping YouTube, Netflix and Spotify.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {[
              { icon: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#DE1A58" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>), title: 'Finds the TV', desc: 'Sweeps all 254 addresses on the /24 at once and identifies Android TVs by their Cast and remote ports' },
              { icon: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#DE1A58" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="13" rx="2" /><path d="M10 9l5 2.5-5 2.5z" /></svg>), title: 'Works Without ADB', desc: 'Launches and stops apps over Cast v2 on port 8009 and DIAL on port 8008' },
              { icon: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#DE1A58" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12a8 8 0 1 0 2.3-5.6" /><path d="M4 4v4h4" /></svg>), title: 'Undo for Everything', desc: 'Every disable and setting change goes to journal.jsonl, and restore --yes plays it back' },
              { icon: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#DE1A58" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6z" /></svg>), title: 'Protected Apps', desc: 'DStv, YouTube, Netflix, Spotify and the system packages are refused by name' },
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
            'A macOS app, TVDoctor.app, that opens the TV Doctor window in the browser on 127.0.0.1:8787',
            'A home screen that searches the network, lists what answers, and connects in three checked steps',
            'report: storage, free RAM, process count, installed and disabled apps, animation settings',
            'clean, optimize and bloat, each with --dry-run to print every change without making it',
            'routes, launch, stop and force-stop for the four apps the TV is actually used for',
            'guide: the whole cleanup written out as remote button presses, for a TV with no network ADB',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', margin: '0.75rem 0' }}>
              <span style={{ flexShrink: 0, width: '24px', height: '24px', background: 'var(--accent-green)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.8rem' }}>✓</span>
              <span style={{ color: 'var(--text-dust)', fontSize: '1.05rem' }}>{item}</span>
            </div>
          ))}
        </section>

        {/* Running app */}
        <section id="app" style={sectionStyle}>
          <h2 style={h2Style}>A Running Application</h2>
          <p style={pStyle}>
            TV Doctor is one binary with two faces. From a terminal it is a command line tool. Run as <code style={codeStyle}>tvdoctor app</code>,
            which is what TVDoctor.app does, it serves a window on 127.0.0.1:8787 and opens it in the browser. Nothing in the window talks
            to the TV directly.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '1rem', margin: '2rem 0' }}>
            {[
              { title: 'Every button is a command', desc: 'Pressing Clean runs tvdoctor clean as a child process and streams what it prints into the monitor' },
              { title: 'A whitelist, not a shell', desc: 'The browser sends a name like launch-youtube. Only names in the actions table are ever run' },
              { title: 'Stop means stop', desc: 'The Stop button sends SIGTERM to the command and its children, so a hung adb or openssl dies with it' },
              { title: 'State off the request path', desc: 'The TV is probed every 4 seconds on a background thread, so /api/state answers at once' },
            ].map((c) => (
              <div key={c.title} style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-void)', borderRadius: '12px', padding: '1.5rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-star)' }}>{c.title}</h4>
                <p style={{ fontSize: '0.95rem', margin: 0, color: 'var(--text-dust)' }}>{c.desc}</p>
              </div>
            ))}
          </div>

          <h3 style={h3Style}>How a button reaches the TV</h3>
          <div style={{ margin: '2rem 0', padding: '1.5rem', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--border-void)' }}>
            {[
              { name: 'Window', tech: 'app.html, embedded with include_str!' },
              { name: 'Local server', tech: 'std::net on 127.0.0.1:8787' },
              { name: 'Subcommand', tech: 'the same binary, run as a child' },
              { name: 'Protocols', tech: 'adb, Cast v2 over openssl, DIAL' },
              { name: 'The TV', tech: 'ports 5555, 8008, 8009, 6466' },
            ].map((layer, i, arr) => (
              <div key={layer.name}>
                <div style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-void)', borderRadius: '8px', padding: '1rem 1.5rem', margin: '0.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-star)', fontSize: '1.05rem' }}>{layer.name}</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', color: 'var(--accent-cosmic)', background: 'rgba(143, 1, 119, 0.15)', padding: '0.25rem 0.75rem', borderRadius: '4px' }}>{layer.tech}</span>
                </div>
                {i < arr.length - 1 && <div style={{ textAlign: 'center', fontSize: '1.5rem', color: 'var(--text-dim)' }}>↓</div>}
              </div>
            ))}
          </div>

          <p style={pStyle}>Every action in the window maps to one of these routes:</p>
          {rows([
            { key: 'GET /api/state', desc: 'The cached TV state: address, name, model, awake, ADB, and whether a command is running' },
            { key: 'POST /api/scan', desc: 'Start a network search on a background thread' },
            { key: 'GET /api/scan/status', desc: 'Poll the search until it finishes, with every device found' },
            { key: 'POST /api/connect?ip=', desc: 'Remember a TV and probe it once. Anything that is not an IPv4 address is refused' },
            { key: 'POST /api/run?cmd=', desc: 'Run one whitelisted action' },
            { key: 'GET /api/log?from=', desc: 'The command output from line n onward, for the monitor' },
            { key: 'POST /api/cancel', desc: 'Stop the running command and its children' },
            { key: 'POST /api/clear', desc: 'Empty the monitor' },
          ], '250px')}

          <p style={pStyle}>The whitelist is a plain table from button name to arguments:</p>
          <CodeBlock language="rust">{`/// Button name -> the arguments this binary is run with. A whitelist, so a
/// request can never name anything else.
fn actions() -> HashMap<&'static str, Vec<&'static str>> {
    HashMap::from([
        ("remote-check", vec!["remote-check"]),
        ("clean", vec!["clean"]),
        ("bloat-auto", vec!["bloat", "--auto", "--yes"]),
        ("reboot", vec!["reboot", "--yes"]),
        ("launch-youtube", vec!["launch", "youtube"]),
        ("force-stop-dstv", vec!["force-stop", "dstv"]),
        ...
    ])
}`}</CodeBlock>
        </section>

        {/* Finding */}
        <section id="finding" style={sectionStyle}>
          <h2 style={h2Style}>Finding the TV</h2>
          <p style={pStyle}>
            The window opens on a home screen. With a TV remembered from last time it offers that one straight away. Otherwise, or after
            Find a different TV, it searches the network and lists everything that answered:
          </p>

          <ScreenshotTabs shots={[
            { label: 'Home', src: img('home-welcome'), alt: 'The TV Doctor home screen offering the remembered TV', caption: 'The remembered TV with Connect, or search again, or type an address' },
            { label: 'Searching', src: img('home-searching'), alt: 'The search screen with a radar sweep', caption: 'A sweep of 192.168.1.1 to 192.168.1.254, every address probed in parallel' },
            { label: 'Found', src: img('home-found'), alt: 'One TV found, tagged Android TV, Cast and ADB off', caption: '"Found 1 TV": tagged Android TV (port 6466 open), Cast (8008 open) and ADB off (5555 closed)' },
            { label: 'Connected', src: img('home-connected'), alt: 'The connect screen with Reach and Identify passed and ADB off', caption: 'Reach, Identify, ADB. ADB is amber, not red: the TV still connects, with the network tools only' },
          ].map((s) => ({ ...s, url }))} />

          <h3 style={h3Style}>One thread per address</h3>
          <p style={pStyle}>
            The search takes the laptop&apos;s address, drops the last octet and spawns a thread for each of the 254 hosts, each with a
            192KB stack. A host only counts if port 8008 (Cast) or 6466 (the Android TV remote) opens within 700ms. Anything that answers
            on 8008 is then asked who it is at <code style={codeStyle}>/ssdp/device-desc.xml</code>, which is where the name and model come
            from.
          </p>

          <CodeBlock language="rust">{`fn probe_host(ip: String) -> Option<Found> {
    let cast = port_open(&ip, CAST_PORT, 700);
    let remote = port_open(&ip, REMOTE_PORT, 700);
    if !cast && !remote {
        return None;
    }
    let mut found = Found {
        adb: port_open(&ip, ADB_PORT, 700),
        ip,
        cast,
        remote,
        ..Default::default()
    };
    ...
}`}</CodeBlock>

          <p style={pStyle}>
            Connecting remembers the address in <code style={codeStyle}>~/.config/tvdoctor/config.json</code>, outside the project, so
            nothing about a particular TV ever ends up in the repository.
          </p>

          <h3 style={h3Style}>When nothing answers</h3>
          <p style={pStyle}>
            An empty search has two very different causes: a TV in standby, or macOS blocking the app from the local network. TV Doctor
            tells them apart by also checking the router. If the router does not answer either, the network is blocked, not the TV:
          </p>

          <Screenshot
            url={url}
            src={img('home-blocked')}
            alt="No TV found, with the macOS Local Network warning"
            caption="Nothing answered and neither did the router: System Settings › Privacy & Security › Local Network › TV Doctor on"
          />
        </section>

        {/* Platform */}
        <section id="platform" style={sectionStyle}>
          <h2 style={h2Style}>The Platform</h2>
          <p style={pStyle}>
            After connecting, everything fits on one screen with no scrolling: four cards on the left and the monitor on the right. The
            header carries the TV&apos;s name and address and two pills, TV responsive and ADB unavailable, refreshed from the cached state
            every 5 seconds.
          </p>

          {cards([
            { sub: 'Check-up', title: 'Examine, Vital signs, Channels', desc: 'remote-check, status and routes. Read only, and all three work with ADB off' },
            { sub: 'Remote guide', title: 'Open guide', desc: 'The full cleanup as button presses on the remote, in the order that matters' },
            { sub: 'Apps', title: 'Start and Stop per app', desc: 'YouTube and Spotify over Cast, Netflix over DIAL, DStv with Try and Force stop' },
            { sub: 'Treatment', title: 'Seven ADB actions', desc: 'Full diagnosis, Whole course, Clean, Optimise, Updates, Extras, App notes, then Restart TV and Undo changes' },
          ])}

          <ScreenshotTabs shots={[
            { label: 'Channels', src: img('platform-routes'), alt: 'The platform after Channels, with the routes output', caption: 'routes, checked live: YouTube and Spotify over Cast v2 on 8009, Netflix over DIAL on 8008, DStv unreachable' },
            { label: 'Remote guide', src: img('platform-guide'), alt: 'The platform showing the remote guide', caption: '"Clear cache, not Clear data. Clear data signs you out of the app." WARN lines print in amber' },
            { label: 'Dark mode', src: img('platform-dark-status'), alt: 'The platform in dark mode after Vital signs', caption: 'The same screen in macOS dark mode: status says awake yes, ADB reachable no' },
          ].map((s) => ({ ...s, url }))} />

          <p style={pStyle}>
            The monitor colours lines by their prefix, the same prefixes the command line prints: <code style={codeStyle}>OK</code> in
            green, <code style={codeStyle}>WARN</code> in amber, <code style={codeStyle}>FAIL</code> and <code style={codeStyle}>error:</code> in
            red, and the <code style={codeStyle}>$ tvdoctor</code> line in white. While a command runs, every button is disabled except
            Stop.
          </p>
        </section>

        {/* No ADB */}
        <section id="no-adb" style={sectionStyle}>
          <h2 style={h2Style}>When ADB Says No</h2>
          <p style={pStyle}>
            The plan was ADB over the network on port 5555. The HAT4KDTV&apos;s Developer options has a Debugging section with three
            entries: USB debugging, Select mock location app and Select debug app. There is no Network debugging entry, and 5555 refuses
            connections. A restart brought the TV back with an uptime of zero and 5555 still closed.
          </p>
          <p style={pStyle}>
            A USB cable does not get round it either. The USB ports on a TV are host ports, made for plugging things into the TV, so the
            laptop cannot be the device on the other end.
          </p>

          <h3 style={h3Style}>What still works</h3>
          <p style={pStyle}>
            The TV still runs a Cast receiver, which answers on 8008 without pairing. remote-check reads it for the model, the Cast build,
            uptime, whether a system update is waiting and whether the TV is wired:
          </p>

          <CodeBlock language="text">{`Remote check
------------
  ..   read over the Cast endpoint, so this works without ADB
  Make / model:               Hisense HAT4KDTV
  Cast build:                 3.74.mediashell_clone_374_20260921.00_RC03.1002568804
  System update waiting:      no
  Network:                    wired ethernet
  Uptime:                     0.1 days

What this cannot tell you
-------------------------
  Free storage, free RAM, app caches, app versions and which apps run
  in the background all need ADB. Without it, run:  tvdoctor guide`}</CodeBlock>

          <p style={pStyle}>
            The last block is deliberate. The tool says what it cannot see rather than leaving a blank where storage would be, and points
            at <code style={codeStyle}>guide</code>, which is the same treatment done by hand.
          </p>
        </section>

        {/* Cast */}
        <section id="cast" style={sectionStyle}>
          <h2 style={h2Style}>Cast v2 by Hand</h2>
          <p style={pStyle}>Three of the four apps can be started over the network. Which route each takes was found by asking the TV:</p>

          {cards([
            { sub: 'Cast 233637DE', title: 'YouTube', desc: 'Reports APP_AVAILABLE over Cast. Not registered with DIAL on this TV' },
            { sub: 'DIAL :8008', title: 'Netflix', desc: 'Registered with DIAL and launches reliably. Reports APP_UNAVAILABLE over Cast, so DIAL goes first' },
            { sub: 'Cast CC32E753', title: 'Spotify', desc: 'Reports APP_AVAILABLE over Cast' },
            { sub: 'none', title: 'DStv', desc: 'No Cast receiver and no DIAL registration, so nothing on the network can start it' },
          ])}

          <CodeBlock language="text">{`How each app can be reached
---------------------------
  ..   checked live against the TV, no ADB involved
  OK   YouTube  Cast v2 on port 8009 (app id 233637DE)
  OK   Netflix  DIAL on port 8008 (registered as "Netflix")
  OK   Spotify  Cast v2 on port 8009 (app id CC32E753)
  WARN DStv     no receiver of either kind, use the remote`}</CodeBlock>

          <h3 style={h3Style}>Protobuf without a protobuf library</h3>
          <p style={pStyle}>
            Cast v2 is TLS on port 8009 carrying length-prefixed protobuf frames whose payload is JSON. The project has no external crates,
            so the TLS goes through the <code style={codeStyle}>openssl s_client</code> already on the Mac, and the one message type
            involved is encoded by hand:
          </p>

          <CodeBlock language="rust">{`/// One CastMessage, length prefixed as the wire format wants.
fn frame(destination: &str, namespace: &str, payload: &str) -> Vec<u8> {
    let mut message = Vec::new();
    message.extend(field_varint(1, 0)); // protocol_version CASTV2_1_0
    message.extend(field_string(2, "sender-0"));
    message.extend(field_string(3, destination));
    message.extend(field_string(4, namespace));
    message.extend(field_varint(5, 0)); // payload_type STRING
    message.extend(field_string(6, payload));

    let mut out = (message.len() as u32).to_be_bytes().to_vec();
    out.extend(message);
    out
}`}</CodeBlock>

          <p style={pStyle}>
            openssl ignores end of input and holds the connection open, so the exchange reads replies on a thread until one contains the
            string it is waiting for, then kills the child. The Android TV remote protocol on 6466 could start DStv too, but it needs a
            pairing code read off the screen and a far larger implementation, so it is not built.
          </p>

          <h3 style={h3Style}>Stopping an app that cannot be stopped</h3>
          <p style={pStyle}>
            <code style={codeStyle}>stop</code> ends an app&apos;s session and hands back the memory it held. DStv has no session to end, so{' '}
            <code style={codeStyle}>force-stop dstv</code> takes the screen with an app that does have a receiver and then stops that one,
            which lands the TV on its home screen with DStv out of the foreground. Android reclaims a backgrounded app&apos;s memory under
            pressure. That is not <code style={codeStyle}>am force-stop</code> over ADB, and TV Doctor does not claim it is.
          </p>
        </section>

        {/* Treatment */}
        <section id="treatment" style={sectionStyle}>
          <h2 style={h2Style}>The Treatment</h2>
          <p style={pStyle}>
            On a TV with network ADB, these are the commands that make it fast again. Each one is the shell commands it runs, nothing
            hidden:
          </p>

          {rows([
            { key: 'clean', desc: 'logcat -b all -c, pm trim-caches 1000G, am kill-all, the Play Store cache, then sm idle-maint run. Reports free space before and after' },
            { key: 'optimize', desc: 'cmd package compile -m speed-profile -f -a (speed with --aggressive), then animation scales to 0. Expect 10 to 30 minutes' },
            { key: 'bloat', desc: 'Lists installed apps against 17 known preinstalled extras. --auto --yes switches those off with pm disable-user' },
            { key: 'report', desc: 'Storage, free RAM, process count, installed and disabled app counts, the four key apps, animation settings' },
            { key: 'restore', desc: 'Plays the journal back: pm enable for every disabled package, and the animation scales back to 1.0' },
          ], '110px')}

          <h3 style={h3Style}>Safety</h3>
          <p style={pStyle}>
            The four apps the TV is used for are refused by name, and so is anything matching a protected fragment. The match is a
            substring, so the net is deliberately wide: breaking one of these can cost the picture, the sound, the remote or the network.
          </p>

          <CodeBlock language="rust">{`pub const PROTECTED_FRAGMENTS: &[&str] = &[
    "com.android.",
    "com.google.android.gms",
    "com.google.android.tvlauncher",
    "com.google.android.webview",
    "com.google.android.tv.remote",
    "com.google.android.apps.mediashell",
    "systemui",
    "inputmethod",
    "keyboard",
    ...
];`}</CodeBlock>

          <p style={pStyle}>
            Every reversible change is appended to <code style={codeStyle}>~/.config/tvdoctor/journal.jsonl</code> as one line of JSON.
            After a restore the journal is renamed to <code style={codeStyle}>journal.jsonl.restored-&lt;unix time&gt;</code> so it cannot be
            replayed twice. With <code style={codeStyle}>--dry-run</code> every command is printed instead of run, and nothing is journaled.
          </p>

          <CodeBlock language="json">{`{"ts": "2026-10-25 18:52:10 UTC", "action": "disable", "target": "com.google.android.play.games"}`}</CodeBlock>

          <p style={pStyle}>
            The one destructive option, <code style={codeStyle}>clean --deep</code>, wipes app data and signs you out, so it needs both
            explicit package names and <code style={codeStyle}>--yes</code>.
          </p>
        </section>

        {/* Mark */}
        <section id="mark" style={sectionStyle}>
          <h2 style={h2Style}>The Brand Mark</h2>
          <p style={pStyle}>
            The O of DOCTOR is a vintage television drawn in SVG: a cabinet, a rounded screen, two dials, rabbit ears and two legs. It
            beats like a heart, and every part of it reports something about the connection:
          </p>

          <Screenshot
            url={url}
            src={img('mark-states')}
            alt="The TV Doctor mark in five states: idle, searching, connected with ADB on, connected with ADB off, not answering"
            caption="Idle, searching, connected with ADB on, connected with ADB off, not answering"
          />

          {rows([
            { key: 'Heartbeat', desc: 'A double beat every 2 seconds, 0.8 seconds while searching, 0.7 while a command runs' },
            { key: 'Screen', desc: 'A pulse draws across it. A TV that stops answering flatlines and stops beating' },
            { key: 'Dials', desc: 'Turn in opposite directions while searching or working, like tuning in' },
            { key: 'Antennas', desc: 'Signal waves spark in turn while searching and stay lit once connected' },
            { key: 'Light', desc: 'The ADB light: teal with ADB, breathing amber without it' },
          ], '120px')}

          <p style={pStyle}>
            The browser tab icon is a flat version that follows the same state, the README banner and the macOS app icon are rendered
            from the same drawing function, and the card on this site&apos;s home page is the mark in its ADB-off state.
          </p>
        </section>

        {/* Build */}
        <section id="build" style={sectionStyle}>
          <h2 style={h2Style}>Build & Run</h2>
          <p style={pStyle}>Rust and the Android platform tools, then:</p>

          <CodeBlock language="bash">{`brew install --cask android-platform-tools

git clone https://github.com/Sbonelo-Mntungwa/tv-doctor.git
cd tv-doctor

# Build, then install ~/Applications/TVDoctor.app
./scripts/build.sh

# Open it from anywhere, or find "TV Doctor" in Spotlight
open -a TVDoctor`}</CodeBlock>

          <p style={pStyle}>Or skip the window entirely:</p>
          {rows([
            { key: 'discover', desc: 'Scan the network for Android TVs and remember the first one' },
            { key: 'status', desc: 'Is the TV awake, is ADB reachable' },
            { key: 'remote-check', desc: 'What the TV reports over Cast, without ADB' },
            { key: 'routes', desc: 'Which apps can be launched from here, and how' },
            { key: 'launch youtube', desc: 'Start an app over DIAL or Cast' },
            { key: 'force-stop', desc: 'Take the screen back and return the TV to its home screen' },
            { key: 'guide', desc: 'Clean the TV from the remote, when ADB is not available' },
            { key: 'full', desc: 'report, clean, optimise, then the app check' },
            { key: '--dry-run', desc: 'Print every change without making any' },
            { key: '--ip ADDRESS', desc: 'Override the remembered TV' },
          ], '170px')}

          <h3 style={h3Style}>One binary, no crates</h3>
          <p style={pStyle}>
            <code style={codeStyle}>[dependencies]</code> in Cargo.toml is empty. The HTTP server and client are std::net, the config and
            journal are hand-rolled JSON in 208 lines, and the window&apos;s HTML is compiled in with{' '}
            <code style={codeStyle}>include_str!(&quot;app.html&quot;)</code>. With <code style={codeStyle}>opt-level = &quot;z&quot;</code>,
            LTO and strip, the release binary is 654,656 bytes and builds offline in a few seconds.
          </p>

          <CodeBlock language="toml">{`[profile.release]
opt-level = "z"
lto = true
strip = true`}</CodeBlock>

          <h3 style={h3Style}>Why the build script signs the app</h3>
          <p style={pStyle}>
            <code style={codeStyle}>scripts/build.sh</code> assembles the app from <code style={codeStyle}>macos/</code> on every build:
            Info.plist, the icon, the Finder launcher and the fresh binary, then <code style={codeStyle}>codesign --force --deep --sign -</code>.
            Both steps exist because of the first two bugs below.
          </p>
        </section>

        {/* Debugging */}
        <section id="debugging" style={sectionStyle}>
          <h2 style={h2Style}>Debugging Adventures</h2>

          <div style={{ marginTop: '2rem' }}>
            <DebugItem title="The TV Looked Switched Off from Finder" defaultOpen={true}>
              <p style={pStyle}><strong style={strong}>Symptom:</strong> From Terminal, every command reached the TV. Launched from Finder, the same binary reported nothing on the network.</p>
              <p style={pStyle}><strong style={strong}>Cause:</strong> macOS grants Local Network access per app. Terminal had it. A binary executed from outside the app bundle does not inherit the bundle&apos;s identity, so it was blocked with no prompt and no error.</p>
              <p style={pStyle}><strong style={strong}>Solution:</strong> Run the binary from inside the bundle, and check the router whenever the TV is quiet. If the router does not answer either, the window shows the Local Network fix instead of calling the TV asleep.</p>
            </DebugItem>

            <DebugItem title="Finder Refused to Open the App">
              <p style={pStyle}><strong style={strong}>Symptom:</strong> After a rebuild, double clicking the app did nothing at all. No error, no bounce in the Dock.</p>
              <p style={pStyle}><strong style={strong}>Cause:</strong> Copying the new binary into the bundle invalidated its ad-hoc code signature, and Finder silently refuses to launch a bundle with a broken one.</p>
              <p style={pStyle}><strong style={strong}>Solution:</strong> Re-sign after every copy, in the build script and in the launcher, which also takes a newer binary from the checkout when it finds one. The signature keeps the Local Network permission attached to a stable identity too.</p>
            </DebugItem>

            <DebugItem title="Port 5555 Refused">
              <p style={pStyle}><strong style={strong}>Symptom:</strong> <code style={codeStyle}>cannot reach ADB on &lt;ip&gt;:5555</code>, with the TV awake and Developer options on.</p>
              <p style={pStyle}><strong style={strong}>Cause:</strong> adbd on this Hisense build is bound to USB only. There is no network debugging toggle, and rebooting does not bind it.</p>
              <p style={pStyle}><strong style={strong}>Solution:</strong> Build everything that works without ADB: remote-check, routes, launch, stop, force-stop, and guide for the cleanup itself. status still checks 5555 on every run, in case a firmware update opens it.</p>
            </DebugItem>

            <DebugItem title="The Header Kept Calling the TV Asleep">
              <p style={pStyle}><strong style={strong}>Symptom:</strong> The header flapped between responsive and not responding on a TV that was plainly on, and once the router check was added it timed out entirely.</p>
              <p style={pStyle}><strong style={strong}>Cause:</strong> This TV answers in 50ms or worse on a wired LAN, slower just after booting, and drops the odd probe when busy. Probing inside the request made <code style={codeStyle}>/api/state</code> take as long as 12 seconds.</p>
              <p style={pStyle}><strong style={strong}>Solution:</strong> Probe on a background thread every 4 seconds with two 2500ms attempts, serve the cached result immediately, and only say not responding after two misses in a row.</p>
            </DebugItem>

            <DebugItem title="Netflix Said APP_UNAVAILABLE">
              <p style={pStyle}><strong style={strong}>Symptom:</strong> Launching Netflix over Cast failed although Netflix is installed.</p>
              <p style={pStyle}><strong style={strong}>Cause:</strong> On this TV Netflix reports <code style={codeStyle}>APP_UNAVAILABLE</code> over Cast but is registered with DIAL.</p>
              <p style={pStyle}><strong style={strong}>Solution:</strong> Try DIAL first for any app registered there, then Cast. routes asks the TV live rather than trusting a table.</p>
            </DebugItem>

            <DebugItem title="Restarting the TV from the Laptop">
              <p style={pStyle}><strong style={strong}>Symptom:</strong> <code style={codeStyle}>POST /setup/reboot</code> on the Cast endpoint returned 403.</p>
              <p style={pStyle}><strong style={strong}>Cause:</strong> Current Cast firmware no longer accepts the reboot call, and this set has no Restart item in its menus either.</p>
              <p style={pStyle}><strong style={strong}>Solution:</strong> Without ADB there is no restart, so guide says to unplug the TV at the wall for a minute.</p>
            </DebugItem>

            <DebugItem title="Backdrop Did Not Displace DStv">
              <p style={pStyle}><strong style={strong}>Symptom:</strong> The first force-stop dstv launched Backdrop, the idle screen app, and DStv stayed on screen.</p>
              <p style={pStyle}><strong style={strong}>Cause:</strong> Backdrop does not take the foreground from a running app.</p>
              <p style={pStyle}><strong style={strong}>Solution:</strong> Launch an app that does take the screen, then stop that session. The TV lands on its home screen.</p>
            </DebugItem>
          </div>
        </section>

        {/* Learnings */}
        <section id="learnings" style={sectionStyle}>
          <h2 style={h2Style}>Key Learnings</h2>

          <h3 style={h3Style}>Technical skills gained</h3>
          <div style={{ margin: '1rem 0' }}>
            {['ADB', 'Cast v2', 'DIAL', 'Protobuf Wire Format', 'TLS via openssl', 'SSDP Device Descriptions', 'Subnet Scanning', 'macOS Local Network Privacy', 'Code Signing', 'App Bundles', 'std::net HTTP', 'Process Control', 'SVG Animation'].map((skill) => (
              <span key={skill} style={{ display: 'inline-block', background: 'var(--bg-tertiary)', border: '1px solid var(--border-void)', padding: '0.5rem 1rem', borderRadius: '100px', fontSize: '0.9rem', color: 'var(--text-dust)', margin: '0.25rem' }}>{skill}</span>
            ))}
          </div>

          <h4 style={h4Style}>1. Check the device before writing the tool</h4>
          <p style={pStyle}>The whole design assumed network ADB. Three entries in a Developer options menu changed half the project, and the network-only commands ended up being the ones I use.</p>

          <h4 style={h4Style}>2. Silence from macOS looks exactly like a TV in standby</h4>
          <p style={pStyle}>A blocked app and a sleeping TV both produce no answer. Asking a second device, the router, is the only way to tell them apart, and it is one extra probe.</p>

          <h4 style={h4Style}>3. A small wire format is cheaper than a dependency</h4>
          <p style={pStyle}>One protobuf message, a varint encoder and openssl as a child process replaced a TLS crate and a protobuf crate. The binary stayed at 639KB with an empty dependency list.</p>

          <h4 style={h4Style}>4. Say what cannot be seen</h4>
          <p style={pStyle}>remote-check ends by listing what it cannot read without ADB and where to go instead. A blank where free storage should be would read as zero.</p>

          <blockquote style={quoteStyle}>
            &ldquo;If the tool cannot reach the TV, it should at least know whether the TV is asleep or the Mac is blocking it.&rdquo;
          </blockquote>
        </section>

      </main>

      {/* Footer */}
      <footer style={{ position: 'relative', zIndex: 10, padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid var(--border-void)' }}>
        <p style={{ color: 'var(--text-dim)', fontSize: '1rem' }}>TV Doctor: 24 commands, 3 network protocols, 0 crates, one 639KB binary.</p>
        <p style={{ marginTop: '2rem', fontSize: '0.875rem', color: 'var(--text-dim)' }}>© 2026 - Built for a slow TV, run from a Mac</p>
      </footer>
    </div>
  );
}
