import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Cpu, Box, Terminal, Activity } from "lucide-react";
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
import { techSpotlightData } from "@/data/projects";

/**
 * TechSpotlight Section
 * High-contrast dark technical showcase highlighting verified advanced focus areas:
 * 1. AI Surveillance Intelligence (Computer Vision)
 * 2. 3D Visual Computing & Animation
 * Strictly adheres to verified data and design tokens. No gradients.
 */
export default function TechSpotlight() {
  return (
    <section
      id="technology"
      className="w-full bg-canvas py-20 sm:py-28 lg:py-32 border-b border-border-subtle transition-colors"
    >
      <Container clean={false}>
        {/* Section Header */}
        <SectionHeader
          eyebrow="Advanced Capabilities"
          eyebrowVariant="crimson"
          title="Specialized Computer Vision & 3D Engineering"
          description="Extending enterprise application engineering into autonomous video intelligence, low-latency edge inference, and photorealistic 3D visual computing."
          size="lg"
          align="left"
        />

        {/* 2-Column Technical Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-12 sm:mt-16">
          {techSpotlightData.map((item, index) => {
            const isAI = item.id === "ai-surveillance";

            return (
              <Card
                key={item.id}
                variant="default"
                interactive
                className="flex flex-col justify-between overflow-hidden border-border-subtle hover:border-border-hover transition-colors"
              >
                <div>
                  {/* Card Header */}
                  <CardHeader className="p-6 sm:p-8 pb-4">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        <Badge variant={isAI ? "crimson" : "neutral"} dot size="sm">
                          {item.badge}
                        </Badge>
                        <span className="text-xs text-text-muted font-mono">
                          {item.eyebrow}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-text-muted">
                        {isAI ? "LIVE_INFERENCE" : "CGI_RENDER"}
                      </span>
                    </div>

                    <CardTitle as="h3" className="text-2xl sm:text-3xl text-text-primary mt-1">
                      {item.title}
                    </CardTitle>

                    <CardDescription className="text-sm sm:text-base leading-relaxed mt-2 text-text-secondary">
                      {item.description}
                    </CardDescription>
                  </CardHeader>

                  {/* Visual Asset Telemetry Frame */}
                  <div className="px-6 sm:px-8 py-2">
                    <div className="relative w-full aspect-[16/10] bg-surface-2 border border-border-subtle rounded-md overflow-hidden shadow-lg">
                      {/* Frame Header Bar */}
                      <div className="h-8 bg-surface-3 px-3 flex items-center justify-between border-b border-border-subtle">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-border-input" />
                          <span className="w-2 h-2 rounded-full bg-border-input" />
                          <span className="w-2 h-2 rounded-full bg-border-input" />
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] font-mono text-text-muted">
                          {isAI ? (
                            <>
                              <Activity className="w-3 h-3 text-crimson" />
                              <span>SURVEILLANCE_STREAM // 60 FPS</span>
                            </>
                          ) : (
                            <>
                              <Box className="w-3 h-3 text-text-muted" />
                              <span>VIEWPORT // 4K // RAY_TRACED</span>
                            </>
                          )}
                        </div>
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isAI ? "bg-crimson" : "bg-text-secondary"
                          }`}
                        />
                      </div>

                      {/* Display Image */}
                      <div className="relative w-full h-[calc(100%-2rem)] bg-surface-3">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Capabilities List */}
                  <CardContent className="p-6 sm:p-8 pt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Terminal className="w-3.5 h-3.5 text-crimson" />
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-text-secondary">
                        Technical Scope & Modules
                      </span>
                    </div>
                    <ul className="flex flex-col gap-2.5">
                      {item.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-primary">
                          <CheckCircle2 className="w-4 h-4 text-crimson shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>

                {/* Card Action Footer */}
                <CardFooter className="p-6 sm:p-8 pt-0 border-t border-border-subtle mt-4 flex items-center justify-between">
                  <span className="text-xs font-mono text-text-muted">
                    {isAI ? "Computer Vision Architecture" : "3D Digital CGI Engine"}
                  </span>
                  <Button
                    variant="secondary"
                    size="sm"
                    href="#contact"
                    iconRight={<ArrowUpRight className="w-3.5 h-3.5 ml-1" />}
                  >
                    {isAI ? "Consult on Vision AI" : "Inquire 3D Production"}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
