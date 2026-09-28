import { faqs } from "@/lib/site-config";

export function FAQ() {
  return (
    <section className="section shell" aria-labelledby="faq-heading">
      <div className="eyebrow">FAQ</div>
      <h2 id="faq-heading">Common questions before you reach out.</h2>
      <div className="faqList">
        {faqs.map((item, index) => (
          <details className="faqItem" key={item.question} open={index === 0}>
            <summary className="faqQuestion">
              <span>{item.question}</span>
              <span className="faqToggle" aria-hidden="true" />
            </summary>
            <p className="faqAnswer">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
