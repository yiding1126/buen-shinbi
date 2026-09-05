import { CtaButton } from "@/components/ui/CtaButton";
import { EVENT_STATUS, SHOW_FIXED_CTA, SHOW_PROGRAM } from "@/lib/config";
import { participation } from "@/lib/content";
import { links } from "@/lib/links";

export function FixedCta() {
  if (!SHOW_FIXED_CTA) return null;

  const showApplication = EVENT_STATUS === "recruiting";
  const primaryHref = SHOW_PROGRAM ? "#program" : null;
  const primaryLabel = SHOW_PROGRAM ? "プログラム" : null;

  const buttons: { href: string; label: string; variant: "primary" | "secondary" }[] =
    [];

  if (showApplication) {
    buttons.push({
      href: participation.applicationFormUrl,
      label: "出演申込",
      variant: "primary",
    });
  } else if (primaryHref && primaryLabel) {
    buttons.push({ href: primaryHref, label: primaryLabel, variant: "primary" });
  }

  if (links.eventGuidelinesPdf) {
    buttons.push({
      href: links.eventGuidelinesPdf,
      label: "開催要綱",
      variant: "secondary",
    });
  }

  if (buttons.length === 0) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-sm lg:hidden">
      <div className="flex h-14 items-center gap-3 px-4">
        {buttons.map((button) => (
          <CtaButton
            key={button.label}
            href={button.href}
            variant={button.variant}
            size="compact"
            external={!button.href.startsWith("#")}
            className="flex-1"
          >
            {button.label}
          </CtaButton>
        ))}
      </div>
    </div>
  );
}
