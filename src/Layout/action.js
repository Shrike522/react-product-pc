// actionTypes
import { SET_MAIN } from './actionTypes';

// syncAction
export const setMain = (data) => {
    if (data.documentTitle) {
        document.title = data.documentTitle;
    }
    return ({
        type: SET_MAIN,
        payload: data
    });
};

// asyncAction