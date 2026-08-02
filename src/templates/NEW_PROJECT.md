# Adding a New Project Showcase Page

This folder holds the scaffolding for adding a project page to the Junkyard site.
The goal is that you do not need to paste an existing page for reference. Point the
AI at these two template files plus your Notion doc, and it can produce the page.

## Files in this folder

- `project-page.template.tsx` : the page skeleton. Fill the config blocks at the top.
- `project-layout.template.tsx` : the metadata wrapper for the route.
- `NEW_PROJECT.md` : this file.

## Hard rule

Do NOT use em dashes anywhere: not in page content, not in metadata, not in code
comments. Use colons, hyphens, or parentheses instead. This applies to the AI and
to any hand edits.

## House style: do not let it read as AI generated

The one principle behind all of these: be specific. Generic is what reads as AI.
Every rule below serves that. If the content is true, specific, and pulled from the
real Notion notes, and the code is indistinguishable from the rest of this repo,
the AI impression disappears. These rules just remove the obvious signals so the
specificity can show through. None of them is a guarantee, since some are style
preferences rather than hard tells, but together they do the job.

### Writing

1. Every claim carries a concrete anchor: a number, a filename, a command, a real
   error string, or a proper noun. No adjective stands alone. Replace "blazing
   fast" with "boots in ~3s". Replace "lightweight" with "741KB static binary".
   This one rule does most of the work.
2. Ban the filler vocabulary: seamless, robust, leverage, delve, elevate, unlock,
   powerful (as filler), cutting-edge, game-changer, boasts, realm, landscape,
   tapestry, testament, streamline, harness, empower, revolutionize, foster,
   myriad, navigate (figurative). If a word markets rather than describes, cut it.
3. No "not just X, but Y" and no "it's not about X, it's about Y". This is the most
   recognizable AI sentence shape.
4. No filler transitions: Moreover, Furthermore, Additionally, In addition, It's
   worth noting, That said, Notably, Importantly. Start the sentence with its
   actual content.
5. No wrap-up conclusions: no "In conclusion", "Overall", "In summary". End a
   section on a concrete detail, not a restatement.
6. Do not default to the rule of three. "Fast, reliable, and scalable" is reflexive
   AND vague. Vary list lengths. Two or four items are fine, and often truer.
7. First person, past tense, about what actually happened. "I traced it to an EFI
   stub in the kernel config." Not "One might encounter boot issues."
8. Keep real artifacts verbatim: exact error messages, exact command output, exact
   file paths and config keys. A fabricated-looking error is a dead giveaway. A real
   one (`Kernel panic - not syncing: VFS: Unable to mount root fs`) cannot be faked
   generically and is the strongest authenticity signal you have.
9. Match the existing casing. Body text and h3/h4 subheads are sentence case, not
   Title Case. Only the h2 headings are uppercase, and that is done in CSS, not by
   typing capitals.

### Code

1. Comments explain why, not what. Delete any comment that restates the line below
   it. `// set loading to true` above `setLoading(true)` is the clearest AI tell.
2. Match existing patterns exactly: inline styles plus CSS variables from
   `globals.css`, styled-jsx only where already used, no Tailwind, no CSS-in-JS
   library, no new dependency in `package.json` without a stated reason.
3. No defensive boilerplate the existing code does not have: no try/catch around
   things that cannot throw, no needless `useEffect`, no prop validation theater.
   The existing components are lean. Stay lean.
4. No JSDoc on trivial functions and no verbose header comments on simple
   components. The existing components have none.
5. Nothing unrequested: no extra config options, no speculative abstraction, no
   "for future flexibility" layers. Build what the Notion doc describes and stop.
6. Variable names stay in the existing register: short and direct (`layers`,
   `debugItems`, `pStyle`), not enterprise-y (`ProjectShowcaseConfigurationManager`).
7. No stray `console.log`, no leftover `TODO`, and no emoji anywhere the existing
   code does not already use them. Card icons and the footer crab are fine. Comments
   and prose are not.

## Where things live

- Routes: `src/app/projects/<slug>/page.tsx` and `.../layout.tsx`
- Shared components: `src/components/` (CosmicBackground, DebugItem, CodeBlock, BackToTop)
- Design tokens: `src/styles/globals.css` (all colors are CSS variables)
- Home page project grid: `src/app/page.tsx`

The templates live in `src/templates/` and are named `.template.tsx` so Next never
treats them as routes.

## Steps

