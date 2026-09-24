"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, CloseIcon, MailIcon, MenuIcon, PinIcon, WhatsAppIcon } from "@/components/ui/icons";

const links = [
  ["Products", "#products"], ["Solutions", "#solutions"], ["How It Works", "#process"],
  ["About", "#about"], ["FAQ", "#faq"], ["Contact", "#contact"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
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
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="site-header__inner shell">
        <a className="brand" href="#top" aria-label="Future Signing home"><Image src="/images/brand/future-signing-logo.png" alt="Future Signing" width={1235} height={361} priority /></a>
        <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav>
        <div className="header-actions"><a className="header-whatsapp" href="https://wa.me/923001234567" target="_blank" rel="noreferrer" aria-label="Enquire on WhatsApp"><WhatsAppIcon /></a><a className="button button--dark header-cta" href="#contact">Start a project <ArrowUpRight /></a><button className="menu-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <CloseIcon /> : <MenuIcon />}</button></div>
      </div>
      <div id="mobile-menu" className={`mobile-menu${open ? " open" : ""}`} aria-hidden={!open}><nav aria-label="Mobile navigation">{links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight /></a>)}</nav><div className="mobile-menu__footer"><p>Gulberg III, Lahore, Pakistan</p><p>Nationwide delivery across Pakistan</p><a href="https://wa.me/923001234567" target="_blank" rel="noreferrer">WhatsApp us <ArrowUpRight /></a></div></div>
    </header>
  </>;
}
