import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RustPi — Building a Linux Distribution from Scratch',
  description: 'A deep dive into creating a minimal, custom Linux distribution for Raspberry Pi 3A+ with a Rust-based init system',
}

export default function RustPiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
