import CtaBanner from "@/components/homepage/CtaBanner";
import FeaturesSection from "@/components/homepage/FeaturesSection";
import HeroSection from "@/components/homepage/HeroSection";
import Packages from "@/components/homepage/Packages";
import PopularDestinations from "@/components/homepage/PopularDestinations";
import SectionWrapper from "@/components/section-wrapper";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SectionWrapper>
        <FeaturesSection />
      </SectionWrapper>
      <SectionWrapper>
        <PopularDestinations />
      </SectionWrapper>
      <SectionWrapper>
        <CtaBanner />
      </SectionWrapper>
      <SectionWrapper>
        <Packages />
      </SectionWrapper>
    </div>
  );
}
