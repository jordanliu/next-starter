# Radix to Base UI project migration

2026-07-03, whole-project transformation-engine migration for the legacy `new-york` shadcn style; complete with zero Radix wrappers remaining.

## Dependency swap

- Added `@base-ui/react@1.6.0` for the shared Button primitive.
- Removed `@radix-ui/react-slot` and `@radix-ui/react-label` after their wrappers were migrated.
- Regenerated `pnpm-lock.yaml` with pnpm 11.9.0.

## Component and consumer sweep

- Migrated the customized Button wrapper to Base UI's real Button primitive without changing its classes or variants.
- Migrated the customized Label wrapper to a native `<label>` without changing its classes.
- Searched all application and package source for Radix imports, `IconPlaceholder`, `asChild`, and affected consumer props; no leftovers or call-site migrations remain.
- Left Sonner untouched because it is not a Radix library.

## Verification

- `pnpm --filter @repo/ui check-types`: passed.
- `pnpm check-types`: passed.
- `pnpm lint`: passed.
- `pnpm exec turbo run build --force`: passed with Next.js 16.2.10 and no cached tasks.
- Production-browser smoke test: passed; native Email label focused `#email`, Base UI buttons rendered as `<button>`, and the Apple button click produced the expected local toast.

## Known caveat

- Both shadcn configs remain on legacy style `new-york`. Per the migration rules, they were not changed to a nonexistent `base-new-york` style; future `shadcn add` commands may therefore generate Radix variants and should be reviewed or added manually.
