import Image from "next/image";
import Link from "next/link";
import { EnquiryForm } from "@/components/enquiry-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { HeroSlider } from "@/components/hero-slider";
import { ClientLogoMarquee } from "@/components/client-logo-marquee";
import { ArrowRight, ArrowUpRight, MailIcon, PinIcon, ProcessIcon, WhatsAppIcon } from "@/components/ui/icons";
import { catalogueCategories } from "@/data/products";

const wa = "https://wa.me/923001234567";
const trustItems = ["Corporate gifting", "Employee onboarding", "Custom merchandise", "Bulk-order support", "Nationwide delivery"];
const productMarqueeItems = ["Corporate gift boxes", "Onboarding kits", "Customized mugs", "Branded bottles", "Metal pens", "Custom keychains", "Diaries & notebooks", "Charging accessories"];

const serviceStories = [
  {
    eyebrow: "Made to be remembered",
    title: "Corporate Gifts",
    copy: "Mark an occasion, welcome a new employee or thank an important client with gifting that feels coherent from product to presentation.",
    products: "Corporate gift boxes, notebooks, drinkware, charging accessories and executive sets can be assembled around the recipient and brief.",
    image: "/images/catalogue-products/customized-emplyee-onboarding--red-tumbler-kit--studio.webp",
    alt: "Red corporate tumbler gift box with coordinated Future Signing products",
    href: "/products",
    link: "Explore corporate gifts",
  },
  {
    eyebrow: "Made to circulate",
    title: "Promotional Products",
    copy: "Put your brand into the hands of the people you want to reach with useful merchandise designed for everyday visibility.",
    products: "Branded USB drives, promotional keychains, custom mugs, mini fans, pens and bottles create practical campaign touchpoints.",
    image: "/images/promotional-products.png",
    alt: "Collection of customizable promotional apparel, display items, bags and drinkware",
    href: "/products",
    link: "Browse promotional products",
  },
  {
    eyebrow: "Made personal",
    title: "Personalized Items",
    copy: "Give clients, business partners and employees something that feels considered—not pulled from a generic shelf.",
    products: "Customized desk pieces, wallets, card holders, keychains and practical accessories can be coordinated around your identity.",
    image: "/images/customized-apparael.webp",
    alt: "Stack of customizable apparel ready for personalized artwork",
    href: "/products",
    link: "Explore personalized products",
  },
] as const;

const solutions = [
  { title: "Employee onboarding", copy: "Make a first day feel considered before it begins.", image: "/images/catalogue/black-wallet-kit.png" },
  { title: "Client appreciation", copy: "Turn a thoughtful gesture into a lasting brand moment.", image: "/images/catalogue/black-presentation-set.png" },
  { title: "Events & conferences", copy: "Give every attendee something useful, memorable and on-brand.", image: "/images/catalogue/table-flags.png" },
  { title: "Product launches", copy: "Extend your campaign into tactile, shareable merchandise.", image: "/images/catalogue/red-tumbler-kit.png" },
  { title: "Recognition & festive gifting", copy: "Celebrate people and milestones with coordinated presentation.", image: "/images/catalogue/red-presentation-set.png" },
] as const;

const process = [
  { icon: "select", title: "Pick your product direction", copy: "Start with a category or tell us the outcome you want. We will help narrow the options." },
  { icon: "brief", title: "Share your brand & brief", copy: "Send your logo, quantity, budget, delivery city and expected deadline." },
  { icon: "approve", title: "Approve the artwork", copy: "Review the proposed placement, production details and sample route where required." },
  { icon: "deliver", title: "Leave the rest to us", copy: "We coordinate production, quality checks, presentation and nationwide delivery." },
] as const;

const methods = [
  { title: "Screen printing", copy: "Bold, repeatable branding for compatible products and textiles.", image: "/images/methods/screen-printing.png" },
  { title: "UV printing", copy: "Detailed colour application on suitable rigid product surfaces.", image: "/images/methods/uv-printing.png" },
  { title: "Laser engraving", copy: "A precise, understated finish for compatible metal products.", image: "/images/methods/laser-engraving.png" },
  { title: "Embossing & debossing", copy: "Raised or recessed brand details for compatible leather, paper and packaging surfaces.", image: "/images/methods/embossing-debossing.png" },
  { title: "Foil stamping", copy: "A metallic accent for selected packaging, stationery and presentation materials.", image: "/images/methods/foil-stamping.png" },
  { title: "Embroidery", copy: "Dimensional branding for selected apparel, uniforms and textiles.", image: "/images/methods/embroidery.png" },
  { title: "Artwork preparation", copy: "Production-minded artwork checks and placement preparation before approval.", image: "/images/methods/artwork-preparation.png" },
  { title: "Heat transfer", copy: "Applied graphics for compatible garments, bags and textile merchandise.", image: "/images/methods/heat-transfer.png" },
  { title: "Sublimation", copy: "Full-colour application for suitable coated products and polyester-based materials.", image: "/images/methods/sublimation.png" },
  { title: "Custom packaging", copy: "Boxes, sleeves and inserts coordinated around the product experience.", image: "/images/methods/custom-packaging.png" },
] as const;

