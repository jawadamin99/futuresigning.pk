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
  let sourceUrl = "https://futuresigning.pk/";

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
        <img src="https://futuresigning.pk/images/brand/future-signing-logo.png" width="240" alt="Future Signing" style="display:block;max-width:100%;height:auto;background:#fff;padding:10px 14px;">
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
