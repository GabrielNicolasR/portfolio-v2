import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useI18n();
  const label = theme === "dark" ? t("theme.toLight") : t("theme.toDark");

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-border-strong hover:bg-surface hover:text-foreground",
        className,
      )}
    >
      {/* Icons swap via CSS so the correct one is shown before hydration. */}
      <Sun className="hidden size-4 dark:block" aria-hidden="true" />
      <Moon className="size-4 dark:hidden" aria-hidden="true" />
    </button>
  );
}
