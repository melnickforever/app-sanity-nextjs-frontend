This repository is a small Next.js frontend that demonstrates integration with the Sanity headless CMS. The app is written in TypeScript and React (Next.js App Router). 

Primary goals:

- Learn and demonstrate Sanity usage and content modeling
- Provide a simple, deployable Next.js frontend (Vercel-friendly)
- Keep the codebase readable and easy for newcomers to follow


How Copilot should help
- Offer concise, idiomatic TypeScript/React (TSX) suggestions for components and hooks
- Prefer Next.js App Router patterns (server components, client components) where appropriate
- Suggest small, focused edits and pull-request-style diffs rather than large sweeping changes
- When adding new APIs or utilities, include brief comments and usage examples
- Prefer solutions that are easy to understand and maintain over clever/obscure hacks

Primary languages and frameworks
- TypeScript (strict-ish; follow existing tsconfig)
- Next.js (App Router directory: `src/app`)
- React (functional components, hooks)
- Sanity client & image helpers (see `src/sanity` and `src/lib/Sanity`)

Coding style and conventions
- Use TypeScript for new files and prefer explicit types for exported functions and props
- Keep components small and single-responsibility
- Use React hooks (useState, useEffect, useMemo, useCallback) and prefer hooks over class components
- Server components for data fetching when possible (files under `src/app` may be server components by default)
- Mark components with "use client" at the top only when they need client-only APIs (state, effects, event handlers)
- Use existing utility functions in `src/lib/Sanity` for building image URLs and transforming Sanity data
- Keep imports grouped and ordered: external packages, absolute imports (if used), local imports

Styling
- The project currently uses a global CSS file (`src/app/globals.css`). Follow the existing approach when adding styles.
- Prefer simple class-based CSS and small component-scoped styles. Avoid introducing heavy CSS-in-JS libraries unless necessary.

Files/areas of interest
- Page routes: `src/app/*` (App Router pages and layout)
- Components: `src/components/*` (shared UI pieces)
- Sanity client and types: `src/sanity/*` and `src/lib/Sanity/*`
- Configuration: `src/lib/Configuration.ts` and `sanity-schema.json`

Dev commands
- Install dependencies (pnpm is used in this repo):
  ```bash
  pnpm install
  ```
- Run dev server:
  ```bash
  pnpm dev
  ```
- Build for production:
  ```bash
  pnpm build
  pnpm start
  ```

What to avoid
- Do not add or leak secrets or keys into the repo. If a suggestion would require secret keys, ask to use environment variables and the repo's configuration system.
- Don't modify `sanity-schema.json` or migrations without clear intent; schema changes affect the CMS and downstream content.
- Avoid broad, non-reversible refactors in a single suggestion. Prefer incremental changes and PRs with tests or manual verification steps.

Testing and verification
- This repo doesn't include a test suite yet. When adding logic-heavy code, suggest unit tests (Jest/Testing Library) and include minimal examples.
- For visual changes, suggest a short manual verification checklist (which pages to open and expected behavior).

Commit and PR guidance
- Suggest clear, small commits with imperative messages: "Add X", "Fix Y", "Refactor Z"
- For multi-step changes, propose a short PR description with the problem, solution, and verification steps

Accessibility and UX
- Favor accessible HTML (semantic tags, alt attributes for images, focus management)
- Provide sensible defaults for responsive layouts and images (use Next Image where helpful, or existing `PortfolioImage`/image helpers)

Security and privacy
- Never store API keys, tokens, or personal data in the repository. Use environment variables and platform secrets (Vercel/GitHub Actions) instead.

If you are unsure
- When a change could be breaking or requires decisions (schema changes, authentication, deployment changes), ask for clarification and propose a minimal, reversible alternative.

Thank you for helping make this project tidy, educational, and easy to maintain.

