# Sanity + Next.js Portfolio

A modern portfolio site built with Next.js 16 and Sanity CMS. Features real-time content updates, top-down data flow, and optimized for both developer experience and performance.

## Features

- **Automatic deployment to Vercel** via GitHub Actions (`.github/workflows/deploy.yml`)
- **Unit tests** with Jest and React Testing Library
- **Husky** pre-commit and pre-push hooks to enforce test coverage
- **Sanity CMS** integration for content management
- **ISR** (Incremental Static Regeneration) for fast, up-to-date pages
- **TypeScript** and **Tailwind CSS** for modern development

## Deployment

### Automatic (Vercel)

Deployments are automatic via GitHub Actions on every push to `main` using `.github/workflows/deploy.yml`. 
No manual steps are needed for production deployment. Ensure all required environment variables are set in Vercel project settings.

### Husky Git Hooks

- **pre-commit**: Runs `pnpm test:coverage` before every commit. Commits are blocked if tests or coverage thresholds fail.
