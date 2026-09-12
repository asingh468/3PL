import { trustHighlights } from "@/lib/site-config";

export function TrustBar() {
  return (
    <section className="trustBar" aria-label="Why brands choose us">
      <div className="shell trustGrid">
        {trustHighlights.map((item) => (
          <div className="trustItem" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
