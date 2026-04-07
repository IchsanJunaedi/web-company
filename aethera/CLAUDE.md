# CLAUDE.md — Aethera Project

## Project Overview
**Aethera** is a web studio landing site that sells website creation services (company profiles, birthday greetings, landing pages, portfolios, wedding invitations).

Built with: **React + Vite + TypeScript + Tailwind CSS v4**

## Tech Stack
| Tool | Version / Notes |
|------|----------------|
| React | 19 |
| Vite | 6 + `@tailwindcss/vite` plugin |
| TypeScript | strict mode, no `any` |
| Tailwind CSS | v4 (`@import "tailwindcss"` in index.css) |
| React Router | v7 (`react-router-dom`) |
| Icons | `lucide-react` |
| Forms | Formspree (user must replace `YOUR_ID` in ReachUsPage.tsx) |

## Folder Structure
```
src/
  components/       ← reusable section components
    HeroSection.tsx
    ServicesSection.tsx
    HowItWorksSection.tsx
    PortfolioSection.tsx
    TestimonialsSection.tsx
    Footer.tsx
  pages/            ← route-level page components
    HomePage.tsx
    StudioPage.tsx
    AboutPage.tsx
    JournalPage.tsx
    ReachUsPage.tsx
  styles/
    fonts.css       ← Google Fonts imports (Instrument Serif + Inter)
    theme.css       ← custom animation keyframes + scroll-behavior
  App.tsx           ← BrowserRouter + Routes
  main.tsx          ← entry point, imports all CSS
  index.css         ← Tailwind v4 base (@import "tailwindcss")
```

## Design System
| Token | Value |
|-------|-------|
| Black | `#000000` |
| Muted gray | `#6F6F6F` |
| White | `#FFFFFF` |
| Subtle bg | `#F5F5F5` |
| Border | `#E5E5E5` |
| Display font | `"Instrument Serif"` (headings, logo, quotes) |
| Body font | `Inter` (nav, descriptions, body text) |

## Animations (defined in theme.css AND tailwind.config.ts)
- `animate-fade-rise` — opacity 0→1, translateY 20px→0, 0.8s, no delay
- `animate-fade-rise-delay` — same, 0.2s delay
- `animate-fade-rise-delay-2` — same, 0.4s delay

## Critical Rules
- **No UI component libraries** — Tailwind + custom CSS only
- **No lorem ipsum** — use the real copy from the spec
- **No `any` types** — TypeScript strict mode
- **Color palette only**: `#000000`, `#6F6F6F`, `#FFFFFF`, `#F5F5F5`, `#E5E5E5`
- **Mobile-first** — all sections fully responsive
- **Pure frontend** — no backend, no SSR

## HeroSection — DO NOT MODIFY visuals
The hero section has an exact spec. The video background, gradient overlay, font sizes, colors, and animations must not be changed.
- Video URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4`
- Video fade loop implemented via `useEffect` + `requestAnimationFrame` in `HeroSection.tsx`

## Formspree Integration
In `ReachUsPage.tsx`, replace `YOUR_ID` with your actual Formspree form ID:
```tsx
const res = await fetch('https://formspree.io/f/YOUR_ID', { ... })
```

## Commands
```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```
