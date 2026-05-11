import { motion } from "framer-motion";
import { Section } from "./Section";
import { useI18n } from "@/lib/i18n";

const stats = [
  { value: "3+", labelKey: "about.years_building" },
  { value: "20+", labelKey: "about.projects_shipped" },
  { value: "AI", labelKey: "about.engineering_focus" },
];

export function About() {
  const { t } = useI18n();
  return (
    <Section
      id="about"
      eyebrow={t('about.eyebrow')}
      title={<span dangerouslySetInnerHTML={{ __html: t('about.title') }} />}
    >
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3 space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
          <p>
            {t('about.paragraph1')}
          </p>
          <p>
            {t('about.paragraph2')}
          </p>
          <p>
            {t('about.paragraph3')}
          </p>
        </div>

        <div className="md:col-span-2 grid grid-cols-3 md:grid-cols-1 gap-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.labelKey}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-5"
            >
              <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-gradient-primary">
                {s.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{t(s.labelKey)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
