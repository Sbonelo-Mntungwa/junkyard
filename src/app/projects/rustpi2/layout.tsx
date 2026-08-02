import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RustPi 2: Platform Bootstrap',
  description: 'Turning the minimal RustPi image into an Alpine-based Docker host',
}

export default function RustPiPart2Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}