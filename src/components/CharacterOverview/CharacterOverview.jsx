import { useState } from 'react';
import { useSelector } from 'react-redux';

import CharacterOverviewEdit from '../CharacterOverviewEdit/CharacterOverviewEdit';

import './CharacterOverview.css'

import Button from '@mui/material/Button';

function CharacterOverview() {
    const character = useSelector(store => store.character);
    const [isEditing, setIsEditing] = useState(false);

    return <>
        {isEditing ? <CharacterOverviewEdit setIsEditing={setIsEditing} /> : <>
        <div className="flex-container">
            <div>Species: {character.species}</div>
            <div>Gender: {character.gender}</div>
            <div>Age: {character.age}</div>
            <div>Height: {character.height}</div>
            <div>Weight: {character.weight}</div>
        </div>
        <div className="flex-container">
            <div>Physical Description: {character.physical_description}</div>
            <Button type="button" onClick={() => setIsEditing(true)}>Edit Section</Button>
        </div>
        <hr />
        </>}
    </>;
}

export default CharacterOverview;