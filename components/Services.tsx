import { productScopeNote, serviceGroups } from "@/lib/site-config";

export function Services() {
  return (
    <section id="services" className="section alt">
      <div className="shell">
        <div className="sectionHead">
          <div className="eyebrow">What we do</div>
          <h2>Simple fulfillment for physical ecommerce products.</h2>
        </div>

        <div className="serviceGroups">
          {serviceGroups.map((group) => (
            <div className="serviceGroup" key={group.group}>
              <span className="serviceGroupLabel">{group.group}</span>
              <ul className="serviceItemList">
                {group.items.map((item) => (
                  <li key={item.title} className="serviceItem">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="note">{productScopeNote}</p>
      </div>
    </section>
  );
}
