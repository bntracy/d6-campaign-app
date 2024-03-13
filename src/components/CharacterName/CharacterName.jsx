import { useState } from 'react';
import { useSelector } from 'react-redux';

import CharacterNameEdit from '../CharacterNameEdit/CharacterNameEdit';

function CharacterName() {
    const character = useSelector(store => store.character);
    const [isEditing, setIsEditing] = useState(false);

    return <>
        {isEditing ? <CharacterNameEdit setIsEditing={setIsEditing}/> : <>
            <h1>{character.character_name}</h1>
            <button type="button" onClick={() => setIsEditing(true)}>Edit Name</button>
        </>}
    </>;
}

export default CharacterName;