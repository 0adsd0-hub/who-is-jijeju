# PROJECT BIBLE

**WHO IS JIJEJU? — A Documentary Special**

*The definitive creative direction for Amantej's interactive cinematic birthday documentary.*

---

## 1. Vision

This project is not a website. It is a **single-sitting documentary experience** — a love letter disguised as a Netflix special, delivered with the precision of an Apple Keynote and the warmth of a luxury film portrait.

**The central question:** *Who is Jijeju?*

The answer unfolds chapter by chapter — through humour, nostalgia, absurdity, and genuine affection — until the viewer arrives at the only conclusion that matters: **Happy Birthday, Amantej.**

### What We Are Building

| We are | We are not |
|--------|------------|
| A cinematic scroll documentary | A portfolio or landing page |
| An emotional gift with comedic beats | A roast that forgets to be kind |
| A premium, immersive experience | A slideshow with fancy fonts |
| A story told by friends, for a friend | Generic birthday template content |

### Emotional Arc

```
Intrigue → Laughter → Nostalgia → Absurdity → Warmth → Celebration
```

The viewer should feel like they pressed **Play** on a documentary they didn't know they needed — and leave with a smile, a lump in their throat, and the urge to watch it again.

### North Star

> *Every friend group has one person whose stories never get old. This is his documentary.*

---

## 2. Design Philosophy

### The Three Pillars

**Cinematic First**  
Every section is a scene. Full-viewport compositions, deliberate pacing, and visual hierarchy that mirrors film language — establishing shots, close-ups, title cards, and end credits.

**Premium Restraint**  
Luxury is silence, space, and confidence. We do not clutter. Gold accents are earned. Animation serves story, never ego. When in doubt, subtract.

**Heart Behind the Humour**  
The jokes land because the love is real. Satirical chapters (Hair Chronicles, Beard Files, Hall of Fame) exist to celebrate — never to diminish. Comedy is the delivery mechanism; warmth is the payload.

### Visual Language

- **Dark canvas** — Deep black backgrounds create theatre; content glows against the void.
- **Glass & gold** — Frosted glass panels and gold gradients signal premium without ostentation.
- **Film texture** — Subtle grain, vignettes, and soft glows evoke celluloid and projection rooms.
- **Breathing room** — Generous whitespace (or "blackspace") lets each chapter land before the next begins.

### Reference Touchstones

| Reference | What We Take |
|-----------|--------------|
| **Netflix Documentary** | Chapter structure, title cards, credits roll, "special event" framing |
| **Apple Keynote** | Typography confidence, reveal timing, clean motion, product-level polish |
| **Luxury Documentary** | Slow parallax, intimate photography, serif headlines, emotional narration tone |

### Section Personality Spectrum

```
Timeline chapters     ████████░░  Earnest, epic
Hair / Beard          ██████████  Comedic, investigative
Games / Beer          ███████░░░  Playful, social
Love / Animals        ██████░░░░  Tender, poetic
Poem / Reveal         ████░░░░░░  Intimate, celebratory
```

---

## 3. Typography

Typography carries the documentary's voice. Three families, three roles — never interchangeable.

### Primary Typefaces

| Role | Font | Usage |
|------|------|-------|
| **Display / Headlines** | **Playfair Display** | Chapter titles, hero text, award names, credits names, emotional peaks |
| **Narrative / Body** | **Cormorant Garamond** | Story copy, poems, subtitles, italic narration, quotes |
| **UI / Labels** | **Inter** | Navigation, chapter labels, buttons, stats, metadata, uppercase tracking |

### Special Context Fonts

| Context | Font | Usage |
|---------|------|-------|
| **Classified Documents** | Courier New (monospace) | FBI Beard Files, case reports, stamps |
| **Handwritten Feel** | Cormorant Garamond (italic) | Notebook poem section |

### Hierarchy Rules

```
Hero Title        Playfair · 4xl → 8xl · Bold · Gold gradient or white glow
Chapter Title     Playfair · 4xl → 6xl · Bold · White
Chapter Label     Inter · xs · Uppercase · tracking-[0.3em] · Gold
Narrative Body    Cormorant · lg → 2xl · Italic optional · Gray-300
UI / Metadata     Inter · xs–sm · Uppercase · Gray-400/500
Stat Numbers      Playfair · 4xl · Gold gradient
```

### Typographic Principles

