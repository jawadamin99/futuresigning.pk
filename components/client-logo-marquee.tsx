"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const clientLogos = [
  { name: "HBL", src: "/images/client-logos/hbl.png" },
  { name: "Askari Bank", src: "/images/client-logos/askari-bank-alt.png", compact: true },
  { name: "JS Bank", src: "/images/client-logos/js-bank.webp" },
  { name: "NLC", src: "/images/client-logos/nlc.png" },
  { name: "Park View City", src: "/images/client-logos/park-view-city.png" },
  { name: "Bahria Town", src: "/images/client-logos/bahria-town.png" },
  { name: "Pepsi", src: "/images/client-logos/pepsi.svg" },
  { name: "Coca-Cola", src: "/images/client-logos/coca-cola.png" },
  { name: "DHA Lahore", src: "/images/client-logos/dha-lahore.png" },
  { name: "UBL", src: "/images/client-logos/ubl.png" },
  { name: "Bank Alfalah", src: "/images/client-logos/bank-alfalah.png" },
  { name: "Packages Limited", src: "/images/client-logos/packages-limited.png" },
];

export function ClientLogoMarquee() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const pauseUntil = useRef(0);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const mobile = window.matchMedia("(max-width: 700px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let previousTime = performance.now();

    const move = (time: number) => {
      const elapsed = Math.min(time - previousTime, 40);
      previousTime = time;

      if (mobile.matches && !reducedMotion.matches && time > pauseUntil.current) {
        viewport.scrollLeft += elapsed * 0.026;
        const loopPoint = viewport.scrollWidth / 2;
        if (viewport.scrollLeft >= loopPoint) viewport.scrollLeft -= loopPoint;
      }

      frame = window.requestAnimationFrame(move);
    };

    frame = window.requestAnimationFrame(move);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const pauseForTouch = () => {
    pauseUntil.current = Number.POSITIVE_INFINITY;
  };

  const resumeAfterTouch = () => {
    pauseUntil.current = performance.now() + 2500;
  };

  return (
    <div
      className="client-logos__viewport"
      ref={viewportRef}
      onTouchStart={pauseForTouch}
      onTouchEnd={resumeAfterTouch}
      onTouchCancel={resumeAfterTouch}
      aria-label="Organizations represented in our client logo wall"
    >
      <div className="client-logos__track">
        {[0, 1].map((group) => (
          <div className="client-logos__group" aria-hidden={group === 1} key={group}>
            {clientLogos.map((logo) => (
              <div
                className={`client-logo${logo.compact ? " client-logo--compact" : ""}`}
                key={`${group}-${logo.name}`}
                title={logo.name}
              >
                <Image
                  src={logo.src}
                  alt={group === 0 ? `${logo.name} logo` : ""}
                  width={260}
                  height={90}
                  sizes="(max-width: 700px) 176px, 220px"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
