// actionTypes
import { ADD_MARKET, SUB_MARKET, DEL_MARKET, SET_MARKET_NUM } from './actionTypes';


// syncAction

export const addMarket = (data) => {
    return ({
        type: ADD_MARKET,
        payload: data
    });
};

export const subMarket = (data) => {
    return ({
        type: SUB_MARKET,
        payload: data
    });
};

export const delMarket = (data) => {
    return ({
        type: DEL_MARKET,
        payload: data
    });
};

export const setMarketNum = (data) => {
    return ({
        type: SET_MARKET_NUM,
        payload: data
    });
};


// asyncAction
// function* asyncGetListData(){}
