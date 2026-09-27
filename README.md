# 💪 FitLog

A dark, no-nonsense gym companion built with Next.js. Browse a library of workouts, dig into the details of each lift, and build out today's training plan — with everything you save persisted right in the browser.


## Overview

FitLog lets you pick a lift from a library of twelve exercises, lock it into today's plan (or save it for later), and track your progress as the week's work adds up. Every workout has a dedicated detail page with equipment, difficulty, sets/reps, and step-by-step instructions, and the My Plan page keeps a running log of what you've queued up, complete with live stats.

## Technologies Used

- **Next.js** (App Router) — routing, pages, and rendering
- **React** — UI components and state management
- **TypeScript** — type safety across components and data
- **Tailwind CSS** — styling and responsive layout
- **react-toastify** — toast notifications for user actions
- **Vercel** — deployment

## Features

1. **Workout Library** — a responsive 3-column grid (on desktop) of all twelve workouts, each showing an image, category tags, equipment, and stats (duration, calories, rating). Clicking a card opens its detail page.
2. **Workout Detail Pages** — a two-column layout with a large illustration, description, category tags, a key-specs panel (equipment, difficulty, sets, reps, duration, calories, rating), and numbered step-by-step instructions.
3. **Plan & Save Actions** — "Add to today's plan" and "Save for later" buttons on each detail page update the My Plan page, bump the navbar's live badge counters, and trigger toast confirmations.
4. **My Plan Page** — tabbed view (Today's Plan / Saved) with a live metrics summary (exercises, minutes, calories), a five-lift daily cap, Mark as Done / Remove actions per card, and an empty state pointing back to the library.
5. **Sort & Filter** — a "Sort By" dropdown (Duration, Calories, Rating) re-orders the library list on the fly.
6. **Persistent State** — plan and saved lists are stored in `localStorage`, so your progress survives a page reload.
7. **Polished UX Details** — loading states while fetching workout data, a custom 404 page for unknown routes, and full responsiveness across mobile, tablet, and desktop.

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero banner and the full workout library grid |
| `/workout/[id]` | Workout detail page with specs and instructions |
| `/my-plan` | Today's Plan / Saved tabs with live stats |
| `*` | Custom 404 page for invalid routes |


## Data Source

Workout data is fetched from a public API:

- All workouts: `https://api.abcz.workers.dev/api/fitlog`
- Single workout: `https://api.abcz.workers.dev/api/fitlog/:id`