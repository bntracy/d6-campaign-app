import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function NewCharacter() {
    const history = useHistory();
    const [newCharacterName, setNewCharacterName] = useState('');
    const [newSpecies, setNewSpecies] = useState('');
    const [newGender, setNewGender] = useState('');
    const [newAge, setNewAge] = useState('');
    const [newHeight, setNewHeight] = useState('');
    const [newWeight, setNewWeight] = useState('');
    const [newPhysicalDescription, setNewPhysicalDescription] = useState('');

    return <>
        <h1>New Character</h1>
        <form>
            <div>
                <label>Character Name (required):</label>
                <input type="text" value={newCharacterName} onChange={event => setNewCharacterName(event.target.value)} required />
            </div>
            <div>
                <label>Species:</label>
                <input type="text" value={newSpecies} onChange={event => setNewSpecies(event.target.value)} />
            </div>
            <div>
                <label>Gender:</label>
                <input type="text" value={newGender} onChange={event => setNewGender(event.target.value)} />
            </div>
            <div>
                <label>Age:</label>
                <input type="text" value={newAge} onChange={event => setNewAge(event.target.value)} />
            </div>
            <div>
                <label>Height:</label>
                <input type="text" value={newHeight} onChange={event => setNewHeight(event.target.value)} />
            </div>
            <div>
                <label>Weight:</label>
                <input type="text" value={newWeight} onChange={event => setNewWeight(event.target.value)} />
            </div>
            <div>
                <label>Physical Description:</label>
                <input type="text" value={newPhysicalDescription} onChange={event => setNewPhysicalDescription(event.target.value)} />
            </div>
            <button type="submit">Save</button>
            <button type="button" onClick={()=>history.push('/character-selection')}>Cancel</button>
        </form>
    </>;
}

export default NewCharacter;