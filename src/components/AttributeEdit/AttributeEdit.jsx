import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './AttributeEdit.css'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function AttributeEdit( {attribute, dice, bonus, setIsEditing} ) {
    const dispatch = useDispatch();
    const character = useSelector(store => store.character);
    const [newDice, setNewDice] = useState(character[dice]);
    const [newBonus, setNewBonus] = useState(character[bonus]);

    const handleSave = event => {
        event.preventDefault();
        dispatch({
            type: 'UPDATE_CHARACTER',
            payload: {
                ...character,
                [dice]: Number(newDice),
                [bonus]: Number(newBonus)
            }
        });
        setIsEditing(false);
    }

    return <>
        <form onSubmit={event => handleSave(event)}>
            <h4>{attribute}:</h4>
            <div className="centering-div">
                <TextField type="number" sx="width: 4rem;" value={newDice || ''} onChange={event => setNewDice(event.target.value)}/>
                <span className="attribute-edit-d">D+</span>
                <TextField type="number" sx="width: 4rem; margin-left: 1.5rem;" value={newBonus || ''} onChange={event => setNewBonus(event.target.value)}/>
            </div>
            <div className="centering-div">
                <Button variant="contained" type="submit">Save</Button>
                <Button type="button" onClick={()=>setIsEditing(false)}>Cancel</Button>
            </div>
        </form>
    </>;
}

export default AttributeEdit;