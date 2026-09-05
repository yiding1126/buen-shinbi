import { Fragment } from "react";
import { Container } from "@/components/ui/Container";
import { DecorativeMotif } from "@/components/ui/DecorativeMotif";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const introHeading = ["武術を通じて生まれる", "「縁」を大切に。"];

const introParagraphs: string[][] = [
  [
    "「武縁心美」は、太極拳・中国武術を愛好する皆さまが、日頃の研鑽の成果を披露するとともに、演武を通じて交流を深めることを目的とした演武会です。",
  ],
  [
    "武術を通じて生まれる「縁」を大切にし、それぞれの演武に触れることで、新たな出会いや交流につながる場を目指します。",
  ],
];

const closingHeading = ["演じる人も、", "観る人も。"];

const closingParagraphs: string[][] = [
  ["太極拳・中国武術を愛する人も、", "これから触れてみたい人も。"],
  [
    "この一日が、新しい武術の魅力と出会い、",
    "新たな縁が生まれるきっかけとなることを願っています。",
  ],
];

function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, index) => (
        <Fragment key={index}>
          {line}
          {index < lines.length - 1 ? <br /> : null}
        </Fragment>
      ))}
    </>
  );
}

export function Concept() {
  return (
    <section
      id="concept"
      className="relative scroll-mt-16 overflow-hidden bg-background-warm md:scroll-mt-20"
    >
      {/* 山: 前半ブロックの背景にごく淡く */}
      <DecorativeMotif
        src="/images/optimized/watercolor-purple-mountain-02.png"
        opacity={0.1}
        fit="cover"
        position="top"
        className="absolute inset-x-0 top-0 h-64 md:h-80"
      />

      <Container className="relative z-10 py-20 md:py-28">
        <FadeIn className="mx-auto flex max-w-2xl flex-col gap-10">
          <div className="flex flex-col gap-4">
            <SectionHeading eyebrow="ABOUT" title="武縁心美とは" />
            <span aria-hidden="true" className="block h-px w-12 bg-primary" />
          </div>

          <p className="font-serif text-xl leading-relaxed text-ink md:text-2xl">
            <Lines lines={introHeading} />
          </p>

          <div className="flex flex-col gap-8">
            {introParagraphs.map((lines, index) => (
              <p
                key={index}
                className="font-serif text-lg leading-loose text-ink md:text-xl"
              >
                <Lines lines={lines} />
              </p>
            ))}
          </div>
        </FadeIn>
      </Container>

      {/* 蓮・水面: 後半ブロックの背景にごく淡く */}
      <div className="relative">
        <DecorativeMotif
          src="/images/optimized/watercolor-purple-ripple-01.png"
          opacity={0.12}
          fit="cover"
          position="bottom"
          className="absolute inset-x-0 bottom-0 h-40 md:h-56"
        />
        <DecorativeMotif
          src="/images/optimized/lotus01.png"
          opacity={0.22}
          className="absolute -bottom-8 -right-8 h-40 w-40 md:h-64 md:w-64"
        />

        <Container className="relative z-10 pb-20 md:pb-28">
          <FadeIn className="mx-auto flex max-w-2xl flex-col gap-8">
            <p className="font-serif text-xl leading-relaxed text-ink md:text-2xl">
              <Lines lines={closingHeading} />
            </p>

            <div className="flex flex-col gap-6">
              {closingParagraphs.map((lines, index) => (
                <p
                  key={index}
                  className="font-serif text-lg leading-loose text-ink md:text-xl"
                >
                  <Lines lines={lines} />
                </p>
              ))}
            </div>
          </FadeIn>
        </Container>
      </div>
    </section>
  );
}
