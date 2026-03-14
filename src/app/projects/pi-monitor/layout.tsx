import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pi-Monitor — Lightweight System Monitoring for Raspberry Pi',
  description: 'A Rust-based system monitoring agent with live dashboard, Prometheus metrics, and Grafana integration for Raspberry Pi',
}

export default function PiMonitorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}