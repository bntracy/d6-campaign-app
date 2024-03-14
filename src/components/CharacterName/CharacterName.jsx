import { useState } from 'react';
import { useSelector } from 'react-redux';

import CharacterNameEdit from '../CharacterNameEdit/CharacterNameEdit';

import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

function CharacterName() {
    const character = useSelector(store => store.character);
    const [isEditing, setIsEditing] = useState(false);

    return <>
        {isEditing ? <CharacterNameEdit setIsEditing={setIsEditing}/> : <>
            <h1>{character.character_name}</h1>
            <IconButton type="button" onClick={() => setIsEditing(true)}><EditIcon /></IconButton>
        </>}
    </>;
}

export default CharacterName;