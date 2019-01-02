import { makeRandomStr } from '../../utils/makeRandom';

// actionTypes
import { SET_NAME, SET_PASSWORD, SET_NEW_NAME, SET_NEW_PASSWORD, SET_CONFIRM_DIRTY, SET_CODE, GET_CODE, GET_TAB_PANE, SET_USERS } from './actionTypes';


// syncAction
export const setName = (data) => {
    return ({
        type: SET_NAME,
        payload: data
    });
};

export const setPassword = (data) => {
    return ({
        type: SET_PASSWORD,
        payload: data
    });
};

export const setNewName = (data) => {
    return ({
        type: SET_NEW_NAME,
        payload: data
    });
};

export const setNewPassword = (data) => {
    return ({
        type: SET_NEW_PASSWORD,
        payload: data
    });
};

export const setConfirmDirty  = (data) => {
    return ({
        type: SET_CONFIRM_DIRTY,
        payload: data
    });
};

export const setCord = (data) => {
    return ({
        type: SET_CODE,
        payload: data
    });
};

export const getCord = () => {
    const codeStr = makeRandomStr(6);
    alert("验证码是: " + codeStr);
    return ({
        type: GET_CODE,
        payload: codeStr
    });
};

export const getTabPane = (data) => {
    return ({
        type: GET_TAB_PANE,
        payload: data
    });
};

export const setUsers = (data) => {
    return ({
        type: SET_USERS,
        payload: data
    });
};


// asyncAction
// function* asyncGetListData(){}
