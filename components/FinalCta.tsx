import { finalCta } from "@/lib/site-config";

export function FinalCta() {
  return (
    <section className="section finalCta">
      <div className="shell finalCtaInner">
        <h2>{finalCta.heading}</h2>
        <p>{finalCta.body}</p>
        <div className="actions finalCtaActions">
          <a className="button light" href="#contact">
            Get a Fulfillment Quote
          </a>
          <a className="button ghost ghostOnDark" href="#contact">
            Talk to Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
