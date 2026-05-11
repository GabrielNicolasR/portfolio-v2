import { motion } from "framer-motion";
import { Section } from "./Section";
import { Bot, BrainCircuit, Cpu, Database, Network, Sparkles, Workflow, Zap } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const pillars = [
  { icon: Sparkles, labelKey: "ai.generative_ai" },
  { icon: Workflow, labelKey: "ai.langchain" },
  { icon: Database, labelKey: "ai.rag_systems" },
  { icon: Cpu, labelKey: "ai.python" },
  { icon: BrainCircuit, labelKey: "ai.machine_learning" },
  { icon: Bot, labelKey: "ai.ai_agents" },
  { icon: Network, labelKey: "ai.llm_applications" },
  { icon: Zap, labelKey: "ai.continuous_learning" },
];

export function AIJourney() {
  const { t } = useI18n();
  return (
    <section id="ai" className="relative overflow-hidden px-6 py-32 sm:py-40">
      {/* atmospheric background */}
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
            AI Journey
          </div>
          <h2 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-[-0.03em] leading-[1] text-gradient">
            {t('ai.title')}
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {t('ai.description')}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.labelKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative rounded-2xl glass p-5 transition-all hover:border-primary/40 hover:-translate-y-1"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-transparent transition-all duration-500`} />
                <Icon className="relative size-5 text-primary transition-transform group-hover:scale-110" />
                <h3 className="text-lg sm:text-xl font-medium tracking-tight">{t(p.labelKey)}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
