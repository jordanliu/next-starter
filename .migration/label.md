# label

2026-07-03, golden pair via the shadcn CLI; refreshed successfully to the official `base-nova` native Label implementation.

## Changed

- `packages/ui/src/components/label.tsx:1` was overwritten component-by-component from the official `base-nova/label` registry entry.
- The official wrapper remains a native `<label>`, retains `htmlFor` and ref support, and keeps Nova's current compact typography and disabled peer/group styling.
- Leftover scan is clean for this component: `grep -n "radix-ui\|@radix-ui" packages/ui/src/components/label.tsx` returns no matches.

## Left alone

- Button was refreshed separately from its own official Base Nova registry entry.
- Card and Input are refreshed separately so each style change remains independently reviewable.
- `packages/ui/src/components/sonner.tsx` is intentionally untouched because Sonner is not Radix.

## Behavior changes

- The official registry marks Label as a client component. Label focus association and visual styling are otherwise unchanged from the migrated native wrapper.

## Verify by hand

- Click the Email and Password labels on the login and registration pages and confirm focus moves to the matching input.
- Confirm labels retain Nova typography and disabled peer/group styling.
