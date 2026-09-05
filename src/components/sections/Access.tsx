import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { venue } from "@/lib/content";

const rows = [
  { label: "電車", value: venue.accessLabel },
  { label: "車", value: venue.parkingLabel },
];

export function Access() {
  return (
    <section id="access" className="scroll-mt-16 bg-background md:scroll-mt-20">
      <Container className="py-20 md:py-28">
        <FadeIn className="mx-auto flex max-w-2xl flex-col gap-10">
          <SectionHeading eyebrow="ACCESS" title="会場・アクセス" />

          <div className="flex flex-col gap-1 font-serif text-lg text-ink md:text-xl">
            <p>{venue.name}</p>
            <p className="text-base text-ink/70 md:text-lg">
              〒{venue.postalCode}　{venue.address}
            </p>
          </div>

          <div className="flex flex-col divide-y divide-ink/10 border-y border-ink/10">
            {rows.map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-1 py-6 md:flex-row md:items-baseline md:justify-between md:gap-6"
              >
                <span className="font-sans text-sm tracking-widest text-ink/50">
                  {row.label}
                </span>
                <span className="font-serif text-base text-ink/80 md:text-lg">
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          <CtaButton href={venue.googleMapsUrl} variant="secondary" size="large">
            Googleマップで見る
            <span aria-hidden="true">↗</span>
          </CtaButton>
        </FadeIn>
      </Container>
    </section>
  );
}
