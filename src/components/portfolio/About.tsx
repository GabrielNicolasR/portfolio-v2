import { motion } from "framer-motion";
import { Section } from "./Section";
import { useI18n } from "@/lib/i18n";
import { User } from "lucide-react";

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
      eyebrow={t("about.eyebrow")}
      title={<span dangerouslySetInnerHTML={{ __html: t("about.title") }} />}
    >
      <div className="grid gap-10 md:grid-cols-5">

        <div className="md:col-span-3 space-y-8">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-5"
          >
            <div className="relative shrink-0">

              <div className="size-20 rounded-2xl overflow-hidden glass border border-border glow-ring">
                <img
                  src="/gabriel-nicolas.png"
                  alt="Gabriel Nicolas"
                  className="w-full h-full object-cover"
                  onError={(e) => {

                    const target = e.currentTarget;
                    target.style.display = "none";
                    target.nextElementSibling?.removeAttribute("style");
                  }}
                />
                <div
                  style={{ display: "none" }}
                  className="w-full h-full flex items-center justify-center bg-secondary"
                >
                  <User className="size-8 text-muted-foreground" />
                </div>
              </div>
              <span className="absolute -bottom-1 -right-1 size-4 rounded-full bg-emerald-400 border-2 border-background shadow-[0_0_8px] shadow-emerald-400/60" />
            </div>
            <div>
              <div className="text-lg font-semibold tracking-tight">Gabriel Nicolas</div>
              <div className="text-sm text-muted-foreground">{t("about.role_company")}</div>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {t("about.open_to_opportunities")}
              </div>
            </div>
          </motion.div>


          <div className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>{t("about.paragraph1")}</p>
            <p>{t("about.paragraph2")}</p>
            <p>{t("about.paragraph3")}</p>
          </div>
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
