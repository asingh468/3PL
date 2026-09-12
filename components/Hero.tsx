import { heroHighlights, siteConfig } from "@/lib/site-config";
import { HeroCityscape } from "@/components/HeroCityscape";

export function Hero() {
  return (
    <section id="top" className="hero">
      <HeroCityscape />
      <div className="shell heroGrid">
        <div className="heroContent">
          <div className="eyebrow">{siteConfig.region} &bull; Ecommerce fulfillment</div>
          <h1>{siteConfig.tagline}</h1>
          <p className="lede">
            A customer-first 3PL built for growing ecommerce brands that want responsive support,
            clear pricing, and reliable fulfillment without feeling like a small account in a giant network.
          </p>
          <div className="actions">
            <a className="button" href="#contact">
              Get a Fulfillment Quote
            </a>
            <a className="button ghost" href="#contact">
              Talk to Our Team
            </a>
          </div>
          <ul className="highlightList" aria-label="Why brands choose us">
            {heroHighlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="note shell heroNote">
        Working website draft. Final service levels and pricing remain subject to client agreement.
      </p>
    </section>
  );
}
