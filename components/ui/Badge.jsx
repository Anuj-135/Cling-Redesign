/**
 * Badge Component
 * Status indicators and category pills.
 * Strictly limited to Crimson and Neutral variants (no green/blue badges).
 */
export default function Badge({
  children,
  variant = "crimson",
  size = "md",
  dot = false,
  icon,
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full tracking-wide transition-colors select-none";

  const variants = {
    // Crimson variant: active state, key categories, highlighted tags
    crimson:
      "bg-crimson-muted text-crimson-text border border-crimson-border",
    // Neutral dark variant: general metadata, technologies on dark canvas
    neutral:
      "bg-neutral-badge-bg text-neutral-badge-text border border-neutral-badge-border",
    // Neutral light variant: tags within light sections (Services, Excellence)
    "light-neutral":
      "bg-light-tag-bg text-light-tag-text border border-light-tag-border",
  };

  const sizes = {
    sm: "text-[11px] px-2.5 py-0.5 gap-1.5",
    md: "text-xs px-3 py-1 gap-2",
    lg: "text-sm px-3.5 py-1.5 gap-2",
  };

  const dotColors = {
    crimson: "bg-crimson",
    neutral: "bg-text-secondary",
    "light-neutral": "bg-light-text-secondary",
  };

  const classes = [
    baseStyles,
    variants[variant] || variants.crimson,
    sizes[size] || sizes.md,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} {...props}>
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
            dotColors[variant] || dotColors.crimson
          }`}
          aria-hidden="true"
        />
      )}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
