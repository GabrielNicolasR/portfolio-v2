import { motion } from "framer-motion";
import { Bot, BrainCircuit, Cpu, Database, Network, Sparkles, Workflow, Zap } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function AIJourney() {
  const { t } = useI18n();

  const stack = [
    { icon: Sparkles, key: "ai.generative_ai" },
    { icon: Workflow, key: "ai.langchain" },
    { icon: Database, key: "ai.rag_systems" },
    { icon: Cpu, key: "ai.python" },
    { icon: BrainCircuit, key: "ai.machine_learning" },
    { icon: Bot, key: "ai.ai_agents" },
    { icon: Network, key: "ai.llm_applications" },
    { icon: Zap, key: "ai.continuous_learning" },
  ];

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
            AI Journey
          </div>
          <h2 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-[-0.03em] leading-[1] text-gradient">
            {t("ai.title")}
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {t("ai.description")}
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stack.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl glass p-5 transition-all hover:border-primary/40 hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-transparent transition-all duration-500" />
              <item.icon className="relative size-5 text-primary transition-transform group-hover:scale-110" />
              <h3 className="mt-3 text-lg font-medium tracking-tight">{t(item.key)}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
