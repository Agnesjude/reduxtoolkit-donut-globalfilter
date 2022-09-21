import {combineReducers} from "redux";
import {productReducer} from "./ProductReducer";
import {selectedProductsReducer} from "./ProductReducer";

const reducers = combineReducers ({
    allProducts: productReducer,
    product: selectedProductsReducer,
    
});

export default reducers;