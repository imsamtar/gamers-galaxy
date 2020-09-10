# Gamer's Galaxy

A responsive eSports and gaming website UI built with **Svelte** and **Sapper**, featuring live match presentation, gaming news, upcoming events, and player profiles.

## Pages

| Route | Description |
| --- | --- |
| `/` | Landing page with a hero section, latest match slider, live/recent news, and upcoming events |
| `/match` | Match centre with team line-ups, map results, round-by-round points, video replays, and team statistics |
| `/user-profile` | Player profile with stats, recent results, and incoming events |

## Features

- Component-driven Svelte codebase (60+ components) with a clear folder structure
- Server-rendered pages with client-side hydration via Sapper
- Carousels and sliders (Swiper) for matches, news, and media
- Custom navigation with off-canvas mobile menu and back-to-top control
- Page preloader and smooth-scroll UX
- Fully responsive layout built on Bootstrap 4

## Tech stack

- [Svelte 3](https://svelte.dev) with [Sapper](https://sapper.svelte.dev) (SSR + routing)
- [Rollup](https://rollupjs.org) for bundling
- [Bootstrap 4](https://getbootstrap.com) and custom CSS (split into per-section partials)
- [Swiper](https://swiperjs.com) and Owl Carousel for sliders
- [Cypress](https://cypress.io) for end-to-end tests

Content is served from local mock data (`matches.js`, `points.js`, etc.), so the app runs entirely offline with no backend.

## Getting started

Requires Node.js 12+.

```bash
git clone https://github.com/imsamtar/gamers-galaxy.git
cd gamers-galaxy
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server with live reload |
| `npm run build` | Build for production |
| `npm start` | Run the production build |
| `npm run export` | Export a static site |
| `npm test` | Run the dev server and Cypress tests |

## Project structure

```
src/
├── components/        # UI components grouped by page/section
│   ├── Header/        # Navigation, logo, off-canvas menu
│   ├── Home/          # Hero, news, upcoming events
│   ├── Match/         # Maps, points, stats, sliders
│   └── UserProfile/   # Player info, matches, events
├── routes/            # Sapper pages (index, match, user-profile)
├── client.js          # Client entry point
├── server.js          # Server entry point
└── template.html      # HTML template
static/
└── assets/            # Fonts, images, and CSS partials
```
