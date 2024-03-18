const diceRollReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_DICE_ROLL':
            return action.payload;
        default:
            return state;
    }
}

export default diceRollReducer;