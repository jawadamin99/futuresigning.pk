import { testimonialPlaceholders } from "@/data/site";

export function TestimonialsPlaceholder() {
  return (
    <section className="section testimonials-section" aria-labelledby="testimonials-title">
      <div className="shell">
        <header className="testimonials-heading reveal"><p className="eyebrow"><span />Client stories</p><h2 id="testimonials-title"><em>Real experiences</em> will live here.</h2><p>Verified client feedback will be published once approved. No invented quotes, names or ratings.</p></header>
        <div className="testimonial-grid">
          {testimonialPlaceholders.map((label) => <article className="testimonial-placeholder reveal" key={label}><span aria-hidden="true">“</span><p>{label}</p><div><i aria-hidden="true" /><small>Verified testimonial to be added</small></div></article>)}
        </div>
      </div>
    </section>
  );
}
