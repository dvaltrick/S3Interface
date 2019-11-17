const initialState = {
    fetched: {},
    selected: {},
    parent: [],
    directory: "/"
};

export const defaultReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FETCHED':
            return {
                ...state,
                fetched: action.fetched
            };
        case 'SET_SELECTED':
            return {
                ...state,
                selected: action.selected
            };
        case 'SET_PARENT':
            return {
                ...state,
                parent: action.parent
            };          
        default:
            return state;
    }
};