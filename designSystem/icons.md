# Icons

All icons use SVG with stroke-only rendering (no fill). Standard conventions:
- **viewBox**: `0 0 20 20` (except trend arrow: `0 0 12 12`)
- **stroke-width**: `1.5` (UI icons sometimes `2`)
- **fill**: `none`
- **stroke**: varies by context (`currentColor`, `white`, specific color tokens)

---

## Platform Icons

Used on both landing page and dashboard app rows. White stroke on colored backgrounds.

### Ishqnama / Book (Scripture)
Background: `#0F3D2E`
```svg
<svg viewBox="0 0 20 20" fill="none" stroke="white" stroke-width="1.5">
  <path d="M4 4 L10 2 L16 4 L16 16 L10 18 L4 16 Z" />
  <line x1="10" y1="2" x2="10" y2="18" />
</svg>
```

### Taleem / Grid (Education)
Background: `#1F7A5C`
```svg
<svg viewBox="0 0 20 20" fill="none" stroke="white" stroke-width="1.5">
  <path d="M3 4 L17 4 L17 16 L3 16 Z" />
  <line x1="3" y1="8" x2="17" y2="8" />
  <line x1="7" y1="8" x2="7" y2="16" />
</svg>
```

### Sehat / Pin (Healthcare)
Background: `#C9A24A`
```svg
<svg viewBox="0 0 20 20" fill="none" stroke="white" stroke-width="1.5">
  <path d="M10 3 C6 3 3 6 3 9 C3 14 10 18 10 18 C10 18 17 14 17 9 C17 6 14 3 10 3 Z" />
</svg>
```

### Rabita / People (Community)
Background: `#6B5B3E`
```svg
<svg viewBox="0 0 20 20" fill="none" stroke="white" stroke-width="1.5">
  <circle cx="7" cy="8" r="3" />
  <circle cx="13" cy="8" r="3" />
  <path d="M3 17 C3 14 5 12 7 12" />
  <path d="M13 12 C15 12 17 14 17 17" />
</svg>
```

---

## Landing Page Icons

Green-action stroke on green-subtle circular backgrounds (48x48px, border-radius 50%).

### Mission / Target
Three concentric circles.
```svg
<svg viewBox="0 0 20 20" fill="none" stroke="var(--green-action)" stroke-width="1.5">
  <circle cx="10" cy="10" r="8" />
  <circle cx="10" cy="10" r="4" />
  <circle cx="10" cy="10" r="1" />
</svg>
```

### Vision / Compass
Crosshair with inner circle.
```svg
<svg viewBox="0 0 20 20" fill="none" stroke="var(--green-action)" stroke-width="1.5">
  <path d="M10 2 L10 5" />
  <path d="M10 15 L10 18" />
  <path d="M2 10 L5 10" />
  <path d="M15 10 L18 10" />
  <circle cx="10" cy="10" r="5" />
</svg>
```

---

## Dashboard Nav Icons

`currentColor` stroke, 18x18px rendered size (20x20 viewBox), stroke-width 1.5.

### Dashboard (4 Rounded Squares)
```svg
<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5">
  <rect x="2" y="2" width="7" height="7" rx="1.5" />
  <rect x="11" y="2" width="7" height="7" rx="1.5" />
  <rect x="2" y="11" width="7" height="7" rx="1.5" />
  <rect x="11" y="11" width="7" height="7" rx="1.5" />
</svg>
```

### Applications (2 Stacked Rectangles)
```svg
<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5">
  <rect x="3" y="3" width="14" height="5" rx="1.5" />
  <rect x="3" y="12" width="14" height="5" rx="1.5" />
</svg>
```

### Identity & SSO (Hexagon + Circle)
```svg
<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5">
  <path d="M10 1 L18 6 L18 14 L10 19 L2 14 L2 6 Z" />
  <circle cx="10" cy="10" r="3" />
</svg>
```

