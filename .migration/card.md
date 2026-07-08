# card

2026-07-03, golden pair via the shadcn CLI; refreshed successfully from legacy `new-york` to the official `base-nova` Card implementation and styling.

## Changed

- `packages/ui/src/components/card.tsx:5` was overwritten component-by-component from the official `base-nova/card` registry entry.
- Card now supports Nova's `default` and `sm` density modes through a shared `--card-spacing` token.
- Header, title, content, image, and footer geometry now use Nova's compact grouping, ring, muted footer, and responsive spacing treatments.
- Leftover scan is clean for this component: `grep -n "radix-ui\|@radix-ui" packages/ui/src/components/card.tsx` returns no matches.

## Left alone

- Button and Label were refreshed separately from their official Base Nova registry entries.
- Input is refreshed separately so its style change remains independently reviewable.
- `packages/ui/src/components/sonner.tsx` is intentionally untouched because Sonner is not Radix.

## Behavior changes

- Card uses a subtle foreground ring instead of the legacy border/shadow combination and defaults to tighter spacing.
- CardFooter now always renders Nova's bordered muted surface. The new optional `size="sm"` enables a denser card without consumer-side class overrides.

## Verify by hand

- Open login and registration and confirm card edges, header spacing, content padding, and text hierarchy match Nova.
- Check both light and dark themes for the ring and muted footer treatment.
