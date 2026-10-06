import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryForm } from "@/components/enquiry-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ArrowRight, ArrowUpRight, MailIcon, WhatsAppIcon } from "@/components/ui/icons";
import { siteContact, siteName, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description: "Contact Future Signing for corporate gifting, branded merchandise, custom printing and bulk product quotations across Pakistan.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Future Signing",
    description: "Share your corporate gifting or customized-product brief and request a tailored quotation.",
    url: "/contact",
    siteName,
    images: [{ url: "/images/og/future-signing-og.png", width: 1200, height: 630, alt: "Future Signing branded executive gift set" }],
  },
};

export default function ContactPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Future Signing",
    url: siteUrl,
    logo: `${siteUrl}/images/brand/future-signing-logo-full.png`,
    email: siteContact.email,
    telephone: siteContact.phoneInternational,
    areaServed: { "@type": "Country", name: "Pakistan" },
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }} />
    <SiteHeader />
    <main id="main" className="contact-page">
      <section className="contact-hero" id="top"><div className="contact-hero__orbit" aria-hidden="true" /><div className="shell contact-hero__grid"><div><nav className="contact-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><ArrowRight /><span>Contact</span></nav><span className="eyebrow">Contact Future Signing</span><h1>Bring us the brief.<br /><em>We’ll shape the quote.</em></h1><p>Tell us what you need, how many units are required, where they need to go and when they must arrive. We’ll review the production route and respond directly.</p><div className="contact-hero__actions"><a className="button button--orange" href="#quote">Request a quote <ArrowUpRight /></a><a className="button button--outline-light" href={siteContact.whatsappHref} target="_blank" rel="noreferrer"><WhatsAppIcon /> WhatsApp us</a></div></div><aside><span>Direct contact</span><a href={siteContact.phoneHref}><small>Call or WhatsApp</small><strong>{siteContact.phoneDisplay}</strong></a><a href={`mailto:${siteContact.email}`}><small>Email</small><strong>{siteContact.email}</strong></a><p>Available for corporate enquiries and nationwide delivery coordination across Pakistan.</p></aside></div></section>

      <section className="contact-quote section-space" id="quote"><div className="shell"><div className="contact-quote__heading"><span className="eyebrow">Detailed quote request</span><h2>Give us enough to recommend the right route.</h2><p>Your request is emailed directly to our team. We’ll use the information to understand product fit, branding, quantity and delivery requirements.</p></div><EnquiryForm /></div></section>

      <section className="contact-channels section-space"><div className="shell"><div className="contact-channels__intro"><span className="eyebrow">Prefer direct contact?</span><h2>Choose the channel that works for you.</h2></div><div className="contact-channels__grid"><a href={siteContact.phoneHref}><span>Call</span><strong>{siteContact.phoneDisplay}</strong><small>Speak directly about your requirement.</small><ArrowUpRight /></a><a href={siteContact.whatsappHref} target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>{siteContact.phoneDisplay}</strong><small>Send product references or a quick message.</small><WhatsAppIcon /></a><a href={`mailto:${siteContact.email}`}><span>Email</span><strong>{siteContact.email}</strong><small>Share a written brief or artwork files.</small><MailIcon /></a></div></div></section>
    </main>
    <SiteFooter />
  </>;
}
