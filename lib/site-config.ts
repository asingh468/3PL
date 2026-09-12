// Central editable site content and configuration.
// Founders can edit copy, pricing, services, and messaging here without
// needing to touch component/JSX files.

export const siteConfig = {
  name: "Octave Logistics",
  shortName: "Octave Logistics",
  tagline: "Fast, hands-on fulfillment for growing ecommerce brands.",
  region: "Northern California",
  // Set via NEXT_PUBLIC_CONTACT_EMAIL in .env.local. Leave blank until a real
  // business email exists -- do not publish a placeholder/fake address.
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
};

// Hero supporting highlights -- shown as a compact list under the hero copy.
export const heroHighlights = [
  "Northern California fulfillment",
  "Direct human support, not ticket queues",
  "Transparent, straightforward pricing",
  "Shopify & ecommerce integration",
];

// Trust / credibility strip, immediately after the hero.
export const trustHighlights = [
  {
    title: "Same-Day Fulfillment",
    body: "Eligible orders can qualify for same-day fulfillment, subject to service agreement and carrier cutoffs.",
  },
  {
    title: "Direct Human Support",
    body: "Clients speak directly with the people who actually know their account -- not a rotating support queue.",
  },
  {
    title: "Transparent Pricing",
    body: "Straightforward fulfillment and storage pricing without confusing fee structures or surprise charges.",
  },
  {
    title: "Real-Time Visibility",
    body: "Connected ecommerce and inventory systems give you visibility into orders and stock as they move.",
  },
];

// "How it works" -- horizontal on desktop, vertical timeline on mobile.
export const processSteps = [
  {
    title: "Connect Store",
    body: "Your Shopify store (and inventory data) connects into our operating workflow.",
  },
  {
    title: "Send Inventory",
    body: "Inventory ships to our facility and is logged as it arrives.",
  },
  {
    title: "We Store & Manage",
    body: "Inventory is received, counted, and organized so it's ready to fulfill accurately.",
  },
  {
    title: "Orders Sync Automatically",
    body: "Ecommerce orders flow directly into the fulfillment queue -- no manual re-entry.",
  },
  {
    title: "Pick, Pack & Ship",
    body: "Orders are picked, packed, and handed to carriers, with status communicated back to you.",
  },
];

export const sameDayCallout = {
  title: "Same-day fulfillment, when it counts",
  body: "Eligible orders can qualify for same-day fulfillment, subject to your service agreement, operational capacity, and carrier cutoff times. This is not an unconditional guarantee -- it's an operating target we build our workflow around.",
};

// Services, grouped so the section doesn't become a wall of equal cards.
export const serviceGroups = [
  {
    group: "Inbound",
    items: [
      { title: "Receiving", body: "Inbound shipments are logged and inspected as they arrive." },
      { title: "Storage", body: "Flexible storage that scales with your SKU count and volume." },
      { title: "Inventory management", body: "Accurate, up-to-date counts you can see anytime." },
    ],
  },
  {
    group: "Outbound",
    items: [
      { title: "Pick & pack", body: "Orders picked and packed with consistent quality control." },
      { title: "Shipping handoff", body: "Reliable carrier handoff, including same-day options for eligible orders." },
      { title: "Returns", body: "Returns are received, inspected, and put back into rotation or dispositioned." },
    ],
  },
  {
    group: "Value-added",
    items: [
      { title: "Kitting & projects", body: "Light kitting, bundling, and special projects as your catalog grows." },
    ],
  },
];

export const productScopeNote =
  "Launch service is available for eligible non-regulated, non-hazardous consumer goods. Regulated categories (food, supplements, pharmaceuticals, alcohol, cannabis, hazardous materials, refrigerated goods) are not currently supported.";

// "Why choose us" comparison -- large 3PL vs. Octave Logistics.
export const comparison = {
  large: {
    label: "Large 3PL",
    points: [
      "Ticket-based support queues",
      "Complicated, opaque fee structures",
      "Smaller brands become low priority",
      "Limited flexibility as you grow",
    ],
  },
  ours: {
    label: siteConfig.shortName,
    points: [
      "Direct communication with real people",
      "Transparent, straightforward pricing",
      "Hands-on, white-glove support",
      "Regional accessibility and a customer-first approach",
    ],
  },
};

