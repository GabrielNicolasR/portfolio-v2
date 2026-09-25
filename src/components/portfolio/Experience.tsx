import { motion } from "framer-motion";
import { Section } from "./Section";
import { useI18n } from "@/lib/i18n";
import { Briefcase, ExternalLink } from "lucide-react";

const items = [
  {
    company: "Cadmus",
    roleKey: "experience.cadmus_role",
    periodKey: "experience.cadmus_period",
    typeKey: "experience.type_fulltime",
    typeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    points: [
      "experience.cadmus_point1",
      "experience.cadmus_point2",
      "experience.cadmus_point3",
      "experience.cadmus_point4",
    ],
  },
  {
    company: "Cadmus",
    roleKey: "experience.workana_role", // reaproveitando a key para o estágio
    periodKey: "experience.workana_period",
    typeKey: "experience.type_internship",
    typeColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    points: ["experience.workana_point1", "experience.workana_point2"],
  },
];

export function Experience() {
  const { t } = useI18n();
  return (
    <Section id="experience" eyebrow={t("experience.eyebrow")} title={t("experience.title")}>
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

              <div className="glass rounded-2xl p-6 transition-all hover:border-foreground/20">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl sm:text-2xl font-medium tracking-tight">
                        {t(it.roleKey)}
                      </h3>
                      <span
                        className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest ${it.typeColor}`}
                      >
                        {t(it.typeKey)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="size-3.5 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        <span className="text-foreground font-medium">{it.company}</span>
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground bg-secondary/60 rounded-full px-3 py-1 border border-border">
                    {t(it.periodKey)}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {it.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span>{t(p)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
