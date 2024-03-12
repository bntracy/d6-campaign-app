import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchCharacter(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
            params: {
                character_id: action.payload.character_id,
                associated_user_id: action.payload.associated_user_id
            }
          };
        const characterResponse = yield axios.get('/api/character/', config);
        yield put({type: 'SET_CHARACTER', payload: characterResponse.data});
    }
    catch (error) {
        console.log('Error fetching character', error);
    }
}

function* updateCharacter(action) {
    try {
        yield axios.put('/api/character/', action.payload);
        yield put({type: 'FETCH_CHARACTER', payload: {
            character_id: action.payload.id,
            associated_user_id: action.payload.user_id
        }});
    }
    catch (error) {
        console.log('Error updating character:', error);
    }
}

function* characterSaga() {
    yield takeLatest('FETCH_CHARACTER', fetchCharacter);
    yield takeLatest('UPDATE_CHARACTER', updateCharacter);
}

export default characterSaga;