---
name: Low Exposure
description: Camera-viewfinder editorial system for a Medellín audiovisual/photography portfolio, built around the real pixel palette of a fluid-ink hero image.
colors:
  azure: "oklch(0.58 0.233 260)"
  cyan: "oklch(0.75 0.155 233)"
  lime: "oklch(0.95 0.21 118)"
  amber: "oklch(0.87 0.18 92)"
  magenta: "oklch(0.63 0.2 349)"
  background: "oklch(0.13 0.03 285)"
  card: "oklch(0.18 0.04 285)"
  foreground: "oklch(0.97 0.01 280)"
  muted-foreground: "oklch(0.72 0.03 280)"
  border: "oklch(0.3 0.06 285)"
typography:
  display:
    fontFamily: '"Clash Display", "General Sans", sans-serif'
    fontSize: "clamp(2.25rem, 6vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.03em"
  headline:
    fontFamily: '"Clash Display", "General Sans", sans-serif'
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  body:
    fontFamily: '"General Sans", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: '"JetBrains Mono", ui-monospace, monospace'
    fontSize: "0.6875rem"
    fontWeight: 400
    letterSpacing: "0.18em"
    textTransform: "uppercase"
rounded:
  lg: "1rem"
  xl: "1.25rem"
  2xl: "1.5rem"
  3xl: "1.75rem"
  full: "9999px"
spacing:
  section-x: "1.5rem"
  section-x-sm: "2.5rem"
  section-y: "6rem"
  section-y-lg: "8rem"
  container-max: "72rem"
components:
  button-primary:
    textColor: "{colors.background}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-secondary:
    textColor: "{colors.foreground}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  card-work:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.3xl}"
  panel-contact:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.3xl}"
    padding: "64px 32px"
---

# Design System: Low Exposure

## Overview

**Creative North Star: "The Grading Bay"**

Low Exposure reads as a dark color-grading suite with a viewfinder overlaid on it, not a generic dark-mode portfolio. The near-black violet background (`oklch(0.13 0.03 285)`) is the room; the saturated azure/cyan/lime/amber/magenta palette — sampled directly from real pixels in `src/assets/hero-fluid.png`, not chosen from a swatch — is the footage running through it. Real photography and video stills are the evidence of the work and are never obscured by decoration; every recurring chrome element (corner brackets, monospace HUD readouts) references an actual piece of camera/grading equipment rather than a generic UI affordance.

The system rejects both flat corporate minimalism and loud gradient maximalism. Color is structural signal (accents on hover, on glow, on the single azure-dominant CTA) rather than an evenly-distributed rainbow wash. Section-to-section, the site deliberately varies its structural grammar — full-bleed parallax, asymmetric bento grid, borderless editorial list, drifting-blob panel — rather than repeating one card pattern four times.

**Key Characteristics:**
- Near-black violet-tinted neutral base with a five-hue accent family pulled from one source image, azure-dominant rather than evenly spread
- Clash Display for headlines, General Sans for body, JetBrains Mono exclusively for HUD/label chrome
- A recurring camera-viewfinder motif (bracket corners, timecodes, ƒ-stops) standing in for generic borders and badges
- Deliberate structural variety per section: no repeated card template across Hero/Work/Services/Contact
- Glassmorphic `card-fluid` surfaces (translucent blur + hairline border) over flat opaque cards

## Colors

The palette is a five-hue accent family sampled directly from the dominant vivid pixels of `src/assets/hero-fluid.png`, layered on a near-black violet neutral base. It is azure-dominant, not an evenly-distributed rainbow: azure/cyan carry the majority of accent surface area (primary CTA gradient start, ring/focus color, cursor-hover states, first Services row, first Contact blob), while lime, amber, and magenta appear as sparing counterpoints (accent row states, secondary Contact blob, `::selection`).

### Primary
- **Azure** (`oklch(0.58 0.233 260)`): The dominant accent hue. Leads the CTA gradient, the Hero HUD accent dot family, the first Services row accent, and the primary Contact panel's drifting blob. Matches the electric-blue majority of the hero image's real pixel sample.
- **Cyan** (`oklch(0.75 0.155 233)`): Azure's close neighbor; doubles as `--accent`/`--ring` (focus outline, `glow-cool` shadow). Used on the mail contact channel and the second Services row.

### Secondary
- **Magenta** (`oklch(0.63 0.2 349)`): Used for `::selection`, the warm end of the CTA gradient, the Instagram contact channel, the fourth Services row, and `card-fluid`'s hover border/glow shift. The system's "hot" counterpoint to azure.
- **Amber** (`oklch(0.87 0.18 92)`): Third Services row accent and a CTA gradient stop; the palette's warm-neutral bridge between magenta and lime.
- **Lime** (`oklch(0.95 0.21 118)`): The WhatsApp contact channel and a CTA gradient stop; highest-lightness accent, used sparingly since it competes hardest with the dark base.

