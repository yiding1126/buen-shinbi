import { Container } from "@/components/ui/Container";
import { DecorativeMotif } from "@/components/ui/DecorativeMotif";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const paragraph = [
  "武術を愛する皆さまとともに、",
  "演武を楽しみ、",
  "新たな縁を育む一日をつくることができれば幸いです。",
  "皆さまのご参加を心よりお待ちしております。",
];

export function Message() {
  return (
    <section className="relative overflow-hidden bg-background-lavender">
      <DecorativeMotif
        src="/images/optimized/enso.png"
        opacity={0.1}
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 md:h-96 md:w-96"
      />

      <Container className="relative z-10 py-20 md:py-28">
        <FadeIn className="mx-auto flex max-w-2xl flex-col gap-10">
          <SectionHeading eyebrow="MESSAGE" title="主催者メッセージ" />

          <p className="font-serif text-lg leading-loose text-ink md:text-xl">
            {paragraph.map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </p>

          <div className="flex w-full flex-col gap-1 text-right font-serif text-base text-ink/80 md:text-lg">
            <p>劉武術協会 代表</p>
            <p>劉 一丁</p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