1. **Headlines whisper, then speak** — Chapter labels arrive first (small, tracked); titles follow with weight.
2. **Italics = intimacy** — Cormorant italic signals personal voice, not just emphasis.
3. **Uppercase = broadcast** — Inter uppercase with wide tracking mimics documentary lower-thirds and Netflix episode labels.
4. **Gold gradient is reserved** — Use on hero moments, names, and key emotional beats — not on body copy.
5. **Never below 12px on mobile** — Legibility is non-negotiable; narrative text scales up, never down into illegibility.

---

## 4. Colour Palette

The palette is intentionally narrow. Restriction creates luxury.

### Core Colours

| Token | Hex | Role |
|-------|-----|------|
| `--gold` | `#D4AF37` | Primary accent, CTAs, active states, icons |
| `--gold-light` | `#F4D03F` | Gradient highlights, hover states, shimmer peaks |
| `--gold-dark` | `#AA8C2C` | Gradient shadows, depth, scrollbar |
| `--black` | `#0B0B0B` | Primary background, theatre canvas |
| `--black-light` | `#111111` | Alternating section background |
| `--black-lighter` | `#1A1A1A` | Cards, elevated surfaces |

### Supporting Neutrals

| Token | Usage |
|-------|-------|
| `white` / `#FFFFFF` | Primary headline text on dark |
| `gray-300` | Narrative body copy |
| `gray-400` | Secondary UI, inactive nav |
| `gray-500` | Metadata, timestamps, captions |
| `gray-800` | Dividers, credit separators |

### Contextual Accent — Animal Lover Chapter

| Token | Hex | Role |
|-------|-----|------|
| Amber-500 | `#F59E0B` | Chapter label, paw icon |
| Amber-200 | `#FDE68A` | Soft narrative highlights |
| Warm earth gradient | `#1a1410 → #0f0d0a → black` | Section background |

*Amber is exclusive to the Animal Lover chapter. It signals warmth and earthiness — a deliberate departure from gold that marks an emotional tonal shift.*

### Document Colours (Comedic Sections)

| Context | Palette |
|---------|---------|
| FBI Beard Files | Off-white `#f8f8f5`, red stamp `#8b0000`, yellow note `#fef3c7` |
| Birthday Poem Notebook | Cream `#faf8f4`, ink `#2c1810`, red margin line |

### Colour Rules

- **Background alternation:** `black` ↔ `black-light` between chapters creates rhythm without jarring cuts.
- **Gold never fills large areas** — It accents, outlines, and gradients; it does not wallpaper.
- **Gradients over flat gold** — Headlines use `text-gold-gradient` with subtle shimmer animation.
- **Overlays always** — Photos receive `from-black/40` to `from-black/60` gradient overlays for text legibility.
- **Selection colour:** `rgba(212, 175, 55, 0.3)` — branded text selection.

---

## 5. Animation Philosophy

Motion is the documentary's editor. Every animation must answer: *Does this advance the story or deepen the feeling?*

### Core Principles

1. **Reveal on scroll** — Content enters the frame as the viewer arrives. The documentary unfolds; it is not pre-loaded chaos.
2. **Ease, never bounce** — Use `cubic-bezier(0.4, 0, 0.2, 1)` and ease-in-out. Luxury does not bounce.
3. **Stagger with purpose** — Sequential delays (100–150ms between items) create cascade reveals for lists, cards, and poem lines.
4. **GPU-first** — All transforms use `translate3d` and `will-change` on animated elements. Target **60fps** at all times.
5. **Duration hierarchy:**

| Element | Duration |
|---------|----------|
| Micro-interactions (hover) | 300ms |
| Section reveals | 700–1000ms |
| Hero entrance sequence | 1000ms with 200ms stagger |
| Parallax / ambient | 6–20s loops |
| Gold text shimmer | 8s infinite |

### Signature Animations

| Animation | Purpose |
|-----------|---------|
| `fade-up` | Default section entrance — opacity + 30px rise |
| `slide-left` / `slide-right` | Image/content split layouts |
| `float` | Ambient hero particles, decorative elements |
| `particle-glow` | Premium gold dust in hero and finale |
| `shimmer` / `shimmer-text` | Award cards, gold gradient text |
| `pulse-glow` | CTA emphasis, birthday cake icon |
| Parallax scroll | Timeline chapter images — subtle depth |

### Intersection Observer Contract

