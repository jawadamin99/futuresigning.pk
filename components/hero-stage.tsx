"use client";

import Image from "next/image";
import { useRef } from "react";

const panels = [
  { src: "/images/products/bottle4.png", alt: "Black, blue and steel reusable bottle collection", label: "Drinkware", className: "hero-panel--primary", depth: 10 },
  { src: "/images/products/mug1.png", alt: "Black and white handled travel mugs", label: "Office gifting", className: "hero-panel--mug", depth: 16 },
  { src: "/images/products/fan1.png", alt: "Rechargeable portable fans in multiple colours", label: "Useful giveaways", className: "hero-panel--fan", depth: 7 },
] as const;

export function HeroStage() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="hero-stage" ref={ref} onPointerMove={(event) => {
      if (event.pointerType === "touch" || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      ref.current?.style.setProperty("--mx", String((event.clientX - bounds.left) / bounds.width - 0.5));
      ref.current?.style.setProperty("--my", String((event.clientY - bounds.top) / bounds.height - 0.5));
    }} onPointerLeave={() => {
      ref.current?.style.setProperty("--mx", "0");
      ref.current?.style.setProperty("--my", "0");
    }}>
      <div className="hero-stage__backdrop" aria-hidden="true" />
      {panels.map((panel, index) => (
        <figure key={panel.src} className={`hero-panel ${panel.className}`} style={{ "--depth": panel.depth } as React.CSSProperties}>
          <div className="hero-panel__image">
            <Image src={panel.src} alt={panel.alt} fill priority={index === 0} sizes="(max-width: 800px) 78vw, 38vw" />
          </div>
          <figcaption>{panel.label}</figcaption>
        </figure>
      ))}
      <p className="hero-stage__caption">Objects selected around your brief, audience and moment.</p>
    </div>
  );
}
