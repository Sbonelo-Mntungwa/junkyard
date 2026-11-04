import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Faith',
  description: 'A secret portal',
  robots: { index: false, follow: false },
}

export default function FaithLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
