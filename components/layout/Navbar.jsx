"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";
import { navLinks, siteConfig } from "@/data/site";

/**
 * Navbar Component
 * Fixed technical navigation shell for Cling Infotech.
 * Features desktop anchor navigation and accessible mobile drawer toggle.
 */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-canvas/95 backdrop-blur-md border-b border-border-subtle transition-colors">
        <Container clean={false}>
          <div className="flex h-20 items-center justify-between gap-4">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 text-text-primary hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson rounded-sm"
              aria-label="Cling Infotech Homepage"
            >
              <span
                className="w-3 h-3 rounded-xs bg-crimson shrink-0"
                aria-hidden="true"
              />
              <span className="font-heading font-extrabold text-lg tracking-tight uppercase">
                {siteConfig.name}
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden md:flex items-center gap-8"
              aria-label="Desktop Navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson rounded-xs"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA & Mobile Menu Trigger */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:inline-flex">
                <Button
                  href={siteConfig.cta.href}
                  variant="primary"
                  size="md"
                >
                  {siteConfig.cta.label}
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-2.5 rounded-md text-text-secondary hover:text-text-primary hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson cursor-pointer transition-colors"
                aria-label="Open mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
        cta={siteConfig.cta}
      />
    </>
  );
}
