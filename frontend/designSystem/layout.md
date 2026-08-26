# Layout

## Landing Page

### Container

```
Max-width: var(--content-max) = 1100px
Horizontal padding: 48px (implementation)
Centered: margin 0 auto
```

### Hero

```
Padding: 160px 48px 100px
Content max-width: 720px (centered)
Subtitle max-width: 580px (centered)
```

### About

```
Text max-width: 680px (centered)
```

### Section Padding

```
Default: var(--section-py) 48px = 100px 48px
```

### Mission/Vision Grid

```
Grid: 1fr auto 1fr
Gap: 48px
Margin-top: 48px
```

The `auto` column holds the vertical gold divider (1px wide).

### Values Grid

```
Grid: repeat(4, 1fr)
Gap: 32px
Margin-top: 48px
```

### Platforms Grid

```
Grid: repeat(4, 1fr)
Gap: 20px
Margin-top: 48px
```

### Team Grid

```
Grid: repeat(3, 1fr)
Gap: 24px
Margin-top: 48px
```

### Footer

```
Padding: 40px 48px
Inner: max-width var(--content-max), flex row, space-between
```

---

## Dashboard

### Sidebar

```
Position: fixed, left 0, top 0
Width: var(--sidebar-w) = 240px
Height: 100vh
```

### Main Area

```
Margin-left: var(--sidebar-w) = 240px
Min-height: 100vh
```

### Top Bar

```
Position: sticky, top 0
Height: var(--topbar-h) = 64px
Padding: 0 32px
```

### Content Area

```
Padding: 28px 32px
```

### Stats Row

```
Grid: repeat(4, 1fr)
Gap: 16px
Margin-bottom: 20px
```

### Panels Row (Apps + Identity)

```
Grid: 3fr 2fr
Gap: 16px
Margin-bottom: 20px
```

### Chart Row (Chart + Health)

```
Grid: 3fr 2fr
Gap: 16px
```

### Chart

```
Height: 160px
Layout: flex, align-items flex-end, space-between
Gap: 12px
```

---

## Responsive Breakpoints

### 900px

**Landing page:**
- Section padding: `64px 24px`
- Nav padding: `0 24px`, nav links hidden
- Hero padding: `140px 24px 80px`
- Hero title: `36px`
- Hero subtitle: `16px`
- Mission grid: single column, gap `32px`
- Mission divider: horizontal (width 100%, height 1px)
- Values grid: `repeat(2, 1fr)`, gap `16px`
- Platforms grid: `repeat(2, 1fr)`, gap `16px`
- Team grid: single column
- Footer: column layout, gap `16px`, centered text

### 600px

**Landing page:**
- Values grid: single column
- Platforms grid: single column

---

## Border Radius Scale

| Radius | Usage |
|--------|-------|
| 5px | Footer logo |
| 6px | Nav logo, nav sign-in button |
| 8px | Sidebar logo, nav items, search box, icon buttons, app icons, stat/IDP icons |
| 10px (`--r`) | Platform icons (landing), stat icon boxes |
| 12px | Landing page cards (value, platform, team) |
| 14px (`--r-lg`) | Dashboard panels (Claude Design spec; implementation uses `--r` = 10px) |
| 20px | Badge pills |
| 50% | Avatars, circles (team avatar, sidebar avatar, mission icons, health/IDP dots) |

---

## Spacing Patterns

### Landing Page Vertical Rhythm
- Section label → divider: `16px`
- Divider → heading: `24px`
- Heading → subheading: `16px`
- Subheading → grid: `48px`

### Dashboard Card Internal Spacing
- Card padding: `20px`
- Panel header margin-bottom: `16px`
- Stat card gap: `14px`
- App row padding: `12px 0`
- IDP row padding: `10px 0`
- Health row padding: `9px 0`
