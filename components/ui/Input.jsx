/**
 * Input Component
 * Accessible form field with label, focus ring, placeholder, helper text, and error states.
 * Styled using dark Surface Level 3 tokens with optional light section support.
 */

export default function Input({
  label,
  id,
  name,
  type = "text",
  placeholder,
  value,
  defaultValue,
  onChange,
  error,
  helperText,
  required = false,
  disabled = false,
  iconLeft,
  iconRight,
  className = "",
  wrapperClassName = "",
  light = false,
  ...props
}) {
  const inputId = id || name;

  const baseInputStyles =
    "w-full h-11 px-3.5 text-sm rounded-md transition-colors outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  const colorStyles = light
    ? "bg-white text-light-text-primary border border-light-border placeholder:text-light-text-muted focus:border-crimson focus:ring-1 focus:ring-crimson"
    : "bg-surface-3 text-text-primary border border-border-input placeholder:text-text-muted focus:border-crimson focus:ring-1 focus:ring-crimson";

  const errorStyles = error
    ? "border-crimson focus:border-crimson focus:ring-crimson"
    : "";

  const paddingLeft = iconLeft ? "pl-10" : "";
  const paddingRight = iconRight ? "pr-10" : "";

  const inputClasses = [
    baseInputStyles,
    colorStyles,
    errorStyles,
    paddingLeft,
    paddingRight,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const labelColor = light ? "text-light-text-primary" : "text-text-primary";
  const helperColor = light ? "text-light-text-secondary" : "text-text-secondary";

  return (
    <div className={`w-full flex flex-col gap-1.5 ${wrapperClassName}`}>
      {label && (
        <label
          htmlFor={inputId}
          className={`text-xs font-medium tracking-wide flex items-center justify-between ${labelColor}`}
        >
          <span>
            {label}
            {required && <span className="text-crimson ml-1">*</span>}
          </span>
        </label>
      )}

      <div className="relative flex items-center">
        {iconLeft && (
          <span className="absolute left-3.5 text-text-muted pointer-events-none flex items-center justify-center">
            {iconLeft}
          </span>
        )}

        <input
          id={inputId}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          required={required}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={
            error
              ? `${inputId}-error`
              : helperText
              ? `${inputId}-helper`
              : undefined
          }
          className={inputClasses}
          suppressHydrationWarning
          {...props}
        />

        {iconRight && (
          <span className="absolute right-3.5 text-text-muted pointer-events-none flex items-center justify-center">
            {iconRight}
          </span>
        )}
      </div>

      {error && (
        <p id={`${inputId}-error`} className="text-xs text-crimson font-medium mt-0.5">
          {error}
        </p>
      )}

      {!error && helperText && (
        <p id={`${inputId}-helper`} className={`text-xs ${helperColor} mt-0.5`}>
          {helperText}
        </p>
      )}
    </div>
  );
}
