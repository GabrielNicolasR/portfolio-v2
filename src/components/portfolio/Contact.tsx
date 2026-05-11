import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./BrandIcons";
import { useI18n } from "@/lib/i18n";

const channels = [
  { icon: Mail, labelKey: "contact.email", value: "gabrielrochasa@gmail.com", href: "mailto:gabrielrochasa@gmail.com" },
  { icon: Github, labelKey: "contact.github", value: "@GabrielNicolasR", href: "https://github.com/GabrielNicolasR" },
  { icon: Linkedin, labelKey: "contact.linkedin", value: "Gabriel de Sá", href: "https://linkedin.com/in/gabriel-de-sá-711412194/" },
];

export function Contact() {
  const { t } = useI18n();
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32 sm:py-40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{t('contact.eyebrow')}</div>
          <h2 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-[-0.03em] leading-[1] text-gradient">
            {t('contact.title')}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            <span dangerouslySetInnerHTML={{ __html: t('contact.description') }} />
          </p>

          <a
            href="mailto:gabrielrochasa@gmail.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:scale-[1.02]"
          >
            {t('contact.get_in_touch')}
            <ArrowUpRight className="size-4" />
          </a>
        </motion.div>

        <div className="mt-14 grid gap-3 sm:grid-cols-3">
          {channels.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.labelKey}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group glass rounded-2xl p-5 text-left transition-all hover:border-foreground/20 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <Icon className="size-5 text-primary" />
                  <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <div className="mt-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">{t(c.labelKey)}</div>
                <div className="mt-1 text-sm font-medium truncate">{c.value}</div>
              </motion.a>
            );
          })}
        </div>

        <footer className="mt-24 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground font-mono">
          <span>{t('contact.footer')}</span>
          <span>{t('contact.location')}</span>
        </footer>
      </div>
    </section>
  );
}
