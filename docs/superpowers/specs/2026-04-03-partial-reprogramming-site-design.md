# Partial Reprogramming — Interactive Science Explainer

## Overview

A standalone educational website that explains partial reprogramming (cellular rejuvenation) to a general audience through scroll-driven storytelling. Warm editorial aesthetic with animated SVG illustrations.

**Type:** Standalone educational project — neutral science explainer
**Tone:** Human, approachable, trustworthy — science as storytelling, not lecture
**Aesthetic:** Warm Editorial — cream backgrounds, terracotta accents, serif headlines

## Site Structure

Three sections, single navigation:

1. **The Science** — Main scroll-driven storytelling experience (hero page)
2. **The Landscape** — Curated overview of companies, key figures, clinical milestones
3. **The Evidence** — Visual timeline of key papers and breakthroughs

## The Science Scroll — 5-Act Narrative

### Hero / Opening
- Full-bleed cream canvas
- Large serif headline: "Your body is playing a song."
- SVG waveform that distorts/stutters on scroll
- Transition text: "But over time, the music starts to skip."

### Act 1: The Problem — "This is aging"
- Sticky left text, animated right illustration
- SVG cell with DNA strand accumulating epigenetic marks (colored dots) on scroll
- Methylation pattern gets noisier, denser, more chaotic
- Key line: "Every cell in your body accumulates chemical noise on its DNA. Like scratches on a vinyl record."

### Act 2: The Revelation — "The backup copy"
- Pinned text shifts to hopeful pivot
- Noisy DNA strand with faint clean version glowing underneath
- Ghost image reveals layer by layer on scroll
- Key line: "Underneath all that noise, your cells still hold a backup copy of their youthful instructions."

### Act 3: The Mechanism — "Polishing the disc"
- Introduce Yamanaka factors (OSKM) in plain language
- Four factors shown as gentle "pulses" stripping noisy marks from DNA
- Factory Reset (crossed out) vs Reboot (highlighted) visual
- Key line: "Partial reprogramming reboots the cell without erasing its identity."

### Act 4: The Proof — "It works"
- Horizontal timeline scrolling vertically (milestones slide in from right)
- 2006: Yamanaka discovers factors → 2016: Mouse rejuvenation → 2022: $3B floods in → 2026: First human trial
- Terracotta accent on milestone markers
- Small illustrations per milestone

### Act 5: The Threshold — "We are here"
- Full-viewport statement
- Large serif: "The first patients are being treated now."
- Restrained list of active trials and companies
- Closing: "The question is no longer if aging can be reversed. It's when."
- Upward float animation on text

## The Landscape

- 2-column asymmetric card grid (wider/narrower alternating)
- Categories: Companies, Key Figures, Clinical Milestones
- Cards: subtle lift on hover, self-contained (no click-through)
- Generous whitespace, terracotta category labels

## The Evidence

- Vertical alternating left/right timeline
- Thin terracotta center line
- Each entry: year, paper title (linked to DOI), plain-English summary, organism icon
- Scroll-triggered fade-in per entry
- Subtle parallax on center line

## Navigation & Global

- Fixed top bar, transparent → cream+blur on scroll
- Site title left, three text links right
- Typography: Display serif (Playfair Display) + clean sans (Outfit) + mono (JetBrains Mono)
- Footer: minimal, one line, links to sources

## Color Palette

- Background: #faf8f5 (cream)
- Secondary bg: #f0ebe3, #f5ede2
- Accent: #c45d3e (terracotta)
- Text primary: #2a2520 (warm charcoal)
- Text secondary: #6b5e52
- Muted: #b8a898

## Tech Stack

- Next.js 15 (App Router)
- React 19, TypeScript 5
- Tailwind CSS v4
- GSAP (ScrollTrigger) for scroll animations
- SVG illustrations (inline, animated)
- Deployed on Vercel

## File Structure

```
app/
├── page.tsx              (The Science — main scroll)
├── landscape/page.tsx
├── evidence/page.tsx
├── layout.tsx            (nav, footer, fonts)
├── globals.css
components/
├── scroll/              (GSAP ScrollTrigger sections)
│   ├── HeroSection.tsx
│   ├── ActOne.tsx
│   ├── ActTwo.tsx
│   ├── ActThree.tsx
│   ├── ActFour.tsx
│   └── ActFive.tsx
├── svg/                 (animated biological illustrations)
│   ├── Waveform.tsx
│   ├── DnaStrand.tsx
│   ├── EpigeneticMarks.tsx
│   └── YamanakaFactors.tsx
├── ui/                  (cards, timeline, nav)
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Card.tsx
│   └── Timeline.tsx
└── motion/              (reusable animation wrappers)
    └── ScrollReveal.tsx
lib/
└── gsap.ts              (GSAP registration)
public/
└── fonts/
```
