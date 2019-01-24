import { SET_MAIN, SET_USER_STATUS } from './actionTypes';

// reducers
const reducerSetMain = (state, action) => {
    return ({
        ...state,
        ...action.payload
    });
};

const reducerSetUserStatus = (state, action) => {
    const userStatus = { ...state.userStatus, ...action.payload };
    window.sessionStorage.setItem("userStatus", JSON.stringify(userStatus));
    return ({
        ...state,
        userStatus
    });
};

const handles = {
    [SET_MAIN]: reducerSetMain,
    [SET_USER_STATUS]: reducerSetUserStatus,
};

const initState = {
    documentTitle: "电商手机网",
    logoNav: true,
    bottomNav: false,
    leftNav: false,
    isMobile: false,
    userStatus: {
        userName:"",
        password:"",
        isLogin: false,
        token: ""
    }
};

export default function (state = initState, action) {
    const handle = handles[action.type];
    return handle ? handle(state, action) : state;
}
