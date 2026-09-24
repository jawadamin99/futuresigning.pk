"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, WhatsAppIcon } from "@/components/ui/icons";
import { catalogueCategories, catalogueProducts, type CatalogueProduct } from "@/data/products";

type ProductCatalogueProps = {
  products?: readonly CatalogueProduct[];
  activeCategorySlug?: string;
};

export function ProductCatalogue({ products = catalogueProducts, activeCategorySlug }: ProductCatalogueProps) {
  const [query, setQuery] = useState("");
  const visibleProducts = useMemo(() => {
    const search = query.trim().toLowerCase();
    return products.filter((product) => !search || [product.name, product.category, product.description, product.finish, ...product.tags].some((value) => value.toLowerCase().includes(search)));
  }, [products, query]);
  const activeCategory = catalogueCategories.find((category) => category.slug === activeCategorySlug);

  return <section className="catalogue catalogue-shop" aria-label="Product catalogue">
    <div className="shell catalogue-shop__layout">
      <aside className="catalogue-sidebar" aria-label="Catalogue filters">
        <div className="catalogue-sidebar__inner">
          <div className="catalogue-sidebar__heading"><span>Browse catalogue</span><strong>{catalogueProducts.length}</strong></div>
          <label className="catalogue-search"><span>Search products</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search mugs, fans, gift sets…" /></label>
          <nav className="catalogue-sidebar__categories" aria-label="Product categories">
            <Link className={!activeCategorySlug ? "is-active" : undefined} aria-current={!activeCategorySlug ? "page" : undefined} href="/products"><span>All products</span><small>{catalogueProducts.length}</small></Link>
            {catalogueCategories.map((category) => {
              const count = catalogueProducts.filter((product) => product.categorySlug === category.slug).length;
              return <Link className={category.slug === activeCategorySlug ? "is-active" : undefined} aria-current={category.slug === activeCategorySlug ? "page" : undefined} href={`/products/${category.slug}`} key={category.slug}><span>{category.name}</span><small>{count}</small></Link>;
            })}
          </nav>
          <div className="catalogue-sidebar__help"><span>Need something else?</span><p>Send a product reference and we’ll assess the possibilities.</p><a href="https://wa.me/923001234567?text=Hello%20Future%20Signing%2C%20I%20need%20help%20finding%20a%20custom%20product." target="_blank" rel="noreferrer"><WhatsAppIcon /> Ask on WhatsApp</a></div>
        </div>
      </aside>

      <div className="catalogue-results">
        <header className="catalogue-results__header"><div><span>{activeCategory ? activeCategory.name : "Complete collection"}</span><h2>{activeCategory ? `Explore ${activeCategory.name.toLowerCase()}.` : "All products."}</h2></div><div className="catalogue-count" aria-live="polite"><strong>{visibleProducts.length}</strong><span>{visibleProducts.length === 1 ? "result" : "results"}</span></div></header>
        <div className="catalogue-grid">
          {visibleProducts.map((product) => <article className="catalogue-card" id={product.slug} key={product.slug}>
            <Link className="catalogue-card__image" href={`/products/${product.categorySlug}/${product.slug}`} aria-label={`View ${product.name}`}><Image src={product.images[0]} alt={`${product.name} available for customization by Future Signing`} fill sizes="(max-width: 680px) 92vw, (max-width: 1050px) 44vw, 24vw" /></Link>
            <div className="catalogue-card__body"><span><Link href={`/products/${product.categorySlug}`}>{product.category}</Link></span><h3><Link href={`/products/${product.categorySlug}/${product.slug}`}>{product.name}</Link></h3><p>{product.description}</p><div className="catalogue-card__tags">{product.tags.map((tag) => <small key={tag}>{tag}</small>)}</div><Link href={`/products/${product.categorySlug}/${product.slug}`}>View product details <ArrowUpRight /></Link></div>
          </article>)}
        </div>
        {visibleProducts.length === 0 ? <div className="catalogue-empty"><h2>No matching products found.</h2><p>Try a broader search or browse another category.</p><button type="button" onClick={() => setQuery("")}>Clear search</button></div> : null}
        <Link className="catalogue-results__next" href={activeCategory ? "/products" : `/products/${catalogueCategories[0].slug}`}>{activeCategory ? "Return to all products" : "Start with corporate gift sets"}<ArrowRight /></Link>
      </div>
    </div>
  </section>;
}
