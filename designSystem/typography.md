# Typography

## Font Families

| Token | Stack | Usage |
|-------|-------|-------|
| `--serif` | `var(--font-eb-garamond), 'Noto Serif', Georgia, serif` | Display/headings on landing page |
| `--sans` | `var(--font-source-sans), 'Segoe UI', system-ui, sans-serif` | Body/UI everywhere, all dashboard text |

**Key rule:** The dashboard uses **Source Sans 3 exclusively**. The landing page pairs EB Garamond (display) with Source Sans 3 (body/UI).

---

## Landing Page Type Scale

### EB Garamond (Serif)

| Element | Size | Weight | Line Height | Tracking | Notes |
|---------|------|--------|-------------|----------|-------|
| Hero heading | 52px | 500 | 1.2 | -0.5px | `--text-inv`, max-width 720px |
| Section heading | 36px | 500 | — | — | `--text-1`, centered |
| Mission title | 24px | 500 | — | — | `--text-1` |
| Value term | 22px | 600 | — | — | `--green-deep` |
| Platform name | 20px | 600 | — | — | `--text-1` |
| Nav title | 18px | 600 | — | 0.5px | `--green-deep` |
| Team name | 16px | 600 | — | — | `--text-1` |
| Team initials | 16px | 600 | — | — | `--gold` on `--green-deep` circle |
| Nav logo "M" | 16px | 700 | — | — | White on `--gold` bg |
| Footer logo "M" | 13px | 700 | — | — | White on `--gold` bg |

### Source Sans 3 (Sans-Serif)

| Element | Size | Weight | Line Height | Tracking | Notes |
|---------|------|--------|-------------|----------|-------|
| Hero subtitle | 18px | 400 | 1.7 | — | `--text-inv-2`, max-width 580px |
| About body | 15px | 400 | 1.75 | — | `--text-2` |
| Section subheading | 15px | 400 | 1.6 | — | `--text-2` |
| Mission body | 14px | 400 | 1.7 | — | `--text-2` |
| Value description | 14px | 400 | 1.65 | — | `--text-2` |
| Platform description | 13px | 400 | 1.6 | — | `--text-2` |
| Nav links | 13px | 500 | — | 0.3px | `--text-2`, hover `--text-1` |
| Nav sign-in | 13px | 600 | — | — | `--green-action`, outlined button |
| Team role | 13px | 400 | — | — | `--text-2` |
| Footer brand text | 13px | 400 | — | — | `--text-inv-2` |
| Footer links | 12px | 400 | — | — | `--text-inv-3` |
| Footer copyright | 12px | 400 | — | — | `--text-inv-3` |
| Section label | 11px | 600 | — | 2px | Uppercase, `--gold` |
| Value sublabel | 11px | 600 | — | 1.5px | Uppercase, `--gold` |
| Platform domain | 10px | 600 | — | 1.5px | Uppercase, `--text-3` |

### Container Padding

Landing page sections use `48px` horizontal padding (implementation; Claude Design spec was `40px`).

---

## Dashboard Type Scale

All dashboard text uses **Source Sans 3** (`--sans`). The implementation uses `--serif` for some dashboard elements (stat values, panel titles, sidebar title, topbar greeting, footer value) — these are implementation choices, not Claude Design spec.

### Sans-Serif Scale

| Element | Size | Weight | Line Height | Tracking | Notes |
|---------|------|--------|-------------|----------|-------|
| Stat value | 28px | 600 | 1.1 | — | `--text-1` (uses `--serif` in impl) |
| Topbar greeting | 20px | 500 | — | — | `--text-1` (uses `--serif` in impl) |
| Sidebar brand title | 18px | 600 | — | 0.5px | `--text-inv` (uses `--serif` in impl) |
| Panel footer value | 18px | 600 | — | — | `--text-1` (uses `--serif` in impl) |
| Sidebar logo "M" | 17px | 700 | — | — | White on `--gold` bg |
| Panel title | 16px | 600 | — | — | `--text-1` (uses `--serif` in impl) |
| App name | 14px | 600 | — | — | `--text-1` |
| Search box text | 13px | 400 | — | — | `--text-3` |
| Nav item | 13px | 500 | — | — | `rgba(255,255,255,0.55)`, active: white |
| Sidebar user name | 13px | 500 | — | — | `--text-inv` |
| IDP name | 13px | 600 | — | — | `--text-1` |
| Health name | 13px | 400 | — | — | `--text-1` |
| Stat label | 12px | 500 | — | — | `--text-2` |
| Stat trend | 12px | 400 | — | — | `--text-3`, up: `--green-action` |
| App description | 12px | 400 | — | — | `--text-3` |
| App users | 12px | 400 | — | — | `--text-2` |
| Panel action link | 12px | 500 | — | — | `--green-action` |
| Panel footer label | 12px | 400 | — | — | `--text-3` |
| IDP bar label | 12px | 600 | — | — | `--text-2` |
| Health uptime | 12px | 500 | — | — | `--text-2` |
| Sidebar avatar text | 12px | 600 | — | — | `--gold` (uses `--serif` in impl) |
| Chart value | 11px | 600 | — | — | `--text-2` |
| Chart label | 11px | 400 | — | — | `--text-3` |
| Badge | 11px | 600 | — | — | Varies by badge type |
| IDP badge | 11px | 600 | — | — | `--green-action` |
| IDP detail | 11px | 400 | — | — | `--text-3` |
| Health status | 11px | 500 | — | — | `--green-action` |
| Sidebar subtitle | 11px | 400 | — | — | `--text-inv-3` |
| Sidebar user role | 11px | 400 | — | — | `--text-inv-3` |
| Sidebar section label | 10px | 600 | — | 1.5px | Uppercase, `--text-inv-3` |
