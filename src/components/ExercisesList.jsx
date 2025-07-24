import  {useState} from "react";
import useExercises from "./../hooks/useExercises"
import useStations from "./../hooks/useStations";
import { bodyParts } from "./../seedData";



// Pomocné funkce
const getBodyPart = (id) => bodyParts.find(bp => bp.id === id);
const getStation = (id, stations) => stations.find(st => st.id === id);

export default function ExercisesList({ onEdit }) {
  const { exercises, deleteExercise } = useExercises();
  const { stations } = useStations();


  return (
    <div>
      <h2>Přehled cviků</h2>
      <ul>
        {exercises.map(ex => (
          <li key={ex.id} style={{ marginBottom: "1.5rem" }}>
          <strong>{ex.name}</strong> <br />
          <small>{ex.description}</small>
          <ul>
            <li><em>Partie:</em> {ex.bodyPartIds.map(id => getBodyPart(id)?.name).join(", ")}</li>
            <li><em>Stanoviště:</em> {ex.stationIds.map(id => getStation(id, stations)?.name).join(", ")}</li>
          </ul>
          <button onClick={() => deleteExercise(ex.id)}>Smazat</button>
          <button onClick={() => onEdit(ex)}>Upravit</button>
        </li>
        ))}
      </ul>
    </div>
  );
}