const faqs = [
  ["Can you help us choose the right products?", "Yes. Share the audience, occasion, quantity, budget and deadline. We will help shape a practical shortlist instead of asking you to search through an endless catalogue."],
  ["Do you handle large corporate quantities?", "Future Signing is structured for B2B and bulk requirements. Feasibility, timelines and production methods are confirmed against each brief before an order proceeds."],
  ["What artwork do you need?", "Vector artwork is ideal, but send whatever files you currently have. We can advise what is production-ready and where artwork preparation may be required."],
  ["Can we approve the branding before production?", "Artwork placement is approved before production. Physical samples depend on the product, method, quantity and timeline, so we will confirm the appropriate approval route for your project."],
  ["Which printing methods do you offer?", "Available methods include screen printing, UV printing, laser engraving, embroidery, heat transfer and sublimation, depending on the product material and artwork."],
  ["Do you deliver outside Lahore?", "Yes. Future Signing is Lahore-based and coordinates delivery to cities across Pakistan."],
  ["Can you create a product that is not shown here?", "Absolutely. The homepage is a starting point, not the full product universe. Send a reference or describe what you need and we will assess suitable options."],
] as const;

const organizationSchema = {
  "@context": "https://schema.org", "@type": ["Organization", "LocalBusiness"], name: "Future Signing", slogan: "Your Brand. On Everything.", url: "https://futuresigning.pk", logo: "https://futuresigning.pk/images/brand/future-signing-logo-full.png", email: "info@futuresigning.pk", telephone: "+92 300 1234567", address: { "@type": "PostalAddress", streetAddress: "Gulberg III", addressLocality: "Lahore", addressCountry: "PK" }, areaServed: { "@type": "Country", name: "Pakistan" },
};
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };

