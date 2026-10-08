import { BrainCircuit, Cloud, LayoutDashboard, Server, Wrench, type LucideIcon } from "lucide-react";
import { skills, type SkillGroupId } from "@/content/profile";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";

const ICONS: Record<SkillGroupId, LucideIcon> = {
  ai: BrainCircuit,
  backend: Server,
  frontend: LayoutDashboard,
  cloud: Cloud,
  tools: Wrench,
};

export function Skills() {
  const { t, l } = useI18n();

  return (
    <Section
      id="skills"
      eyebrow={t("skills.eyebrow")}
      title={t("skills.title")}
      description={t("skills.description")}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => {
          const Icon = ICONS[group.id];
          const highlight = group.id === "ai";
          return (
            <Reveal key={group.id} delay={i * 60} className={cn("h-full", highlight && "sm:col-span-2")}>
              <article
                className={cn(
                  "h-full rounded-xl border bg-card p-6 transition-colors duration-200 hover:border-border-strong",
                  highlight ? "border-primary/30" : "border-border",
                )}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={cn(
                      "flex size-10 shrink-0 items-center justify-center rounded-lg",
                      highlight ? "bg-primary-soft text-primary" : "bg-surface text-muted-foreground",
                    )}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{l(group.title)}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{l(group.description)}</p>
                  </div>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label={l(group.title)}>
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border bg-background px-2.5 py-1 text-sm font-medium text-foreground/90"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
