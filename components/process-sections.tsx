import Image from "next/image";
import { howWeWork, methods, processSteps } from "@/data/site";
import { ArrowUpRight, ProcessIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";

export function HowWeWork() {
  return (
    <section className="section how-section" id="how-we-work">
      <div className="shell">
        <div className="how-header reveal"><p className="eyebrow"><span />How we work</p><h2>From an idea to something your audience can hold.</h2><p>A simple starting point for custom projects—without turning the experience into a shopping cart.</p></div>
        <div className="how-grid">
          {howWeWork.map((step) => <article className="how-card reveal" key={step.title}><div><Image src={step.image} alt={step.alt} fill sizes="(max-width: 700px) 92vw, 31vw" /></div><h3>{step.title}</h3><p>{step.copy}</p></article>)}
        </div>
        <a className="button button--dark how-cta" href="#contact">Start with your brief <ArrowUpRight /></a>
      </div>
    </section>
  );
}

export function MethodsGallery() {
  return (
    <section className="section methods-section">
      <div className="shell">
        <div className="methods-heading"><SectionHeading eyebrow="Customization methods" title="The right finish changes how a brand is felt." copy="The exact route depends on the product, artwork, quantity and required result. These representative visuals show the capabilities we can help coordinate." /><p>Capability imagery is illustrative and does not depict a Future Signing facility.</p></div>
        <div className="methods-grid">
          {methods.map((method) => <article className={`method-card ${method.featured ? "method-card--featured" : ""} reveal`} key={method.title}><div className="method-card__image"><Image src={method.image} alt={method.alt} fill sizes={method.featured ? "(max-width: 700px) 92vw, 48vw" : "(max-width: 700px) 92vw, 24vw"} /></div><div className="method-card__body"><h3>{method.title}</h3><p>{method.copy}</p><span aria-hidden="true">↗</span></div></article>)}
        </div>
      </div>
    </section>
  );
}

export function ProjectJourney() {
  return (
    <section className="section process-section" id="process">
      <div className="shell">
        <div className="journey-heading"><SectionHeading eyebrow="A clear project journey" title="Five decisions. One coordinated route." copy="The detailed path stays visible without making the process feel complicated." dark /><p>Scroll to explore <span>→</span></p></div>
        <ol className="journey-grid">
          {processSteps.map((step) => <li className="journey-card reveal" key={step.title}><div><ProcessIcon name={step.icon} /></div><h3>{step.title}</h3><p>{step.copy}</p></li>)}
        </ol>
      </div>
    </section>
  );
}