### Neutral
- **Void Violet** (`oklch(0.13 0.03 285)`, `--background`): The base surface — a near-black with a faint cool-violet tint rather than true neutral black, keeping the whole site inside the same hue family as the accents.
- **Card Violet** (`oklch(0.18 0.04 285)`, `--card`): Raised-surface base under `card-fluid`'s translucency and the Contact panel.
- **Paper White** (`oklch(0.97 0.01 280)`, `--foreground`): Primary text; near-white with the same faint violet lean as the background.
- **Border Violet** (`oklch(0.3 0.06 285)`, `--border`): Hairline dividers (Services rows, Contact panel edge) — always at low opacity (`/60`), never a hard full-strength rule.

### Named Rules
**The Committed Palette Rule.** The five accent hues are fixed and image-derived; do not introduce a new accent hue for a new surface. Azure/cyan carry the majority of accent weight — new surfaces should default to azure/cyan before reaching for magenta/amber/lime.

**The No-Gradient-Text Rule.** Text is never rendered with a gradient-clip (`background-clip: text`). The system's earlier `text-spectrum` utility was removed; emphasis in running text comes from an animated solid-color cycle (Hero's `motion.span` cycling through the accent hues) or from weight/color contrast, never from a rainbow fill on the glyphs themselves.

## Typography

**Display Font:** Clash Display (with General Sans, sans-serif fallback)
**Body Font:** General Sans (with sans-serif fallback)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, monospace fallback)

**Character:** Clash Display's geometric, slightly condensed display forms carry all headings (h1–h3, tightened to `-0.02em` to `-0.03em` tracking); General Sans is a neutral, humanist workhorse for body copy; JetBrains Mono is reserved exclusively for HUD chrome, never for body or headline text.

### Hierarchy
- **Display** (600, `clamp(2.25rem, 6vw, 6rem)` / up to `text-8xl` in Hero, line-height 0.94, tracking -0.03em): Hero H1 only.
- **Headline** (600, `text-3xl`–`text-6xl`, line-height ~1.05, tracking -0.02em): Section titles (Work, Services, Contact) and GalleryModal detail titles.
- **Body** (400, `1rem`–`1.125rem`, line-height 1.5–1.6): Bios, service descriptions, contact copy.
- **Label** (400, `0.6875rem`, tracking 0.18em, uppercase, tabular-nums): `hud-label` — every technical readout (timecode, ƒ-stop, item counts, channel labels).

### Named Rules
**The Mono-Is-Evidence Rule.** Monospace (`hud-label`) is used only for real, verifiable technical information: a live-running timecode, an ƒ-stop/lens spec, an actual item count, a channel name. It is never used as decorative micro-copy or an invented eyebrow/kicker label with no informational content.

## Layout

Single max-width container (`max-w-6xl`, 72rem) centered with `px-6 sm:px-10` horizontal padding, repeated identically across Work, Services, and Contact. Vertical section rhythm is consistent: `py-24` (6rem) at base, `lg:py-32` (8rem) at large viewports. Hero breaks the container pattern deliberately — it is full-bleed (`min-h-[100svh]`, no max-width) with its own `px-6 sm:px-10` edge padding, since it's the one section meant to read as a full-frame shot rather than a contained editorial block.

Each of the four sections uses a distinct structural grammar rather than a shared card-grid template:
- **Hero:** full-bleed parallax image (scroll-linked `y` transform), HUD readouts pinned to the four screen edges.
- **Work:** asymmetric bento grid (`grid-cols-1 sm:grid-cols-2`, flagship video tile spans both columns, photo/campaign tiles are `aspect-[3/4]`, social tile spans both columns again at reduced height).
- **Services:** borderless editorial list — no cards, each service is a `grid-cols-[1fr_1.4fr_auto]` row separated by hairline borders, with a per-row accent wash on hover.
- **Contact:** a single bordered panel (not a grid of cards) with two independently-animated drifting gradient blobs behind a two-column content split.

## Elevation & Depth

Hybrid: flat as the resting state, with two purpose-built shadow tokens that convey depth and warmth respectively rather than a generic elevation scale.

### Shadow Vocabulary
- **Depth** (`--shadow-depth`: `0 2px 4px -2px rgba(0,0,0,0.4), 0 24px 48px -16px rgba(0,0,0,0.65)`): Structural ambient shadow — always present under `card-fluid` surfaces and gallery detail images. Pure black, no color tint; establishes physical lift off the dark background.
- **Glow (warm)** (`--shadow-glow`: 20px 60px -20px, magenta at 55%): Response-only. Appears on `card-fluid` hover (stacked with Depth) and on the primary CTA (`glow` utility) to signal the "hot" interactive state.
- **Glow (cool)** (`--shadow-glow-cool`: same geometry, cyan at 45%): Alternate response-state glow for cyan-accented contexts.

