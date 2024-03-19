const rollHistoryReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DICE_ROLL':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default rollHistoryReducer;