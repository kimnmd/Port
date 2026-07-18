# HR Leadership Portfolio

A fast, accessible portfolio site built with **Next.js 14 (App Router)** and **Tailwind CSS**.
All copy lives in one file so you can edit words without touching components.

## Run it locally

Node.js 18+ is required. This machine has a portable copy at `C:\Users\Public\node-portable`.
If `node` isn't on your PATH, add it once (PowerShell), then open a new terminal:

```powershell
[Environment]::SetEnvironmentVariable("Path","C:\Users\Public\node-portable;"+[Environment]::GetEnvironmentVariable("Path","User"),"User")
```

Then:

```powershell
npm install      # first time only
npm run dev      # http://localhost:3000
npm run build    # production build check
```

## Editing content

**Everything you'll want to change is in [`src/lib/content.ts`](src/lib/content.ts).**
No component edits needed for copy changes.

### Before you deploy — fill these in

| What | Where in `content.ts` |
| --- | --- |
| Your name (header, hero, footer, page titles) | `site.name` |
| LinkedIn URL | `site.linkedin` |
| Case Study 1 — real tools list | `caseStudies[0].tools` |
| Real résumé PDF | replace `public/resume-placeholder.pdf` |

Contact email is already set to `djkcasper@gmail.com` (`site.email`). No phone number is shown anywhere, by design.

### Adding screenshots later

Each case study has a visual placeholder slot. Drop an image into `public/`,
then swap the `<VisualPlaceholder>` in [`src/app/work/[slug]/page.tsx`](src/app/work/%5Bslug%5D/page.tsx)
for a Next.js `<Image>`. **Use fabricated sample data in every screenshot.**

## Design

- Accent: **deep teal** (single accent color, defined in `tailwind.config.ts` + `globals.css`).
- Fonts: **Fraunces** (display) + **Inter** (body), via `next/font`.
- Dark mode: system-preference default, toggle in the nav, persisted to `localStorage`, no flash on load.
- Scroll animations: subtle fade-up reveals + count-up metrics; all respect `prefers-reduced-motion`.

## Privacy rules (baked in)

No real employee names, salary data, policy/claim numbers, cost-center codes, or carrier
identifiers appear anywhere. Dollar figures are ranges/qualitative only ("six-figure").
Employer is referenced generically. Case study pages carry a confidentiality footnote.

## Deploy to Vercel

See the "Deploy" section below (or the chat) for step-by-step instructions.

1. `npm i -g vercel` (or use the Vercel dashboard + Git).
2. From this folder: `vercel` (first run links/creates the project), then `vercel --prod`.
3. Or push to GitHub and "Import Project" at vercel.com — zero config; Next.js is auto-detected.
