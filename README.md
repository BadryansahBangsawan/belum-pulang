# Bakehouse Café

Modern café experience built with Next.js. Includes a story-driven home page, interactive menu with cart and WhatsApp ordering, and dedicated flows for reservations and contact.

## Features
- Hero carousel with GSAP micro-animations and bold café branding.
- Menu browsing with category pills, search, and WhatsApp-ready cart (Zustand store).
- One-click table reservations via WhatsApp and quick contact form.
- Cozy informational pages (About, Visit details, social links).
- Tailwind CSS v4 styling with custom palette, soft shadows, and rounded UI kit components.

## Tech Stack
- Next.js 16 (App Router) + React 19
- Tailwind CSS v4 + tw-animate-css utilities
- GSAP for hero animations
- Zustand for cart state
- Radix UI primitives and lucide-react icons

## Project Structure
- `app/` — App Router pages (`/`, `/menu`, `/reserve`, `/about`, `/contact`), global layout and styles.
- `components/` — Hero, menu and cart UI, navigation, footer, shared UI primitives.
- `lib/` — Menu data, cart store (Zustand), GSAP helper, utility helpers.
- `public/` — SVG assets.

## Getting Started
```bash
npm install
npm run dev
# http://localhost:3000
```

Other scripts:
- `npm run build` — production build
- `npm start` — serve the production build
- `npm run lint` — lint with ESLint

## Configuration
- Update WhatsApp receiver numbers in:
  - `components/cart-summary.tsx` (`OWNER_NUMBER`)
  - `app/reserve/page.tsx` (`OWNER_NUMBER`)
- Menu items and categories live in `lib/menu-data.ts`.

Use a Node.js LTS release (20+) for local `npm install` / `npm run build`. Cart and reservation flows open WhatsApp via `wa.me/<OWNER_NUMBER>` deep links — keep the number in international format without `+` or spaces so mobile clients open the chat reliably.

## Notes
- Fonts: Baloo 2 (display) and Inter (body) are loaded via `next/font`.
- Images use Unsplash placeholders; swap with branded assets as needed.
- Tailwind theme tokens live in `app/globals.css` for quick palette tweaks.

## Deployment

Deploy to [Vercel](https://vercel.com) in one click — import the repo, set the root directory to `.`, and Vercel detects Next.js automatically.

For self-hosted deployments:
```bash
npm run build   # builds .next/
npm start       # serves on port 3000 (set PORT env var to override)
```
