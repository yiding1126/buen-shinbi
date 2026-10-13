import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CalendarIcon, PinIcon } from "@/components/ui/icons";
import { event, organizer, venue } from "@/lib/content";

const rows = [
  {
    label: "日時",
    lines: [event.dateLabel, `開場${event.doorsOpenLabel}／開演${event.timeLabel}`],
    Icon: CalendarIcon,
  },
  {
    label: "会場",
    lines: venue.nameLines,
    Icon: PinIcon,
  },
];

export function EventInfo() {
  return (
    <section id="event" className="scroll-mt-16 bg-background md:scroll-mt-20">
      <Container className="py-10 md:py-16">
        <FadeIn className="mx-auto flex max-w-2xl flex-col gap-6">
          <SectionHeading eyebrow="EVENT" title="開催概要" />

          <div className="flex flex-col divide-y divide-ink/10 border-y border-ink/10">
            {rows.map(({ label, lines, Icon }) => (
              <div key={label} className="flex items-start gap-4 py-4">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div className="flex flex-col gap-1">
                  <span className="font-sans text-xs tracking-widest text-ink/50">
                    {label}
                  </span>
                  <span className="font-serif text-lg text-ink md:text-xl">
                    {lines.map((line, index) => (
                      <span key={index} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Badge>{event.admissionLabel}</Badge>
          </div>

          <nav aria-label="参加方法のご案内" className="grid grid-cols-2 gap-3">
            <a href="#perform" className="rounded border border-primary/25 bg-primary-soft px-3 py-4 text-center font-sans text-sm text-primary transition-colors hover:bg-primary hover:text-white">出演をご希望の方 <span aria-hidden="true">↓</span></a>
            <a href="#watch" className="rounded border border-primary/25 px-3 py-4 text-center font-sans text-sm text-primary transition-colors hover:bg-primary-soft">観覧をご希望の方 <span aria-hidden="true">↓</span></a>
          </nav>

          <div className="flex flex-col gap-1 font-serif text-sm text-ink/60 md:text-base">
            <p>主催　{organizer.organizerName}</p>
            <p>主管　{organizer.supervisorName}</p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
