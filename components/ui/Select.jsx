/**
 * Select Component
 * Accessible dropdown selector with custom indicator icon, labels, focus states, and error messaging.
 * Uses native select element under the hood for maximum keyboard and mobile accessibility.
 */

export default function Select({
  label,
  id,
  name,
  options = [],
  children,
  value,
  defaultValue,
  onChange,
  placeholder = "Select an option",
  error,
  helperText,
  required = false,
  disabled = false,
  className = "",
  wrapperClassName = "",
  light = false,
  ...props
}) {
  const selectId = id || name;

  const baseStyles =
    "w-full h-11 pl-3.5 pr-10 text-sm rounded-md transition-colors outline-none appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const colorStyles = light
    ? "bg-white text-light-text-primary border border-light-border focus:border-crimson focus:ring-1 focus:ring-crimson"
    : "bg-surface-3 text-text-primary border border-border-input focus:border-crimson focus:ring-1 focus:ring-crimson";

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
          htmlFor={selectId}
          className={`text-xs font-medium tracking-wide flex items-center justify-between ${labelColor}`}
        >
          <span>
            {label}
            {required && <span className="text-crimson ml-1">*</span>}
          </span>
        </label>
      )}

      <div className="relative flex items-center">
        <select
          id={selectId}
          name={name}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          required={required}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={
            error
              ? `${selectId}-error`
              : helperText
              ? `${selectId}-helper`
              : undefined
          }
          className={classes}
          {...props}
        >
          {placeholder && (
            <option value="" disabled className={light ? "text-slate-400" : "text-slate-500 bg-surface-3"}>
              {placeholder}
            </option>
          )}

          {options && options.length > 0
            ? options.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                  disabled={opt.disabled}
                  className={light ? "text-slate-900 bg-white" : "text-white bg-surface-2"}
                >
                  {opt.label}
                </option>
              ))
            : children}
        </select>

        {/* Custom Chevron Indicator */}
        <div className="absolute right-3.5 pointer-events-none text-text-muted flex items-center justify-center">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {error && (
        <p id={`${selectId}-error`} className="text-xs text-crimson font-medium mt-0.5">
          {error}
        </p>
      )}

      {!error && helperText && (
        <p id={`${selectId}-helper`} className={`text-xs ${helperColor} mt-0.5`}>
          {helperText}
        </p>
      )}
    </div>
  );
}
