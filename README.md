# Portfolio (Next.js)

Personal portfolio site: single landing page with anonymized experience, case studies, project placeholders, and a contact path that can use [Resend](https://resend.com) on [Vercel](https://vercel.com).

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

Edit [`lib/site.ts`](lib/site.ts): name, title, social URLs, email, skills, jobs, case studies, and projects. Add a headshot under `public/` (for example `public/avatar.jpg`) and set `person.avatarSrc` to `"/avatar.jpg"`. Add a résumé file under `public/` (for example `public/cv.pdf`) and set `person.cvPath` to `"/cv.pdf"`.

## Environment variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | **Yes** in production | Canonical URL for metadata, `sitemap.xml`, and `robots.txt` (no trailing slash), e.g. `https://yourdomain.com` |
| `RESEND_API_KEY` | For contact form email | Resend API key (`re_...`) |
| `CONTACT_TO_EMAIL` | With Resend | Inbox that receives contact form submissions |
| `CONTACT_FROM_EMAIL` | Optional | Verified sender in Resend, e.g. `Portfolio <onboarding@resend.dev>` or your domain |

If Resend variables are missing, the form still validates input but responds with a message to use the direct `mailto:` link shown beside the form.

## Deploy on Vercel

1. Push this repository to GitHub (or GitLab / Bitbucket).
2. In Vercel, **Add New Project** and import the repo; framework preset **Next.js**.
3. Under **Settings → Environment Variables**, add `NEXT_PUBLIC_SITE_URL` (production URL) and, if you want email, `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and optionally `CONTACT_FROM_EMAIL`.
4. Deploy the default production branch (usually `main`).

After the first deploy, confirm `https://YOUR_DOMAIN/sitemap.xml` and `https://YOUR_DOMAIN/robots.txt`.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — run production build locally
- `npm run lint` — ESLint

## Stack

Next.js (App Router), TypeScript, Tailwind CSS v4.
