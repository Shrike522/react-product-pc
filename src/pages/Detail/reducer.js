import { GET_PRODUCT, SET_PRODUCT_NUM } from './actionTypes';
const numReg = /\d*/;
// reducer

export const reducerGetProduct = (state, action) => {
    return ({
        ...state,
        product: action.payload
    });

};

export const reducerSetProductNum = (state, action) => {
    let { productNum } = state;
    productNum = parseInt(productNum);
    switch (action.payload) {
        case "add":
            productNum += 1;
            break;
        case "sub":
            productNum -= 1;
            break;
    }
    if (numReg.test(action.payload)) productNum = parseInt(action.payload);
    if (productNum > 100) productNum = 100;
    if (productNum < 1) productNum = 1;
    return ({
        ...state,
        productNum
    });
};

const handleReducers = {
    [GET_PRODUCT]: reducerGetProduct,
    [SET_PRODUCT_NUM]: reducerSetProductNum
};

const initState = {
    product: null,
    productNum: 1
};

export default function (state = initState, action) {
    const handle = handleReducers[action.type];
    return handle ? handle(state, action) : state;
}
