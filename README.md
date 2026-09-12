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
NEXT_PUBLIC_CONTACT_EMAIL=your-real-business-email@example.com
RESEND_API_KEY=   # optional, enables the contact form to actually send email
```

- Do not publish a fake contact email. The footer/CTA mailto link and the contact
  form both stay in a clearly-labeled "not configured" state until real values are set.
- The contact form is implemented as a Next.js server action in
  [lib/actions.ts](lib/actions.ts). It validates input locally and returns a clear
  message if `RESEND_API_KEY` / `NEXT_PUBLIC_CONTACT_EMAIL` aren't set — it never
  fakes a successful submission.

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
3. Set the environment variables (`NEXT_PUBLIC_CONTACT_EMAIL`, and `RESEND_API_KEY`
   if using it) in the Vercel project settings.
4. Deploy. Vercel auto-detects the Next.js framework — no extra build config needed.

## Before public launch — founder TODOs

- [ ] Confirm final business name / complete trademark & domain checks (current name is a working name only).
- [ ] Set a real `NEXT_PUBLIC_CONTACT_EMAIL`.
- [ ] Configure `RESEND_API_KEY` (or another provider) and wire up the TODO block in [lib/actions.ts](lib/actions.ts) if you want the form to send real email.
- [ ] Write real Privacy Policy / Terms of Service pages and update the links in [lib/site-config.ts](lib/site-config.ts) (`footerLinks`).
- [ ] Confirm/finalize pricing figures in [lib/site-config.ts](lib/site-config.ts) (`proposedPricing`, `secondaryRates`).
- [ ] Revisit the "working name" / pre-launch disclaimers in the footer once terms are final.
- [ ] Add a physical warehouse address only once one is actually selected (needed before adding JSON-LD `LocalBusiness` schema).
