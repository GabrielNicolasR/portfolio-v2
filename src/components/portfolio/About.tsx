import { motion } from "framer-motion";
import { Section } from "./Section";

const stats = [
  { value: "3+", label: "Years building software" },
  { value: "20+", label: "Projects shipped" },
  { value: "AI", label: "Engineering focus" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>Engineer crafting <span className="font-display text-primary">intelligent</span> systems.</>}
    >
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3 space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a Brazilian software developer currently working as <span className="text-foreground">Development Analyst I at Cadmus</span>, where I started as an intern and was hired full-time after delivering on real production challenges.
          </p>
          <p>
            My focus is shifting toward <span className="text-foreground">AI Engineering</span> — designing systems with Python, Generative AI, LangChain and RAG architectures. I study LLM applications and modern AI patterns to build software that's not only well-engineered, but genuinely intelligent.
          </p>
          <p>
            Before that, I worked as a freelance developer on Workana, shipping web projects and solving technical problems for clients with strong ratings. I care about clean code, quiet design, and learning every day.
          </p>
        </div>

        <div className="md:col-span-2 grid grid-cols-3 md:grid-cols-1 gap-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-5"
            >
              <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-gradient-primary">
                {s.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
