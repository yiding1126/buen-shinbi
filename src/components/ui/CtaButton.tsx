import type { ReactNode } from "react";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  size?: "default" | "compact" | "large";
  variant?: "primary" | "secondary";
  className?: string;
};

const sizeClasses = {
  default: "h-12 px-8 text-sm",
  compact: "h-10 px-5 text-xs",
  large: "h-14 px-10 text-base",
} as const;

const variantClasses = {
  primary: "border-primary bg-primary text-white hover:bg-primary/90",
  secondary:
    "border-primary/60 bg-transparent text-primary hover:bg-primary/5",
} as const;

export function CtaButton({
  href,
  children,
  external = true,
  size = "default",
  variant = "primary",
  className = "",
}: CtaButtonProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-md border font-sans tracking-wide transition-colors duration-300 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </a>
  );
}
