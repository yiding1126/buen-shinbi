import { Container } from "@/components/ui/Container";
import { DecorativeMotif } from "@/components/ui/DecorativeMotif";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const cards = [
  {
    heading: ["仲間と一緒に、", "武術・太極拳を楽しみませんか？"],
    linkLabel: "出演について見る",
    href: "#perform",
    motif: "/images/optimized/martial-fist-04.png",
  },
  {
    heading: ["太極拳を知っている人も、", "はじめて観る人も。"],
    linkLabel: "観覧について見る",
    href: "#watch",
    motif: "/images/optimized/lotus01.png",
  },
];

export function Enjoy() {
  return (
    <section className="bg-background-warm">
      <Container className="py-20 md:py-28">
        <FadeIn className="mx-auto flex max-w-4xl flex-col gap-10">
          <SectionHeading eyebrow="ENJOY" title="武縁心美を楽しむ" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {cards.map((card) => (
              <a
                key={card.href}
                href={card.href}
                className="group relative flex flex-col justify-between overflow-hidden rounded-sm border border-ink/10 bg-background px-6 py-10 transition-colors duration-300 hover:border-primary/40"
              >
                <DecorativeMotif
                  src={card.motif}
                  opacity={0.16}
                  className="absolute -bottom-8 -right-8 h-40 w-40"
                />
                <p className="relative z-10 font-serif text-xl leading-relaxed text-ink">
                  {card.heading.map((line, index) => (
                    <span key={index} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <span className="relative z-10 mt-8 inline-flex items-center gap-1 font-sans text-sm text-primary">
                  {card.linkLabel}
                  <span aria-hidden="true">→</span>
                </span>
              </a>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
