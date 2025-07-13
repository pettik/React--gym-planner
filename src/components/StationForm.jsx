import { useState } from "react";
import useStations from "../hooks/useStations";

const StationForm = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const {addStation} = useStations();


return(
<form onSubmit={(e) => {
  e.preventDefault();
  addStation({ id: Date.now().toString(), name, description, exerciseIds: [] });
  setName("");
  setDescription("");
}}>
    <input type="text" placeholder="název stroje" value={name} onChange={(e) => setName(e.target.value)}/>
    <input type="text" placeholder="popis stanice" value={description} onChange={(e) => setDescription(e.target.value)} />
    <input type="submit" />
</form>)
}

export default StationForm;