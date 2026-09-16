import Image from "next/image";
import { occasions } from "@/data/site";
import { ArrowUpRight } from "@/components/ui/icons";

export function SolutionsGrid() {
  return (
    <div className="occasion-grid">
      {occasions.map((occasion) => (
        <article className={`occasion-card ${occasion.featured ? "occasion-card--featured" : ""} reveal`} key={occasion.title}>
          <div className="occasion-card__image">
            <Image src={occasion.image} alt={occasion.alt} fill sizes={occasion.featured ? "(max-width: 800px) 94vw, 48vw" : "(max-width: 800px) 94vw, 25vw"} />
          </div>
          <div className="occasion-card__body">
            <div><p>{occasion.context}</p><h3>{occasion.title}</h3></div>
            <ArrowUpRight />
            <p className="occasion-card__copy">{occasion.copy}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
