"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { navItems } from "@/data/site";
import { ArrowUpRight, CloseIcon, MenuIcon, WhatsAppIcon } from "@/components/ui/icons";

export function SiteHeader() {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const f = () => setScrolled(window.scrollY > 24); f(); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="site-header__inner shell"><a className="brand" href="#top" aria-label="Future Signing home"><Image src="/images/brand/future-signing-logo.png" alt="Future Signing" width={1235} height={361} priority /></a>
      <nav className="desktop-nav" aria-label="Primary navigation">{navItems.map(i => <a key={i.href} href={i.href}>{i.label}</a>)}</nav>
      <div className="header-actions"><a className="icon-button" href="https://wa.me/923001234567" target="_blank" rel="noreferrer" aria-label="Enquire on WhatsApp"><WhatsAppIcon /></a><a className="button button--dark header-cta" href="#contact">Start a project <ArrowUpRight /></a><button className="menu-toggle" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>{open ? <CloseIcon /> : <MenuIcon />}</button></div>
    </div>
    <div id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}><nav aria-label="Mobile navigation">{navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight /></a>)}</nav><div className="mobile-menu__footer"><p>Gulberg III, Lahore</p><p>Nationwide delivery across Pakistan</p><a href="https://wa.me/923001234567">WhatsApp us <ArrowUpRight /></a></div></div>
  </header>;
}
