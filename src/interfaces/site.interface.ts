export interface Address {
  line1: string;
  line2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface SocialMediaLinks {
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  whatsApp: string;
}

export interface BusinessHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface SiteInfo {
  site_name: string;
  tagline: string;
  logo: string;
  white_logo: string;
  contact_email: string;
  contact_phone: string;
  address: Address;
  social_media: SocialMediaLinks;
  business_hours: BusinessHours;
  about_us_short: string;
  privacy_policy_link: string;
  terms_conditions_link: string;
}
