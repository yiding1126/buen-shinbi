"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Photo = {
  src: string;
  alt: string;
  label: string;
};

const photos: Photo[] = [
  { src: "/images/optimized/venue-exterior.jpg", alt: "会場の外観", label: "外観" },
  { src: "/images/optimized/venue-stage.jpg", alt: "会場のステージ", label: "ステージ" },
  { src: "/images/optimized/venue-seating.jpg", alt: "会場の客席", label: "客席" },
];

export function VenuePhotoSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            const index = slideRefs.current.findIndex((el) => el === entry.target);
            if (index !== -1) setActiveIndex(index);
          }
        }
      },
      { root: track, threshold: [0.6] },
    );

    slideRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <div
        ref={trackRef}
        className="-mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-1 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden"
      >
        {photos.map((photo, index) => (
          <div
            key={photo.src}
            ref={(el) => {
              slideRefs.current[index] = el;
            }}
            className="flex w-[78%] shrink-0 snap-center flex-col gap-2 md:w-auto"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 33vw, 78vw"
                className="object-cover"
              />
            </div>
            <span className="text-center font-sans text-xs tracking-widest text-ink/50">
              {photo.label}
            </span>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-1.5 md:hidden" aria-hidden="true">
        {photos.map((photo, index) => (
          <span
            key={photo.src}
            className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
              index === activeIndex ? "bg-primary" : "bg-ink/15"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
