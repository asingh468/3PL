import { humanService } from "@/lib/site-config";

export function HumanService() {
  return (
    <section className="section humanSection">
      <div className="shell humanGrid">
        <div className="humanIntro">
          <div className="eyebrow">{humanService.eyebrow}</div>
          <h2>{humanService.heading}</h2>
          <p className="lede">{humanService.body}</p>
        </div>
        <ul className="humanPoints">
          {humanService.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
