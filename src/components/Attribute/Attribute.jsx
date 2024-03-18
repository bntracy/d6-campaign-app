import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddSkill from '../AddSkill/AddSkill';
import AttributeEdit from '../AttributeEdit/AttributeEdit';
import Skill from '../Skill/Skill';

import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

function Attribute( {attribute, dice, bonus, skills} ) {
    const dispatch = useDispatch();
    const character = useSelector(store => store.character);
    const [isEditing, setIsEditing] = useState(false);

    const rollDice = (dice, bonus, label) => {
        dispatch({type: 'ROLL_DICE', payload: {dice, bonus, label}});
    }

    return <>
        {isEditing ? <AttributeEdit attribute={attribute} dice={dice} bonus={bonus} setIsEditing={setIsEditing}/> : <>
            <h4>{attribute}: {character[dice]}D{character[bonus] > 0 && <>+{character[bonus]}</>}
            <IconButton size="small" sx={{mb: '4px'}} type="button" onClick={() => setIsEditing(true)}><EditIcon fontSize="inherit"/></IconButton>
            <Button onClick={()=>rollDice(character[dice],character[bonus],attribute)}>Roll</Button></h4>
            {character[skills]?.length > 0 && <ul>{character[skills].map(skill => <Skill key={skill.id} skill={skill}/>)}</ul>}
            </>}
        <AddSkill attribute={attribute}/>
    </>;
}

export default Attribute;