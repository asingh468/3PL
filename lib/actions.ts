"use server";

import { Resend } from "resend";
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
    return {
      status: "not-configured",
      message:
        "Thanks — your info was validated, but form delivery isn't connected yet. Please configure RESEND_API_KEY in .env.local, or reach out directly for now.",
    };
  }

  const summaryRows = [
    ["Name", payload.name],
    ["Company", payload.company],
    ["Email", payload.email],
    ["Store URL", payload.storeUrl],
    ["Monthly orders", payload.monthlyOrders],
    ["Product type", payload.productType],
    ["Current fulfillment", payload.currentFulfillment],
    ["Help with", payload.helpWith],
  ].filter(([, value]) => value);

  const textBody = summaryRows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const htmlBody = `<h2>New fulfillment inquiry</h2><table cellpadding="6">${summaryRows
    .map(([label, value]) => `<tr><td><strong>${label}</strong></td><td>${value}</td></tr>`)
    .join("")}</table>`;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Octave Logistics Website <onboarding@resend.dev>",
      to: siteConfig.contactEmail,
      replyTo: payload.email,
      subject: `New fulfillment inquiry from ${payload.company}`,
      text: textBody,
      html: htmlBody,
    });

    if (error) {
      console.error("Resend send error:", error);
      return {
        status: "error",
        message: "Something went wrong sending your request. Please try again or email us directly.",
      };
    }
  } catch (err) {
    console.error("Resend send exception:", err);
    return {
      status: "error",
      message: "Something went wrong sending your request. Please try again or email us directly.",
    };
  }

  return {
    status: "success",
    message: "Thanks! Your request was sent. We'll be in touch shortly.",
  };
}
