// ponytail: route hardcoded — one fixed birthday route, no CMS needed.
export type Step = {
  dist: string; // short heading, e.g. "~180 m · 2 Min"
  mode: string; // "zu Fuß" | "Uber" | …
  items: string[]; // einzelne Wegbeschreibungs-Schritte
};

export const steps: Step[] = [
  {
    dist: "~180 m · 2 Min",
    mode: "zu Fuß",
    items: [
      "Auf der Rua da Sociedade Farmacêutica bleiben, Richtung höhere Hausnummern.",
      "Manifest liegt nach ~180 m auf derselben Straßenseite bei Nr. 31.",
    ],
  },
  {
    dist: "~850 m · ~12 Min · bergauf",
    mode: "zu Fuß",
    items: [
      "Vom Manifest nach Westen zum Park gehen.",
      "Auf das obere (nördliche) Ende des Parque Eduardo VII zuhalten, oberhalb der formalen Buchsbaum-Gärten.",
      "Entlang der oberen Parkkante (Rua Marquês de Fronteira) nach Westen — es geht spürbar bergauf.",
      "Bis du an der Aussichtsterrasse oben am Park stehst. Klassischer Blick die Parkachse hinunter bis zum Tejo.",
    ],
  },
  {
    dist: "~200 m · ~3 Min",
    mode: "zu Fuß",
    items: [
      "Die Estufa Fria liegt direkt unterhalb und etwas westlich der Aussichtsterrasse, an der NW-Ecke des Parks.",
      "Von der Terrasse den Weg nach unten/links zum Eingang des Gewächshauses nehmen.",
    ],
  },
  {
    dist: "~1,9 km · ~25 Min · bergab",
    mode: "zu Fuß",
    items: [
      "Vom Park bergab nach Süden durch den Parque Eduardo VII — mittig über die Promenade oder seitlich an den Hecken.",
      "Bis ganz unten zum Kreisverkehr Marquês de Pombal (großer Kreisel mit Statue).",
      "Den Kreisel umrunden und auf den Beginn der Avenida da Liberdade wechseln.",
      "Immer geradeaus die baumgesäumte Avenida da Liberdade hinunter (Süden) bis zur Praça dos Restauradores.",
    ],
  },
  {
    dist: "~1,0 km · ~14 Min",
    mode: "zu Fuß",
    items: [
      "Von der Praça dos Restauradores geradeaus weiter nach Süden.",
      "Nach ~250 m geht der Platz in den Rossio (Praça D. Pedro IV) über — überqueren.",
      "Ins Schachbrett-Raster der Baixa eintreten: die Rua Augusta (Fußgängerzone, unter dem Arco da Rua Augusta hindurch).",
      "Schnurgerade nach Süden bis zur Praça do Comércio am Fluss.",
    ],
  },
  {
    dist: "~18 km · Uber",
    mode: "Überraschung 🎁",
    items: [
      "Bestell einen Uber über die Ponte 25 de Abril nach Costa da Caparica.",
      "Lass dich überraschen, wo es hingeht. 😉",
    ],
  },
  {
    dist: "~12 km · ~20 Min",
    mode: "Uber 🚗",
    items: [
      "Von der Surfschule mit dem Uber zum Cristo Rei.",
      "Picknick mit Blick über die Brücke und Lissabon (Martin bringt alles mit).",
    ],
  },
  {
    dist: "~1,2 km · ~15 Min · bergab",
    mode: "zu Fuß",
    items: [
      "Vom Cristo Rei bergab entlang der Av. do Cristo Rei zum Flussufer beim Jardim do Rio (oder 5-Min-Uber).",
      "Schöner Sonnenuntergangs-Spot.",
    ],
  },
  {
    dist: "Fähre oder Uber",
    mode: "Rückweg",
    items: [
      "Zurück über den Fluss zur Rua da Sociedade Farmacêutica 12A.",
      "Option A: Fähre ab Cacilhas (~10 Min Fußweg) nach Cais do Sodré, dann Metro/Uber — schön, umgeht Brückenverkehr.",
      "Option B: Uber über die Brücke, ~25–30 Min.",
    ],
  },
];
