# Geometric Patterns & Decorative Elements

## Hero Geometric Lattice

Three-layer repeating-linear-gradient creating an Islamic-inspired diamond mesh pattern on the hero section. Applied via `::before` pseudo-element with `pointer-events: none`.

```css
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(
      60deg,
      transparent, transparent 60px,
      rgba(255, 255, 255, 0.01) 60px,
      rgba(255, 255, 255, 0.01) 61px
    ),
    repeating-linear-gradient(
      -60deg,
      transparent, transparent 60px,
      rgba(255, 255, 255, 0.01) 60px,
      rgba(255, 255, 255, 0.01) 61px
    ),
    repeating-linear-gradient(
      0deg,
      transparent, transparent 60px,
      rgba(255, 255, 255, 0.008) 60px,
      rgba(255, 255, 255, 0.008) 61px
    );
  pointer-events: none;
}
```

**Structure:**
- Layer 1: 60deg lines at 60px intervals, ~1% white opacity
- Layer 2: -60deg lines at 60px intervals, ~1% white opacity
- Layer 3: 0deg horizontal lines at 60px intervals, ~0.8% white opacity
- The 60deg + -60deg intersection creates diamond shapes; the horizontal adds structure

---

## Sidebar Texture

Two-layer variant (no horizontal lines), tighter spacing. Applied via `::before` on `.sidebar`.

```css
.sidebar::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(
      60deg,
      transparent, transparent 40px,
      rgba(255, 255, 255, 0.012) 40px,
      rgba(255, 255, 255, 0.012) 41px
    ),
    repeating-linear-gradient(
      -60deg,
      transparent, transparent 40px,
      rgba(255, 255, 255, 0.012) 40px,
      rgba(255, 255, 255, 0.012) 41px
    );
  pointer-events: none;
}
```

**Differences from hero:**
- 40px intervals (tighter than hero's 60px)
- 1.2% white opacity (slightly more visible than hero's 1%)
- No horizontal layer (only two diagonal layers)

---

## Gold Gradient Dividers

### Horizontal Gold Line (Hero Bottom / Footer Top)

Used as `::after` on hero and `::before` on footer. Creates a subtle gold horizontal rule transitioning from transparent at edges.

```css
/* As a positioned element */
.heroBottom,
.footerTop {
  position: absolute;
  bottom: 0; /* or top: 0 for footer */
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold-muted), transparent);
}
```

### Vertical Gold Divider (Mission/Vision)

Separates the Mission and Vision cards. 1px wide, full height of parent.

```css
.missionDivider {
  width: 1px;
  background: linear-gradient(180deg, transparent, var(--gold-muted), transparent);
}
```

At `900px` breakpoint, this rotates to horizontal:
```css
@media (max-width: 900px) {
  .missionDivider {
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--gold-muted), transparent);
  }
}
```

---

## Diamond Ornament

CSS-based section divider used between section labels and headings. Three separate elements in a flex container.

```css
.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 24px;
}

.dividerLine {
  width: 48px;
  height: 1px;
  background: var(--gold-muted);
}

.dividerDiamond {
  width: 7px;
  height: 7px;
  background: var(--gold);
  opacity: 0.5;
  transform: rotate(45deg);
}
```

**Rendering:** `── ◇ ──` (two 48px gold-muted lines flanking a 7x7px rotated diamond at 50% opacity)

---

## Section Background Alternation

Landing page sections alternate between two backgrounds:

| Class | Background |
|-------|------------|
| `.section` (default) | `var(--card)` = `#FFFFFF` |
| `.section.sectionAlt` | `var(--surface)` = `#F7F5F1` |

Pattern: About (white) → Mission (off-white) → Values (white) → Platforms (off-white) → Team (white)

---

## Sidebar Border Separators

### Brand Area Bottom Border
Not implemented as a visible border in the current code. The brand area uses padding only (`24px 20px 28px`).

### Footer Top Border
```css
.sidebarFooter {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
```

Claude Design spec uses `rgba(255, 255, 255, 0.08)` for both. Implementation uses `0.06` for the footer border.
