import { idealClientPoints } from "@/lib/site-config";

export function IdealClient() {
  return (
    <section className="section alt">
      <div className="shell">
        <div className="eyebrow">Is this a fit?</div>
        <h2>Brands we're built to support at launch.</h2>
        <ul className="checklist">
          {idealClientPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
