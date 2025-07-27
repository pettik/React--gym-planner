
export const bodyParts = [
  { id: "bp1", name: "Prsa" },
  { id: "bp2", name: "Záda" },
  { id: "bp3", name: "Ramena" },
  { id: "bp4", name: "Biceps" },
  { id: "bp5", name: "Triceps" },
  { id: "bp6", name: "Nohy" },
  { id: "bp7", name: "Břicho" }
];

export const stations = [
  { id: "st1", name: "Benchpress lavice", description: "Lavice pro bench press", exerciseIds: ["ex1", "ex2"] },
  { id: "st2", name: "Stahování kladky na záda", description: "Horní kladka", exerciseIds: ["ex3"] },
  { id: "st3", name: "Pec Deck", description: "Izolovaný stroj na prsa", exerciseIds: ["ex4"] },
  { id: "st4", name: "Bradla", description: "Cviky s vlastní vahou", exerciseIds: ["ex5"] },
  { id: "st5", name: "Multipress", description: "Univerzální stroj s vedenou osou", exerciseIds: ["ex6", "ex7"] },
  { id: "st6", name: "Lavice + činky", description: "Jednoručky + lavice", exerciseIds: ["ex8", "ex9"] },
  { id: "st7", name: "Hrazda", description: "Pro shyby", exerciseIds: ["ex10"] },
  { id: "st8", name: "Rovná podložka", description: "Na břicho a leh-sedy", exerciseIds: ["ex11"] }
];

export const exercises = [
  { id: "ex1", name: "Benchpress", description: "Tlaky s velkou činkou na prsa", primaryBodyPartId: "bp1", secondaryBodyPartIds: ["bp5", "bp3"], stationIds: ["st1"] },
  { id: "ex2", name: "Close-grip bench", description: "Úzký úchop, zaměření na triceps", primaryBodyPartId: "bp5", secondaryBodyPartIds: ["bp1"], stationIds: ["st1"] },
  { id: "ex3", name: "Stahování kladky", description: "Na široký zádový sval", primaryBodyPartId: "bp2", secondaryBodyPartIds: ["bp4"], stationIds: ["st2"] },
  { id: "ex4", name: "Pec Deck", description: "Izolovaný cvik na prsa", primaryBodyPartId: "bp1", secondaryBodyPartIds: [], stationIds: ["st3"] },
  { id: "ex5", name: "Kliky na bradlech", description: "Váha vlastního těla", primaryBodyPartId: "bp5", secondaryBodyPartIds: ["bp1"], stationIds: ["st4"] },
  { id: "ex6", name: "Tlaky nad hlavu s multipressem", description: "Ramena a triceps", primaryBodyPartId: "bp3", secondaryBodyPartIds: ["bp5"], stationIds: ["st5"] },
  { id: "ex7", name: "Dřepy v multipressu", description: "Kvadricepsy", primaryBodyPartId: "bp6", secondaryBodyPartIds: [], stationIds: ["st5"] },
  { id: "ex8", name: "Tlaky s jednoručkami", description: "Horní část prsou", primaryBodyPartId: "bp1", secondaryBodyPartIds: ["bp3"], stationIds: ["st6"] },
  { id: "ex9", name: "Bicepsový zdvih", description: "Jednoručky na biceps", primaryBodyPartId: "bp4", secondaryBodyPartIds: [], stationIds: ["st6"] },
  { id: "ex10", name: "Shyby", description: "Na záda a biceps", primaryBodyPartId: "bp2", secondaryBodyPartIds: ["bp4"], stationIds: ["st7"] },
  { id: "ex11", name: "Sklapovačky", description: "Břicho bez závaží", primaryBodyPartId: "bp7", secondaryBodyPartIds: [], stationIds: ["st8"] }
];
