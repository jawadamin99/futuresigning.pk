"use client";

import Image from "next/image";
import { useState } from "react";
import { productCategories } from "@/data/site";
import { ArrowUpRight } from "@/components/ui/icons";

export function ProductUniverse() {
  const [active, setActive] = useState(1);
  const category = productCategories[active];

  return (
    <div className="showroom">
      <div className="showroom__tabs" role="tablist" aria-label="Product categories">
        {productCategories.map((item, index) => (
          <button key={item.name} id={`category-tab-${index}`} role="tab" aria-selected={active === index} aria-controls="category-panel" onClick={() => setActive(index)}>
            {item.short}
          </button>
        ))}
      </div>
      <div className="showroom__stage" id="category-panel" role="tabpanel" aria-labelledby={`category-tab-${active}`}>
        <div className="showroom__visual" key={`${category.name}-visual`}>
          {category.image ? (
            <Image src={category.image} alt={category.alt} fill sizes="(max-width: 800px) 94vw, 60vw" />
          ) : (
            <div className="showroom__placeholder" aria-label={category.alt}><span>{category.placeholder}</span><i aria-hidden="true" /></div>
          )}
          <p>{category.note}</p>
        </div>
        <div className="showroom__copy" key={`${category.name}-copy`}>
          <p className="eyebrow"><span />Explore the range</p>
          <h3>{category.name}</h3>
          <p>{category.copy}</p>
          <dl>
            <div><dt>Best for</dt><dd>{category.use}</dd></div>
            <div><dt>Approach</dt><dd>{category.approach}</dd></div>
          </dl>
          <a href="#contact">Discuss this category <ArrowUpRight /></a>
        </div>
      </div>
      <p className="showroom__manifesto">If it can carry your identity, <em>we can help customize it.</em></p>
    </div>
  );
}
