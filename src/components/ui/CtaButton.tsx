import type { ReactNode } from "react";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  size?: "default" | "compact" | "large";
  className?: string;
};

const sizeClasses = {
  default: "h-12 px-8 text-sm",
  compact: "h-10 px-5 text-xs",
  large: "h-14 px-10 text-base",
} as const;

export function CtaButton({
  href,
  children,
  external = true,
  size = "default",
  className = "",
}: CtaButtonProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center rounded-sm border border-primary bg-primary font-sans tracking-wide text-white transition-colors duration-300 hover:bg-primary/90 ${sizeClasses[size]} ${className}`}
    >
      {children}
    </a>
  );
}
