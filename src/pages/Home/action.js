// actionTypes
import { GET_NAME, GET_USER } from './actionTypes';


// syncAction
export const getName = (data) => {
    return ({
        type: GET_NAME,
        payload: data
    });
};

export const getUser = (data) => {
    return ({
        type: GET_USER,
        payload: data
    });
};


// asyncAction
// function* asyncGetListData(){}