### Analytics (Polyline Chart + Baseline)
```svg
<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5">
  <polyline points="4,13 8,7 12,11 16,5" />
  <line x1="3" y1="17" x2="17" y2="17" />
</svg>
```

### Developers (Code Chevrons + Diagonal)
```svg
<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5">
  <path d="M7 3 L3 7 L7 11" />
  <path d="M13 9 L17 13 L13 17" />
  <line x1="5" y1="7" x2="15" y2="13" />
</svg>
```

### Settings (Concentric Circles + Crosshair)
```svg
<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5">
  <circle cx="10" cy="10" r="7" />
  <circle cx="10" cy="10" r="2.5" />
  <line x1="10" y1="1" x2="10" y2="3" />
  <line x1="10" y1="17" x2="10" y2="19" />
  <line x1="1" y1="10" x2="3" y2="10" />
  <line x1="17" y1="10" x2="19" y2="10" />
</svg>
```

---

## Dashboard Stat Icons

Used inside 40x40px stat icon boxes (border-radius 10px).

### Community Members (Two People)
Background: `rgba(31, 122, 92, 0.08)`, stroke: `var(--green-action)`

Note: Different geometry from the landing Rabita icon (connected body path vs. separate arc paths).
```svg
<svg viewBox="0 0 20 20" fill="none" stroke="var(--green-action)" stroke-width="1.5">
  <circle cx="7" cy="7" r="3" />
  <circle cx="14" cy="7" r="3" />
  <path d="M3 17 C3 14 5 12 7 12 L14 12 C16 12 18 14 18 17" />
</svg>
```

### Active Applications (Stacked Rectangles)
Background: `rgba(31, 122, 92, 0.08)`, stroke: `var(--green-action)`

Same icon as nav Applications.
```svg
<svg viewBox="0 0 20 20" fill="none" stroke="var(--green-action)" stroke-width="1.5">
  <rect x="3" y="3" width="14" height="5" rx="1.5" />
  <rect x="3" y="12" width="14" height="5" rx="1.5" />
</svg>
```

### Monthly Logins (Padlock)
Background: `var(--gold-soft)`, stroke: `var(--gold)`
```svg
<svg viewBox="0 0 20 20" fill="none" stroke="var(--gold)" stroke-width="1.5">
  <rect x="5" y="9" width="10" height="8" rx="1.5" />
  <path d="M7 9 L7 6 C7 3.5 8.5 2 10 2 C11.5 2 13 3.5 13 6 L13 9" />
</svg>
```

### Developer Keys (Code Chevrons)
Background: `var(--gold-soft)`, stroke: `var(--gold)`

Note: Same as Developers nav icon (chevrons + diagonal).
```svg
<svg viewBox="0 0 20 20" fill="none" stroke="var(--gold)" stroke-width="1.5">
  <path d="M7 3 L3 7 L7 11" />
  <path d="M13 9 L17 13 L13 17" />
  <line x1="5" y1="7" x2="15" y2="13" />
</svg>
```

---

## Dashboard UI Icons

### Search
Stroke-width: `2`
```svg
<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
  <circle cx="8.5" cy="8.5" r="5.5" />
  <line x1="13" y1="13" x2="17" y2="17" />
</svg>
```

### Bell (Notification)
Stroke: `currentColor` (colored via CSS as `--text-2`), stroke-width: `1.5`
```svg
<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5">
  <path d="M10 2 C7 2 5 4.5 5 7.5 L5 11 L3 14 L17 14 L15 11 L15 7.5 C15 4.5 13 2 10 2 Z" />
  <path d="M8 14 C8 15.5 9 17 10 17 C11 17 12 15.5 12 14" />
</svg>
```

---

## Trend Arrow

Used in stat cards for trend indicators. Implementation uses `&#9650;` HTML entity. Claude Design spec uses SVG chevron.

### Chevron Up
viewBox: `0 0 12 12`
```svg
<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2">
  <polyline points="2,8 6,4 10,8" />
</svg>
```
