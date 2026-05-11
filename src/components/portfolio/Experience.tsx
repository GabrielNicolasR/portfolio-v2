import { motion } from "framer-motion";
import { Section } from "./Section";

const items = [
  {
    company: "Cadmus",
    role: "Development Analyst I",
    period: "Present",
    points: [
      "Started as an intern and was hired full-time after delivering measurable impact.",
      "Building and maintaining internal systems used in real business operations.",
      "Contributing to product improvements and shipping changes to production.",
      "Solving technical challenges across the stack in a fast-moving environment.",
    ],
  },
  {
    company: "Workana",
    role: "Freelance Developer",
    period: "Previous",
    points: [
      "Built web projects and solved technical issues for international clients.",
      "Worked across modern frontend stacks delivering custom solutions.",
      "Maintained excellent client ratings across completed projects.",
    ],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>A path from intern <span className="font-display">to engineer</span>.</>}
    >
      <div className="relative">
        <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" />
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
              <div className="absolute left-0 sm:left-1 top-1.5 flex items-center justify-center">
                <span className="size-2.5 rounded-full bg-primary shadow-[0_0_16px] shadow-primary/70" />
                <span className="absolute size-6 rounded-full border border-primary/30" />
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight">{it.role}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <span className="text-foreground">{it.company}</span>
                  </p>
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {it.period}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {it.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground/40" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
