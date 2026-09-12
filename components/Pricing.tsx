"use client";

import { useState } from "react";
import { pricingNote, proposedPricing, secondaryRates } from "@/lib/site-config";

export function Pricing() {
  const [showSecondary, setShowSecondary] = useState(false);

  return (
    <section id="pricing" className="section shell">
      <div className="sectionHead">
        <div className="eyebrow">Volume-based pricing</div>
        <h2>More volume, lower fulfillment rate.</h2>
        <p className="lede small">
          Straightforward per-order pricing. Service quality stays consistent across every tier.
        </p>
      </div>

      <div className="pricingGrid">
        {proposedPricing.map((tier, index) => (
          <article className={`priceCard${index === 1 ? " priceCard-featured" : ""}`} key={tier.name}>
            {index === 1 && <span className="priceBadge">Most common</span>}
            <div className="tier">{tier.name}</div>
            <div className="orders">{tier.orders}</div>
            <div className="price">{tier.base}</div>
            <div className="extra">{tier.extra}</div>
          </article>
        ))}
      </div>

      <button
        type="button"
        className="textLink secondaryToggle"
        onClick={() => setShowSecondary((prev) => !prev)}
        aria-expanded={showSecondary}
      >
        {showSecondary ? "Hide additional service rates" : "See additional service rates"}
      </button>

      {showSecondary && (
        <ul className="secondaryRates">
          {secondaryRates.map((rate) => (
            <li key={rate.label}>
              <span>{rate.label}</span>
              <span>{rate.value}</span>
            </li>
          ))}
        </ul>
      )}

      <p className="note">{pricingNote}</p>
    </section>
  );
}
