import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import TextComponent from '../TextComponent/TextComponent';

import Button from '@mui/material/Button';

function NotesPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const fetchSingleCharacter = () => {
        // clear it out on page load
        dispatch({type: 'CLEAR_CHARACTER'});
        
        dispatch({type: 'FETCH_CHARACTER', payload: id});
    }

    useEffect(fetchSingleCharacter, []);

    return <>
        <div className="centering-div">
            <Button variant="contained" onClick={()=>history.push(`/character/${id}`)}>Back to Character</Button>
        </div>
        <TextComponent property="notes" label="Notes"/>
    </>;
}

export default NotesPage;