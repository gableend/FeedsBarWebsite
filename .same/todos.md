# FeedBar Website - Development Todos

## Completed
- [x] Set up React + Vite + Tailwind project
- [x] Configure Tailwind with calm, restrained color palette
- [x] Create config.ts with IS_LIVE flag and constants
- [x] Create Header component with logo and minimal nav
- [x] Create Hero component with headline, bullets, and product visual
- [x] Create HowItWorks section with 3 steps
- [x] Create Orbs section with rotating keywords demo
- [x] Create Pricing section with single card
- [x] Create Trust & Privacy section
- [x] Create NotifyForm component for email capture
- [x] Create Footer component
- [x] Set up App.tsx with all sections
- [x] Add proper meta tags and Plausible placeholder
- [x] Create favicon
- [x] Enhanced hero product mockup with realistic app preview
- [x] Fixed linter errors
- [x] Made Trust section mobile responsive
- [x] Changed all CTAs to "Join waitlist"
- [x] Updated logo to match brand (dark rounded square with 3 horizontal lines)
- [x] Updated favicon to match new logo style
- [x] Updated header logo
- [x] Updated footer logo

## Project Structure
```
feeds-bar/
├── src/
│   ├── assets/
│   │   └── logo.svg
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Orbs.tsx
│   │   ├── Pricing.tsx
│   │   ├── Trust.tsx
│   │   ├── NotifyForm.tsx
│   │   └── Footer.tsx
│   ├── config.ts (IS_LIVE flag, pricing, URLs)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   ├── favicon.svg
│   └── _redirects
├── index.html
└── netlify.toml
```

## Configuration Notes
- Set `IS_LIVE = true` in config.ts when ready to launch
- Update `PADDLE_CHECKOUT_URL` with actual Paddle link
- Uncomment Plausible script in index.html when ready
