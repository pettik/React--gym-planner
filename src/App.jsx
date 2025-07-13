import React from "react";
import StationsList from "./StationsList";
import StationForm from "./components/StationForm";

function App() {
  return (
    <div className="App">
      <h1>React GYM AI Planner</h1>
      <StationForm />
      <StationsList />
    </div>
  );
}

export default App;