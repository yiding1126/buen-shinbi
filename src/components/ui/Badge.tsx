import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-sm border border-primary/40 bg-primary-soft px-3 py-1 font-sans text-xs tracking-widest text-primary">
      {children}
    </span>
  );
}
