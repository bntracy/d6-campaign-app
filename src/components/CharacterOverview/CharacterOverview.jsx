import { useState } from 'react';
import { useSelector } from 'react-redux';

import CharacterOverviewEdit from '../CharacterOverviewEdit/CharacterOverviewEdit';

import './CharacterOverview.css'

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
        <div>Physical Description: {character.physical_description}</div>
        <button type="button" onClick={() => setIsEditing(true)}>Edit</button></>}
    </>;
}

export default CharacterOverview;