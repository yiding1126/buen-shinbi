import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CarIcon, TrainIcon } from "@/components/ui/icons";
import { venue } from "@/lib/content";
import { VenuePhotoSlider } from "./VenuePhotoSlider";

const rows = [
  { label: "電車", value: venue.accessLabel, Icon: TrainIcon },
  { label: "車", value: venue.parkingLabel, Icon: CarIcon },
];

export function Access() {
  return (
    <section id="access" className="scroll-mt-16 bg-background md:scroll-mt-20">
      <Container className="pt-12 pb-6 md:pt-20">
        <FadeIn className="mx-auto flex max-w-2xl flex-col gap-6">
          <SectionHeading eyebrow="ACCESS" title="会場・アクセス" />

          <div className="flex flex-col gap-1 font-serif text-lg text-ink md:text-xl">
            {venue.nameLines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
            <p className="text-base text-ink/70 md:text-lg">
              〒{venue.postalCode}　{venue.address}
            </p>
          </div>

          <VenuePhotoSlider />

          <div className="flex flex-col divide-y divide-ink/10 border-y border-ink/10">
            {rows.map(({ label, value, Icon }) => (
              <div key={label} className="flex items-start gap-4 py-6">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div className="flex flex-col gap-1">
                  <span className="font-sans text-xs tracking-widest text-ink/50">
                    {label}
                  </span>
                  <span className="font-serif text-base text-ink/80 md:text-lg">
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </FadeIn>
      </Container>

      <div className="aspect-[3/2] w-full overflow-hidden bg-background-warm md:aspect-auto md:h-[420px]">
        <iframe
          title="会場の地図：アクア文化ホール"
          src={`https://www.google.com/maps?q=${encodeURIComponent(`アクア文化ホール ${venue.address}`)}&output=embed&hl=ja`}
          className="block h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <Container className="pt-6 pb-12 md:pb-20">
        <div className="mx-auto flex max-w-2xl flex-col">
          <CtaButton href={venue.googleMapsUrl} variant="secondary" size="large">
            Googleマップで見る
            <span aria-hidden="true">↗</span>
          </CtaButton>
        </div>
      </Container>
    </section>
  );
}
