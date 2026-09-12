import { regionalAdvantage } from "@/lib/site-config";

export function RegionalAdvantage() {
  return (
    <section className="section alt regionalSection">
      <div className="shell regionalGrid">
        <div>
          <div className="eyebrow">{regionalAdvantage.eyebrow}</div>
          <h2>{regionalAdvantage.heading}</h2>
          <p className="lede small">{regionalAdvantage.body}</p>
          <ul className="checklist">
            {regionalAdvantage.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="mapVisual" aria-hidden="true">
          <div className="mapShape">
            <span className="mapPin mapPin-1" />
            <span className="mapPin mapPin-2" />
            <span className="mapPin mapPin-3" />
            <span className="mapLine" />
          </div>
          <span className="mapCaption">Northern California &amp; West Coast reach</span>
        </div>
      </div>
    </section>
  );
}
