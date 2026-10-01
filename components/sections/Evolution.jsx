import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Card, {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/Card";
import { timelineData } from "@/data/timeline";
import { CheckCircle2, Milestone } from "lucide-react";

/**
 * Evolution Section
 * Dark technical timeline presenting verified company milestones from 2019 onward.
 * Strictly adheres to verified data in data/timeline.js. No missing years fabricated.
 * Zero gradients.
 */
export default function Evolution() {
  return (
    <section
      id="evolution"
      className="w-full bg-canvas py-20 sm:py-28 lg:py-32 border-b border-border-subtle transition-colors"
    >
      <Container clean={false}>
        {/* Section Header */}
        <SectionHeader
          eyebrow="Company Evolution"
          eyebrowVariant="crimson"
          title="From Foundation to Enterprise Scale"
          description="A chronological record of disciplined growth, architectural maturity, and technological diversification since our founding in 2019."
          size="lg"
          align="left"
        />

        {/* Technical Roadmap / Timeline Grid */}
        <div className="relative mt-12 sm:mt-16">
          {/* Subtle horizontal connecting line on desktop */}
          <div
            className="hidden lg:block absolute top-[28px] left-6 right-6 h-px bg-border-subtle z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 relative z-10">
            {timelineData.map((item, index) => {
              const isCurrent = index === timelineData.length - 1;

              return (
                <div key={item.year} className="flex flex-col">
                  {/* Timeline Node / Marker Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-14 h-14 rounded-md flex flex-col items-center justify-center border font-mono font-bold shrink-0 transition-colors ${
                        isCurrent
                          ? "bg-surface-2 border-crimson text-crimson shadow-md"
                          : "bg-surface-1 border-border-subtle text-text-primary"
                      }`}
                    >
                      <span className="text-[10px] uppercase tracking-wider text-text-muted">
                        Year
                      </span>
                      <span className="text-base font-extrabold tracking-tight">
                        {item.year}
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted">
                        Phase 0{index + 1}
                      </span>
                      <span className="text-xs font-semibold text-text-primary">
                        {isCurrent ? "Frontier Scale" : "Milestone"}
                      </span>
                    </div>
                  </div>

                  {/* Milestone Card */}
                  <Card
                    variant="default"
                    interactive
                    className={`flex-1 flex flex-col justify-between p-5 sm:p-6 ${
                      isCurrent ? "border-border-hover" : ""
                    }`}
                  >
                    <div>
                      <CardHeader className="p-0 pb-3">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <Badge
                            variant={isCurrent ? "crimson" : "neutral"}
                            size="sm"
                            dot={isCurrent}
                          >
                            {isCurrent ? "Enterprise Frontier" : `Milestone ${item.year}`}
                          </Badge>
                        </div>

                        <CardTitle as="h3" className="text-lg sm:text-xl text-text-primary mt-2">
                          {item.title}
                        </CardTitle>

                        <CardDescription className="text-xs sm:text-sm text-text-secondary leading-relaxed mt-2 font-body">
                          {item.description}
                        </CardDescription>
                      </CardHeader>

                      {/* Verified Highlights */}
                      <CardContent className="p-0 pt-4 mt-2 border-t border-border-subtle">
                        <span className="block text-[11px] font-mono uppercase tracking-wider text-text-muted mb-2.5">
                          Verified Deliverables
                        </span>
                        <ul className="flex flex-col gap-2">
                          {item.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex items-start gap-2 text-xs text-text-primary font-body"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-crimson shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </div>

                    <div className="pt-4 mt-4 border-t border-border-subtle flex items-center justify-between text-[11px] font-mono text-text-muted">
                      <span>VERIFIED_JOURNEY</span>
                      <span className="text-crimson font-bold">2019+</span>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
