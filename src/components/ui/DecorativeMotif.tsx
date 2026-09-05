import Image from "next/image";

type DecorativeMotifProps = {
  src: string;
  alt?: string;
  opacity?: number;
  // className must include a position (absolute/relative/fixed) and a size;
  // this component has no default position so it never fights the caller's.
  className?: string;
  // "contain" (default) keeps the whole motif visible, unscaled/uncropped.
  // "cover" fills the box and crops — use with `position` to pick which
  // part of the (square) source shows, e.g. a mountain/water strip.
  fit?: "contain" | "cover";
  position?: string;
};

export function DecorativeMotif({
  src,
  alt = "",
  opacity = 0.15,
  className = "",
  fit = "contain",
  position = "center",
}: DecorativeMotifProps) {
  return (
    <div
      aria-hidden={alt === "" ? true : undefined}
      style={{ opacity }}
      className={`pointer-events-none select-none ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 900px, 130vw"
        className={fit === "cover" ? "object-cover" : "object-contain"}
        style={{ objectPosition: position }}
      />
    </div>
  );
}
