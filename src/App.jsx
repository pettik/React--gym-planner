import {useState} from "react";
import StationsList from "./StationsList";
import StationForm from "./components/StationForm";
import ExercisesList from "./components/ExercisesList";
import ExerciseForm from "./components/ExerciseForm";

function App() {
  const [editExercise, setEditExercise] = useState(null);
  return (
    <div className="App">
      <h1>React GYM AI Planner</h1>
      <StationForm />
      <StationsList />
      <ExerciseForm editExercise={editExercise} clearEdit={() => setEditExercise(null)} />
      <ExercisesList onEdit={setEditExercise} />
    </div>
  );
}


export default App;