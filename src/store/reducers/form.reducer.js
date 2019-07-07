import { CHANGE, RESET_FILTERS } from "../actions.constants/form.action.constant";

/**
 * can nested objects for error/dirty/touched/value
 * but for current scenario covering value only
 * @type {{}}
 */
const initialState = {
    price: [0, 1500],
    category: '',
    gender: '',
};


export const formReducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case CHANGE:
            return { ...state, [action.name]: action.value };
            
        case RESET_FILTERS:
            return { ...state, ...initialState };
            
        default:
            return state;
    }
};