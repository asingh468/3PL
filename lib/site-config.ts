// Central editable site content and configuration.
// Founders can edit copy, pricing, services, and contact details here
// without needing to touch component/JSX files.

export const siteConfig = {
  name: "Octave Eight Fulfillment",
  shortName: "Octave Eight",
  tagline: "Fulfillment that keeps growing brands in rhythm.",
  region: "Northern California",
  sameDayCutoff: "3 PM",
  // Set via NEXT_PUBLIC_CONTACT_EMAIL in .env.local. Leave blank until a real
  // business email exists -- do not publish a placeholder/fake address.
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
};

export const trustPoints = [
  "Northern California focus",
  "Human-first support",
  "Shopify / WMS connected workflows",
  "Simple volume-based pricing",
];

export const services = [
  {
    title: "Receiving & putaway",
    body: "Inbound inventory is received, counted, and organized using structured warehouse workflows so stock is accurately reflected from day one.",
  },
  {
    title: "Storage & inventory handling",
    body: "Ongoing storage and inventory handling designed around your SKU mix, with visibility into on-hand quantities as your catalog grows.",
  },
  {
    title: "Pick, pack & ship",
    body: "Orders are picked, packed, and handed off to carriers with care, including same-day fulfillment options for eligible orders received before the daily cutoff.",
  },
  {
    title: "Returns processing",
    body: "Incoming returns are received, inspected, and processed back into inventory or disposition, with status communicated back to you.",
  },
  {
    title: "Simple kitting & project work",
    body: "Light kitting and bundling for straightforward multi-item assemblies, along with occasional special projects as needed.",
  },
  {
    title: "Client communication & account support",
    body: "A direct line to the people actually running your fulfillment, not a ticket queue -- so questions get answered by someone who knows your account.",
  },
];

export const productScopeNote =
  "Launch service is available for eligible non-regulated, non-hazardous consumer goods. Regulated categories (food, supplements, pharmaceuticals, alcohol, cannabis, hazardous materials, refrigerated goods) are not currently supported.";

export const whyPoints = [
  {
    title: "Direct human communication",
    body: "Talk to the people actually handling your inventory and orders instead of being routed through a faceless support queue.",
  },
  {
    title: "Regional accessibility",
    body: "A Northern California-focused partner built to stay close and responsive to the brands we serve.",
  },
  {
    title: "Boutique attention",
    body: "A founder-involved operating model built around a smaller number of well-supported accounts rather than volume at any cost.",
  },
  {
    title: "Clear expectations",
    body: "Straightforward service terms and pricing so you know what you're getting before you sign anything.",
  },
  {
    title: "Team-oriented operating model",
    body: "Eight founders coordinating closely across receiving, operations, and account support -- precision and rhythm behind the scenes.",
  },
];

export const processSteps = [
  {
    title: "Discovery / fit review",
    body: "We start with a short conversation about your products, volume, and current fulfillment setup to confirm we're a good fit.",
  },
  {
    title: "Connect store and inventory data",
    body: "Your Shopify store and inventory data are connected so orders and stock levels flow into our operating workflow.",
  },
  {
    title: "Receive and organize inventory",
    body: "Inbound inventory is received, counted, and organized so it's ready to fulfill accurately from day one.",
  },
  {
    title: "Orders flow to fulfillment",
    body: "As orders come in, they route directly into our pick/pack workflow without manual re-entry.",
  },
  {
    title: "Pick, pack, ship & stay informed",
    body: "Orders are picked, packed, and shipped, with status and exceptions communicated back to you along the way.",
  },
];

export const sameDayCallout = {
  title: "Same-day fulfillment, when it counts",
  body: "Eligible orders received before " + siteConfig.sameDayCutoff + " can qualify for same-day fulfillment, subject to your service agreement, operational capacity, and carrier cutoff times. This is not an unconditional guarantee -- it's an operating target we build our workflow around.",
};

export type PricingTier = {
  name: string;
  orders: string;
  base: string;
  extra: string;
};

export const proposedPricing: PricingTier[] = [
  { name: "Starter", orders: "100-499 orders/mo", base: "$3.50 / order", extra: "Additional unit +$0.60" },
  { name: "Growth", orders: "500-1,499 orders/mo", base: "$3.25 / order", extra: "Additional unit +$0.60" },
  { name: "Scale", orders: "1,500-4,999 orders/mo", base: "$3.00 / order", extra: "Additional unit +$0.60" },
  { name: "Enterprise", orders: "5,000+ orders/mo", base: "Custom quote", extra: "Talk to the founding team" },
];

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
  "These are current planning rates, shown for transparency, and are subject to change. Final quotes depend on actual volume, storage footprint, packaging, receiving complexity, returns rate, and other operating requirements confirmed in a signed service agreement.";

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
      "Eligible orders received before the daily cutoff can qualify for same-day fulfillment, subject to your service agreement, our operational capacity, and carrier cutoff times.",
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

export const footerLinks = {
  privacy: { label: "Privacy Policy", href: "#", todo: true },
  terms: { label: "Terms of Service", href: "#", todo: true },
};
