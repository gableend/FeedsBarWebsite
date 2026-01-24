# FeedsBar Website - AI Agent Instructions

## Project Overview
A single-page marketing website for FeedsBar (a Mac desktop news reader). Built with React 18, TypeScript, Vite, and Tailwind CSS. Deployed to Netlify with SPA routing. Uses `same-runtime` for JSX instead of React's default.

## Architecture & Structure
- **Component hierarchy**: [App.tsx](src/App.tsx) renders sections sequentially: Header → Hero → HowItWorks → Orbs → Control → Pricing → Trust → NotifyForm → Footer
- **State**: Uses [config.ts](src/config.ts) for feature flags (`IS_LIVE`) and constants. When `IS_LIVE = true`, CTAs switch from "Notify me" to "Buy"
- **No routing**: Single-page app with anchor links (e.g., `#how-it-works`). Netlify redirects all paths to index.html
- **Entry point**: [main.tsx](src/main.tsx) uses `same-runtime` JSX import source (see tsconfig.json `jsxImportSource`)

## Development Commands
- `bun run dev` - Start dev server on `0.0.0.0` (accessible on network)
- `bun run build` - TypeScript check + Vite build to `dist/`
- `bun run lint` - Run TypeScript check + Biome linter with auto-fix
- `bun run format` - Format code with Biome

## Code Style & Linting
- **Formatter**: Biome (not Prettier). Double quotes, 2-space indent
- **Linting**: Biome with accessibility rules disabled (see [biome.json](biome.json) - all a11y rules off)
- **TypeScript**: Strict mode enabled
- **Unused variables**: Allowed (correctness.noUnusedVariables: off)

## Styling Patterns
- **Utility classes**: Use Tailwind utilities defined in [index.css](src/index.css): `.container-narrow`, `.container-wide`, `.btn-primary`, `.btn-secondary`
- **Color tokens**: Brand colors from [tailwind.config.js](tailwind.config.js):
  - `brand-950` (#0EEF11) - Green headings/emphasis
  - `brand-900` (#1A1C1F) - Dark text/CTA backgrounds
  - `brand-400` (#8AFF98) - Light green accents
  - `accent` (#4C7DFF) - Blue for links/focus rings only
  - `category.*` - Used exclusively for Orb chips in [Orbs.tsx](src/components/Orbs.tsx)
  - `neutral.*` - Text and borders
- **Animations**: Use predefined utilities (`fade-in`, `fade-in-up`, `slide-in-left`) and the [useScrollAnimation](src/hooks/useScrollAnimation.ts) hook for scroll-triggered reveals
- **Responsive**: Mobile-first with `lg:` breakpoint for desktop layouts

## Component Conventions
- **File naming**: PascalCase components (e.g., `Hero.tsx`, `NotifyForm.tsx`)
- **Exports**: Default export for components, named exports for hooks/utils
- **Scroll animations**: Use `useScrollAnimation()` hook for intersection observer-based reveals (see [Hero.tsx](src/components/Hero.tsx) and [Orbs.tsx](src/components/Orbs.tsx))
- **SVG components**: Inline SVG with viewBox for scalability (see [Orbs.tsx](src/components/Orbs.tsx) - 227 lines of hand-crafted SVG cards)

## Key Implementation Details
- **JSX runtime**: Uses `same-runtime` (imported in [main.tsx](src/main.tsx)). Vite config excludes it from optimization
- **Video**: Hero video uses `autoPlay muted loop playsInline` with poster fallback (see [Hero.tsx](src/components/Hero.tsx))
- **Email collection**: NotifyForm integrates with Buttondown API. Requires `VITE_BUTTONDOWN_API_KEY` in `.env.local` (see [.env.example](.env.example))
- **Launch ready**: Set `IS_LIVE = true` in [config.ts](src/config.ts) to activate purchase CTAs and Paddle checkout

## Environment Variables
- `VITE_BUTTONDOWN_API_KEY` - Buttondown API key for email subscriptions (get from https://buttondown.email/settings)
- Store in `.env.local` (gitignored). See [.env.example](.env.example) for template

## Deployment
- **Platform**: Netlify
- **Build**: `bun run build` → `dist/` directory
- **SPA fallback**: All routes redirect to `/index.html` (see [netlify.toml](netlify.toml))
- **Remote images**: Unsplash and Same assets allowed via Netlify config
