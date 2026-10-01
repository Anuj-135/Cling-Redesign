/**
 * Card Component & Subcomponents
 * Structural container supporting the multi-tier dark surface system and light sections.
 * Depth is achieved through solid tonal surfaces and 1px borders (strictly no gradients or scaling transforms).
 */

export default function Card({
  children,
  variant = "default",
  interactive = false,
  className = "",
  as: Component = "div",
  ...props
}) {
  const baseStyles = "rounded-card relative overflow-hidden transition-colors duration-150";

  const variants = {
    // Dark Surface Level 1 (Standard structural card)
    default: "bg-surface-1 border border-border-subtle text-text-secondary",
    // Dark Surface Level 2 (Elevated container)
    elevated: "bg-surface-2 border border-border-hover text-text-secondary shadow-md",
    // Dark Surface Level 3 (Recessed inset)
    inset: "bg-surface-3 border border-border-input text-text-secondary",
    // Light Surface 1 (Services & Engineering Excellence sections)
    light: "bg-light-surface-1 border border-light-border text-light-text-secondary",
    // Light Surface 2 (Elevated card in light section)
    "light-elevated": "bg-light-surface-2 border border-light-border-hover text-light-text-secondary shadow-sm",
  };

  const interactiveStyles = {
    default: "hover:border-border-hover hover:shadow-card-hover cursor-pointer",
    elevated: "hover:border-white/25 hover:shadow-card-hover cursor-pointer",
    inset: "hover:border-crimson cursor-pointer",
    light: "hover:border-light-border-hover hover:shadow-md cursor-pointer",
    "light-elevated": "hover:border-slate-400 hover:shadow-md cursor-pointer",
  };

  const classes = [
    baseStyles,
    variants[variant] || variants.default,
    interactive ? (interactiveStyles[variant] || interactiveStyles.default) : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}

export function CardHeader({ children, className = "", ...props }) {
  return (
    <div className={`p-6 pb-3 flex flex-col gap-1.5 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  as: Component = "h3",
  className = "",
  light = false,
  ...props
}) {
  const textColor = light ? "text-light-text-primary" : "text-text-primary";
  return (
    <Component
      className={`font-heading font-semibold text-lg sm:text-xl tracking-tight ${textColor} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export function CardDescription({
  children,
  className = "",
  light = false,
  ...props
}) {
  const textColor = light ? "text-light-text-secondary" : "text-text-secondary";
  return (
    <p className={`text-sm leading-relaxed ${textColor} ${className}`} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = "", ...props }) {
  return (
    <div
      className={`p-6 pt-0 flex items-center gap-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
