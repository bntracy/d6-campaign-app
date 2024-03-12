import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function OtherStatsEdit( {setIsEditing} ) {
    const dispatch = useDispatch();
    const character = useSelector(store => store.character);
    const [newMove, setNewMove] = useState(character.move);
    const [newForceSensitive, setNewForceSensitive] = useState(character.force_sensitive);
    const [newForcePoints, setNewForcePoints] = useState(character.force_points);
    const [newDarkSidePoints, setNewDarkSidePoints] = useState(character.dark_side_points);
    const [newCharacterPoints, setNewCharacterPoints] = useState(character.character_points);

    const handleSave = event => {
        event.preventDefault();
        dispatch({
            type: 'UPDATE_CHARACTER',
            payload: {
                ...character,
                move: newMove,
                force_sensitive: newForceSensitive,
                force_points: newForcePoints,
                dark_side_points: newDarkSidePoints,
                character_points: newCharacterPoints
            }
        });
        setIsEditing(false);
    }

    return <>
        <form onSubmit={event => handleSave(event)}>
            <div>
                <label>Move: </label>
                <input type="number" value={newMove} onChange={event => setNewMove(event.target.value)}/>
            </div>
            <div>
                <label>Force Sensitive? </label>
                {/* TODO: handle Force Sensitive boolean */}
            </div>
            <div>
                <label>Force Points: </label>
                <input type="number" value={newForcePoints} onChange={event => setNewForcePoints(event.target.value)}/>
            </div>
            <div>
                <label>Dark Side Points: </label>
                <input type="number" value={newDarkSidePoints} onChange={event => setNewDarkSidePoints(event.target.value)}/>
            </div>
            <div>
                <label>Character Points: </label>
                <input type="number" value={newCharacterPoints} onChange={event => setNewCharacterPoints(event.target.value)}/>
            </div>
            <button type="submit">Save</button>
            <button type="button" onClick={()=>setIsEditing(false)}>Cancel</button>
        </form>
    </>;
}

export default OtherStatsEdit;