import { processSteps, sameDayCallout } from "@/lib/site-config";

export function Process() {
  return (
    <section id="process" className="section shell">
      <div className="eyebrow">How it works</div>
      <h2>A simple, transparent path from first conversation to shipped order.</h2>
      <ol className="processList">
        {processSteps.map((step, index) => (
          <li className="processStep" key={step.title}>
            <span className="stepNumber" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="calloutCard">
        <h3>{sameDayCallout.title}</h3>
        <p>{sameDayCallout.body}</p>
      </div>
    </section>
  );
}
