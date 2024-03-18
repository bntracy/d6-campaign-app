import { put, takeLatest } from 'redux-saga/effects';

function* rollDice(action) {
    yield put({type: 'SET_DICE_ROLL', payload: action.payload});
}

function* dicerollSaga() {
    yield takeLatest('ROLL_DICE', rollDice);
}

export default dicerollSaga;