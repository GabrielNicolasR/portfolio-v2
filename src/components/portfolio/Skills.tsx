import { motion } from "framer-motion";
import { Section } from "./Section";
import {
  Brain,
  Code2,
  GitBranch,
  Layers,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";

type Proficiency = "expert" | "advanced" | "intermediate" | "learning";

interface Skill {
  name: string;
  level: Proficiency;
  percentage: number;
}

const proficiencyColors: Record<Proficiency, string> = {
  expert: "bg-primary",
  advanced: "bg-accent",
  intermediate: "bg-violet-400",
  learning: "bg-amber-400",
};

const proficiencyBg: Record<Proficiency, string> = {
  expert: "text-primary bg-primary/10 border-primary/20",
  advanced: "text-accent bg-accent/10 border-accent/20",
  intermediate: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  learning: "text-amber-400 bg-amber-400/10 border-amber-400/20",
};

const groups: {
  icon: React.ElementType;
  titleKey: string;
  accent: string;
  skills: Skill[];
}[] = [
  {
    icon: Brain,
    titleKey: "skills.ai_title",
    accent: "from-violet-400/20 to-blue-400/10",
    skills: [
      { name: "skills.python", level: "advanced", percentage: 80 },
      { name: "skills.generative_ai", level: "advanced", percentage: 78 },
      { name: "skills.langchain", level: "intermediate", percentage: 65 },
      { name: "skills.rag", level: "intermediate", percentage: 60 },
      { name: "skills.ai_engineering", level: "learning", percentage: 45 },
      { name: "skills.prompt_engineering", level: "advanced", percentage: 75 },
    ],
  },
  {
    icon: Code2,
    titleKey: "skills.software_title",
    accent: "from-cyan-400/20 to-emerald-400/10",
    skills: [
      { name: "skills.apis", level: "advanced", percentage: 82 },
      { name: "skills.nodejs", level: "intermediate", percentage: 65 },
      { name: "skills.sql", level: "advanced", percentage: 75 },
      { name: "skills.postgresql", level: "intermediate", percentage: 70 },
      { name: "skills.javascript", level: "advanced", percentage: 80 },
      { name: "skills.typescript", level: "intermediate", percentage: 68 },
    ],
  },
  {
    icon: Layers,
    titleKey: "skills.frontend_title",
    accent: "from-pink-400/20 to-violet-400/10",
    skills: [
      { name: "skills.react", level: "advanced", percentage: 78 },
      { name: "skills.nextjs", level: "intermediate", percentage: 65 },
      { name: "skills.tailwindcss", level: "advanced", percentage: 85 },
    ],
  },
  {
    icon: GitBranch,
    titleKey: "skills.tools_title",
    accent: "from-amber-400/20 to-rose-400/10",
    skills: [
      { name: "Git", level: "advanced", percentage: 80 },
      { name: "GitHub", level: "advanced", percentage: 82 },
      { name: "VSCode", level: "expert", percentage: 90 },
      { name: "Vercel", level: "intermediate", percentage: 70 },
    ],
  },
];

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  const { t } = useI18n();
  const label = skill.name.startsWith("skills.") ? t(skill.name) : skill.name;
  const levelLabel = t(`skills.proficiency.${skill.level}`);

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-foreground/80">{label}</span>
        <span
          className={`text-[10px] font-mono rounded-full border px-1.5 py-0.5 ${proficiencyBg[skill.level]}`}
        >
          {levelLabel}
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-secondary/60 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full rounded-full ${proficiencyColors[skill.level]}`}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const { t } = useI18n();
  return (
    <Section
      id="skills"
      eyebrow={t("skills.eyebrow")}
      title={t("skills.title")}
      description={t("skills.description")}
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
              <div
                className={`absolute -top-20 -right-20 size-56 rounded-full bg-gradient-to-br ${g.accent} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-secondary border border-border">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium tracking-tight">{t(g.titleKey)}</h3>
                </div>
                <div className="space-y-3">
                  {g.skills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      delay={i * 0.08 + si * 0.06}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Proficiency legend */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground"
      >
        {(["expert", "advanced", "intermediate", "learning"] as Proficiency[]).map((level) => (
          <div key={level} className="flex items-center gap-1.5">
            <div className={`size-2 rounded-full ${proficiencyColors[level]}`} />
            <span>{t(`skills.proficiency.${level}`)}</span>
          </div>
        ))}
      </motion.div>
    </Section>
  );
}
