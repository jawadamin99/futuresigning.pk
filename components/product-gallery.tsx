"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type ProductGalleryProps = {
  images: readonly string[];
  name: string;
};

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const selectPrevious = () => {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const selectNext = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  const handleTouchEnd = (endX: number) => {
    if (touchStartX.current === null || images.length < 2) return;
    const distance = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(distance) < 42) return;
    if (distance < 0) selectNext();
    else selectPrevious();
  };

  return (
    <div className="product-gallery">
      <div
        className="product-gallery__stage"
        onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null; }}
        onTouchCancel={() => { touchStartX.current = null; }}
        onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0]?.clientX ?? 0)}
      >
        <Image
          key={images[activeIndex]}
          src={images[activeIndex]}
          alt={`${name}, view ${activeIndex + 1} of ${images.length}`}
          fill
          priority
          sizes="(max-width: 900px) 94vw, 54vw"
        />
        {images.length > 1 ? (
          <>
            <button className="product-gallery__arrow product-gallery__arrow--previous" type="button" onClick={selectPrevious} aria-label={`Show previous view of ${name}`}>←</button>
            <button className="product-gallery__arrow product-gallery__arrow--next" type="button" onClick={selectNext} aria-label={`Show next view of ${name}`}>→</button>
            <span className="product-gallery__count" aria-live="polite">{activeIndex + 1} / {images.length}</span>
          </>
        ) : null}
      </div>

      {images.length > 1 ? (
        <div className="product-gallery__thumbs" aria-label={`${name} image gallery`}>
          {images.map((image, index) => (
            <button
              type="button"
              className={index === activeIndex ? "is-active" : undefined}
              aria-label={`Show ${name} view ${index + 1}`}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              key={image}
            >
              <Image src={image} alt="" fill sizes="96px" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
