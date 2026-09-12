"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/lib/actions";

const initialState: ContactFormState = { status: "idle", message: "" };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  return (
    <section id="contact" className="section cta">
      <div className="shell ctaInner">
        <div className="ctaIntro">
          <div className="eyebrow">Talk with the founding team</div>
          <h2>See whether Octave Logistics fits your fulfillment needs.</h2>
          <p>Tell us roughly what you ship, your monthly order volume, and what you want to improve about fulfillment.</p>
        </div>

        <form className="contactForm" action={formAction} noValidate>
          <div className="formGrid">
            <label className="field">
              <span>Name</span>
              <input name="name" type="text" required autoComplete="name" />
            </label>
            <label className="field">
              <span>Company</span>
              <input name="company" type="text" required autoComplete="organization" />
            </label>
            <label className="field">
              <span>Email</span>
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <label className="field">
              <span>Store URL</span>
              <input name="storeUrl" type="url" placeholder="https://" />
            </label>
            <label className="field">
              <span>Approx. monthly orders</span>
              <input name="monthlyOrders" type="text" placeholder="e.g. 300" />
            </label>
            <label className="field">
              <span>Product type</span>
              <input name="productType" type="text" placeholder="e.g. skincare, apparel" />
            </label>
            <label className="field">
              <span>Current fulfillment method</span>
              <select name="currentFulfillment" defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                <option value="self-fulfilling">Self-fulfilling</option>
                <option value="another-3pl">Another 3PL</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label className="field fieldWide">
              <span>What do you want help with?</span>
              <textarea name="helpWith" rows={4} />
            </label>
          </div>

          <button className="button light" type="submit" disabled={isPending}>
            {isPending ? "Sending..." : "Request a fulfillment review"}
          </button>

          {state.status !== "idle" && (
            <p className={`formMessage formMessage-${state.status}`} role="status">
              {state.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
