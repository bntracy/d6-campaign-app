// For character selection screen dispatches

import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchAllCharacters() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    const selectionResponse = yield axios.get('/selection', config);
    yield put({type: 'SET_CHARACTERS', payload: selectionResponse.data});
  }
  catch (error) {
    console.log('Error fetching all characters', error);
  }
}

function* selectionSaga() {
    yield takeLatest('FETCH_ALL_CHARACTERS', fetchAllCharacters);
  }
  
  export default selectionSaga;