import { productScopeNote, services } from "@/lib/site-config";

export function Services() {
  return (
    <section id="services" className="section shell">
      <div className="eyebrow">What we do</div>
      <h2>Simple fulfillment for physical ecommerce products.</h2>
      <div className="grid3">
        {services.map((service) => (
          <article className="card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.body}</p>
          </article>
        ))}
      </div>
      <p className="note">{productScopeNote}</p>
    </section>
  );
}
