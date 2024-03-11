const selectionReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CHARACTERS':
            return action.payload;
        default:
            return state;
    }
}

export default selectionReducer;