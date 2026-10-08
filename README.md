# Octave Eight Fulfillment Website

Marketing/lead-generation website for a pre-launch Northern California 3PL, built with
Next.js (App Router) + TypeScript.

## Local setup

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in real values:

```bash
NEXT_PUBLIC_CONTACT_EMAIL=arjun.singh@8octave.com   # defaults to this if unset
GMAIL_USER=arjun.singh@8octave.com                  # sending address (Google Workspace)
GMAIL_APP_PASSWORD=                                  # Google App Password, not your login password
```

- The contact form delivers to `arjun.singh@8octave.com` by default (see
  `siteConfig.contactEmail` in [lib/site-config.ts](lib/site-config.ts)). Override
  with `NEXT_PUBLIC_CONTACT_EMAIL` if that ever changes.
- The contact form is implemented as a Next.js server action in
  [lib/actions.ts](lib/actions.ts) using Google Workspace / Gmail SMTP via
  [nodemailer](https://nodemailer.com). It validates input locally, and until
  GMAIL_USER / GMAIL_APP_PASSWORD are set it returns a clear
  "not configured" message rather than faking a successful submission.
- To enable sending: turn on 2-Step Verification on the Google account, generate
  an App Password at https://myaccount.google.com/apppasswords, then set
  GMAIL_USER and GMAIL_APP_PASSWORD in .env.local (and in your hosting
  provider's env settings) to go live.

## Editing site content

All copy, pricing, services, FAQs, and other editable content live in
[lib/site-config.ts](lib/site-config.ts) so founders can update the site without
touching component/JSX files. Key exports:

- `siteConfig` — name, tagline, region, contact email, same-day cutoff time
- `services`, `whyPoints`, `processSteps` — core marketing sections
- `proposedPricing`, `secondaryRates`, `pricingNote` — pricing table + fine print
- `faqs`, `idealClientPoints`, `footerLinks`

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, "Add New Project" and import the GitHub repo.
3. Set the environment variables (NEXT_PUBLIC_CONTACT_EMAIL, and GMAIL_USER /
   GMAIL_APP_PASSWORD if using it) in the Vercel project settings.
4. Deploy. Vercel auto-detects the Next.js framework — no extra build config needed.

## Before public launch — founder TODOs

- [ ] Confirm final business name / complete trademark & domain checks (current name is a working name only).
- [ ] Set `GMAIL_USER` / `GMAIL_APP_PASSWORD` in production (Vercel project settings) to activate real contact-form email delivery to `arjun.singh@8octave.com`.
- [ ] Write real Privacy Policy / Terms of Service pages and update the links in [lib/site-config.ts](lib/site-config.ts) (`footerLinks`).
- [ ] Confirm/finalize pricing figures in [lib/site-config.ts](lib/site-config.ts) (`proposedPricing`, `secondaryRates`).
- [ ] Revisit the "working name" / pre-launch disclaimers in the footer once terms are final.
- [ ] Add a physical warehouse address only once one is actually selected (needed before adding JSON-LD `LocalBusiness` schema).
