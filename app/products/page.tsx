import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProductCatalogue } from "@/components/product-catalogue";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ArrowRight, ArrowUpRight, WhatsAppIcon } from "@/components/ui/icons";
import { catalogueProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Customized Products & Corporate Gifts Pakistan | Future Signing",
  description: "Explore corporate gift boxes, employee kits, customized drinkware, technology gifts, stationery and promotional merchandise by Future Signing.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Future Signing Product Catalogue",
    description: "Custom products, corporate gifting and branded merchandise for businesses across Pakistan.",
    url: "/products",
    images: [{ url: "/images/catalogue/hero-executive-kit.png", width: 1254, height: 1254, alt: "Future Signing executive branded gift set" }],
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Future Signing Product Catalogue",
  itemListElement: catalogueProducts.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: product.name,
    url: `https://futuresigning.pk/products/${product.categorySlug}/${product.slug}`,
  })),
};

export default function ProductsPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema).replace(/</g, "\\u003c") }} />
    <SiteHeader />
    <main id="main">
      <section className="catalogue-hero catalogue-hero--shop" id="top">
        <div className="catalogue-hero__orbit" aria-hidden="true" />
        <div className="shell catalogue-hero__grid">
          <div className="catalogue-hero__copy"><Link className="catalogue-breadcrumb" href="/">Home <ArrowRight /> Products</Link><span className="eyebrow">The complete product catalogue</span><h1>Find the right product for <em>your identity.</em></h1><p>Search the full collection or move directly into a category. Every product leads to its own details and enquiry page.</p><a className="button button--orange" href="#catalogue">Shop the catalogue <ArrowUpRight /></a></div>
          <div className="catalogue-hero__visual"><div className="catalogue-hero__image"><Image src="/images/catalogue/hero-executive-kit.png" alt="Future Signing executive gift collection" fill priority sizes="(max-width: 820px) 94vw, 46vw" /></div><div className="catalogue-hero__note"><span>Not a shopping cart</span><strong>Products, branding and presentation planned around your requirement.</strong></div></div>
        </div>
        <div className="catalogue-principles"><div className="shell"><span>Quote-led projects</span><i>✦</i><span>Branding guidance</span><i>✦</i><span>Bulk requirements</span><i>✦</i><span>Pakistan-wide delivery</span></div></div>
      </section>

      <div id="catalogue" className="catalogue-shop-anchor"><ProductCatalogue /></div>

      <section className="catalogue-guidance"><div className="shell catalogue-guidance__grid"><div><span className="eyebrow">Before production</span><h2>Every product starts with a few practical questions.</h2></div><div className="catalogue-guidance__list"><span>What quantity do you need?</span><span>Who will receive it?</span><span>How should the brand appear?</span><span>Where and when is it required?</span></div></div></section>

      <section className="catalogue-cta"><div className="shell"><span className="eyebrow">Can’t see the product you need?</span><h2>Send the reference.<br />We’ll explore the possibilities.</h2><p>The website is a starting point—not the limit of what can be sourced and customized.</p><div><a className="button button--light" href="https://wa.me/923001234567?text=Hello%20Future%20Signing%2C%20I%20have%20a%20custom%20product%20requirement%20I%20would%20like%20to%20discuss." target="_blank" rel="noreferrer"><WhatsAppIcon /> WhatsApp your reference</a><Link className="button button--outline-light" href="/#contact">Share a detailed brief <ArrowUpRight /></Link></div></div></section>
    </main>
    <SiteFooter />
  </>;
}
