// Restaurant recommendations for Dos Pais guests.
// Each entry will be populated by the owner. Images are optional — the card
// renders gracefully without one.

export type Restaurant = {
  name: string;
  description: string;
  /** Full Google Maps URL for this specific restaurant. */
  mapsUrl: string;
  /** Optional: picsum or real image URL. */
  image?: string;
};

export type RestaurantCategory = {
  id: string;
  /** Display name of the category — shown as a heading. */
  name: string;
  /** One-line subtitle that sets the mood for the category. */
  tagline: string;
  restaurants: Restaurant[];
};

export const restaurantCategories: RestaurantCategory[] = [
  {
    id: "island-table",
    name: "The Island Table",
    tagline: "The Azorean kitchen at its most honest — slow food, deep flavour, and recipes that predate tourism.",
    restaurants: [
      {
        name: "Mané Cigano",
        description:
          "A neighbourhood institution. Come for the chicharros fritos and the feijão — the kind of cooking that doesn't need a menu to explain itself.",
        mapsUrl: "https://maps.app.goo.gl/Quzi4opKdk5ARoTC6",
      },
      {
        name: "O Galego",
        description:
          "If there is one thing the island does exceptionally well, it is beef. Order the bife de lombo or the vazia, and let the rest of the evening take care of itself.",
        mapsUrl: "https://maps.app.goo.gl/yRTGxfQY3zg7Wriz6",
      },
      {
        name: "Cantinho do Cais",
        description:
          "On a cooler day, few things rival a bowl of their caldo de peixe — a proper Azorean caldeirada that warms from the inside. Best saved for when the mist comes in.",
        mapsUrl: "https://maps.app.goo.gl/Y6vwTTG1EAgCEsKu6",
      },
      {
        name: "Casa de Pasto o Amaral",
        description:
          "Worth the drive to Porto Formoso alone. Honest fish, crispy chicharros, and arroz de lapas made exactly as it should be. Sit by the window if you can.",
        mapsUrl: "https://maps.app.goo.gl/uCAAeEncn2YmELn36",
      },
      {
        name: "Já Se Sabe",
        description:
          "The cozido das furnas is arguably São Miguel's most famous dish — slow-cooked underground in the volcanic heat of Furnas. Reserve your portion ahead; it sells out before the morning is over.",
        mapsUrl: "https://maps.app.goo.gl/kSV7TjdQZUBBXx5K9",
      },
      {
        name: "Restaurante Bom Pesqueiro",
        description:
          "Right on the Portas do Mar, with the harbour within sight. The fish arrives as fresh as the view. A simple, unhurried lunch that needs very little else.",
        mapsUrl: "https://maps.app.goo.gl/Ld6ahNNx1BEbv6Yv7",
      },
    ],
  },
  {
    id: "salt-sea-level",
    name: "Salt & Sea Level",
    tagline: "Simple plates, cold drinks, and the sound of the harbour — no dress code, no rush.",
    restaurants: [
      {
        name: "BB Bar Bruno",
        description:
          "Grab a table on the terrace at Praia das Milícias, order a toast and a cold draft beer, and spend the afternoon watching the surfers. Some days need nothing else.",
        mapsUrl: "https://maps.app.goo.gl/wfikqM9aV6erKEM76",
      },
      {
        name: "Ondas do Mar",
        description:
          "The online reviews don't do it justice. Find a spot on the terrace, order a round of starters to share, and stay long enough to watch the light change over the water. Best on a calm evening.",
        mapsUrl: "https://maps.app.goo.gl/JhJasAJdvwMMsBq99",
      },
      {
        name: "Bar da Caloura",
        description:
          "Take a swim in the natural harbour first, then sit down to grilled fish of the day and lapas grelhadas. The kind of stop you plan to keep short and end up staying for hours.",
        mapsUrl: "https://maps.app.goo.gl/TWH2is5qa2xcBkNz9",
      },
      {
        name: "Os Moinhos",
        description:
          "After a morning at Porto Formoso beach, Os Moinhos is exactly what you need — simple, comforting food in a setting that asks very little of you. A quiet reward for a good morning.",
        mapsUrl: "https://maps.app.goo.gl/9EBPbds16wVmtCpk9",
      },
      {
        name: "Bar da Praia de Água d'Alto",
        description:
          "The beach bar at Água d'Alto does exactly what a beach bar should — simple, honest food, sand nearby, and no reason to be anywhere else. A good stop after a long morning by the water.",
        mapsUrl: "https://maps.app.goo.gl/bFuFUD3wdUUwPgHz6",
      },
    ],
  },
  {
    id: "lost-in-translation",
    name: "Lost in Translation",
    tagline: "For the evenings when the island calls for a different passport — good food needs no geography.",
    restaurants: [
      {
        name: "Nonna's Teeth & Tomatoes Pizza",
        description:
          "Simple, honest pizza in the heart of the city. It gets busy — expect a wait, accept it gracefully, and know it is worth every minute.",
        mapsUrl: "https://maps.app.goo.gl/cPwkrFoJU4VUN4gNA",
      },
      {
        name: "Saffron Indian",
        description:
          "When the island craving points somewhere further east, Saffron delivers. Good spice, good warmth, and a welcome change of pace from the sea.",
        mapsUrl: "https://maps.app.goo.gl/vd1hmMjUGN6QW9My5",
      },
      {
        name: "Santo Izakaya",
        description:
          "For the sushi mood. A small, considered menu in a relaxed setting — the kind of place that takes its fish seriously even when it is not Atlantic.",
        mapsUrl: "https://maps.app.goo.gl/ASDFHLTtJJAQn19j8",
      },
    ],
  },
  {
    id: "morning-ritual",
    name: "The Morning Ritual",
    tagline: "Coffee, pastry, and nowhere to be — the Azorean morning is not something to rush through.",
    restaurants: [
      {
        name: "Jardim Natural Food & Coffee",
        description:
          "Breakfast in a beautiful garden, at a pace the island approves of. Calm, green, and generous — exactly what a slow morning should feel like.",
        mapsUrl: "https://maps.app.goo.gl/kPjCzVdUT3u53PmD8",
      },
      {
        name: "Coffee Roasters Intz48 Azores",
        description:
          "They roast the coffee on-site — and it shows in the cup. The banana bread and pastries are made in-house too. Come for breakfast, stay for lunch and let the pizzas surprise you. One of those places you end up returning to every day.",
        mapsUrl: "https://maps.app.goo.gl/jdmAM6Jwxh9pNypg9",
      },
      {
        name: "AMOR.A Cake & Coffee",
        description:
          "For the afternoon when only cake and a good coffee will do. A sweet, unhurried stop that pairs well with having absolutely nothing planned.",
        mapsUrl: "https://maps.app.goo.gl/ZJJXmypJ84br4Hqr5",
      },
      {
        name: "Louvre Michaelense",
        description:
          "A Ponta Delgada institution — one of those cafés that has been part of the city long enough to feel like the city itself. Sit inside, order a coffee and a pastel, and watch the morning go by.",
        mapsUrl: "https://maps.app.goo.gl/k3apHysetdF5ZCkc9",
      },
    ],
  },
  {
    id: "worth-the-occasion",
    name: "Worth the Occasion",
    tagline: "For the evening that deserves a little ceremony — reserve ahead, dress slightly better, savour slowly.",
    restaurants: [
      {
        name: "Tasquinha Vieira",
        description:
          "Joel, the chef and owner, has cooked across the world and brought all of it home. A set course menu built on creativity, precision, and a deep respect for the island's ingredients. One of those meals you talk about on the flight back.",
        mapsUrl: "https://maps.app.goo.gl/C1WYk7Wgk7sxcxUD8",
      },
      {
        name: "Õtaka",
        description:
          "Widely considered the finest table on São Miguel. If you are going to sit down to one serious dinner on the island, let it be here. Reserve well in advance.",
        mapsUrl: "https://maps.app.goo.gl/xdJijE8QZcUuhC2F8",
      },
      {
        name: "Petiscaria \"O Calheta\"",
        description:
          "A new arrival that is already earning devoted regulars at remarkable speed. The concept is sharing starters — interactive, generous, and driven by a team that clearly loves what they do. Local in spirit, ambitious in execution.",
        mapsUrl: "https://maps.app.goo.gl/H6rXAQoDRfockyKH6",
      },
    ],
  },
];
