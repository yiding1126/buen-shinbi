import { Container } from "@/components/ui/Container";
import { InstagramIcon, YoutubeIcon } from "@/components/ui/icons";
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
          <div className="flex items-center gap-5">
            <a
              href={social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.instagram.label}
              className="text-ink/70 transition-colors duration-300 hover:text-primary"
            >
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a
              href={social.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.youtube.label}
              className="text-ink/70 transition-colors duration-300 hover:text-primary"
            >
              <YoutubeIcon className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 font-serif text-sm text-ink/70">
          <p>{event.name}</p>
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
