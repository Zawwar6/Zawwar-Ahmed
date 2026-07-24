# Zawwar Ahmed — Portfolio

An award-worthy, black/white/gray developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, GSAP, and Lenis smooth scroll.

## Stack

- **React 18 + Vite** — app shell and build tooling
- **Tailwind CSS** — design tokens, layout, utilities (see `tailwind.config.js`)
- **Framer Motion** — scroll reveals, page transitions, the rotating role text, counters
- **GSAP + ScrollTrigger** — powers the smooth-scroll ticker and is wired up ready for any extra scroll-triggered animation
- **Lenis** — buttery smooth scrolling
- **React Icons** (installed, ready to use for socials/tech icons if you want to swap the text badges for icon marks)

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  components/   All UI sections (Hero, About, Projects, Contact, etc.) — one component per section, fully reusable
  data/         Content as data: projects, tech stack, experience, services, testimonials, certificates
  hooks/        useLenis (smooth scroll), useMagnetic (magnetic button physics)
  animations/   Shared GSAP scroll-reveal helper
  constants/    Nav links, socials, contact info
```

## Customizing

- **Your info**: edit `src/constants/links.js` (email, phone, location, socials) and the copy inside `Hero.jsx` / `About.jsx`.
- **Projects**: edit `src/data/projects.js` — swap in real screenshots by replacing the gradient placeholder in `ProjectCard` (in `Projects.jsx`) with an `<img>`.
- **Resume**: the "Download Resume" button in `Hero.jsx` points to `/resume.pdf` — drop your resume file into the `public/` folder (create it if it doesn't exist) with that name, or update the `href`.
- **Colors/fonts**: all design tokens live in `tailwind.config.js` under `theme.extend`.
- **Avatar**: the circular hero avatar currently shows initials on a radial-gradient disc — swap it for a real photo by replacing the inner `div` in `Hero.jsx` with an `<img>` inside the same rounded container.

## Notes

- The custom cursor and grain overlay automatically disable on touch devices and respect `prefers-reduced-motion`.
- The signature interaction is the **cursor-tracked spotlight** in the hero — a soft light that follows the mouse across the black canvas, like walking through a dark gallery toward the work.
- The GitHub contribution grid and repo list are illustrative placeholders — wire them to the real GitHub API if you'd like live data.
