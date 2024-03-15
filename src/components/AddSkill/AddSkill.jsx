import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function AddSkill( {attribute} ) {
    const dispatch = useDispatch();
    const character = useSelector(store => store.character);
    const [isAdding, setIsAdding] = useState(false);
    const [newSkillName, setNewSkillName] = useState('');
    const [newSkillDice, setNewSkillDice] = useState(0);
    const [newSkillBonus, setNewSkillBonus] = useState(0);

    const handleSave = event => {
        event.preventDefault();
        dispatch({
            type: 'ADD_SKILL',
            payload: {
                character_id: character.id,
                skill_name: newSkillName,
                associated_attribute: attribute,
                skill_dice: newSkillDice,
                skill_bonus: newSkillBonus
            }
        });
        setIsAdding(false);
    }

    return <>
        {isAdding ? <><form onSubmit={event => handleSave(event)}>
            <div>
                <TextField label="Skill Name" value={newSkillName} onChange={event => setNewSkillName(event.target.value)}/>
                <div className="center-vertical">
                    <span>Value: </span>
                    <TextField type="number" sx={{width: '4rem'}} value={newSkillDice} onChange={event => setNewSkillDice(event.target.value)}/>
                    <span>D+</span>
                    <TextField type="number" sx={{width: '4rem'}} value={newSkillBonus} onChange={event => setNewSkillBonus(event.target.value)}/>
                </div>
            </div>
            <div className="centering-div">
                <Button variant="contained" type="submit">Save</Button>
                <Button type="button" onClick={() => setIsAdding(false)}>Cancel</Button>
            </div>
          </form></> 
        : <Button sx={{ml: '1rem'}} type="button" onClick={() => setIsAdding(true)}>Add Skill</Button>}
        
    </>;
}

export default AddSkill;