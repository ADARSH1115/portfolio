# Adarsh Kumar — Software Engineer Portfolio

A responsive, editorial portfolio built with Next.js App Router, TypeScript, Tailwind CSS 4, and Lucide icons. Static content uses Server Components. Only navigation and optional entrance effects require client JavaScript. No tracking or submission service is included.

## Run locally

Use Node.js 20.9 or newer and npm (the lockfile is committed for reproducible installations).

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Production checks and serving:

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Content and configuration

- `data/site.ts`: name, email, GitHub, LinkedIn, resume path, optional verified availability, skill groups. Contact uses mailto and opens the visitor's email client.
- `data/projects.ts`: the four curated project descriptions, engineering notes, technologies, optional `github` and `demo` URLs. Add verified destinations to each object; unavailable links are omitted entirely.
- `app/page.tsx`: hero, experience, about, and education copy.
- `components/visuals.tsx`: original lightweight architecture illustrations. These are labeled conceptual diagrams, not screenshots or live telemetry.
- `app/globals.css`: design tokens, responsive layouts, focus styles, and reduced-motion behavior.
- Resume links are disabled (`site.resume` is empty). No resume PDF or personal phone number is published. Private documents belong outside `public/`; `private/` and `public/*.pdf` are ignored by Git.

Selected work features DreamX, Gaming Leaderboard, Smart Twin, and Quiz Masters. Public source links and the DreamX/Quiz Masters deployment URLs were taken from GitHub. Smart Twin remains internship work without a supplied public repository. Performance and model accuracy claims are omitted. Both deployment homepages were verified to load in a browser on October 20, 2026; end-to-end application flows were not tested.

## Domain and SEO

Copy `.env.example` to `.env.local` and set `SITE_URL` to your real deployment origin, for example the HTTPS URL assigned by your host. Do not include a path. This is a server-only variable and is not exposed using a NEXT_PUBLIC prefix.

Without `SITE_URL`, the site deliberately omits canonical URLs and emits an empty sitemap instead of inventing a domain. After configuring it, rebuild to generate the canonical URL, sitemap, and robots sitemap reference. Title, description, generated social-sharing images, and icon work independently. Person JSON-LD only includes verified profile information.

## Deploy

Import this repository into Vercel, select the Next.js preset, and set `SITE_URL` in the production environment. The standard build command is `npm run build`; no custom output directory is needed. Alternatively, run `npm run build` and `npm start` on a Node-compatible host.

To connect a custom domain, add the domain in your host's project settings, apply the exact DNS records it provides at your domain registrar, and wait for HTTPS provisioning. Update `SITE_URL` to the canonical HTTPS domain and redeploy. No deployment is performed by this implementation.

## Accessibility and motion

Semantic sections, a skip link, focus outlines, native expandable project notes, accessible mobile navigation with Escape-to-close, and reduced-motion support are included. Scroll reveals use IntersectionObserver and Web Animations; content is visible before and without those effects. CSS provides all layout and responsive behavior. Fonts use the system stack, avoiding external font requests.

## Before launch

1. Confirm the public email and social links in `data/site.ts`.
2. Recheck the configured repository/demo destinations before launch.
3. Configure `SITE_URL` and rebuild.
4. Keep private documents and phone numbers out of the public repository.
5. Run production checks and browser QA after future changes. Lighthouse scores should be measured on the deployed build, not assumed.

## Validation notes

The build uses Next.js's supported webpack builder. Turbopack initially built successfully, but subsequent builds hit an internal worker-port permission error in this desktop environment; webpack avoids that environment-specific failure.

Browser checks covered 320px, 768px, and 1440px widths without document overflow, existing internal anchor targets, mobile menu expansion and Escape closure, and expandable engineering notes. No console warnings or errors were observed in the initial production browser checks. Reduced-motion behavior is explicitly implemented in CSS and the reveal component. Lighthouse and automated WCAG audits were not run; no scores are claimed.

## Recruiter-focused update validation

Lint, TypeScript, and the production build passed. Browser checks confirmed the curated project order, valid internal anchors, keyboard expansion of engineering notes, and mobile menu Escape closure with focus restoration. Layouts at 320px, 768px, and 1440px showed no document overflow. Both linked demo homepages loaded. Set SITE_URL before deployment to resolve the existing metadata-base warning.
