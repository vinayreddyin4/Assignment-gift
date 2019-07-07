import { combineReducers } from 'redux';
import { formReducer } from "./reducers/form.reducer";
import { productReducer } from "./reducers/product.reducer";

export const rootReducer = combineReducers({
    form: formReducer,
    product: productReducer
});