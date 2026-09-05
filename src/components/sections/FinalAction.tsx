import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { FadeIn } from "@/components/ui/FadeIn";
import { EVENT_STATUS } from "@/lib/config";
import { event, participation } from "@/lib/content";
import { links } from "@/lib/links";

export function FinalAction() {
  const isRecruiting = EVENT_STATUS === "recruiting";

  return (
    <section className="bg-background-warm">
      <Container className="py-20 md:py-28">
        <FadeIn className="mx-auto grid max-w-3xl grid-cols-1 gap-12 md:grid-cols-2">
          {isRecruiting ? (
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-lg text-ink md:text-xl">
                出演をご検討の方
              </h3>
              <div className="flex flex-col gap-3">
                <CtaButton href={participation.applicationFormUrl}>
                  出演を申し込む
                  <span aria-hidden="true">→</span>
                </CtaButton>
                {links.eventGuidelinesPdf ? (
                  <CtaButton
                    href={links.eventGuidelinesPdf}
                    variant="secondary"
                  >
                    開催要綱を見る
                  </CtaButton>
                ) : null}
              </div>
            </div>
          ) : links.eventGuidelinesPdf ? (
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-lg text-ink md:text-xl">
                開催要綱
              </h3>
              <CtaButton href={links.eventGuidelinesPdf} variant="secondary">
                開催要綱を見る
              </CtaButton>
            </div>
          ) : null}

          <div className="flex flex-col gap-4 border-t border-ink/10 pt-10 md:border-t-0 md:border-l md:pt-0 md:pl-8">
            <h3 className="font-serif text-lg text-ink md:text-xl">
              観覧をご希望の方
            </h3>
            <p className="font-serif text-base text-ink md:text-lg">
              {event.admissionLabel}・{event.registrationNote}
            </p>
            <p className="font-serif text-sm leading-loose text-ink/70">
              当日、直接会場へお越しください。
            </p>
            <a
              href="#access"
              className="inline-flex items-center gap-1 font-sans text-sm text-primary"
            >
              会場・アクセスを見る
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
