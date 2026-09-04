import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function Introduction() {
  return (
    <section className="bg-background">
      <Container className="py-24 text-center md:py-32">
        <FadeIn>
          <p className="font-serif text-lg leading-loose text-ink/80 md:text-xl">
            武を通じて、縁が生まれる。
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
