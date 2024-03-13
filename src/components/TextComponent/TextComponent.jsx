import { useState } from 'react';
import { useSelector } from 'react-redux';

import TextComponentEdit from '../TextComponentEdit/TextComponentEdit';

function TextComponent({ property, label }) {
    const character = useSelector(store => store.character);
    const [isEditing, setIsEditing] = useState(false);

    return <>
        <h4>{label}:</h4>
        { isEditing? <TextComponentEdit setIsEditing={setIsEditing} propertyToChange={property}/> : <>
            <p>{character[property]}</p>
            <button type="button" onClick={() => setIsEditing(true)}>Edit</button>
        </>}
    </>;
}

export default TextComponent;