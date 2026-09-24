import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCatalogue } from "@/components/product-catalogue";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ArrowRight, ArrowUpRight, WhatsAppIcon } from "@/components/ui/icons";
import { catalogueCategories, getCategory, getProductsByCategory } from "@/data/products";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return catalogueCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) notFound();

  return {
    title: `${category.name} | Customized Corporate Products Pakistan`,
    description: category.metaDescription,
    keywords: [...category.keywords],
    alternates: { canonical: `/products/${category.slug}` },
    openGraph: {
      title: `${category.title} | Future Signing`,
      description: category.metaDescription,
      url: `/products/${category.slug}`,
      images: [{ url: category.heroImage, alt: `${category.name} by Future Signing` }],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) notFound();
  const products = getProductsByCategory(category.slug);
  const path = `https://futuresigning.pk/products/${category.slug}`;
  const enquiryMessage = encodeURIComponent(`Hello Future Signing, I would like to discuss a project involving ${category.name}. Please share suitable product and branding options.`);

  const categorySchema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CollectionPage", name: category.name, description: category.metaDescription, url: path, primaryImageOfPage: `https://futuresigning.pk${category.heroImage}` },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://futuresigning.pk" },
        { "@type": "ListItem", position: 2, name: "Products", item: "https://futuresigning.pk/products" },
        { "@type": "ListItem", position: 3, name: category.name, item: path },
      ] },
      { "@type": "ItemList", name: category.name, itemListElement: products.map((product, index) => ({
        "@type": "ListItem", position: index + 1, name: product.name, url: `${path}/${product.slug}`,
      })) },
    ],
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema).replace(/</g, "\\u003c") }} />
    <SiteHeader />
    <main id="main" className="category-landing">
      <section className="category-landing__hero" id="top">
        <div className="category-landing__orbit" aria-hidden="true" />
        <div className="shell">
          <nav className="product-detail__breadcrumb category-landing__breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><ArrowRight /><Link href="/products">Products</Link><ArrowRight /><span>{category.name}</span></nav>
          <div className="category-landing__grid">
            <div className="category-landing__copy"><span className="eyebrow">{category.eyebrow}</span><h1>{category.title}</h1><p>{category.description}</p><div className="category-landing__actions"><a className="button button--orange" href="#category-products">Explore products <ArrowUpRight /></a></div></div>
            <div className="category-landing__visual"><div><Image src={category.heroImage} alt={`Customized ${category.name.toLowerCase()} by Future Signing`} fill priority sizes="(max-width: 820px) 94vw, 45vw" /></div><span><strong>{products.length}</strong> product {products.length === 1 ? "direction" : "directions"} currently shown</span></div>
          </div>
        </div>
      </section>

      <nav className="category-switcher" aria-label="Other product categories"><div className="shell">{catalogueCategories.map((item) => <Link className={item.slug === category.slug ? "is-active" : undefined} aria-current={item.slug === category.slug ? "page" : undefined} href={`/products/${item.slug}`} key={item.slug}>{item.name}</Link>)}</div></nav>

      <section className="category-landing__intro" id="category-products"><div className="shell"><div><span className="eyebrow">The {category.name} collection</span><h2>Choose the product.<br />We’ll shape the branding.</h2></div><p>Every final recommendation is confirmed against your quantity, artwork, presentation requirements, delivery city and deadline.</p></div></section>
      <ProductCatalogue products={products} activeCategorySlug={category.slug} />

      <section className="category-landing__cta"><div className="shell"><span className="eyebrow">Need help choosing?</span><h2>Start with the outcome.<br />We’ll narrow the options.</h2><p>Tell us who the product is for, how many you need and when it must arrive.</p><a className="button button--light" href={`https://wa.me/923001234567?text=${enquiryMessage}`} target="_blank" rel="noreferrer"><WhatsAppIcon /> Ask about {category.name}</a></div></section>
    </main>
    <SiteFooter />
  </>;
}
