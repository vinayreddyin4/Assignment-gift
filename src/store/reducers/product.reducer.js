import { PRODUCT_CONST } from "../actions.constants/product.action.constant";

const initialState = {
    products: [],
    loader: false,
};


export const productReducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case PRODUCT_CONST.INIT:
            return { ...state, products: action.data };
        
        case PRODUCT_CONST.LOADER:
            return { ...state, loader: action.data };
        
        case PRODUCT_CONST.FILTERED_PRODUCTS:
            return { ...state, products: action.data };
        
        default:
            return state;
    }
};