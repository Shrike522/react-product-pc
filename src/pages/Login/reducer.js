import { SET_NAME, SET_PASSWORD, SET_NEW_NAME, SET_NEW_PASSWORD, SET_CONFIRM_DIRTY, SET_CODE, GET_CODE, GET_TAB_PANE, SET_USERS } from './actionTypes';

import { users } from '../../assets/data/user';

// reducer
export const reducerSetName = (state, action) => {
    return ({
        ...state,
        name: action.payload
    });
};

export const reducerSetPassword = (state, action) => {
    return ({
        ...state,
        password: action.payload
    });
};

export const reducerSetNewName = (state, action) => {
    return ({
        ...state,
        newName: action.payload
    });
};

export const reducerSetNewPassword = (state, action) => {
    return ({
        ...state,
        newPassword: action.payload
    });
};

export const reducerSetConfirmDirty = (state, action) => {
    return ({
        ...state,
        confirmDirty: action.payload
    });
};

export const reducerSetCode = (state, action) => {
    return ({
        ...state,
        inputCode: action.payload
    });
};

export const reducerGetCode = (state, action) => {
    return ({
        ...state,
        randomCode: action.payload
    });
};

export const reducerGetTabPane = (state, action) => {
    return ({
        ...state,
        tab: action.payload
    });
};

export const reducerSetUsers = (state, action) => {
    return ({
        ...state,
        users: [
            ...state.users,
            action.payload
        ]
    });
};

const handleReducers = {
    [SET_NAME]: reducerSetName,
    [SET_PASSWORD]: reducerSetPassword,
    [SET_NEW_NAME]: reducerSetNewName,
    [SET_NEW_PASSWORD]: reducerSetNewPassword,
    [SET_CONFIRM_DIRTY]: reducerSetConfirmDirty,
    [SET_CODE]: reducerSetCode,
    [GET_CODE]: reducerGetCode,
    [GET_TAB_PANE]: reducerGetTabPane,
    [SET_USERS]: reducerSetUsers
};

const initState = {
    name: "",
    password: "",
    newName: "",
    newPassword: "",
    confirmDirty: false,
    inputCode: "",
    randomCode: "",
    tab: "signUp",
    users
};

export default function (state = initState, action) {
    const handle = handleReducers[action.type];
    return handle ? handle(state, action) : state;
}
