/**
 * Container Component
 * Wraps content in the 1280px responsive grid container defined in Phase 1 global foundation.
 */

export default function Container({
  as: Component = "div",
  children,
  className = "",
  clean = false,
  ...props
}) {
  const classes = clean
    ? `w-full max-w-[1280px] mx-auto ${className}`
    : `container-custom ${className}`;

  return (
    <Component className={classes.trim()} {...props}>
      {children}
    </Component>
  );
}
