# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Build static export
npm run lint      # Run ESLint via Next.js
```

This is a **Next.js 15 App Router** project with **static export** (`output: "export"` in `next.config.ts`). No SSR/ISR — all pages are statically generated HTML.

## Environment Setup

Copy `.env.example` to `.env.local` and fill in Azure Entra ID values:
- `NEXT_PUBLIC_ENTRA_CLIENT_ID` — App registration client ID
- `NEXT_PUBLIC_ENTRA_AUTHORITY` — CIAM tenant authority URL
- `NEXT_PUBLIC_ENTRA_REDIRECT_URI` — Redirect URI (localhost:3000 for dev)

## Architecture

### Authentication (Azure Entra ID / MSAL)
- `src/config/auth-config.ts` — MSAL `PublicClientApplication` config, reads env vars
- `src/components/auth-provider.tsx` — Initializes MSAL and wraps app in `MsalProvider`
- `src/components/protected-route.tsx` — Uses `MsalAuthenticationTemplate` with redirect interaction
- `src/components/auth-button.tsx` — Sign in/out button using `AuthenticatedTemplate`/`UnauthenticatedTemplate`

Auth flow uses **redirect** (not popup). The root layout (`src/app/layout.tsx`) wraps everything in `AuthProvider`.

### Pages
- `/` — Public landing page (hero, mission, values, platforms, team, footer)
- `/dashboard` — Protected admin dashboard (wrapped in `ProtectedRoute`)
- `/privacy`, `/terms`, `/contact` — Public legal/info pages

### Styling
- **CSS Modules** (`.module.css`) for component/page scoping
- **CSS custom properties** defined in `src/app/globals.css` (colors, spacing, typography tokens)
- No Tailwind, no CSS-in-JS
- Design system documentation lives in `designSystem/` directory

### Design System
- **Colors**: Deep forest green (`#0F3D2E`) + muted gold accent (`#C9A24A`) on warm neutral surfaces (`#F7F5F1`)
- **Typography**: EB Garamond (serif, landing display only) + Source Sans 3 (sans-serif, everywhere). Dashboard uses sans-serif exclusively.
- **Layout tokens**: `--content-max: 1100px`, `--sidebar-w: 240px`, `--topbar-h: 64px`, `--r: 10px`

### Path Alias
`@/*` maps to `./src/*` (configured in `tsconfig.json`).

### Key Constraints
- Static export: no `getServerSideProps`, no API routes, no middleware, no dynamic routes with `getStaticPaths` unless all paths are known at build time
- `trailingSlash: true` is enabled in `next.config.ts`
- No backend API integration yet — dashboard data is currently hardcoded
