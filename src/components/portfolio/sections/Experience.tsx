import { Building2, MapPin, TrendingUp } from "lucide-react";
import { experience, type Role } from "@/content/profile";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { TagList } from "../primitives/Tag";

export function Experience() {
  const { t, l } = useI18n();

  return (
    <Section
      id="experience"
      eyebrow={t("experience.eyebrow")}
      title={t("experience.title")}
      description={t("experience.description")}
    >
      <ol className="space-y-6">
        {experience.map((company, ci) => (
          <li key={company.name}>
            <Reveal delay={ci * 60}>
              <article className="rounded-xl border border-border bg-card">
                <header className="flex flex-col gap-2 border-b border-border px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-lg border border-border bg-surface">
                      <Building2 className="size-5 text-muted-foreground" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{company.name}</h3>
                      <p className="text-sm text-muted-foreground">{l(company.context)}</p>
                    </div>
                  </div>
                  <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="size-3.5" aria-hidden="true" />
                    {l(company.location)}
                  </p>
                </header>

                <ol className="relative px-6 py-2">
                  {company.roles.map((role, ri) => (
                    <RoleItem
                      key={l(role.title)}
                      role={role}
                      isLast={ri === company.roles.length - 1}
                      isPromotion={ri === 0 && company.roles.length > 1}
                    />
                  ))}
                </ol>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function RoleItem({ role, isLast, isPromotion }: { role: Role; isLast: boolean; isPromotion: boolean }) {
  const { t, l } = useI18n();
  const isCurrent = role.end === null;

  return (
    <li className="relative grid gap-4 py-5 pl-7 md:grid-cols-[11rem_1fr] md:gap-8 md:pl-0">
      {/* Timeline rail (mobile: left; desktop: hidden in favour of date column) */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute left-0 top-[1.65rem] size-2.5 rounded-full border-2 md:hidden",
          isCurrent ? "border-brand bg-brand" : "border-border-strong bg-card",
        )}
      />
      {!isLast && (
        <span aria-hidden="true" className="absolute bottom-0 left-[4.5px] top-11 w-px bg-border md:hidden" />
      )}

      <div className="text-sm">
        <p className="font-medium text-foreground">
          {l(role.start)} — {role.end ? l(role.end) : t("experience.present")}
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <span
            className={cn(
              "rounded-md px-2 py-0.5 text-xs font-medium",
              isCurrent ? "bg-primary-soft text-primary" : "bg-surface text-muted-foreground",
            )}
          >
            {l(role.type)}
          </span>
          {isPromotion && (
            <span className="inline-flex items-center gap-1 rounded-md bg-surface px-2 py-0.5 text-xs font-medium text-success">
              <TrendingUp className="size-3" aria-hidden="true" />
              {t("experience.promoted")}
            </span>
          )}
        </div>
      </div>

      <div className={cn(!isLast && "md:border-b md:border-border md:pb-5")}>
        <h4 className="text-base font-semibold text-foreground">{l(role.title)}</h4>
        <ul className="mt-3 space-y-2">
          {role.highlights.map((h) => (
            <li key={h.en} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
              <span aria-hidden="true" className="mt-[0.6rem] size-1 shrink-0 rounded-full bg-muted-foreground/60" />
              <span>{l(h)}</span>
            </li>
          ))}
        </ul>
        <TagList items={role.stack} label={t("experience.stack")} className="mt-4" />
      </div>
    </li>
  );
}
