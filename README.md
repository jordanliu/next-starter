# next-starter

A highly opinionated NextJS starter with authentication, database integration, reusable UI components, email support, and full monorepo tooling. Pre-configured for rapid, scalable development.

---

## Features

- Authentication with [Better Auth](https://github.com/jordanliu/better-auth)
- Database using [Drizzle ORM](https://orm.drizzle.team/) and PostgreSQL
- UI components built with [shadcn/ui](https://ui.shadcn.com) and Tailwind CSS
- Email support with [react-email](https://react.email)
- Form handling via [react-hook-form](https://react-hook-form.com)
- Monorepo setup using [Turborepo](https://turbo.build/repo)

---

## Getting Started

### 1. Create a New Project

```sh
npx create-next-app@latest [project-name] --use-pnpm --example https://github.com/jordanliu/next-starter.git
cd [project-name]
```

### 2. Install Dependencies

```sh
pnpm install
```

### 3. Set Up the Database

```sh
pnpm --filter @repo/database run generate
pnpm --filter @repo/database run migrate
```

### 4. Start the Development Server

```sh
pnpm dev
```

---

## Build

To build all apps and packages:

```sh
pnpm exec turbo build
```

---

## Develop

### Run Development Mode for All Apps and Packages

```sh
pnpm exec turbo dev
```

### Develop a Specific Package

```sh
pnpm exec turbo dev --filter=web
```

---

## Additions

### Add a New Package

```sh
turbo gen
```

### Add a New shadcn/ui Component to the Web App

```sh
(cd apps/web && pnpm dlx shadcn@canary add [COMPONENT])
```
