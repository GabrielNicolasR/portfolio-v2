import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon as Github } from "./BrandIcons";
import { Section } from "./Section";

const projects = [
  {
    title: "AI Email Summary",
    description: "AI-powered email summarization using Python and the Gemini API to distill long threads into actionable briefs.",
    tags: ["Python", "Gemini API", "Generative AI"],
    accent: "from-violet-500/30 via-primary/20 to-transparent",
    initials: "AI",
  },
  {
    title: "GitHub Profile Finder",
    description: "Search GitHub users and explore repositories, recent events and profile data through a clean, fast UI.",
    tags: ["React", "REST API", "TypeScript"],
    accent: "from-cyan-500/30 via-accent/20 to-transparent",
    initials: "GH",
  },
  {
    title: "Weather App",
    description: "Real-time weather application consuming external APIs with a dynamic, responsive interface.",
    tags: ["JavaScript", "API", "UI"],
    accent: "from-blue-500/30 via-primary/20 to-transparent",
    initials: "WX",
  },
  {
    title: "Interactive Support Rating",
    description: "Interactive feedback flow with user rating, animated transitions and a polished thank-you screen.",
    tags: ["React", "UX", "Animation"],
    accent: "from-pink-500/30 via-accent/20 to-transparent",
    initials: "SR",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title={<>Projects, shipped.</>}
      description="A small selection of things I've built — from AI experiments to polished interfaces."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl glass transition-all duration-500 hover:border-foreground/20"
          >
            {/* preview area */}
            <div className="relative h-52 overflow-hidden border-b border-border">
              <div className={`absolute inset-0 bg-gradient-to-br ${p.accent}`} />
              <div className="absolute inset-0 bg-dots opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="font-display text-7xl text-foreground/80 transition-transform duration-700 group-hover:scale-110">
                  {p.initials}
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card to-transparent" />
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg sm:text-xl font-medium tracking-tight">{p.title}</h3>
                <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-[11px] font-mono text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 rounded-full bg-foreground/10 hover:bg-foreground/15 px-3 py-1.5 text-xs font-medium transition-colors"
                >
                  Live Demo <ArrowUpRight className="size-3" />
                </a>
                <a
                  href="https://github.com/GabrielNicolasR"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border hover:border-foreground/30 px-3 py-1.5 text-xs font-medium transition-colors"
                >
                  <Github className="size-3" /> GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
