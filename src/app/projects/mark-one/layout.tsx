import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mark One: Building a Computer from Transistors Up',
  description: 'A game about building a computer from NMOS and PMOS transistors to a running CPU, on a switch-level circuit engine written in Rust',
}

export default function MarkOneLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
