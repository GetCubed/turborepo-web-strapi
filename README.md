<p align="center">
  <img src="./opengraph.png" alt="Turborepo Web Strapi Template Open Graph" width="600" />
</p>

# Turborepo Web Strapi Template

> This repository is a ready-to-use template for building modern web applications with [Turborepo](https://turbo.build/), [Strapi](https://strapi.io/), and a basic [Next.js](https://nextjs.org/) frontend. It provides a scalable monorepo structure, shared configurations, and a seamless developer experience out of the box.

---

## Features

- **Monorepo setup** powered by Turborepo for fast builds and efficient development
- **Strapi backend** for flexible headless CMS and API
- **Next.js web frontend** for building performant user interfaces
- **Shared UI library** for reusable React components
- **DaisyUI integration** for rapid Tailwind CSS component styling
- **Centralized TypeScript and ESLint configs** for consistency
- **Open Graph image** for improved social sharing

---

## Project Structure

```
├── apps/
│   ├── next/      # Next.js frontend app
│   └── strapi/    # Strapi backend app
├── packages/
│   ├── ui/        # Shared React UI components
│   ├── eslint-config/      # Shared ESLint config
│   └── typescript-config/  # Shared TypeScript config
├── opengraph.png  # Open Graph image
├── turbo.json     # Turborepo config
└── ...            # Other configs and assets
```

---

## Getting Started

1. **Install dependencies** (using [pnpm](https://pnpm.io/) recommended):

   ```sh
   pnpm install
   ```

2. **Develop locally**:

   ```sh
   pnpm turbo dev
   ```

   Or run a specific app:

   ```sh
   pnpm turbo dev --filter=web
   pnpm turbo dev --filter=strapi
   ```

3. **Build for production**:
   ```sh
   pnpm turbo build
   ```

---

## Included Tools

- [Turborepo](https://turbo.build/) for monorepo management
- [Strapi](https://strapi.io/) for backend CMS/API
- [Next.js](https://nextjs.org/) for frontend
- [DaisyUI](https://daisyui.com/) for Tailwind CSS component library
- [TypeScript](https://www.typescriptlang.org/) for type safety
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for code quality

---

## Useful Links

- [Turborepo Documentation](https://turbo.build/docs)
- [Strapi Documentation](https://docs.strapi.io/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Remote Cache](https://vercel.com/docs/remote-cache)

---
