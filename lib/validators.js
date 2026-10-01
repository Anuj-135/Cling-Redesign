/**
 * Client-Side Form Validators
 * Pure JavaScript client validation utility.
 */

export function isValidEmail(email) {
  if (!email || typeof email !== "string") return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

export function isValidRequired(value) {
  if (value === null || value === undefined) return false;
  if (typeof value === "string") return value.trim().length > 0;
  return true;
}

export function validateContactForm(values) {
  const errors = {};

  if (!isValidRequired(values.name)) {
    errors.name = "Full name is required";
  } else if (values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!isValidRequired(values.email)) {
    errors.email = "Business email is required";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!isValidRequired(values.message)) {
    errors.message = "Project scope or message is required";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
