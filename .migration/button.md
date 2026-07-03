# button

2026-07-03, golden pair via the shadcn CLI; refreshed successfully to the official `base-nova` Button implementation and styling.

## Changed

- `apps/web/components.json:3` and `packages/ui/components.json:3` now declare `base-nova`, so future CLI additions resolve Base UI components in the current default Nova style.
- `packages/ui/src/components/button.tsx:1` was overwritten component-by-component from the official `base-nova/button` registry entry.
- The refreshed wrapper keeps `@base-ui/react/button` and adds Nova's compact sizing, expanded icon sizes, active-state motion, and current focus/invalid styles.
- Leftover scan is clean for this component: `grep -n "radix-ui\|@radix-ui" packages/ui/src/components/button.tsx` returns no matches.

## Left alone

- Card, Input, and Label are refreshed separately so each style change remains independently reviewable.
- `packages/ui/src/components/sonner.tsx` is intentionally untouched because Sonner is not Radix.

## Behavior changes

- Default Button height changes from 36px to Nova's compact 32px, with updated hover, destructive, active-press, and focus treatments.
- Nova adds `xs`, `icon-xs`, `icon-sm`, and `icon-lg` sizes. Existing variants and current consumers remain supported.

## Verify by hand

- Open the login and registration pages and confirm default, outline, and submit buttons use the compact Nova geometry.
- Tab through the buttons and confirm focus rings, disabled behavior, active press motion, and click handling remain intact.
