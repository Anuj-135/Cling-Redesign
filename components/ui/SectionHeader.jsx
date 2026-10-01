import Badge from "./Badge";

/**
 * SectionHeader Component
 * Unified header pattern for landing page sections.
 * Supports eyebrow badge/label, Plus Jakarta Sans title, and Inter descriptive copy.
 */
export default function SectionHeader({
  eyebrow,
  eyebrowVariant = "crimson",
  title,
  description,
  align = "left",
  size = "md",
  light = false,
  as: HeadingTag = "h2",
  className = "",
  children,
  ...props
}) {
  const alignments = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const titleSizes = {
    sm: "text-xl sm:text-2xl",
    md: "text-2xl sm:text-3xl lg:text-4xl",
    lg: "text-3xl sm:text-4xl lg:text-5xl",
  };

  const titleColor = light ? "text-light-text-primary" : "text-text-primary";
  const descColor = light ? "text-light-text-secondary" : "text-text-secondary";

  return (
    <div
      className={`flex flex-col gap-3 max-w-3xl ${alignments[align] || alignments.left} ${className}`}
      {...props}
    >
      {/* Eyebrow Label or Badge */}
      {eyebrow && (
        <div className="mb-1">
          {typeof eyebrow === "string" ? (
            <Badge variant={light && eyebrowVariant === "neutral" ? "light-neutral" : eyebrowVariant}>
              {eyebrow}
            </Badge>
          ) : (
            eyebrow
          )}
        </div>
      )}

      {/* Main Section Heading */}
      {title && (
        <HeadingTag
          className={`font-heading font-bold tracking-tight leading-tight ${titleSizes[size] || titleSizes.md} ${titleColor}`}
        >
          {title}
        </HeadingTag>
      )}

      {/* Supporting Description */}
      {description && (
        <p className={`text-base sm:text-lg leading-relaxed ${descColor}`}>
          {description}
        </p>
      )}

      {children}
    </div>
  );
}
