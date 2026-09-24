"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { TouchEvent } from "react";

const slides = [
  { src: "/images/catalogue/hero-executive-kit.png", alt: "Black executive onboarding gift box branded for Future Signing" },
  { src: "/images/catalogue/red-welcome-kit.png", alt: "Red employee welcome kit with coordinated branded products" },
  { src: "/images/catalogue/black-presentation-set.png", alt: "Black presentation gift set with branded diary and pen" },
  { src: "/images/catalogue/red-tumbler-kit.png", alt: "Red corporate gifting set with branded travel tumbler" },
  { src: "/images/catalogue/charging-wallet.png", alt: "Branded wireless charging power bank wallet" },
] as const;

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const [touching, setTouching] = useState(false);
  const touchStart = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (touching || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setActive((index) => (index + 1) % slides.length), 4500);
    return () => window.clearTimeout(timer);
  }, [active, touching]);

  const showPrevious = () => setActive((index) => (index - 1 + slides.length) % slides.length);
  const showNext = () => setActive((index) => (index + 1) % slides.length);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
    setTouching(true);
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0];
    const distanceX = touch.clientX - touchStart.current.x;
    const distanceY = touch.clientY - touchStart.current.y;

    if (Math.abs(distanceX) > 42 && Math.abs(distanceX) > Math.abs(distanceY) * 1.2) {
      if (distanceX < 0) showNext();
      else showPrevious();
    }

    setTouching(false);
  };

  return <div className="hero-slider">
    <div className="hero-photo" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouchCancel={() => setTouching(false)}>
      {slides.map((slide, index) => <Image className={index === active ? "is-active" : ""} src={slide.src} alt={slide.alt} fill priority={index === 0} loading="eager" draggable={false} sizes="(max-width: 820px) 100vw, 52vw" key={slide.src} />)}
    </div>
    <div className="hero-slider__controls" aria-label="Hero product images">{slides.map((slide, index) => <button type="button" className={index === active ? "is-active" : ""} onClick={() => setActive(index)} aria-label={`Show image ${index + 1}: ${slide.alt}`} aria-current={index === active ? "true" : undefined} key={slide.src}><span /></button>)}</div>
  </div>;
}
