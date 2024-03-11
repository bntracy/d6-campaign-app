import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CharacterSelectionPage() {
    const dispatch = useDispatch();
    const accessLevel = useSelector(store => store.user.access_level);
    const characterList = useSelector(store => store.characterList);

    const fetchCharacters = () => {
        // If I'm the gamemaster, I get to see all the characters
        if (accessLevel === 1) { // accessLevel 1 = gamemaster
            dispatch({type: 'FETCH_ALL_CHARACTERS'});
        } else {
            // Otherwise, I can see the characters matching my user id
            // TODO: This dispatch
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
                        <td><button>Select</button></td>
                    </tr>)}
                </tbody>
            </table>}
    </>;
}

export default CharacterSelectionPage;