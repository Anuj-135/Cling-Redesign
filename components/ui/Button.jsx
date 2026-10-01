import Link from "next/link";

/**
 * Button Component
 * Reusable button supporting primary crimson, secondary slate, outline, and ghost variants.
 * Strictly adheres to non-gradient and token-based design rules.
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  fullWidth = false,
  disabled = false,
  iconLeft,
  iconRight,
  className = "",
  type = "button",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-md transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none";

  const variants = {
    primary:
      "bg-crimson text-text-primary hover:bg-crimson-hover active:bg-crimson-active border border-transparent shadow-sm",
    secondary:
      "bg-surface-2 text-text-primary border border-border-hover hover:bg-border-input active:bg-surface-1",
    outline:
      "bg-transparent text-text-primary border border-border-hover hover:bg-surface-2 hover:border-text-secondary/40",
    ghost:
      "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-2/60",
    // Light-surface specific variants for Services / Engineering Excellence
    "light-secondary":
      "bg-light-surface-1 text-light-text-primary border border-light-border hover:bg-light-surface-2 hover:border-light-border-hover",
    "light-ghost":
      "bg-transparent text-light-text-secondary hover:text-light-text-primary hover:bg-light-surface-2",
  };

  const sizes = {
    sm: "h-9 px-3.5 text-xs gap-1.5",
    md: "h-11 px-5 text-sm gap-2",
    lg: "h-12 px-6 text-base gap-2.5",
  };

  const classes = [
    baseStyles,
    variants[variant] || variants.primary,
    sizes[size] || sizes.md,
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {iconLeft && <span className="inline-flex shrink-0">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
    </>
  );

  if (href) {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return (
        <Link href={href} className={classes} {...props}>
          {content}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {content}
    </button>
  );
}
