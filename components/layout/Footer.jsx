import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

/**
 * Footer Component
 * Dark structural site chrome.
 * Uses only verified data and clearly marked placeholders awaiting Phase 4 sign-off.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-surface-1 border-t border-border-subtle mt-auto transition-colors">
      <Container clean={false}>
        {/* Top Grid Area */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson rounded-xs w-fit"
            >
              <span className="w-3 h-3 rounded-xs bg-crimson shrink-0" aria-hidden="true" />
              <span className="font-heading font-extrabold text-lg tracking-tight uppercase">
                {siteConfig.name}
              </span>
            </Link>

            <p className="text-sm text-text-secondary max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>

            <div className="flex flex-col gap-1.5 text-xs text-text-muted mt-2">
              <p>
                <span className="font-medium text-text-secondary">Headquarters:</span>{" "}
                {siteConfig.offices[0]?.addressLine1}, {siteConfig.offices[0]?.city}, {siteConfig.offices[0]?.state}
              </p>
              <p>
                <span className="font-medium text-text-secondary">Direct:</span>{" "}
                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`} className="hover:text-text-primary transition-colors">
                  {siteConfig.contact.phone}
                </a>
                {" • "}
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-text-primary transition-colors">
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>
          </div>

          {/* Nav Links Columns */}
          {siteConfig.footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col gap-3">
              <h4 className="text-xs font-semibold text-text-primary tracking-wider uppercase font-heading">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-crimson rounded-xs"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Metadata Bar */}
        <div className="py-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          <p className="text-text-muted font-mono text-[11px]">
            {siteConfig.legalName}
          </p>
        </div>
      </Container>
    </footer>
  );
}