- **Threshold:** 0.1–0.3 depending on section size
- **Trigger once:** Animations fire on first intersection; they do not reverse on scroll-up
- **Counters & progress bars:** Animate only when visible — never on page load

### What We Avoid

- Spinning loaders on a birthday gift
- Parallax so aggressive it causes motion sickness
- Animating more than two properties simultaneously on mobile
- Autoplay video with sound
- Infinite animations on critical reading content

### Reduced Motion

When `prefers-reduced-motion: reduce` is active, all animations collapse to instant state. Content remains fully accessible; only motion is removed. This is non-negotiable.

---

## 6. Music Philosophy

Sound is the invisible cinematographer. It sets pace, signals emotion, and transforms scrolling into viewing.

### Score Direction

| Attribute | Direction |
|-----------|-----------|
| **Genre** | Ambient cinematic — piano, soft strings, atmospheric pads |
| **Mood** | Serene, contemplative, warm — not epic blockbuster, not lo-fi chill |
| **Reference feel** | Documentary underscore during a quiet interview — present but never competing |
| **Tempo** | Slow to moderate; no sudden drops or EDM builds |

### Implementation Rules

1. **Silence before the story** — No music on the hero until the viewer presses **Begin Documentary**. The click is the play button.
2. **Fade, never cut** — Music enters over 2 seconds at 20% volume. Toggle mute fades out over 500ms.
3. **Loop seamlessly** — The score loops invisibly; the viewer should not notice the seam.
4. **User control always visible** — Floating sound toggle (top-right) after documentary begins. Default: on.
5. **Graceful autoplay failure** — If the browser blocks autoplay, show muted state without error. Never trap the user.

### Future Music Opportunities (Optional Enhancements)

- Subtle chapter-specific ambient shifts (warmer pads in Love, lighter tones in Games)
- A brief musical swell on the Final Reveal
- Punjabi Playlist chapter: visual "now playing" UI without conflicting audio (visual-only reference to his taste)

### What Music Is Not

- A Punjabi banger playing over the entire documentary
- Royalty-free corporate uplift
- Silent — the score is part of the premium experience

---

## 7. Image Usage Rules

Photography is evidence. Every image is a frame from the documentary archive.

### Asset Library

All documentary images live in:

```
/public/assets/images/documentary/
```

Each image is mapped to a narrative purpose — hero, chapter, reveal. Never use stock photography. Every frame should feel personal.

### Composition Rules

| Rule | Specification |
|------|---------------|
| **Aspect ratios** | Hero: full viewport · Cards: square or 16:10 · Grids: consistent within section |
| **Object fit** | `object-cover` always — no letterboxing, no distortion |
| **Border treatment** | `rounded-xl` to `rounded-2xl` · Gold glass frame (`glass-gold p-1`) for featured portraits |
| **Hover** | Subtle scale (1.05–1.10) over 500–700ms — never jarring zoom |
| **Loading** | `loading="lazy"` on below-fold images |

### Overlay Requirements

Every photograph that sits beneath or beside text **must** have a gradient overlay:

```
bg-gradient-to-t from-black/40 to-transparent   (minimum)
bg-gradient-to-t from-black/60 via-transparent (credits, awards)
```

### Image Categories

| Category | Treatment |
|----------|-----------|
| **Timeline parallax** | Full-bleed background, 20–40% opacity, heavy vignette |
| **Feature portraits** | Glass-gold frame, rounded, gradient bottom fade |
| **Grid galleries** | Consistent gaps, staggered reveal, hover scale |
| **Comedic sections** | Images support the joke — Hair stats, Beard mugshot, Game cards |
| **Finale grid** | 2×2 mobile, 4-column desktop — memory montage before birthday message |

### Alt Text

Every image requires descriptive alt text tied to the narrative:

- ✅ `"Hair Chronicles"`, `"Memory 3"`, `"The Journey"`
- ❌ `"IMG_2631"`, `"photo"`, empty alt

### Quality Bar

- Minimum resolution: sharp at 1920px viewport width for hero/parallax sources
- No watermarks, no screenshots-of-screenshots
- Warm colour grading preferred; match amber treatment in Animal Lover section

---

## 8. Documentary Flow

The experience follows a three-act structure wrapped in a single continuous scroll.

### Act Structure

