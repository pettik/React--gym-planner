# Návrh datového modelu pro Gym Planner

Tento soubor definuje základní entity a jejich vztahy, které bude aplikace využívat.

---

## 1. Stanoviště (`Station`)
Reprezentuje konkrétní stroj nebo místo ve fitku, kde lze cvičit.

```typescript
type Station = {
  id: string;             // Unikátní identifikátor stanoviště
  name: string;           // Název stanoviště (např. "Multipress", "Bench lavice")
  description?: string;   // Volitelný popis stanoviště
  exerciseIds: string[];  // Pole ID cviků, které lze na stanovišti cvičit
}
```

---

## 2. Cvik (`Exercise`)
Jednotlivý cvik, který lze provádět na jednom nebo více stanovištích.

```typescript
type Exercise = {
  id: string;               // Unikátní identifikátor cviku
  name: string;             // Název cviku (např. "Bench press")
  description?: string;     // Volitelný popis cviku
  bodyPartIds: string[];    // Pole ID partii, které cvik procvičuje
  stationIds: string[];     // Pole ID stanovišť, kde lze cvik cvičit
}
```

---

## 3. Partie (`BodyPart`)
Svalová partie, kterou lze cvikem procvičit.

```typescript
type BodyPart = {
  id: string;             // Unikátní identifikátor partie
  name: string;           // Název partie (např. "Prsa", "Záda", "Ramena")
  description?: string;   // Volitelný popis partie
}
```

---

## 4. Trénink (`Workout`) [volitelné, pro budoucí rozšíření]
Vygenerovaný trénink na základě výběru partii.

```typescript
type Workout = {
  id: string;                  // Unikátní identifikátor tréninku
  targetBodyPartIds: string[]; // ID partii, na které je trénink zaměřen
  sequence: Array<{           // Pořadí cviků a stanovišť
    stationId: string;
    exerciseId: string;
  }>;
  createdAt: string;           // Datum vytvoření tréninku
}
```

---

## Vztahy mezi entitami

- **Station** obsahuje pole ID cviků (`exerciseIds`).
- **Exercise** obsahuje pole ID stanovišť (`stationIds`) a pole ID partii (`bodyPartIds`).
- **BodyPart** je přiřazen k více cvikům.
- **Workout** obsahuje sekvenci cviků a stanovišť podle zvolených partii.

---

## Poznámky
- Všechny entity mají unikátní `id` (můžeš použít např. UUID).
- Vztahy jsou obousměrné (cvik ví, kde se cvičí, stanoviště ví, jaké cviky lze cvičit).
- Později lze rozšířit o uživatele, statistiky, historii tréninků, atd.

---