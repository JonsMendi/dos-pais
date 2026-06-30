// Beach recommendations for Dos Pais guests.
// These are personal suggestions from the family — offered with affection, not authority.

export type Beach = {
  name: string;
  description: string;
  mapsUrl: string;
  /** Optional practical tip shown in a highlighted block. */
  tip?: string;
};

export const beaches: Beach[] = [
  {
    name: "Praia do Lombo Gordo",
    description:
      "My family has been born and raised in Nordeste for generations — this is where we belong, and where I had to begin. Remote, unhurried, and completely unbothered by tourism. Come in the morning, when the light on the cliffs is at its best. The sun moves behind them after 4pm, so plan your day accordingly.",
    tip: "No beach bar nearby — bring snacks, water and some fruit. The isolation is the point.",
    mapsUrl: "https://maps.app.goo.gl/oik4gqKfWFvuPTCo9",
  },
  {
    name: "Praia dos Moinhos",
    description:
      "One of my personal favourites. A beautiful stretch of coast with Os Moinhos snack bar just steps away — worth stopping for lunch even if you're not staying for the afternoon.",
    mapsUrl: "https://maps.app.goo.gl/4QjggAqU7MNVGANf6",
  },
  {
    name: "Praia de Água d'Alto",
    description:
      "A generous, well-equipped beach with a snack bar attached. Reliable, comfortable, and great for longer days — one of the south coast's most consistent choices for families.",
    mapsUrl: "https://maps.app.goo.gl/Hv977dzDMvxqqmy88",
  },
  {
    name: "Ilhéu de Vila Franca",
    description:
      "A volcanic islet just offshore from Vila Franca do Campo, with a natural pool formed inside the crater rim. You reach it by a short boat trip from the village. Numbers are limited each day — book your spot ahead.",
    tip: "Reserve the boat crossing in advance, especially in July and August.",
    mapsUrl: "https://maps.app.goo.gl/wTtpmpbGpgL9CaXU8",
  },
  {
    name: "Praia do Degredo",
    description:
      "Not well known, which is exactly why I love it. Quiet, characterful, and rarely crowded. On your way back, stop at O Lagoinha — a local bar famous for their draft beer that is always alive, always cold, and always full of bubbles.",
    tip: "Don't leave without a fino at O Lagoinha. The draft here is always alive — the locals say the glass is never truly empty.",
    mapsUrl: "https://maps.app.goo.gl/zwG2n5uTH62Uhejn7",
  },
  {
    name: "Praia das Milícias",
    description:
      "Close to the city and always dependable. The surf scene gives it a gentle energy, and BB Bar Bruno is right there for a cold draft beer when the afternoon has done its work.",
    mapsUrl: "https://maps.app.goo.gl/C5EqDMqSqoNsJWL99",
  },
  {
    name: "Praia do Pópulo",
    description:
      "A solid, comfortable beach a short drive from Ponta Delgada. Good for a relaxed afternoon when the city feels too warm and the sea sounds like the right answer.",
    mapsUrl: "https://maps.app.goo.gl/ZwCxDpVnGxbYvK638",
  },
  {
    name: "Praia do Areal de Santa Bárbara",
    description:
      "The island's main surf beach and home to serious competitions. Even if you don't surf, it is worth coming just to watch the Atlantic come in from the north. The energy here is unlike anywhere else on the island.",
    mapsUrl: "https://maps.app.goo.gl/UFUZQpSXzowJ75LM9",
  },
  {
    name: "Praia do Fogo",
    description:
      "In Ribeira Quente, further from Ponta Delgada but widely considered one of the finest beaches on the island. Small, beautiful, and calm. If you are heading to Furnas or Povoação, it is an easy stop you will not regret.",
    mapsUrl: "https://maps.app.goo.gl/8JFMrZxchXAThL4b9",
  },
];
