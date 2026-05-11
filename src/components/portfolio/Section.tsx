import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={`relative px-6 py-28 sm:py-36 ${className ?? ""}`}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          {eyebrow && (
            <div className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-6 bg-primary/50" />
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.02em] text-gradient">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
