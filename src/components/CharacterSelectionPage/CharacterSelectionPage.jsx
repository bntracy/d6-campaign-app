import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function CharacterSelectionPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const characterList = useSelector(store => store.characterList);
    const user = useSelector(store => store.user);

    const fetchCharacters = () => {
        // clear it out on page load
        dispatch({type: 'CLEAR_CHARACTER_LIST'});
        // If I'm the gamemaster, I get to see all the characters
        if (user.access_level === 1) { // accessLevel 1 = gamemaster
            dispatch({type: 'FETCH_ALL_CHARACTERS'});
        } else {
            // Otherwise, I can see the characters matching my user id
            dispatch({type: 'FETCH_USERS_CHARACTERS', payload: user.id});
        }
    }

    useEffect(fetchCharacters, []);

    return <>
        <h1>Character Selection</h1>
        {characterList.length > 0 && <table>
                <tbody>
                    {characterList.map(character => <tr key={character.id}>
                        <td>{character.username}</td>
                        <td>{character.character_name}</td>
                        <td><button onClick={() => history.push(`/character/${character.id}`)}>Select</button></td>
                    </tr>)}
                </tbody>
            </table>}
        <button onClick={()=>history.push('/new')}>Create New Character</button>
    </>;
}

export default CharacterSelectionPage;