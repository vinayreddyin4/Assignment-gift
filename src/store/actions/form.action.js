import { CHANGE, RESET_FILTERS } from "../actions.constants/form.action.constant";


const change = (name, value) => dispatch => {
    dispatch({ type: CHANGE, name, value })
};

const resetFilters = () => ({ type: RESET_FILTERS });

export {
    change,
    resetFilters
}