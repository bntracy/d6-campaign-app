import { useState } from 'react';

function AddSkill( {attribute} ) {
    const [isAdding, setIsAdding] = useState(false);
    const [newSkillName, setNewSkillName] = useState('');
    const [newSkillDice, setNewSkillDice] = useState('');
    const [newSkillBonus, setNewSkillBonus] = useState('');

    return <>
        {isAdding ? <><form>
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