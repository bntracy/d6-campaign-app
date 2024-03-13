import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'

import Attribute from '../Attribute/Attribute';
import CharacterName from '../CharacterName/CharacterName';
import CharacterOverview from '../CharacterOverview/CharacterOverview';
import OtherStats from '../OtherStats/OtherStats';
import TextComponent from '../TextComponent/TextComponent';

function CharacterDisplayPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const character = useSelector(store => store.character);

    const fetchSingleCharacter = () => {
        // clear it out on page load
        dispatch({type: 'CLEAR_CHARACTER'});
        
        dispatch({type: 'FETCH_CHARACTER', payload: id});
    }

    const handleDelete = () => {
        Swal.fire({
            title: "Delete character?",
            text: "This cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Delete character"
        }).then(result => {
            if (result.isConfirmed) {
                const config = {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                  };
                axios.delete(`/api/character/${character.id}`, config)
                .then(response => {
                    history.push('/character-selection');
                }).catch(error => {
                    console.log('Error in DELETE', error);
                });
            }
        });
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
            <div>
                <button type="button" onClick={handleDelete}>Delete Character</button>
            </div>
        </>
        : <p>No character data</p>}
    </>;
}

export default CharacterDisplayPage;