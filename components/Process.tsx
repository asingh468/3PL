import { processSteps, sameDayCallout } from "@/lib/site-config";

export function Process() {
  return (
    <section id="process" className="section shell">
      <div className="sectionHead">
        <div className="eyebrow">How it works</div>
        <h2>A simple, transparent path from first conversation to shipped order.</h2>
      </div>

      <ol className="processFlow">
        {processSteps.map((step, index) => (
          <li className="processStep" key={step.title}>
            <div className="processStepTop">
              <span className="stepNumber">{String(index + 1).padStart(2, "0")}</span>
              {index < processSteps.length - 1 && (
                <span className="stepConnector" aria-hidden="true">
                  <span
                    className="stepPackage"
                    style={{ animationDelay: `${index * 0.9}s` }}
                  />
                </span>
              )}
            </div>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
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
