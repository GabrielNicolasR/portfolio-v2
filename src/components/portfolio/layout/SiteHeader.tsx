import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { profile } from "@/content/profile";
import { useI18n } from "@/lib/i18n";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";
import type { UIKey } from "@/i18n/dictionary";
import { ThemeToggle } from "../controls/ThemeToggle";
import { LanguageToggle } from "../controls/LanguageToggle";
import { ButtonLink } from "../primitives/ButtonLink";

export const NAV_ITEMS = [
  { id: "experience", key: "nav.experience" },
  { id: "projects", key: "nav.projects" },
  { id: "skills", key: "nav.skills" },
  { id: "education", key: "nav.education" },
  { id: "contact", key: "nav.contact" },
] as const satisfies readonly { id: string; key: UIKey }[];

const SECTION_IDS = NAV_ITEMS.map((i) => i.id);

export function SiteHeader() {
  const { t } = useI18n();
  const active = useActiveSection(SECTION_IDS);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape and when resizing to desktop.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-background/85 backdrop-blur-md transition-[border-color,box-shadow] duration-200 supports-[backdrop-filter]:bg-background/75",
        scrolled || open ? "border-border shadow-[0_1px_2px_rgb(0_0_0/0.04)]" : "border-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-card focus:px-3 focus:py-2 focus:text-sm focus:shadow"
      >
        {t("meta.skip")}
      </a>

      <div className="container-page flex h-16 items-center gap-6">
        <a href="#top" className="flex items-center gap-2.5" aria-label={profile.name}>
          <span className="flex size-8 items-center justify-center rounded-md bg-foreground text-[13px] font-bold tracking-tight text-background">
            {profile.initials}
          </span>
          <span className="hidden text-[15px] font-semibold tracking-tight text-foreground sm:inline">
            {profile.name}
          </span>
        </a>

        <nav aria-label={t("nav.primary")} className="ml-4 hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {t(item.key)}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full bg-brand transition-opacity duration-200",
                        isActive ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <LanguageToggle className="hidden sm:inline-flex" />
          <ThemeToggle />
          <ButtonLink
            href={profile.cv}
            download
            variant="brand"
            size="sm"
            className="hidden md:inline-flex"
          >
            <Download className="size-4" aria-hidden="true" />
            {t("nav.cv")}
          </ButtonLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t("nav.close") : t("nav.menu")}
            className="inline-flex size-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-surface lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-border bg-background lg:hidden"
      >
        <nav aria-label={t("nav.primary")} className="container-page py-4">
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block border-l-2 px-3 py-2.5 text-[15px] font-medium transition-colors",
                    active === item.id
                      ? "border-brand text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground",
                  )}
                >
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
            <LanguageToggle className="sm:hidden" />
            <ButtonLink href={profile.cv} download variant="brand" size="sm" className="md:hidden">
              <Download className="size-4" aria-hidden="true" />
              {t("nav.cv")}
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
