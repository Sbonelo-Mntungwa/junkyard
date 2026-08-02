/*
  PROJECT LAYOUT TEMPLATE
  =======================
  Copy this file to: src/app/projects/<slug>/layout.tsx

  This thin server component exists only to export metadata. The page itself is
  a client component and cannot export metadata, so this wrapper carries it.

  RULE: no em dashes in title or description. Use colons or hyphens.
*/

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PROJECT_NAME: short descriptive subtitle',
  description: 'One sentence describing the project for search results and link previews.',
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}