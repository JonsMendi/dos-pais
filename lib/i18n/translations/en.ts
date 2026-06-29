import type { Translations } from "../types";

export const en: Translations = {
  nav: {
    home: "Home",
    apartment: "Apartment",
    explore: "Explore",
    guide: "Guest Guide",
    contact: "Contact",
    stayWithUs: "Stay with us",
  },
  hero: {
    location: "Ponta Delgada · São Miguel · Azores",
    tagline: "A place to slow down.",
    body: "A quiet apartment on the edge of the Atlantic, kept warm by family and the slow rhythm of the island.",
    ctaExplore: "Explore",
    ctaApartment: "View the apartment",
  },
  apartment: {
    eyebrow: "The Apartment",
    title: "A quiet home, kept just as we left it.",
    body1:
      "Dos Pais was opened by our parents, in a building they have loved for decades. Linen on the bed, coffee on the stove, and light that moves through the rooms with the day. Nothing more, nothing less.",
    body2:
      "Two bedrooms, a soft living room, and a balcony that looks toward the harbour. Designed for long mornings, slow meals, and the kind of stay that does not feel rushed.",
    cta: "View apartment",
    whatsInside: "What's inside",
    amenities: [
      "Fast Wi-Fi",
      "Full Kitchen",
      "Sea View",
      "Coffee Machine",
      "Private Parking",
      "Balcony",
    ],
  },
  explore: {
    eyebrow: "Explore São Miguel",
    title: "An island made for slow days.",
    description:
      "A small selection to help you fall into the rhythm of the island — from the coast, to the crater lakes, to the long tables by the sea.",
    cards: [
      {
        title: "Restaurants",
        description:
          "Quiet tables, slow lunches, and seafood from the morning catch.",
      },
      {
        title: "Beaches",
        description:
          "Black sand, hidden coves, and warm Atlantic afternoons.",
      },
      {
        title: "Activities",
        description:
          "From kayaking to ceramics — gentle ways to fill an island day.",
      },
      {
        title: "Hiking",
        description:
          "Cloud forests, crater lakes, and trails that smell of eucalyptus.",
      },
      {
        title: "Whale Watching",
        description:
          "Mornings on the water, in respectful company of the giants.",
      },
      {
        title: "Natural Pools",
        description:
          "Volcanic rock, clear tide pools, and the rhythm of the sea.",
      },
      {
        title: "Viewpoints",
        description:
          "Quiet miradouros where the island unfolds in green and blue.",
      },
      {
        title: "Car Rental",
        description:
          "A small car is all you need to follow the slow island roads.",
      },
    ],
  },
  recommendations: {
    eyebrow: "Featured",
    title: "A few favourites, written by hand.",
    description:
      "The kind of places we send our own friends to — quiet, honest, and worth the small detour.",
    cta: "All recommendations",
    items: [
      {
        title: "A Tasca",
        category: "Restaurant",
        description:
          "Honest island cooking in a small dining room, two streets from the marina.",
      },
      {
        title: "Lagoa do Fogo",
        category: "Activity",
        description:
          "A blue crater lake hidden in the clouds. Best reached early, before the wind.",
      },
      {
        title: "Mosteiros Beach",
        category: "Beach",
        description:
          "Black sand and tide pools framed by four basalt islets standing in the sea.",
      },
      {
        title: "Café do Porto",
        category: "Coffee Shop",
        description:
          "A long marble counter, a single espresso machine, and the morning paper.",
      },
      {
        title: "Ponta da Ferraria",
        category: "Sunset",
        description:
          "Where hot springs meet the Atlantic. Stay until the sun touches the sea.",
      },
    ],
  },
  map: {
    eyebrow: "The island, at a glance",
    title: "Everything we love, on one map.",
    description:
      "A simple guide to the corners of São Miguel we keep returning to, with the apartment at the centre.",
    cta: "Open map",
  },
  weather: {
    eyebrow: "Weather around the island",
    title: "The weather in the Azores loves to surprise us.",
    description:
      "Sunshine, mist and rain can all happen at the same time in different corners of São Miguel. Take a quick look around the island, and let today decide where your adventure begins.",
    bestToday: "Best today",
    viewCamera: "View live camera",
    statCondition: "Condition",
    statHumidity: "Humidity",
    statWind: "Wind",
    currentBody:
      "A gentle island day. Soft breeze from the north, light cloud toward the late afternoon.",
  },
  guide: {
    eyebrow: "Guest Guide",
    title: "Everything you need, gently arranged.",
    description:
      "A small, calm folder of the things you might want to know once you have arrived — from the Wi-Fi password to the nearest pharmacy.",
    items: [
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
    ],
  },
  testimonials: {
    eyebrow: "From our guests",
    title: "Quiet notes, left at check-out.",
    items: [
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
    ],
  },
  footer: {
    tagline:
      "A small apartment in Ponta Delgada, opened with love by a family, for the people who come to slow down on São Miguel.",
    columns: [
      {
        title: "Stay",
        links: ["The Apartment", "Amenities", "Availability", "House Rules"],
      },
      {
        title: "São Miguel",
        links: ["Explore", "Recommendations", "Map", "Weather"],
      },
      {
        title: "Guests",
        links: ["Check-in", "Guest Guide", "Local Help", "Contact"],
      },
    ],
    copyright: "Dos Pais · Ponta Delgada, São Miguel",
    privacy: "Privacy",
    terms: "Terms",
  },
  restaurantsPage: {
    backLabel: "Back to Explore",
    eyebrow: "Eating on São Miguel",
    title: "Where to eat — and why.",
    description:
      "The island grows what it eats. Beef from the green pastures, fish from the morning sea, cheese from the mountain farms. These are the places we send our guests to — sorted not by star rating, but by mood.",
    mapsButton: "Open in Maps",
  },
};
