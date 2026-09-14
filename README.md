# Bara Portfolio

Two-variant Next.js 15 portfolio. Both variants share the same data source so content changes propagate to both automatically.

## Variants

- **`/`** — shadcn/ui variant (neutral palette, canonical shadcn primitives)
- **`/classic`** — classic navy/violet variant (warmer palette, custom styling)

Both link to each other in their footers so you can preview either without editing the URL.

## Stack

- Next.js 15 (App Router, Server Components)
- React 18
- TypeScript strict
- Tailwind CSS 3.4
- shadcn/ui primitives (`Button`, `Card`, `Badge`) — hand-scaffolded, ready for `npx shadcn add ...`
- `lucide-react` icons
- `next/font` (Inter + JetBrains Mono, self-hosted)

## Setup

```bash
cd baraPortfolio
npm install
npm run dev
```

Open http://localhost:3000 (shadcn variant) and http://localhost:3000/classic.

## Deploy

Vercel picks it up automatically. `vercel` from the project root, or push to a GitHub repo connected to Vercel.

## Edit content once

All text/data lives in `src/lib/portfolio-data.ts`. Both variants read from it, so edits propagate everywhere. Structure:

- `projects` — featured work cards
- `experience` — timeline entries (mark `current: true` for the active pulse)
- `sites` — the 6 live domains
- `skills` — skill-group columns

## File layout

```
baraPortfolio/
├── package.json
├── next.config.mjs
├── tsconfig.json
├── postcss.config.mjs
├── tailwind.config.ts
├── components.json        # shadcn config — enables `npx shadcn add ...`
├── src/
│   ├── app/
│   │   ├── layout.tsx     # root layout, fonts, dark class
│   │   ├── globals.css    # Tailwind + shadcn CSS variables + utilities
│   │   ├── page.tsx       # shadcn variant
│   │   └── classic/
│   │       └── page.tsx   # classic variant
│   ├── components/ui/
│   │   ├── button.tsx     # shadcn Button
│   │   ├── card.tsx       # shadcn Card
│   │   └── badge.tsx      # shadcn Badge
│   └── lib/
│       ├── utils.ts       # `cn` helper
│       └── portfolio-data.ts  # single source of truth
```

## Adding more shadcn components

The `components.json` at the root means the shadcn CLI is preconfigured:

```bash
npx shadcn@latest add dialog dropdown-menu tabs
```

## Pick one variant to ship

When you're ready, delete the variant you don't want:

- Keep shadcn only: `rm -rf src/app/classic`
- Keep classic only: `mv src/app/classic/page.tsx src/app/page.tsx` (overwrite root)

Both variants coexist for now so you can decide later.
