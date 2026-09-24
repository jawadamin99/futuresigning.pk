import Link from "next/link";
import { ArrowRight, ArrowUpRight, PinIcon, WhatsAppIcon } from "@/components/ui/icons";

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-glow" aria-hidden="true" />
    <div className="footer-main shell">
      <div className="footer-showcase">
        <div><span className="eyebrow">Your next brand moment starts here</span><h2>Your brand.<br /><em>On everything.</em></h2></div>
        <a className="footer-whatsapp" href="https://wa.me/923001234567" target="_blank" rel="noreferrer"><WhatsAppIcon /><span><small>Have a project in mind?</small><strong>Start on WhatsApp</strong></span><ArrowUpRight /></a>
      </div>

      <div className="footer-service-strip" aria-label="Future Signing services"><span>Corporate gifting</span><i>✦</i><span>Corporate Giveaways</span><i>✦</i><span>Employee onboarding</span><i>✦</i><span>Anything you name it...</span></div>

      <div className="footer-grid">
        <div className="footer-brand"><p>Premium corporate gifting, branded merchandise and custom production for businesses across Pakistan.</p><a className="footer-email" href="mailto:info@futuresigning.pk">info@futuresigning.pk <ArrowRight /></a></div>
        <nav className="footer-column" aria-label="Explore"><h3>Explore</h3><Link href="/products">Products</Link><Link href="/#solutions">Solutions</Link><Link href="/#process">How it works</Link><Link href="/#about">About us</Link><Link href="/#faq">FAQ</Link></nav>
        <nav className="footer-column" aria-label="Product categories"><h3>Popular requests</h3><Link href="/products/corporate-gift-sets">Corporate gift sets</Link><Link href="/products/ceramic-mugs">Customized mugs</Link><Link href="/products/customized-water-bottles">Branded bottles</Link><Link href="/products/technology-gifts">Technology gifts</Link><Link href="/products/promotional-mini-fans">Promotional mini fans</Link></nav>
        <div className="footer-column footer-contact"><h3>Find us</h3><a href="https://wa.me/923001234567" target="_blank" rel="noreferrer"><WhatsAppIcon /> +92 300 1234567</a><p><PinIcon /> Gulberg III, Lahore, Pakistan</p><p className="footer-delivery">Nationwide delivery across Pakistan</p><div className="social-links" aria-label="Social media"><a href="#">Instagram</a><a href="#">Facebook</a><a href="#">LinkedIn</a><a href="#">TikTok</a></div></div>
      </div>

      <div className="footer-wordmark" aria-hidden="true">FUTURE SIGNING</div>
    </div>
    <div className="shell footer-bottom"><p>© {new Date().getFullYear()} Future Signing. All rights reserved.</p><p>Corporate branding · Gifting · Custom merchandise</p><a href="#top">Back to top <span>↑</span></a></div>
  </footer>;
}
