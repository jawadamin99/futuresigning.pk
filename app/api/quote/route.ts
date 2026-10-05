import { randomUUID } from "node:crypto";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { buildQuoteEmail, type QuoteLead } from "@/lib/quote-email";
import { siteContact } from "@/lib/site";

export const runtime = "nodejs";

type QuotePayload = Partial<Record<"name" | "company" | "phone" | "email" | "interest" | "quantity" | "city" | "deadline" | "details" | "website" | "sourcePage" | "pageUrl", unknown>>;

const cleanLine = (value: unknown, max = 500) =>
  typeof value === "string" ? value.replace(/[\r\n\0]+/g, " ").trim().slice(0, max) : "";

const cleanMessage = (value: unknown, max = 2500) =>
  typeof value === "string" ? value.replace(/\0/g, "").trim().slice(0, max) : "";

const env = (name: string) => process.env[name]?.trim() ?? "";

export async function POST(request: Request) {
  let payload: QuotePayload;

  try {
    payload = (await request.json()) as QuotePayload;
  } catch {
    return NextResponse.json({ message: "Please check the form and try again." }, { status: 400 });
  }

  if (cleanLine(payload.website)) {
    return NextResponse.json({ message: "Thank you. Your quote request has been received." });
  }

  const lead: QuoteLead = {
    name: cleanLine(payload.name, 100),
    company: cleanLine(payload.company, 150),
    phone: cleanLine(payload.phone, 40),
    email: cleanLine(payload.email, 150),
    interest: cleanLine(payload.interest, 180),
    quantity: cleanLine(payload.quantity, 100),
    city: cleanLine(payload.city, 100),
    deadline: cleanLine(payload.deadline, 50),
    details: cleanMessage(payload.details),
    sourcePage: cleanLine(payload.sourcePage, 250) || "/",
    pageUrl: cleanLine(payload.pageUrl, 1000),
    ipAddress: cleanLine(request.headers.get("x-forwarded-for")?.split(",")[0] || request.headers.get("x-real-ip") || "Not available", 100),
    browser: cleanLine(request.headers.get("user-agent") || "Not available", 600),
  };

  if (!lead.name || !lead.company || !lead.phone || !lead.interest || !lead.quantity || !lead.city || !lead.details) {
    return NextResponse.json({ message: "Please complete every required field." }, { status: 422 });
  }

  if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return NextResponse.json({ message: "Please enter a valid email address or leave it blank." }, { status: 422 });
  }

  const smtpHost = env("SMTP_HOST");
  const smtpPort = Number(env("SMTP_PORT"));
  const smtpUser = env("SMTP_USER");
  const smtpPass = env("SMTP_PASS");
  const contactTo = env("CONTACT_TO") || siteContact.email;
  const contactCc = env("CONTACT_CC");
  const contactFrom = env("CONTACT_FROM") || smtpUser;
  const missing = [
    ["SMTP_HOST", smtpHost], ["SMTP_PORT", smtpPort], ["SMTP_USER", smtpUser],
    ["SMTP_PASS", smtpPass], ["CONTACT_FROM", contactFrom],
  ].filter(([, value]) => !value).map(([name]) => name);

  if (missing.length) {
    console.error("[quote-email] Missing SMTP configuration:", missing.join(", "));
    return NextResponse.json({ message: `Email delivery is not configured yet. Please call or WhatsApp ${siteContact.phoneDisplay}.` }, { status: 503 });
  }

  const reference = `FSQ-${randomUUID().slice(0, 8).toUpperCase()}`;
  const email = buildQuoteEmail(lead, reference, new Date());

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });

    const info = await transporter.sendMail({
      from: `Future Signing Website <${contactFrom}>`,
      to: contactTo,
      cc: contactCc || undefined,
      replyTo: lead.email ? `${lead.name} <${lead.email}>` : undefined,
      subject: `[New Quote] ${lead.interest} — ${lead.company}`,
      text: email.text,
      html: email.html,
    });

    console.info("[quote-email] Sent", { reference, messageId: info.messageId, sourcePage: lead.sourcePage });
    return NextResponse.json({ message: "Thank you. We’ll review your brief and contact you shortly.", reference });
  } catch (error) {
    console.error("[quote-email] Delivery failed", { reference, error: error instanceof Error ? error.message : "Unknown SMTP error" });
    return NextResponse.json({ message: `We couldn’t send that right now. Please call or WhatsApp ${siteContact.phoneDisplay}.` }, { status: 502 });
  }
}
