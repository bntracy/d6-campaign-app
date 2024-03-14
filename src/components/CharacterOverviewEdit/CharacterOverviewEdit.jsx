import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function CharacterOverviewEdit( {setIsEditing} ) {
    const dispatch = useDispatch();
    const character = useSelector(store => store.character);
    const [newSpecies, setNewSpecies] = useState(character.species);
    const [newGender, setNewGender] = useState(character.gender);
    const [newAge, setNewAge] = useState(character.age);
    const [newHeight, setNewHeight] = useState(character.height);
    const [newWeight, setNewWeight] = useState(character.weight);
    const [newPhysicalDescription, setNewPhysicalDescription] = useState(character.physical_description);

    const handleSave = event => {
        event.preventDefault();
        dispatch({
            type: 'UPDATE_CHARACTER',
            payload: {
                ...character,
                species: newSpecies,
                gender: newGender,
                age: newAge,
                height: newHeight,
                weight: newWeight,
                physical_description: newPhysicalDescription
            }
        });
        setIsEditing(false);
    }

    return <>
        <form onSubmit={event => handleSave(event)}>
            <div>
                <TextField label="Species" value={newSpecies || ''} onChange={event => setNewSpecies(event.target.value)}/>
                <TextField label="Gender" value={newGender || ''} onChange={event => setNewGender(event.target.value)}/>
                <TextField label="Age" value={newAge || ''} onChange={event => setNewAge(event.target.value)}/>
                <TextField label="Height" value={newHeight || ''} onChange={event => setNewHeight(event.target.value)}/>
                <TextField label="Weight" value={newWeight || ''} onChange={event => setNewWeight(event.target.value)}/>
            </div>
            <div>
                <TextField label="Physical Description" sx="width: 80%" value={newPhysicalDescription || ''} onChange={event => setNewPhysicalDescription(event.target.value)}/>
            </div>
            <div className="centering-div">
                <Button variant="contained" type="submit">Save</Button>
                <Button type="button" onClick={()=>setIsEditing(false)}>Cancel</Button>
            </div>
        </form>
        <hr/>
    </>;
}

export default CharacterOverviewEdit;