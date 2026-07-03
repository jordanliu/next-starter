# button

2026-07-03, transformation engine for a customized legacy `new-york` wrapper; migrated successfully to the Base UI Button primitive.

## Changed

- `packages/ui/src/components/button.tsx:1` replaces Radix Slot with `@base-ui/react/button` while preserving every existing variant and class.
- `packages/ui/src/components/button.tsx:38` replaces the `asChild` contract with Base UI's `render` contract through `ButtonPrimitive.Props`.
- `packages/ui/package.json` adds `@base-ui/react` alongside Radix for the progressive migration step; `pnpm-lock.yaml` records the install.
- Leftover scan is clean for this component: `grep -n "radix-ui\|@radix-ui" packages/ui/src/components/button.tsx` returns no matches.

## Left alone

- `packages/ui/src/components/label.tsx` remains on Radix until its separate component migration.
- `packages/ui/src/components/sonner.tsx` is intentionally untouched because Sonner is not Radix.

## Behavior changes

- Polymorphic composition now uses Base UI's `render` prop instead of Radix Slot's `asChild`. No current consumer used `asChild`, so existing call sites are unchanged.

## Verify by hand

- Open the login and registration pages and confirm default, outline, and submit buttons retain their styling.
- Tab through the buttons and confirm focus rings, disabled behavior, and click handling remain intact.
