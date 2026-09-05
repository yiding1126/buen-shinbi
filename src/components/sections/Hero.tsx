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
      {/* 山: Hero下部に淡い水墨画として。文字より前には出さない */}
      <DecorativeMotif
        src="/images/optimized/watercolor-purple-mountain-02.png"
        opacity={0.18}
        fit="cover"
        position="bottom"
        className="absolute inset-x-0 bottom-0 h-48 md:h-64"
      />

      {/* 水面: 山のさらに下、Hero最下部の帯 */}
      <DecorativeMotif
        src="/images/optimized/watercolor-purple-ripple-01.png"
        opacity={0.18}
        fit="cover"
        position="bottom"
        className="absolute inset-x-0 bottom-0 h-20 md:h-28"
      />

      {/* 円相: ロゴとは同心円にせず、右上へずらして配置。画面外に切れてよい */}
      <DecorativeMotif
        src="/images/optimized/enso.png"
        opacity={0.09}
        className="absolute -right-16 top-0 h-72 w-72 sm:h-80 sm:w-80 md:-right-20 md:top-6 md:h-[420px] md:w-[420px]"
      />

      {/* 人物: 演武ポーズを1点だけ、シルエットが分かる程度に右下へ */}
      <DecorativeMotif
        src="/images/optimized/martial-fist-04.png"
        opacity={0.2}
        className="absolute bottom-1 right-1 h-20 w-20 sm:h-40 sm:w-40 md:h-64 md:w-64 lg:h-72 lg:w-72"
      />

      <Container className="relative z-10 flex min-h-[75svh] flex-col items-center justify-center gap-7 pt-14 pb-16 text-center lg:min-h-[80svh]">
        <FadeIn className="flex flex-col items-center gap-7">
          <Image
            src="/images/logo/buen-shinbi-logo.png"
            alt="武縁心美2027"
            width={320}
            height={320}
            priority
            className="h-[184px] w-[184px] mix-blend-multiply sm:h-[221px] sm:w-[221px] md:h-[258px] md:w-[258px]"
          />

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
