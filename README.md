<div align="center">

# LunaCal – UI Widgets Assignment

Clean, responsive UI widgets built with Next.js (App Router) and Tailwind CSS, designed as a hiring assignment. The focus is on clear component structure, modern styling (glassmorphism + subtle motion), and readable, maintainable code.

</div>

## Overview

This project implements two interactive widgets commonly used in dashboards/profiles:

- About widget: Tabbed content (About Me, Experiences, Recommended) with a smooth fade-in transition, custom scrollbar styling, and a subtle shimmer hover effect on inactive tabs.
- Gallery widget: A 3×N image grid with animated hover states, keyboard-accessible controls, and the ability to add images from local files (client-side only).

Both components are client-side React components using the Next.js App Router and Tailwind CSS for layout/utility styling, with a pinch of component-scoped CSS for bespoke effects (scrollbar, shimmer, inner glow).

## Tech stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- Lucide Icons (`lucide-react`) for lightweight SVG icons

## Quick start

Prerequisites: Node.js 18.18+ (or 20+ recommended) and npm.

```powershell
# Install dependencies
npm install

# Start the dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Lint
npm run lint
```

## Project structure

```text
lunacal-assignment/
├─ README.md
├─ .gitignore
├─ package.json
├─ package-lock.json
├─ jsconfig.json
├─ next.config.mjs
├─ postcss.config.mjs
├─ eslint.config.mjs
├─ app/
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.js
│  ├─ page.js
│  └─ components/
│     ├─ AboutWidget.js
│     └─ GalleryWidget.js
└─ public/
	├─ file.svg
	├─ globe.svg
	├─ next.svg
	├─ vercel.svg
	└─ window.svg
```

## What’s implemented

### About widget (`app/components/AboutWidget.js`)

- Three tabs (About Me, Experiences, Recommended) managed with React state.
- Smooth content transition using a short fade-in animation.
- Custom, on-brand scrollbar track/thumb styling.
- Inactive tabs get a subtle shimmer sweep on hover; the active tab is highlighted with depth and contrast.
- Responsive container and typography using Tailwind utilities with small, focused inline styles for exact shadows.

### Gallery widget (`app/components/GalleryWidget.js`)

- Local image add: Uses a hidden file input and `FileReader` to append images to the grid (no backend required).
- Navigation controls: Previous/Next buttons disable at boundaries; Lucide icons provide visual clarity.
- Animated grid tiles: Hover lifts the card and removes grayscale with a smooth scale/brightness transition.
- Responsive by default (CSS grid) with max-dimensions to preserve layout rhythm.

### Layout & theming

- App Router layout (`app/layout.js`) with Vercel’s Geist font via `next/font` and a minimal theme surface.
- `app/page.js` renders the two widgets in a right-column panel on large screens.
- `app/globals.css` includes Tailwind v4 base and a small set of custom tokens/effects (gradients, glass, shadows).

## Design decisions & trade-offs

- Client Components: Both widgets are marked `"use client"` to enable local interactivity (state, file input). No server state needed for this assignment.
- Tailwind v4 + bespoke CSS: Rapid layout with Tailwind; special effects (scrollbar, shimmer, inner glow) live next to components for clarity and portability.
- Simplicity over infrastructure: Image uploads are session-only (in-memory) to keep the scope focused. Persisting to storage was intentionally out-of-scope.

## Accessibility considerations

- Interactive elements are buttons (not divs) and expose disabled states.
- Images contain `alt` text. For production, prefer descriptive captions.
- Motion is brief and subtle; no infinite animations.

Potential follow-ups:
- Add keyboard roving/tab focus between Gallery tiles and arrow-key navigation.
- Announce tab changes in the About widget to screen readers (e.g., `aria-live`).

## Scripts

Defined in `package.json`:

- `dev`: `next dev --webpack`
- `build`: `next build --webpack`
- `start`: `next start`
- `lint`: `eslint`

## Testing the solution (manual)

Use these quick checks to validate behavior:

1) About widget
- Switch between the three tabs and observe the fade-in content.
- Hover inactive tabs to see the shimmer fill.
- Scroll the content area to see the custom scrollbar styling.

2) Gallery widget
- Click “ADD IMAGE” and choose a local image; it should appear at the end of the grid.
- Use the left/right controls; buttons disable at the first/last item.
- Hover a tile to lift, un-grayscale, and gently scale the image.

## Future improvements

- Use Next.js `next/image` for automatic image optimization and lazy loading.
- Persist gallery images (e.g., localStorage for demo, or an API route/S3 for production).
- Add unit tests with React Testing Library and Vitest/Jest; add basic Playwright E2E.
- Extract a small design system (button, card, tab) to reduce duplication and ease theming.
- Improve a11y with ARIA roles and keyboard interactions for tabs and gallery navigation.

## Notes for reviewers

- Code is intentionally compact and approachable for a timed assignment.
- Styling mixes Tailwind utilities and tiny, component-scoped CSS blocks for precise effects.
- No private APIs or external services are required; the app runs fully locally.

## License

MIT
