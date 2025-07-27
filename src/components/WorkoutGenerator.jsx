
import { useState } from "react";
import { bodyParts } from "../seedData";
import { exercises } from "../seedData";

const shuffle = (array) => [...array].sort(() => 0.5 - Math.random());

const WorkoutGenerator = () => {
  const [part1, setPart1] = useState("");
  const [part2, setPart2] = useState("");
  const [workout, setWorkout] = useState([]);
  const [usedExerciseIds, setUsedExerciseIds] = useState(new Set());

  const generateWorkout = () => {
    const isUsed = (ex) => usedExerciseIds.has(ex.id);

    const primary1 = shuffle(exercises.filter((e) => e.primaryBodyPartId === part1 && !isUsed(e))).slice(0, 2);
    const secondary1 = shuffle(exercises.filter((e) => e.secondaryBodyPartIds.includes(part1) && !isUsed(e))).slice(0, 1);
    const primary2 = shuffle(exercises.filter((e) => e.primaryBodyPartId === part2 && !isUsed(e))).slice(0, 2);
    const secondary2 = shuffle(exercises.filter((e) => e.secondaryBodyPartIds.includes(part2) && !isUsed(e))).slice(0, 1);
    const core = shuffle(exercises.filter((e) => e.primaryBodyPartId === "bp7" && !isUsed(e))).slice(0, 1);

    const newWorkout = [...primary1, ...secondary1, ...primary2, ...secondary2, ...core];

    setWorkout(newWorkout);
    setUsedExerciseIds(new Set([...usedExerciseIds, ...newWorkout.map((ex) => ex.id)]));
  };

  const getPartName = (id) => bodyParts.find((b) => b.id === id)?.name;

  return (
    <div>
      <h2>Vygeneruj tréninkový plán</h2>
      <select value={part1} onChange={(e) => setPart1(e.target.value)}>
        <option value="">-- Hlavní partie 1 --</option>
        {bodyParts.map((b) => (
          <option key={b.id} value={b.id}>
            {b.name}
          </option>
        ))}
      </select>
      <select value={part2} onChange={(e) => setPart2(e.target.value)}>
        <option value="">-- Hlavní partie 2 --</option>
        {bodyParts.map((b) => (
          <option key={b.id} value={b.id}>
            {b.name}
          </option>
        ))}
      </select>
      <button onClick={generateWorkout}>Vygeneruj cviky</button>

      {workout.length > 0 && (
        <div>
          <h3>Tréninkový plán</h3>
          <ol>
            {workout.map((ex, idx) => (
              <li key={ex.id}>
                <strong>{ex.name}</strong> – {ex.description} <br />
                <em>Primární: {getPartName(ex.primaryBodyPartId)}</em> |{" "}
                <em>Vedlejší: {ex.secondaryBodyPartIds.map(getPartName).join(", ")}</em>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default WorkoutGenerator;
