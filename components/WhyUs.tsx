import { whyPoints } from "@/lib/site-config";

export function WhyUs() {
  return (
    <section id="why-us" className="section alt">
      <div className="shell">
        <div className="eyebrow">Why Octave Eight</div>
        <h2>Built around responsiveness, visibility, and regional service.</h2>
        <div className="grid3">
          {whyPoints.map((point) => (
            <article className="card" key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
