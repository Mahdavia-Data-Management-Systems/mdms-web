# Components

## Landing Page Components

### Navigation Bar

```
Position: fixed, top 0, z-index 100
Height: 64px
Background: rgba(255, 255, 255, 0.95) + backdrop-filter: blur(12px)
Border: bottom 1px solid var(--border)
Padding: 0 48px
Layout: flex, space-between, center
```

**Logo Mark**
- 32x32px, `--gold` background, border-radius 6px
- "M" in white, `--serif`, 16px/700

**Brand Name**
- "MDMS", `--serif`, 18px/600, `--green-deep`, 0.5px tracking

**Nav Links**
- 13px/500, `--text-2`, 0.3px tracking
- Hover: `--text-1`
- Gap: 32px

**Sign-In Button**
- 13px/600, `--green-action` text
- Border: 1.5px solid `--green-action`
- Padding: 7px 20px, border-radius 6px
- Hover: `--green-action` bg, white text

---

### Hero Section

```
Background: var(--green-deep)
Padding: 160px 48px 100px
Text-align: center
Overflow: hidden
```

**Geometric Pattern Overlay** — `::before` pseudo-element (see [patterns.md](./patterns.md))

**Gold Rule**
- 48x2px, `--gold` background, opacity 0.6
- Margin: 0 auto 32px

**Title**
- `--serif`, 52px/500, line-height 1.2, -0.5px tracking
- Color: `--text-inv`
- Content max-width: 720px centered

**Subtitle**
- 18px, line-height 1.7, `--text-inv-2`
- Max-width: 580px centered

**Bottom Gold Line** — `::after`-style div (see [patterns.md](./patterns.md))

---

### Section Header

**Label**
- 11px/600, uppercase, 2px tracking, `--gold`
- Centered, margin-bottom 16px

**Diamond Divider**
- Three elements in a flex row, gap 12px, centered
- Two lines: 48px wide, 1px tall, `--gold-muted`
- Diamond: 7x7px, `--gold`, opacity 0.5, rotated 45deg
- Margin-bottom: 24px

**Heading**
- `--serif`, 36px/500, `--text-1`, centered
- Margin-bottom: 16px

**Subheading** (optional)
- 15px, line-height 1.6, `--text-2`
- Max-width: 520px, centered, margin-bottom 48px

---

### Mission Card

```
Layout: flex column, center-aligned, centered text
```

- **Icon circle**: 48x48px, border-radius 50%, `--green-subtle` bg
  - SVG: 22x22px, `--green-action` stroke
- **Title**: `--serif`, 24px/500, `--text-1`, margin-bottom 14px
- **Body**: 14px, line-height 1.7, `--text-2`, max-width 400px

### Mission Divider

- 1px wide, vertical gold gradient
- `linear-gradient(180deg, transparent, var(--gold-muted), transparent)`

---

### Value Card

```
Padding: 28px 24px
Border: 1px solid var(--border)
Border-radius: 12px
Background: var(--card)
Hover: border-color var(--gold-muted)
```

- **Term**: `--serif`, 22px/600, `--green-deep`, margin-bottom 4px
- **Label**: 11px/600, uppercase, 1.5px tracking, `--gold`, margin-bottom 14px
- **Description**: 14px, line-height 1.65, `--text-2`

---

### Platform Card

```
Padding: 28px 24px
Border: 1px solid var(--border)
Border-radius: 12px
Background: var(--card)
Hover: border-color var(--gold-muted)
```

- **Icon**: 40x40px, border-radius 10px, colored bg (per platform)
  - SVG: 20x20px, white stroke
- **Domain**: 10px/600, uppercase, 1.5px tracking, `--text-3`, margin-bottom 6px
- **Name**: `--serif`, 20px/600, `--text-1`, margin-bottom 10px
- **Description**: 13px, line-height 1.6, `--text-2`

---

### Team Card

