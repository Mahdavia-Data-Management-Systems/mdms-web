# MDMS Design System Overview

## Design Philosophy

The MDMS design system is **understated and institutional**, drawing from Islamic-inspired geometric textures to create a visual language that feels reverent, trustworthy, and rooted in tradition while embracing modern digital standards.

The aesthetic avoids flashiness in favor of quiet authority — deep greens, muted gold accents, and warm neutral surfaces create a dignified environment appropriate for a community-serving platform.

## Color Strategy

**Deep forest green + muted antique gold on warm neutral surfaces.**

- **Green** (`#0F3D2E`) conveys trust, stability, and connection to Islamic visual tradition
- **Gold** (`#C9A24A`) provides restrained warmth and accent hierarchy without opulence
- **Warm neutrals** (`#F7F5F1` / `#F6F4F0`) replace cold whites with surfaces that feel handcrafted

## Typography Strategy

A two-tier typographic system splits across landing and dashboard contexts:

- **EB Garamond** (serif) — Display and heading typeface on the landing page. Conveys heritage and gravitas. Used for hero titles, section headings, value terms, platform names, and team member names.
- **Source Sans 3** (sans-serif) — Body and UI typeface everywhere. The sole typeface on the dashboard, used for all text from navigation to stat values to panel content.

**Key distinction:** The dashboard uses **exclusively sans-serif** typography (Source Sans 3 only). The landing page pairs serif (EB Garamond) for display with sans-serif (Source Sans 3) for body and labels.

## Source Projects

| Surface | Claude Design Project ID | File |
|---------|--------------------------|------|
| Landing Page | `e16c5ea5-8a5c-4426-a846-32ce33010702` | `Landing.dc.html` |
| Dashboard | `ed5c3cd3-1f70-4e54-9162-9a3df58cdeb3` | `MDMS Dashboard.dc.html` |

## Implementation

| File | Purpose |
|------|---------|
| `src/app/globals.css` | Unified CSS custom properties (tokens) and global reset |
| `src/app/page.tsx` | Landing page component |
| `src/app/page.module.css` | Landing page styles |
| `src/app/dashboard/page.tsx` | Dashboard page component |
| `src/app/dashboard/page.module.css` | Dashboard styles |

## Design System Files

| File | Contents |
|------|----------|
| [`tokens.css`](./tokens.css) | All CSS custom properties |
| [`colors.md`](./colors.md) | Color palette and usage |
| [`typography.md`](./typography.md) | Type scale and families |
| [`components.md`](./components.md) | UI component catalog |
| [`icons.md`](./icons.md) | SVG icon library |
| [`patterns.md`](./patterns.md) | Geometric patterns and decorative elements |
| [`layout.md`](./layout.md) | Spacing, grids, breakpoints |
