import { useState } from "react";
import useStations from "../hooks/useStations";

const StationForm = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
return(
<form>
    <input type="text" placeholder="název stroje" />
    <input type="text" placeholder="popis stanice" />
    <input type="submit" onClick={() =>{addStation({ id: ..., name, description, exerciseIds: [] })}}/>
</form>)
}

export default StationForm;