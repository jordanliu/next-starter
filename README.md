# next-starter

A highly opinionated NextJS starter with authentication, database, UI components, and monorepo support. All preconfigured for rapid development.

## Features

- Authentication with Better Auth
- Database with Drizzle ORM and PostgreSQL
- UI components built with shadcn/ui and Tailwind CSS

## Getting Started

### 1. Create the Project

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

## Build

To build all apps and packages:

```sh
# From the project root

# With global turbo (recommended)
turbo build

# Or with your package manager
pnpm exec turbo build
```

## Develop

To run development mode for all apps and packages:

```sh
# With global turbo
turbo dev

# Or with your package manager
pnpm exec turbo dev
```

To develop a specific package:

```sh
# With global turbo
turbo dev --filter=web

# Or with your package manager
pnpm exec turbo dev --filter=web
```

Add a new package

```sh
turbo gen
```

Add a new shadcn component to UI

```sh
(cd apps/web && pnpm dlx shadcn@canary add [COMPONENT])
```

More on filters: [Turborepo docs](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
