"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, CloseIcon, MailIcon, MenuIcon, PinIcon, WhatsAppIcon } from "@/components/ui/icons";
import { catalogueCategories, catalogueProducts } from "@/data/products";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return <>
    <a className="skip-link" href="#main">Skip to main content</a>
    <div className="utility-bar"><div className="shell utility-inner"><span><PinIcon /> Gulberg III, Lahore</span><span className="utility-promise">Custom branding · Corporate gifting · Nationwide delivery</span><a href="mailto:info@futuresigning.pk"><MailIcon /> info@futuresigning.pk</a></div></div>
    <header className={`site-header${scrolled ? " scrolled" : ""}`} onKeyDown={(event) => { if (event.key === "Escape") setMegaOpen(false); }}>
      <div className="site-header__inner shell">
        <Link className="brand" href="/" aria-label="Future Signing home"><Image src="/images/brand/future-signing-logo.png" alt="Future Signing" width={1235} height={361} priority /></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <div className="products-nav-item" onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setMegaOpen(false); }}>
            <button type="button" aria-expanded={megaOpen} aria-controls="product-mega-menu" onClick={() => setMegaOpen((value) => !value)}>Products <span aria-hidden="true">⌄</span></button>
            <div id="product-mega-menu" className={`product-mega-menu${megaOpen ? " is-open" : ""}`}>
              <div className="shell product-mega-menu__inner">
                <div className="product-mega-menu__intro"><span>Product catalogue</span><strong>Your brand.<br />On everything.</strong><p>Explore {catalogueProducts.length} customizable product directions across {catalogueCategories.length} focused categories.</p><Link href="/products" onClick={() => setMegaOpen(false)}>View all products <ArrowUpRight /></Link></div>
                <div className="product-mega-menu__categories">{catalogueCategories.map((category) => <Link href={`/products/${category.slug}`} onClick={() => setMegaOpen(false)} key={category.slug}><span>{category.name}</span><ArrowRight /></Link>)}</div>
              </div>
            </div>
          </div>
        </nav>
        <div className="header-actions"><a className="header-whatsapp" href="https://wa.me/923001234567" target="_blank" rel="noreferrer" aria-label="Enquire on WhatsApp"><WhatsAppIcon /></a><Link className="button button--dark header-cta" href="/#contact">Start a project <ArrowUpRight /></Link><button className="menu-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <CloseIcon /> : <MenuIcon />}</button></div>
      </div>
      <div id="mobile-menu" className={`mobile-menu${open ? " open" : ""}`} aria-hidden={!open}><nav aria-label="Mobile navigation"><Link href="/" onClick={() => setOpen(false)}>Home <ArrowUpRight /></Link><Link href="/products" onClick={() => setOpen(false)}>Products <ArrowUpRight /></Link><div className="mobile-menu__categories"><span>Product categories</span>{catalogueCategories.map((category) => <Link href={`/products/${category.slug}`} onClick={() => setOpen(false)} key={category.slug}>{category.name}<ArrowRight /></Link>)}</div></nav><div className="mobile-menu__footer"><p>Gulberg III, Lahore, Pakistan</p><p>Nationwide delivery across Pakistan</p><a href="https://wa.me/923001234567" target="_blank" rel="noreferrer">WhatsApp us <ArrowUpRight /></a></div></div>
    </header>
  </>;
}
