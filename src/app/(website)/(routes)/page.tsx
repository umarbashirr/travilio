import BoxedContainer from "@/components/boxed-container";
import AboutSection from "@/components/homepage/AboutSection";
import BlogSection from "@/components/homepage/BlogSection";
import CtaBanner from "@/components/homepage/CtaBanner";
import FeaturesSection from "@/components/homepage/FeaturesSection";
import HeroSection from "@/components/homepage/HeroSection";
import Packages from "@/components/homepage/Packages";
import PopularDestinations from "@/components/homepage/PopularDestinations";
import Testimonials from "@/components/homepage/Testimonials";
import PaddingSectionWrapper from "@/components/padding-section-wrapper";
import SectionWrapper from "@/components/section-wrapper";
import { HOME_PAGE } from "@/utils/data";

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
      <SectionWrapper>
        <AboutSection />
      </SectionWrapper>
      <PaddingSectionWrapper className="bg-orange-50">
        <Testimonials testimonials={HOME_PAGE.testimonials} />
      </PaddingSectionWrapper>
      <SectionWrapper>
        <BlogSection />
      </SectionWrapper>
    </div>
  );
}
