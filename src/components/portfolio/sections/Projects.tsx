import { ArrowUpRight, Check, ExternalLink } from "lucide-react";
import { profile, projects, type Project } from "@/content/profile";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { TagList } from "../primitives/Tag";
import { GithubIcon } from "../primitives/BrandIcons";

export function Projects() {
  const { t } = useI18n();
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      tone="surface"
      eyebrow={t("projects.eyebrow")}
      title={t("projects.title")}
      description={t("projects.description")}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {featured.map((p, i) => (
          <Reveal key={p.id} delay={i * 80} className="h-full">
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>

      {others.length > 0 && (
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {others.map((p, i) => (
            <Reveal key={p.id} delay={i * 80} className="h-full">
              <ProjectCard project={p} compact />
            </Reveal>
          ))}
        </div>
      )}

      <Reveal className="mt-10">
        <a
          href={profile.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline hover:underline-offset-4"
        >
          {t("projects.more")}
          <ArrowUpRight
            className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </Reveal>
    </Section>
  );
}

function ProjectCard({ project, compact }: { project: Project; compact?: boolean }) {
  const { t, l } = useI18n();

  return (
    <article
      className={cn(
        "group/card flex h-full flex-col rounded-xl border border-border bg-card transition-[border-color,box-shadow] duration-200",
        "hover:border-border-strong hover:shadow-[0_12px_32px_-16px_rgb(0_0_0/0.18)]",
      )}
    >
      {/* Top accent line on featured cards */}
      {project.featured && <div aria-hidden="true" className="h-0.5 rounded-t-xl bg-brand" />}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{l(project.category)}</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">{l(project.title)}</h3>
          </div>
          {project.featured && (
            <span className="shrink-0 rounded-md bg-primary-soft px-2 py-0.5 text-xs font-medium text-primary">
              {t("projects.featured")}
            </span>
          )}
        </div>

        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{l(project.description)}</p>

        {!compact && (
          <ul className="mt-5 space-y-2.5">
            {project.highlights.map((h) => (
              <li key={h.en} className="flex gap-2.5 text-sm leading-relaxed text-foreground/85">
                <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                <span>{l(h)}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-6">
          <div className="border-t border-border pt-5">
            <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {t("projects.stack")}
            </p>
            <TagList items={project.stack} label={t("projects.stack")} />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline hover:underline-offset-4"
            >
              <GithubIcon className="size-4" />
              {t("projects.repo")}
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline hover:underline-offset-4"
              >
                <ExternalLink className="size-4" aria-hidden="true" />
                {t("projects.demo")}
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
