"use client";

import { useState } from "react";
import { CtaButton } from "@/components/ui/CtaButton";

type NavLink = {
  href: string;
  label: string;
};

type MobileNavProps = {
  navLinks: NavLink[];
  formUrl: string;
};

export function MobileNav({ navLinks, formUrl }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
      >
        <span
          className={`h-px w-6 bg-ink transition-transform duration-300 ${
            open ? "translate-y-[7px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-px w-6 bg-ink transition-opacity duration-300 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`h-px w-6 bg-ink transition-transform duration-300 ${
            open ? "-translate-y-[7px] -rotate-45" : ""
          }`}
        />
      </button>

      {open ? (
        <div
          id="mobile-nav-panel"
          className="absolute inset-x-0 top-16 border-b border-ink/10 bg-background px-6 py-8 md:top-20"
        >
          <nav className="flex flex-col gap-6 font-sans text-base text-ink/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="transition-colors duration-300 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <CtaButton href={formUrl} className="mt-8 w-full">
            出演を申し込む
          </CtaButton>
        </div>
      ) : null}
    </div>
  );
}
