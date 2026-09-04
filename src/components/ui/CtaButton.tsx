import type { ReactNode } from "react";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
};

export function CtaButton({ href, children, external = true }: CtaButtonProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex h-12 items-center justify-center rounded-sm border border-primary bg-primary px-8 font-sans text-sm tracking-wide text-white transition-colors duration-300 hover:bg-primary/90"
    >
      {children}
    </a>
  );
}
