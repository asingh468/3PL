"use client";

import { useState } from "react";
import { faqs } from "@/lib/site-config";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section shell" aria-labelledby="faq-heading">
      <div className="eyebrow">FAQ</div>
      <h2 id="faq-heading">Common questions before you reach out.</h2>
      <div className="faqList">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div className="faqItem" key={item.question}>
              <button
                type="button"
                className="faqQuestion"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && <p className="faqAnswer">{item.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
