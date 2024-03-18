import { useState } from 'react';
import { useDispatch } from 'react-redux';

import SkillEdit from '../SkillEdit/SkillEdit';

import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

function Skill( {skill} ) {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);

    const rollDice = (dice, bonus, label) => {
        dispatch({type: 'ROLL_DICE', payload: {dice, bonus, label}});
    }

    return <>
        {isEditing ? <SkillEdit skill={skill} setIsEditing={setIsEditing}/> :
        <li>{skill.skill_name} {skill.skill_dice}D{skill.skill_bonus > 0 && <>+{skill.skill_bonus}</>}
        <IconButton size="small" sx={{mb: '2px', pt: 0}} type="button" onClick={() => setIsEditing(true)}><EditIcon fontSize="inherit"/></IconButton>
        <Button onClick={()=>rollDice(skill.skill_dice, skill.skill_bonus, skill.skill_name)}>Roll</Button></li>}
    </>;
}

export default Skill;