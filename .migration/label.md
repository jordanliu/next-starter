# label

2026-07-03, transformation engine for a customized legacy `new-york` wrapper; migrated successfully from Radix Label to a native label.

## Changed

- `packages/ui/src/components/label.tsx:1` removes the client boundary and Radix import, then types and renders the existing wrapper as a native `<label>`.
- `packages/ui/src/components/label.tsx:11` preserves every existing class, including `select-none`, which retains Radix Label's double-click selection behavior.
- `packages/ui/package.json` removes `@radix-ui/react-label` and the now-unused `@radix-ui/react-slot`; `pnpm-lock.yaml` records the dependency removal.
- Leftover scan is clean for this component: `grep -n "radix-ui\|@radix-ui" packages/ui/src/components/label.tsx` returns no matches.

## Left alone

- `packages/ui/src/components/button.tsx` was migrated and verified in its own component run.
- `packages/ui/src/components/sonner.tsx` is intentionally untouched because Sonner is not Radix.

## Behavior changes

None. The native label keeps `htmlFor`, ref, event, and accessibility behavior through `React.ComponentProps<"label">`, while the existing `select-none` class preserves the only extra Radix behavior relevant here.

## Verify by hand

- Click the Email and Password labels on the login and registration pages and confirm focus moves to the matching input.
- Confirm labels retain their typography and disabled peer/group styling.
