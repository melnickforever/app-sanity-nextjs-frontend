# Sanity + Next.js Portfolio

A modern portfolio site built with **Next.js 16** and **Sanity CMS**, featuring real-time content updates, top-down data flow, and optimized performance. Fully automated CI/CD pipeline with pre-built deployments.

## Features

### Content Management
- ✅ **Sanity CMS Integration** — Headless CMS for portfolio content with real-time previews
- ✅ **Auto-Generated Types** — TypeScript types automatically generated from Sanity schema
- ✅ **GROQ Queries** — Structured queries for efficient content fetching from Sanity Content Lake
- ✅ **Rich Text Support** — Portable text blocks for flexible content formatting

### Performance & Rendering
- ✅ **ISR** — Incremental Static Regeneration with 30-second revalidation for always-fresh content
- ✅ **Server Components** — Next.js 16 async server components for optimal performance
- ✅ **Image Optimization** — Automatic image optimization via Sanity Image URL API
- ✅ **Top-Down Data Flow** — Strict separation: CMS → Query Functions → Server Components → Client Components

### Developer Experience
- ✅ **Type Safety** — Full TypeScript with zero-config automatic type generation
- ✅ **Path Aliases** — `@/*` shorthand for cleaner imports
- ✅ **Structured Code** — Organized architecture with Model, Component, and Lib layers
- ✅ **Hot Reload** — Fast refresh during development with Next.js Turbopack

### Testing & Quality
- ✅ **Unit Tests** — Jest 30 + React Testing Library with jsdom environment
- ✅ **Coverage Enforcement** — Pre-push Husky hooks enforce minimum coverage (25% lines, 35% functions, 15% branches)
- ✅ **ESLint** — Code quality checks across the entire codebase
- ✅ **Pre-commit Hooks** — Automated validation before every commit

### Styling & Theming
- ✅ **Tailwind CSS v4** — Modern utility-first CSS framework
- ✅ **CSS Custom Properties** — Theme colors (`foreground`, `background`, `muted`) for easy customization
- ✅ **Responsive Design** — Mobile-first design approach
- ✅ **Dark Mode Ready** — CSS variables support for theme switching

### Deployment & Infrastructure
- ✅ **Automatic CI/CD** — GitHub Actions triggered on every `main` push
- ✅ **Pre-built Deployments** — Local build verification before Vercel deployment
- ✅ **Fast Deployments** — `--prebuilt` flag skips Vercel rebuild step
- ✅ **Environment Management** — Secure secrets handling via GitHub & Vercel

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Run tests
pnpm test

# Regenerate types from Sanity schema
pnpm typegen
```

## Setup & Configuration

### Environment Variables

Create `.env.local` with Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=<your-project-id>
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_REVALIDATE_SECRET=<webhook-secret-for-on-demand-isr>
```

### Sanity Configuration (`sanity.cli.ts`)

The project includes a `sanity.cli.ts` configuration that:
- Defines the Sanity project and dataset
- Specifies paths for schema extraction and type generation
- Enables automatic type generation when the schema changes

This file is **required** for the `pnpm build` command to work, as it tells the Sanity CLI where to find the schema and where to output types.

### Type Generation Workflow

**Automatic (during `pnpm build`):**
```bash
pnpm build  # Runs: sanity typegen generate && next build
```

**Manual (when schema changes in Sanity Studio):**
```bash
pnpm typegen  # Extracts schema from studio + regenerates types
```

The `typegen` script:
1. Runs `sanity schema extract` from the **studio project** (uses studio's `sanity@5.19.0` CLI)
2. Updates `sanity-schema.json` in the frontend
3. Runs `sanity typegen generate` from the **frontend** (uses frontend's CLI config)
4. Regenerates `src/sanity/types.ts` based on schema changes

This approach avoids version conflicts between the two projects' Sanity CLI installations.

## Deployment

### Automatic Deployment to Vercel

Every push to `main` triggers the CI/CD pipeline:

```
Code Push to main
    ↓
GitHub Actions Workflow (.github/workflows/deploy.yml)
    ├─ Checkout code
    ├─ Install dependencies (pnpm)
    ├─ Pull Vercel environment variables
    ├─ Build locally (pnpm build)
    │   └─ Catches build errors before deploying
    └─ Deploy pre-built output to Vercel (--prebuilt)
        └─ Vercel skips rebuilding; deploys immediately
```

**Benefits of this setup:**
- ✅ **Fast Deployments** — Pre-built output skips Vercel's build step
- ✅ **Fail Early** — Build errors caught in CI, not after deployment
- ✅ **Consistent Builds** — Same environment (Node.js version) as Vercel

### Manual Deployment

If needed, manually trigger a deployment:
```bash
vercel --prod --token <your-token>
```

### Required Secrets in GitHub & Vercel

**GitHub Secrets** (`.github/workflows/deploy.yml`):
- `VERCEL_ORG_ID` — Your Vercel org ID
- `VERCEL_PROJECT_ID` — Your Vercel project ID
- `VERCEL_TOKEN` — Personal access token (generate at [vercel.com/account/tokens](https://vercel.com/account/tokens))

**Vercel Environment Variables**:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` — Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` — Sanity dataset name
- `SANITY_REVALIDATE_SECRET` — Webhook secret for ISR

### Git Hooks

**Pre-push** (via Husky):
- Runs `pnpm test` to verify all tests pass before pushing
- Enforces coverage thresholds (15% branches, 35% functions, 25% lines)
