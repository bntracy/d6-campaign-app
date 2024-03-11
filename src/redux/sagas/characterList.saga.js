// For character selection screen dispatches

import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchAllCharacters() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    const selectionResponse = yield axios.get('/api/character-list', config);
    yield put({type: 'SET_CHARACTER_LIST', payload: selectionResponse.data});
  }
  catch (error) {
    console.log('Error fetching all characters', error);
  }
}

function* characterListSaga() {
    yield takeLatest('FETCH_ALL_CHARACTERS', fetchAllCharacters);
  }
  
  export default characterListSaga;