import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
                <label>Skill Name: </label>
                <input type="text" value={newSkillName} onChange={event => setNewSkillName(event.target.value)}/>
                <label>Value: </label>
                <input type="number" value={newSkillDice} onChange={event => setNewSkillDice(event.target.value)}/>
                <label>D+</label>
                <input type="number" value={newSkillBonus} onChange={event => setNewSkillBonus(event.target.value)}/>
            </div>
            <button type="button" onClick={() => setIsAdding(false)}>Cancel</button>
            <button type="submit">Save</button>
          </form></> 
        : <button type="button" onClick={() => setIsAdding(true)}>Add Skill</button>}
        
    </>;
}

export default AddSkill;