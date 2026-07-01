// Viewpoint recommendations for Dos Pais guests.
// Personal picks — offered with affection, not authority.

export type Viewpoint = {
  name: string;
  description: string;
  mapsUrl: string;
  /** Optional practical tip shown in a highlighted block. */
  tip?: string;
};

export const viewpoints: Viewpoint[] = [
  {
    name: "Vista do Rei",
    description:
      "The most iconic view on the island, and it earns the reputation. From here you look directly down into the Sete Cidades caldera — both lakes at once, one green and one blue, the crater walls dropping away on all sides. It can get busy. Go anyway.",
    tip: "The light is better in the morning and the coach tours arrive mid-morning — earlier is quieter.",
    mapsUrl: "https://maps.app.goo.gl/oxfV51eyTQ64QZTK7",
  },
  {
    name: "Miradouro de Santa Iria",
    description:
      "On the north coast, above Faial — the cliffs drop straight to the Atlantic and the horizon goes on forever. On a clear day the scale of it is almost difficult to take in. One of the most dramatic coastal views on the island.",
    mapsUrl: "https://maps.app.goo.gl/8qhYNrwQeT2YPs878",
  },
  {
    name: "Miradouro da Ponta do Sossego",
    description:
      "In the east of the island, in the Nordeste area. A manicured garden of hydrangeas frames the view over the Atlantic — it sounds too pretty to be real, but it isn't. Peaceful, carefully tended, and genuinely beautiful.",
    mapsUrl: "https://maps.app.goo.gl/UwXmJD13HppZg69m7",
  },
  {
    name: "Miradouro da Ponta da Madrugada",
    description:
      "The name means 'Point of Dawn', and that tells you when to be here. The easternmost area of São Miguel, in Nordeste — the first light on the island arrives here. A sunrise from this point is something you will not easily forget.",
    tip: "Check sunrise times before you go — and bring a layer, it is cool before the sun is fully up.",
    mapsUrl: "https://maps.app.goo.gl/dqbDZAFmxTWAqu2e8",
  },
  {
    name: "Santuário de Nossa Senhora da Paz",
    description:
      "Near Vila Franca do Campo — a yellow baroque chapel on a green hill, reached by 365 steps (one for each day of the year, as the tradition goes). Panoramic views over the town, the coast, and the Ilhéu de Vila Franca beyond. Part pilgrimage, part miradouro, entirely worth the climb.",
    mapsUrl: "https://maps.app.goo.gl/vkMKJqbYsxBuBKd17",
  },
  {
    name: "Miradouro da Barrosa",
    description:
      "On the north coast, between Ponta Delgada and Ribeira Grande. Not as famous as some of the others, which is precisely the point. The green cliffs, the dark water, the quiet — this is the island without the itinerary.",
    mapsUrl: "https://maps.app.goo.gl/LTQwTaMNqS1bMcC47",
  },
  {
    name: "Miradouro da Grota do Inferno",
    description:
      "A viewpoint in the Sete Cidades caldera area with a different angle to Vista do Rei — deeper into the crater, more enclosed, more intimate. If you are already in Sete Cidades, it is well worth the short detour.",
    mapsUrl: "https://maps.app.goo.gl/8nRYVnU1FUsNp32P7",
  },
  {
    name: "Miradouro das Pedras Negras",
    description:
      "On the north coast — the name means 'black rocks', and the view lives up to it. Raw volcanic formations at the water's edge, the Atlantic breaking against them, the green of the cliff above. Elemental and a little wild.",
    mapsUrl: "https://maps.app.goo.gl/kMPAXxLEsVyZ6oZz8",
  },
  {
    name: "Miradouro da Vigia das Baleias",
    description:
      "A former whale-spotting station on the north coast. Before the boats, men called vigiadores would watch from these clifftop posts and signal to the whalers below. The whales are still out there. The view across the open Atlantic, with that history underneath it, is something else entirely.",
    mapsUrl: "https://maps.app.goo.gl/EukWUDni775iEDNh6",
  },
];
