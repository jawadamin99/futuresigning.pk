import { siteContact, siteUrl } from "@/lib/site";

export type QuoteLead = {
  name: string;
  company: string;
  phone: string;
  email: string;
  interest: string;
  quantity: string;
  city: string;
  deadline: string;
  details: string;
  sourcePage: string;
  pageUrl: string;
  ipAddress: string;
  browser: string;
};

const orange = "#F36C21";
const ink = "#202124";

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);

const display = (value: string, fallback = "Not provided") =>
  escapeHtml(value || fallback).replace(/\n/g, "<br>");

export function buildQuoteEmail(lead: QuoteLead, reference: string, submittedAt: Date) {
  const phoneHref = `tel:${lead.phone.replace(/[^\d+]/g, "")}`;
  let sourceUrl = `${siteUrl}/`;

  try {
    const submittedUrl = new URL(lead.pageUrl || lead.sourcePage, sourceUrl);
    if (submittedUrl.protocol === "https:" || submittedUrl.protocol === "http:") sourceUrl = submittedUrl.toString();
  } catch {
    // Retain the canonical homepage when the submitted URL is malformed.
  }

  const submitted = new Intl.DateTimeFormat("en-PK", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Karachi",
  }).format(submittedAt);

  const text = [
    "NEW FUTURE SIGNING QUOTE REQUEST",
    `Reference: ${reference}`,
    `Submitted: ${submitted} (Pakistan time)`,
    "",
    `Name: ${lead.name}`,
    `Company: ${lead.company}`,
    `Phone / WhatsApp: ${lead.phone}`,
    `Email: ${lead.email || "Not provided"}`,
    `Product interest: ${lead.interest}`,
    `Estimated quantity: ${lead.quantity}`,
    `Delivery city: ${lead.city}`,
    `Expected deadline: ${lead.deadline || "To be discussed"}`,
    `Project details: ${lead.details}`,
    "",
    "SUBMISSION METADATA",
    `IP address: ${lead.ipAddress}`,
    `Browser: ${lead.browser}`,
    `Page URL: ${sourceUrl}`,
  ].join("\n");

  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;background:#f2f0eb;color:${ink};font-family:Arial,Helvetica,sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(lead.company)} requested a quote for ${escapeHtml(lead.interest)}.</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f2f0eb;padding:24px 12px;"><tr><td align="center">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:700px;background:#fff;border-collapse:collapse;border-top:6px solid ${orange};box-shadow:0 14px 38px rgba(32,33,36,.12);">
      <tr><td style="padding:28px 34px;background:${ink};">
        <img src="${siteUrl}/images/brand/future-signing-logo.png" width="240" alt="Future Signing" style="display:block;max-width:100%;height:auto;background:#fff;padding:10px 14px;">
        <p style="margin:22px 0 6px;color:${orange};font-size:12px;font-weight:800;letter-spacing:2px;text-transform:uppercase;">New website inquiry</p>
        <h1 style="margin:0;color:#fff;font-size:30px;line-height:1.15;">Corporate quote request</h1>
        <p style="margin:10px 0 0;color:#b9bbbd;font-size:14px;line-height:1.5;">${escapeHtml(submitted)} · ${escapeHtml(reference)}</p>
      </td></tr>
      <tr><td style="padding:30px 34px 12px;">
        <p style="margin:0 0 7px;color:#777;font-size:11px;font-weight:800;letter-spacing:1.4px;text-transform:uppercase;">Product interest</p>
        <h2 style="margin:0;color:${ink};font-size:26px;line-height:1.25;">${display(lead.interest)}</h2>
        <p style="margin:8px 0 0;color:#626568;font-size:16px;">${display(lead.quantity)} · Delivery to <strong>${display(lead.city)}</strong></p>
      </td></tr>
      <tr><td style="padding:14px 34px 8px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f7f5f1;border:1px solid #e2ded6;border-collapse:collapse;">
          <tr><td style="width:50%;padding:18px;border-right:1px solid #e2ded6;vertical-align:top;"><p style="margin:0 0 6px;color:#777;font-size:11px;font-weight:800;text-transform:uppercase;">Contact</p><p style="margin:0;font-size:17px;font-weight:700;line-height:1.5;">${display(lead.name)}</p><p style="margin:3px 0 0;color:#67696c;font-size:14px;">${display(lead.company)}</p></td>
          <td style="width:50%;padding:18px;vertical-align:top;"><p style="margin:0 0 6px;color:#777;font-size:11px;font-weight:800;text-transform:uppercase;">Phone / WhatsApp</p><a href="${escapeHtml(phoneHref)}" style="color:${orange};font-size:17px;font-weight:800;text-decoration:none;">${display(lead.phone)}</a></td></tr>
        </table>
      </td></tr>
      <tr><td style="padding:15px 34px 6px;"><p style="margin:0 0 6px;color:#777;font-size:11px;font-weight:800;text-transform:uppercase;">Email</p>${lead.email ? `<a href="mailto:${escapeHtml(lead.email)}" style="color:${ink};font-size:16px;font-weight:700;">${display(lead.email)}</a>` : `<p style="margin:0;color:#777;">Not provided</p>`}</td></tr>
      <tr><td style="padding:15px 34px 6px;"><p style="margin:0 0 6px;color:#777;font-size:11px;font-weight:800;text-transform:uppercase;">Expected deadline</p><p style="margin:0;font-size:16px;font-weight:700;">${display(lead.deadline, "To be discussed")}</p></td></tr>
      <tr><td style="padding:15px 34px 24px;"><p style="margin:0 0 6px;color:#777;font-size:11px;font-weight:800;text-transform:uppercase;">Project details</p><div style="padding:18px 20px;background:#f7f5f1;border-left:4px solid ${orange};font-size:15px;line-height:1.7;">${display(lead.details)}</div></td></tr>
      <tr><td style="padding:0 34px 28px;"><table role="presentation" cellspacing="0" cellpadding="0"><tr><td style="background:${orange};"><a href="${escapeHtml(phoneHref)}" style="display:inline-block;padding:14px 20px;color:#fff;font-size:14px;font-weight:800;text-decoration:none;text-transform:uppercase;">Call ${display(lead.name)}</a></td>${lead.email ? `<td style="padding-left:10px;"><a href="mailto:${escapeHtml(lead.email)}?subject=${encodeURIComponent(`Your Future Signing quote — ${reference}`)}" style="display:inline-block;padding:13px 19px;border:1px solid #cbc7c0;color:${ink};font-size:14px;font-weight:800;text-decoration:none;text-transform:uppercase;">Reply by email</a></td>` : ""}</tr></table></td></tr>
      <tr><td style="padding:18px 34px;background:#ece9e3;color:#6b6d70;font-size:12px;line-height:1.6;">Submitted from <a href="${escapeHtml(sourceUrl)}" style="color:${ink};">${escapeHtml(sourceUrl)}</a><br>IP: ${display(lead.ipAddress)} · Browser: ${display(lead.browser)}</td></tr>
    </table>
  </td></tr></table>
