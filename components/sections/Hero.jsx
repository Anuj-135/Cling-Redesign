import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Terminal } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

/**
 * Hero Section
 * Primary viewport entry for Cling Infotech.
 * Establishes technical capability, architectural credibility, and immediate conversion.
 * Strict non-gradient, token-driven aesthetic with Server Component rendering.
 */
export default function Hero() {
  return (
    <section className="relative w-full bg-canvas overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-28 border-b border-border-subtle">
      <Container clean={false}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Heading, Proof & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            {/* Verified Eyebrow */}
            <Badge variant="crimson" dot size="md">
              Engineering Excellence Since 2019
            </Badge>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-text-primary tracking-tight leading-[1.1]">
              Build Digital Products That Move Business Forward.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-text-secondary leading-relaxed max-w-2xl font-body">
              We engineer dependable digital platforms, high-performance web and mobile
              applications, enterprise ERP integrations, and AI-driven systems designed for
              continuous scale and operational resilience.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <Button
                variant="primary"
                size="lg"
                href="#contact"
                iconRight={<ArrowRight className="w-4 h-4 ml-1" />}
              >
                Start a Project
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="#services"
              >
                Explore Services
              </Button>
            </div>

            {/* Core Capability Checklist */}
            <div className="pt-4 border-t border-border-subtle w-full grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-text-secondary font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-crimson shrink-0" />
                <span>350+ Global Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-crimson shrink-0" />
                <span>Enterprise SLA & Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-crimson shrink-0" />
                <span>Zero Pre-Made Templates</span>
              </div>
            </div>
          </div>

          {/* Right Column: Precision Dashboard Visual Frame */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            {/* Terminal Window Frame */}
            <div className="w-full max-w-lg bg-surface-1 border border-border-hover rounded-card overflow-hidden shadow-2xl transition-colors">
              {/* Window Header / Controls Bar */}
              <div className="h-10 bg-surface-2 px-4 flex items-center justify-between border-b border-border-subtle">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-border-input inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-border-input inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-border-input inline-block" />
                </div>

                <div className="bg-surface-3 px-3 py-1 rounded-sm text-[11px] text-text-muted font-mono border border-border-subtle">
                  clinginfotech.com/enterprise-suite
                </div>

                <div className="w-2.5 h-2.5 rounded-full bg-crimson" title="Production Cluster Active" />
              </div>

              {/* Graphic Display Area */}
              <div className="relative aspect-[16/10] w-full bg-surface-3 overflow-hidden">
                <Image
                  src="/images/image.webp"
                  alt="Cling Infotech digital product engineering dashboard preview"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 540px"
                  className="object-cover object-center"
                />
              </div>

              {/* Window Footer Status Strip */}
              <div className="p-4 bg-surface-1 border-t border-border-subtle flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-crimson" />
                  <span className="text-text-primary font-medium">Core Platform Engine</span>
                </div>
                <span className="text-text-muted font-mono text-[11px]">32M+ Lines Tested</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
