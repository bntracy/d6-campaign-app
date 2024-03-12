import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Attribute from '../Attribute/Attribute';
import CharacterName from '../CharacterName/CharacterName';
import CharacterOverview from '../CharacterOverview/CharacterOverview';
import OtherStats from '../OtherStats/OtherStats';
import TextComponent from '../TextComponent/TextComponent';

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
            <Attribute attribute="Knowledge" dice="knowledge_dice" bonus="knowledge_bonus" skills="knowledge_skills"/>
            <Attribute attribute="Mechanical" dice="mechanical_dice" bonus="mechanical_bonus" skills="mechanical_skills"/>
            <Attribute attribute="Perception" dice="perception_dice" bonus="perception_bonus" skills="perception_skills"/>
            <Attribute attribute="Strength" dice="strength_dice" bonus="strength_bonus" skills="strength_skills"/>
            <Attribute attribute="Technical" dice="technical_dice" bonus="technical_bonus" skills="technical_skills"/>
            <OtherStats />
            <TextComponent property="special_abilities" label="Special Abilities"/>
            <TextComponent property="equipment" label="Equipment"/>
            <TextComponent property="notes" label="Notes"/>
        </>
        : <p>No character data</p>}
    </>;
}

export default CharacterDisplayPage;