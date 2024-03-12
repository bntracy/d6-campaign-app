import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchCharacter(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          };
        const characterResponse = yield axios.get(`/api/character/${action.payload}`, config);
        yield put({type: 'SET_CHARACTER', payload: characterResponse.data});
    }
    catch (error) {
        console.log('Error fetching character', error);
    }
}

function* updateCharacter(action) {
    try {
        yield axios.put('/api/character/', action.payload);
        yield put({type: 'FETCH_CHARACTER', payload: action.payload.id});
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