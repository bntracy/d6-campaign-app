import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Attribute from '../Attribute/Attribute';
import CharacterName from '../CharacterName/CharacterName';
import CharacterOverview from '../CharacterOverview/CharacterOverview';

function CharacterDisplayPage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const character = useSelector(store => store.character);
    const characterList = useSelector(store => store.characterList);
    const user = useSelector(store => store.user);

    const fetchSingleCharacter = () => {
        // clear it out on page load
        dispatch({type: 'CLEAR_CHARACTER'});
        // check to be sure the user should have access to this character
        // find the user_id for the character
        const thisCharacterInList = characterList.find(element => element.id === Number(id));
        if (thisCharacterInList && (thisCharacterInList.user_id === user.id || user.access_level === 1)) {
            dispatch({type: 'FETCH_CHARACTER', payload: {
                character_id: id,
                associated_user_id: thisCharacterInList.user_id
            }});
        } 
    }

    useEffect(fetchSingleCharacter, []);

    return <>
        {character.character_name ? <>
            <CharacterName />
            <CharacterOverview />
            <Attribute attribute="Dexterity" dice="dexterity_dice" bonus="dexterity_bonus" skills="dexterity_skills"/>
        </>
        : <p>No character data</p>}
    </>;
}

export default CharacterDisplayPage;