```
┌─────────────────────────────────────────────────────────────┐
│  PRE-SHOW          │  Hero — title card, no nav, no music  │
├─────────────────────────────────────────────────────────────┤
│  ACT I             │  Ch. 1–5  Timeline — The Life Story    │
│  "The Legend"      │  Earnest, epic, parallax chapters       │
├─────────────────────────────────────────────────────────────┤
│  ACT II            │  Ch. 6–10  Personality Deep-Dives      │
│  "The Character"   │  Humour, stats, investigations, games  │
├─────────────────────────────────────────────────────────────┤
│  ACT III           │  Ch. 11–14 + Finale                    │
│  "The Heart"       │  Love, animals, poem, awards, credits  │
│                    │  → Birthday Reveal                     │
└─────────────────────────────────────────────────────────────┘
```

### Pacing Guidelines

| Phase | Scroll Depth | Energy |
|-------|--------------|--------|
| Hero | 1 viewport | Still, anticipatory |
| Timeline (5 chapters) | 5 viewports | Building, cinematic |
| Personality chapters | 5 viewports | Peak humour, interactive |
| Heart chapters | 4 viewports | Slowing, emotional |
| Credits + Reveal | 2 viewports | Resolution, celebration |

### The "Begin Documentary" Gate

Until the viewer clicks **Begin Documentary**:

- Navigation is hidden
- Music is silent
- Content below the hero is not rendered

This is intentional. It creates a **theatre curtain** moment — the audience takes their seats before the film starts.

### Scroll Behaviour

- Smooth scroll from hero to timeline on begin
- Anchor links for chapter navigation
- Intersection Observer tracks active section for nav highlighting
- No forced scroll hijacking — the user controls pace

---

## 9. Episode List

Each chapter is an episode. Label consistently: **"Chapter [N]"** in Inter uppercase gold.

| # | ID | Title | Subtitle | Tone | Format |
|---|-----|-------|----------|------|--------|
| — | `hero` | WHO IS JIJEJU? | A Documentary Special | Intrigue | Title card + CTA |
| 1 | `childhood` | The Beginning | Where it all started | Epic | Parallax full-bleed |
| 2 | `australia` | The Journey | Australia called | Epic | Parallax (reversed layout) |
| 3 | `career` | The Rise | Career excellence | Epic | Parallax full-bleed |
| 4 | `current` | The Present | Current chapter | Epic | Parallax (reversed layout) |
| 5 | `love-timeline` | The Heart | The love story | Tender | Parallax full-bleed |
| 6 | `hair` | Hair Chronicles | A follicle investigation | Comedic | Split layout + animated stats |
| 7 | `beard` | The Beard Files | A scientific investigation | Comedic | FBI classified document |
| 8 | `games` | Game Night | Where legends are made | Playful | Three-card game showcase |
| 9 | `beer` | Beer Philosophy | *(section subtitle)* | Humorous | Split layout + philosophy copy |
| 10 | `playlist` | Punjabi Playlist | *(section subtitle)* | Cultural pride | Visual playlist feature |
| 11 | `love` | The Love Story | *(section subtitle)* | Romantic | Narrative + imagery |
| 12 | `animals` | Animal Lover | A heart that speaks for those who cannot | Tender | Amber palette, photo grid |
| 13 | `poem` | Birthday Poem | Words from the heart | Intimate | Notebook animation + poem lines |
| 14 | `awards` | Hall of Fame | A collection of achievements | Celebratory | Award cards + featured image |
| 15 | `credits` | Credits | — | Cinematic | Film credits roll format |
| 16 | `reveal` | Happy Birthday Jijeju | — | Climax | Photo grid + gift message + replay |

### Chapter Labeling Convention

```html
<p class="font-inter text-gold text-xs tracking-[0.3em] uppercase">Chapter [Word]</p>
<h2 class="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white">[Title]</h2>
<p class="font-cormorant text-xl text-gray-400 italic">[Subtitle]</p>
```

---

## 10. Navigation

Navigation appears only after the documentary begins. It is a **chapter selector**, not a traditional website menu.

### Desktop Navigation

- **Position:** Fixed top, full width
- **Left:** `WHO IS JIJEJU?` — Playfair, gold gradient, links to top
- **Right:** Horizontal chapter links — Inter, xs, uppercase, tracked
- **Active state:** Gold text + gold bottom border
- **Scroll state:** Transparent → `bg-black/80 backdrop-blur-xl border-b border-gold/20` after 100px scroll

### Navigation Items

