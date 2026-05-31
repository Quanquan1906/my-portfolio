# Minh Quân Đỗ — Personal Portfolio

One-page landing portfolio for **Minh Quân Đỗ**, a Researcher & Frontend Engineer specializing in interpretable AI systems, physiological signal processing, and modern web development.

Live at: [http://localhost:3000](http://localhost:3000) (local) · Deployable to Vercel

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| UI Components | shadcn/ui (Badge, Button) |
| Animation | Framer Motion 12 + CSS keyframes |
| Icons | Lucide React |
| Package Manager | pnpm |

---

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). The page auto-updates on save.

### Other commands

```bash
pnpm build    # production build
pnpm start    # serve production build
pnpm lint     # ESLint check
```

---

## Project Structure

```
src/
├── app/
│   ├── (site)/
│   │   └── page.tsx              # Entry point → renders HomePageContainer
│   ├── globals.css               # Design tokens, keyframe animations
│   └── layout.tsx                # Root layout: MotionProvider + SiteShell
│
├── components/
│   ├── common/
│   │   ├── Footer.tsx            # Logo, copyright, social links
│   │   ├── MotionProvider.tsx    # Framer Motion config (reducedMotion: "user")
│   │   ├── Navbar.tsx            # Sticky header with anchor links
│   │   ├── Reveal.tsx            # Scroll-triggered fade + slide animation
│   │   ├── SectionHeading.tsx    # Reusable eyebrow + h2 heading
│   │   ├── SiteShell.tsx         # Layout: Navbar + main + Footer
│   │   └── TypewriterText.tsx    # Character-by-character typing effect
│   │
│   ├── home/
│   │   ├── HeroSection.tsx       # Intro, typewriter headline, animated avatar
│   │   ├── ThankYouMarquee.tsx   # Scrolling text strip below hero
│   │   ├── AboutSection.tsx      # Bio + 4 expertise cards
│   │   ├── ResearchSection.tsx   # Publications grid
│   │   ├── ProjectsSection.tsx   # Projects grid
│   │   ├── SkillsSection.tsx     # 3-column skill groups
│   │   └── ContactSection.tsx    # CTA card with email link
│   │
│   ├── research/
│   │   ├── ResearchCard.tsx      # Publication card with lightbox support
│   │   └── ImageLightbox.tsx     # Modal image viewer (Escape / click-outside)
│   │
│   ├── projects/
│   │   └── ProjectCard.tsx       # Project card with tech badges and links
│   │
│   └── ui/
│       ├── badge.tsx             # shadcn/ui Badge
│       └── button.tsx            # shadcn/ui Button
│
├── containers/
│   └── home/
│       └── HomePageContainer.tsx # Assembles all landing page sections
│
├── data/
│   ├── publications.ts           # 3 research publications
│   └── projects.ts               # 4 featured engineering projects
│
├── types/
│   ├── publication.ts            # Publication, PublicationStatus, PublicationType
│   └── project.ts                # Project, ProjectLink
│
└── lib/
    └── utils.ts                  # cn() utility (clsx + tailwind-merge)
```

---

## Page Sections

The portfolio is a single scrollable page. All navigation uses anchor links.

| # | Section | Anchor | Description |
|---|---------|--------|-------------|
| 1 | Hero | `#home` | Typewriter headline, animated avatar with pulsing rings, CTA buttons |
| 2 | Thank You Marquee | — | Infinite scrolling text strip (pauses on hover) |
| 3 | About | `#about` | Bio + expertise cards: AI Research, AI Application Dev, Frontend, Full-Stack |
| 4 | Research | `#research` | Conference papers & research posters with PDF/poster/certificate links |
| 5 | Projects | `#projects` | Engineering projects with tech stack badges and GitHub/demo links |
| 6 | Skills | `#skills` | Research & AI · Interfaces · Infrastructure |
| 7 | Contact | `#contact` | "Discussing the future of human-AI synergy" + email CTA |

---

## Data

### Publications (`src/data/publications.ts`)

| Title | Venue | Year | Status |
|-------|-------|------|--------|
| Multi-Scale Feature Extraction for Cognitive Load Classification | TAAI 2025 | 2025 | Accepted |
| An Efficient Vibe Coding Process for AI-Assisted Software Development | SCFF26 | 2026 | Accepted |
| Application of Bayesian Networks for Classifying Cognitive Load Signals | Student Scientific Research Prize 2025 | 2025 | Accepted |

### Projects (`src/data/projects.ts`)

| Title | Category | Tech |
|-------|----------|------|
| Fast Food Microservices | Full-stack / Microservices | TypeScript, Docker, Kafka, API Gateway |
| Goshu HRM Platform | Full-stack / HRM System | Next.js, Node.js, Express, MongoDB |
| FinTrack AI | Full-stack / Finance | React, FastAPI, Python, Google Gemini AI |
| Todo List | Frontend / Angular | Angular, TypeScript, SCSS |

---

## Design System

**Theme:** Dark navy (dark blue)

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#0c1324` | Page background |
| `--surface` | `#151b2d` | Cards, elevated surfaces |
| `--foreground` | `#f0f2f5` | Primary text |
| `--muted-foreground` | `#8f909a` | Secondary text |
| `--border` | `#444651` | Standard borders |
| `--secondary` | `#1e2b45` | Blue-tinted panels |

**Fonts:** Geist Sans (body) · JetBrains Mono (code, labels, monospaced elements)

**Accent:** `blue-400 / blue-200 / blue-500` variants used for highlights, glows, and badges

---

## Animations

| Animation | Location | Detail |
|-----------|----------|--------|
| Avatar bounce | `globals.css` → `HeroSection` | 2.2s ease-in-out infinite vertical float |
| Pulsing rings | `HeroSection` | 2 concentric Framer Motion rings (2.6s / 3s infinite scale + opacity) |
| Typewriter | `TypewriterText` | 35ms/char, 700ms start delay, blinking cursor |
| Scroll reveal | `Reveal` | fade-in + slide-up (y: 24px → 0) on viewport entry, once |
| Marquee scroll | `globals.css` → `ThankYouMarquee` | 25s linear infinite, pauses on hover |

All animations respect `prefers-reduced-motion` via Framer Motion's `MotionConfig`.

---

## Navigation

Navbar links (desktop, hidden on mobile):

```
About → #about
Research → #research
Projects → #projects
Contact → #contact
```

Footer social links:

```
GitHub  → https://github.com/Quanquan1906
LinkedIn → https://linkedin.com/in/minhdoqua
Email   → doquan19062004@gmail.com
```

---

## Deploy

The fastest way to deploy is [Vercel](https://vercel.com/new):

```bash
pnpm build   # verify build passes locally first
```

Then push to GitHub and import the repo into Vercel. No extra configuration required — Next.js App Router is detected automatically.
