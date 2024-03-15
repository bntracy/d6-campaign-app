import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function NewCharacter() {
    const history = useHistory();
    const [newCharacterName, setNewCharacterName] = useState('');
    const [newSpecies, setNewSpecies] = useState('');
    const [newGender, setNewGender] = useState('');
    const [newAge, setNewAge] = useState('');
    const [newHeight, setNewHeight] = useState('');
    const [newWeight, setNewWeight] = useState('');
    const [newPhysicalDescription, setNewPhysicalDescription] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          };
        axios.post('/api/character', {
            character_name: newCharacterName,
            species: newSpecies,
            gender: newGender,
            age: newAge,
            height: newHeight,
            weight: newWeight,
            physical_description: newPhysicalDescription
        }, config)
        .then(response => {
            history.push('/character-selection');
        })
        .catch(error => {
            console.log('Error in POST', error);
        });
    }

    return <>
        <h1>New Character</h1>
        <form onSubmit={event => handleSubmit(event)}>
            <div className="centering-div">
                <TextField sx={{width: '25%'}} label="Character Name (required)" value={newCharacterName} onChange={event => setNewCharacterName(event.target.value)} required />
            </div>
            <div className="centering-div">
                <TextField label="Species" value={newSpecies} onChange={event => setNewSpecies(event.target.value)} />
            </div>
            <div className="centering-div">
                <TextField label="Gender" value={newGender} onChange={event => setNewGender(event.target.value)} />
            </div>
            <div className="centering-div">
                <TextField label="Age" value={newAge} onChange={event => setNewAge(event.target.value)} />
            </div>
            <div className="centering-div">
                <TextField label="Height" value={newHeight} onChange={event => setNewHeight(event.target.value)} />
            </div>
            <div className="centering-div">
                <TextField label="Weight" value={newWeight} onChange={event => setNewWeight(event.target.value)} />
            </div>
            <div className="centering-div">
                <TextField sx={{width: '25%'}} label="Physical Description" value={newPhysicalDescription} onChange={event => setNewPhysicalDescription(event.target.value)} />
            </div>
            <div className="centering-div">
                <Button variant="contained" type="submit">Save</Button>
                <Button sx={{ml: '1rem'}} type="button" onClick={()=>history.push('/character-selection')}>Cancel</Button>
            </div>
        </form>
    </>;
}

export default NewCharacter;