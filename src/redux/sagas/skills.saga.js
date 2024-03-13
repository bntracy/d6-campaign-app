import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addSkill(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          };
        yield axios.post('/api/skills/', action.payload, config);
        // TODO: fetch the character
    }
    catch (error) {
        console.log('Error adding skill', error);
    }
}

function* skillsSaga() {
    yield takeLatest('ADD_SKILL', addSkill);
}

export default skillsSaga;