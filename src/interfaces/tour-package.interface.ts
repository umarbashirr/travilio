export interface Itinerary {
  day: number;
  activities: string;
}

export interface TourPackage {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  duration: string;
  total_adults: number;
  total_children: number;
  highlights: string[];
  availability: string;
  rating: number;
  state_province: string;
  country: string;
  included: string[];
  excluded: string[];
  itinerary: Itinerary[];
}
