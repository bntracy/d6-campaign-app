import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function CharacterDisplayPage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const characterList = useSelector(store => store.characterList);
    const user = useSelector(store => store.user);

    const fetchSingleCharacter = () => {
        // clear it out on page load
        dispatch({type: 'CLEAR_CHARACTER'});
        // check to be sure the user should have access to this character
        // find the user_id for the character
        const thisCharacterInList = characterList.find(element => element.id === Number(id));
        if (thisCharacterInList?.user_id === user.id || user.access_level === 1) {
            dispatch({type: 'FETCH_CHARACTER', payload: {
                character_id: id,
                associated_user_id: thisCharacterInList.user_id
            }});
        } 

        // if (user.id === Number(id) || user.access_level === 1) {
        //     dispatch({type: 'FETCH_CHARACTER', payload: id});
        // }
    }

    useEffect(fetchSingleCharacter, []);

    return <><p>No character data</p></>;
}

export default CharacterDisplayPage;