import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
                <label>Species: </label>
                <input type="text" value={newSpecies} onChange={event => setNewSpecies(event.target.value)}/>
            </div>
            <div>
                <label>Gender: </label>
                <input type="text" value={newGender} onChange={event => setNewGender(event.target.value)}/>
            </div>
            <div>
                <label>Age: </label>
                <input type="text" value={newAge} onChange={event => setNewAge(event.target.value)}/>
            </div>
            <div>
                <label>Height: </label>
                <input type="text" value={newHeight} onChange={event => setNewHeight(event.target.value)}/>
            </div>
            <div>
                <label>Weight: </label>
                <input type="text" value={newWeight} onChange={event => setNewWeight(event.target.value)}/>
            </div>
            <div>
                <label>Physical Description: </label>
                <input type="text" value={newPhysicalDescription} onChange={event => setNewPhysicalDescription(event.target.value)}/>
            </div>
            <button>Save</button>
            <button onClick={()=>setIsEditing(false)}>Cancel</button>
        </form>
    </>;
}

export default CharacterOverviewEdit;