import { motion } from "framer-motion";
import { Section } from "./Section";
import { useI18n } from "@/lib/i18n";

const items = [
  {
    company: "Cadmus",
    roleKey: "experience.cadmus_role",
    periodKey: "experience.present",
    points: [
      "experience.cadmus_point1",
      "experience.cadmus_point2",
      "experience.cadmus_point3",
      "experience.cadmus_point4",
    ],
  },
  {
    company: "Workana",
    roleKey: "experience.workana_role",
    periodKey: "experience.previous",
    points: [
      "experience.workana_point1",
      "experience.workana_point2",
      "experience.workana_point3",
    ],
  },
];

export function Experience() {
  const { t } = useI18n();
  return (
    <Section
      id="experience"
      eyebrow={t('experience.eyebrow')}
      title={t('experience.title')}
    >
      <div className="relative">
        <div className="absolute left-1.5 sm:left-2 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" />
        <div className="space-y-10">
          {items.map((it, i) => (
            <motion.div
              key={it.company}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-12 sm:pl-16"
            >
              <div className="absolute left-1.5 sm:left-2 top-1.5 flex items-center justify-center -translate-x-1/2">
                <span className="size-2.5 rounded-full bg-primary shadow-[0_0_16px] shadow-primary/70" />
                <span className="absolute size-6 rounded-full border border-primary/30" />
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight">{t(it.roleKey)}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <span className="text-foreground">{it.company}</span>
                  </p>
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {t(it.periodKey)}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {it.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground/40" />
                    <span>{t(p)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
