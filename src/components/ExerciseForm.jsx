import { useState, useEffect } from "react";
import useExercises from "../hooks/useExercises";
import { v4 as uuidv4 } from 'uuid';
import { bodyParts } from "./../seedData";
import useStations from "../hooks/useStations";



const ExerciseForm = ({ editExercise, clearEdit }) => {
  const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [primaryBodyPartId, setPrimaryBodyPartId] = useState('');
    const [secondaryBodyPartIds, setSecondaryBodyPartIds] = useState([]);
    const [stationIds, setStationIds] = useState([]);
    const {addExercise, updateExercise } = useExercises();
    const { stations } = useStations();

    useEffect(() => {
      if (editExercise) {
        setName(editExercise.name);
        setDescription(editExercise.description);
        setPrimaryBodyPartId(editExercise.primaryBodyPartId || '');
        setSecondaryBodyPartIds(editExercise.secondaryBodyPartIds || []);        setStationIds(editExercise.stationIds || []);
      }
    }, [editExercise]);


return(
<form onSubmit={(e) => {
  e.preventDefault();

  if (editExercise) {
    updateExercise(editExercise.id, {
      name,
      description,
      primaryBodyPartId,
      secondaryBodyPartIds,
      stationIds
    });
    clearEdit();
  } else {
    addExercise({
      id: uuidv4(),
      name,
      description,
      primaryBodyPartId,
      secondaryBodyPartIds,
      stationIds
    });
  }

  setName("");
  setDescription("");
  setPrimaryBodyPartId('');
setSecondaryBodyPartIds([]);
  setStationIds([]);
}}>
    <input type="text" placeholder="název cviku" value={name} onChange={(e) => setName(e.target.value)}/>
    <input type="text" placeholder="popis cviku" value={description} onChange={(e) => setDescription(e.target.value)} />
    <label>
  Hlavní partie:
  <select value={primaryBodyPartId} onChange={(e) => setPrimaryBodyPartId(e.target.value)}>
    <option value="">-- Vyber hlavní partii --</option>
    {bodyParts.map(part => (
      <option key={part.id} value={part.id}>{part.name}</option>
    ))}
  </select>
</label>

<label>
  Vedlejší partie:
  <select multiple value={secondaryBodyPartIds} onChange={(e) => {
    const selected = Array.from(e.target.selectedOptions, option => option.value);
    setSecondaryBodyPartIds(selected);
  }}>
    {bodyParts.map(part => (
      <option key={part.id} value={part.id}>{part.name}</option>
    ))}
  </select>
</label>

<label>
  Stanoviště:
  <select multiple value={stationIds} onChange={(e) => {
    const options = Array.from(e.target.selectedOptions, option => option.value);
    setStationIds(options);
  }}>
    {stations.map(st => (
      <option key={st.id} value={st.id}>{st.name}</option>
    ))}
  </select>
</label>
<input type="submit" value={editExercise ? "Uložit změny" : "Přidat cvik"} />
</form>)
}

export default ExerciseForm;