| Label | Anchor |
|-------|--------|
| Story | `#timeline` |
| Hair | `#hair` |
| Beard | `#beard` |
| Games | `#games` |
| Beer | `#beer` |
| Playlist | `#playlist` |
| Love | `#love` |
| Animals | `#animals` |
| Poem | `#poem` |
| Awards | `#awards` |
| Credits | `#credits` |

*Note: Final Reveal (`#reveal`) is intentionally excluded from nav — it is the destination, not a chapter to skip to.*

### Mobile Navigation

- Hamburger menu (Menu / X icon toggle)
- Two-column grid of chapter links
- Tap closes menu + smooth scrolls to section
- Active section: gold text + `bg-gold/10`

### Music Control

- Fixed position: top-right (below nav on mobile)
- Glass-dark pill button with Volume icon
- Label: "Sound On" / "Sound Off" (hidden on small screens, icon only)

### Navigation Philosophy

- Never more than 11 items — the story is linear, nav is for revisiting
- No dropdowns, no nested menus
- Navigation fades in with the documentary; it never competes with the hero

---

## 11. Transition Style

Transitions are cuts, dissolves, and match-moves — not page loads.

### Between Chapters

| Transition Type | Implementation |
|-----------------|----------------|
| **Background shift** | Alternating `bg-black` ↔ `bg-black-light` — soft "scene change" |
| **Layout flip** | Even chapters: image left · Odd chapters: image right (`reverse`) |
| **Scroll continuity** | No hard page breaks — one continuous `<main>` scroll |
| **Parallax handoff** | Timeline chapters bleed image into next via full-viewport sections |

### Within Chapters

| Element | Transition |
|---------|------------|
| Images | Slide from side (-translate-x-20 → 0) over 1000ms |
| Text blocks | Fade-up (opacity + translate-y-10 → 0) with 200ms delay after image |
| Cards / grids | Staggered fade-up, 150ms between items |
| Stats / counters | Trigger on intersection; count up over 2000ms |
| Progress bars | Fill over 1000ms after counter completes |

### Hero → Documentary Transition

1. User clicks **Begin Documentary**
2. Content mounts below hero
3. Smooth scroll to `#timeline` (100ms delay)
4. Music fades in over 2 seconds
5. Navigation appears

### Finale → Replay Transition

- **Watch Again** button smooth-scrolls to top
- Documentary content remains mounted — instant replay, no reload
- Music continues (or restarts if previously muted)

### What Transitions Are Not

- Full-screen wipe overlays between every section
- Route changes or page reloads
- White flashes or layout shift (CLS)

---

## 12. Mobile Experience

Mobile is not a degraded desktop view. It is the primary viewing context for a birthday gift sent via link.

### Layout Adaptations

| Desktop | Mobile |
|---------|--------|
| Side-by-side image + text | Stacked column (`flex-col`) |
| Horizontal nav | Hamburger + 2-column grid |
| 4-column award grid | 2-column → 1-column |
| 4-column reveal photos | 2-column grid |
| Full parallax backgrounds | Reduced parallax intensity |

### Touch & Scroll

- All scroll listeners use `{ passive: true }`
- Tap targets minimum 44×44px
- No hover-dependent interactions — hover effects are enhancement only
- Smooth native scroll; no scroll-jacking

### Typography Scaling

```
Hero title:     text-4xl → sm:text-6xl → md:text-7xl → lg:text-8xl
Chapter titles: text-4xl → md:text-5xl → lg:text-6xl
Body copy:      text-lg → md:text-xl → lg:text-2xl
```

### Mobile-Specific Spacing

- Section padding: `py-24` on mobile (accounts for nav height)
- Container padding: `px-6` consistent
- FBI document: reduced padding, smaller stamp text
- Notebook margin line: `left: 24px` (vs 40px desktop)

### Performance on Mobile

- Lazy-load all below-fold images
- Reduce particle count if frame rate drops (future enhancement)
- Avoid backdrop-blur on low-end devices if performance suffers (graceful degradation)

---

## 13. Accessibility

A birthday gift must be openable by everyone who loves him.

### Standards Target

- **WCAG 2.1 AA** compliance where applicable
- Semantic HTML: `<nav>`, `<section>`, `<main>`, heading hierarchy
- All interactive elements keyboard-accessible

### Motion & Sensory

- `prefers-reduced-motion: reduce` — disable all animations
- No flashing content above 3Hz
- Music never autoplays before user interaction (Begin Documentary click satisfies this)

### Visual Accessibility

