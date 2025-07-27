import { useState } from "react";
import { bodyParts } from "../seedData";
import useExercises from "../hooks/useExercises";
import useStations from "../hooks/useStations";

const WorkoutGenerator = () => {
  const [selectedParts, setSelectedParts] = useState([]);
  const [workout, setWorkout] = useState([]);

  const { exercises } = useExercises();
  const { stations } = useStations();

  const togglePart = (id) => {
    setSelectedParts((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const generateWorkout = () => {
    // krok 1: cviky s hlavní partii
    const primary = exercises.filter((ex) =>
      selectedParts.includes(ex.primaryBodyPartId)
    );

    // krok 2: cviky s vedlejší partii
    const secondary = exercises.filter(
      (ex) =>
        ex.secondaryBodyPartIds?.some((id) => selectedParts.includes(id)) &&
        !selectedParts.includes(ex.primaryBodyPartId)
    );

    // krok 3: přidání např. cviku na břicho (např. id="bp7"), pokud máme
    const core = exercises.find((ex) =>
      ["bp7", "bp8"].includes(ex.primaryBodyPartId)
    );

    const plan = [
      ...primary.slice(0, 3),
      ...secondary.slice(0, 2),
      ...(core ? [core] : []),
    ];

    setWorkout(plan);
  };

  const getBodyPartName = (id) => bodyParts.find((bp) => bp.id === id)?.name;

  return (
    <div>
      <h2>Generátor tréninku</h2>
      <p>Vyber svalové partie:</p>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {bodyParts.map((part) => (
          <label key={part.id}>
            <input
              type="checkbox"
              value={part.id}
              checked={selectedParts.includes(part.id)}
              onChange={() => togglePart(part.id)}
            />
            {part.name}
          </label>
        ))}
      </div>

      <button onClick={generateWorkout} style={{ marginTop: "1rem" }}>
        Vygenerovat plán
      </button>

      {workout.length > 0 && (
        <div style={{ marginTop: "2rem" }}>
          <h3>Navržený trénink:</h3>
          <ol>
            {workout.map((ex) => (
              <li key={ex.id}>
                <strong>{ex.name}</strong> – {ex.description}
                <br />
                <em>
                  Hlavní: {getBodyPartName(ex.primaryBodyPartId)} | Vedlejší:{" "}
                  {ex.secondaryBodyPartIds
                    .map((id) => getBodyPartName(id))
                    .join(", ")}
                </em>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default WorkoutGenerator;
