import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  /** Alternate background for visual rhythm between sections. */
  tone?: "default" | "surface";
  className?: string;
}

export function Section({ id, eyebrow, title, description, children, tone = "default", className }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "border-t border-border py-20 sm:py-28",
        tone === "surface" ? "bg-surface" : "bg-background",
        className,
      )}
    >
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{eyebrow}</p>
          <h2
            id={headingId}
            className="mt-3 text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl"
          >
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
          )}
        </Reveal>
        <div className="mt-12 sm:mt-14">{children}</div>
      </div>
    </section>
  );
}
