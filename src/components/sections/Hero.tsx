import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { DecorativeMotif } from "@/components/ui/DecorativeMotif";
import { FadeIn } from "@/components/ui/FadeIn";
import { event, participation, venue } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative scroll-mt-16 overflow-hidden bg-gradient-to-b from-background-warm to-background md:scroll-mt-20"
    >
      <Container className="relative z-10 flex min-h-[75svh] flex-col items-center justify-center gap-7 pt-14 pb-20 text-center lg:min-h-[80svh]">
        <FadeIn className="flex flex-col items-center gap-7">
          <div className="relative flex items-center justify-center">
            <DecorativeMotif
              src="/images/hero/enso.png"
              opacity={0.12}
              className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 sm:h-[260px] sm:w-[260px] md:h-[300px] md:w-[300px]"
            />
            <Image
              src="/images/logo/buen-shinbi-logo.png"
              alt="武縁心美2027"
              width={320}
              height={320}
              priority
              className="relative h-[184px] w-[184px] mix-blend-multiply sm:h-[221px] sm:w-[221px] md:h-[258px] md:w-[258px]"
            />
          </div>

          <h1 className="font-serif text-2xl leading-relaxed text-ink sm:text-3xl md:text-4xl">
            {event.type}
          </h1>

          <div className="flex flex-col items-center gap-1 font-serif text-ink/70">
            <p className="text-sm md:text-base">
              {event.dateLabel}　{event.timeLabel}
            </p>
            <p className="text-xs md:text-sm">{venue.name}</p>
          </div>

          <Badge>{event.admissionLabel}</Badge>

          <CtaButton href={participation.applicationFormUrl} size="large">
            出演を申し込む
          </CtaButton>
        </FadeIn>
      </Container>
    </section>
  );
}
