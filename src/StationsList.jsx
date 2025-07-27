import React from "react";
import useStations from "./hooks/useStations";
import { exercises, bodyParts } from "./seedData";

// Pomocné funkce pro lookup
const getExercise = (id) => exercises.find((ex) => ex.id === id);
const getBodyPart = (id) => bodyParts.find((bp) => bp.id === id);

export default function StationsList() {
  const { stations } = useStations();
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
{ex.name} –
<em>Hlavní partie:</em> {getBodyPart(ex.primaryBodyPartId)?.name},
<em> vedlejší partie:</em> {(ex.secondaryBodyPartIds || []).map(id => getBodyPart(id)?.name).join(", ")}
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