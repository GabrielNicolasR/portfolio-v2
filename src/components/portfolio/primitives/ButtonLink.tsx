import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "brand" | "primary" | "outline" | "ghost" | "band-outline";
type Size = "sm" | "md";

const variants: Record<Variant, string> = {
  brand: "bg-brand text-brand-foreground hover:bg-brand-hover",
  primary: "bg-primary text-primary-foreground hover:opacity-90",
  outline: "border border-border-strong bg-card text-foreground hover:border-foreground/40 hover:bg-surface",
  ghost: "text-foreground hover:bg-surface",
  "band-outline": "border border-band-border text-band-foreground hover:border-band-muted hover:bg-white/5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-[15px]",
};

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
  external?: boolean;
  children: ReactNode;
}

/** Anchor styled as a button. Use `external` for links opening in a new tab. */
export function ButtonLink({
  variant = "outline",
  size = "md",
  external,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
      className={cn(
        "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors duration-200",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </a>
  );
}
