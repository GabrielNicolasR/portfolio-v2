import { motion } from "framer-motion";
import { Section } from "./Section";
import {
  Brain, Code2, Database, GitBranch, Sparkles, Layers,
  Terminal, Zap, Cpu, Globe, Boxes, Workflow
} from "lucide-react";

const groups = [
  {
    icon: Brain,
    title: "AI & Python",
    accent: "from-violet-400/20 to-blue-400/10",
    skills: ["Python", "Generative AI", "LangChain", "RAG", "AI Engineering", "Prompt Engineering", "Machine Learning", "LLM Applications"],
  },
  {
    icon: Code2,
    title: "Software Development",
    accent: "from-cyan-400/20 to-emerald-400/10",
    skills: ["APIs", "Node.js", "SQL", "PostgreSQL", "JavaScript", "TypeScript"],
  },
  {
    icon: Layers,
    title: "Frontend",
    accent: "from-pink-400/20 to-violet-400/10",
    skills: ["React", "Next.js", "TailwindCSS"],
  },
  {
    icon: GitBranch,
    title: "Tools",
    accent: "from-amber-400/20 to-rose-400/10",
    skills: ["Git", "GitHub", "VSCode", "Vercel"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Stack"
      title={<>Tools I reach for daily.</>}
      description="A curated toolkit focused on shipping reliable software and intelligent AI systems."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {groups.map((g, i) => {
          const Icon = g.icon;
          return (
            <motion.div
              key={g.title}
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
                  <h3 className="text-lg font-medium tracking-tight">{g.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/30"
                    >
                      {s}
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
