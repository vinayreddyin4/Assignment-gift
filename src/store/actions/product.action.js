import { PRODUCT_CONST } from "../actions.constants/product.action.constant";
import Products from "../../products/products";

const initializeProducts = () => dispatch => {
    dispatch({ type: PRODUCT_CONST.INIT, data: Products })
};

const filterProducts = () => (dispatch, getState) => {
    const appliedFilters = getState().form || {};
    let filteredProducts = Products;
    for (let key in appliedFilters) {
        if (key === 'price') {
            filteredProducts = filteredProducts.filter(product =>
              product[key] >= appliedFilters[key][0] && product[key] <= appliedFilters[key][1]
            );
        } else if(appliedFilters[key]) {
            filteredProducts = filteredProducts.filter(product => product[key] === appliedFilters[key]);
        }
    }
    
    dispatch({ type: PRODUCT_CONST.FILTERED_PRODUCTS, data: filteredProducts })
};

export {
    initializeProducts,
    filterProducts
}