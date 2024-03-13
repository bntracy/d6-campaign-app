import { useState } from 'react';
import { useDispatch } from 'react-redux';

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
        setIsEditing(false);
    }

    return <>
        <form onSubmit={event => handleSave(event)}>
            <input type="text" value={newSkillName} onChange={event => setNewSkillName(event.target.value)}/>
            <input type="number" value={newSkillDice} onChange={event => setNewSkillDice(event.target.value)}/>D+
            <input type="number" value={newSkillBonus} onChange={event => setNewSkillBonus(event.target.value)}/>
            <button>Save</button>
            <button onClick={()=>setIsEditing(false)}>Cancel</button>
        </form>
    </>;
}

export default SkillEdit;