import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./BrandIcons";
import { useEffect, useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden flex items-center justify-center px-6"
      style={{
        backgroundImage:
          "radial-gradient(600px circle at var(--mx,50%) var(--my,30%), oklch(0.78 0.14 265 / 0.12), transparent 60%)",
      }}
    >
      {/* grid + radial */}
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
      <div className="absolute inset-x-0 top-0 h-[80vh] [background:var(--gradient-radial)]" />

      {/* glow blobs */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] animate-glow" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[300px] w-[400px] rounded-full bg-accent/10 blur-[100px] animate-float" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.a
          href="#ai"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-border/60 glass px-3 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <Sparkles className="size-3 text-primary" />
          <span>Transitioning into AI Engineering</span>
          <span className="text-foreground/60">→</span>
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-5xl sm:text-7xl md:text-8xl font-semibold tracking-[-0.03em] leading-[0.95] text-gradient"
        >
          Gabriel Nicolas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Software Developer building intelligent systems with{" "}
          <span className="text-foreground">Python</span>,{" "}
          <span className="text-foreground">Generative AI</span>,{" "}
          <span className="text-foreground">RAG</span> and{" "}
          <span className="text-foreground">LangChain</span>. AI Engineering in progress.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:scale-[1.02]"
          >
            View Projects
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="https://github.com/GabrielNicolasR"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium hover:border-foreground/30 transition-all"
          >
            <Github className="size-4" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/gabriel-de-sá-711412194/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium hover:border-foreground/30 transition-all"
          >
            <Linkedin className="size-4" />
            LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-20 flex items-center justify-center gap-3 text-xs text-muted-foreground font-mono"
        >
          <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400/60" />
          Available for AI engineering opportunities
        </motion.div>
      </div>
    </section>
  );
}
