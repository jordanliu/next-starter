# input

2026-07-03, golden pair via the shadcn CLI; refreshed successfully from legacy `new-york` to the official `base-nova` Base UI Input implementation and styling.

## Changed

- `packages/ui/src/components/input.tsx:2` was overwritten component-by-component from the official `base-nova/input` registry entry.
- The wrapper now renders `@base-ui/react/input`, aligning form controls with the project's Base UI foundation.
- Input adopts Nova's compact height, rounded geometry, current focus/invalid rings, and explicit disabled surfaces while preserving native input props.
- Leftover scan is clean for this component: `grep -n "radix-ui\|@radix-ui" packages/ui/src/components/input.tsx` returns no matches.

## Left alone

- Button, Label, and Card were refreshed separately from their official Base Nova registry entries.
- `packages/ui/src/components/sonner.tsx` is intentionally untouched because Sonner is not Radix.

## Behavior changes

- Input height changes from 36px to Nova's compact 32px and horizontal padding tightens from 12px to 10px.
- Disabled inputs gain Nova's explicit muted background treatment. Focus and invalid rings use the current three-pixel Base Nova styles.

## Verify by hand

- Open login and registration and confirm text, email, and password inputs align with the compact Button geometry.
- Tab through each input and confirm focus rings, invalid borders, placeholder contrast, and disabled styling in light and dark themes.
