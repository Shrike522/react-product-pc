import { ADD_MARKET, SUB_MARKET, DEL_MARKET, SET_MARKET_NUM } from './actionTypes';

const numReg = /^\d*$/;

// reducer
export const reducerAddMarket = (state, action) => {
    let { marketList } = state, { payload } = action, productId, productNum = 1;

    // payload :
    // { product:object, productNum:number } marketList中创建新商品
    // { id:number, productNum:number } marketList中增加已有商品数量
    // id:number marketList中增加已有商品数量1

    if (typeof payload === "object") {
        if (numReg.test(payload.productNum)) productNum = parseInt(payload.productNum);
        if (payload.hasOwnProperty("product")) {
            if (productNum > 100) productNum = 100;
            if (productNum < 1) productNum = 1;
            marketList.push({ product: payload.product, productNum });
        }
        if (payload.hasOwnProperty("id") && numReg.test(payload.id)) {
            productId = payload.id;
        }
        if (Array.isArray(payload)) marketList = [ ...marketList, ...payload ];
    }
    if ((typeof payload === "string" || typeof payload === "number") && numReg.test(payload)) {
        productId = payload;
    }
    if (productId !== undefined) {
        const foundIndex = marketList.findIndex((item) => {
            return item.product.id === productId;
        });
        productNum += parseInt(marketList[foundIndex].productNum);
        if (productNum > 100) productNum = 100;
        if (productNum < 1) productNum = 1;
        marketList[foundIndex].productNum = productNum;
    }
    window.sessionStorage.setItem("marketList", JSON.stringify(marketList));
    return ({
        ...state,
        marketList,
    });
};

export const reducerSubMarket = (state, action) => {
    let { marketList } = state;
    const foundIndex = marketList.findIndex((item) => {
        return item.product.id === action.payload;
    });
    let productNum = parseInt(marketList[foundIndex].productNum);
    if (productNum > 1) marketList[foundIndex].productNum -= 1;
    return ({
        ...state,
        marketList
    });
};

export const reducerDelMarket = (state, action) => {
    let { marketList } = state;
    const foundIndex = marketList.findIndex((item) => {
        return item.product.id === action.payload;
    });
    if (foundIndex > -1) marketList.splice(foundIndex, 1);
    return ({
        ...state,
        marketList
    });
};

export const reducerSetMarketNum = (state, action) => {
    let { marketList } = state;
    if (numReg.test(action.payload.productNum)) {
        const foundIndex = marketList.findIndex((item) => {
            return item.product.id === action.payload.id;
        });
        let productNum = parseInt(action.payload.productNum);
        if (productNum < 1) productNum = 1;
        if (productNum > 100) productNum = 100;
        marketList[foundIndex].productNum = productNum;
    }
    return ({
        ...state,
        marketList
    });
};

const handleReducers = {
    [ADD_MARKET]: reducerAddMarket,
    [SUB_MARKET]: reducerSubMarket,
    [DEL_MARKET]: reducerDelMarket,
    [SET_MARKET_NUM]: reducerSetMarketNum
};

const initState = {
    marketList: [] //[ { product: object, productNum: number } ]
};

export default function (state = initState, action) {
    const handle = handleReducers[action.type];
    return handle ? handle(state, action) : state;
}
