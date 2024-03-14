import { useState } from 'react';
import { useSelector } from 'react-redux';

import TextComponentEdit from '../TextComponentEdit/TextComponentEdit';

import Button from '@mui/material/Button';

function TextComponent({ property, label }) {
    const character = useSelector(store => store.character);
    const [isEditing, setIsEditing] = useState(false);

    return <>
        <h4>{label}:</h4>
        { isEditing? <TextComponentEdit setIsEditing={setIsEditing} propertyToChange={property}/> : <>
            <p>{character[property]}</p>
            <Button type="button" onClick={() => setIsEditing(true)}>Edit Section</Button>
        </>}
    </>;
}

export default TextComponent;