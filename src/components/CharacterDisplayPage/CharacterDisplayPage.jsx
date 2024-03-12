import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function CharacterDisplayPage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const user = useSelector(store => store.user);

    const fetchSingleCharacter = () => {
        // clear it out on page load
        dispatch({type: 'CLEAR_CHARACTER'});
        // check to be sure the user should have access to this character
        if (user.id === Number(id) || user.access_level === 1) {
            dispatch({type: 'FETCH_CHARACTER', payload: id});
        }
    }

    useEffect(fetchSingleCharacter, []);

    return <><p>No character data</p></>;
}

export default CharacterDisplayPage;