```
Layout: flex row, center-aligned, gap 16px
Padding: 20px 24px
Border: 1px solid var(--border)
Border-radius: 12px
Background: var(--card)
Hover: border-color var(--gold-muted)
```

- **Avatar**: 52x52px circle, `--green-deep` bg
  - **Initials**: `--serif`, 16px/600, `--gold`
- **Name**: `--serif`, 16px/600, `--text-1`, margin-bottom 2px
- **Role**: 13px, `--text-2`

---

### Footer

```
Background: var(--green-deep)
Padding: 40px 48px
Position: relative
```

**Gold Top Line** — absolute positioned `::before`-style div (see [patterns.md](./patterns.md))

**Inner Layout**: max-width `--content-max`, flex row, space-between, center-aligned

- **Logo**: 28x28px, `--gold` bg, border-radius 5px, white "M" `--serif` 13px/700
- **Brand text**: 13px, `--text-inv-2`
- **Links**: 12px, `--text-inv-3`, hover `--text-inv-2`, gap 24px
- **Copyright**: 12px, `--text-inv-3`

---

## Dashboard Components

### Sidebar

```
Position: fixed, top 0, left 0
Width: var(--sidebar-w) = 240px
Height: 100vh
Background: var(--green-deep)
Layout: flex column
Z-index: 10
```

**Geometric Pattern Overlay** — `::before` pseudo-element (see [patterns.md](./patterns.md))

**Brand Area**
- Padding: 24px 20px 28px
- Layout: flex row, center-aligned, gap 12px

**Sidebar Logo**
- 36x36px, `--gold` bg, border-radius 8px
- "M" in white, `--serif`, 17px/700

**Title**: `--serif`, 18px/600, `--text-inv`, 0.5px tracking
**Subtitle**: 11px, `--text-inv-3`

---

### Nav Item

```
Layout: flex row, center-aligned, gap 10px
Padding: 10px 12px
Border-radius: 8px
Font: 13px/500
Color: rgba(255, 255, 255, 0.55)
Transition: all 0.15s
```

**Hover**: bg `rgba(255,255,255,0.06)`, color `rgba(255,255,255,0.8)`
**Active**: bg `rgba(255,255,255,0.08)`, color white

**Nav Icon**: 18x18px (implementation; Claude Design spec: 20x20px), `currentColor` stroke

**Section Label**: 10px/600, uppercase, 1.5px tracking, `--text-inv-3`, padding 16px 12px 8px

---

### Sidebar Footer

```
Padding: 16px 20px
Border-top: 1px solid rgba(255, 255, 255, 0.06)
Layout: flex row, center-aligned, gap 10px
```

**Avatar**: 34x34px circle, `rgba(255,255,255,0.1)` bg
- Initials: `--serif`, 12px/600, `--gold`

**User name**: 13px/500, `--text-inv`
**User role**: 11px, `--text-inv-3`

---

### Top Bar

```
Position: sticky, top 0, z-index 5
Height: var(--topbar-h) = 64px
Background: rgba(255, 255, 255, 0.92) + backdrop-filter: blur(12px)
Border-bottom: 1px solid var(--border)
Padding: 0 32px
Layout: flex, space-between, center
```

**Greeting**: `--serif`, 20px/500, `--text-1` (implementation uses serif; Claude Design spec uses sans)

---

### Search Box

```
Layout: flex row, center-aligned, gap 8px
Padding: 8px 16px
Background: var(--surface)
Border: 1px solid var(--border)
Border-radius: 8px
Font: 13px, var(--text-3)
Min-width: 200px
```

**Search Icon**: 14x14px, opacity 0.4

---

### Icon Button (Bell)

```
Width: 36px, Height: 36px
Border-radius: 8px
Layout: flex, centered
Hover: background var(--surface)
```

**Bell Icon**: 18x18px, `--text-2` color
**Notification Dot**: 7x7px, `--gold` bg, border-radius 50%, 1.5px white border, positioned top 8px right 8px

