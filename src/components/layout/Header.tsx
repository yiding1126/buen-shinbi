import Image from "next/image";
import { CtaButton } from "@/components/ui/CtaButton";
import { SHOW_PROGRAM } from "@/lib/config";
import { participation } from "@/lib/content";
import { MobileNav } from "./MobileNav";

// 同一ページ内アンカー。各セクション実装時は対応するidに
// scroll-mt-16 md:scroll-mt-20（固定Header分の余白）を必ず付与する。
export const navLinks = [
  { href: "#concept", label: "武縁心美とは" },
  { href: "#event", label: "開催概要" },
  { href: "#perform", label: "出演する" },
  { href: "#watch", label: "観に行く" },
  ...(SHOW_PROGRAM ? [{ href: "#program", label: "プログラム" }] : []),
  { href: "#access", label: "アクセス" },
  { href: "#contact", label: "お問い合わせ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:h-20 md:px-10">
        <a href="#top" aria-label="武縁心美2027 トップへ" className="shrink-0">
          <Image
            src="/images/logo/buen-shinbi-logo.png"
            alt="武縁心美2027"
            width={112}
            height={112}
            priority
            className="h-11 w-11 mix-blend-multiply md:h-14 md:w-14"
          />
        </a>

        <nav className="hidden items-center gap-8 font-sans text-sm text-ink/80 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-300 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <CtaButton href={participation.applicationFormUrl} size="compact">
            出演申込
          </CtaButton>
        </nav>

        <MobileNav navLinks={navLinks} formUrl={participation.applicationFormUrl} />
      </div>
    </header>
  );
}
