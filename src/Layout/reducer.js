import { SET_MAIN } from './actionTypes';

// reducers
const reducerSetMain = (state, action) => {
    return ({
        ...state,
        ...action.payload
    });
};

const handles = {
    [SET_MAIN]: reducerSetMain,
};

const initState = {
    documentTitle: "电商手机网",
    logoNav: true,
    bottomNav: false,
    leftNav: false,
    isMobile: false
};

export default function (state = initState, action) {
    const handle = handles[action.type];
    return handle ? handle(state, action) : state;
}
