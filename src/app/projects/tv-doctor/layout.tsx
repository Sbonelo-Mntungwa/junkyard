import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TV Doctor: House Calls for an Old Android TV',
  description: 'A Rust command line tool and macOS app that finds an Android TV on the network, cleans and recompiles it over ADB, and launches apps over Cast and DIAL when ADB is off',
}

export default function TvDoctorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
