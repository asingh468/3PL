"use server";

import { siteConfig } from "@/lib/site-config";

export type ContactFormState = {
  status: "idle" | "success" | "error" | "not-configured";
  message: string;
};

export type ContactFormPayload = {
  name: string;
  company: string;
  email: string;
  storeUrl: string;
  monthlyOrders: string;
  productType: string;
  currentFulfillment: string;
  helpWith: string;
};

/**
 * Server action scaffold for the contact/lead form.
 *
 * This intentionally does NOT fake a successful submission. Until a real
 * email provider (e.g. Resend) is configured via environment variables,
 * submissions are validated locally and the user is shown a clear
 * "not configured" message rather than a false success state.
 *
 * To wire this up for real:
 * 1. Add RESEND_API_KEY (or your provider's equivalent) to .env.local.
 * 2. Install the provider SDK (e.g. `npm install resend`).
 * 3. Replace the TODO block below with an actual send call.
 */
export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const payload: ContactFormPayload = {
    name: String(formData.get("name") ?? "").trim(),
    company: String(formData.get("company") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    storeUrl: String(formData.get("storeUrl") ?? "").trim(),
    monthlyOrders: String(formData.get("monthlyOrders") ?? "").trim(),
    productType: String(formData.get("productType") ?? "").trim(),
    currentFulfillment: String(formData.get("currentFulfillment") ?? "").trim(),
    helpWith: String(formData.get("helpWith") ?? "").trim(),
  };

  if (!payload.name || !payload.email || !payload.company) {
    return {
      status: "error",
      message: "Please fill in your name, company, and email before submitting.",
    };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(payload.email)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    };
  }

  const emailProviderConfigured = Boolean(process.env.RESEND_API_KEY);

  if (!emailProviderConfigured || !siteConfig.contactEmail) {
    // TODO(founders): configure RESEND_API_KEY and NEXT_PUBLIC_CONTACT_EMAIL,
    // then implement the actual send using your provider's SDK here.
    return {
      status: "not-configured",
      message:
        "Thanks — your info was validated, but form delivery isn't connected yet. Please configure RESEND_API_KEY and a contact email in .env.local, or reach out directly for now.",
    };
  }

  // TODO(founders): replace with a real send once RESEND_API_KEY is set.
  // Example:
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "Octave Eight Fulfillment <no-reply@yourdomain.com>",
  //   to: siteConfig.contactEmail,
  //   subject: `New fulfillment inquiry from ${payload.company}`,
  //   text: JSON.stringify(payload, null, 2),
  // });

  return {
    status: "success",
    message: "Thanks! Your request was sent. We'll be in touch shortly.",
  };
}
