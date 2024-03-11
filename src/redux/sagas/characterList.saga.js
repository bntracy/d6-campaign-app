// For character selection screen dispatches

import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchAllCharacters() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    const characterListResponse = yield axios.get('/api/character-list', config);
    yield put({type: 'SET_CHARACTER_LIST', payload: characterListResponse.data});
  }
  catch (error) {
    console.log('Error fetching all characters', error);
  }
}

function* fetchUsersCharacters(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    const characterListResponse = yield axios.get(`/api/character-list/${action.payload}`, config);
    yield put({type: 'SET_CHARACTER_LIST', payload: characterListResponse.data});
  }
  catch (error) {
    console.log(`Error fetching user's characters`, error);
  }
}

function* characterListSaga() {
    yield takeLatest('FETCH_ALL_CHARACTERS', fetchAllCharacters);
    yield takeLatest('FETCH_USERS_CHARACTERS', fetchUsersCharacters);
  }
  
  export default characterListSaga;