import Image from "next/image";
import { ArrowUpRight, MailIcon, PinIcon, WhatsAppIcon } from "@/components/ui/icons";

const wa = "https://wa.me/923001234567";
const footerGroups = [
  { title: "Explore", links: [["Products", "#products"], ["Solutions", "#solutions"], ["How it works", "#process"], ["About", "#about"]] },
  { title: "Product directions", links: [["Corporate gifts", "#products"], ["Drinkware", "#products"], ["Technology", "#products"], ["Custom packaging", "#products"]] },
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-pitch"><div className="shell footer-pitch__inner">
        <div className="footer-pitch__brand">
          <Image src="/images/brand/future-signing-logo-full.png" alt="Future Signing — Your Brand. On Everything." width={6000} height={2012} />
          <p>Custom products, corporate gifting and brand production for businesses across Pakistan.</p>
        </div>
        <div className="footer-pitch__cta">
          <p>Have a product, quantity or deadline in mind?</p><h2>Let&apos;s make your brand tangible.</h2>
          <div><a className="button button--orange" href="#contact">Start a project <ArrowUpRight /></a><a className="text-link" href={wa} target="_blank" rel="noreferrer"><WhatsAppIcon /> WhatsApp us</a></div>
        </div>
      </div></div>
      <div className="footer-info">
        <div className="shell footer-info__grid">
          <div className="footer-statement"><p>Your Brand.<br /><em>On Everything.</em></p><span>Lahore based · Pakistan wide</span></div>
          {footerGroups.map((group) => <nav aria-label={group.title} key={group.title}><h3>{group.title}</h3>{group.links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</nav>)}
          <div className="footer-contact"><h3>Talk to us</h3><a href={wa} target="_blank" rel="noreferrer"><WhatsAppIcon />+92 300 1234567</a><a href="mailto:info@futuresigning.pk"><MailIcon />info@futuresigning.pk</a><p><PinIcon />Gulberg III, Lahore, Pakistan</p></div>
        </div>
        <div className="shell footer-bottom"><p>© {new Date().getFullYear()} Future Signing. All rights reserved.</p><nav aria-label="Social media">{["Instagram", "Facebook", "LinkedIn", "TikTok"].map((label) => <a href="#" key={label}>{label}</a>)}</nav><a href="#top">Back to top <span>↑</span></a></div>
      </div>
    </footer>
  );
}
