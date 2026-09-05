import { Fragment } from "react";
import { Container } from "@/components/ui/Container";
import { DecorativeMotif } from "@/components/ui/DecorativeMotif";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const paragraphs: string[][] = [
  [
    "「武縁心美」は、太極拳・中国武術を愛好する皆様が、",
    "日頃の研鑽の成果を披露するとともに、",
    "演武を通じて交流を深めることを目的とした演武発表会です。",
  ],
  [
    "武術を通じて生まれる「縁」を大切にし、",
    "それぞれの演武に触れることで、",
    "新たな出会いや交流につながる場を目指します。",
  ],
  [
    "出演者・観客の皆様にとって、",
    "太極拳・中国武術の新たな魅力に触れる機会となり、",
    "その魅力をより多くの方へ伝えていく場となることを目指します。",
  ],
];

export function Concept() {
  return (
    <section
      id="concept"
      className="relative scroll-mt-16 overflow-hidden bg-background-warm md:scroll-mt-20"
    >
      {/* 蓮: セクション右下の水彩装飾として一目で認識できる程度に。本文の背後には重ねない */}
      <DecorativeMotif
        src="/images/optimized/lotus01.png"
        opacity={0.24}
        className="absolute -bottom-10 -right-10 h-48 w-48 md:h-72 md:w-72"
      />

      {/* 花びら: 見出し付近にごく少量、控えめに */}
      <DecorativeMotif
        src="/images/optimized/petal01.png"
        opacity={0.2}
        className="absolute right-3 top-4 h-20 w-20 md:right-10 md:top-10 md:h-28 md:w-28"
      />

      <Container className="relative z-10 py-20 md:py-28">
        <FadeIn className="mx-auto flex max-w-2xl flex-col gap-10">
          <div className="flex flex-col gap-4">
            <SectionHeading eyebrow="ABOUT" title="武縁心美とは" />
            <span aria-hidden="true" className="block h-px w-12 bg-primary" />
          </div>

          <div className="flex flex-col gap-8">
            {paragraphs.map((lines, index) => (
              <p
                key={index}
                className="font-serif text-lg leading-loose text-ink md:text-xl"
              >
                {lines.map((line, lineIndex) => (
                  <Fragment key={lineIndex}>
                    {line}
                    {lineIndex < lines.length - 1 ? <br /> : null}
                  </Fragment>
                ))}
              </p>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
