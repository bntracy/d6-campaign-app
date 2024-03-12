import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

function CharacterDisplayPage() {
    const dispatch = useDispatch();
    const { id } = useParams();

    const fetchSingleCharacter = () => {
        // clear it out on page load
        dispatch({type: 'CLEAR_CHARACTER'});
    }

    useEffect(fetchSingleCharacter, []);

    return <></>;
}

export default CharacterDisplayPage;