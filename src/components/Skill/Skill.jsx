import { useState } from 'react';

import SkillEdit from '../SkillEdit/SkillEdit';

import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

function Skill( {skill} ) {
    const [isEditing, setIsEditing] = useState(false);

    return <>
        {isEditing ? <SkillEdit skill={skill} setIsEditing={setIsEditing}/> :
        <li>{skill.skill_name} {skill.skill_dice}D{skill.skill_bonus > 0 && <>+{skill.skill_bonus}</>}
        <IconButton size="small" sx={{mb: '2px', pt: 0}} type="button" onClick={() => setIsEditing(true)}><EditIcon fontSize="inherit"/></IconButton></li>}
    </>;
}

export default Skill;