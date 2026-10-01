import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Layers, Server } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card, {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";
import { projectsData } from "@/data/projects";

/**
 * FeaturedWork Section
 * Dark technical portfolio section following the Services light section.
 * Highlights the primary featured case study (Matrix ERP) and verified secondary projects.
 * Strictly adheres to verified data in data/projects.js and docs/content-manifest.md.
 */
export default function FeaturedWork() {
  const featuredProject = projectsData.find((p) => p.featured) || projectsData[0];
  const secondaryProjects = projectsData.filter((p) => !p.featured).slice(0, 4);

  return (
    <section
      id="work"
      className="w-full bg-canvas py-20 sm:py-28 lg:py-32 border-b border-border-subtle transition-colors"
    >
      <Container clean={false}>
        {/* Section Header */}
        <SectionHeader
          eyebrow="Verified Case Studies"
          eyebrowVariant="crimson"
          title="Featured Work & Engineering Deliveries"
          description="Production platforms deployed across enterprise supply chains, digital payments, financial onboarding, and clinical teletherapy."
          size="lg"
          align="left"
        />

        {/* Primary Featured Project: Matrix ERP */}
        <div className="mt-12 sm:mt-16 bg-surface-1 border border-border-hover rounded-card overflow-hidden transition-colors shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 p-6 sm:p-10 lg:p-12 items-center">
            {/* Left Column: Project Details */}
            <div className="lg:col-span-6 flex flex-col items-start gap-5">
              <div className="flex items-center gap-2.5">
                <Badge variant="crimson" dot size="sm">
                  Featured Case Study
                </Badge>
                <span className="text-xs text-text-muted font-mono">
                  {featuredProject.category}
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-text-primary tracking-tight leading-tight">
                {featuredProject.name}
              </h3>

              <p className="text-base text-text-secondary leading-relaxed font-body">
                {featuredProject.description}
              </p>

              {/* Core Deliverables List */}
              <div className="w-full flex flex-col gap-2.5 pt-2">
                {featuredProject.deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-text-primary">
                    <CheckCircle2 className="w-4 h-4 text-crimson shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Technology Stack Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {featuredProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono font-medium px-2.5 py-1 rounded-sm bg-surface-2 text-text-secondary border border-border-subtle"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Action */}
              <div className="pt-3">
                <Button
                  variant="primary"
                  size="md"
                  href="#contact"
                  iconRight={<ArrowUpRight className="w-4 h-4 ml-1" />}
                >
                  Consult on Custom ERP Architecture
                </Button>
              </div>
            </div>

            {/* Right Column: Visual Dashboard Mockup */}
            <div className="lg:col-span-6 w-full">
              <div className="relative aspect-[16/10] w-full bg-surface-2 border border-border-subtle rounded-md overflow-hidden shadow-lg">
                {/* Mockup Frame Header */}
                <div className="h-9 bg-surface-3 px-3.5 flex items-center justify-between border-b border-border-subtle">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-border-input" />
                    <span className="w-2 h-2 rounded-full bg-border-input" />
                    <span className="w-2 h-2 rounded-full bg-border-input" />
                  </div>
                  <span className="text-[11px] font-mono text-text-muted">
                    matrix-cloud.internal/telemetry
                  </span>
                  <span className="w-2 h-2 rounded-full bg-crimson" title="Cluster Active" />
                </div>

                {/* Dashboard Image */}
                <div className="relative w-full h-[calc(100%-2.25rem)]">
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Projects Grid (4 Verified Projects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-10">
          {secondaryProjects.map((project) => (
            <Card
              key={project.id}
              variant="default"
              interactive
              className="p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <CardHeader className="p-0 pb-4">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <Badge variant="neutral" size="sm">
                      {project.category}
                    </Badge>
                    <span className="text-[11px] font-mono text-text-muted">
                      Verified Delivery
                    </span>
                  </div>

                  <CardTitle as="h4" className="text-xl sm:text-2xl mt-1">
                    {project.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-0">
                  <CardDescription className="text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </CardDescription>

                  {/* Deliverables */}
                  <div className="flex flex-col gap-2 mt-4 pt-3 border-t border-border-subtle">
                    {project.deliverables.slice(0, 2).map((deliv) => (
                      <div key={deliv} className="flex items-center gap-2 text-xs text-text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-crimson shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </div>

              {/* Card Footer: Tech Stack and Inquire Link */}
              <CardFooter className="p-0 pt-6 mt-4 border-t border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-sm bg-surface-2 text-text-muted border border-border-subtle"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-crimson hover:text-crimson-hover transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-crimson rounded-xs"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
