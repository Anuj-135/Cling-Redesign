"use client";

import { useState } from "react";
import { Send, CheckCircle2, ArrowRight } from "lucide-react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { validateContactForm } from "@/lib/validators";

/**
 * ContactForm Component
 * Client-side interactive form with live field validation.
 * Frontend-only demonstration without external mail API overhead.
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear specific field error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Client-side demonstration submission simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", company: "", message: "" });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-surface-1 border border-border-hover rounded-card p-8 sm:p-10 flex flex-col items-start gap-4">
        <div className="w-12 h-12 rounded-md bg-surface-2 border border-border-subtle flex items-center justify-center text-crimson">
          <CheckCircle2 className="w-6 h-6" />
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-mono uppercase tracking-wider text-crimson font-semibold">
            Frontend Demonstration
          </span>
          <h4 className="font-heading font-bold text-2xl text-text-primary">
            Inquiry Form Validated
          </h4>
          <p className="text-sm text-text-secondary leading-relaxed max-w-md mt-1 font-body">
            Thank you for exploring our inquiry interface. Client-side validation succeeded. Backend email delivery is currently being integrated. To discuss your project immediately, please reach out directly at{" "}
            <a href="mailto:info@clinginfotech.com" className="text-crimson underline font-medium">
              info@clinginfotech.com
            </a>{" "}
            or call{" "}
            <a href="tel:+918264469132" className="text-crimson underline font-medium">
              +91 8264469132
            </a>.
          </p>
        </div>

        <div className="pt-4">
          <Button variant="secondary" size="sm" onClick={handleReset}>
            Reset Form
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-surface-1 border border-border-subtle rounded-card p-6 sm:p-8 lg:p-10 flex flex-col gap-5 shadow-2xl"
    >
      <div className="flex items-center justify-between border-b border-border-subtle pb-4">
        <h4 className="font-heading font-bold text-xl text-text-primary">
          Send Project Inquiry
        </h4>
        <span className="text-[11px] font-mono text-text-muted">
          CLIENT_DISCOVERY
        </span>
      </div>

      {/* Name Input */}
      <Input
        label="Full Name"
        id="name"
        name="name"
        placeholder="e.g. Ramesh Sharma"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        required
        disabled={isSubmitting}
      />

      {/* Email Input */}
      <Input
        label="Business Email"
        id="email"
        name="email"
        type="email"
        placeholder="name@company.com"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
        disabled={isSubmitting}
      />

      {/* Company Input (Optional) */}
      <Input
        label="Company / Organization (Optional)"
        id="company"
        name="company"
        placeholder="e.g. Enterprise Logistics Corp"
        value={formData.company}
        onChange={handleChange}
        disabled={isSubmitting}
      />

      {/* Message Textarea */}
      <Textarea
        label="Project Scope & Architecture Details"
        id="message"
        name="message"
        placeholder="Briefly describe your platform requirements, timeline, and current technical stack..."
        rows={4}
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        required
        disabled={isSubmitting}
      />

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full justify-center"
          disabled={isSubmitting}
          iconRight={
            <Send className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          }
        >
          {isSubmitting ? "Processing Inquiry..." : "Submit Project Inquiry"}
        </Button>
      </div>

      <p className="text-[11px] font-mono text-text-muted text-center pt-1">
        Official communication channel • Direct inquiries: info@clinginfotech.com
      </p>
    </form>
  );
}
