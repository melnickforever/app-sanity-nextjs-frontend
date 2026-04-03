# Copilot Instructions

## Commands

```bash
pnpm dev              # Start dev server
pnpm build            # Generate Sanity types + Next.js build
pnpm lint             # ESLint
pnpm test             # Run all Jest tests
pnpm test -- --testPathPattern="Header"  # Run a single test file
pnpm test:coverage    # Run tests with coverage report
pnpm typegen          # Extract Sanity schema and regenerate TypeScript types
```

> Husky runs `pnpm test` as a pre-push hook.

## Architecture

Next.js 16 portfolio site backed by Sanity CMS. Data flows strictly top-down:

```
Sanity CMS (GROQ queries)
  → src/lib/Sanity/Model/   (Portfolio.ts, Page.ts — query functions)
  → src/app/[route]/        (async Server Components — fetch & render)
  → src/components/         (Client Components — "use client" only when interactive)
```

All pages are async Server Components using ISR (30s revalidation via `src/lib/Configuration.ts`). `"use client"` is only added for components requiring interactivity (e.g., `ImageCarousel`, `PaginationControls`).

## Sanity Integration

- **Client**: `src/sanity/client.ts` — `useCdn: false` for real-time data
- **Types**: `src/sanity/types.ts` — auto-generated; **never edit manually**. Regenerate with `pnpm typegen`
- **Schema source**: external Sanity Studio project at `../app-sanity-studio/`
- **Image URLs**: always built via `src/lib/Sanity/ImageUrl.ts` (wraps `@sanity/image-url`)
- **Rich text**: rendered with `@portabletext/react`

GROQ query constants use `SCREAMING_SNAKE_CASE` with a `_QUERY` suffix and live in the model files (`src/lib/Sanity/Model/`).

## Key Conventions

- **Path alias**: `@/*` maps to `src/*` — use it everywhere
- **Tests**: place in `src/__tests__/`, name as `ComponentName.test.tsx`
- **Components**: PascalCase filenames; pure server components unless interactivity requires `"use client"`
- **Styling**: Tailwind CSS v4 utility classes; CSS custom properties defined in `globals.css` for theme colors (`foreground`, `background`, `muted`, etc.)
- **SEO**: each page exports a `generateMetadata()` async function using data from `src/lib/Sanity/Model/Page.ts`
- **Pagination**: portfolio listing reads `?page=` query param as a Server Component prop; page logic lives in `src/app/portfolio/page.tsx`

## Environment Variables

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
SANITY_REVALIDATE_SECRET=   # Used for on-demand ISR webhook
```

## Testing

- Framework: Jest 30 + ts-jest + React Testing Library
- Environment: `jsdom`
- Coverage thresholds: 15% branches, 35% functions, 25% lines/statements
- The `@/*` path alias is mapped in `jest.config.js` — imports work identically in tests
