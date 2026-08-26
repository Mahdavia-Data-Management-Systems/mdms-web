# Colors

## Brand Core

| Token | Value | Role |
|-------|-------|------|
| `--green-deep` | `#0F3D2E` | Primary brand, hero/sidebar backgrounds |
| `--green-darker` | `#081E16` | Deeper shade (dashboard only) |
| `--green-action` | `#1F7A5C` | Interactive elements, CTAs, active states |
| `--green-hover` | `#16664C` | Hover state for `--green-action` |
| `--green-subtle` | `rgba(31, 122, 92, 0.06)` | Subtle green backgrounds (icons, badges) |
| `--gold` | `#C9A24A` | Accent color, decorative elements, notification dots |
| `--gold-soft` | `rgba(201, 162, 74, 0.12)` | Soft gold backgrounds |
| `--gold-muted` | `rgba(201, 162, 74, 0.35)` | Decorative lines, divider gradients |
| `--gold-light` | `#F8F0D8` | Light gold (dashboard only) |

## Platform Brand Colors

Each MDMS platform has a designated brand color used for its icon background:

| Platform | Color | Hex |
|----------|-------|-----|
| Ishqnama (Scripture) | Deep green | `#0F3D2E` |
| Taleem Portal (Education) | Action green | `#1F7A5C` |
| Sehat Connect (Healthcare) | Gold | `#C9A24A` |
| Rabita (Community) | Warm brown | `#6B5B3E` |

## Surfaces

| Token | Landing | Dashboard | Implementation |
|-------|---------|-----------|----------------|
| `--surface` | `#F7F5F1` | `#F6F4F0` (slightly cooler) | `#F7F5F1` |
| `--card` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` |
| `--border` | `rgba(15,61,46, 0.08)` | `rgba(15,61,46, 0.07)` | `rgba(15,61,46, 0.08)` |
| `--border-strong` | — | `rgba(15,61,46, 0.12)` | `rgba(15,61,46, 0.12)` |

### Section Alternation (Landing Page)

Sections alternate between white (`#FFFFFF`) and warm off-white (`--surface` / `#F7F5F1`) backgrounds using the `.sectionAlt` class.

## Text Hierarchy

| Token | Value | Usage |
|-------|-------|-------|
| `--text-1` | `#1A2E2A` | Primary headings and body text |
| `--text-2` | `rgba(26,46,42, 0.6)` | Secondary text, descriptions |
| `--text-3` | `rgba(26,46,42, 0.4)` | Tertiary text, labels, captions |

## Inverted Text (On Dark Backgrounds)

| Token | Landing | Dashboard | Implementation |
|-------|---------|-----------|----------------|
| `--text-inv` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` |
| `--text-inv-2` | `rgba(255,255,255, 0.7)` | `rgba(255,255,255, 0.55)` | `rgba(255,255,255, 0.7)` |
| `--text-inv-3` | `rgba(255,255,255, 0.45)` | `rgba(255,255,255, 0.45)` | `rgba(255,255,255, 0.45)` |

Dashboard sidebar uses `rgba(255,255,255, 0.55)` directly in CSS rather than the token for nav link text.

## Accent & Badge Colors

| Badge | Background | Text Color |
|-------|------------|------------|
| Live | `rgba(31, 122, 92, 0.1)` | `var(--green-action)` |
| Beta | `var(--gold-soft)` | `#8A7520` |
| Dev / Planning | `rgba(26, 46, 42, 0.06)` | `var(--text-2)` |
| Primary (IDP) | `rgba(31, 122, 92, 0.08)` | `var(--green-action)` |

## Identity Provider Brand Colors

| Provider | Color | Usage |
|----------|-------|-------|
| Google | `#4285F4` | "G" text in IDP icon |
| Facebook | `#1877F2` | "f" text in IDP icon |
| Azure Entra | `var(--green-deep)` | Checkmark stroke |
| Email | `var(--text-2)` | Envelope stroke |
