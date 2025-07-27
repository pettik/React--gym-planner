import { useState } from "react";
import StationForm from "./components/StationForm";
import StationsList from "./StationsList";
import ExerciseForm from "./components/ExerciseForm";
import ExercisesList from "./components/ExercisesList";
import WorkoutGenerator from "./components/WorkoutGenerator";

function App() {
  const [editExercise, setEditExercise] = useState(null);

  return (
    <div className="App" style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>GYM 1 – AI Tréninkový plánovač</h1>

      <hr />

      <WorkoutGenerator />

      <hr />

      <h2>📌 Správa stanovišť</h2>
      <StationForm />
      <StationsList />

      <hr />

      <h2>💪 Správa cviků</h2>
      <ExerciseForm editExercise={editExercise} clearEdit={() => setEditExercise(null)} />
      <ExercisesList onEdit={setEditExercise} />
    </div>
  );
}

export default App;