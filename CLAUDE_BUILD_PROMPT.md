# Prompt to give Claude in VS Code

You are working inside an existing Next.js + TypeScript project for a pre-launch Northern California 3PL called **Octave Eight Fulfillment**. Before changing code, read `PROJECT_CONTEXT.md`, `lib/site-config.ts`, and the existing `app` files.

Your job is to turn this starter into a polished, production-quality marketing website that can be deployed to Vercel from GitHub.

## Product / business context
Use `PROJECT_CONTEXT.md` as the source of truth. Do not invent customers, certifications, warehouse locations, carrier partnerships, years in business, guarantees, or technology that the company has not actually finalized.

The name **Octave Eight Fulfillment** is a working name. The concept comes from an octave in music and the fact that there are eight founders. Use that idea subtly: rhythm, coordination, precision, multiple parts working as one. Do not make the site look music-themed.

The company is a regional ecommerce/Shopify 3PL for Northern California. Initial focus is ordinary non-regulated physical goods. Core services include receiving, storage, inventory handling, pick/pack/ship, carrier handoff, returns, and responsive support. The company is still pre-launch and is evaluating WMS options, so do not name a WMS as final.

Same-day fulfillment should be described carefully as: **same-day fulfillment options for eligible orders received before 3 PM, subject to service agreement, operational capacity, and carrier cutoff times.** Do not write an unconditional guarantee.

## Website goal
Build a site that converts ecommerce founders/operators into qualified conversations. The visitor should quickly understand:
1. Who we serve.
2. What we do.
3. Why a boutique regional 3PL can be better than a huge provider.
4. How pricing roughly works.
5. How to contact the founders.

## Design direction
- High-end B2B logistics aesthetic.
- Calm, modern, precise, credible.
- Lots of whitespace, excellent typography, strong hierarchy.
- Deep navy / slate / warm white palette with one restrained accent.
- Responsive mobile-first layout.
- No generic gradient-heavy AI startup look.
- No excessive animation. Use subtle hover/scroll effects only if they add polish.
- Accessibility: semantic HTML, good contrast, keyboard focus states, reduced-motion friendly.
- Performance: no unnecessary libraries, no huge client bundle.

## Required pages / sections
You may keep this as a strong single-page site initially, but structure components so additional pages can be added later.

### Header
- Working logo/wordmark for Octave Eight Fulfillment using text/CSS only.
- Nav: Services, Why Us, Pricing, Process, Contact.
- CTA: "Talk to the founding team".

### Hero
Create a confident but grounded headline. Example direction, not mandatory:
**Fulfillment that keeps growing brands in rhythm.**
Supporting copy should emphasize Northern California, responsive service, Shopify/ecommerce fulfillment, and direct human communication.

CTA buttons:
- Request a fulfillment review
- See how it works

### Trust / positioning strip
Do not fabricate logos or customers. Instead use proof-style statements such as:
- Northern California focus
- Human-first support
- Shopify/WMS connected workflows
- Simple volume-based pricing

### Services
Present the launch services clearly:
- Receiving & putaway
- Storage & inventory handling
- Pick, pack & ship
- Returns processing
- Optional simple kitting / project work
- Client communication / account support

Keep regulated/hazardous categories out of the sales copy. Add a concise note that launch service is for eligible non-regulated, non-hazardous consumer goods.

### Why Octave Eight
Build the differentiation around:
- Direct human communication
- Regional accessibility
- Boutique attention
- Clear expectations
- A team-oriented operating model
Do not say 24/7 support or guaranteed response times unless supplied in config.

### How it works
Create a simple 4–5 step flow:
1. Discovery / fit review
2. Connect store and inventory data
3. Receive and organize inventory
4. Orders flow to fulfillment
5. Pick, pack, ship, and keep the client informed

### Same-day fulfillment callout
Explain that eligible orders received before 3 PM can qualify for same-day fulfillment under the client’s service agreement and carrier cutoff availability.

### Pricing
Use the values from `lib/site-config.ts` as editable planning rates. Make it clear that pricing is preliminary / starting pricing and final quotes depend on actual volume, storage, packaging, receiving, returns, and operating requirements.

Keep public pricing simple:
- Starter: 100–499 orders/mo — $3.50/order
- Growth: 500–1,499 — $3.25/order
- Scale: 1,500–4,999 — $3.00/order
- Enterprise: 5,000+ — custom
- Additional unit: +$0.60

Do not overload the public page with every fee. Add a small expandable or secondary list for receiving, storage, returns, kitting, packaging, and postage if helpful.

### Ideal client section
Describe brands that are a good initial fit:
- Shopify/ecommerce
- Physical consumer goods
- Roughly 100+ monthly orders
- Wants to stop self-fulfilling or wants more responsive service from a current 3PL
- Values regional communication/access

### Contact / lead form
Create a clean lead form with:
- Name
- Company
- Email
- Store URL
- Approx monthly orders
- Product type
- Current fulfillment method (self-fulfilling / another 3PL / other)
- What they want help with

Do NOT fake successful submissions. Implement one of these approaches:
A. If no backend/email provider is configured, make the form validate locally and clearly show a TODO/configuration message.
B. Preferably create a simple server action endpoint scaffold that is ready for Resend or another email provider, but keep it disabled until environment variables are supplied.
Document required environment variables in `.env.example` and README.

### FAQ
Add concise FAQs for:
- What kinds of products do you handle?
- Do you work with Shopify?
- How does same-day fulfillment work?
- Do I need a minimum order volume?
- Can I use my own carrier account?
- Can I visit my inventory / facility? (Phrase carefully: "facility visits can be coordinated once the operating location and client agreement allow it"; do not promise a current warehouse.)

### Footer
- Working company name
- Northern California
- Contact CTA
- Placeholder privacy/terms links, clearly marked TODO if pages are not written yet
- Small note that business name and final service terms are subject to launch/final agreements only if appropriate for pre-launch environment; remove or soften before public launch.

## Code requirements
- Use Next.js App Router + TypeScript.
- Prefer server components unless interactivity requires client components.
- Keep site data/content in a central config/data file so founders can edit prices, services, email, and copy without hunting through JSX.
- Create reusable components (`Header`, `Hero`, `Services`, `Pricing`, `Process`, `FAQ`, `ContactForm`, `Footer`).
- Keep dependencies minimal.
- Use CSS variables/design tokens and responsive CSS. You may keep plain CSS or introduce Tailwind only if you fully configure it and it materially improves maintainability.
- Add metadata / Open Graph basics.
- Add good SEO copy for Northern California 3PL, ecommerce fulfillment, Shopify fulfillment, and regional fulfillment without keyword stuffing.
- Add JSON-LD only if it can be done accurately without inventing a physical address.
- Do not add stock customer testimonials, fake numbers, fake reviews, or fake partner logos.
- Do not add a warehouse address until one is actually selected.
- No placeholder lorem ipsum.

## Work process
1. Inspect the existing project and summarize your implementation plan in 6–10 bullets.
2. Then implement the site directly in the project files.
3. Run or reason through TypeScript/build errors and fix them.
4. Keep a concise `README.md` with local setup and Vercel deployment steps.
5. Add `.env.example` for contact email / optional email provider config.
6. At the end, summarize what you changed, what still requires founder decisions, and exactly which values I should edit before public launch.

Do not stop at a mockup or explanation. Build the working site.