---

### Stat Card

```
Background: var(--card)
Border: 1px solid var(--border)
Border-radius: var(--r) = 10px
Padding: 20px
Layout: flex row, top-aligned, gap 14px
```

**Stat Icon**
- 40x40px, border-radius 10px
- `.green`: `rgba(31, 122, 92, 0.08)` bg
- `.gold`: `var(--gold-soft)` bg
- SVG: 18x18px

**Label**: 12px/500, `--text-2`, margin-bottom 4px
**Value**: `--serif` (impl), 28px/600, `--text-1`, line-height 1.1, margin-bottom 6px
**Trend**: 12px, `--text-3`, trend-up: `--green-action`
- Trend arrow: `&#9650;` (HTML entity in impl)

---

### Panel

```
Background: var(--card)
Border: 1px solid var(--border)
Border-radius: var(--r) = 10px
Padding: 20px
```

**Panel Header**
- Layout: flex, space-between, center
- Margin-bottom: 16px
- **Title**: `--serif` (impl), 16px/600, `--text-1`
- **Action**: 12px/500, `--green-action`

**Panel Footer**
- Layout: flex, space-between, center
- Padding-top: 12px, margin-top: 8px
- Border-top: 1px solid `--border`
- **Label**: 12px, `--text-3`
- **Value**: `--serif` (impl), 18px/600, `--text-1`

---

### App Row

```
Layout: flex row, center-aligned
Padding: 12px 0
Border-bottom: 1px solid var(--border) (not on last child)
```

- **App Icon**: 34x34px, border-radius 8px, colored bg, SVG 16x16px white stroke, margin-right 12px
- **App Name**: 14px/600, `--text-1`
- **App Desc**: 12px, `--text-3`
- **Users**: 12px, `--text-2`, margin-left auto, margin-right 12px
- **Badge**: see Badge component below

---

### Badge

```
Font: 11px/600
Padding: 3px 10px
Border-radius: 20px (pill)
White-space: nowrap
```

| Variant | Background | Color |
|---------|------------|-------|
| Live | `rgba(31, 122, 92, 0.1)` | `--green-action` |
| Beta | `var(--gold-soft)` | `#8A7520` |
| Dev | `rgba(26, 46, 42, 0.06)` | `--text-2` |

---

### IDP Row

```
Layout: flex row, center-aligned
Padding: 10px 0
Border-bottom: 1px solid var(--border) (not on last child)
```

- **Status Dot**: 6x6px circle, `--green-action`
- **IDP Name**: 13px/600, `--text-1`
- **Detail**: 11px, `--text-3`

**Primary Badge** (Azure Entra)
- 11px/600, `--green-action`, bg `rgba(31,122,92,0.08)`, padding 2px 8px, radius 4px

**Progress Bar** (other IDPs)
- Track: 60x4px, `--surface` bg, radius 2px
- Fill: `--green-action`, radius 2px
- Label: 12px/600, `--text-2`

---

### Bar Chart

```
Height: 160px
Layout: flex, align-items flex-end, space-between
Gap: 12px
Padding-top: 12px
```

- **Bar**: width 100%, border-radius 4px 4px 0 0
  - Opacity gradient from 0.25 (oldest) to 1.0 (current)
  - Color: `rgba(31, 122, 92, {opacity})`, current month solid `--green-action`
- **Value label**: 11px/600, `--text-2`, above bar
- **Month label**: 11px, `--text-3`, below bar

---

### Health Row

```
Layout: flex row, center-aligned
Padding: 9px 0
Border-bottom: 1px solid var(--border) (not on last child)
```

- **Dot**: 8x8px circle, `--green-action`
- **Name**: 13px, `--text-1`, margin-right auto (implicit)
- **Uptime**: 12px/500, `--text-2`, margin-left auto, margin-right 12px
- **Status**: 11px/500, `--green-action`
