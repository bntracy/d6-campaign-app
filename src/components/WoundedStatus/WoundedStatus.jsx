import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Checkbox from '@mui/material/Checkbox';

function WoundedStatus() {
    const dispatch = useDispatch();
    const character = useSelector(store => store.character);
    const [newStunned, setNewStunned] = useState(character.stunned);
    const [newWounded1, setNewWounded1] = useState(character.wounded_1);
    const [newWounded2, setNewWounded2] = useState(character.wounded_2);
    const [newIncapacitated, setNewIncapacitated] = useState(character.incapacitated);
    const [newMortallyWounded, setNewMortallyWounded] = useState(character.mortally_wounded);

    const saveStunned = () => {
        dispatch({
            type: 'UPDATE_CHARACTER',
            payload: {
                ...character,
                stunned: !newStunned
            }
        });
        setNewStunned(!newStunned);
    }

    const saveWounded1 = () => {
        dispatch({
            type: 'UPDATE_CHARACTER',
            payload: {
                ...character,
                wounded_1: !newWounded1
            }
        });
        setNewWounded1(!newWounded1);
    }

    const saveWounded2 = () => {
        dispatch({
            type: 'UPDATE_CHARACTER',
            payload: {
                ...character,
                wounded_2: !newWounded2
            }
        });
        setNewWounded2(!newWounded2);
    }

    const saveIncapacitated = () => {
        dispatch({
            type: 'UPDATE_CHARACTER',
            payload: {
                ...character,
                incapacitated: !newIncapacitated
            }
        });
        setNewIncapacitated(!newIncapacitated);
    }

    const saveMortallyWounded = () => {
        dispatch({
            type: 'UPDATE_CHARACTER',
            payload: {
                ...character,
                mortally_wounded: !newMortallyWounded
            }
        });
        setNewMortallyWounded(!newMortallyWounded);
    }

    return <>
        <div>
            <label>Stunned: </label>
            <Checkbox checked={newStunned} onChange={saveStunned}/>
        </div>
        <div>
            <label>Wounded: </label>
            <Checkbox checked={newWounded1} onChange={saveWounded1}/>
            <Checkbox sx="padding-left: 0px" checked={newWounded2} onChange={saveWounded2}/>
        </div>
        <div>
            <label>Incapacitated: </label>
            <Checkbox checked={newIncapacitated} onChange={saveIncapacitated}/>
        </div>
        <div>
            <label>Mortally Wounded: </label>
            <Checkbox checked={newMortallyWounded} onChange={saveMortallyWounded}/>
        </div>
    </>;
}

export default WoundedStatus;