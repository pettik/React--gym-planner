
import React from "react";
import { stations, exercises, bodyParts } from "./seedData";

const getExercise = (id) => exercises.find((e) => e.id === id);
const getBodyPart = (id) => bodyParts.find((b) => b.id === id)?.name;

export default function StationsList() {
  return (
    <div>
      <h1>Posilovna GYM 1</h1>
      <h2>Přehled stanovišť</h2>
      <ul>
        {stations.map((station, idx) => (
          <li key={station.id} style={{ marginBottom: "1.5rem" }}>
            <strong>#{idx + 1} {station.name}</strong> <br />
            <small>{station.description}</small>
            <ul>
              {station.exerciseIds.map((eid) => {
                const ex = getExercise(eid);
                return (
                  <li key={eid}>
                    {ex.name} –{" "}
                    <em>Primární: {getBodyPart(ex.primaryBodyPartId)}</em>
                    {ex.secondaryBodyPartIds.length > 0 && (
                      <> | <em>Vedlejší: {ex.secondaryBodyPartIds.map(getBodyPart).join(", ")}</em></>
                    )}
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
