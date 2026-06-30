// Activity recommendations for Dos Pais guests.
// Personal picks — offered with affection, not authority.

export type ActivityProvider = {
  name: string;
  mapsUrl: string;
};

export type Activity = {
  name: string;
  description: string;
  providers: ActivityProvider[];
  /** Optional practical tip shown in a highlighted block. */
  tip?: string;
};

export const activities: Activity[] = [
  {
    name: "Whale Watching",
    description:
      "A must on São Miguel, and one of the best places in the world to do it. I went with Futurismo — mornings on the open Atlantic, in the respectful company of the giants. It stays with you.",
    providers: [{ name: "Futurismo", mapsUrl: "https://maps.app.goo.gl/JzVwKbKBQbv8kXk2A" }],
  },
  {
    name: "Canyoning",
    description:
      "São Miguel has exactly the terrain for it — narrow gorges, waterfalls, and volcanic rock that goes on forever. Azores Epic Adventures is the name that comes up most here, and deservedly so.",
    providers: [{ name: "Azores Epic Adventures", mapsUrl: "https://maps.app.goo.gl/Yg6tDPkfWGCsWqZa8" }],
  },
  {
    name: "SUP, Kayak & Bike at Sete Cidades",
    description:
      "If you're visiting Sete Cidades — and you should be — Futurismo rents boards, kayaks and bikes right on the crater lagoon. Gliding across that still water, surrounded by the crater walls, is one of those São Miguel moments.",
    providers: [{ name: "Futurismo @ Sete Cidades", mapsUrl: "https://maps.app.goo.gl/M2DF1RdX7FMruCBVA" }],
  },
  {
    name: "Kayak at Lagoa das Furnas",
    description:
      "The thermal lake at Furnas is otherworldly — geysers on the shore, mist on the water, the smell of sulphur in the air. You can rent a kayak near the park entrance and drift out onto it. Slow, strange, and completely beautiful.",
    tip: "Rental is near the Parque da Grená entrance, as far as I know — ask locally if you can't find it, it's not always well signposted.",
    providers: [{ name: "Parque da Grená", mapsUrl: "https://maps.app.goo.gl/iFWRjje6631bwRNS7" }],
  },
  {
    name: "Surf Lessons",
    description:
      "There is no shortage of surf schools along the coast. I haven't tried them all, so take this as an open suggestion — but both of these are names worth looking into if you want to get in the water with a board under your feet.",
    providers: [
      { name: "Black Sand Box", mapsUrl: "https://maps.app.goo.gl/eApKTMAccGnmsi5n8" },
      { name: "Azores Surf Club Watergliders", mapsUrl: "https://maps.app.goo.gl/PQ3UPH9XoeR3biS6A" },
    ],
  },
];
