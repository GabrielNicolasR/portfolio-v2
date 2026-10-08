import { useState } from "react";
import { ArrowUpRight, Check, Copy, Download, Mail } from "lucide-react";
import { profile } from "@/content/profile";
import { useI18n } from "@/lib/i18n";
import { ButtonLink } from "../primitives/ButtonLink";
import { GithubIcon, LinkedinIcon } from "../primitives/BrandIcons";
import { Reveal } from "../primitives/Reveal";

export function Contact() {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.contact.email}`;
    }
  };

  const channels = [
    { label: "LinkedIn", value: `in/${profile.contact.linkedinHandle}`, href: profile.contact.linkedin, Icon: LinkedinIcon },
    { label: "GitHub", value: profile.contact.githubHandle, href: profile.contact.github, Icon: GithubIcon },
  ];

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-band text-band-foreground">
      <div className="container-page grid gap-12 py-20 sm:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">{t("contact.eyebrow")}</p>
          <h2 id="contact-heading" className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {t("contact.title")}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-band-muted sm:text-lg">
            {t("contact.description")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${profile.contact.email}`} variant="brand">
              <Mail className="size-4" aria-hidden="true" />
              {t("hero.ctaPrimary")}
            </ButtonLink>
            <ButtonLink href={profile.cv} download variant="band-outline">
              <Download className="size-4" aria-hidden="true" />
              {t("contact.downloadCv")}
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ul className="divide-y divide-band-border overflow-hidden rounded-xl border border-band-border">
            <li className="flex items-center gap-4 px-5 py-4">
              <Mail className="size-5 shrink-0 text-band-muted" aria-hidden="true" />
              <div className="min-w-0 flex-1">
                <p className="text-xs text-band-muted">{t("contact.email")}</p>
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="block truncate font-medium hover:underline hover:underline-offset-4"
                >
                  {profile.contact.email}
                </a>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                aria-label={copied ? t("contact.copied") : t("contact.copy")}
                title={copied ? t("contact.copied") : t("contact.copy")}
                className="inline-flex size-9 shrink-0 items-center justify-center rounded-md text-band-muted transition-colors hover:bg-white/5 hover:text-band-foreground"
              >
                {copied ? <Check className="size-4 text-success" /> : <Copy className="size-4" />}
              </button>
              <span role="status" className="sr-only">
                {copied ? t("contact.copied") : ""}
              </span>
            </li>
            {channels.map(({ label, value, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-white/[0.03]"
                >
                  <Icon className="size-5 shrink-0 text-band-muted" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-band-muted">{label}</p>
                    <p className="truncate font-medium">{value}</p>
                  </div>
                  <ArrowUpRight
                    className="size-4 text-band-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-band-foreground"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
