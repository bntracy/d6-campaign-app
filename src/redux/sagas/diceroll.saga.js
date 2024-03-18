import { put, takeLatest } from 'redux-saga/effects';

function* rollDice(action) {
    const dice = action.payload.dice;
    const bonus = action.payload.bonus;
    const label = action.payload.label;
    const diceArray = [];
    let wildDieFlag = false;
    // roll wild die
    let wildDieRoll = Math.floor(Math.random() * 6) + 1;
    if (wildDieRoll === 1) {
        wildDieFlag = true; // if it is one, flag it
    }
    while (wildDieRoll === 6) { // if it is 6, add 6 to the array and roll again. Repeat if necessary until you don't get a 6
        diceArray.push(wildDieRoll);
        wildDieRoll = Math.floor(Math.random() * 6) + 1;
    }
    diceArray.push(wildDieRoll);
    // roll nonwild dice
    for (let i = 0; i < dice - 1; i++) {
        let randomRoll = Math.floor(Math.random() * 6) + 1;
        diceArray.push(randomRoll);
    }
    let sum = 0;
    diceArray.forEach(num => { sum += num });
    sum += bonus;
    let result = { diceArray, bonus, sum, label, wildDieFlag };
    yield put({type: 'SET_DICE_ROLL', payload: result});
}

function* dicerollSaga() {
    yield takeLatest('ROLL_DICE', rollDice);
}

export default dicerollSaga;