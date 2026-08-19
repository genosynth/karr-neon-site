# K.A.R.R. — Runaway Heart Website

A real Next.js/React website built around the supplied K.A.R.R. artwork, logo and band photo.

## Run it

You already upgraded Node, so from this folder run:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Main files to edit

- `app/page.tsx` — wording, links and page sections.
- `app/globals.css` — the entire look, animations, spacing and responsive layout.
- `components/Countdown.tsx` — release countdown. It is currently set to `2026-08-28`.
- `public/` — your four supplied images.

## Replace the placeholder links

Search `app/page.tsx` for `href="#"` and replace those with Spotify, Instagram, YouTube, etc.

Also replace:

```txt
hello@example.com
```

with your real band email.

## Adding older releases later

Put the artwork in `public/` and add a new section in `app/page.tsx`. The existing `release-section` is a useful template to duplicate.

## Build check

Before deploying, run:

```bash
npm run build
```

## Deploy

Recommended: push the folder to GitHub, import it into Vercel, then connect your domain.
