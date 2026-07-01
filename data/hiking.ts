// Hiking trail recommendations for Dos Pais guests.
// Personal picks — offered with affection, not authority.
// All trail links point to AllTrails.

export type Trail = {
  name: string;
  description: string;
  trailUrl: string;
  /** Optional practical tip shown in a highlighted block. */
  tip?: string;
};

export const trails: Trail[] = [
  {
    name: "Janela do Inferno — Rota da Água",
    description:
      "Through levadas and laurisilva forest, with the sound of water the whole way. The trail ends at a waterfall framed by volcanic rock — the 'Window of Hell' earns its name in the best possible sense. The forest here is old, dense, and smells extraordinary.",
    trailUrl:
      "https://www.alltrails.com/trail/portugal/azores/prc37-smi-rota-da-agua-janela-do-inferno",
  },
  {
    name: "Sete Cidades — Rota Circular",
    description:
      "The ridge trail around Sete Cidades gives you the full picture: both crater lakes visible at once, the Atlantic on the horizon, and the kind of silence that makes you understand why people come here. Longer than it looks on a map.",
    tip: "Start early. The views from the rim are best in the morning before the cloud comes in.",
    trailUrl:
      "https://www.alltrails.com/trail/portugal/azores/rota-circular-da-lagoa-das-sete-cidades",
  },
  {
    name: "Salto do Prego",
    description:
      "A short walk into the valley at Faial da Terra leads to a waterfall you can swim under. Very popular, and for good reason. The trail itself is beautiful — go early or late to avoid the midday crowd.",
    trailUrl:
      "https://www.alltrails.com/trail/portugal/azores/salto-do-prego-waterfall-trail",
  },
  {
    name: "Boca do Inferno",
    description:
      "A trail through rugged coastal landscape to a dramatic cliff viewpoint above the Atlantic. The name suggests drama and the view delivers. Short enough to fit comfortably before or after lunch at Nordeste.",
    trailUrl:
      "https://www.alltrails.com/trail/portugal/azores/rota-do-miradouro-da-boca-do-inferno",
  },
  {
    name: "Quatro Fábricas da Luz",
    description:
      "An unusual trail in the north of the island that passes four old hydroelectric stations through dense forest and alongside levadas. Quieter than the famous trails, and all the better for it. The kind of walk that makes you feel like you've found something.",
    trailUrl:
      "https://www.alltrails.com/trail/portugal/azores/pr39-smi-quatro-fabricas-da-luz",
  },
  {
    name: "Pico da Vara",
    description:
      "The highest point on São Miguel, at 1,103 metres. The trail climbs through dense laurisilva forest — ancient, moss-covered, and home to the Priolo, the critically endangered Azores Bullfinch found almost nowhere else on earth. The summit, when you can see it, rewards every step.",
    tip: "Check the weather carefully before you go. The peak is frequently lost in cloud, and the summit view can disappear completely. A clear morning is not guaranteed — but when it comes, it is worth everything.",
    trailUrl: "https://maps.app.goo.gl/c6XNF4B3VdVhzG6j9",
  },
];
