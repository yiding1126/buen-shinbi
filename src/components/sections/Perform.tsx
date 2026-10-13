import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { DecorativeMotif } from "@/components/ui/DecorativeMotif";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { links } from "@/lib/links";
import { participation } from "@/lib/content";

const mainCopy = ["いつもの仲間と、", "いつもと違う舞台へ。"];

const stats = [
  { label: "人数", value: `${participation.teamMinSize}名以上`, note: "1チームの人数" },
  {
    label: "演武時間",
    value: `${participation.performanceTimeLimitMinutes}分以内`,
    note: "1チームの演武",
  },
  {
    label: "参加費",
    value: `${participation.feePerPersonPerTeamYen.toLocaleString()}円`,
    note: "1名 / 1チーム",
  },
  {
    label: "締切",
    value: participation.applicationDeadlineLabel,
    note: "申込・振込期限",
  },
];

export function Perform() {
  return (
    <section
      id="perform"
      className="relative scroll-mt-16 overflow-hidden bg-background md:scroll-mt-20"
    >
      <DecorativeMotif
        src="/images/optimized/martial-sword-02.png"
        opacity={0.1}
        className="absolute -right-10 top-10 h-56 w-56 md:h-80 md:w-80"
      />
      <DecorativeMotif
        src="/images/optimized/martial-fan-03.png"
        opacity={0.1}
        className="absolute -left-10 bottom-10 h-48 w-48 md:h-64 md:w-64"
      />

      <Container className="relative z-10 py-12 md:py-20">
        <FadeIn className="mx-auto flex max-w-2xl flex-col gap-6">
          <SectionHeading eyebrow="PERFORM" title="出演する" />

          <div className="grid grid-cols-2 gap-x-6 gap-y-5 border-y border-ink/10 py-5 md:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-sans text-xs tracking-widest text-primary">
                  {stat.label}
                </span>
                <span className="font-serif text-lg text-ink md:text-xl">
                  {stat.value}
                </span>
                <span className="font-sans text-xs text-ink/50">
                  {stat.note}
                </span>
              </div>
            ))}
          </div>

          <p className="font-serif text-xl leading-relaxed text-ink md:text-2xl">
            {mainCopy.map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </p>

          <p className="font-serif text-base leading-loose text-ink md:text-lg">
            全国の太極拳・中国武術の団体・チームを募集しています。種目や経験、競技レベルを問わず、仲間とともに舞台へ。地域や所属を越えた交流をお楽しみください。
          </p>

          <p className="font-serif text-sm leading-loose text-ink/60">
            演武エリア・服装・器械・音楽・お支払い方法など、
            出演に関する詳細は開催要綱をご確認ください。
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <CtaButton href={participation.applicationFormUrl} size="large">
              出演を申し込む
              <span aria-hidden="true">→</span>
            </CtaButton>
            {links.eventGuidelinesPdf ? (
              <CtaButton
                href={links.eventGuidelinesPdf}
                variant="secondary"
                size="large"
              >
                開催要綱を見る
              </CtaButton>
            ) : null}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
