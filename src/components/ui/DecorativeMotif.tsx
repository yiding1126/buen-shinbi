import Image from "next/image";

type DecorativeMotifProps = {
  src: string;
  alt?: string;
  width: number;
  height: number;
  opacity?: number;
  className?: string;
};

export function DecorativeMotif({
  src,
  alt = "",
  width,
  height,
  opacity = 0.15,
  className = "",
}: DecorativeMotifProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      aria-hidden={alt === "" ? true : undefined}
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
    />
  );
}
