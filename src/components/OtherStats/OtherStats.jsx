import { useState } from 'react';
import { useSelector } from 'react-redux';

import OtherStatsEdit from '../OtherStatsEdit/OtherStatsEdit';

function OtherStats() {
    const character = useSelector(store => store.character);
    const [isEditing, setIsEditing] = useState(false);

    return <>
        {isEditing ? <OtherStatsEdit setIsEditing={setIsEditing} /> : <>
        <div>Move: {character.move}</div>
        <div>Force Sensitive? {character.force_sensitive ? <>Yes</> : <>No</>}</div>
        <div>Force Points: {character.force_points}</div>
        <div>Dark Side Points: {character.dark_side_points}</div>
        <div>Character Points: {character.character_points}</div>
        <button type="button" onClick={() => setIsEditing(true)}>Edit</button></>}
    </>;

}

export default OtherStats;