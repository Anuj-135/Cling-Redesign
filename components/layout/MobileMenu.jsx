"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

/**
 * MobileMenu Component
 * Accessible mobile navigation drawer.
 * Closed on link selection or Escape key press.
 */
export default function MobileMenu({
  isOpen,
  onClose,
  links = [],
  cta = { label: "Let's Talk", href: "#contact" },
}) {
  // Close menu on Escape key press and prevent background scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 md:hidden flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-canvas/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div className="relative w-full bg-surface-1 border-b border-border-subtle shadow-2xl p-6 pt-5 flex flex-col gap-6">
        {/* Header inside mobile menu */}
        <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-2 text-text-primary font-heading font-bold text-lg"
          >
            <span className="w-2.5 h-2.5 rounded-sm bg-crimson" aria-hidden="true" />
            <span>CLING INFOTECH</span>
          </Link>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-2 text-text-secondary hover:text-text-primary rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-1" aria-label="Mobile Navigation Links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="flex items-center justify-between py-3 px-3 rounded-md text-base font-medium text-text-secondary hover:text-text-primary hover:bg-surface-2 transition-colors"
            >
              <span>{link.label}</span>
              <ArrowRight className="w-4 h-4 text-text-muted" />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="pt-2">
          <Button
            href={cta.href}
            onClick={onClose}
            variant="primary"
            size="lg"
            fullWidth
          >
            {cta.label}
          </Button>
        </div>
      </div>
    </div>
  );
}
