// Centralised placeholder data for the Dos Pais UI sketch.
// All images use picsum.photos with stable seeds so the layout looks consistent
// between reloads. No real data, no backend.

const img = (seed: string, w = 1600, h = 1000) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const placeholderImages = { img };

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Apartment", href: "#apartment" },
  { label: "Explore", href: "#explore" },
  { label: "Guest Guide", href: "#guide" },
  { label: "Contact", href: "#contact" },
];

export const heroImage = img("dospais-hero-ocean", 2400, 1600);

export const apartmentImage = img("dospais-apartment-light", 1800, 1200);

export const amenities = [
  { icon: "wifi", label: "Fast Wi-Fi" },
  { icon: "kitchen", label: "Full Kitchen" },
  { icon: "sea", label: "Sea View" },
  { icon: "coffee", label: "Coffee Machine" },
  { icon: "parking", label: "Private Parking" },
  { icon: "balcony", label: "Balcony" },
];

export const exploreCards = [
  {
    title: "Restaurants",
    description: "Quiet tables, slow lunches, and seafood from the morning catch.",
    image: img("dospais-restaurants", 1200, 900),
  },
  {
    title: "Beaches",
    description: "Black sand, hidden coves, and warm Atlantic afternoons.",
    image: img("dospais-beaches", 1200, 900),
  },
  {
    title: "Activities",
    description: "From kayaking to ceramics — gentle ways to fill an island day.",
    image: img("dospais-activities", 1200, 900),
  },
  {
    title: "Hiking",
    description: "Cloud forests, crater lakes, and trails that smell of eucalyptus.",
    image: img("dospais-hiking", 1200, 900),
  },
  {
    title: "Whale Watching",
    description: "Mornings on the water, in respectful company of the giants.",
    image: img("dospais-whales", 1200, 900),
  },
  {
    title: "Natural Pools",
    description: "Volcanic rock, clear tide pools, and the rhythm of the sea.",
    image: img("dospais-pools", 1200, 900),
  },
  {
    title: "Viewpoints",
    description: "Quiet miradouros where the island unfolds in green and blue.",
    image: img("dospais-views", 1200, 900),
  },
  {
    title: "Car Rental",
    description: "A small car is all you need to follow the slow island roads.",
    image: img("dospais-car", 1200, 900),
  },
];

export const recommendations = [
  {
    title: "A Tasca",
    category: "Restaurant",
    description:
      "Honest island cooking in a small dining room, two streets from the marina.",
    rating: 4.8,
    image: img("dospais-tasca", 1400, 1000),
  },
  {
    title: "Lagoa do Fogo",
    category: "Activity",
    description:
      "A blue crater lake hidden in the clouds. Best reached early, before the wind.",
    rating: 4.9,
    image: img("dospais-fogo", 1400, 1000),
  },
  {
    title: "Mosteiros Beach",
    category: "Beach",
    description:
      "Black sand and tide pools framed by four basalt islets standing in the sea.",
    rating: 4.7,
    image: img("dospais-mosteiros", 1400, 1000),
  },
  {
    title: "Café do Porto",
    category: "Coffee Shop",
    description:
      "A long marble counter, a single espresso machine, and the morning paper.",
    rating: 4.6,
    image: img("dospais-cafeporto", 1400, 1000),
  },
  {
    title: "Ponta da Ferraria",
    category: "Sunset",
    description:
      "Where hot springs meet the Atlantic. Stay until the sun touches the sea.",
    rating: 5.0,
    image: img("dospais-sunset", 1400, 1000),
  },
];

export const guestGuide = [
  { title: "Wi-Fi", description: "Network name and password for the apartment." },
  { title: "Check-in", description: "How to find the key and settle in quietly." },
  { title: "Check-out", description: "A simple goodbye, no hurry on the way out." },
  { title: "Emergency", description: "Local emergency numbers, kept close." },
  { title: "Taxi", description: "Trusted drivers, day and night." },
  { title: "Airport", description: "Getting to and from João Paulo II airport." },
  { title: "Supermarkets", description: "Where to find good bread, cheese, and wine." },
  { title: "Pharmacy", description: "Closest pharmacies and weekend rotations." },
  { title: "Hospital", description: "Hospital do Divino Espírito Santo, just nearby." },
  { title: "House Rules", description: "A few gentle notes to keep the home calm." },
];

export const weather = {
  temperatureC: 24,
  condition: "Mostly sunny",
  humidity: 68,
  windKmh: 14,
  location: "Ponta Delgada, São Miguel",
};

export const testimonials = [
  {
    quote:
      "We came for four nights and stayed for nine. Every morning began on the balcony, with coffee and the sound of the harbour.",
    author: "A guest from Copenhagen",
  },
  {
    quote:
      "It does not feel like a rental. It feels like a home that has been waiting for you.",
    author: "A guest from Lisbon",
  },
  {
    quote:
      "The light at the end of the day is the kind of thing you remember years later. We are already planning to return.",
    author: "A guest from Brooklyn",
  },
];

export const mapPins = [
  { top: "22%", left: "30%", label: "Dos Pais" },
  { top: "44%", left: "58%", label: "Marina" },
  { top: "62%", left: "20%", label: "Mosteiros" },
  { top: "70%", left: "72%", label: "Lagoa do Fogo" },
  { top: "32%", left: "78%", label: "Furnas" },
];
