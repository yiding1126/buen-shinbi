import { Container } from "@/components/ui/Container";
import { DecorativeMotif } from "@/components/ui/DecorativeMotif";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { event } from "@/lib/content";

const mainCopy = ["太極拳を知っている人も、", "はじめて観る人も。"];

export function Watch() {
  return (
    <section
      id="watch"
      className="relative scroll-mt-16 overflow-hidden bg-background-lavender md:scroll-mt-20"
    >
      <DecorativeMotif
        src="/images/optimized/watercolor-purple-ripple-01.png"
        opacity={0.14}
        fit="cover"
        position="bottom"
        className="absolute inset-x-0 bottom-0 h-40 md:h-56"
      />
      <DecorativeMotif
        src="/images/optimized/lotus01.png"
        opacity={0.18}
        className="absolute -left-10 top-8 h-40 w-40 md:h-56 md:w-56"
      />

      <Container className="relative z-10 py-12 md:py-20">
        <FadeIn className="mx-auto flex max-w-2xl flex-col gap-6">
          <SectionHeading eyebrow="WATCH" title="観に行く" />

          <p className="font-serif text-xl leading-relaxed text-ink md:text-2xl">
            {mainCopy.map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </p>

          <p className="font-serif text-base leading-loose text-ink md:text-lg">
            太極拳や拳術、剣・刀を使った演武まで、さまざまな中国武術を一つの舞台で。ご家族やご友人と、お気軽にお越しください。
          </p>

          <div className="flex flex-col gap-4 border-y border-ink/10 py-5">
            <div className="flex flex-wrap gap-3">
              <span className="font-serif text-lg text-ink md:text-xl">
                {event.admissionLabel}
              </span>
              <span className="font-serif text-lg text-ink md:text-xl">
                {event.registrationNote}
              </span>
            </div>
            <p className="font-serif text-base leading-loose text-ink/80 md:text-lg">
              当日、直接会場へお越しください。
            </p>
          </div>

          <p id="program" className="scroll-mt-24 font-serif text-sm leading-relaxed text-ink/70">
            出演団体・演武プログラムは、決定次第こちらでお知らせします。
          </p>

          <a
            href="#access"
            className="inline-flex items-center gap-1 font-sans text-sm text-primary"
          >
            会場・アクセスを見る
            <span aria-hidden="true">↓</span>
          </a>
        </FadeIn>
      </Container>
    </section>
  );
}
