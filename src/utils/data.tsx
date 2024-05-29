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
