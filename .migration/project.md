# Radix to Base UI project migration

2026-07-03, whole-project migration completed on the official `base-nova` shadcn style with zero Radix wrappers remaining.

## Dependency swap

- Added `@base-ui/react@1.6.0` for the shared Button primitive.
- Removed `@radix-ui/react-slot` and `@radix-ui/react-label` after their wrappers were migrated.
- Regenerated `pnpm-lock.yaml` with pnpm 11.9.0.

## Component and consumer sweep

- Both shadcn configs now resolve as `style: base-nova`, `base: base`, using the current Nova preset and official Base UI registry.
- Refreshed Button, Label, Card, and Input component-by-component from their official `base-nova` registry entries.
- Button and Input use Base UI primitives; Label remains the registry's native `<label>` implementation; Card uses Nova's density and spacing tokens.
- Searched all application and package source for Radix imports, `IconPlaceholder`, `asChild`, and affected consumer props; no leftovers or call-site migrations remain.
- Left Sonner untouched because it is not a Radix library.

## Verification

- `pnpm --filter @repo/ui check-types`: passed.
- `pnpm check-types`: passed.
- `pnpm lint`: passed.
- `pnpm exec turbo run build --force`: passed with Next.js 16.2.10 and no cached tasks.
- Production-browser smoke test: passed; Nova Button and Input render at 32px with 10px radii, Card uses its ring and 16px spacing, Email label focuses `#email`, Button clicks work, registration renders all compact controls, and the browser console is clean.

## Configuration

- Future `shadcn add` commands now resolve Base UI components with Nova styling automatically; no legacy-style caveat remains.
