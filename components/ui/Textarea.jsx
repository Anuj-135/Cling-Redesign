/**
 * Textarea Component
 * Accessible multi-line text input with label, focus ring, helper text, and error states.
 * Styled using dark Surface Level 3 tokens with optional light section support.
 */

export default function Textarea({
  label,
  id,
  name,
  placeholder,
  value,
  defaultValue,
  onChange,
  rows = 4,
  error,
  helperText,
  required = false,
  disabled = false,
  className = "",
  wrapperClassName = "",
  light = false,
  ...props
}) {
  const textareaId = id || name;

  const baseStyles =
    "w-full p-3.5 text-sm rounded-md transition-colors outline-none resize-y disabled:opacity-50 disabled:cursor-not-allowed";

  const colorStyles = light
    ? "bg-white text-light-text-primary border border-light-border placeholder:text-light-text-muted focus:border-crimson focus:ring-1 focus:ring-crimson"
    : "bg-surface-3 text-text-primary border border-border-input placeholder:text-text-muted focus:border-crimson focus:ring-1 focus:ring-crimson";

  const errorStyles = error
    ? "border-crimson focus:border-crimson focus:ring-crimson"
    : "";

  const classes = [baseStyles, colorStyles, errorStyles, className]
    .filter(Boolean)
    .join(" ");

  const labelColor = light ? "text-light-text-primary" : "text-text-primary";
  const helperColor = light ? "text-light-text-secondary" : "text-text-secondary";

  return (
    <div className={`w-full flex flex-col gap-1.5 ${wrapperClassName}`}>
      {label && (
        <label
          htmlFor={textareaId}
          className={`text-xs font-medium tracking-wide flex items-center justify-between ${labelColor}`}
        >
          <span>
            {label}
            {required && <span className="text-crimson ml-1">*</span>}
          </span>
        </label>
      )}

      <textarea
        id={textareaId}
        name={name}
        rows={rows}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        required={required}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error
            ? `${textareaId}-error`
            : helperText
            ? `${textareaId}-helper`
            : undefined
        }
        className={classes}
        suppressHydrationWarning
        {...props}
      />

      {error && (
        <p id={`${textareaId}-error`} className="text-xs text-crimson font-medium mt-0.5">
          {error}
        </p>
      )}

      {!error && helperText && (
        <p id={`${textareaId}-helper`} className={`text-xs ${helperColor} mt-0.5`}>
          {helperText}
        </p>
      )}
    </div>
  );
}
