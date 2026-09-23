# `@repo/database`

PostgreSQL schema and Drizzle ORM utilities for the starter.

## Workflow

After changing `schema.ts`, generate and review a migration:

```bash
pnpm --filter @repo/database generate
```

Apply committed migrations locally or during a single-run production release
step:

```bash
pnpm --filter @repo/database migrate
```

For disposable local databases only, `push` can synchronize the schema without
creating a migration:

```bash
pnpm --filter @repo/database push
```

Migration SQL and metadata live in `packages/database/drizzle` and should be
committed with the schema change that generated them.
