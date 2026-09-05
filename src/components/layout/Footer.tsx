import { Container } from "@/components/ui/Container";
import { event, organizer, social } from "@/lib/content";
import { links } from "@/lib/links";

export function Footer() {
  return (
    <footer className="bg-background-lavender">
      <Container className="flex flex-col items-center gap-10 py-16 text-center md:py-20">
        <div className="flex flex-col items-center gap-3">
          <span className="font-sans text-xs tracking-widest text-primary">
            FOLLOW US
          </span>
          <div className="flex flex-col items-center gap-2 font-sans text-sm text-ink/70 sm:flex-row sm:gap-6">
            <a
              href={social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-primary"
            >
              {social.instagram.label}
            </a>
            <a
              href={social.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-primary"
            >
              {social.youtube.label}
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 font-serif text-sm text-ink/70">
          <p>{event.name}</p>
          <p>{event.type}</p>
          <p>
            主催　{organizer.organizerName}／主管　{organizer.supervisorName}
          </p>
        </div>

        {links.eventGuidelinesPdf ? (
          <a
            href={links.eventGuidelinesPdf}
            className="font-sans text-sm text-primary underline underline-offset-4"
          >
            開催要綱
          </a>
        ) : null}

        <p className="font-sans text-xs text-ink/40">
          © 2027 {organizer.supervisorName}
        </p>
      </Container>
    </footer>
  );
}
