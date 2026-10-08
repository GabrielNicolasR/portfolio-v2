import { useI18n, type Language } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const OPTIONS: { value: Language; label: string; full: string }[] = [
  { value: "pt", label: "PT", full: "Português" },
  { value: "en", label: "EN", full: "English" },
];

/** Segmented PT | EN control. */
export function LanguageToggle({ className }: { className?: string }) {
  const { language, setLanguage, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t("lang.label")}
      className={cn("inline-flex h-9 items-center rounded-md border border-border p-0.5", className)}
    >
      {OPTIONS.map((opt) => {
        const active = language === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            lang={opt.value}
            aria-pressed={active}
            aria-label={opt.full}
            onClick={() => setLanguage(opt.value)}
            className={cn(
              "h-full rounded-[5px] px-2.5 text-xs font-semibold tracking-wide transition-colors",
              active ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
