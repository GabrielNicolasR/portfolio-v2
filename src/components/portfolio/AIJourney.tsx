import { motion } from "framer-motion";
import { Bot, BrainCircuit, Database, Sparkles, Workflow, Target, TrendingUp } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const topics = [
  {
    icon: Sparkles,
    titleKey: "ai.topic.genai",
    descKey: "ai.topic.genai_desc",
    progress: 78,
    color: "from-violet-500/20 to-primary/10",
    barColor: "bg-primary",
  },
  {
    icon: Workflow,
    titleKey: "ai.topic.langchain",
    descKey: "ai.topic.langchain_desc",
    progress: 65,
    color: "from-cyan-500/20 to-accent/10",
    barColor: "bg-accent",
  },
  {
    icon: Database,
    titleKey: "ai.topic.rag",
    descKey: "ai.topic.rag_desc",
    progress: 58,
    color: "from-emerald-500/20 to-cyan-500/10",
    barColor: "bg-emerald-400",
  },
  {
    icon: BrainCircuit,
    titleKey: "ai.topic.python",
    descKey: "ai.topic.python_desc",
    progress: 82,
    color: "from-amber-500/20 to-rose-500/10",
    barColor: "bg-amber-400",
  },
];

const roadmapSteps = [
  { labelKey: "ai.roadmap.software_dev", done: true },
  { labelKey: "ai.roadmap.python_apis", done: true },
  { labelKey: "ai.roadmap.generative_ai", done: true },
  { labelKey: "ai.roadmap.langchain_rag", done: true },
  { labelKey: "ai.roadmap.ai_engineering", done: false, current: true },
  { labelKey: "ai.roadmap.mlops", done: false },
];

export function AIJourney() {
  const { t } = useI18n();

  return (
    <section id="ai" className="relative overflow-hidden px-6 py-32 sm:py-40">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[600px] rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-primary">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            {t("ai.eyebrow")}
          </div>
          <h2 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-[-0.03em] leading-[1] text-gradient">
            {t("ai.title")}
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t("ai.description")}
          </p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "4+", label: t("ai.projects_built"), icon: Bot },
            { value: "52+", label: t("ai.weeks_studying"), icon: TrendingUp },
            { value: "3", label: t("ai.llm_providers"), icon: BrainCircuit },
            { value: "∞", label: t("ai.goal"), icon: Target },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="glass rounded-2xl p-5 text-center">
                <Icon className="size-5 text-primary mx-auto mb-2" />
                <div className="text-2xl font-semibold tracking-tight text-gradient-primary">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground leading-tight">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>


        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <motion.div
                key={topic.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-2xl glass p-6 transition-all hover:border-primary/40 hover:-translate-y-1 overflow-hidden"
              >
                <div
                  className={`absolute -top-16 -right-16 size-48 rounded-full bg-gradient-to-br ${topic.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />
                <div className="relative">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex size-9 items-center justify-center rounded-xl bg-secondary border border-border shrink-0">
                      <Icon className="size-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold tracking-tight">{t(topic.titleKey)}</h3>
                      <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                        {t(topic.descKey)}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground font-mono">{t("ai.progress_label")}</span>
                      <span className="text-foreground font-semibold">{topic.progress}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary/60 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${topic.progress}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: index * 0.1 + 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`h-full rounded-full ${topic.barColor}`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 glass rounded-2xl p-6 sm:p-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <Target className="size-4 text-primary" />
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground font-mono">
              {t("ai.learning_roadmap")}
            </h3>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            {roadmapSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                    step.current
                      ? "bg-primary/15 border border-primary/40 text-primary"
                      : step.done
                        ? "bg-secondary/80 border border-border text-muted-foreground line-through"
                        : "bg-secondary/40 border border-border/40 text-muted-foreground/60"
                  }`}
                >
                  {step.done && !step.current && (
                    <span className="size-1.5 rounded-full bg-emerald-400" />
                  )}
                  {step.current && (
                    <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                  )}
                  {t(step.labelKey)}
                </div>
                {i < roadmapSteps.length - 1 && (
                  <span className="text-muted-foreground/30 text-xs">→</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
