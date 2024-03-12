const characterReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CLEAR_CHARACTER':
            return {};
        default:
            return state;
    }
}

export default characterReducer;