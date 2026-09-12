import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const title = `${siteConfig.name} | ${siteConfig.region} 3PL & Ecommerce Fulfillment`;
const description =
  "Regional ecommerce and Shopify fulfillment for growing brands in Northern California. Receiving, storage, pick/pack/ship, returns, and direct human support.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Northern California 3PL",
    "ecommerce fulfillment",
    "Shopify fulfillment",
    "regional fulfillment center",
    "pick pack ship",
    "order fulfillment services",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
