export const TOUR_PACKAGES = [
  {
    id: "1",
    name: "Goa Beach Holiday",
    description:
      "Enjoy the sun, sand, and sea with our 5-day beach holiday in Goa. Relax on the pristine beaches and explore the vibrant nightlife.",
    price: 800,
    image: "goa",
    duration: "5 days",
    total_adults: 2,
    total_children: 2,
    highlights: [
      "Baga Beach",
      "Anjuna Beach",
      "Dudhsagar Waterfalls",
      "Goan nightlife",
    ],
    availability: "Available",
    rating: 4.7,
    state_province: "Goa",
    country: "India",
    included: [
      "Accommodation",
      "Breakfast",
      "Airport transfers",
      "Sightseeing tours",
    ],
    excluded: ["Flights", "Lunch and Dinner", "Personal expenses"],
    itinerary: [
      {
        day: 1,
        activities: "Arrival and transfer to hotel. Evening at leisure.",
      },
      {
        day: 2,
        activities: "Visit Baga and Anjuna Beach. Explore local markets.",
      },
      {
        day: 3,
        activities:
          "Full-day tour to Dudhsagar Waterfalls and spice plantation.",
      },
      {
        day: 4,
        activities: "Relax on the beach or enjoy water sports.",
      },
      {
        day: 5,
        activities: "Departure.",
      },
    ],
  },
  {
    id: "2",
    name: "Kerala Backwaters Tour",
    image: "kerala",
    description:
      "Experience the serene backwaters of Kerala with our 6-day tour. Enjoy houseboat cruises and explore the rich cultural heritage.",
    price: 900,
    duration: "6 days",
    total_adults: 2,
    total_children: 1,
    highlights: [
      "Houseboat cruise",
      "Alleppey backwaters",
      "Munnar tea gardens",
      "Kochi Fort",
    ],
    availability: "Available",
    rating: 4.8,
    state_province: "Kerala",
    country: "India",
    included: [
      "Accommodation",
      "Houseboat stay",
      "Breakfast",
      "Sightseeing tours",
    ],
    excluded: ["Flights", "Lunch and Dinner", "Personal expenses"],
    itinerary: [
      {
        day: 1,
        activities: "Arrival in Kochi. Transfer to hotel.",
      },
      {
        day: 2,
        activities: "Explore Kochi Fort and local markets.",
      },
      {
        day: 3,
        activities: "Transfer to Munnar. Visit tea gardens.",
      },
      {
        day: 4,
        activities: "Travel to Alleppey. Houseboat cruise.",
      },
      {
        day: 5,
        activities: "Relax on the houseboat. Explore backwaters.",
      },
      {
        day: 6,
        activities: "Departure from Kochi.",
      },
    ],
  },
  {
    id: "3",
    name: "Ladakh Adventure",
    image: "ladakh",
    description:
      "Embark on a thrilling 7-day adventure in Ladakh. Discover the stunning landscapes and rich culture of this high-altitude desert.",
    price: 1200,
    duration: "7 days",
    total_adults: 2,
    total_children: 0,
    highlights: [
      "Pangong Lake",
      "Nubra Valley",
      "Leh Palace",
      "Monastery visits",
    ],
    availability: "Limited",
    rating: 4.9,
    state_province: "Ladakh",
    country: "India",
    included: ["Accommodation", "Breakfast", "Guided tours", "Transport"],
    excluded: ["Flights", "Lunch and Dinner", "Personal expenses"],
    itinerary: [
      {
        day: 1,
        activities: "Arrival in Leh. Acclimatization.",
      },
      {
        day: 2,
        activities: "Explore Leh Palace and local market.",
      },
      {
        day: 3,
        activities: "Drive to Nubra Valley. Visit Diskit Monastery.",
      },
      {
        day: 4,
        activities: "Explore Nubra Valley. Camel ride in Hunder.",
      },
      {
        day: 5,
        activities: "Drive to Pangong Lake. Overnight stay.",
      },
      {
        day: 6,
        activities: "Return to Leh. Free time.",
      },
      {
        day: 7,
        activities: "Departure.",
      },
    ],
  },
  {
    id: "4",
    name: "Kashmir Paradise Tour",
    description:
      "Explore the scenic beauty of Kashmir with our 5-day tour. Enjoy the tranquil Dal Lake, lush gardens, and majestic mountains.",
    price: 1000,
    image: "kashmir-1",
    duration: "5 days",
    total_adults: 2,
    total_children: 1,
    highlights: [
      "Dal Lake shikara ride",
      "Mughal Gardens",
      "Gulmarg",
      "Pahalgam",
    ],
    availability: "Available",
    rating: 4.8,
    state_province: "Jammu and Kashmir",
    country: "India",
    included: [
      "Accommodation",
      "Breakfast",
      "Houseboat stay",
      "Sightseeing tours",
    ],
    excluded: ["Flights", "Lunch and Dinner", "Personal expenses"],
    itinerary: [
      {
        day: 1,
        activities: "Arrival in Srinagar. Transfer to houseboat.",
      },
      {
        day: 2,
        activities: "Shikara ride on Dal Lake. Visit Mughal Gardens.",
      },
      {
        day: 3,
        activities: "Day trip to Gulmarg. Cable car ride.",
      },
      {
        day: 4,
        activities: "Visit Pahalgam. Explore Betaab Valley.",
      },
      {
        day: 5,
        activities: "Departure.",
      },
    ],
  },
  {
    id: "5",
    name: "Vietnam Cultural Discovery",
    description:
      "Discover the rich history and culture of Vietnam with our 6-day tour. Explore bustling cities, ancient temples, and beautiful landscapes.",
    image: "veitnam",
    price: 1100,
    duration: "6 days",
    total_adults: 2,
    total_children: 1,
    highlights: [
      "Hanoi Old Quarter",
      "Halong Bay cruise",
      "Hoi An Ancient Town",
      "Cu Chi Tunnels",
    ],
    availability: "Available",
    rating: 4.8,
    state_province: "Multiple",
    country: "Vietnam",
    included: ["Accommodation", "Breakfast", "Guided tours", "Transport"],
    excluded: ["Flights", "Lunch and Dinner", "Personal expenses"],
    itinerary: [
      {
        day: 1,
        activities: "Arrival in Hanoi. Transfer to hotel.",
      },
      {
        day: 2,
        activities: "Explore Hanoi Old Quarter and Hoan Kiem Lake.",
      },
      {
        day: 3,
        activities: "Drive to Halong Bay. Overnight cruise.",
      },
      {
        day: 4,
        activities: "Return to Hanoi. Fly to Da Nang. Transfer to Hoi An.",
      },
      {
        day: 5,
        activities: "Explore Hoi An Ancient Town.",
      },
      {
        day: 6,
        activities: "Visit Cu Chi Tunnels. Departure.",
      },
    ],
  },
  {
    id: "6",
    name: "Dubai City Tour",
    image: "dubai",
    description:
      "Experience the glamour and modernity of Dubai with our 5-day city tour. Visit iconic landmarks and enjoy luxury shopping and dining.",
    price: 1300,
    duration: "5 days",
    total_adults: 2,
    total_children: 0,
    highlights: [
      "Burj Khalifa",
      "Desert safari",
      "Dubai Mall",
      "Palm Jumeirah",
    ],
    availability: "Available",
    rating: 4.9,
    state_province: "Dubai",
    country: "United Arab Emirates",
    included: ["Accommodation", "Breakfast", "Guided tours", "Transport"],
    excluded: ["Flights", "Lunch and Dinner", "Personal expenses"],
    itinerary: [
      {
        day: 1,
        activities: "Arrival in Dubai. Transfer to hotel.",
      },
      {
        day: 2,
        activities: "Visit Burj Khalifa and Dubai Mall.",
      },
      {
        day: 3,
        activities: "Desert safari with BBQ dinner.",
      },
      {
        day: 4,
        activities: "Explore Palm Jumeirah and Atlantis.",
      },
      {
        day: 5,
        activities: "Departure.",
      },
    ],
  },
];
