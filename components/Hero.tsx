import { heroHighlights, siteConfig } from "@/lib/site-config";
import { HeroCityscape } from "@/components/HeroCityscape";

const flowStages = ["Receiving", "Inventory", "Pick / Pack", "Carrier"];

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

        <div className="heroVisual" aria-hidden="true">
          <div className="flowCard">
            <div className="flowCardHeader">
              <span className="flowDot" />
              <span className="flowDot" />
              <span className="flowDot" />
              <span className="flowLabel">Order flow</span>
            </div>
            <ol className="flowStages">
              {flowStages.map((stage, index) => (
                <li key={stage} className="flowStage">
                  <span className="flowStageIndex">{index + 1}</span>
                  <span className="flowStageLabel">{stage}</span>
                </li>
              ))}
            </ol>
            <div className="flowMeta">
              <div>
                <span className="flowMetaLabel">Fulfillment</span>
                <span className="flowMetaValue">Same-day eligible</span>
              </div>
              <div>
                <span className="flowMetaLabel">Region</span>
                <span className="flowMetaValue">Northern CA</span>
              </div>
              <div>
                <span className="flowMetaLabel">Status</span>
                <span className="flowMetaValue flowMetaLive">Synced</span>
              </div>
            </div>
          </div>
          <div className="regionBadge">
            <span className="regionDot" />
            West Coast reach
          </div>
        </div>
      </div>
      <p className="note shell heroNote">
        Working website draft. Final service levels and pricing remain subject to client agreement.
      </p>
    </section>
  );
}
