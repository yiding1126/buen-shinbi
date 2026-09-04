import Image from "next/image";

type DecorativeMotifProps = {
  src: string;
  alt?: string;
  opacity?: number;
  // className must include a position (absolute/relative/fixed) and a size;
  // this component has no default position so it never fights the caller's.
  className?: string;
};

export function DecorativeMotif({
  src,
  alt = "",
  opacity = 0.15,
  className = "",
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
        className="object-contain"
      />
    </div>
  );
}
