import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon as Github } from "./BrandIcons";
import { Section } from "./Section";
import { useI18n } from "@/lib/i18n";

const projects = [
  {
    titleKey: "projects.ai_email_title",
    descriptionKey: "projects.ai_email_description",
    tags: ["projects.python_tag", "projects.generative_ai_tag"],
    accent: "from-violet-500/30 via-primary/20 to-transparent",
    initials: "AI",
    github: "https://github.com/GabrielNicolasR/ai-email-summary",
    demo: null, // Add demo URL here when available
  },
  {
    titleKey: "projects.simple_automation_app_title",
    descriptionKey: "projects.simple_automation_app_description",
    tags: ["projects.python_tag", "projects.groq_tag", "projects.generative_ai_tag", "projects.pandas_tag"],
    accent: "from-emerald-500/30 via-accent/20 to-transparent",
    initials: "LLM",
    github: "https://github.com/GabrielNicolasR/automacao-perguntas-llm",
    demo: null,
  },
  {
    titleKey: "projects.groq_sentiment_classifier_title",
    descriptionKey: "projects.groq_sentiment_classifier_description",
    tags: ["projects.python_tag", "projects.groq_tag", "projects.generative_ai_tag", "projects.pandas_tag"],
    accent: "from-amber-500/30 via-accent/20 to-transparent",
    initials: "SC",
    github: "https://github.com/GabrielNicolasR/groq-sentiment-classifier",
    demo: null,
  },
  {
    titleKey: "projects.trip_ai_langchain_title",
    descriptionKey: "projects.trip_ai_langchain_description",
    tags: ["projects.python_tag", "projects.langchain_tag", "projects.generative_ai_tag", "projects.api_tag"],
    accent: "from-rose-500/30 via-accent/20 to-transparent",
    initials: "✈",
    github: "https://github.com/GabrielNicolasR/trip-ai-langchain",
    demo: null,
  },
];

export function Projects() {
  const { t } = useI18n();
  return (
    <Section
      id="projects"
      eyebrow={t("projects.eyebrow")}
      title={t("projects.title")}
      description={t("projects.description")}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.titleKey}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl glass transition-all duration-500 hover:border-foreground/20 hover:-translate-y-1"
          >
            <div className="relative h-44 overflow-hidden border-b border-border">
              <div className={`absolute inset-0 bg-gradient-to-br ${p.accent}`} />
              <div className="absolute inset-0 bg-dots opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="font-display text-6xl text-foreground/80 transition-transform duration-700 group-hover:scale-110">
                  {p.initials}
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card to-transparent" />
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg sm:text-xl font-medium tracking-tight">{t(p.titleKey)}</h3>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open on GitHub"
                >
                  <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {t(p.descriptionKey)}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-[11px] font-mono text-muted-foreground"
                  >
                    {t(tag)}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-foreground/10 hover:bg-foreground/15 px-3 py-1.5 text-xs font-medium transition-colors"
                >
                  <Github className="size-3" />
                  {t("projects.github")}
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 hover:bg-primary/20 px-3 py-1.5 text-xs font-medium text-primary transition-colors"
                  >
                    <ExternalLink className="size-3" />
                    {t("projects.live_demo")}
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
