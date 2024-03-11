const characterListReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CHARACTER_LIST':
            return action.payload;
        case 'CLEAR_CHARACTER_LIST':
            return [];
        default:
            return state;
    }
}

export default characterListReducer;