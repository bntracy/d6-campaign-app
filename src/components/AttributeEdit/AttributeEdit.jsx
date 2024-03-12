import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
                <input type="number" value={newDice} onChange={event => setNewDice(event.target.value)}/>
                D+
                <input type="number" value={newBonus} onChange={event => setNewBonus(event.target.value)}/>
            <button type="submit">Save</button>
            <button type="button" onClick={()=>setIsEditing(false)}>Cancel</button>
        </form>
    </>;
}

export default AttributeEdit;