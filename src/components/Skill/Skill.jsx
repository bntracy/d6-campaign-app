import { useState } from 'react';

import SkillEdit from '../SkillEdit/SkillEdit';

function Skill( {skill} ) {
    const [isEditing, setIsEditing] = useState(false);

    return <>
        {isEditing ? <SkillEdit skill={skill} setIsEditing={setIsEditing}/> :
        <li>{skill.skill_name} {skill.skill_dice}D{skill.skill_bonus > 0 && <>+{skill.skill_bonus}</>} <button onClick={() => setIsEditing(true)}>Edit</button></li>}
    </>;
}

export default Skill;