</body></html>`;

  return { html, text };
}

export function buildQuoteAcknowledgementEmail(lead: QuoteLead, reference: string) {
  const deadline = lead.deadline || "To be discussed";
  const subject = `We received your quote request — ${reference}`;
  const text = [
    `Hi ${lead.name},`,
    "",
    "Thank you for contacting Future Signing. We’ve received your requirements and our team will review them shortly. You can expect a response within 24 hours.",
    "",
    "YOUR PROJECT SUMMARY",
    `Reference: ${reference}`,
    `Company: ${lead.company}`,
    `Product interest: ${lead.interest}`,
    `Estimated quantity: ${lead.quantity}`,
    `Delivery city: ${lead.city}`,
    `Expected deadline: ${deadline}`,
    `Project details: ${lead.details}`,
    "",
    "WHAT HAPPENS NEXT",
    "1. We review the product, quantity, branding and deadline.",
    "2. We contact you if anything needs clarification.",
    "3. We recommend a suitable product and production route before preparing the quotation.",
    "",
    "Need to add something to your brief? Reply to this email or contact us:",
    `Phone / WhatsApp: ${siteContact.phoneDisplay}`,
    `Email: ${siteContact.email}`,
    `Website: ${siteUrl}`,
    "",
    "Your Brand. On Everything.",
    "Future Signing",
    "",
    "This is an automated confirmation of your website enquiry.",
  ].join("\n");

  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;background:#f2f0eb;color:${ink};font-family:Arial,Helvetica,sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">Your Future Signing enquiry has been received. We’ll respond within 24 hours.</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f2f0eb;padding:24px 12px;"><tr><td align="center">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;background:#fff;border-collapse:collapse;border-top:6px solid ${orange};">
      <tr><td style="padding:28px 34px;background:${ink};">
        <img src="${siteUrl}/images/brand/future-signing-logo.png" width="240" alt="Future Signing" style="display:block;max-width:100%;height:auto;background:#fff;padding:10px 14px;">
        <p style="margin:22px 0 6px;color:${orange};font-size:12px;font-weight:800;letter-spacing:2px;text-transform:uppercase;">Request received</p>
        <h1 style="margin:0;color:#fff;font-size:30px;line-height:1.15;">Thank you for sharing your brief.</h1>
        <p style="margin:10px 0 0;color:#b9bbbd;font-size:14px;line-height:1.5;">Reference ${escapeHtml(reference)}</p>
      </td></tr>
      <tr><td style="padding:30px 34px 12px;">
        <p style="margin:0 0 14px;color:${ink};font-size:18px;line-height:1.6;">Hi <strong>${display(lead.name)}</strong>,</p>
        <p style="margin:0;color:#5f6265;font-size:16px;line-height:1.7;">Thank you for contacting Future Signing. We’ve received your requirements and our team will review them shortly. You can expect a response within <strong style="color:${ink};">24 hours</strong>.</p>
      </td></tr>
      <tr><td style="padding:20px 34px 10px;">
        <p style="margin:0 0 10px;color:${orange};font-size:11px;font-weight:800;letter-spacing:1.6px;text-transform:uppercase;">Your project summary</p>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e2ded6;border-collapse:collapse;">
          <tr><td style="padding:14px 16px;background:#f7f5f1;color:#6b6d70;font-size:12px;font-weight:800;text-transform:uppercase;width:34%;border-bottom:1px solid #e2ded6;">Company</td><td style="padding:14px 16px;font-size:15px;font-weight:700;border-bottom:1px solid #e2ded6;">${display(lead.company)}</td></tr>
          <tr><td style="padding:14px 16px;background:#f7f5f1;color:#6b6d70;font-size:12px;font-weight:800;text-transform:uppercase;border-bottom:1px solid #e2ded6;">Product interest</td><td style="padding:14px 16px;font-size:15px;font-weight:700;border-bottom:1px solid #e2ded6;">${display(lead.interest)}</td></tr>
          <tr><td style="padding:14px 16px;background:#f7f5f1;color:#6b6d70;font-size:12px;font-weight:800;text-transform:uppercase;border-bottom:1px solid #e2ded6;">Quantity</td><td style="padding:14px 16px;font-size:15px;border-bottom:1px solid #e2ded6;">${display(lead.quantity)}</td></tr>
          <tr><td style="padding:14px 16px;background:#f7f5f1;color:#6b6d70;font-size:12px;font-weight:800;text-transform:uppercase;border-bottom:1px solid #e2ded6;">Delivery city</td><td style="padding:14px 16px;font-size:15px;border-bottom:1px solid #e2ded6;">${display(lead.city)}</td></tr>
          <tr><td style="padding:14px 16px;background:#f7f5f1;color:#6b6d70;font-size:12px;font-weight:800;text-transform:uppercase;">Deadline</td><td style="padding:14px 16px;font-size:15px;">${display(deadline)}</td></tr>
        </table>
      </td></tr>
      <tr><td style="padding:18px 34px 8px;">
        <p style="margin:0 0 7px;color:#777;font-size:11px;font-weight:800;letter-spacing:1.4px;text-transform:uppercase;">Project details</p>
        <div style="padding:17px 18px;background:#f7f5f1;border-left:4px solid ${orange};font-size:15px;line-height:1.7;">${display(lead.details)}</div>
      </td></tr>
      <tr><td style="padding:22px 34px 26px;">
        <p style="margin:0 0 12px;color:${orange};font-size:11px;font-weight:800;letter-spacing:1.6px;text-transform:uppercase;">What happens next</p>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
          <tr><td style="width:28px;padding:4px 10px 10px 0;color:${orange};font-size:18px;font-weight:800;vertical-align:top;">1</td><td style="padding:4px 0 10px;color:#5f6265;font-size:15px;line-height:1.55;">We review the product, quantity, branding and deadline.</td></tr>
          <tr><td style="width:28px;padding:4px 10px 10px 0;color:${orange};font-size:18px;font-weight:800;vertical-align:top;">2</td><td style="padding:4px 0 10px;color:#5f6265;font-size:15px;line-height:1.55;">We contact you if anything needs clarification.</td></tr>
          <tr><td style="width:28px;padding:4px 10px 0 0;color:${orange};font-size:18px;font-weight:800;vertical-align:top;">3</td><td style="padding:4px 0 0;color:#5f6265;font-size:15px;line-height:1.55;">We recommend a suitable product and production route before preparing the quotation.</td></tr>
        </table>
      </td></tr>
      <tr><td style="padding:24px 34px;background:${ink};">
        <p style="margin:0 0 14px;color:#fff;font-size:16px;font-weight:700;line-height:1.5;">Need to add something to your brief? Reply to this email or contact us directly.</p>
        <p style="margin:0;color:#c9cbcc;font-size:14px;line-height:1.8;"><a href="${siteContact.phoneHref}" style="color:${orange};text-decoration:none;font-weight:800;">${siteContact.phoneDisplay}</a><br><a href="mailto:${siteContact.email}" style="color:#fff;text-decoration:none;">${siteContact.email}</a><br><a href="${siteUrl}" style="color:#fff;text-decoration:none;">www.futuresigning.pk</a></p>
      </td></tr>
      <tr><td style="padding:18px 34px;background:#ece9e3;color:#6b6d70;font-size:12px;line-height:1.6;">This is an automated confirmation of your website enquiry.<br><strong style="color:${ink};">Future Signing</strong> · Your Brand. On Everything.</td></tr>
    </table>
  </td></tr></table>
</body></html>`;

  return { subject, html, text };
}
