import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { event, organizer, venue } from "@/lib/content";

const rows = [
  {
    label: "日時",
    value: `${event.dateLabel}　${event.timeLabel}`,
    emphasis: true,
  },
  {
    label: "会場",
    value: venue.name,
    emphasis: false,
  },
  {
    label: "観覧",
    value: `${event.admissionLabel}・${event.registrationNote}`,
    emphasis: true,
  },
];

export function EventInfo() {
  return (
    <section id="event" className="scroll-mt-16 bg-background md:scroll-mt-20">
      <Container className="py-20 md:py-28">
        <FadeIn className="mx-auto flex max-w-2xl flex-col gap-10">
          <SectionHeading eyebrow="EVENT" title="開催概要" />

          <div className="flex flex-col divide-y divide-ink/10 border-y border-ink/10">
            {rows.map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-1 py-6 md:flex-row md:items-baseline md:justify-between md:gap-6"
              >
                <span className="font-sans text-sm tracking-widest text-ink/50">
                  {row.label}
                </span>
                <span
                  className={
                    row.emphasis
                      ? "font-serif text-lg text-ink md:text-xl"
                      : "font-serif text-base text-ink/80 md:text-lg"
                  }
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-1 font-serif text-sm text-ink/60 md:text-base">
            <p>主催　{organizer.organizerName}</p>
            <p>主管　{organizer.supervisorName}</p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
