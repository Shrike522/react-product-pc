// actionTypes
import { SET_KEY_WORDS } from './actionTypes';


// syncAction

export const setKeywords = (data) => {
    return ({
        type: SET_KEY_WORDS,
        payload: data
    });
};


// asyncAction
// function* asyncGetListData(){}
