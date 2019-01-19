
// actionTypes
import { GET_PRODUCT, SET_PRODUCT_NUM } from './actionTypes';


// syncAction
export const getProduct = (data) => {
    return ({
        type: GET_PRODUCT,
        payload: data
    });
};

export const setProductNum = (data) => {
    return ({
        type: SET_PRODUCT_NUM,
        payload: data
    });
};


// asyncAction
// function* asyncGetListData(){}