1. Pick a slug (kebab-case), for example `pi-deploy`.
2. Create the folder `src/app/projects/<slug>/`.
3. Copy `project-page.template.tsx` to that folder as `page.tsx`.
4. Copy `project-layout.template.tsx` to that folder as `layout.tsx`.
5. Fill the config blocks in `page.tsx` and the metadata in `layout.tsx` from the
   Notion doc, using the mapping table below.
6. Add a card to the home grid in `src/app/page.tsx` (snippet at the bottom).
7. Run `npm run dev` and check the route at `/projects/<slug>`.

## Mapping: Notion doc to template config blocks

The Notion docs for these projects follow a consistent shape. Map them like this:

| Notion content                                   | Template block                         |
| ------------------------------------------------ | -------------------------------------- |
| Project title and one line summary               | `project.name`, `project.tagline`      |
| A punchy framing of the build                     | `headline` (lead, highlight, tail)     |
| Headline numbers (size, boot time, counts)        | `stats`                                |
| Overview or "What are we building" prose          | `overviewParagraphs`                   |
| Bullet list of key features or "What's Included"  | `featureCards` and `whatsIncluded`     |
| Any layered "stack" or architecture diagram       | `layers`                               |
| Phases, sections, or deep dive topics             | duplicate the Deep Dive `<section>`    |
| Commands and code snippets inside those phases    | `<CodeBlock language="...">`           |
| "Issues & Resolutions" table                      | `debugItems` (symptom, cause, solution)|
| "What you learned" or a skills list               | `skills` and `learnings`               |
| The Notion URL itself                             | `project.notionUrl`, `notionCard`      |
| A closing takeaway line                           | `closingQuote`                         |

Notes:
- The Table of Contents (`contents`) should list the sections you actually keep.
  Each `href` must match a section `id` in the JSX.
- Bespoke visuals (live dashboard mockups, Grafana panels, custom SVG diagrams) do
  not have a generic block. Add them as custom JSX inside the Deep Dive section.
  There are worked examples in `src/app/projects/pi-monitor/page.tsx`.
- Delete any section or config block you do not use. Each optional one is labeled.

## Design conventions (already baked into the template)

- Colors come only from these CSS variables in `globals.css`:
  `--bg-void`, `--bg-secondary`, `--bg-tertiary`, `--bg-code`,
  `--text-star`, `--text-dust`, `--text-dim`,
  `--accent-cosmic` (#8F0177), `--accent-nova` (#DE1A58), `--accent-aurora` (#06b6d4),
  `--accent-green`, `--border-void`.
- The signature gradient is `linear-gradient(135deg, #8F0177 0%, #DE1A58 100%)`.
- Fonts: Bebas Neue for big headings, JetBrains Mono for code and labels,
  Outfit for body (set globally in `globals.css`).
- Keep `'use client'` as the first line of `page.tsx`.
- Keep `layout.tsx` as a server component (no `'use client'`).

## Home page card snippet

Add this inside the `.projects-grid` in `src/app/page.tsx`. Swap the href, icon,
title, description, and tags. Use `featured` for a highlighted card, or drop it.

```tsx
<Link href="/projects/SLUG" className="project-card featured" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
  <div style={{ position: 'relative', zIndex: 1 }}>
    <span className="card-emoji" style={{ fontSize: '2rem', marginBottom: '0.5rem', display: 'block' }}>ICON</span>
    <h3 className="card-title" style={{
      fontFamily: 'Bebas Neue, sans-serif',
      fontSize: '1.6rem',
      marginBottom: '0.5rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      background: 'linear-gradient(135deg, #f0e6ff 0%, #DE1A58 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }}>
      PROJECT_NAME
    </h3>
    <p className="card-description" style={{ fontSize: '0.9rem', color: '#9b8fbf', lineHeight: 1.5, marginBottom: '0.75rem' }}>
      One line describing the project.
    </p>
    <div className="card-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
      <span className="tag">Tag One</span>
      <span className="tag">Tag Two</span>
      <span className="tag">Tag Three</span>
    </div>
    <span className="card-arrow">&rarr;</span>
  </div>
</Link>
```

## Ready to use prompt for next time

Paste this to the AI, then attach or paste only the Notion doc:

> Read `src/templates/NEW_PROJECT.md` and `src/templates/project-page.template.tsx`
> in this repo. Using the Notion doc I am giving you, create a new project page at
> `src/app/projects/<slug>/page.tsx` and its `layout.tsx`, following the template
> and its conventions. Fill the config blocks from the doc using the mapping table.
> Add the matching card to the home grid in `src/app/page.tsx`. Do not use em dashes
> anywhere. Tell me the slug you chose.