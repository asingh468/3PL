import { siteConfig, trustPoints } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="shell heroContent">
        <div className="eyebrow">Regional ecommerce fulfillment &bull; {siteConfig.region}</div>
        <h1>{siteConfig.tagline}</h1>
        <p className="lede">
          A customer-first 3PL built for growing ecommerce brands that want responsive support,
          clear pricing, and reliable fulfillment without feeling like a small account in a giant network.
        </p>
        <div className="actions">
          <a className="button" href="#contact">
            Request a fulfillment review
          </a>
          <a className="textLink" href="#process">
            See how it works
          </a>
        </div>
        <ul className="trustStrip" aria-label="Why brands choose us">
          {trustPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <p className="note">Working website draft. Final service levels and pricing remain subject to client agreement.</p>
      </div>
    </section>
  );
}