### Named Rules
**The Glow-On-Response Rule.** Color-tinted glow shadows never appear at rest. `shadow-depth` is the only shadow present on an idle surface; `shadow-glow`/`shadow-glow-cool` are added only on hover/focus, stacked on top of — never replacing — the depth shadow.

## Shapes

Generous, consistent rounding throughout: `rounded-3xl` (1.75rem) on every work/gallery/contact-channel card, `rounded-[2rem]` on the Contact panel, `rounded-full` on all buttons, pills, and the HUD status dots. No sharp corners anywhere in the built surfaces. Borders are hairline and low-opacity (`border-border/60`) rather than full-strength rules — used for Services row dividers and the Contact panel edge, never as a heavy outline.

The signature form device is `ViewfinderCorners`: four independent L-shaped corner brackets (2px `border-current`, 20–24px arm length) that frame a rect instead of a full border. It appears at rest on the Hero (framing the whole viewport with wide insets) and reveals on hover over Work/GalleryModal tile images — a deliberate stand-in for the generic "bordered card" or corner-badge treatment.

## Components

### Buttons
- **Shape:** Fully rounded pill (`rounded-full`, `9999px`).
- **Primary:** `bg-spectrum` (the five-stop accent gradient) + `glow` shadow, dark text (`text-primary-foreground`), padding `14px 28px`. Used once per view as the single highest-commitment CTA (Hero "reel" button).
- **Secondary/Ghost:** Transparent background, translucent-blur (`backdrop-blur`), `border-foreground/30` hairline border, foreground text; on hover the border and text shift to the cyan accent.
- **Behavior:** All interactive buttons/links route through `MagneticButton` — the element nudges toward the cursor within its bounds and springs back on leave, replacing a flat color-swap hover with physical weight.

### Cards / Containers
- **Corner Style:** `rounded-3xl` (1.75rem).
- **Background:** `card-fluid` utility — `color-mix` translucent card color at 75% + `backdrop-blur(14px)`, never a flat opaque fill.
- **Shadow Strategy:** `shadow-depth` at rest; adds `shadow-glow` on hover (see Elevation & Depth).
- **Border:** 1px hairline, cyan-tinted at 18% at rest, shifting to magenta-tinted at 45% on hover.
- **Internal Padding:** `p-6` (1.5rem) for tile metadata; `px-8 py-16`–`px-16 py-20` for the Contact panel.

### Navigation / Interaction Chrome
- **Cursor:** `CustomCursor` replaces the system pointer on fine-pointer devices only (skipped entirely on touch) — a `mix-blend-difference` ring that lerps toward the pointer and swells (20px → 56px → 84px) over `data-cursor="link"`/`"view"` targets, surfacing a HUD-style label on view targets.
- **Scroll entrance:** `RevealOnScroll` — every major block fades/rises once on first viewport entry (`y: 28px`, 0.7s, `ease-out-expo`), staggered by index within a grid via a small per-item delay.

### Viewfinder Corners (signature component)
Four independent corner brackets (`border-current`, 2px, 20–24px arms) framing a rect — see Shapes. This is the system's one true signature device: it replaces borders, badges, and corner ribbons everywhere a "framed" or "in-focus" affordance is needed.

## Do's and Don'ts

### Do:
- **Do** sample new accent values from the hero image's actual dominant pixels rather than inventing a new hue; keep azure/cyan as the majority accent weight (see The Committed Palette Rule).
- **Do** use `ViewfinderCorners` as the framing device for any new media tile or full-bleed section instead of a generic border or drop-shadow card.
- **Do** keep `hud-label` (JetBrains Mono, uppercase, tabular-nums) reserved for real technical/status information — timecodes, ƒ-stops, counts, channel names.
- **Do** vary structural grammar per section (grid vs. list vs. panel vs. full-bleed) rather than repeating the same card template across the page.
- **Do** keep hairline borders at reduced opacity (`/60` or lower); a full-strength border reads as off-system.

### Don't:
- **Don't** clip text with a gradient (`background-clip: text`). The `text-spectrum` utility was deliberately removed; use color/weight or an animated solid-color cycle instead (see The No-Gradient-Text Rule).
- **Don't** add per-item numbering badges (01 / 02 / 03) to individual Work or Service items. Aggregate HUD counts (e.g. "04 SERVICIOS", a year range) are the only sanctioned numeric readouts, and they describe the whole set, not a single item's rank.
- **Don't** introduce an eyebrow/kicker label above a heading. The build's HUD readouts always carry real technical or status data; a decorative label above a title has no equivalent here and should not be added.
- **Don't** add a shadow that is both hard-offset and undiffused (a flat drop-shadow with no blur). The system's shadow vocabulary is soft/diffuse only (`shadow-depth`, `shadow-glow*`); a hard offset shadow belongs to a different, non-neobrutalist world than this one.
