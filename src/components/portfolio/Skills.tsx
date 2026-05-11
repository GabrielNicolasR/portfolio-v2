import { motion } from "framer-motion";
import { Section } from "./Section";
import {
  Brain, Code2, Database, GitBranch, Sparkles, Layers,
  Terminal, Zap, Cpu, Globe, Boxes, Workflow
} from "lucide-react";
import { useI18n } from "@/lib/i18n";

const groups = [
  {
    icon: Brain,
    titleKey: "skills.ai_title",
    accent: "from-violet-400/20 to-blue-400/10",
    skills: ["skills.python", "skills.generative_ai", "skills.langchain", "skills.rag", "skills.ai_engineering", "skills.prompt_engineering", "skills.machine_learning", "skills.llm_applications"],
  },
  {
    icon: Code2,
    titleKey: "skills.software_title",
    accent: "from-cyan-400/20 to-emerald-400/10",
    skills: ["skills.apis", "skills.nodejs", "skills.sql", "skills.postgresql", "skills.javascript", "skills.typescript"],
  },
  {
    icon: Layers,
    titleKey: "skills.frontend_title",
    accent: "from-pink-400/20 to-violet-400/10",
    skills: ["skills.react", "skills.nextjs", "skills.tailwindcss"],
  },
  {
    icon: GitBranch,
    titleKey: "skills.tools_title",
    accent: "from-amber-400/20 to-rose-400/10",
    skills: ["Git", "GitHub", "VSCode", "Vercel"],
  },
];

export function Skills() {
  const { t } = useI18n();
  return (
    <Section
      id="skills"
      eyebrow={t('skills.eyebrow')}
      title={t('skills.title')} 
      description={t('skills.description')}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {groups.map((g, i) => {
          const Icon = g.icon;
          return (
            <motion.div
              key={g.titleKey}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-all hover:border-foreground/20"
            >
              <div className={`absolute -top-20 -right-20 size-56 rounded-full bg-gradient-to-br ${g.accent} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-secondary border border-border">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium tracking-tight">{t(g.titleKey)}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-[11px] font-mono text-muted-foreground"
                    >
                      {t(s)}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
