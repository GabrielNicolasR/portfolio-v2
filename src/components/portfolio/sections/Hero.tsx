import { ArrowRight, Briefcase, Code2, Mail, MapPin } from "lucide-react";
import { experience, metrics, profile } from "@/content/profile";
import { useI18n } from "@/lib/i18n";
import { ButtonLink } from "../primitives/ButtonLink";
import { GithubIcon, LinkedinIcon } from "../primitives/BrandIcons";
import { Reveal } from "../primitives/Reveal";

export function Hero() {
  const { t, l } = useI18n();
  const currentCompany = experience[0];
  const currentRole = currentCompany.roles[0];

  return (
    <section id="top" aria-labelledby="hero-heading" className="relative isolate overflow-hidden bg-background">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />

      <div className="container-page grid items-center gap-12 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.35fr_1fr] lg:gap-16 lg:pb-28 lg:pt-24">
        {/* Copy */}
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
            {l(profile.availability)}
          </p>

          <h1
            id="hero-heading"
            className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]"
          >
            {profile.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-primary sm:text-xl">{l(profile.role)}</p>

          <p className="mt-6 max-w-2xl text-xl font-medium leading-snug text-foreground text-balance sm:text-2xl">
            {l(profile.headline)}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-[17px]">
            {l(profile.summary)}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="#contact" variant="brand">
              {t("hero.ctaPrimary")}
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#projects" variant="outline">
              {t("hero.ctaSecondary")}
            </ButtonLink>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <li>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <LinkedinIcon className="size-4" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <GithubIcon className="size-4" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href={`mailto:${profile.contact.email}`}
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="size-4" aria-hidden="true" />
                {profile.contact.email}
              </a>
            </li>
          </ul>
        </Reveal>

        {/* Profile card */}
        <Reveal delay={120}>
          <aside className="overflow-hidden rounded-xl border border-border bg-card shadow-[0_1px_3px_rgb(0_0_0/0.04),0_12px_32px_-12px_rgb(0_0_0/0.12)]">
            <div className="flex items-center gap-4 border-b border-border p-5">
              <img
                src={profile.photo}
                alt={profile.fullName}
                width={64}
                height={64}
                className="size-16 rounded-lg object-cover"
              />
              <div className="min-w-0">
                <p className="truncate font-semibold text-foreground">{profile.fullName}</p>
                <p className="mt-0.5 inline-flex items-center gap-1.5 text-xs font-medium text-success">
                  <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
                  {t("hero.available")}
                </p>
              </div>
            </div>

            <dl className="divide-y divide-border text-sm">
              <div className="flex gap-3 px-5 py-4">
                <Briefcase className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                <div>
                  <dt className="text-xs text-muted-foreground">{t("hero.currentRole")}</dt>
                  <dd className="mt-0.5 font-medium text-foreground">
                    {l(currentRole.title)} · {currentCompany.name.split(" ")[0]}
                  </dd>
                </div>
              </div>
              <div className="flex gap-3 px-5 py-4">
                <MapPin className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                <div>
                  <dt className="text-xs text-muted-foreground">{t("hero.location")}</dt>
                  <dd className="mt-0.5 font-medium text-foreground">{l(profile.location)}</dd>
                </div>
              </div>
              <div className="flex gap-3 px-5 py-4">
                <Code2 className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                <div>
                  <dt className="text-xs text-muted-foreground">{t("hero.focus")}</dt>
                  <dd className="mt-2 flex flex-wrap gap-1.5">
                    {profile.focusAreas.map((f) => (
                      <span
                        key={f}
                        className="rounded-md bg-primary-soft px-2 py-0.5 text-xs font-medium text-primary"
                      >
                        {f}
                      </span>
                    ))}
                  </dd>
                </div>
              </div>
            </dl>
          </aside>
        </Reveal>
      </div>

      {/* Key metrics strip */}
      <div className="border-t border-border bg-surface">
        <dl className="container-page grid divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {metrics.map((m, i) => (
            <Reveal key={m.value} delay={i * 80} className="py-6 sm:px-6 sm:first:pl-0">
              <dt className="sr-only">{l(m.label)}</dt>
              <dd>
                <span className="block text-3xl font-semibold tracking-tight text-foreground">{m.value}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{l(m.label)}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