function SectionIntro({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return <header className={`section-intro${light ? " section-intro--light" : ""}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy ? <p>{copy}</p> : null}</header>;
}

function CustomizationMethods() {
  return <section className="methods-section section-space"><div className="shell"><SectionIntro eyebrow="Customization methods" title="The finish should fit the product—and the brand." copy="We recommend a production route based on the material, artwork, quantity and intended use." light /><div className="methods-rail">{methods.map((item) => <article className="method-card" key={item.title}><div><Image src={item.image} alt={`Representative ${item.title.toLowerCase()} production process`} fill sizes="(max-width: 700px) 80vw, 28vw" /></div><span>{item.title}</span><p>{item.copy}</p></article>)}</div><p className="methods-note">Method suitability and final production details are confirmed for each project.</p></div></section>;
}

export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
    <SiteHeader />
    <main id="main">
      <section className="hero" id="top">
        <div className="hero-orbit hero-orbit--one" /><div className="hero-orbit hero-orbit--two" />
        <div className="shell hero-grid">
          <div className="hero-copy"><h1>Your brand belongs <span>on everything.</span></h1><p>From corporate gift boxes and employee kits to drinkware, technology and promotional merchandise—we customize, produce and deliver branded products at scale.</p><div className="hero-actions"><a className="button button--orange" href="#contact">Start your project <ArrowUpRight /></a><a className="button button--ghost" href="#products">Explore products <ArrowRight /></a></div><a className="hero-whatsapp" href={wa} target="_blank" rel="noreferrer"><WhatsAppIcon /><span><small>Prefer a quick conversation?</small>Enquire on WhatsApp</span></a></div>
          <div className="hero-visual"><HeroSlider /></div>
        </div>
        <div className="trust-ribbon" aria-label="Future Signing service strengths"><div className="trust-track"><div className="marquee-set">{trustItems.map((item) => <span key={item}><i>◆</i>{item}</span>)}</div><div className="marquee-set" aria-hidden="true">{trustItems.map((item) => <span key={`duplicate-${item}`}><i>◆</i>{item}</span>)}</div></div></div>
      </section>

      <section className="intro-section section-space" id="about"><div className="shell intro-grid"><div className="intro-media"><div className="intro-photo"><Image src="/images/catalogue/red-welcome-kit.png" alt="Red branded employee welcome kit by Future Signing" fill sizes="(max-width: 820px) 100vw, 43vw" /></div><div className="intro-stamp"><span>Your idea.</span><span>Our production.</span><strong>One partner.</strong></div></div><article className="intro-copy"><span className="eyebrow">More than a product supplier</span><h2>We turn a business brief into something people can hold.</h2><p className="lead">Future Signing helps companies translate their identity into corporate gifts, employee kits, promotional merchandise and custom packaging.</p><p>You do not need to arrive with a finished shopping list. Tell us who the products are for, why they matter, your quantity, budget and deadline. We coordinate the product direction, branding method and presentation around the outcome.</p><div className="inline-callout"><strong>From one useful object to a fully coordinated gift set.</strong><span>Planned in Lahore. Delivered across Pakistan.</span></div></article></div></section>

      <section className="service-stories" aria-label="Future Signing services"><div className="shell service-stories__list">{serviceStories.map((item) => <article className="service-story" key={item.title}><div className="service-story__copy"><span className="eyebrow">{item.eyebrow}</span><h2>{item.title}</h2><p>{item.copy}</p><p className="service-story__products">{item.products}</p><Link className="text-link" href={item.href}>{item.link} <ArrowRight /></Link></div><div className="service-story__visual"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 50vw" /></div></article>)}</div></section>

      <section className="products-section section-space" id="products"><div className="shell"><SectionIntro eyebrow="Your brand, imprinted on everything" title="Products ready for your identity." copy="Choose a category to explore every available product direction, then open an individual product page for details and enquiry." /><div className="category-grid">{catalogueCategories.map((category, index) => <Link className={`category-card category-card--${index + 1}`} href={`/products/${category.slug}`} aria-label={`Explore ${category.name}`} key={category.slug}><div className="category-image">{category.heroImage ? <><Image src={category.heroImage} alt={`${category.name} by Future Signing`} fill sizes="(max-width: 700px) 46vw, (max-width: 1050px) 45vw, 30vw" />{category.slug === "bags" ? <span className="category-brand-mark" aria-hidden="true"><Image src="/images/brand/fs-favicon.png" alt="" width={64} height={57} /></span> : null}</> : <div className="category-placeholder"><span>Future collection</span><strong>{category.name}</strong><small>Being prepared</small></div>}</div><div className="category-copy"><small>{category.eyebrow}</small><span className="category-name">{category.name}</span><p>{category.metaDescription}</p><span className="category-cta">Explore category <ArrowUpRight /></span></div></Link>)}</div><div className="centered-cta"><Link className="button button--dark" href="/products">View all products <ArrowUpRight /></Link></div><p className="product-close">Your brand, <em>imprinted on everything.</em></p></div></section>

      <CustomizationMethods />

      <div className="product-marquee process-marquee" aria-hidden="true"><div className="product-marquee__track"><div className="marquee-set">{productMarqueeItems.map((item) => <span key={item}>{item}<i>✦</i></span>)}</div><div className="marquee-set">{productMarqueeItems.map((item) => <span key={`duplicate-${item}`}><i>✦</i>{item}</span>)}</div></div></div>

      <section className="process-section section-space" id="process"><div className="shell"><SectionIntro eyebrow="How we work" title="A clear route from idea to delivery." copy="Simple enough to understand at a glance, structured enough to support serious corporate orders." /><div className="process-grid">{process.map((item) => <article className="process-card" key={item.title}><div className="process-icon"><ProcessIcon name={item.icon} /></div><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div><div className="centered-cta"><a className="button button--orange" href="#contact">Start with your brief <ArrowUpRight /></a></div></div></section>

      <section className="solutions-section section-space" id="solutions"><div className="solution-orbit" /><div className="shell"><SectionIntro eyebrow="Solutions, not shelf stock" title="Built around the moment your business needs to create." copy="The occasion leads. The product, branding and packaging follow." light /><div className="solution-road"><div className="road-line" />{solutions.map((item, index) => <article className="solution-card" key={item.title}><div className="solution-image"><Image src={item.image} alt={`${item.title} product direction`} fill sizes="(max-width: 760px) 92vw, 42vw" /></div><div><span>{index % 2 ? "Strengthen relationships" : "Create a brand moment"}</span><h3>{item.title}</h3><p>{item.copy}</p><a href="#contact" data-interest={item.title}>Plan this project <ArrowRight /></a></div></article>)}</div></div></section>

      <section className="feature-section section-space"><div className="shell feature-grid"><div className="feature-image"><Image src="/images/catalogue/hero-executive-kit.png" alt="Executive branded gift set with notebook, bottle, pen and keychain" fill sizes="(max-width: 820px) 100vw, 55vw" /></div><article><span className="eyebrow">A coordinated result</span><h2>Not just items in a box. A complete brand experience.</h2><p>Product selection, colour, logo placement, inserts and packaging should feel like parts of one story—not five separate purchasing decisions.</p><ul><li>Product and packaging coordination</li><li>Brand-conscious artwork placement</li><li>A practical route for quantity and budget</li><li>One point of contact from brief to delivery</li></ul><a className="button button--dark" href="#contact" data-interest="Corporate gift boxes">Build a gift set <ArrowUpRight /></a></article></div></section>

      <section className="comparison-section section-space"><div className="shell comparison-shell"><SectionIntro eyebrow="Why companies choose a coordinated partner" title="One brief. One production conversation. One coherent result." /><div className="comparison-grid"><div className="comparison-card comparison-card--muted"><span>Fragmented sourcing</span><h3>Too many moving parts</h3><ul><li>Separate product and packaging suppliers</li><li>Repeated artwork conversations</li><li>Inconsistent finishes and presentation</li><li>Delivery coordination left to your team</li></ul></div><div className="comparison-card comparison-card--winner"><span>Future Signing</span><h3>A connected production route</h3><ul><li>Recommendations shaped around the brief</li><li>Brand application considered early</li><li>Products and presentation planned together</li><li>One point of contact through delivery</li></ul></div></div></div></section>

      <section className="coverage-section section-space"><div className="shell coverage-grid"><div className="coverage-visual"><Image className="coverage-map" src="/images/lahore-map-texture.png" alt="Muted street map texture representing nationwide delivery from Lahore" fill sizes="(max-width: 820px) 92vw, 45vw" /><div className="coverage-ring coverage-ring--one" /><div className="coverage-ring coverage-ring--two" /><div className="coverage-ring coverage-ring--three" /><div className="coverage-center"><PinIcon /><strong>Lahore</strong><span>Production base</span></div><span className="coverage-label coverage-label--north">Islamabad</span><span className="coverage-label coverage-label--south">Karachi</span><span className="coverage-label coverage-label--west">Peshawar</span><span className="coverage-label coverage-label--east">Pakistan-wide</span></div><article><span className="eyebrow">Nationwide coordination</span><h2>Lahore based. Built to deliver across Pakistan.</h2><p>Whether the order is for one office or destinations across the country, we plan the product, presentation and delivery requirements as part of the same brief.</p><div className="assurance-list">{["Solutions based on your brief", "Support for bulk requirements", "Brand-conscious production", "Product and packaging coordination", "Nationwide delivery", "One point of contact"].map((item) => <span key={item}><i>✓</i>{item}</span>)}</div></article></div></section>

      <section className="reviews-section section-space"><div className="shell"><div className="reviews-heading"><SectionIntro eyebrow="Client experiences" title="A place for verified stories." copy="This space is intentionally reserved for genuine client feedback—not invented praise." /><span className="reviews-status">Reviews coming soon</span></div><div className="review-grid">{["Corporate gifting", "Employee onboarding", "Campaign merchandise"].map((item) => <article className="review-placeholder" key={item}><span className="review-mark">“</span><div><i /><i /><i /></div><footer><span>FS</span><p><strong>Verified client story reserved</strong><small>{item}</small></p></footer></article>)}</div></div></section>

      <section className="client-logos" aria-labelledby="client-logo-title"><div className="shell client-logos__heading"><div><span className="eyebrow">Client logo wall</span><h2 id="client-logo-title">Built to work with ambitious teams.</h2></div></div><ClientLogoMarquee /></section>

      <section className="faq-section section-space" id="faq"><div className="shell faq-grid"><header className="faq-heading"><span className="eyebrow">Good questions, clear answers</span><h2>Before your project starts.</h2><p>Every order is custom, but the first conversation can still be straightforward.</p><a className="text-link" href="#contact">Ask something specific <ArrowRight /></a></header><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<i><ArrowRight /></i></summary><p>{answer}</p></details>)}</div></div></section>

      <section className="enquiry-section section-space" id="contact"><div className="shell"><div className="enquiry-heading"><div><span className="eyebrow">Start a project</span><h2>Tell us what you need.<br /><em>We’ll shape the route.</em></h2></div><div><p>Share what you know so far. Your answers will open as a prepared WhatsApp enquiry.</p><a href="mailto:info@futuresigning.pk"><MailIcon /> info@futuresigning.pk</a></div></div><EnquiryForm /></div></section>

      <section className="final-cta"><div className="final-orbit final-orbit--one" /><div className="final-orbit final-orbit--two" /><div className="shell final-cta__inner"><span className="eyebrow">Your Brand. On Everything.</span><h2>Have a product, quantity<br />or deadline in mind?</h2><p>Let’s turn it into a clear, production-ready project.</p><div><a className="button button--light" href="#contact">Start your project <ArrowUpRight /></a><a className="button button--outline-light" href={wa} target="_blank" rel="noreferrer"><WhatsAppIcon /> WhatsApp us</a></div></div></section>
    </main>
    <a className="floating-whatsapp" href={wa} target="_blank" rel="noreferrer" aria-label="Chat with Future Signing on WhatsApp"><WhatsAppIcon /><span>WhatsApp</span></a>
    <SiteFooter />
  </>;
}
