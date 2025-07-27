export const bodyParts = [
  { id: "bp1", name: "Prsa", description: "Svalová partie hrudníku" },
  { id: "bp2", name: "Záda", description: "Svalová partie zad" },
  { id: "bp3", name: "Ramena", description: "Svalová partie ramen" },
  { id: "bp4", name: "Biceps", description: "Svalová partie paží - biceps" },
  { id: "bp5", name: "Triceps", description: "Svalová partie paží - triceps" },
  { id: "bp6", name: "Nohy", description: "Dolní končetiny - stehna, lýtka, hýždě" }
];

export const stations = [
  {
    id: "st1",
    name: "Posilovací stroj záda (stahy)",
    description: "Stroj na stahování kladky na záda",
    exerciseIds: ["ex1", "ex2"]
  },
  {
    id: "st2",
    name: "Seated Machine Row",
    description: "Stroj na veslování v sedě",
    exerciseIds: ["ex3"]
  },
  {
    id: "st3",
    name: "Strengthening Tower - Pro Multipress",
    description: "Univerzální věž s multipressem, kladkami a lavicí",
    exerciseIds: ["ex4", "ex5", "ex6", "ex7", "ex8", "ex9", "ex10", "ex11"]
  },
  {
    id: "st4",
    name: "Stroj pro extenze zad",
    description: "Stroj pro hyperextenze zad",
    exerciseIds: ["ex12"]
  },
  {
    id: "st5",
    name: "Bench Press",
    description: "Lavice pro benchpress",
    exerciseIds: ["ex13"]
  },
  {
    id: "st6",
    name: "Jednoruční činky",
    description: "Činky pro izolované cviky",
    exerciseIds: ["ex14", "ex15", "ex16", "ex17", "ex18", "ex19"]
  },
  {
    id: "st7",
    name: "Bradla",
    description: "Stanoviště pro kliky na bradlech (dipy)",
    exerciseIds: ["ex20"]
  }
];

export const exercises = [
  { id: "ex1", name: "Stahování kladky nadhmatem", description: "Lat Pulldown pro široký sval zádový", primaryBodyPartId: "bp2", secondaryBodyPartIds: ["bp4"], stationIds: ["st1"] },
  { id: "ex2", name: "Stahování kladky podhmatem", description: "Lat Pulldown pro biceps a záda", primaryBodyPartId: "bp2", secondaryBodyPartIds: ["bp4"], stationIds: ["st1"] },
  { id: "ex3", name: "Veslování v sedě", description: "Seated Row pro střední záda a biceps", primaryBodyPartId: "bp2", secondaryBodyPartIds: ["bp4"], stationIds: ["st2"] },
  { id: "ex4", name: "Bicepsový zdvih s kladkou", description: "Cable Curl pro biceps", primaryBodyPartId: "bp4", secondaryBodyPartIds: [], stationIds: ["st3"] },
  { id: "ex5", name: "Tricepsové stahování kladky", description: "Cable Pushdown pro triceps", primaryBodyPartId: "bp5", secondaryBodyPartIds: [], stationIds: ["st3"] },
  { id: "ex6", name: "Tlaky nad hlavu s multipressem", description: "Ramenní tlaky na multipressu", primaryBodyPartId: "bp3", secondaryBodyPartIds: ["bp5", "bp1"], stationIds: ["st3"] },
  { id: "ex7", name: "Dřepy s multipressem", description: "Barbell Squats na multipressu", primaryBodyPartId: "bp6", secondaryBodyPartIds: [], stationIds: ["st3"] },
  { id: "ex8", name: "Výpony na lýtka", description: "Calf Raises na multipressu", primaryBodyPartId: "bp6", secondaryBodyPartIds: [], stationIds: ["st3"] },
  { id: "ex9", name: "Přítahy k bradě s kladkou", description: "Upright Row pro ramena a trapézy", primaryBodyPartId: "bp3", secondaryBodyPartIds: ["bp2"], stationIds: ["st3"] },
  { id: "ex10", name: "Tlaky na šikmé lavici s multipressem", description: "Incline Press pro horní část prsou", primaryBodyPartId: "bp1", secondaryBodyPartIds: ["bp3", "bp5"], stationIds: ["st3"] },
  { id: "ex11", name: "Mrtvý tah", description: "Deadlift pro záda, hamstringy a hýždě", primaryBodyPartId: "bp2", secondaryBodyPartIds: ["bp6"], stationIds: ["st3"] },
  { id: "ex12", name: "Hyperextenze", description: "Back Extension pro spodní záda", primaryBodyPartId: "bp2", secondaryBodyPartIds: [], stationIds: ["st4"] },
  { id: "ex13", name: "Bench Press", description: "Tlaky s velkou činkou na lavici", primaryBodyPartId: "bp1", secondaryBodyPartIds: ["bp5", "bp3"], stationIds: ["st5"] },
  { id: "ex14", name: "Bicepsový zdvih s jednoručkami", description: "Dumbbell Bicep Curl", primaryBodyPartId: "bp4", secondaryBodyPartIds: [], stationIds: ["st6"] },
  { id: "ex15", name: "Kladivový zdvih", description: "Hammer Curl pro biceps a předloktí", primaryBodyPartId: "bp4", secondaryBodyPartIds: [], stationIds: ["st6"] },
  { id: "ex16", name: "Francouzský tlak jednoručkami", description: "Overhead Dumbbell Tricep Extension", primaryBodyPartId: "bp5", secondaryBodyPartIds: ["bp3"], stationIds: ["st6"] },
  { id: "ex17", name: "Tlaky na šikmé lavici s jednoručkami", description: "Incline Dumbbell Press pro horní prsa", primaryBodyPartId: "bp1", secondaryBodyPartIds: ["bp3"], stationIds: ["st6"] },
  { id: "ex18", name: "Rozpažování s jednoručkami", description: "Lateral Raises pro ramena", primaryBodyPartId: "bp3", secondaryBodyPartIds: [], stationIds: ["st6"] },
  { id: "ex19", name: "Koncentrovaný bicepsový zdvih", description: "Concentration Curl pro biceps", primaryBodyPartId: "bp4", secondaryBodyPartIds: [], stationIds: ["st6"] },
  { id: "ex20", name: "Kliky na bradlech (dipy)", description: "Dips pro triceps a dolní část prsou", primaryBodyPartId: "bp5", secondaryBodyPartIds: ["bp1"], stationIds: ["st7"] }
];