import { Container } from "@/components/ui/Container";
import { DecorativeMotif } from "@/components/ui/DecorativeMotif";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { event, venue } from "@/lib/content";

const mainCopy = ["太極拳を知っている人も、", "はじめて観る人も。"];

const bodyParagraphs: string[][] = [
  [
    "太極拳、拳術、剣や刀などの器械を使った演武。",
    "ひとことで中国武術といっても、その表現はさまざまです。",
  ],
  [
    "武縁心美では、さまざまな太極拳・中国武術の演武を、一つの舞台でお楽しみいただけます。",
  ],
  [
    "日頃から太極拳・中国武術を楽しまれている方はもちろん、「ちょっと気になる」「一度観てみたい」という方も大歓迎です。",
  ],
  ["ご家族やご友人と一緒に、どうぞお気軽にお越しください。"],
];

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

      <Container className="relative z-10 py-20 md:py-28">
        <FadeIn className="mx-auto flex max-w-2xl flex-col gap-10">
          <SectionHeading eyebrow="WATCH" title="観に行く" />

          <p className="font-serif text-xl leading-relaxed text-ink md:text-2xl">
            {mainCopy.map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </p>

          <div className="flex flex-col gap-6">
            {bodyParagraphs.map((lines, index) => (
              <p
                key={index}
                className="font-serif text-lg leading-loose text-ink md:text-xl"
              >
                {lines.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-y border-ink/10 py-8">
            <div className="flex flex-wrap gap-3">
              <span className="font-serif text-lg text-ink md:text-xl">
                {event.admissionLabel}
              </span>
              <span className="font-serif text-lg text-ink md:text-xl">
                {event.registrationNote}
              </span>
            </div>
            <p className="font-serif text-base leading-loose text-ink/80 md:text-lg">
              事前のお申し込みは必要ありません。
              <br />
              当日、直接会場へお越しください。
            </p>
            <p className="font-sans text-sm tracking-widest text-primary">
              {event.dateShort}
            </p>
            <p className="font-serif text-base text-ink/80 md:text-lg">
              {venue.name}
            </p>
          </div>

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
