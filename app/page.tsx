import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { HeroStage } from "@/components/hero-stage";
import { ProductUniverse } from "@/components/product-universe";
import { EnquiryForm } from "@/components/enquiry-form";
import { SolutionsGrid } from "@/components/solutions-grid";
import { SiteFooter } from "@/components/site-footer";
import { CompanyIntro } from "@/components/company-intro";
import { HowWeWork, MethodsGallery, ProjectJourney } from "@/components/process-sections";
import { TestimonialsPlaceholder } from "@/components/testimonials-placeholder";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRight, ArrowUpRight, MailIcon, PinIcon, WhatsAppIcon } from "@/components/ui/icons";
import { strengths } from "@/data/site";

const wa = "https://wa.me/923001234567";
const jsonLd = { "@context":"https://schema.org", "@type":["Organization","LocalBusiness"], name:"Future Signing", slogan:"Your Brand. On Everything.", url:"https://futuresigning.pk", logo:"https://futuresigning.pk/images/brand/future-signing-logo-full.png", email:"info@futuresigning.pk", telephone:"+92 300 1234567", address:{"@type":"PostalAddress",streetAddress:"Gulberg III",addressLocality:"Lahore",addressCountry:"PK"}, areaServed:{"@type":"Country",name:"Pakistan"}, description:"B2B printing, branded merchandise, customized products and corporate gifting for businesses across Pakistan." };

export default function Home() { return <>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd).replace(/</g,"\\u003c")}} />
  <SiteHeader />
  <main id="main">
    <section className="hero" id="top"><div className="hero__grid shell"><div className="hero__content"><p className="eyebrow hero__eyebrow"><span />Custom branding <b>•</b> Corporate gifting <b>•</b> All Pakistan</p><h1><span>Your brand belongs</span><span>on <em>everything.</em></span></h1><p className="hero__copy">From corporate gift boxes and employee kits to drinkware, technology and promotional merchandise—we customize, produce and deliver branded products at scale.</p><div className="hero__actions"><a className="button button--orange" href="#contact">Start your project <ArrowUpRight /></a><a className="text-link" href="#products">Explore products <ArrowRight /></a></div><a className="hero__whatsapp" href={wa} target="_blank" rel="noreferrer"><WhatsAppIcon /><span><small>Prefer a quick conversation?</small>Enquire on WhatsApp</span><ArrowUpRight /></a></div><HeroStage /></div><div className="hero__footer shell"><p>Based in Lahore <span /> Delivering nationwide</p><a href="#products">Scroll to explore <i /></a></div></section>
    <section className="trust-band" aria-label="Future Signing capabilities"><div className="shell trust-band__inner">{["Built for business","Brief-led solutions","Bulk-order support","One point of contact","Across Pakistan"].map((x,i)=><span className="trust-item" key={x}>{x}{i<4?<b />:null}</span>)}</div></section>
    <CompanyIntro />
    <section className="section products-section" id="products"><div className="shell"><SectionHeading eyebrow="The product universe" title="One brand. A world of physical possibilities." copy="Explore a starting point. Every recommendation is shaped around quantity, branding method, budget and deadline." /><ProductUniverse /></div></section>
    <section className="section occasions-section" id="solutions"><div className="shell"><div className="occasions-header"><SectionHeading eyebrow="Solutions & occasions" title="Made for moments that matter to business." copy="We connect the occasion to the object—then bring the product, branding and presentation into one considered solution." dark /><p>From a first day at work to a nationwide campaign, every project starts with a different purpose.</p></div><SolutionsGrid /></div></section>
    <section className="section work-section"><div className="shell"><header className="work-header reveal"><p className="eyebrow"><span />What we can create</p><h2>Possibilities, not pretend portfolios.</h2><p>These product visuals show available directions and formats. We’ll build your solution around your actual brand and brief.</p></header><div className="work-grid"><WorkCard cls="wide" src="/images/products/bottle4.png" alt="Potential branded drinkware collection" tag="Drinkware" title="Branded drinkware collection" copy="Coordinated finishes for teams, clients and campaigns." /><WorkCard cls="tall" src="/images/products/mug1.png" alt="Black and white travel mugs as a corporate gifting possibility" tag="Gifting" title="Office-ready essentials" copy="Useful products with a considered presentation." /><WorkCard cls="small" src="/images/products/fan1.png" alt="Portable fan colours for event merchandise" tag="Events" title="Event giveaway package" /><WorkCard cls="detail" src="/images/products/mock1.png" alt="Black drinkware suitable for an executive assortment" tag="Executive gifting" title="A curated product family" /></div></div></section>
    <HowWeWork />
    <MethodsGallery />
    <ProjectJourney />
    <section className="section reassurance-section" id="about"><div className="shell reassurance-layout"><div className="reassurance-copy reveal"><p className="eyebrow"><span />Why Future Signing</p><h2>A production partner that starts with the brief—not a shopping cart.</h2><p>Future Signing is built for organizations that need products to work harder: to welcome, recognize, promote, launch and connect. We coordinate the practical details so the final result feels coherent.</p><a className="text-link" href="#contact">Tell us what you need <ArrowRight /></a></div><div className="strengths-list">{strengths.map((x)=><div className="reveal" key={x}><span aria-hidden="true" /><p>{x}</p></div>)}</div></div><div className="location-banner shell reveal"><div><PinIcon /><span><small>Our base</small>Gulberg III, Lahore</span></div><p>One Lahore-based team.<br /><strong>Nationwide delivery across Pakistan.</strong></p><span className="location-banner__line" /></div></section>
    <TestimonialsPlaceholder />
    <section className="section enquiry-section" id="contact"><div className="shell"><div className="enquiry-heading reveal"><div><p className="eyebrow"><span />Start a project</p><h2>Let’s put your brand<br />on something <em>worth keeping.</em></h2></div><div><p>Share what you know so far. We’ll continue the conversation on WhatsApp and help shape the next steps.</p><a href="mailto:info@futuresigning.pk"><MailIcon />info@futuresigning.pk</a></div></div><EnquiryForm /></div></section>
  </main>
  <a className="floating-whatsapp" href={wa} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><WhatsAppIcon /><span>WhatsApp</span></a>
  <SiteFooter />
  </>; }

function WorkCard({cls,src,alt,tag,title,copy}:{cls:string;src:string;alt:string;tag:string;title:string;copy?:string}) { return <figure className={`work-card work-card--${cls} reveal`}><div><Image src={src} alt={alt} fill sizes="(max-width: 800px) 94vw, 52vw" /></div><figcaption><span>{tag}</span><h3>{title}</h3>{copy?<p>{copy}</p>:null}</figcaption></figure>; }
