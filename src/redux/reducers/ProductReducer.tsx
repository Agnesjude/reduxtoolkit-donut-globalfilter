import {ActionTypes} from "../contants/action-types";

const initialState = {
    products :[
    ]
}

export const productReducer = (state :any = initialState, {type,payload} : {type:any,payload:any} ) => {
    switch(type){
        case ActionTypes.SET_PRODUCTS:
        return {...state,products:payload}; 
        default:
            return state;  
    }
};

export const selectedProductsReducer = (state = {}, { type, payload } : {type:any,payload:any} ) => {
    console.log(type);
    switch (type) {
      case ActionTypes.SELECTED_PRODUCT:
        return { ...state, ...payload };
      case ActionTypes.REMOVE_SELECTED_PRODUCT:
        return {};
      default:
        return state;
    }
  };
  