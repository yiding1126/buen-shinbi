import { Container } from "@/components/ui/Container";
import { DecorativeMotif } from "@/components/ui/DecorativeMotif";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Concept() {
  return (
    <section id="concept" className="relative scroll-mt-16 overflow-hidden bg-background-warm md:scroll-mt-20">
      <DecorativeMotif src="/images/optimized/watercolor-purple-mountain-02.png" opacity={0.1} fit="cover" position="top" className="absolute inset-x-0 top-0 h-64 md:h-80" />
      <Container className="relative z-10 py-12 md:py-20">
        <FadeIn className="mx-auto flex max-w-2xl flex-col gap-6">
          <SectionHeading eyebrow="ABOUT" title="武縁心美とは" />
          <p className="font-serif text-xl leading-relaxed text-ink md:text-2xl">武術を通じて生まれる<br />「縁」を大切に。</p>
          <p className="font-serif text-base leading-loose text-ink md:text-lg">武縁心美は、太極拳・中国武術を愛する皆さまが、日頃の稽古の成果を披露し、演武を通じて交流を深める演武会です。</p>
          <div className="border-t border-primary/15 pt-6">
            <h3 className="mb-3 font-sans text-sm text-primary">主催者より</h3>
            <p className="font-serif text-base leading-loose text-ink/80 md:text-lg">皆さまとともに演武を楽しみ、新たな縁を育む一日をつくることができれば幸いです。ご参加を心よりお待ちしております。</p>
            <p className="mt-4 text-right font-serif text-sm text-ink/70">劉武術協会 代表　劉 一丁</p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
