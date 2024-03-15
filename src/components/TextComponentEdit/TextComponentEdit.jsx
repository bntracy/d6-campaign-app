import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function TextComponentEdit( {setIsEditing, propertyToChange} ) {
    const dispatch = useDispatch();
    const character = useSelector(store => store.character);
    const [value, setValue] = useState(character[propertyToChange]);

    const handleSave = event => {
        event.preventDefault();
        dispatch({
            type: 'UPDATE_CHARACTER',
            payload: {
                ...character,
                [propertyToChange]: value
            }
        });
        setIsEditing(false);
    }

    return <>
        <form onSubmit={event => handleSave(event)}>
            <TextField multiline defaultValue={value} onChange={event => setValue(event.target.value)} />
            <div className="centering-div">
                <Button variant="contained" type="submit">Save</Button>
                <Button type="button" onClick={()=>setIsEditing(false)}>Cancel</Button>
            </div>
        </form>
    </>;
}

export default TextComponentEdit;