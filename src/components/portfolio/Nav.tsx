import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#ai", label: "AI" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex items-center gap-1 rounded-full border px-2 py-1.5 transition-all duration-500 ${
          scrolled
            ? "glass border-border/60 shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
            : "border-transparent bg-transparent"
        }`}
      >
        <a
          href="#top"
          className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium tracking-tight"
        >
          <span className="size-2 rounded-full bg-primary shadow-[0_0_12px] shadow-primary" />
          <span className="font-mono text-xs">gn.</span>
        </a>
        <div className="hidden md:flex items-center">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="ml-1 hidden sm:inline-flex items-center rounded-full bg-foreground px-4 py-1.5 text-xs font-medium text-background transition-all hover:opacity-90"
        >
          Get in touch
        </a>
      </nav>
    </motion.header>
  );
}
