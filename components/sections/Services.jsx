import Image from "next/image";
import {
  Layout,
  Smartphone,
  Layers,
  Cpu,
  Cloud,
  Film,
  ArrowUpRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Card, {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";
import { servicesData } from "@/data/services";

// Icon lookup dictionary
const iconMap = {
  Layout: Layout,
  Smartphone: Smartphone,
  Layers: Layers,
  Cpu: Cpu,
  Cloud: Cloud,
  Film: Film,
};

/**
 * Services Section
 * Light surface section as specified in the design and screenshot.
 * Displays all 6 verified core engineering practices on crisp, high-contrast light surfaces.
 */
export default function Services() {
  return (
    <section
      id="services"
      className="light-surface w-full bg-light-canvas py-20 sm:py-28 lg:py-32 border-b border-light-border transition-colors"
    >
      <Container clean={false}>
        {/* Section Header with light styling */}
        <SectionHeader
          light
          eyebrow="Capabilities & Practice Areas"
          eyebrowVariant="neutral"
          title="Comprehensive Technology Services"
          description="From ground-up web application architecture to autonomous AI computer vision and enterprise ERP integrations, we deliver dependable end-to-end engineering."
          size="lg"
          align="left"
        />

        {/* 6-Card Modular Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || Layout;

            return (
              <Card
                key={service.id}
                variant="light"
                interactive
                className="flex flex-col justify-between"
              >
                <div>
                  <CardHeader>
                    {/* Top Row: Icon Container + Eyebrow */}
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="w-10 h-10 rounded-md bg-light-surface-2 border border-light-border flex items-center justify-center shrink-0">
                        <IconComponent className="w-5 h-5 text-crimson" />
                      </div>

                      <Badge variant="light-neutral" size="sm">
                        {service.eyebrow}
                      </Badge>
                    </div>

                    <CardTitle light as="h3" className="mt-2 text-xl">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <CardDescription light>
                      {service.description}
                    </CardDescription>

                    {/* Verified Graphic Asset (when available) */}
                    {service.image && (
                      <div className="mt-5 relative w-full h-36 rounded-md overflow-hidden bg-light-surface-2 border border-light-border flex items-center justify-center p-3">
                        <Image
                          src={service.image}
                          alt={service.alt || service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 360px"
                          className="object-contain object-center"
                        />
                      </div>
                    )}
                  </CardContent>
                </div>

                {/* Footer with Tags and Consultation Trigger */}
                <CardFooter className="flex-col items-start gap-4 pt-4 border-t border-light-border mt-4">
                  {/* Capability Tags */}
                  <div className="flex flex-wrap gap-1.5 w-full">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-sm bg-light-surface-2 text-light-text-secondary border border-light-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Consultation Link */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-crimson hover:text-crimson-hover transition-colors mt-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-crimson rounded-xs"
                  >
                    <span>Consult on {service.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
