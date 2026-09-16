export function SectionHeading({ eyebrow, title, copy, dark = false }: { eyebrow: string; title: string; copy?: string; dark?: boolean }) {
  return <header className={`section-heading reveal ${dark ? "section-heading--dark" : ""}`}><p className="eyebrow"><span />{eyebrow}</p><h2>{title}</h2>{copy ? <p className="section-heading__copy">{copy}</p> : null}</header>;
}
