import { put, takeLatest } from 'redux-saga/effects';

function* rollDice(action) {
    const dice = action.payload.dice;
    const bonus = action.payload.bonus;
    const label = action.payload.label;
    const diceArray = [];
    for (let i = 0; i < dice; i++) {
        let randomRoll = Math.floor(Math.random() * 6) + 1;
        diceArray.push(randomRoll);
    }
    let sum = 0;
    diceArray.forEach(num => { sum += num });
    sum += bonus;
    let result = { diceArray, bonus, sum, label };
    yield put({type: 'SET_DICE_ROLL', payload: result});
}

function* dicerollSaga() {
    yield takeLatest('ROLL_DICE', rollDice);
}

export default dicerollSaga;