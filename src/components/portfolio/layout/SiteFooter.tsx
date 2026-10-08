import { ArrowUp } from "lucide-react";
import { profile } from "@/content/profile";
import { useI18n } from "@/lib/i18n";
import { GithubIcon, LinkedinIcon } from "../primitives/BrandIcons";

export function SiteFooter() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-band-border bg-band text-band-muted">
      <div className="container-page flex flex-col gap-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.fullName}. {t("footer.rights")}
        </p>
        <div className="flex items-center gap-1">
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex size-9 items-center justify-center rounded-md transition-colors hover:bg-white/5 hover:text-band-foreground"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex size-9 items-center justify-center rounded-md transition-colors hover:bg-white/5 hover:text-band-foreground"
          >
            <LinkedinIcon className="size-4" />
          </a>
          <a
            href="#top"
            className="ml-2 inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 transition-colors hover:bg-white/5 hover:text-band-foreground"
          >
            <ArrowUp className="size-4" aria-hidden="true" />
            {t("footer.top")}
          </a>
        </div>
      </div>
    </footer>
  );
}
