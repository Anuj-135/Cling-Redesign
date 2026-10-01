import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import FeaturedWork from "@/components/sections/FeaturedWork";
import TechSpotlight from "@/components/sections/TechSpotlight";
import Excellence from "@/components/sections/Excellence";
import Evolution from "@/components/sections/Evolution";
import Leadership from "@/components/sections/Leadership";
import Contact from "@/components/sections/Contact";

/**
 * Cling Infotech Redesign Homepage
 * Complete Phase 8 Composition:
 * Hero -> Stats -> Services (Light Surface) -> Featured Work (Dark) -> Tech Spotlight (Dark)
 * -> Excellence (Light Surface) -> Evolution (Dark) -> Leadership (Dark) -> Contact (Dark)
 * Wrapped by Navbar, Footer, and WhatsApp floating widget in app/layout.js.
 */
export default function HomePage() {
  return (
    <>
      {/* Section 1: Dark Technical Hero */}
      <Hero />

      {/* Section 2: Quantitative Proof & Metrics Strip */}
      <Stats />

      {/* Section 3: Comprehensive Technology Services (Light Surface) */}
      <Services />

      {/* Section 4: Verified Case Studies & Enterprise Projects (Dark) */}
      <FeaturedWork />

      {/* Section 5: Specialized Computer Vision & 3D Visual Computing (Dark) */}
      <TechSpotlight />

      {/* Section 6: Engineering Excellence & Principles (Light Surface) */}
      <Excellence />

      {/* Section 7: Company Evolution Timeline (Dark) */}
      <Evolution />

      {/* Section 8: Executive Governance & Leadership Team (Dark) */}
      <Leadership />

      {/* Section 9: Direct Consultation Discovery & Contact Hub (Dark) */}
      <Contact />
    </>
  );
}
