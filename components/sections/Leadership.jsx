import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
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
import { leadershipData } from "@/data/leadership";

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

/**
 * Leadership Section
 * Dark technical leadership roster showcasing verified executive team:
 * - Ramesh Singh — Co-founder & Director
 * - Ashi Gupta — Managing Director
 * - Akshay Gupta — CEO
 * Strictly uses verified data and photos from public/images/.
 * Zero gradients.
 */
export default function Leadership() {
  return (
    <section
      id="leadership"
      className="w-full bg-canvas py-20 sm:py-28 lg:py-32 border-b border-border-subtle transition-colors"
    >
      <Container clean={false}>
        {/* Section Header */}
        <SectionHeader
          eyebrow="Executive Governance"
          eyebrowVariant="crimson"
          title="Meet Our Leadership Team"
          description="The executive directors guiding corporate strategy, engineering culture, and technology delivery across enterprise accounts."
          size="lg"
          align="left"
        />

        {/* 3-Column Executive Roster */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 mt-12 sm:mt-16">
          {leadershipData.map((leader) => (
            <Card
              key={leader.id}
              variant="default"
              interactive
              className="flex flex-col justify-between overflow-hidden border-border-subtle hover:border-border-hover transition-colors"
            >
              <div>
                {/* Executive Portrait Frame */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full bg-surface-2 overflow-hidden border-b border-border-subtle">
                  <Image
                    src={leader.image}
                    alt={leader.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 400px"
                    className="object-cover object-top transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="neutral" size="sm">
                      Executive Leadership
                    </Badge>
                  </div>
                </div>

                {/* Leader Bio & Details */}
                <CardHeader className="p-6 sm:p-7 pb-2">
                  <span className="text-xs font-mono font-semibold tracking-wider uppercase text-crimson">
                    {leader.role}
                  </span>
                  <CardTitle as="h3" className="text-xl sm:text-2xl text-text-primary mt-1 font-heading">
                    {leader.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-6 sm:p-7 pt-2 pb-4">
                  <CardDescription className="text-xs sm:text-sm text-text-secondary leading-relaxed font-body">
                    {leader.bio}
                  </CardDescription>
                </CardContent>
              </div>

              {/* Card Footer: Verified LinkedIn / Connect Link */}
              <CardFooter className="p-6 sm:p-7 pt-4 border-t border-border-subtle flex items-center justify-between">
                <span className="text-[11px] font-mono text-text-muted">
                  CLING_EXECUTIVE
                </span>
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-secondary hover:text-crimson transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-crimson rounded-xs"
                  aria-label={`${leader.name} on LinkedIn`}
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                  <span>Connect</span>
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
