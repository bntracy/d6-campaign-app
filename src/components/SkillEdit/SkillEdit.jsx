import { useState } from 'react';
import { useDispatch } from 'react-redux';

import './SkillEdit.css';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function SkillEdit( {skill, setIsEditing} ) {
    const dispatch = useDispatch();
    const [newSkillName, setNewSkillName] = useState(skill.skill_name);
    const [newSkillDice, setNewSkillDice] = useState(skill.skill_dice);
    const [newSkillBonus, setNewSkillBonus] = useState(skill.skill_bonus);

    const handleSave = event => {
        event.preventDefault();
        dispatch({
            type: 'UPDATE_SKILL',
            payload: {
                ...skill,
                skill_name: newSkillName,
                skill_dice: Number(newSkillDice),
                skill_bonus: Number(newSkillBonus)
            }
        });
        setNewSkillName('');
        setNewSkillDice('');
        setNewSkillBonus('');
        setIsEditing(false);
    }

    const handleDelete = () => {
        dispatch({
            type: 'DELETE_SKILL',
            payload: {
                id: skill.id,
                character_id: skill.character_id
            }
        });
        setIsEditing(false);
    }

    return <>
        <form onSubmit={event => handleSave(event)}>
            <div className="centering-div">
                <TextField value={newSkillName} onChange={event => setNewSkillName(event.target.value)}/>
            </div>
            <div className="centering-div">
                <TextField type="number" sx={{width: '4rem'}} value={newSkillDice} onChange={event => setNewSkillDice(event.target.value)}/>
                <span className="skill-edit-d">D+</span>
                <TextField type="number" sx={{width: '4rem', ml: '1.5rem'}} value={newSkillBonus} onChange={event => setNewSkillBonus(event.target.value)}/>
            </div>
            <div className="centering-div">
                <Button variant="contained" type="submit">Save</Button>
                <Button type="button" onClick={()=>setIsEditing(false)}>Cancel</Button>
            </div>
            <div className="centering-div">
                <Button variant="outlined" type="button" onClick={handleDelete}>Delete Skill</Button>
            </div>
        </form>
    </>;
}

export default SkillEdit;