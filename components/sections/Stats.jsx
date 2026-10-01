import Container from "@/components/ui/Container";
import { statsData } from "@/data/stats";

/**
 * Stats Section (StatsStrip)
 * Displays verified proof metrics in prominent numeric typography.
 * Rendered on solid dark slate Surface 1 with architectural delimiters.
 */
export default function Stats() {
  return (
    <section
      aria-label="Key Performance Indicators and Metrics"
      className="w-full bg-surface-1 border-b border-border-subtle py-12 sm:py-16 transition-colors"
    >
      <Container clean={false}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {statsData.map((stat, index) => (
            <div
              key={stat.id}
              className={`flex flex-col items-start ${
                index !== statsData.length - 1
                  ? "lg:border-r lg:border-border-subtle lg:pr-8"
                  : ""
              } ${index !== 0 ? "lg:pl-8" : ""}`}
            >
              {/* Stat Value with Crimson Suffix */}
              <div className="flex items-baseline gap-1">
                <span className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-text-primary tracking-tight">
                  {stat.value}
                </span>
                <span className="font-heading font-bold text-2xl sm:text-3xl text-crimson">
                  {stat.suffix}
                </span>
              </div>

              {/* Stat Label */}
              <h3 className="font-heading text-xs sm:text-sm font-bold tracking-wider uppercase text-text-primary mt-2">
                {stat.label}
              </h3>

              {/* Supporting Copy */}
              <p className="text-xs text-text-secondary leading-relaxed mt-1 font-body">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
