import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contact } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-background md:scroll-mt-20">
      <Container className="py-20 md:py-28">
        <FadeIn className="mx-auto flex max-w-2xl flex-col gap-8">
          <SectionHeading eyebrow="CONTACT" title="お問い合わせ" />

          <p className="font-serif text-lg text-ink md:text-xl">
            武縁心美2027 実行委員会
          </p>

          <p className="font-serif text-base text-ink/80 md:text-lg">
            {contact.email}
          </p>

          <CtaButton href={`mailto:${contact.email}`} external={false}>
            メールで問い合わせる
          </CtaButton>

          <p className="font-sans text-sm leading-loose text-ink/60">
            お問い合わせの際は、チーム名・お名前・お問い合わせ内容をご記載ください。
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