- Text contrast: white/gray-300 on black meets AA for body; gold on black used only for large text and labels
- Focus visible: `outline: 2px solid var(--gold)` with offset
- Images: meaningful alt text on all `<img>` elements

### Screen Readers

- Music toggle: `aria-label="Mute music"` / `"Unmute music"`
- Navigation links: descriptive text (not just "#")
- Decorative particles: `pointer-events-none`, no aria noise

### Cognitive Accessibility

- Linear story — no required interactions to progress
- Clear chapter labels for orientation
- No time-limited content or expiring sessions

---

## 14. Performance Goals

Premium feel requires premium performance. Jank breaks immersion.

### Targets

| Metric | Target |
|--------|--------|
| **First Contentful Paint** | < 1.5s |
| **Largest Contentful Paint** | < 2.5s |
| **Cumulative Layout Shift** | < 0.1 |
| **Animation frame rate** | 60fps sustained |
| **Total page weight** | < 5MB (images optimized) |
| **Time to Interactive** | < 3s on 4G |

### Implementation Checklist

- [x] GPU-accelerated transforms (`translate3d`, `translateZ(0)`)
- [x] `will-change` on animated elements only
- [x] Lazy loading on below-fold images
- [x] Passive scroll event listeners
- [x] CSS animations over JS where possible
- [x] Intersection Observer instead of scroll polling
- [ ] Image optimization (WebP/AVIF with fallbacks) — recommended
- [ ] Preload hero image — recommended

### Bundle Discipline

- No heavy animation libraries — CSS + React state only
- Lucide icons: import only used icons
- No unused dependencies

### Monitoring

Before sharing the link, test on:

1. iPhone Safari (primary mobile)
2. Android Chrome
3. Desktop Chrome / Safari
4. Slow 3G throttled network

---

## 15. Ending Experience

The finale is the reason this exists. Everything builds to this moment.

### Sequence: Final Reveal (`#reveal`)

```
1. Premium gold particles rise (ambient celebration)
2. Cake icon pulses — birthday signal
3. "Happy Birthday" — Playfair, massive, white
4. "Jijeju" — gold gradient, the name lands
5. Personal message — Cormorant italic, gray-300, heartfelt
6. Memory photo grid — 4 images, staggered reveal, hover scale
7. Gift card — glass-gold panel:
      "This documentary was created with love by AdSD"
8. "Watch Again" — gold CTA, scroll to top, replay the story
```

### Emotional Tone

The ending shifts from documentary observer to direct address. The camera turns to face Amantej. The narrator steps out from behind the lens.

**Copy direction:**

- Thank him — for memories, laughter, game nights
- Speak as friends, not filmmakers
- Forward-looking: "Here's to another year of adventures"
- Sign with love: **AdSD**

### Visual Treatment

- Full viewport, centered composition
- Maximum particle density (celebration peak)
- Photo grid as memory montage — the highlight reel
- Glass-gold gift card as the "dedication card" moment

### After the End

- No popup, no share wall, no "sign up for updates"
- **Watch Again** is the only CTA — the story deserves a rewatch
- Music continues through the finale; let it play out

### The Last Frame

The viewer should close the tab (or watch again) feeling:

> *Someone made this for me. Someone knows me. Someone cares.*

That is the birthday gift.

---

## Appendix: Quick Reference

### Project Identity

| Field | Value |
|-------|-------|
| **Title** | WHO IS JIJEJU? |
| **Subtitle** | A Documentary Special |
| **Subject** | Amantej (Jijeju) |
| **Creator** | AdSD |
| **Occasion** | Birthday |
| **Format** | Interactive scroll documentary |
| **Stack** | React + Vite + Tailwind CSS |

### File Structure (Creative Assets)

```
public/assets/images/documentary/   ← All chapter photography
src/index.css                       ← Design tokens, animations, utilities
src/App.tsx                         ← Documentary scenes (sections)
PROJECT_BIBLE.md                    ← This document
```

### Decision Filter

When unsure about any creative choice, ask:

1. Does this feel like a documentary scene?
2. Does this honour Amantej?
3. Would this feel at home on Netflix *and* an Apple stage?
4. Does it perform at 60fps?
5. Does the humour have heart behind it?

If any answer is no — reconsider.

---

*This document is the source of truth for all creative decisions on WHO IS JIJEJU? Update it when the vision evolves. Never ship anything that contradicts it without updating it first.*

**Created with love for Amantej's birthday.**
