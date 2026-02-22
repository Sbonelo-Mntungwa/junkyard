import type { Metadata } from 'next'
import '@/styles/globals.css'
import LoadingScreen from '@/components/LoadingScreen'

export const metadata: Metadata = {
  title: 'Welcome to my Junkyard',
  description: 'A collection of experiments, projects & digital debris',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LoadingScreen />
        {children}
      </body>
    </html>
  )
}
