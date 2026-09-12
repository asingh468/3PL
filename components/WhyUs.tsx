import { comparison } from "@/lib/site-config";

export function WhyUs() {
  return (
    <section id="why-us" className="section shell">
      <div className="sectionHead">
        <div className="eyebrow">Why Octave Logistics</div>
        <h2>Built around responsiveness, transparency, and regional service.</h2>
      </div>

      <div className="comparisonGrid">
        <div className="comparisonCard comparisonCard-muted">
          <span className="comparisonLabel">{comparison.large.label}</span>
          <ul className="comparisonList">
            {comparison.large.points.map((point) => (
              <li key={point}>
                <span className="comparisonMark comparisonMark-neg" aria-hidden="true">
                  &minus;
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="comparisonCard comparisonCard-accent">
          <span className="comparisonLabel">{comparison.ours.label}</span>
          <ul className="comparisonList">
            {comparison.ours.points.map((point) => (
              <li key={point}>
                <span className="comparisonMark comparisonMark-pos" aria-hidden="true">
                  &#10003;
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
