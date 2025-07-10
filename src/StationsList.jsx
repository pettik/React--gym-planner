import React from "react";
import { stations, exercises, bodyParts } from "./seedData";

// Pomocné funkce pro lookup
const getExercise = (id) => exercises.find((ex) => ex.id === id);
const getBodyPart = (id) => bodyParts.find((bp) => bp.id === id);

export default function StationsList() {
  return (
    <div>
      <h2>Přehled stanovišť</h2>
      <ul>
        {stations.map((station) => (
          <li key={station.id} style={{ marginBottom: "1.5rem" }}>
            <strong>{station.name}</strong> <br />
            <small>{station.description}</small>
            <ul>
              {station.exerciseIds.map((eid) => {
                const ex = getExercise(eid);
                return (
                  <li key={eid}>
                    {ex.name} –{" "}
                    {ex.bodyPartIds.map((bpid) => getBodyPart(bpid)?.name).join(", ")}
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}