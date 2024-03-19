import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './DiceResult.css'

import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';

function DiceResult() {
    const dispatch = useDispatch();
    const diceRoll = useSelector(store => store.diceRoll);
    const [newDice, setNewDice] = useState(1);
    const [newBonus, setNewBonus] = useState(0);
    const [open, setOpen] = useState(false);

    const rollDice = (dice, bonus, label) => {
        if (dice < 1) {
            setOpen(true);
            return;
        }
        dispatch({type: 'ROLL_DICE', payload: {dice, bonus, label}});
    }

    return <>
        <hr/>
        <Snackbar open={open} anchorOrigin={{vertical: 'top', horizontal: 'center'}} autoHideDuration={5000} onClose={()=>setOpen(false)} TransitionComponent={Slide} message="Cannot roll 0 or less dice"/>
        <div className="dice-container">
            <div>
                <p>Roll Result:{diceRoll && <>
                    <span className="large">{diceRoll.sum}</span>
                    {diceRoll?.diceArray?.map((die, index) => <span key={index}>{die}+</span>)}
                    {diceRoll.bonus}
                    <span className="roll-label">{diceRoll.label}</span>
                    {diceRoll.wildDieFlag && <>Wild Die of <span className="wild-die">1</span></>}
                </>}</p>
            </div>
            <div className="center-vertical">
                <TextField type="number" sx={{width: '4rem'}} value={newDice} onChange={event => setNewDice(event.target.value)}/>
                <span>D+</span>
                <TextField type="number" sx={{width: '4rem'}} value={newBonus} onChange={event => setNewBonus(event.target.value)}/>
                <Button type="button" onClick={()=>rollDice(Number(newDice), Number(newBonus), "manual entry")}>Roll</Button>
            </div>
        </div>
        <hr/>
    </>;
}

export default DiceResult;