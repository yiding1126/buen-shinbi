"use client";

import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

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
        <>
          <button
            type="button"
            aria-label="メニューを閉じる"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[60] bg-ink/30"
          />
          <div
            id="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="メニュー"
            className="fixed inset-y-0 right-0 z-[70] flex w-[78%] max-w-xs flex-col gap-8 border-l border-ink/10 bg-background px-8 py-8"
          >
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="メニューを閉じる"
                className="text-2xl leading-none text-ink/60 transition-colors duration-300 hover:text-primary"
              >
                ×
              </button>
            </div>

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

            <CtaButton href={formUrl} className="mt-auto w-full">
              出演を申し込む
              <span aria-hidden="true">→</span>
            </CtaButton>
          </div>
        </>
      ) : null}
    </div>
  );
}
