import { useState } from "react";
import useStations from "../hooks/useStations";
import { v4 as uuidv4 } from 'uuid';

const StationForm = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const {addStation} = useStations();


return(
<form onSubmit={(e) => {
  e.preventDefault();
  addStation({ id: uuidv4(), name, description, exerciseIds: [] });

  setName("");
  setDescription("");
}}>
    <input type="text" placeholder="název stroje" value={name} onChange={(e) => setName(e.target.value)}/>
    <input type="text" placeholder="popis stanice" value={description} onChange={(e) => setDescription(e.target.value)} />
    <input type="submit" />
</form>)
}

export default StationForm;