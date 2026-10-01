import {
  Phone,
  Mail,
  MessageSquare,
  MapPin,
  Building,
  ArrowUpRight,
  Globe,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Card, {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/Card";
import ContactForm from "./ContactForm";
import { siteConfig } from "@/data/site";
import { officesData } from "@/data/offices";

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/**
 * Contact Section
 * Dark technical contact hub with verified communication lines and office locations.
 * Embedded ContactForm component provides responsive client validation.
 */
export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-canvas py-20 sm:py-28 lg:py-32 border-b border-border-subtle transition-colors"
    >
      <Container clean={false}>
        {/* Section Header */}
        <SectionHeader
          eyebrow="Initiate Discovery"
          eyebrowVariant="crimson"
          title="Have a Project in Mind?"
          description="Engage our senior technology practice for architecture consultation, feasibility analysis, or ground-up enterprise platform engineering."
          size="lg"
          align="left"
        />

        {/* 12-Column Responsive Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mt-12 sm:mt-16 items-start">
          {/* Left Column: Direct Inquiries & Office Locations */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            {/* Direct Channels Quick Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone Line Card */}
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                className="bg-surface-1 border border-border-subtle hover:border-border-hover rounded-card p-5 flex flex-col gap-2 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-crimson group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-sm bg-surface-2 border border-border-subtle flex items-center justify-center text-crimson">
                    <Phone className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-text-muted group-hover:text-text-primary transition-colors" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted">
                    Direct Phone
                  </span>
                  <p className="text-sm font-semibold text-text-primary font-mono mt-0.5">
                    {siteConfig.contact.phone}
                  </p>
                </div>
              </a>

              {/* Email Address Card */}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="bg-surface-1 border border-border-subtle hover:border-border-hover rounded-card p-5 flex flex-col gap-2 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-crimson group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-sm bg-surface-2 border border-border-subtle flex items-center justify-center text-crimson">
                    <Mail className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-text-muted group-hover:text-text-primary transition-colors" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted">
                    General Inquiries
                  </span>
                  <p className="text-sm font-semibold text-text-primary font-mono mt-0.5">
                    {siteConfig.contact.email}
                  </p>
                </div>
              </a>

              {/* WhatsApp Direct */}
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface-1 border border-border-subtle hover:border-border-hover rounded-card p-5 flex flex-col gap-2 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-crimson group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-sm bg-surface-2 border border-border-subtle flex items-center justify-center text-crimson">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-text-muted group-hover:text-text-primary transition-colors" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted">
                    WhatsApp Direct
                  </span>
                  <p className="text-sm font-semibold text-text-primary font-mono mt-0.5">
                    +91 8264469132
                  </p>
                </div>
              </a>

              {/* Verified Social Connect */}
              <div className="bg-surface-1 border border-border-subtle rounded-card p-5 flex flex-col justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted">
                  Official Channels
                </span>
                <div className="flex items-center gap-3 mt-2">
                  <a
                    href="https://www.linkedin.com/company/cling-multi-solutions-pvt-ltd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-crimson font-medium transition-colors"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                  <span className="text-border-input">•</span>
                  <a
                    href="https://www.instagram.com/clinginfotechworks/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-crimson font-medium transition-colors"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Verified Office Locations */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 border-b border-border-subtle pb-2">
                <Building className="w-4 h-4 text-crimson" />
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-text-primary">
                  Registered Development Centers
                </h4>
              </div>

              <div className="flex flex-col gap-3">
                {officesData.map((office) => (
                  <div
                    key={office.id}
                    className="bg-surface-1 border border-border-subtle rounded-card p-4 sm:p-5 flex flex-col gap-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-text-primary font-heading">
                          {office.city} Office
                        </span>
                        {office.isPrimary && (
                          <Badge variant="crimson" size="sm" dot>
                            Headquarters
                          </Badge>
                        )}
                      </div>
                      <span className="text-[11px] font-mono text-text-muted">
                        {office.region}
                      </span>
                    </div>

                    <p className="text-xs text-text-secondary leading-relaxed font-body">
                      {office.addressLine1}, {office.addressLine2}, {office.city},{" "}
                      {office.state} - {office.postalCode}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-6">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
