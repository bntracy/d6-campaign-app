import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './OtherStatsEdit.css';

import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

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
            <div className="center-vertical">
                <span>Move: </span>
                <TextField type="number" sx={{width: '4rem'}} value={newMove || ''} onChange={event => setNewMove(event.target.value)}/>
            </div>
            <div>
                <span>Force Sensitive? </span>
                <Checkbox checked={newForceSensitive} onChange={()=>setNewForceSensitive(!newForceSensitive)}/>
            </div>
            <div className="center-vertical">
                <span>Force Points: </span>
                <TextField type="number" sx={{width: '4rem'}} value={newForcePoints || ''} onChange={event => setNewForcePoints(event.target.value)}/>
            </div>
            <div className="center-vertical">
                <span>Dark Side Points: </span>
                <TextField type="number" sx={{width: '4rem'}} value={newDarkSidePoints || ''} onChange={event => setNewDarkSidePoints(event.target.value)}/>
            </div>
            <div className="center-vertical">
                <span>Character Points: </span>
                <TextField type="number" sx={{width: '4rem'}} value={newCharacterPoints || ''} onChange={event => setNewCharacterPoints(event.target.value)}/>
            </div>
            <div className="centering-div">
                <Button variant="contained" type="submit">Save</Button>
                <Button type="button" onClick={()=>setIsEditing(false)}>Cancel</Button>
            </div>
        </form>
    </>;
}

export default OtherStatsEdit;