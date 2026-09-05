# Portfolio (Next.js)

Personal portfolio for Janindu Amarasekara: a single landing page with experience, skills, and contact details.

## Prerequisites

- Node.js 20+
- npm

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize content

Edit [`lib/site.ts`](lib/site.ts): name, title, social URLs, email, skills, jobs, case studies, and projects. Add a headshot under `public/` (for example `public/avatar.jpeg`) and set `person.avatarSrc` to `"/avatar.jpeg"`. Add a résumé file under `public/` (for example `public/cv.pdf`) and set `person.cvPath` to `"/cv.pdf"`.

## Environment variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | **Yes** in production | Canonical URL for metadata, `sitemap.xml`, `robots.txt`, and JSON-LD (no trailing slash), e.g. `https://yourdomain.com` |

Preview deployments are marked `noindex` automatically when `VERCEL_ENV` is not `production`.

## Deploy on Vercel

1. Push this repository to GitHub (or GitLab / Bitbucket).
2. In Vercel, **Add New Project** and import the repo; framework preset **Next.js**.
3. Under **Settings → Environment Variables**, add `NEXT_PUBLIC_SITE_URL` (your production URL).
4. Deploy the default production branch (usually `main`).

After the first deploy, confirm:

- `https://YOUR_DOMAIN/sitemap.xml`
- `https://YOUR_DOMAIN/robots.txt`
- `https://YOUR_DOMAIN/opengraph-image`

Then submit the sitemap in [Google Search Console](https://search.google.com/search-console).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — run production build locally
- `npm run lint` — ESLint

## Stack

Next.js (App Router), TypeScript, Tailwind CSS v4.
