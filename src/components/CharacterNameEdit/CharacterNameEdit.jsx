import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function CharacterNameEdit( {setIsEditing} ) {
    const dispatch = useDispatch();
    const character = useSelector(store => store.character);
    const [newName, setNewName] = useState(character.character_name);

    const handleSave = event => {
        event.preventDefault();
        dispatch({
            type: 'UPDATE_CHARACTER',
            payload: {
                ...character,
                character_name: newName
            }
        });
        setIsEditing(false);
    }

    return <>
        <form onSubmit={event => handleSave(event)}>
            <div>
                <TextField label="Character Name (required)" required value={newName} onChange={event => setNewName(event.target.value)}/>
            </div>
            <Button variant="contained" type="submit">Save</Button>
            <Button sx={{ml: '1rem'}} type="button" onClick={()=>setIsEditing(false)}>Cancel</Button>
        </form>
    </>;
}

export default CharacterNameEdit;