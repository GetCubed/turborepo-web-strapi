# Web App (Next.js)

This is the `web` app in the monorepo, built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com/).

## Features

- Next.js 15 (App Router)
- Tailwind CSS (with custom global styles)
- TypeScript
- PostCSS (with Tailwind and Autoprefixer)
- Monorepo setup (see root README)

## Getting Started

Install dependencies from the monorepo root:

```bash
pnpm install
```

Run the development server (on port 3001):

```bash
pnpm dev
```

Open [http://localhost:3001](http://localhost:3001) to view the app.

Edit `app/page.tsx` to update the homepage. Global styles are in `app/globals.css`.

## Scripts

- `pnpm dev` — Start dev server (port 3001)
- `pnpm build` — Build for production
- `pnpm start` — Start production server
- `pnpm lint` — Lint code
- `pnpm check-types` — Type-check project

## Configuration

- Tailwind config: `tailwind.config.ts`
- PostCSS config: `postcss.config.mjs`
- TypeScript config: `tsconfig.json`

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

For monorepo and shared config details, see the root README.
