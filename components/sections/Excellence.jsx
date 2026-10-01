import {
  Code2,
  GitBranch,
  ShieldCheck,
  CheckCircle2,
  Server,
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
} from "@/components/ui/Card";
import Button from "@/components/ui/Button";

/**
 * Verified Engineering Excellence Pillars
 * Source: docs/content-manifest.md (Section 6: Engineering Excellence Pillars)
 * Strictly derived from live verified company claims and architecture standards.
 */
const excellencePillars = [
  {
    id: "ground-up",
    icon: Code2,
    badge: "Bespoke Engineering",
    title: "Ground-Up Architecture",
    description:
      "We never use pre-designed templates. Every system, schema, and interface is custom-architected from the ground up to match precise throughput, compliance, and maintainability requirements.",
    points: [
      "Zero generic template dependencies",
      "Tailored data schemas & API contracts",
      "High-throughput performance profiling",
    ],
  },
  {
    id: "agile-iteration",
    icon: GitBranch,
    badge: "Predictable Velocity",
    title: "Agile Iteration & Transparency",
    description:
      "Bi-weekly production sprint cycles with direct telemetry, staging access, and continuous code integration. Client engineering stakeholders maintain full visibility without black-box surprises.",
    points: [
      "Bi-weekly release cycles & sprint demos",
      "Continuous CI/CD integration pipelines",
      "Transparent staging environments",
    ],
  },
  {
    id: "security-compliance",
    icon: ShieldCheck,
    badge: "Enterprise Security",
    title: "Multi-Tier Security & Compliance",
    description:
      "Enterprise encryption, strict role-based access control (RBAC), and adherence to regional data compliance standards across fintech portals, loan servicing engines, and internal ERPs.",
    points: [
      "End-to-end data encryption in transit & rest",
      "Granular role-based authorization (RBAC)",
      "Financial & institutional compliance adherence",
    ],
  },
  {
    id: "lifecycle-ownership",
    icon: Server,
    badge: "Full Governance",
    title: "Full Lifecycle Ownership",
    description:
      "End-to-end technology solutions covering every development milestone—from whiteboard discovery, wireframing, and cloud provisioning through to automated deployment and SLA maintenance.",
    points: [
      "Discovery, architecture & cloud provisioning",
      "Production deployment automation",
      "Continuous SLA governance & optimization",
    ],
  },
];

/**
 * Excellence Section
 * Light surface section maintaining the dark/light/dark rhythm.
 * Editorial technical presentation of Cling Infotech's engineering foundation since 2019.
 */
export default function Excellence() {
  return (
    <section
      id="about"
      className="light-surface w-full bg-light-canvas py-20 sm:py-28 lg:py-32 border-b border-light-border transition-colors"
    >
      <Container clean={false}>
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 sm:pb-16 border-b border-light-border">
          <SectionHeader
            eyebrow="Engineering Principles"
            eyebrowVariant="crimson"
            title="Engineering Excellence Since 2019"
            description="Established in 2019, Cling Infotech builds mission-critical digital products and enterprise platforms with unyielding engineering discipline, ground-up architecture, and verified delivery track records."
            size="lg"
            light={true}
            align="left"
            className="max-w-2xl"
          />

          {/* Quick Stats or Editorial Highlights Box */}
          <div className="flex flex-wrap sm:flex-nowrap gap-4 lg:gap-6 shrink-0">
            <div className="bg-light-surface-1 border border-light-border rounded-card p-5 min-w-[140px] shadow-sm">
              <span className="block font-mono text-xs uppercase tracking-wider text-light-text-muted">
                Established
              </span>
              <span className="block font-heading font-extrabold text-2xl sm:text-3xl text-light-text-primary mt-1">
                2019
              </span>
              <span className="block text-xs text-light-text-secondary mt-0.5">
                Corporate Inception
              </span>
            </div>

            <div className="bg-light-surface-1 border border-light-border rounded-card p-5 min-w-[140px] shadow-sm">
              <span className="block font-mono text-xs uppercase tracking-wider text-light-text-muted">
                Deliveries
              </span>
              <span className="block font-heading font-extrabold text-2xl sm:text-3xl text-crimson mt-1">
                350+
              </span>
              <span className="block text-xs text-light-text-secondary mt-0.5">
                Enterprise Deployments
              </span>
            </div>

            <div className="bg-light-surface-1 border border-light-border rounded-card p-5 min-w-[140px] shadow-sm">
              <span className="block font-mono text-xs uppercase tracking-wider text-light-text-muted">
                Footprint
              </span>
              <span className="block font-heading font-extrabold text-2xl sm:text-3xl text-light-text-primary mt-1">
                3 Centers
              </span>
              <span className="block text-xs text-light-text-secondary mt-0.5">
                Noida, Pune, Moradabad
              </span>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {excellencePillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <Card
                key={pillar.id}
                variant="light"
                interactive
                className="p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <CardHeader className="p-0 pb-4">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="w-10 h-10 rounded-sm bg-light-surface-2 border border-light-border flex items-center justify-center text-crimson">
                        <Icon className="w-5 h-5" />
                      </div>
                      <Badge variant="light-neutral" size="sm">
                        {pillar.badge}
                      </Badge>
                    </div>

                    <CardTitle as="h3" className="text-xl sm:text-2xl text-light-text-primary mt-1">
                      {pillar.title}
                    </CardTitle>

                    <CardDescription className="text-sm sm:text-base text-light-text-secondary leading-relaxed mt-2">
                      {pillar.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 pt-4 border-t border-light-border">
                    <ul className="flex flex-col gap-2.5">
                      {pillar.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-light-text-primary"
                        >
                          <CheckCircle2 className="w-4 h-4 text-crimson shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>

                <div className="pt-6 mt-4 border-t border-light-border flex items-center justify-between">
                  <span className="text-xs font-mono text-light-text-muted">
                    Engineering Standard
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-crimson hover:text-crimson-hover transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-crimson rounded-xs"
                  >
                    <span>Discuss Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
