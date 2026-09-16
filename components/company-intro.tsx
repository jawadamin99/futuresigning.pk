import Image from "next/image";
import { ArrowUpRight } from "@/components/ui/icons";

const points = [
  "Brief-led product and branding recommendations",
  "Support for bulk and repeat requirements",
  "Product, print and packaging coordination",
  "Nationwide delivery from Lahore",
];

export function CompanyIntro() {
  return (
    <section className="section intro-section" aria-labelledby="intro-title">
      <div className="shell intro-layout">
        <div className="intro-collage reveal">
          <div className="intro-image intro-image--primary"><Image src="/images/methods/uv-printing.png" alt="Representative UV printing production process" fill sizes="(max-width: 800px) 88vw, 35vw" /></div>
          <div className="intro-image intro-image--secondary"><Image src="/images/methods/screen-printing.png" alt="Representative screen-printing production process" fill sizes="(max-width: 800px) 78vw, 40vw" /></div>
          <div className="intro-logo"><Image src="/images/brand/future-signing-logo.png" alt="Future Signing" width={1235} height={361} /></div>
          <p>Representative production imagery</p>
        </div>
        <div className="intro-copy reveal">
          <p className="eyebrow"><span />Built for business</p>
          <h2 id="intro-title">One partner for products, branding and presentation.</h2>
          <p>Future Signing helps organizations turn a brief into physical products that feel coherent, useful and unmistakably on-brand—from one curated kit to a large-volume campaign.</p>
          <ul>{points.map((point) => <li key={point}><span aria-hidden="true">✓</span>{point}</li>)}</ul>
          <a className="button button--orange" href="#how-we-work">See how we work <ArrowUpRight /></a>
        </div>
      </div>
    </section>
  );
}
