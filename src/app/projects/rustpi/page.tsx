'use client';

import Link from 'next/link';
import CosmicBackground from '@/components/CosmicBackground';
import DebugItem from '@/components/DebugItem';
import CodeBlock from '@/components/CodeBlock';
import BackToTop from '@/components/BackToTop';

export default function RustPiPage() {
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
          <span style={{ color: 'var(--accent-nova)' }}>&gt; </span>
          RustPi
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
          Building a <span style={{
            background: 'linear-gradient(135deg, #8F0177 0%, #DE1A58 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Linux Distribution</span> from Scratch
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '42rem', color: 'var(--text-dust)' }}>
          A deep dive into creating a minimal, custom Linux distribution for Raspberry Pi 3A+ with a Rust-based init system
        </p>
        
        <div style={{ display: 'flex', gap: '3rem', marginTop: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { num: '512', label: 'MB Image Size' },
            { num: '~3s', label: 'Boot Time' },
            { num: '100%', label: 'Custom Built' }
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent-nova)' }}>{stat.num}</div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginTop: '0.25rem', color: 'var(--text-dim)' }}>{stat.label}</div>
            </div>
          ))}
        </div>

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
            <div style={{ color: 'var(--accent-nova)' }}>=============================================</div>
            <div style={{ color: 'var(--accent-nova)' }}>  RustPi Init v0.5.0</div>
            <div style={{ color: 'var(--accent-nova)' }}>=============================================</div>
            <div style={{ color: 'var(--text-dust)' }}>[init] Mounting filesystems... OK</div>
            <div style={{ color: 'var(--text-dust)' }}>[init] Setting hostname: <span style={{ color: 'var(--accent-nova)' }}>rustpi</span></div>
            <div style={{ color: 'var(--text-dust)' }}>[init] Starting SSH server... OK (port 22)</div>
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
              { num: '01', text: 'Project Overview — What We Built', href: '#overview' },
              { num: '02', text: 'Why Build Your Own Linux?', href: '#why' },
              { num: '03', text: 'System Architecture', href: '#architecture' },
              { num: '04', text: 'Core Components', href: '#components' },
              { num: '05', text: 'Complete Build Guide', href: '#build-guide' },
              { num: '06', text: 'Debugging Adventures', href: '#debugging' },
              { num: '07', text: 'Key Learnings', href: '#learnings' },
              { num: '08', text: 'Resources & Next Steps', href: '#resources' },
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
            RustPi is a minimal, custom-built Linux distribution designed to run on a Raspberry Pi 3 Model A+. 
            What makes it unique is that the init system — the very first program that runs after the kernel boots — is written entirely in Rust.
          </p>
          <p style={pStyle}>
            This project demonstrates that building your own Linux distribution, while challenging, is absolutely achievable. 
            It&apos;s an incredible learning experience that demystifies how operating systems work at the most fundamental level.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {[
              { icon: '🦀', title: 'Rust Init System', desc: 'Custom PID 1 process handling mounts, networking, and service management' },
              { icon: '🐧', title: 'Minimal Linux', desc: 'Only essential components — no bloat, no unnecessary services' },
              { icon: '🥧', title: 'Pi 3A+ Target', desc: "Built specifically for Raspberry Pi's ARM64 architecture" },
              { icon: '📦', title: '512MB Image', desc: 'Complete bootable system in half a gigabyte' },
            ].map((card) => (
              <div key={card.title} style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-void)', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{card.icon}</div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-star)' }}>{card.title}</h4>
                <p style={{ fontSize: '0.95rem', margin: 0, color: 'var(--text-dust)' }}>{card.desc}</p>
              </div>
            ))}
          </div>

          <h3 style={h3Style}>What&apos;s Included</h3>
          {[
            'Custom Rust init system (PID 1) with mount handling, hostname setup, and service spawning',
            'BusyBox utilities providing 300+ common Linux commands',
            'Networking via USB-Ethernet adapter with DHCP support',
            'SSH server (Dropbear) for remote access',
            'Proper user authentication with password and SSH key support',
            'Pre-built Raspberry Pi kernel with full hardware support',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', margin: '0.75rem 0' }}>
              <span style={{ flexShrink: 0, width: '24px', height: '24px', background: 'var(--accent-green)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.8rem' }}>✓</span>
              <span style={{ color: 'var(--text-dust)', fontSize: '1.05rem' }}>{item}</span>
            </div>
          ))}
        </section>

        {/* Why */}
        <section id="why" style={sectionStyle}>
          <h2 style={h2Style}>Why Build Your Own Linux?</h2>
          <p style={pStyle}>You might wonder: with hundreds of Linux distributions available, why build your own?</p>
          
          <h3 style={h3Style}>For Engineers</h3>
          <ul style={{ color: 'var(--text-dust)', lineHeight: 2, fontSize: '1.05rem' }}>
            <li><strong style={{ color: 'var(--text-star)' }}>Deep System Understanding:</strong> There&apos;s no better way to understand how Linux works than building it yourself.</li>
            <li><strong style={{ color: 'var(--text-star)' }}>Embedded Systems Skills:</strong> IoT and embedded systems require minimal, purpose-built operating systems.</li>
            <li><strong style={{ color: 'var(--text-star)' }}>Rust Systems Programming:</strong> Writing an init system in Rust demonstrates the language&apos;s capability for low-level systems programming.</li>
          </ul>

          <blockquote style={{ borderLeft: '4px solid var(--accent-cosmic)', paddingLeft: '1.5rem', margin: '2rem 0', fontStyle: 'italic', color: 'var(--text-dust)', fontSize: '1.1rem' }}>
            &ldquo;The best way to understand something is to build it yourself.&rdquo;
          </blockquote>
        </section>

        {/* Architecture */}
        <section id="architecture" style={sectionStyle}>
          <h2 style={h2Style}>System Architecture</h2>
          <p style={pStyle}>A Linux system is built in layers, each depending on the one below it:</p>

          <div style={{ margin: '2rem 0', padding: '1.5rem', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--border-void)' }}>
            {[
              { name: 'User Applications', tech: 'Shell, SSH, Utilities' },
              { name: 'Init System', tech: 'Rust (PID 1)' },
              { name: 'User-space Libraries', tech: 'BusyBox, musl libc' },
              { name: 'Linux Kernel', tech: '6.12.x ARM64' },
              { name: 'Bootloader', tech: 'Raspberry Pi GPU' },
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
        </section>

        {/* Components */}
        <section id="components" style={sectionStyle}>
          <h2 style={h2Style}>Core Components</h2>
          
          <h3 style={h3Style}>The Rust Init System</h3>
          <p style={pStyle}>The init system is the heart of RustPi. As PID 1, it&apos;s the first userspace process and the parent of all others.</p>

          <CodeBlock language="rust">{`fn main() {
    // Verify we're running as PID 1
    if std::process::id() != 1 {
        eprintln!("[init] Error: Must run as PID 1");
        std::process::exit(1);
    }

    // Initialize the system
    mount_filesystems();    // /proc, /sys, /dev, /tmp
    setup_hostname();       // Set system hostname
    load_network_modules(); // Load USB-Ethernet driver
    setup_networking();     // DHCP configuration
    start_ssh_server();     // Dropbear SSH daemon
    spawn_shell();          // Interactive login shell

    // Reap zombie processes forever
    loop {
        waitpid(-1, WNOHANG);
        sleep(Duration::from_millis(100));
    }
}`}</CodeBlock>

          <h3 style={h3Style}>BusyBox — The Swiss Army Knife</h3>
          <p style={pStyle}>BusyBox provides 300+ common Unix utilities in a single ~1MB binary.</p>

          <CodeBlock language="bash">{`# Creating command symlinks
for cmd in ls cat cp mv rm mkdir chmod; do
    ln -sf busybox /bin/$cmd
done`}</CodeBlock>
        </section>

        {/* Build Guide */}
        <section id="build-guide" style={sectionStyle}>
          <h2 style={h2Style}>Complete Build Guide</h2>
          <p style={pStyle}>Ready to build your own RustPi? Here are the key phases:</p>

          <div style={{ margin: '2rem 0', paddingBottom: '2rem', borderBottom: '1px solid var(--border-void)' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', color: 'var(--accent-nova)', fontWeight: 600, marginBottom: '0.5rem' }}>Phase 1</div>
            <h4 style={h4Style}>Development Environment Setup</h4>
            <CodeBlock language="bash">{`# Install cross-compilation toolchain
sudo apt update
sudo apt install -y gcc-aarch64-linux-gnu build-essential git

# Install Rust with ARM64 target
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
rustup target add aarch64-unknown-linux-musl`}</CodeBlock>
          </div>

          <div style={{ margin: '2rem 0', paddingBottom: '2rem', borderBottom: '1px solid var(--border-void)' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', color: 'var(--accent-nova)', fontWeight: 600, marginBottom: '0.5rem' }}>Phase 2-3</div>
            <h4 style={h4Style}>Build Init & BusyBox</h4>
            <CodeBlock language="bash">{`# Build Rust init
cargo build --release --target aarch64-unknown-linux-musl

# Build BusyBox
make ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- defconfig
sed -i 's/# CONFIG_STATIC is not set/CONFIG_STATIC=y/' .config
make ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- -j$(nproc)`}</CodeBlock>
          </div>

          <div style={{ margin: '2rem 0' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', color: 'var(--accent-nova)', fontWeight: 600, marginBottom: '0.5rem' }}>Phase 4-5</div>
            <h4 style={h4Style}>Create SD Card Image</h4>
            <CodeBlock language="bash">{`# Create 512MB image
dd if=/dev/zero of=sdcard.img bs=1M count=512

# Create cmdline.txt
echo "console=serial0,115200 console=tty1 \\
  root=/dev/mmcblk0p2 rootfstype=ext4 \\
  rootwait rw init=/sbin/init" \\
  | sudo tee mnt/boot/cmdline.txt

# Flash to SD card
sudo dd if=sdcard.img of=/dev/rdisk4 bs=4m status=progress`}</CodeBlock>
          </div>
        </section>

        {/* Debugging */}
        <section id="debugging" style={sectionStyle}>
          <h2 style={h2Style}>Debugging Adventures</h2>
          <p style={pStyle}>Building a Linux distro involves solving many puzzles. Here are the issues we encountered:</p>

          <div style={{ marginTop: '2rem' }}>
            <DebugItem title="Kernel Panic: VFS Unable to Mount Root" defaultOpen={true}>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Symptom:</strong> <code style={{ background: 'var(--bg-tertiary)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Kernel panic - not syncing: VFS: Unable to mount root fs</code></p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Cause:</strong> The kernel was compiled as an EFI executable instead of a raw ARM64 image.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Solution:</strong> Disable EFI stub in kernel config.</p>
            </DebugItem>

            <DebugItem title="Pi Won't Boot: No Green LED Activity">
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Symptom:</strong> Power LED on, but no green activity LED blinking.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Cause:</strong> Missing bootcode.bin on the boot partition.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Solution:</strong> Copy bootcode.bin from Raspberry Pi firmware repository.</p>
            </DebugItem>

            <DebugItem title="Init Fails: Missing Shared Libraries">
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Symptom:</strong> Kernel boots but can&apos;t execute init.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Cause:</strong> Init was dynamically linked against glibc.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Solution:</strong> Build with musl for static linking.</p>
            </DebugItem>

            <DebugItem title="USB-Ethernet Not Detected">
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Symptom:</strong> eth0 interface doesn&apos;t appear.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Cause:</strong> Wrong driver - the dongle used DM9601 chip.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Solution:</strong> Identify correct driver via USB vendor/product ID.</p>
            </DebugItem>

            <DebugItem title="SSH Permission Denied — Nonexistent User">
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Symptom:</strong> &ldquo;Login attempt for nonexistent user&rdquo; in logs.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Cause:</strong> File ownership - /etc/passwd was owned by UID 1000.</p>
              <p style={pStyle}><strong style={{ color: 'var(--text-star)' }}>Solution:</strong> chown 0:0 /etc/passwd /etc/shadow</p>
            </DebugItem>
          </div>
        </section>

        {/* Learnings */}
        <section id="learnings" style={sectionStyle}>
          <h2 style={h2Style}>Key Learnings</h2>
          
          <h3 style={h3Style}>Technical Skills Gained</h3>
          <div style={{ margin: '1rem 0' }}>
            {['Cross-compilation', 'ARM64 Architecture', 'Kernel Configuration', 'Device Trees', 'Init Systems', 'Static Linking', 'Boot Process', 'Network Configuration', 'SSH Server Setup', 'Rust Systems Programming'].map((skill) => (
              <span key={skill} style={{ display: 'inline-block', background: 'var(--bg-tertiary)', border: '1px solid var(--border-void)', padding: '0.5rem 1rem', borderRadius: '100px', fontSize: '0.9rem', color: 'var(--text-dust)', margin: '0.25rem' }}>{skill}</span>
            ))}
          </div>

          <h4 style={h4Style}>1. Static vs Dynamic Linking</h4>
          <p style={pStyle}>In minimal systems without glibc, static linking is essential. The musl libc provides a lightweight alternative.</p>

          <h4 style={h4Style}>2. File Ownership is Critical</h4>
          <p style={pStyle}>When building a rootfs, files are owned by your user (UID 1000). These must be changed to root (UID 0).</p>

          <blockquote style={{ borderLeft: '4px solid var(--accent-cosmic)', paddingLeft: '1.5rem', margin: '2rem 0', fontStyle: 'italic', color: 'var(--text-dust)', fontSize: '1.1rem' }}>
            &ldquo;Every error message is a clue. The key is knowing where to look.&rdquo;
          </blockquote>
        </section>

        {/* Resources */}
        <section id="resources" style={sectionStyle}>
          <h2 style={h2Style}>Resources & Next Steps</h2>
          
          <h3 style={h3Style}>References Used</h3>
          <ul style={{ color: 'var(--text-dust)', lineHeight: 2, fontSize: '1.05rem' }}>
            <li><a href="https://github.com/raspberrypi/firmware" style={{ color: 'var(--accent-cosmic)' }}>Raspberry Pi Firmware</a> — GPU bootloader and pre-built kernels</li>
            <li><a href="https://busybox.net/" style={{ color: 'var(--accent-cosmic)' }}>BusyBox</a> — Compact Unix utilities</li>
            <li><a href="https://github.com/mkj/dropbear" style={{ color: 'var(--accent-cosmic)' }}>Dropbear SSH</a> — Lightweight SSH server</li>
            <li><a href="https://docs.rs/nix" style={{ color: 'var(--accent-cosmic)' }}>nix crate</a> — Rust bindings for Unix system calls</li>
            <li><a href="https://musl.libc.org/" style={{ color: 'var(--accent-cosmic)' }}>musl libc</a> — Lightweight C library for static linking</li>
          </ul>

          <div style={{ background: 'linear-gradient(135deg, rgba(143, 1, 119, 0.1) 0%, rgba(222, 26, 88, 0.05) 100%)', border: '1px solid rgba(222, 26, 88, 0.3)', borderRadius: '12px', padding: '1.5rem', margin: '2rem 0' }}>
            <h4 style={{ ...h4Style, marginTop: 0 }}>💡 Pro Tip</h4>
            <p style={{ ...pStyle, margin: 0 }}>
              Keep detailed notes of everything you try and every error you encounter. 
              This documentation becomes invaluable when you need to reproduce your work.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ position: 'relative', zIndex: 10, padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid var(--border-void)' }}>
        <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.5rem', marginBottom: '1rem' }}>Built with 🦀 and Curiosity</h3>
        <p style={{ color: 'var(--text-dim)', fontSize: '1rem' }}>RustPi demonstrates that understanding systems at a fundamental level is both achievable and rewarding.</p>
        <p style={{ marginTop: '2rem', fontSize: '0.875rem', color: 'var(--text-dim)' }}>© 2025 — Built from scratch, documented with care</p>
      </footer>
    </div>
  );
}
