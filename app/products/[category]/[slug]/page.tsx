import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { ProductGallery } from "@/components/product-gallery";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ArrowRight, ArrowUpRight, WhatsAppIcon } from "@/components/ui/icons";
import { catalogueProducts, getCategory, getLegacyProduct, getProduct } from "@/data/products";

type ProductPageProps = {
  params: Promise<{ category: string; slug: string }>;
};

export function generateStaticParams() {
  return catalogueProducts.map((product) => ({ category: product.categorySlug, slug: product.slug }));
}

function resolveProduct(categorySlug: string, productSlug: string) {
  const product = getProduct(categorySlug, productSlug);
  if (product) return product;

  const legacyProduct = getLegacyProduct(categorySlug, productSlug);
  if (legacyProduct) permanentRedirect(`/products/${legacyProduct.categorySlug}/${legacyProduct.slug}`);
  notFound();
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { category: categorySlug, slug } = await params;
  const product = resolveProduct(categorySlug, slug);

  const canonical = `/products/${product.categorySlug}/${product.slug}`;
  const description = `${product.description} Ask Future Signing about quantities, branding, presentation and nationwide delivery in Pakistan.`;
  return {
    title: `${product.name} – Custom Branding Pakistan`,
    description,
    keywords: [product.name, product.category, ...product.tags, "customized products Pakistan", "corporate gifting Pakistan"],
    alternates: { canonical },
    openGraph: {
      title: `${product.name} | Future Signing`,
      description,
      url: canonical,
      siteName: "Future Signing",
      locale: "en_PK",
      type: "website",
      images: product.images.map((image, index) => ({
        url: image,
        alt: index === 0 ? `${product.name} by Future Signing` : `${product.name} — product view ${index + 1}`,
      })),
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Future Signing`,
      description,
      images: [product.images[0]],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category: categorySlug, slug } = await params;
  const product = resolveProduct(categorySlug, slug);
  const category = getCategory(product.categorySlug);
  if (!category) notFound();

  const relatedProducts = catalogueProducts.filter((item) => item.categorySlug === product.categorySlug && item.slug !== product.slug).slice(0, 3);
  const productPath = `/products/${product.categorySlug}/${product.slug}`;
  const enquiryMessage = encodeURIComponent(`Hello Future Signing, I am interested in the ${product.name}. Please share the available branding options, quantity guidance and quotation process.`);

  const productSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `https://futuresigning.pk${productPath}#product`,
        name: product.name,
        image: product.images.map((image) => `https://futuresigning.pk${image}`),
        description: product.description,
        category: product.category,
        url: `https://futuresigning.pk${productPath}`,
        brand: { "@type": "Brand", name: "Future Signing" },
        additionalProperty: [
          { "@type": "PropertyValue", name: "Shown finish", value: product.finish },
          { "@type": "PropertyValue", name: "Branding", value: "Recommended after artwork review" },
          { "@type": "PropertyValue", name: "Availability", value: "Confirmed against quantity and deadline" },
          { "@type": "PropertyValue", name: "Delivery", value: "Available across Pakistan" },
        ],
      },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://futuresigning.pk" },
        { "@type": "ListItem", position: 2, name: category.name, item: `https://futuresigning.pk/products/${category.slug}` },
        { "@type": "ListItem", position: 3, name: product.name, item: `https://futuresigning.pk${productPath}` },
      ] },
    ],
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema).replace(/</g, "\\u003c") }} />
    <SiteHeader />
    <main id="main" className="product-detail">
      <section className="product-detail__hero" id="top"><div className="shell">
        <nav className="product-detail__breadcrumb product-detail__breadcrumb--desktop" aria-label="Breadcrumb"><Link href="/">Home</Link><ArrowRight /><Link href={`/products/${category.slug}`}>{category.name}</Link><ArrowRight /><span>{product.name}</span></nav>
        <Link className="product-detail__back" href={`/products/${category.slug}`}><ArrowRight /><span>{category.name}</span></Link>
        <div className="product-detail__grid"><ProductGallery images={product.images} name={product.name} /><div className="product-detail__copy">
          <span className="eyebrow">{product.category}</span><h1>{product.name}</h1><p className="product-detail__lead">{product.description}</p>
          <div className="product-detail__tags">{product.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <dl className="product-detail__facts"><div><dt>Shown finish</dt><dd>{product.finish}</dd></div><div><dt>Branding</dt><dd>Recommended after artwork review</dd></div><div><dt>Availability</dt><dd>Confirmed against quantity and deadline</dd></div><div><dt>Delivery</dt><dd>Available across Pakistan</dd></div></dl>
          <div className="product-detail__actions"><a className="button button--orange" href={`https://wa.me/923001234567?text=${enquiryMessage}`} target="_blank" rel="noreferrer"><WhatsAppIcon /> Get Quote on WhatsApp</a></div>
          <p className="product-detail__disclaimer">Final material, dimensions, colour availability and branding suitability are confirmed against the selected item before production.</p>
        </div></div>
      </div></section>

      <section className="product-brief"><div className="shell product-brief__grid"><div><span className="eyebrow">Built around your brief</span><h2>Tell us what this product needs to do for your brand.</h2></div><div className="product-brief__list"><span>Required quantity</span><span>Logo or campaign artwork</span><span>Preferred branding direction</span><span>Packaging and presentation</span><span>Delivery city and deadline</span></div></div></section>

      {relatedProducts.length > 0 ? <section className="related-products"><div className="shell related-products__heading"><div><span className="eyebrow">Continue exploring</span><h2>More from {product.category}</h2></div><Link href={`/products/${category.slug}`}>View the category <ArrowUpRight /></Link></div><div className="shell related-products__grid">{relatedProducts.map((item) => <Link className="related-product" href={`/products/${item.categorySlug}/${item.slug}`} key={item.slug}><span className="related-product__image"><Image src={item.images[0]} alt={item.name} fill sizes="(max-width: 650px) 46vw, 31vw" /></span><span className="related-product__copy"><small>{item.category}</small><strong>{item.name}</strong><i>View product <ArrowUpRight /></i></span></Link>)}</div></section> : null}

      <section className="product-detail__cta"><div className="shell"><span className="eyebrow">Need a different variation?</span><h2>Share the reference.<br />We’ll help find the right direction.</h2><a className="button button--light" href={`https://wa.me/923001234567?text=${enquiryMessage}`} target="_blank" rel="noreferrer"><WhatsAppIcon /> Start this enquiry</a></div></section>
    </main>
    <SiteFooter />
    <div className="product-mobile-enquiry-spacer" aria-hidden="true" />
    <a className="product-mobile-enquiry" href={`https://wa.me/923001234567?text=${enquiryMessage}`} target="_blank" rel="noreferrer" aria-label={`Get a quote for ${product.name} on WhatsApp`}><WhatsAppIcon /><span>Get Quote on WhatsApp</span></a>
  </>;
}
