import { Award, BookOpen, GraduationCap, Languages, Route, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import {
  certifications,
  courses,
  education,
  learningPath,
  spokenLanguages,
  type EducationItem,
} from "@/content/profile";
import { useI18n } from "@/lib/i18n";
import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";

export function Education() {
  const { t, l } = useI18n();

  return (
    <Section
      id="education"
      tone="surface"
      eyebrow={t("education.eyebrow")}
      title={t("education.title")}
      description={t("education.description")}
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left: academic + courses */}
        <div className="space-y-6 lg:col-span-2">
          <Reveal>
            <Panel icon={GraduationCap} title={t("education.academic")}>
              <EntryList items={education} />
            </Panel>
          </Reveal>
          <Reveal delay={60}>
            <Panel icon={BookOpen} title={t("education.courses")}>
              <EntryList items={courses} />
            </Panel>
          </Reveal>
          <Reveal delay={120}>
            <Panel icon={Award} title={t("education.certifications")}>
              <ul className="grid gap-x-6 sm:grid-cols-2">
                {certifications.map((c) => (
                  <li key={c.title.en} className="flex items-start gap-3 border-b border-border py-3 last:border-0">
                    <Award className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{l(c.title)}</p>
                      <p className="text-xs text-muted-foreground">{c.issuer}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Panel>
          </Reveal>
        </div>

        {/* Right: learning path + languages */}
        <div className="space-y-6">
          <Reveal delay={80}>
            <Panel icon={Route} title={t("education.learningPath")}>
              <ol className="relative space-y-3 border-l border-border pl-5">
                {learningPath.map((step, i) => (
                  <li key={step.en} className="relative text-sm text-foreground/90">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[25px] top-1 flex size-2.5 items-center justify-center rounded-full border-2 border-primary bg-card"
                    />
                    <span className="mr-2 font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                    {l(step)}
                  </li>
                ))}
              </ol>
            </Panel>
          </Reveal>
          <Reveal delay={140}>
            <Panel icon={Languages} title={t("education.languages")}>
              <dl className="divide-y divide-border">
                {spokenLanguages.map((lang) => (
                  <div key={lang.name.en} className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0">
                    <dt className="text-sm font-medium text-foreground">{l(lang.name)}</dt>
                    <dd className="text-right text-sm text-muted-foreground">{l(lang.level)}</dd>
                  </div>
                ))}
              </dl>
            </Panel>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function Panel({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children: ReactNode }) {
  return (
    <section className="rounded-xl border border-border bg-card p-6">
      <h3 className="mb-5 flex items-center gap-2.5 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        <Icon className="size-4" aria-hidden="true" />
        {title}
      </h3>
      {children}
    </section>
  );
}

function EntryList({ items }: { items: EducationItem[] }) {
  const { t, l } = useI18n();
  return (
    <ul className="divide-y divide-border">
      {items.map((item) => (
        <li
          key={item.title.en}
          className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
        >
          <div>
            <p className="font-medium text-foreground">{l(item.title)}</p>
            <p className="mt-0.5 text-sm text-muted-foreground">{item.institution}</p>
          </div>
          <div className="flex shrink-0 items-center gap-2 sm:flex-col sm:items-end">
            <span className="text-sm text-muted-foreground">{l(item.period)}</span>
            {item.inProgress && (
              <span className="rounded-md bg-primary-soft px-2 py-0.5 text-xs font-medium text-primary">
                {t("education.inProgress")}
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
