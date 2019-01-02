// actionTypes
import {SET_MAIN, SET_USER_STATUS} from './actionTypes';

import { makeRandomStr } from '../utils/makeRandom';

// syncAction
export const setMain = (data) => {
    if (data.documentTitle) {
        document.title = data.documentTitle;
    }
    if ("userStatus" in data) delete data.userStatus;
    return ({
        type: SET_MAIN,
        payload: data
    });
};

export const setUserStatus = (data) => {
    const payload = {
        userName: data.userName,
        password: data.password,
        isLogin: true,
        token: makeRandomStr(12)
    };
    return ({
        type: SET_USER_STATUS,
        payload
    });
};

// asyncAction