// Regional / Northern California advantage section.
export const regionalAdvantage = {
  eyebrow: "Regional advantage",
  heading: "A strategic Northern California location.",
  body: "Being based in Northern California means convenient regional access for West Coast brands, efficient shipping to major population centers, and the ability to build a closer relationship with the team actually handling your inventory.",
  points: [
    "Strategic Northern California location",
    "Convenient access for regional brands",
    "Efficient West Coast shipping reach",
    "A closer relationship with your fulfillment provider",
  ],
};

// Human-first service section -- one of the strongest message sections.
export const humanService = {
  eyebrow: "Human, not a black box",
  heading: "Your inventory shouldn't disappear into a black box.",
  body: "When something needs attention, you talk to a person who already knows your account -- not a new agent starting from zero every time. We proactively communicate issues before they become problems, instead of waiting for you to ask.",
  points: [
    "Direct access to the people running your fulfillment",
    "Proactive communication when something needs attention",
    "No anonymous ticket queues or scripted responses",
    "A team that grows with you, not around you",
  ],
};

export type PricingTier = {
  name: string;
  orders: string;
  base: string;
  extra: string;
};

// Public pricing intentionally does not list dollar figures. Tiers are shown
// so prospects understand volume-based pricing exists, without exposing
// exact rates to competitors or every visitor. Quotes are provided directly.
export const proposedPricing: PricingTier[] = [
  { name: "Starter", orders: "1-499 orders/mo", base: "Custom quote", extra: "Request pricing" },
  { name: "Growth", orders: "500-1,499 orders/mo", base: "Custom quote", extra: "Request pricing" },
  { name: "Scale", orders: "1,500-4,999 orders/mo", base: "Custom quote", extra: "Request pricing" },
  { name: "Enterprise", orders: "5,000+ orders/mo", base: "Custom quote", extra: "Talk to the founding team" },
];

// Internal/planning rates -- do not display these publicly. Kept here only
// for founders' reference; no component currently renders this list.
export const secondaryRates = [
  { label: "Receiving", value: "$45 / hr" },
  { label: "Pallet storage", value: "$30 / mo" },
  { label: "Shelf storage", value: "$20 / mo" },
  { label: "Bin storage", value: "$8 / mo" },
  { label: "Basic returns", value: "$5 / return" },
  { label: "Simple kitting", value: "$2 / completed kit" },
  { label: "Special projects", value: "$55 / hr + materials" },
  { label: "Packaging & postage", value: "Quoted separately" },
];

export const pricingNote =
  "Higher volume unlocks better per-order pricing -- service quality stays consistent across every tier. Pricing is quoted directly based on your volume, storage footprint, packaging, receiving complexity, and returns rate.";

export const idealClientPoints = [
  "Shopify / ecommerce brand selling physical consumer goods",
  "Roughly 100+ monthly orders, with room to scale",
  "Currently self-fulfilling or looking for more responsive service from an existing 3PL",
  "Values direct, regional communication and access",
];

export const faqs = [
  {
    question: "What kinds of products do you handle?",
    answer:
      "We handle ordinary, non-regulated, non-hazardous consumer goods. We are not able to support food, supplements, pharmaceuticals, alcohol, cannabis, hazardous materials, or refrigerated goods at launch.",
  },
  {
    question: "Do you work with Shopify?",
    answer:
      "Yes -- Shopify and WMS-connected workflows are central to how we operate, so orders and inventory stay in sync without manual re-entry.",
  },
  {
    question: "How does same-day fulfillment work?",
    answer:
      "Eligible orders can qualify for same-day fulfillment, subject to your service agreement, our operational capacity, and carrier cutoff times.",
  },
  {
    question: "Do I need a minimum order volume?",
    answer:
      "Our initial focus is brands doing roughly 100 or more orders per month, with room to grow into higher volume tiers over time.",
  },
  {
    question: "Can I use my own carrier account?",
    answer:
      "This is something we can discuss during your fit review -- let us know your current carrier setup and we'll talk through the options.",
  },
  {
    question: "Can I visit my inventory / facility?",
    answer:
      "Facility visits can be coordinated once the operating location and client agreement allow it.",
  },
];

export const finalCta = {
  heading: "Ready to simplify your fulfillment?",
  body: "Tell us about your current order volume and fulfillment needs.",
};

export const footerLinks = {
  privacy: { label: "Privacy Policy", href: "#", todo: true },
  terms: { label: "Terms of Service", href: "#", todo: true },
};
