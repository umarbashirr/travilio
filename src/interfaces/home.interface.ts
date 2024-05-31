import { ReactElement } from "react";

export interface HeroSectionInterface {
  title: string;
  subtitle: string;
  background_image: string;
  cta_text: string;
}

export interface HighlightInterface {
  icon: ReactElement;
  title: string;
  description: string;
}

export interface AboutSectionInterface {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  image_2: string;
  image_3: string;
  signature: string;
  highlights: Highlight[];
}

export interface FeatureInterface {
  icon: ReactElement;
  title: string;
  description: string;
}

export interface BannerCTAInterface {
  headline: string;
  subheadline: string;
  cta_text: string;
  cta_url: string;
  background_image: string;
}

export interface DestinationInterface {
  image: string;
  name: string;
  state_province: string;
  link: string;
}

export interface PopularDestinationInterface {
  title: string;
  description: string;
  destinations: DestinationInterface[];
}

export interface TestimonialInterface {
  quote: string;
  author: string;
  location: string;
}

export interface NewsletterInterface {
  title: string;
  description: string;
  cta_text: string;
}

export interface HomePage {
  hero: HeroSectionInterface;
  about_section: AboutSectionInterface;
  features: FeatureInterface[];
  banner_cta: BannerCTAInterface;
  popular_destinations: PopularDestinationInterface;
  testimonials: TestimonialInterface[];
  newsletter: NewsletterInterface;
}
