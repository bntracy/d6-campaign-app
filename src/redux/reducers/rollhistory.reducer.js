const rollHistoryReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DICE_ROLL':
            return [...state, action.payload];
        case 'CLEAR_ROLLS':
            return [];
        default:
            return state;
    }
}

export default rollHistoryReducer;