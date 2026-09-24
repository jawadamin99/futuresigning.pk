"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const placeholders = Array.from({ length: 10 }, (_, index) => `Client logo placeholder ${index + 1}`);

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

  return <div className="client-logos__viewport" ref={viewportRef} onTouchStart={pauseForTouch} onTouchEnd={resumeAfterTouch} onTouchCancel={resumeAfterTouch}>
    <div className="client-logos__track">{[0, 1].map((group) => <div className="client-logos__group" aria-hidden={group === 1} key={group}>{placeholders.map((label) => <div className="client-logo" key={`${group}-${label}`}><Image src="/images/client-logo-placeholder.svg" alt={group === 0 ? label : ""} width={260} height={90} draggable={false} /></div>)}</div>)}</div>
  </div>;
}
