import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ArrowUpRight, WhatsAppIcon } from "@/components/ui/icons";

export default function NotFound() {
  return <><SiteHeader /><main id="main" className="site-not-found"><div className="site-not-found__orbit" aria-hidden="true" /><div className="shell site-not-found__inner"><span className="site-not-found__code">404</span><span className="eyebrow">That page isn’t here</span><h1>Let’s get you back<br />to something <em>useful.</em></h1><p>The address may be incorrect or the page may have moved. Continue to the homepage or explore the complete product catalogue.</p><div><Link className="button button--orange" href="/">Return home <ArrowUpRight /></Link><Link className="button button--outline-light" href="/products">Browse products <ArrowUpRight /></Link><a className="site-not-found__whatsapp" href="https://wa.me/923001234567" target="_blank" rel="noreferrer"><WhatsAppIcon /> Ask for help</a></div></div></main><SiteFooter /></>;
}
