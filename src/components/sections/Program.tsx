import { Container } from "@/components/ui/Container";
import { DecorativeMotif } from "@/components/ui/DecorativeMotif";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SHOW_PROGRAM } from "@/lib/config";

export function Program() {
  return (
    <section
      id="program"
      className="relative scroll-mt-16 overflow-hidden bg-background-warm md:scroll-mt-20"
    >
      <DecorativeMotif
        src="/images/optimized/watercolor-purple-ripple-01.png"
        opacity={0.1}
        fit="cover"
        position="center"
        className="absolute inset-x-0 top-1/2 h-40 -translate-y-1/2 md:h-56"
      />

      <Container className="relative z-10 py-20 md:py-28">
        <FadeIn className="mx-auto flex max-w-2xl flex-col gap-8">
          <SectionHeading eyebrow="PROGRAM" title="出演団体・演武プログラム" />

          {SHOW_PROGRAM ? null : (
            <p className="font-serif text-lg leading-loose text-ink md:text-xl">
              出演団体・演武プログラムは、
              <br />
              決定次第こちらでお知らせします。
            </p>
          )}
        </FadeIn>
      </Container>
    </section>
  );
}
