import { FaRoute, FaMapMarkedAlt } from "react-icons/fa";
import { BiSolidDiscount } from "react-icons/bi";

export const SITE_INFO = {
  site_name: "Travilio",
  tagline: "Your Gateway to Unforgettable Adventures",
  logo: "/images/full-logo.svg",
  contact_email: "info@travilio.com",
  contact_phone: "+1 (555) 123-4567",
  address: {
    line1: "123 Travel Lane",
    line2: "Suite 100",
    city: "Adventure City",
    state: "Travel State",
    zip: "12345",
    country: "USA",
  },
  social_media: {
    facebook: "https://facebook.com/travilio",
    twitter: "https://twitter.com/travilio",
    instagram: "https://instagram.com/travilio",
    linkedin: "https://linkedin.com/company/travilio",
    whatsApp: "wa.link/g3eqto",
  },
  business_hours: {
    monday: "9:00 AM - 6:00 PM",
    tuesday: "9:00 AM - 6:00 PM",
    wednesday: "9:00 AM - 6:00 PM",
    thursday: "9:00 AM - 6:00 PM",
    friday: "9:00 AM - 6:00 PM",
    saturday: "10:00 AM - 4:00 PM",
    sunday: "Closed",
  },
  about_us_short:
    "Travilio is a premier tour and travel agency offering curated travel experiences around the globe. Our mission is to provide exceptional service and unforgettable journeys for all our clients.",
  privacy_policy_link: "/privacy-policy",
  terms_conditions_link: "/terms-and-conditions",
};

export const SITE_ROUTES = [
  {
    path: "/",
    label: "Home",
    primary: true,
  },
  {
    path: "/about-us",
    label: "About Us",
    primary: true,
  },
  {
    path: "/destinations",
    label: "Destinations",
    primary: true,
  },
  {
    path: "/tours",
    label: "Tours",
    primary: true,
  },
  {
    path: "/blog",
    label: "Blog",
    primary: true,
  },
  {
    path: "/contact-us",
    label: "Contact Us",
    primary: true,
  },
  {
    path: "/privacy-policy",
    label: "Privacy Policy",
    primary: false,
  },
  {
    path: "/terms-and-conditions",
    label: "Terms and Conditions",
    primary: false,
  },
];

export const HOME_PAGE = {
  hero: {
    title: "Discover Your Next Adventure",
    subtitle: "Explore the world with our exclusive tours and travel packages",
    background_image: "/images/hero-bg.jpg",
    cta_text: "Browse Tours",
  },
  features: [
    {
      icon: (
        <FaMapMarkedAlt
          size={48}
          className="group-hover:text-white duration-300 ease-in-out transition-all mb-6 mx-auto"
        />
      ),
      title: "Expert Guides",
      description:
        "Our experienced guides ensure you have an insightful and enjoyable journey.",
    },
    {
      icon: (
        <FaRoute
          size={48}
          className="group-hover:text-white duration-300 ease-in-out transition-all mb-6 mx-auto"
        />
      ),

      title: "Customized Tours",
      description:
        "Tailor-made itineraries to suit your preferences and interests.",
    },
    {
      icon: (
        <BiSolidDiscount
          size={48}
          className="group-hover:text-white duration-300 ease-in-out transition-all mb-6 mx-auto"
        />
      ),
      title: "Best Price Guarantee",
      description:
        "We offer competitive pricing without compromising on quality.",
    },
  ],
  banner_cta: {
    headline: "Explore the World with Travilio",
    subheadline: "Unforgettable journeys to breathtaking destinations",
    cta_text: "Discover Now",
    cta_url: "/destinations",
    background_image: "kashmir-1",
  },
  popular_destinations: {
    title: "Popular Destinations",
    description:
      "Discover our most sought-after destinations and start planning your next trip.",
    destinations: [
      {
        image: "/images/dubai-d.jpg",
        name: "Dubai",
        state_province: "dubai",
        link: "/destinations/dubai",
      },
      {
        image: "/images/bali.jpg",
        name: "Bali",
        state_province: "bali",
        link: "/destinations/bali",
      },

      {
        image: "/images/kashmir-d.jpg",
        name: "Kashmir",
        state_province: "Jammu and Kashmir",
        link: "/destinations/kashmir",
      },
      {
        image: "/images/vietnam.jpg",
        name: "Vietnam",
        state_province: "vietnam",
        link: "/destinations/vietnam",
      },
    ],
  },
  testimonials: [
    {
      quote:
        "An amazing experience! The tour was well organized and the guide was fantastic.",
      author: "John Doe",
      location: "California, USA",
    },
    {
      quote: "A trip to remember! Highly recommend their services.",
      author: "Jane Smith",
      location: "London, UK",
    },
  ],
  newsletter: {
    title: "Stay Updated",
    description:
      "Sign up for our newsletter to receive the latest news and special offers.",
    cta_text: "Subscribe",
  },
};
