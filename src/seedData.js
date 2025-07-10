export const bodyParts = [
  { id: "bp1", name: "Prsa", description: "Svalová partie hrudníku" },
  { id: "bp2", name: "Záda", description: "Svalová partie zad" },
  { id: "bp3", name: "Ramena", description: "Svalová partie ramen" },
];

export const exercises = [
  {
    id: "ex1",
    name: "Bench press",
    description: "Tlaky s velkou činkou na lavici",
    bodyPartIds: ["bp1"],
    stationIds: ["st1"],
  },
  {
    id: "ex2",
    name: "Přítahy na hrazdě",
    description: "Shyby na hrazdě nadhmatem",
    bodyPartIds: ["bp2"],
    stationIds: ["st2"],
  },
  {
    id: "ex3",
    name: "Tlaky nad hlavu",
    description: "Ramenní tlaky s velkou činkou",
    bodyPartIds: ["bp3"],
    stationIds: ["st3"],
  },
];

export const stations = [
  {
    id: "st1",
    name: "Bench lavice",
    description: "Lavice na bench press",
    exerciseIds: ["ex1"],
  },
  {
    id: "st2",
    name: "Hrazda",
    description: "Konstrukce pro shyby",
    exerciseIds: ["ex2"],
  },
  {
    id: "st3",
    name: "Multipress",
    description: "Stroj pro tlaky nad hlavu",
    exerciseIds: ["ex3"],
  },
];