// Natural pool recommendations for Dos Pais guests.
// These are personal suggestions from the family — offered with affection, not authority.
// Note: many of São Miguel's "natural pools" have been improved with steps, ladders and
// platforms over the years — they are still fed by the Atlantic and volcanic rock.

export type NaturalPool = {
  name: string;
  description: string;
  mapsUrl: string;
  /** Optional practical tip shown in a highlighted block. */
  tip?: string;
};

export const naturalPools: NaturalPool[] = [
  {
    name: "Ponta da Ferraria",
    description:
      "Where the volcanic hot spring meets the open Atlantic. The temperature shifts as the tide moves in and out — you find your spot, you stay in it. One of the most distinctive places on the island. It can get busy in summer, but it earns the visit.",
    mapsUrl: "https://maps.app.goo.gl/ucFKQG17Df1zKg989",
  },
  {
    name: "Porto de Pesca Corretora",
    description:
      "My favourite on the island. In São Roque, away from the main tourist routes — the water is clear, the rocks are good, and most days it stays pleasantly quiet. A reward for those who look for it.",
    mapsUrl: "https://maps.app.goo.gl/Q1ehoFtDpTTRkBXa7",
  },
  {
    name: "Piscinas do Pesqueiro",
    description:
      "A bit busier by local standards, but well-located and easy to reach. Good for a quick swim when you're passing through and the Atlantic is calling. Practical and reliable.",
    mapsUrl: "https://maps.app.goo.gl/Z77qzKt8Vq2zqruT6",
  },
  {
    name: "Piscinas Naturais de Santo António",
    description:
      "A solid, pleasant option that delivers exactly what it promises — good water, good setting, no surprises. A dependable choice for an afternoon in the sea.",
    mapsUrl: "https://maps.app.goo.gl/odUXtRwZQaW16qhS6",
  },
  {
    name: "Cascata do Segredo",
    description:
      "Strictly speaking, a waterfall — but too beautiful to leave off the list. If you are heading to or from Água d'Alto, make the short detour. The name means 'Waterfall of the Secret', and it earns it.",
    tip: "Combine with a swim at Praia de Água d'Alto nearby for a full afternoon.",
    mapsUrl: "https://maps.app.goo.gl/s7bFk7gMg5rTiMbe8",
  },
  {
    name: "Piscina Natural da Boca da Ribeira",
    description:
      "I was born near here, so I am not entirely objective. It has been criticised for collecting sea debris — which is fair. But when I am standing here, all I see is the place where I grew up. If you are in Nordeste, stop by and form your own opinion.",
    mapsUrl: "https://maps.app.goo.gl/",
  },
  {
    name: "Poças de Atalhada",
    description:
      "Well kept and easy to reach in Lagoa. A good afternoon looks like this: swim here first, then head over to Ondas do Mar nearby for starters, a cold drink, and whatever the sunset decides to do.",
    mapsUrl: "https://maps.app.goo.gl/Z8Q5b9AcvuZLJL5v8",
  },
];
