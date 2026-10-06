"use client";

import { FormEvent, useEffect, useState } from "react";
import { ArrowUpRight, MailIcon } from "@/components/ui/icons";
import { trackGoogleEvent } from "@/lib/analytics";

const interests = ["Corporate gift boxes", "Employee onboarding kits", "Customized coffee mugs", "Customized water bottles", "Metal coffee mugs & tumblers", "Power banks & charging accessories", "Customized metal pens", "Customized keychains", "Notebooks & diaries", "Desk & event products", "Apparel & uniforms", "Custom packaging", "Client appreciation", "Events & conferences", "Product launches", "Recognition & festive gifting", "Something else"];

type FormState = "idle" | "submitting" | "success" | "error";

export function EnquiryForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [interest, setInterest] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [reference, setReference] = useState("");

  const fieldError = (name: string) => errors[name]
    ? <span className="field-error" id={`${name}-error`}>{errors[name]}</span>
    : null;
  const accessibility = (name: string) => ({
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  useEffect(() => {
    const triggers = document.querySelectorAll<HTMLElement>("[data-interest]");
    const selectInterest = (event: Event) => {
      const value = (event.currentTarget as HTMLElement).dataset.interest ?? "";
      setInterest(interests.includes(value) ? value : "Something else");
    };
    triggers.forEach((trigger) => trigger.addEventListener("click", selectInterest));
    return () => triggers.forEach((trigger) => trigger.removeEventListener("click", selectInterest));
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const required = ["name", "company", "phone", "interest", "quantity", "city", "details"];
    const nextErrors: Record<string, string> = {};
    required.forEach((name) => {
      if (!String(data.get(name) || "").trim()) nextErrors[name] = "Please complete this field.";
    });

    const email = String(data.get("email") || "").trim();
    if (email && !/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Please enter a valid email address.";
    setErrors(nextErrors);
    setStatusMessage("");

    if (Object.keys(nextErrors).length) {
      setState("idle");
      setTimeout(() => form.querySelector<HTMLElement>("[aria-invalid='true']")?.focus());
      return;
    }

    setState("submitting");
    const payload = {
      ...Object.fromEntries(data),
      sourcePage: window.location.pathname,
      pageUrl: window.location.href,
    };

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string; reference?: string; confirmationSent?: boolean };
      if (!response.ok) throw new Error(result.message || "Unable to send your quote request.");

      trackGoogleEvent("form_submit", {
        form_name: "quote_request",
        page_path: window.location.pathname,
        product_interest: String(data.get("interest") || "not_selected"),
      });
      setState("success");
      setStatusMessage(result.message || (result.confirmationSent
        ? "We’ve emailed your confirmation. Our team will respond within 24 hours."
        : "Thank you. Our team will respond within 24 hours."));
      setReference(result.reference || "");
      setInterest("");
      form.reset();
    } catch (error) {
      setState("error");
      setStatusMessage(error instanceof Error ? error.message : "Something went wrong. Please contact us directly.");
    }
  }

  if (state === "success") {
    return <div className="form-success" role="status"><span aria-hidden="true">✓</span><div><small>Quote request received</small><h3>Thank you for sharing your brief.</h3><p>{statusMessage}</p>{reference ? <p className="form-reference">Reference: <strong>{reference}</strong></p> : null}</div><button type="button" className="text-link" onClick={() => { setState("idle"); setStatusMessage(""); setReference(""); }}>Send another request <ArrowUpRight /></button></div>;
  }

  return <form className="enquiry-form" onSubmit={submit} noValidate>
    <div className="form-grid">
      <label><span>Name *</span><input name="name" autoComplete="name" placeholder="Your name" {...accessibility("name")} />{fieldError("name")}</label>
      <label><span>Company *</span><input name="company" autoComplete="organization" placeholder="Company name" {...accessibility("company")} />{fieldError("company")}</label>
      <label><span>Phone / WhatsApp *</span><input name="phone" type="tel" autoComplete="tel" placeholder="0329 4650743" {...accessibility("phone")} />{fieldError("phone")}</label>
      <label><span>Email</span><input name="email" type="email" autoComplete="email" placeholder="name@company.com" {...accessibility("email")} />{fieldError("email")}</label>
      <label><span>Product interest *</span><select name="interest" value={interest} onChange={(event) => setInterest(event.target.value)} {...accessibility("interest")}><option value="" disabled>Select a category</option>{interests.map((item) => <option key={item}>{item}</option>)}</select>{fieldError("interest")}</label>
      <label><span>Estimated quantity *</span><input name="quantity" inputMode="numeric" placeholder="e.g. 250 units" {...accessibility("quantity")} />{fieldError("quantity")}</label>
      <label><span>Delivery city *</span><input name="city" autoComplete="address-level2" placeholder="e.g. Lahore" {...accessibility("city")} />{fieldError("city")}</label>
      <label><span>Expected deadline</span><input name="deadline" type="date" /></label>
      <label className="wide"><span>Project details *</span><textarea name="details" rows={4} placeholder="Tell us about the occasion, products, branding and budget range." {...accessibility("details")} />{fieldError("details")}</label>
      <label className="form-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
    </div>
    <div className="form-submit"><p>Your information is emailed securely to the Future Signing team and is only used to respond to your request.</p><button className="button button--orange" type="submit" disabled={state === "submitting"}>{state === "submitting" ? <span className="form-spinner" aria-hidden="true" /> : <MailIcon />}{state === "submitting" ? "Sending…" : "Request a Quote"}{state !== "submitting" ? <ArrowUpRight /> : null}</button></div>
    {state === "error" ? <p className="form-status form-status--error" role="alert">{statusMessage}</p> : null}
  </form>;
}
