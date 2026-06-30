import type { Translations } from "../types";

export const de: Translations = {
  nav: {
    home: "Start",
    apartment: "Apartment",
    explore: "Entdecken",
    guide: "Gastführer",
    contact: "Kontakt",
    stayWithUs: "Bei uns bleiben",
  },
  hero: {
    location: "Ponta Delgada · São Miguel · Azoren",
    tagline: "Ein Ort zum Entschleunigen.",
    body: "Ein ruhiges Apartment am Rande des Atlantiks, warmgehalten von der Familie und dem langsamen Rhythmus der Insel.",
    ctaExplore: "Entdecken",
    ctaApartment: "Das Apartment ansehen",
  },
  apartment: {
    eyebrow: "Das Apartment",
    title: "Ein ruhiges Zuhause, so wie wir es hinterlassen haben.",
    body1:
      "Dos Pais wurde von unseren Eltern eröffnet, in einem Gebäude, das sie seit Jahrzehnten lieben. Leinen auf dem Bett, Kaffee auf dem Herd und Licht, das im Tagesverlauf durch die Räume wandert. Nicht mehr und nicht weniger.",
    body2:
      "Zwei Schlafzimmer, ein gemütliches Wohnzimmer und ein Balkon mit Blick auf den Hafen. Gemacht für lange Morgen, gemächliche Mahlzeiten und Aufenthalte, die sich nicht gehetzt anfühlen.",
    cta: "Apartment ansehen",
    whatsInside: "Ausstattung",
    amenities: [
      "Schnelles WLAN",
      "Vollausgestattete Küche",
      "Meerblick",
      "Kaffeemaschine",
      "Privater Parkplatz",
      "Balkon",
    ],
  },
  explore: {
    eyebrow: "São Miguel entdecken",
    title: "Eine Insel für langsame Tage.",
    description:
      "Eine kleine, persönliche Auswahl, die Ihnen hilft, in den Rhythmus der Insel einzutauchen — von der Küste über die Kraterseen bis zu den langen Tischen am Meer. Alle Empfehlungen werden mit Zuneigung gegeben, nicht mit Autorität.",
    cards: [
      {
        title: "Restaurants",
        description:
          "Ruhige Tische, gemächliche Mittagessen und Meeresfrüchte vom Morgensfang.",
      },
      {
        title: "Strände",
        description:
          "Schwarzer Sand, versteckte Buchten und warme Nachmittage am Atlantik.",
      },
      {
        title: "Naturbecken",
        description:
          "Vulkangestein, klare Gezeitenbecken und der Rhythmus des Meeres.",
      },
      {
        title: "Aktivitäten",
        description:
          "Von Kajak bis Keramik, von der Walbeobachtung bis zum Canyoning — sanfte und nicht ganz so sanfte Wege, einen Inseltag zu füllen.",
      },
      {
        title: "Wandern",
        description:
          "Wolkenwälder, Kraterseen und Pfade, die nach Eukalyptus duften.",
      },
      {
        title: "Aussichtspunkte",
        description:
          "Ruhige Miradouros, wo sich die Insel in Grün und Blau entfaltet.",
      },
    ],
  },
  recommendations: {
    eyebrow: "Empfehlungen",
    title: "Ein paar Lieblinge, von Hand aufgeschrieben.",
    description:
      "Die Art von Orten, zu denen wir unsere eigenen Freunde schicken — ruhig, ehrlich und den kleinen Umweg wert.",
    cta: "Alle Empfehlungen",
    items: [
      {
        title: "A Tasca",
        category: "Restaurant",
        description:
          "Ehrliche Inselküche in einem kleinen Speisesaal, zwei Straßen vom Hafen entfernt.",
      },
      {
        title: "Lagoa do Fogo",
        category: "Aktivität",
        description:
          "Ein blauer Kratersee, versteckt in den Wolken. Am besten früh erreichen, vor dem Wind.",
      },
      {
        title: "Strand Mosteiros",
        category: "Strand",
        description:
          "Schwarzer Sand und Gezeitenbecken, eingerahmt von vier Basaltfelsen im Meer.",
      },
      {
        title: "Café do Porto",
        category: "Café",
        description:
          "Eine lange Marmorbar, eine einzige Espressomaschine und die Morgenzeitung.",
      },
      {
        title: "Ponta da Ferraria",
        category: "Sonnenuntergang",
        description:
          "Wo heiße Quellen auf den Atlantik treffen. Bleiben Sie, bis die Sonne das Meer berührt.",
      },
    ],
  },
  map: {
    eyebrow: "Die Insel auf einen Blick",
    title: "Alles, was wir lieben, auf einer Karte.",
    description:
      "Ein einfacher Leitfaden zu den Ecken von São Miguel, zu denen wir immer wieder zurückkehren, mit dem Apartment im Mittelpunkt.",
    cta: "Karte öffnen",
  },
  weather: {
    eyebrow: "Wetter auf der gesamten Insel",
    title: "Das Wetter auf den Azoren liebt es, uns zu überraschen.",
    description:
      "Sonnenschein, Nebel und Regen können zur gleichen Zeit in verschiedenen Ecken von São Miguel auftreten. Schauen Sie sich kurz auf der Insel um und lassen Sie den heutigen Tag entscheiden, wo Ihr Abenteuer beginnt.",
    bestToday: "Heute empfohlen",
    viewCamera: "Live-Kamera ansehen",
    statCondition: "Zustand",
    statHumidity: "Luftfeuchtigkeit",
    statWind: "Wind",
    currentBody:
      "Ein sanfter Inseltag. Leichte Brise aus dem Norden, leichte Bewölkung am späten Nachmittag.",
  },
  guide: {
    eyebrow: "Gastführer",
    title: "Alles, was Sie brauchen, übersichtlich zusammengestellt.",
    description:
      "Eine kleine, ruhige Mappe mit den Dingen, die Sie nach Ihrer Ankunft wissen möchten — vom WLAN-Passwort bis zur nächsten Apotheke.",
    items: [
      { title: "WLAN", description: "Netzwerkname und Passwort für das Apartment." },
      { title: "Check-in", description: "Wie Sie den Schlüssel finden und sich gemütlich einrichten." },
      { title: "Check-out", description: "Ein einfacher Abschied, kein Stress beim Gehen." },
      { title: "Notfall", description: "Lokale Notrufnummern, immer griffbereit." },
      { title: "Taxi", description: "Vertrauenswürdige Fahrer, Tag und Nacht." },
      { title: "Flughafen", description: "An- und Abreise vom Flughafen João Paulo II." },
      { title: "Supermärkte", description: "Wo Sie gutes Brot, Käse und Wein finden." },
      { title: "Apotheke", description: "Nächste Apotheken und Wochenenddienste." },
      { title: "Krankenhaus", description: "Hospital do Divino Espírito Santo, ganz in der Nähe." },
      { title: "Hausregeln", description: "Ein paar sanfte Hinweise, um das Zuhause ruhig zu halten." },
    ],
  },
  testimonials: {
    eyebrow: "Von unseren Gästen",
    title: "Stille Notizen, beim Check-out hinterlassen.",
    items: [
      {
        quote:
          "Wir kamen für vier Nächte und blieben neun. Jeder Morgen begann auf dem Balkon, mit Kaffee und dem Klang des Hafens.",
        author: "Ein Gast aus Kopenhagen",
      },
      {
        quote:
          "Es fühlt sich nicht wie eine Miete an. Es fühlt sich wie ein Zuhause an, das auf Sie gewartet hat.",
        author: "Ein Gast aus Lissabon",
      },
      {
        quote:
          "Das Licht am Ende des Tages ist die Art von Sache, an die man sich Jahre später erinnert. Wir planen bereits die Rückkehr.",
        author: "Ein Gast aus Brooklyn",
      },
    ],
  },
  footer: {
    tagline:
      "Ein kleines Apartment in Ponta Delgada, mit Liebe von einer Familie eröffnet, für die Menschen, die auf São Miguel entschleunigen kommen.",
    columns: [
      {
        title: "Aufenthalt",
        links: ["Das Apartment", "Ausstattung", "Verfügbarkeit", "Hausregeln"],
      },
      {
        title: "São Miguel",
        links: ["Entdecken", "Empfehlungen", "Karte", "Wetter"],
      },
      {
        title: "Gäste",
        links: ["Check-in", "Gastführer", "Lokale Hilfe", "Kontakt"],
      },
    ],
    copyright: "Dos Pais · Ponta Delgada, São Miguel",
    privacy: "Datenschutz",
    terms: "Nutzungsbedingungen",
  },
  restaurantsPage: {
    backLabel: "Zurück zu Entdecken",
    eyebrow: "Essen auf São Miguel",
    title: "Wo man isst — und warum.",
    description:
      "Die Insel produziert, was sie isst. Rindfleisch von den grünen Weiden, Fisch vom Morgensmeer, Käse von den Bergfarmen. Das sind die Orte, die wir unseren Gästen empfehlen — sortiert nicht nach Sternen, sondern nach Stimmung.",
    mapsButton: "In Maps öffnen",
  },
  beachesPage: {
    backLabel: "Zurück zu Entdecken",
    eyebrow: "Strände auf São Miguel",
    title: "Ins Wasser.",
    description:
      "Die Strände von São Miguel sind so vielfältig wie das Wetter. Als Faustregel gilt: Die Südseite ist in der Regel ruhiger und geschützter, während der Norden dem offenen Atlantik zugewandt ist und lebhaftere Wellen empfängt. Dennoch folgt keine der Seiten konsequent ihren eigenen Regeln. Dies sind unsere persönlichen Lieblinge, ohne Rangfolge geteilt.",
    mapsButton: "In Maps öffnen",
    tipLabel: "Gut zu wissen",
  },
  naturalPoolsPage: {
    backLabel: "Zurück zu Entdecken",
    eyebrow: "Naturbecken auf São Miguel",
    title: "Ins Felsenbecken.",
    description:
      "Die Naturbecken von São Miguel sind in Vulkangestein gemeisselt und werden vom Atlantik gespeist. Viele wurden im Laufe der Jahre mit Stufen, Leitern und Plattformen ausgebaut — was sie zugänglicher macht, wenn auch etwas weniger wild. Sie sind es dennoch absolut wert. Dies sind unsere persönlichen Lieblinge.",
    mapsButton: "In Maps öffnen",
    tipLabel: "Gut zu wissen",
  },
  activitiesPage: {
    backLabel: "Zurück zu Entdecken",
    eyebrow: "Aktivitäten auf São Miguel",
    title: "Eine Insel mit viel zu erleben.",
    description:
      "Vom offenen Atlantik bis zu den Kraterseen — São Miguel belohnt jeden, der das Apartment verlässt. Diese Aktivitäten sind den Tag wert: eine persönliche Kurzliste, kein vollständiger Reiseführer.",
    mapsButton: "Finden",
    tipLabel: "Gut zu wissen",
  },
};
