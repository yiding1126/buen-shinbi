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
      {/* 山: Hero下部の背景の景色 */}
      <DecorativeMotif
        src="/images/optimized/watercolor-purple-mountain-02.png"
        opacity={0.35}
        fit="cover"
        position="bottom"
        className="absolute inset-x-0 bottom-0 h-56 md:h-72"
      />

      {/* 水面: 山の手前、Hero最下部の帯 */}
      <DecorativeMotif
        src="/images/optimized/watercolor-purple-ripple-01.png"
        opacity={0.35}
        fit="cover"
        position="bottom"
        className="absolute inset-x-0 bottom-0 h-24 md:h-32"
      />

      {/* 蓮: 左下手前に大きめに */}
      <DecorativeMotif
        src="/images/optimized/lotus01.png"
        opacity={0.4}
        className="absolute -bottom-2 -left-2 h-28 w-28 sm:h-40 sm:w-40 md:h-56 md:w-56"
      />

      {/* 人物: 演武ポーズを1点、右下にしっかり見える濃さで */}
      <DecorativeMotif
        src="/images/optimized/martial-fist-04.png"
        opacity={0.32}
        className="absolute bottom-0 right-0 h-24 w-24 sm:h-36 sm:w-36 md:h-64 md:w-64 lg:h-72 lg:w-72"
      />

      {/* 花びら: 右上に控えめに舞う */}
      <DecorativeMotif
        src="/images/optimized/petal01.png"
        opacity={0.35}
        className="absolute right-3 top-3 h-20 w-20 sm:h-28 sm:w-28 md:h-36 md:w-36"
      />

      <Container className="relative z-10 flex min-h-[75svh] flex-col items-center justify-center gap-7 pt-14 pb-16 text-center lg:min-h-[80svh]">
        <FadeIn className="flex flex-col items-center gap-7">
          <div className="relative flex items-center justify-center">
            {/* 円相: ロゴを囲む主役級の装飾として */}
            <DecorativeMotif
              src="/images/optimized/enso.png"
              opacity={0.7}
              className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 sm:h-72 sm:w-72 md:h-[340px] md:w-[340px]"
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

          <div className="flex flex-col items-center gap-3">
            <h1 className="font-serif text-2xl leading-relaxed text-ink sm:text-3xl md:text-4xl">
              {event.tagline.map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="font-serif text-sm text-ink/70 md:text-base">
              {event.type}
            </p>
          </div>

          <div className="flex flex-col items-center gap-1.5 font-serif">
            <p className="text-base text-ink md:text-lg">{event.dateLabel}</p>
            <p className="text-sm text-ink/70 md:text-base">
              {event.timeLabel}
            </p>
            <p className="text-sm text-ink/70 md:text-base">{venue.name}</p>
          </div>

          <Badge>{event.admissionLabel}</Badge>

          <CtaButton href={participation.applicationFormUrl} size="large">
            出演を申し込む
            <span aria-hidden="true">→</span>
          </CtaButton>

          <span className="mt-2 font-sans text-[10px] tracking-[0.3em] text-ink/40">
            SCROLL ↓
          </span>
        </FadeIn>
      </Container>
    </section>
  );
}
